import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateIdeas, generateExecutionPlan, validateIdea } from "./openai";
import { 
  loginSchema, signupSchema, onboardingSchema, generateIdeasSchema,
  ACCESS_TIERS, type UserProfile
} from "@shared/schema";
import session from "express-session";
import { createHash } from "crypto";
import MemoryStore from "memorystore";

const MemoryStoreSession = MemoryStore(session);

// Extend express-session types
declare module "express-session" {
  interface SessionData {
    userId: string;
  }
}

// Simple password hashing
function hashPassword(password: string): string {
  return createHash("sha256").update(password).digest("hex");
}

// Middleware to check authentication
function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.session.userId) {
    return res.status(401).json({ error: "Authentication required" });
  }
  next();
}

// Check if user needs monthly usage reset
async function checkUsageReset(userId: string): Promise<void> {
  const profile = await storage.getUserProfile(userId);
  if (!profile?.usageResetAt) return;
  
  const now = new Date();
  const resetDate = new Date(profile.usageResetAt);
  const monthDiff = (now.getFullYear() - resetDate.getFullYear()) * 12 + 
                    (now.getMonth() - resetDate.getMonth());
  
  if (monthDiff >= 1) {
    await storage.resetMonthlyUsage(userId);
  }
}

// Get user's access tier limits
function getTierLimits(profile: UserProfile | null | undefined) {
  if (!profile) return ACCESS_TIERS.anonymous;
  return profile.subscriptionTier === 'premium' ? ACCESS_TIERS.premium : ACCESS_TIERS.free;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Session middleware
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "startupstack-secret-key",
      resave: false,
      saveUninitialized: false,
      store: new MemoryStoreSession({
        checkPeriod: 86400000, // 24 hours
      }),
      cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      },
    })
  );

  // ========== AUTH ROUTES ==========

  // Sign up
  app.post("/api/auth/signup", async (req: Request, res: Response) => {
    try {
      const parsed = signupSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.errors[0].message });
      }

      const { username, email, password } = parsed.data;

      // Check if email exists
      const existingEmail = await storage.getUserByEmail(email);
      if (existingEmail) {
        return res.status(400).json({ error: "Email already registered" });
      }

      // Check if username exists
      const existingUsername = await storage.getUserByUsername(username);
      if (existingUsername) {
        return res.status(400).json({ error: "Username already taken" });
      }

      // Create user
      const user = await storage.createUser({
        username,
        email,
        password: hashPassword(password),
      });

      // Create profile
      await storage.createUserProfile({
        id: user.id,
        subscriptionTier: 'free',
        onboardingCompleted: false,
      });

      // Set session
      req.session.userId = user.id;

      res.json({
        user: { id: user.id, username: user.username, email: user.email },
        needsOnboarding: true,
      });
    } catch (error) {
      console.error("Signup error:", error);
      res.status(500).json({ error: "Failed to create account" });
    }
  });

  // Login
  app.post("/api/auth/login", async (req: Request, res: Response) => {
    try {
      const parsed = loginSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.errors[0].message });
      }

      const { email, password } = parsed.data;

      const user = await storage.getUserByEmail(email);
      if (!user || user.password !== hashPassword(password)) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      req.session.userId = user.id;

      const profile = await storage.getUserProfile(user.id);

      res.json({
        user: { id: user.id, username: user.username, email: user.email },
        profile,
        needsOnboarding: !profile?.onboardingCompleted,
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ error: "Failed to login" });
    }
  });

  // Logout
  app.post("/api/auth/logout", (req: Request, res: Response) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to logout" });
      }
      res.json({ success: true });
    });
  });

  // Get current user
  app.get("/api/auth/me", async (req: Request, res: Response) => {
    try {
      if (!req.session.userId) {
        return res.json({ user: null, profile: null });
      }

      const user = await storage.getUser(req.session.userId);
      if (!user) {
        return res.json({ user: null, profile: null });
      }

      const profile = await storage.getUserProfile(user.id);
      
      // Check usage reset
      await checkUsageReset(user.id);

      res.json({
        user: { id: user.id, username: user.username, email: user.email },
        profile,
        needsOnboarding: !profile?.onboardingCompleted,
      });
    } catch (error) {
      console.error("Get me error:", error);
      res.status(500).json({ error: "Failed to get user" });
    }
  });

  // Complete onboarding
  app.post("/api/auth/onboarding", requireAuth, async (req: Request, res: Response) => {
    try {
      const parsed = onboardingSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.errors[0].message });
      }

      const { skillLevel, preference, marketTags } = parsed.data;

      const profile = await storage.updateUserProfile(req.session.userId!, {
        skillLevel,
        preference,
        marketTags,
        onboardingCompleted: true,
      });

      res.json({ profile });
    } catch (error) {
      console.error("Onboarding error:", error);
      res.status(500).json({ error: "Failed to complete onboarding" });
    }
  });

  // ========== PUBLIC IDEAS ROUTES ==========

  // Get saved ideas (must come before /api/ideas/:id to avoid "saved" being matched as an id)
  app.get("/api/ideas/saved", requireAuth, async (req: Request, res: Response) => {
    try {
      const ideas = await storage.getSavedIdeas(req.session.userId!);
      res.json({ ideas });
    } catch (error) {
      console.error("Get saved ideas error:", error);
      res.status(500).json({ error: "Failed to fetch saved ideas" });
    }
  });

  // Get public ideas library
  app.get("/api/public/ideas", async (req: Request, res: Response) => {
    try {
      const limit = parseInt(req.query.limit as string) || 20;
      const offset = parseInt(req.query.offset as string) || 0;
      const category = req.query.category ? (req.query.category as string).split(',') : undefined;
      const type = req.query.type ? (req.query.type as string).split(',') : undefined;
      const demandBand = req.query.demand ? (req.query.demand as string).split(',') : undefined;
      const trend = req.query.trend ? (req.query.trend as string).split(',') : undefined;
      const competition = req.query.competition ? (req.query.competition as string).split(',') : undefined;
      const priceRange = req.query.price ? (req.query.price as string).split(',') : undefined;
      const query = req.query.q as string | undefined;
      const sortBy = (req.query.sort as string) || 'demand_score';
      const sortOrder = (req.query.order as string) || 'desc';

      // Check tier limits for anonymous users
      let profile: UserProfile | null = null;
      if (req.session.userId) {
        profile = await storage.getUserProfile(req.session.userId) || null;
      }
      
      const tierLimits = getTierLimits(profile);
      const effectiveLimit = Math.min(limit, tierLimits.libraryLimit);

      const result = await storage.getPublicIdeas({
        limit: effectiveLimit,
        offset,
        category,
        type,
        demandBand,
        trend,
        competition,
        priceRange,
        query,
        sortBy: sortBy as 'demand_score' | 'trending' | 'competition_asc' | 'newest' | 'alphabetical',
        sortOrder: sortOrder as 'asc' | 'desc',
      });

      // Get landing page slugs for these ideas
      const ideaIds = result.ideas.map(idea => idea.id);
      const landingPageSlugs = await storage.getLandingPageSlugsForIdeas(ideaIds);
      
      // Convert Map to object for JSON response
      const landingPageSlugMap: Record<string, string> = {};
      landingPageSlugs.forEach((slug, ideaId) => {
        landingPageSlugMap[ideaId] = slug;
      });

      res.json({
        ideas: result.ideas,
        total: Math.min(result.total, tierLimits.libraryLimit),
        hasMore: offset + result.ideas.length < Math.min(result.total, tierLimits.libraryLimit),
        landingPageSlugs: landingPageSlugMap,
      });
    } catch (error) {
      console.error("Get public ideas error:", error);
      res.status(500).json({ error: "Failed to fetch ideas" });
    }
  });

  // Get single idea detail
  app.get("/api/ideas/:id", async (req: Request, res: Response) => {
    try {
      const idea = await storage.getIdea(req.params.id);
      if (!idea) {
        return res.status(404).json({ error: "Idea not found" });
      }

      // Check if user can view this idea
      let profile: UserProfile | null = null;
      if (req.session.userId) {
        profile = await storage.getUserProfile(req.session.userId) || null;
        await checkUsageReset(req.session.userId);
      }

      // If it's the user's own idea, they can view it
      const isOwner = idea.userId === req.session.userId;
      
      if (!isOwner && !idea.isPublic) {
        return res.status(403).json({ error: "Access denied" });
      }

      // Check detail view limits for logged-in non-owners only
      // Anonymous users can view public ideas (content is blurred on frontend)
      if (!isOwner && req.session.userId) {
        const tierLimits = getTierLimits(profile);
        const detailViewsUsed = profile?.detailViewsThisMonth || 0;
        
        if (tierLimits.detailViews !== Infinity && detailViewsUsed >= tierLimits.detailViews) {
          return res.status(403).json({ 
            error: "Detail view limit reached",
            limitReached: true,
            upgrade: true,
          });
        }

        // Increment view count for logged-in users
        await storage.incrementUsage(req.session.userId, 'detailViewsThisMonth');
      }

      // Get execution plan if exists
      const executionPlan = await storage.getExecutionPlan(idea.id);

      res.json({ idea, executionPlan });
    } catch (error) {
      console.error("Get idea error:", error);
      res.status(500).json({ error: "Failed to fetch idea" });
    }
  });

  // ========== AUTHENTICATED IDEAS ROUTES ==========

  // Get user's ideas
  app.get("/api/ideas", requireAuth, async (req: Request, res: Response) => {
    try {
      const ideas = await storage.getUserIdeas(req.session.userId!);
      res.json({ ideas });
    } catch (error) {
      console.error("Get user ideas error:", error);
      res.status(500).json({ error: "Failed to fetch ideas" });
    }
  });

  // Generate new ideas
  app.post("/api/ideas", requireAuth, async (req: Request, res: Response) => {
    try {
      const parsed = generateIdeasSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.errors[0].message });
      }

      const { focus, count } = parsed.data;
      const userId = req.session.userId!;

      // Check usage limits
      const profile = await storage.getUserProfile(userId);
      await checkUsageReset(userId);
      
      const tierLimits = getTierLimits(profile);
      const ideasGenerated = profile?.ideasGeneratedThisMonth || 0;

      if (tierLimits.ideasPerMonth !== Infinity && ideasGenerated >= tierLimits.ideasPerMonth) {
        return res.status(403).json({
          error: "Monthly idea generation limit reached",
          limitReached: true,
          upgrade: true,
        });
      }

      // Generate ideas with OpenAI
      const generatedIdeas = await generateIdeas(focus, profile || null, count);

      // Save ideas to database
      const savedIdeas = await storage.createIdeas(
        generatedIdeas.map(idea => ({
          userId,
          title: idea.title,
          oneLiner: idea.oneLiner,
          problem: idea.problem,
          targetCustomer: idea.targetCustomer,
          solution: idea.solution,
          monetization: idea.monetization,
          tags: idea.tags,
          keywords: idea.keywords,
          status: 'pending',
          isPublic: false,
          isSaved: false,
        }))
      );

      // Update usage count
      await storage.incrementUsage(userId, 'ideasGeneratedThisMonth');

      // Validate ideas in background
      for (const idea of savedIdeas) {
        validateIdea(idea).then(async (validation) => {
          await storage.updateIdea(idea.id, {
            demandScore: validation.demandScore,
            demandBand: validation.demandBand,
            trendLabel: validation.trendLabel,
            validationSummary: validation.validationSummary,
            status: 'validated',
            validatedAt: new Date(),
          });
        }).catch(console.error);
      }

      res.json({ ideas: savedIdeas });
    } catch (error) {
      console.error("Generate ideas error:", error);
      res.status(500).json({ error: "Failed to generate ideas" });
    }
  });

  // Save/unsave an idea
  app.post("/api/ideas/:id/save", requireAuth, async (req: Request, res: Response) => {
    try {
      const idea = await storage.saveIdea(req.params.id, req.session.userId!);
      if (!idea) {
        return res.status(404).json({ error: "Idea not found" });
      }
      res.json({ idea });
    } catch (error) {
      console.error("Save idea error:", error);
      res.status(500).json({ error: "Failed to save idea" });
    }
  });

  // Generate execution plan
  app.post("/api/ideas/:id/plan", requireAuth, async (req: Request, res: Response) => {
    try {
      const userId = req.session.userId!;
      const ideaId = req.params.id;

      // Check if idea exists and user can access it
      const idea = await storage.getIdea(ideaId);
      if (!idea) {
        return res.status(404).json({ error: "Idea not found" });
      }

      // Check if user owns the idea or it's public
      const isOwner = idea.userId === userId;
      if (!isOwner && !idea.isPublic) {
        return res.status(403).json({ error: "Access denied" });
      }

      // Check if plan already exists
      const existingPlan = await storage.getExecutionPlan(ideaId);
      if (existingPlan) {
        return res.json({ plan: existingPlan });
      }

      // Check usage limits
      const profile = await storage.getUserProfile(userId);
      await checkUsageReset(userId);
      
      const tierLimits = getTierLimits(profile);
      const plansGenerated = profile?.plansGeneratedThisMonth || 0;

      if (tierLimits.plansPerMonth !== Infinity && plansGenerated >= tierLimits.plansPerMonth) {
        return res.status(403).json({
          error: "Monthly execution plan limit reached",
          limitReached: true,
          upgrade: true,
        });
      }

      // Generate execution plan with OpenAI
      const generatedPlan = await generateExecutionPlan(idea, profile || null);

      // Save plan to database
      const savedPlan = await storage.createExecutionPlan({
        ideaId,
        userId,
        elevatorPitch: generatedPlan.elevatorPitch,
        persona: generatedPlan.persona,
        userStories: generatedPlan.userStories,
        recommendedStack: generatedPlan.recommendedStack,
        launchChecklist: generatedPlan.launchChecklist,
      });

      // Update usage count
      await storage.incrementUsage(userId, 'plansGeneratedThisMonth');

      res.json({ plan: savedPlan });
    } catch (error) {
      console.error("Generate plan error:", error);
      res.status(500).json({ error: "Failed to generate execution plan" });
    }
  });

  // ========== USER SETTINGS ==========

  // Get user settings/profile
  app.get("/api/settings", requireAuth, async (req: Request, res: Response) => {
    try {
      const user = await storage.getUser(req.session.userId!);
      const profile = await storage.getUserProfile(req.session.userId!);
      
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      res.json({
        user: { id: user.id, username: user.username, email: user.email },
        profile,
      });
    } catch (error) {
      console.error("Get settings error:", error);
      res.status(500).json({ error: "Failed to get settings" });
    }
  });

  // Update user profile
  app.patch("/api/settings/profile", requireAuth, async (req: Request, res: Response) => {
    try {
      const { skillLevel, preference, marketTags } = req.body;
      
      const profile = await storage.updateUserProfile(req.session.userId!, {
        skillLevel,
        preference,
        marketTags,
      });

      res.json({ profile });
    } catch (error) {
      console.error("Update settings error:", error);
      res.status(500).json({ error: "Failed to update settings" });
    }
  });

  // ========== LANDING PAGES ROUTES ==========

  // Get landing page by slug (public)
  app.get("/api/landing-pages/:slug", async (req: Request, res: Response) => {
    try {
      const landingPage = await storage.getLandingPageBySlug(req.params.slug);
      if (!landingPage) {
        return res.status(404).json({ error: "Landing page not found" });
      }

      // Only return published landing pages to non-authenticated users
      if (!landingPage.isPublished && !req.session.userId) {
        return res.status(404).json({ error: "Landing page not found" });
      }

      // Get associated idea for product name
      const idea = landingPage.ideaId ? await storage.getIdea(landingPage.ideaId) : null;

      res.json({ 
        landingPage,
        productName: idea?.title || 'Startup',
      });
    } catch (error) {
      console.error("Get landing page error:", error);
      res.status(500).json({ error: "Failed to fetch landing page" });
    }
  });

  return httpServer;
}
