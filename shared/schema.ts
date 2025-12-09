import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Enums
export const subscriptionTierEnum = pgEnum('subscription_tier', ['free', 'premium']);
export const skillLevelEnum = pgEnum('skill_level', ['dev', 'no_code', 'non_technical']);
export const preferenceEnum = pgEnum('preference', ['b2b', 'b2c', 'either']);
export const ideaStatusEnum = pgEnum('idea_status', ['pending', 'validating', 'validated', 'failed']);
export const demandBandEnum = pgEnum('demand_band', ['high', 'medium', 'low']);
export const trendLabelEnum = pgEnum('trend_label', ['rising', 'flat', 'declining']);

// Users table (for auth)
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
});

// User Profiles table
export const userProfiles = pgTable("user_profiles", {
  id: varchar("id").primaryKey().references(() => users.id, { onDelete: 'cascade' }),
  skillLevel: text("skill_level"),
  preference: text("preference"),
  marketTags: text("market_tags").array(),
  subscriptionTier: text("subscription_tier").default('free'),
  stripeCustomerId: text("stripe_customer_id"),
  stripeSubscriptionId: text("stripe_subscription_id"),
  ideasGeneratedThisMonth: integer("ideas_generated_this_month").default(0),
  plansGeneratedThisMonth: integer("plans_generated_this_month").default(0),
  detailViewsThisMonth: integer("detail_views_this_month").default(0),
  usageResetAt: timestamp("usage_reset_at").defaultNow(),
  onboardingCompleted: boolean("onboarding_completed").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

// Ideas table
export const ideas = pgTable("ideas", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id, { onDelete: 'cascade' }),
  title: text("title").notNull(),
  oneLiner: text("one_liner"),
  problem: text("problem"),
  targetCustomer: text("target_customer"),
  solution: text("solution"),
  monetization: text("monetization"),
  whyNow: text("why_now"),
  revenueImpact: text("revenue_impact"),
  marketSize: text("market_size"),
  competitionLevel: text("competition_level"),
  category: text("category"),
  businessType: text("business_type"),
  priceRange: text("price_range"),
  tags: text("tags").array(),
  keywords: text("keywords").array(),
  status: text("status").default('pending'),
  demandScore: integer("demand_score"),
  demandBand: text("demand_band"),
  trendLabel: text("trend_label"),
  validationSummary: text("validation_summary"),
  validatedAt: timestamp("validated_at"),
  isPublic: boolean("is_public").default(false),
  isSaved: boolean("is_saved").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Landing Pages table (stores structured JSON content for idea landing pages)
export const landingPages = pgTable("landing_pages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  ideaId: varchar("idea_id").references(() => ideas.id, { onDelete: 'cascade' }),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(), // JSON string of LandingPageContent
  isPublished: boolean("is_published").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Execution Plans table
export const executionPlans = pgTable("execution_plans", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  ideaId: varchar("idea_id").references(() => ideas.id, { onDelete: 'cascade' }),
  userId: varchar("user_id").references(() => users.id, { onDelete: 'cascade' }),
  elevatorPitch: text("elevator_pitch"),
  persona: text("persona"),
  userStories: text("user_stories").array(),
  recommendedStack: text("recommended_stack"),
  launchChecklist: text("launch_checklist").array(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Relations
export const usersRelations = relations(users, ({ one, many }) => ({
  profile: one(userProfiles, {
    fields: [users.id],
    references: [userProfiles.id],
  }),
  ideas: many(ideas),
  executionPlans: many(executionPlans),
}));

export const userProfilesRelations = relations(userProfiles, ({ one }) => ({
  user: one(users, {
    fields: [userProfiles.id],
    references: [users.id],
  }),
}));

export const ideasRelations = relations(ideas, ({ one, many }) => ({
  user: one(users, {
    fields: [ideas.userId],
    references: [users.id],
  }),
  executionPlans: many(executionPlans),
  landingPage: one(landingPages, {
    fields: [ideas.id],
    references: [landingPages.ideaId],
  }),
}));

export const landingPagesRelations = relations(landingPages, ({ one }) => ({
  idea: one(ideas, {
    fields: [landingPages.ideaId],
    references: [ideas.id],
  }),
}));

export const executionPlansRelations = relations(executionPlans, ({ one }) => ({
  idea: one(ideas, {
    fields: [executionPlans.ideaId],
    references: [ideas.id],
  }),
  user: one(users, {
    fields: [executionPlans.userId],
    references: [users.id],
  }),
}));

// Insert Schemas
export const insertUserSchema = createInsertSchema(users).omit({ id: true });
export const insertUserProfileSchema = createInsertSchema(userProfiles).omit({ createdAt: true });
export const insertIdeaSchema = createInsertSchema(ideas).omit({ id: true, createdAt: true, updatedAt: true });
export const insertExecutionPlanSchema = createInsertSchema(executionPlans).omit({ id: true, createdAt: true });
export const insertLandingPageSchema = createInsertSchema(landingPages).omit({ id: true, createdAt: true, updatedAt: true });

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertUserProfile = z.infer<typeof insertUserProfileSchema>;
export type UserProfile = typeof userProfiles.$inferSelect;
export type InsertIdea = z.infer<typeof insertIdeaSchema>;
export type Idea = typeof ideas.$inferSelect;
export type InsertExecutionPlan = z.infer<typeof insertExecutionPlanSchema>;
export type ExecutionPlan = typeof executionPlans.$inferSelect;
export type InsertLandingPage = z.infer<typeof insertLandingPageSchema>;
export type LandingPage = typeof landingPages.$inferSelect;

// Landing Page Content Types (JSON structure for landing page content)
export interface LandingPageMeta {
  title: string;
  description: string;
  og_image_concept: string;
}

export interface LandingPageCTA {
  text: string;
  subtext?: string;
  url?: string;
}

export interface LandingPageHeroVisual {
  type: 'product_screenshot' | 'illustration' | 'video' | 'animation';
  description: string;
}

export interface LandingPageHero {
  headline: string;
  subheadline: string;
  cta_primary: LandingPageCTA;
  cta_secondary?: LandingPageCTA;
  social_proof_snippet: string;
  hero_visual: LandingPageHeroVisual;
}

export interface LandingPagePainPoint {
  icon: string;
  title: string;
  description: string;
}

export interface LandingPageStatCallout {
  number: string;
  label: string;
  source?: string;
}

export interface LandingPageProblemSection {
  section_id: string;
  eyebrow: string;
  headline: string;
  description: string;
  pain_points: LandingPagePainPoint[];
  stat_callout?: LandingPageStatCallout;
}

export interface LandingPageFeature {
  icon: string;
  title: string;
  description: string;
}

export interface LandingPageVisual {
  type: 'screenshot' | 'diagram' | 'video';
  description: string;
}

export interface LandingPageSolutionSection {
  section_id: string;
  eyebrow: string;
  headline: string;
  description: string;
  features: LandingPageFeature[];
  visual?: LandingPageVisual;
}

export interface LandingPageStep {
  number: number;
  title: string;
  description: string;
  visual_description?: string;
}

export interface LandingPageHowItWorks {
  section_id: string;
  eyebrow: string;
  headline: string;
  steps: LandingPageStep[];
}

export interface LandingPageTestimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar_description?: string;
  result?: string;
}

export interface LandingPageStat {
  number: string;
  label: string;
  context?: string;
}

export interface LandingPageLogos {
  headline?: string;
  companies: string[];
}

export interface LandingPageTrustBadge {
  icon: string;
  text: string;
}

export interface LandingPageSocialProof {
  section_id: string;
  eyebrow: string;
  headline: string;
  testimonials: LandingPageTestimonial[];
  stats: LandingPageStat[];
  logos?: LandingPageLogos;
  trust_badges?: LandingPageTrustBadge[];
}

export interface LandingPagePlan {
  name: string;
  price: string;
  price_detail?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  badge?: string | null;
}

export interface LandingPageGuarantee {
  headline: string;
  description: string;
}

export interface LandingPagePricing {
  section_id: string;
  eyebrow: string;
  headline: string;
  subheadline?: string;
  plans: LandingPagePlan[];
  guarantee?: LandingPageGuarantee;
  pricing_note?: string;
}

export interface LandingPageFAQQuestion {
  question: string;
  answer: string;
}

export interface LandingPageFAQ {
  section_id: string;
  headline: string;
  questions: LandingPageFAQQuestion[];
}

export interface LandingPageFinalCTA {
  section_id: string;
  headline: string;
  subheadline: string;
  cta_text: string;
  trust_element?: string;
}

export interface LandingPageFooterLinks {
  product?: string[];
  company?: string[];
  legal?: string[];
  support?: string[];
}

export interface LandingPageNewsletter {
  headline: string;
  placeholder: string;
  cta: string;
}

export interface LandingPageFooter {
  tagline: string;
  links?: LandingPageFooterLinks;
  social?: string[];
  newsletter?: LandingPageNewsletter;
}

export interface LandingPageContent {
  meta: LandingPageMeta;
  hero: LandingPageHero;
  problem_section: LandingPageProblemSection;
  solution_section: LandingPageSolutionSection;
  how_it_works: LandingPageHowItWorks;
  social_proof: LandingPageSocialProof;
  pricing: LandingPagePricing;
  faq: LandingPageFAQ;
  final_cta: LandingPageFinalCTA;
  footer: LandingPageFooter;
}

// Additional validation schemas
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const onboardingSchema = z.object({
  skillLevel: z.enum(['dev', 'no_code', 'non_technical']),
  preference: z.enum(['b2b', 'b2c', 'either']),
  marketTags: z.array(z.string()).min(1, "Select at least one market"),
});

export const generateIdeasSchema = z.object({
  focus: z.string().min(5, "Please provide more detail about your focus area"),
  count: z.number().min(1).max(10).default(5),
});

// Access tier limits
export const ACCESS_TIERS = {
  anonymous: {
    libraryLimit: 20,
    detailViews: 0,
    ideasPerMonth: 0,
    plansPerMonth: 0,
  },
  free: {
    libraryLimit: 100,
    detailViews: 5,
    ideasPerMonth: 30,
    plansPerMonth: 2,
  },
  premium: {
    libraryLimit: Infinity,
    detailViews: Infinity,
    ideasPerMonth: Infinity,
    plansPerMonth: Infinity,
  },
} as const;

export const PREMIUM_PRICE = 29;
