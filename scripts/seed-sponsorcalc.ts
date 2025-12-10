import { db } from "../server/db";
import { ideas, landingPages, executionPlans } from "../shared/schema";
import { eq } from "drizzle-orm";
import { readFileSync } from "fs";
import { join } from "path";

// SponsorCalc - idea_051
const sponsorCalcIdea = {
  id: "sponsorcalc-001",
  userId: null,
  title: "SponsorCalc",
  oneLiner: "Know your worth. Get data-backed sponsorship rates in seconds.",
  problem: "Content creators leave money on the table because they don't know what to charge for sponsorships. Without industry data, they guess rates, get lowballed by brands, or price themselves out of deals. There's no standardized way to justify pricing, so negotiations become emotional instead of data-driven.",
  targetCustomer: "Content creators with 10K-500K followers across YouTube, TikTok, Instagram, or podcasts doing 2+ brand deals per month. Secondary: Talent agencies and influencer marketing managers who need rate benchmarking at scale.",
  solution: "Connect your social accounts. SponsorCalc analyzes engagement rates, audience demographics, niche CPMs, and comparable creator rates to generate professional rate cards with tiered pricing. Includes negotiation scripts, industry benchmarks, and media kit exports—everything you need to get paid what you're worth.",
  monetization: "$19/month Creator plan (3 platforms, PDF export, negotiation scripts), $49/month Pro (unlimited platforms, custom branding), $99/month Agency (10 creators, white-label). Free tier: 1 platform, basic rates.",
  tags: ["creator-tools", "monetization", "data-analytics", "pricing", "social-media"],
  keywords: null,
  status: "validated" as const,
  demandScore: 89,
  demandBand: "high" as const,
  trendLabel: "rising" as const,
  validationSummary: null,
  validatedAt: null,
  isPublic: true,
  isSaved: false,
  whyNow: "Creator economy hit 50M+ people, but pricing remains opaque. Brands have sophisticated data; creators have guesswork. New platforms (TikTok, podcasts) have no pricing norms. Creator burnout often comes from underpricing—they work more because they earn less per deal.",
  revenueImpact: "Creators increase rates by 20-40% using data-backed pricing. A single better-negotiated deal pays for years of subscription. Professional rate cards improve brand perception and deal close rates.",
  marketSize: "$21B",
  competitionLevel: "Medium",
  category: "creator-tools",
  businessType: "b2c",
  priceRange: "smb",
  createdAt: new Date(),
  updatedAt: new Date(),
};

const sponsorCalcLandingPage = {
  ideaId: "sponsorcalc-001",
  slug: "sponsorcalc",
  content: JSON.stringify({
    meta: {
      title: "SponsorCalc — Know What to Charge for Sponsorships",
      description: "Get data-backed sponsorship rates based on your engagement and niche. Generate professional rate cards and negotiate with confidence."
    },
    hero: {
      headline: "Stop guessing what to charge for sponsorships",
      subheadline: "Get data-backed rates based on your engagement, audience, and niche. Generate professional rate cards in seconds."
    }
  }),
  isPublished: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const sponsorCalcExecutionPlan = {
  ideaId: "sponsorcalc-001",
  userId: null,
  elevatorPitch: JSON.stringify({
    problem_statement: "Content creators leave money on the table because they don't know what to charge for sponsorships. Without industry data, they guess rates, get lowballed by brands, or price themselves out of deals. There's no standardized way to justify pricing, so negotiations become emotional instead of data-driven.",
    solution_summary: "Connect your social accounts. SponsorCalc analyzes engagement rates, audience demographics, niche CPMs, and comparable creator rates to generate professional rate cards with tiered pricing. Includes negotiation scripts, industry benchmarks, and media kit exports—everything you need to get paid what you're worth.",
    target_customer: {
      primary: "Content creators with 10K-500K followers across YouTube, TikTok, Instagram, or podcasts doing 2+ brand deals per month",
      secondary: "Talent agencies and influencer marketing managers who need rate benchmarking at scale",
      market_size_estimate: {
        tam: "$21B influencer marketing industry",
        sam: "$500M creator tools for monetization", 
        som: "$30M mid-tier creators actively seeking pricing help"
      }
    },
    why_now: "Creator economy hit 50M+ people, but pricing remains opaque. Brands have sophisticated data; creators have guesswork. New platforms (TikTok, podcasts) have no pricing norms. Creator burnout often comes from underpricing—they work more because they earn less per deal."
  }),
  persona: JSON.stringify({
    direct_competitors: [
      {
        name: "Social Bluebook",
        url: "https://socialbluebook.com",
        positioning: "Calculate your social media value",
        pricing: "Free basic, $9.99/mo Pro",
        strengths: ["Established brand", "Free tier available", "Multi-platform"],
        weaknesses: ["Outdated interface", "Valuations feel arbitrary", "No negotiation support"]
      },
      {
        name: "FYPM (F*** You Pay Me)",
        url: "https://fypm.vip", 
        positioning: "Crowdsourced brand deal database",
        pricing: "Free access with contribution",
        strengths: ["Real deal data from creators", "Community-driven", "Transparency focus"],
        weaknesses: ["Requires sharing your deals", "Data can be inconsistent", "No personalized rates"]
      },
      {
        name: "Creator Calculator",
        url: "https://creatorcalculator.com",
        positioning: "Simple follower-based rate calculator", 
        pricing: "Free",
        strengths: ["Simple and fast", "No signup required"],
        weaknesses: ["Overly simplistic (follower count only)", "No engagement analysis", "No rate card generation"]
      },
      {
        name: "Aspire (formerly AspireIQ)",
        url: "https://aspire.io",
        positioning: "Brand-side influencer platform with creator rates",
        pricing: "Enterprise", 
        strengths: ["Sophisticated data", "Brand relationships", "Full campaign management"],
        weaknesses: ["Built for brands, not creators", "Expensive", "Creators don't control their rates"]
      }
    ],
    indirect_competitors: [
      "Asking other creators directly (unreliable, awkward)",
      "Googling 'how much to charge for sponsorships' (generic advice)",
      "Talent managers who take 15-20% and set rates",
      "Flying blind and saying yes to whatever brands offer",
      "Spreadsheet templates from influencer courses"
    ],
    market_gaps: [
      "No tool combines account data + engagement + niche CPMs + comparable creators",
      "Rate cards are manual to create and rarely professional",
      "No one helps with the NEGOTIATION, just the initial number",
      "Podcast and newsletter monetization is completely underserved",
      "Agency tools exist but nothing built creator-first"
    ]
  }),
  userStories: [
    JSON.stringify({
      positioning_statement: "For content creators tired of guessing what to charge, SponsorCalc is an AI-powered pricing platform that generates data-backed rate cards based on your actual performance. Unlike follower-count calculators, we analyze engagement, audience value, and market rates to ensure you never leave money on the table.",
      unique_value_proposition: "Know your worth. Prove your worth. Get paid your worth.",
      key_differentiators: [
        "Data-backed rates — Not follower count, but engagement + demographics + niche CPMs",
        "Professional rate cards — One-click export to PDF media kits",
        "Negotiation support — Scripts and tactics for common brand pushback", 
        "Multi-platform — YouTube, TikTok, Instagram, podcasts, newsletters",
        "Agency-grade for creators — Same sophistication brands have, in your hands"
      ],
      category: "Creator monetization tools (creating: 'Sponsorship pricing intelligence')"
    }),
    JSON.stringify({
      core_features: [
        {
          feature: "Social Account Connection",
          description: "OAuth connect Instagram, YouTube, TikTok. Pull followers, engagement, demographics automatically.",
          priority: "P0",
          effort: "Medium"
        },
        {
          feature: "Manual Platform Entry", 
          description: "For platforms without API (podcasts, newsletters), enter stats manually.",
          priority: "P0",
          effort: "Small"
        },
        {
          feature: "Rate Calculation Engine",
          description: "Algorithm weighing engagement rate, niche CPMs, audience demographics, platform, and deliverable type.",
          priority: "P0", 
          effort: "Large"
        },
        {
          feature: "Tiered Rate Card",
          description: "Generate pricing for different deliverables: posts, stories, videos, bundles. Low/mid/high ranges.",
          priority: "P0",
          effort: "Medium"
        },
        {
          feature: "Rate Card PDF Export",
          description: "Professional, branded PDF export suitable for sending to brands.",
          priority: "P0",
          effort: "Medium"
        },
        {
          feature: "Industry Benchmarks",
          description: "Show how your rates compare to creators in your niche and tier.",
          priority: "P1", 
          effort: "Medium"
        },
        {
          feature: "Negotiation Scripts",
          description: "Pre-written responses to common brand objections ('Your rate is too high', 'We have a limited budget').",
          priority: "P1",
          effort: "Small"
        },
        {
          feature: "Deal Tracker",
          description: "Log past deals with rates and outcomes. Track your pricing history.",
          priority: "P1",
          effort: "Medium"
        }
      ],
      post_mvp_features: [
        "Media kit builder (full kit, not just rates)",
        "Brand database with typical budgets", 
        "Rate trend tracking over time",
        "AI pitch writer for brand outreach",
        "Contract templates and review",
        "Invoice generation",
        "Team/agency dashboard for multiple creators",
        "Integration with sponsorship marketplaces (Grin, etc.)"
      ],
      out_of_scope: [
        "Sponsorship marketplace/matching (use Grin, AspireIQ)",
        "Contract negotiation or legal (use a lawyer)",
        "Payment processing (use PayPal/Stripe directly)",
        "Content creation tools",
        "Social media scheduling"
      ],
      mvp_timeline: "5-7 weeks for solo developer, 4-5 weeks for small team"
    }),
    JSON.stringify({
      recommended_stack: {
        frontend: "Next.js 14 — Good for auth flows, PDF generation, SEO landing page",
        backend: "Next.js API Routes + Supabase — Handles OAuth, stores user data", 
        database: "Supabase (Postgres) — User accounts, connected platforms, rate history",
        auth: "Supabase Auth + social OAuth (Instagram, YouTube, TikTok APIs)",
        payments: "Stripe — Subscription billing",
        hosting: "Vercel — Simple deployment, good for API-heavy apps",
        pdf_generation: "React-PDF or Puppeteer — For rate card exports",
        key_integrations: [
          "Instagram Graph API — Followers, engagement, demographics",
          "YouTube Data API — Subscribers, views, engagement", 
          "TikTok API — Followers, engagement (limited demographics)",
          "OpenAI — For negotiation script personalization"
        ]
      },
      build_vs_buy: [
        {
          component: "Social API Integrations",
          recommendation: "Build (necessary for core product)",
          reasoning: "Must connect directly to get accurate data. No shortcuts here."
        },
        {
          component: "Rate Calculation Algorithm",
          recommendation: "Build (this is the IP)",
          reasoning: "The algorithm IS the product. Build and continuously improve based on deal outcome data."
        },
        {
          component: "PDF Generation", 
          recommendation: "Buy/Library (React-PDF)",
          reasoning: "PDF generation is commoditized. Use a library, focus on the design."
        },
        {
          component: "Niche CPM Data",
          recommendation: "Build (aggregate from multiple sources)",
          reasoning: "Scrape industry reports, aggregate user-contributed data. This data is competitive advantage."
        }
      ],
      estimated_monthly_cost: {
        "0_100_users": "$50-100/mo (Vercel free, Supabase free, minimal API costs)",
        "100_1000_users": "$200-500/mo (Supabase Pro, some OpenAI costs)",
        "1000_10000_users": "$500-1,500/mo (Scale with users, API rate limits)"
      }
    })
  ],
  recommendedStack: JSON.stringify({
    pricing_model: "Freemium with feature gates",
    pricing_rationale: "Free basic rate calculation hooks creators. Paid unlocks professional features (PDF export, negotiation support, benchmarks). Low cost-to-serve means generous free tier is sustainable.",
    tiers: [
      {
        name: "Free",
        price: "$0",
        target_customer: "Smaller creators exploring sponsorships",
        features: [
          "1 platform connection",
          "Basic rate calculation", 
          "Simple rate display (no PDF)",
          "Community benchmarks (anonymized)"
        ],
        limitations: [
          "1 platform only",
          "No PDF export",
          "No negotiation scripts",
          "No deal tracking",
          "SponsorCalc branding on any shares"
        ]
      },
      {
        name: "Creator",
        price: "$19/month ($15/mo annual)",
        target_customer: "Active creators doing regular brand deals",
        features: [
          "3 platforms",
          "Full rate card with tiers", 
          "Professional PDF export",
          "Negotiation script library",
          "Industry benchmarks",
          "Deal tracker",
          "Unlimited rate refreshes"
        ],
        limitations: [
          "3 platforms",
          "No white-label",
          "No API access"
        ]
      },
      {
        name: "Pro",
        price: "$49/month ($40/mo annual)",
        target_customer: "Full-time creators, multi-platform presence",
        features: [
          "Unlimited platforms",
          "Custom branded media kit",
          "AI-personalized negotiation scripts",
          "Brand budget database",
          "Rate trend tracking",
          "Priority support",
          "Early access to features"
        ],
        limitations: []
      },
      {
        name: "Agency", 
        price: "$99/month ($80/mo annual)",
        target_customer: "Talent managers and agencies",
        features: [
          "Up to 10 creator profiles",
          "White-label PDF exports",
          "Bulk rate comparison",
          "Client management dashboard", 
          "API access",
          "Dedicated support"
        ],
        limitations: [
          "10 creators (more = custom pricing)"
        ]
      }
    ],
    free_tier_strategy: "Free tier proves the value of data-backed rates. PDF export is the conversion lever—creators NEED professional rate cards to send to brands.",
    annual_discount: "20% off annual plans (2.4 months free)",
    pricing_psychology: "$19/mo pays for itself with a single better-negotiated deal. Position as ROI, not cost. Free tier creates habit, paid tier delivers professional credibility."
  }),
  launchChecklist: [
    JSON.stringify({
      brand_name: "SponsorCalc",
      tagline: "Know your worth.",
      brand_personality: [
        "Empowering — Puts power in creators' hands",
        "Confident — Helps creators negotiate from strength",
        "Professional — Elevates creator businesses",
        "Data-driven — Decisions backed by numbers", 
        "Creator-first — Built by people who get it"
      ],
      brand_voice: {
        tone: "Confident and supportive. Like a savvy friend who worked in the industry and now has your back.",
        do: [
          "Emphasize empowerment ('You're worth more than you think')",
          "Use money language comfortably ('Get paid', 'rates', 'revenue')",
          "Reference specific improvements ('20% higher rates')",
          "Validate creator frustrations with brands",
          "Be direct about value"
        ],
        dont: [
          "Don't be preachy about money",
          "Don't talk down to creators", 
          "Don't use corporate jargon",
          "Don't promise specific dollar amounts (too variable)",
          "Don't bash brands (creators need them)"
        ]
      },
      visual_direction: {
        color_palette: {
          primary: "#10B981 (Emerald/Money Green) — Success, money, growth",
          secondary: "#1F2937 (Slate) — Professional, sophisticated",
          accent: "#F59E0B (Gold/Amber) — Premium, value, warmth",
          neutrals: ["#F9FAFB", "#111827"]
        },
        typography: {
          display: "Satoshi or Clash Display — Modern, confident, premium feel",
          body: "Inter — Clean, professional, readable"
        },
        visual_style: "Premium but accessible. Money-adjacent colors without being tacky. Clean data visualizations. Show rate cards prominently. Professional enough that creators feel confident sending materials to Fortune 500 brands."
      },
      messaging: {
        elevator_pitch_10s: "SponsorCalc tells creators exactly what to charge brands—backed by data, not guesswork.",
        elevator_pitch_30s: "Creators leave thousands on the table because they don't know market rates. SponsorCalc analyzes your engagement, audience, and niche to generate professional rate cards with tiered pricing. Stop guessing, start knowing.",
        key_messages: [
          "Know your worth.",
          "Data beats guesswork.",
          "Stop accepting whatever brands offer.",
          "Professional rates, professional rate cards.",
          "The same data brands have—now in your hands."
        ]
      }
    })
  ],
  createdAt: new Date(),
};

async function seedSponsorCalc() {
  try {
    console.log("Seeding SponsorCalc (idea_051)...");

    // Check if idea already exists
    const existingIdea = await db.select().from(ideas).where(eq(ideas.id, sponsorCalcIdea.id));
    
    if (existingIdea.length > 0) {
      console.log("SponsorCalc idea already exists. Updating...");
      await db.update(ideas).set(sponsorCalcIdea).where(eq(ideas.id, sponsorCalcIdea.id));
    } else {
      console.log("Creating new SponsorCalc idea...");
      await db.insert(ideas).values(sponsorCalcIdea);
    }

    // Check if landing page already exists
    const existingLandingPage = await db.select().from(landingPages).where(eq(landingPages.slug, sponsorCalcLandingPage.slug));
    
    if (existingLandingPage.length > 0) {
      console.log("SponsorCalc landing page already exists. Updating...");
      await db.update(landingPages).set(sponsorCalcLandingPage).where(eq(landingPages.slug, sponsorCalcLandingPage.slug));
    } else {
      console.log("Creating new SponsorCalc landing page...");
      await db.insert(landingPages).values(sponsorCalcLandingPage);
    }

    // Check if execution plan already exists
    const existingPlan = await db.select().from(executionPlans).where(eq(executionPlans.ideaId, sponsorCalcExecutionPlan.ideaId));
    
    if (existingPlan.length > 0) {
      console.log("SponsorCalc execution plan already exists. Updating...");
      await db.update(executionPlans).set(sponsorCalcExecutionPlan).where(eq(executionPlans.ideaId, sponsorCalcExecutionPlan.ideaId));
    } else {
      console.log("Creating new SponsorCalc execution plan...");
      await db.insert(executionPlans).values(sponsorCalcExecutionPlan);
    }

    console.log("Done! SponsorCalc has been added to the idea library with all deliverable content.");

  } catch (error) {
    console.error("Error seeding SponsorCalc:", error);
    process.exit(1);
  }
}

// Run the seeding if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedSponsorCalc();
}

export { seedSponsorCalc };