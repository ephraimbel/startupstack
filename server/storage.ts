import { 
  type User, type InsertUser, 
  type UserProfile, type InsertUserProfile,
  type Idea, type InsertIdea,
  type ExecutionPlan, type InsertExecutionPlan,
  type LandingPage, type InsertLandingPage,
  users, userProfiles, ideas, executionPlans, landingPages
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and, or, ilike, inArray, sql } from "drizzle-orm";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // User Profiles
  getUserProfile(userId: string): Promise<UserProfile | undefined>;
  createUserProfile(profile: InsertUserProfile): Promise<UserProfile>;
  updateUserProfile(userId: string, updates: Partial<InsertUserProfile>): Promise<UserProfile | undefined>;
  incrementUsage(userId: string, field: 'ideasGeneratedThisMonth' | 'plansGeneratedThisMonth' | 'detailViewsThisMonth'): Promise<void>;
  resetMonthlyUsage(userId: string): Promise<void>;
  
  // Ideas
  getIdea(id: string): Promise<Idea | undefined>;
  getPublicIdeas(options: {
    limit?: number;
    offset?: number;
    category?: string[];
    type?: string[];
    demandBand?: string[];
    trend?: string[];
    competition?: string[];
    priceRange?: string[];
    query?: string;
    sortBy?: 'demand_score' | 'trending' | 'competition_asc' | 'newest' | 'alphabetical';
    sortOrder?: 'asc' | 'desc';
  }): Promise<{ ideas: Idea[]; total: number }>;
  getUserIdeas(userId: string): Promise<Idea[]>;
  getSavedIdeas(userId: string): Promise<Idea[]>;
  createIdea(idea: InsertIdea): Promise<Idea>;
  createIdeas(ideas: InsertIdea[]): Promise<Idea[]>;
  updateIdea(id: string, updates: Partial<InsertIdea>): Promise<Idea | undefined>;
  saveIdea(ideaId: string, userId: string): Promise<Idea | undefined>;
  
  // Execution Plans
  getExecutionPlan(ideaId: string): Promise<ExecutionPlan | undefined>;
  createExecutionPlan(plan: InsertExecutionPlan): Promise<ExecutionPlan>;
  
  // Landing Pages
  getLandingPageBySlug(slug: string): Promise<LandingPage | undefined>;
  getLandingPageByIdeaId(ideaId: string): Promise<LandingPage | undefined>;
  getLandingPageSlugsForIdeas(ideaIds: string[]): Promise<Map<string, string>>;
  createLandingPage(page: InsertLandingPage): Promise<LandingPage>;
}

export class DatabaseStorage implements IStorage {
  // Users
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // User Profiles
  async getUserProfile(userId: string): Promise<UserProfile | undefined> {
    const [profile] = await db.select().from(userProfiles).where(eq(userProfiles.id, userId));
    return profile;
  }

  async createUserProfile(profile: InsertUserProfile): Promise<UserProfile> {
    const [created] = await db.insert(userProfiles).values(profile).returning();
    return created;
  }

  async updateUserProfile(userId: string, updates: Partial<InsertUserProfile>): Promise<UserProfile | undefined> {
    const [updated] = await db.update(userProfiles)
      .set(updates)
      .where(eq(userProfiles.id, userId))
      .returning();
    return updated;
  }

  async incrementUsage(userId: string, field: 'ideasGeneratedThisMonth' | 'plansGeneratedThisMonth' | 'detailViewsThisMonth'): Promise<void> {
    const profile = await this.getUserProfile(userId);
    if (!profile) return;
    
    const currentValue = profile[field] || 0;
    await db.update(userProfiles)
      .set({ [field]: currentValue + 1 })
      .where(eq(userProfiles.id, userId));
  }

  async resetMonthlyUsage(userId: string): Promise<void> {
    await db.update(userProfiles)
      .set({
        ideasGeneratedThisMonth: 0,
        plansGeneratedThisMonth: 0,
        detailViewsThisMonth: 0,
        usageResetAt: new Date(),
      })
      .where(eq(userProfiles.id, userId));
  }

  // Ideas
  async getIdea(id: string): Promise<Idea | undefined> {
    const [idea] = await db.select().from(ideas).where(eq(ideas.id, id));
    return idea;
  }

  async getPublicIdeas(options: {
    limit?: number;
    offset?: number;
    category?: string[];
    type?: string[];
    demandBand?: string[];
    trend?: string[];
    competition?: string[];
    priceRange?: string[];
    query?: string;
    sortBy?: 'demand_score' | 'trending' | 'competition_asc' | 'newest' | 'alphabetical';
    sortOrder?: 'asc' | 'desc';
  }): Promise<{ ideas: Idea[]; total: number }> {
    const { 
      limit = 20, 
      offset = 0, 
      category, 
      type, 
      demandBand, 
      trend, 
      competition, 
      priceRange, 
      query: searchQuery, 
      sortBy = 'demand_score',
      sortOrder = 'desc'
    } = options;
    
    let conditions = [eq(ideas.isPublic, true)];
    
    if (demandBand && demandBand.length > 0) {
      conditions.push(inArray(ideas.demandBand, demandBand));
    }
    
    if (trend && trend.length > 0) {
      conditions.push(inArray(ideas.trendLabel, trend));
    }
    
    if (competition && competition.length > 0) {
      conditions.push(inArray(ideas.competitionLevel, competition));
    }
    
    if (searchQuery) {
      conditions.push(
        or(
          ilike(ideas.title, `%${searchQuery}%`),
          ilike(ideas.oneLiner, `%${searchQuery}%`),
          ilike(ideas.problem, `%${searchQuery}%`)
        )!
      );
    }

    const whereClause = conditions.length > 1 ? and(...conditions) : conditions[0];

    const [countResult] = await db
      .select({ count: sql<number>`count(*)::int` })
      .from(ideas)
      .where(whereClause);

    const results = await db.select()
      .from(ideas)
      .where(whereClause)
      .limit(limit * 5)
      .offset(0);
    
    let filteredResults = results;
    
    if (category && category.length > 0) {
      filteredResults = filteredResults.filter(idea => 
        idea.category && category.includes(idea.category)
      );
    }
    
    if (type && type.length > 0) {
      filteredResults = filteredResults.filter(idea => 
        idea.businessType && type.includes(idea.businessType)
      );
    }
    
    if (priceRange && priceRange.length > 0) {
      filteredResults = filteredResults.filter(idea => 
        idea.priceRange && priceRange.includes(idea.priceRange)
      );
    }
    
    filteredResults.sort((a, b) => {
      switch (sortBy) {
        case 'demand_score':
          return sortOrder === 'desc' 
            ? (b.demandScore || 0) - (a.demandScore || 0)
            : (a.demandScore || 0) - (b.demandScore || 0);
        case 'trending':
          const trendOrder = { rising: 3, flat: 2, declining: 1 };
          const aTrend = trendOrder[a.trendLabel as keyof typeof trendOrder] || 0;
          const bTrend = trendOrder[b.trendLabel as keyof typeof trendOrder] || 0;
          return sortOrder === 'desc' ? bTrend - aTrend : aTrend - bTrend;
        case 'competition_asc':
          const compOrder = { low: 1, medium: 2, high: 3 };
          const aComp = compOrder[a.competitionLevel as keyof typeof compOrder] || 2;
          const bComp = compOrder[b.competitionLevel as keyof typeof compOrder] || 2;
          return aComp - bComp;
        case 'newest':
          const aDate = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const bDate = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return sortOrder === 'desc' ? bDate - aDate : aDate - bDate;
        case 'alphabetical':
          return sortOrder === 'desc' 
            ? b.title.localeCompare(a.title)
            : a.title.localeCompare(b.title);
        default:
          return (b.demandScore || 0) - (a.demandScore || 0);
      }
    });
    
    const paginatedResults = filteredResults.slice(offset, offset + limit);

    return {
      ideas: paginatedResults,
      total: filteredResults.length,
    };
  }

  async getUserIdeas(userId: string): Promise<Idea[]> {
    return db.select()
      .from(ideas)
      .where(eq(ideas.userId, userId))
      .orderBy(desc(ideas.createdAt));
  }

  async getSavedIdeas(userId: string): Promise<Idea[]> {
    return db.select()
      .from(ideas)
      .where(and(eq(ideas.userId, userId), eq(ideas.isSaved, true)))
      .orderBy(desc(ideas.createdAt));
  }

  async createIdea(idea: InsertIdea): Promise<Idea> {
    const [created] = await db.insert(ideas).values(idea).returning();
    return created;
  }

  async createIdeas(ideaList: InsertIdea[]): Promise<Idea[]> {
    if (ideaList.length === 0) return [];
    const created = await db.insert(ideas).values(ideaList).returning();
    return created;
  }

  async updateIdea(id: string, updates: Partial<InsertIdea>): Promise<Idea | undefined> {
    const [updated] = await db.update(ideas)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(ideas.id, id))
      .returning();
    return updated;
  }

  async saveIdea(ideaId: string, userId: string): Promise<Idea | undefined> {
    // First check if user already has this idea saved
    const existing = await this.getIdea(ideaId);
    if (!existing) return undefined;

    // If it's the user's own idea, just toggle isSaved
    if (existing.userId === userId) {
      return this.updateIdea(ideaId, { isSaved: !existing.isSaved });
    }

    // If it's a public idea, create a copy for the user
    const [saved] = await db.insert(ideas).values({
      userId,
      title: existing.title,
      oneLiner: existing.oneLiner,
      problem: existing.problem,
      targetCustomer: existing.targetCustomer,
      solution: existing.solution,
      monetization: existing.monetization,
      tags: existing.tags,
      keywords: existing.keywords,
      status: existing.status,
      demandScore: existing.demandScore,
      demandBand: existing.demandBand,
      trendLabel: existing.trendLabel,
      validationSummary: existing.validationSummary,
      validatedAt: existing.validatedAt,
      isPublic: false,
      isSaved: true,
    }).returning();
    
    return saved;
  }

  // Execution Plans
  async getExecutionPlan(ideaId: string): Promise<ExecutionPlan | undefined> {
    const [plan] = await db.select()
      .from(executionPlans)
      .where(eq(executionPlans.ideaId, ideaId));
    return plan;
  }

  async createExecutionPlan(plan: InsertExecutionPlan): Promise<ExecutionPlan> {
    const [created] = await db.insert(executionPlans).values(plan).returning();
    return created;
  }

  // Landing Pages
  async getLandingPageBySlug(slug: string): Promise<LandingPage | undefined> {
    const [page] = await db.select().from(landingPages).where(eq(landingPages.slug, slug));
    return page;
  }

  async getLandingPageByIdeaId(ideaId: string): Promise<LandingPage | undefined> {
    const [page] = await db.select().from(landingPages).where(eq(landingPages.ideaId, ideaId));
    return page;
  }

  async getLandingPageSlugsForIdeas(ideaIds: string[]): Promise<Map<string, string>> {
    if (ideaIds.length === 0) return new Map();
    
    const pages = await db.select({ ideaId: landingPages.ideaId, slug: landingPages.slug })
      .from(landingPages)
      .where(and(
        inArray(landingPages.ideaId, ideaIds),
        eq(landingPages.isPublished, true)
      ));
    
    const map = new Map<string, string>();
    for (const page of pages) {
      if (page.ideaId) {
        map.set(page.ideaId, page.slug);
      }
    }
    return map;
  }

  async createLandingPage(page: InsertLandingPage): Promise<LandingPage> {
    const [created] = await db.insert(landingPages).values(page).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
