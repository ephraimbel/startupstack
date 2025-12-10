import { db } from "../server/db";
import { ideas, landingPages, executionPlans } from "../shared/schema";
import { eq } from "drizzle-orm";
import { readFileSync } from "fs";
import { join } from "path";

// RunwayAlert - idea_069
const runwayalertIdea = {
  id: "runwayalert-069",
  userId: null,
  title: "RunwayAlert",
  oneLiner: "Know your runway. Always.",
  problem: "Founders check runway in spreadsheets monthly—if they check at all. They get surprised by cash crunches because spending creeps up unnoticed. That new hire, the annual software renewals, the slightly-higher-than-expected AWS bill—it all compounds. By the time they realize runway is short, it's too late to course-correct or fundraise comfortably.",
  targetCustomer: "Seed to Series A founders managing $500K-$5M in the bank with 6-24 months runway and no full-time finance hire",
  solution: "Connect your bank accounts and payroll. Get real-time burn rate calculations with trend analysis. Receive alerts when runway drops below your thresholds (12 months, 9 months, 6 months—whatever you set). Model scenarios for hiring plans and revenue changes. Generate investor-ready reports for board meetings.",
  monetization: "$49/month (1 entity, 3 accounts), $99/month (unlimited accounts, 3 users), $199/month (unlimited users, API access). 14-day free trial, 20% annual discount.",
  tags: ["financial-tools", "runway-tracking", "cash-management", "burn-rate", "startup-finance", "alerts"],
  keywords: null,
  status: "validated" as const,
  demandScore: 88,
  demandBand: "high" as const,
  trendLabel: "rising" as const,
  validationSummary: null,
  validatedAt: null,
  isPublic: true,
  isSaved: false,
  whyNow: "Perfect timing: (1) Higher interest rates mean VCs are pushing portfolio companies to extend runway—founders need visibility, (2) The 2022-2023 downturn showed how fast runway problems can spiral, (3) Bank failures (SVB) made founders hyper-aware of cash positions, (4) More first-time founders than ever who don't have finance backgrounds.",
  revenueImpact: "Founders avoid panic fundraising and make better financial decisions. Early runway alerts prevent emergency layoffs and enable proactive fundraising. Saves founders 10+ hours/month on manual runway tracking and financial reporting.",
  marketSize: "$500M runway and cash management tools for startups",
  competitionLevel: "Medium" as const,
  category: "productivity" as const,
  businessType: "b2b" as const,
  priceRange: "smb" as const
};

const runwayalertLanding = {
  meta: {
    title: "RunwayAlert — Real-Time Runway Tracking for Startups",
    description: "Know your runway. Always. Real-time burn rate and runway alerts for founders. Connect your bank, set alerts, never be surprised by a cash crunch. Free trial.",
    og_image_concept: "Dashboard mockup showing runway countdown (8.4 months), burn rate trend, and alert notifications. Clean, numbers-focused design with green/amber/red color coding for runway health."
  },
  hero: {
    headline: "Know your runway. Always.",
    subheadline: "Real-time burn rate and runway tracking. Connect your bank, set alerts, never be surprised by a cash crunch again.",
    cta_primary: {
      text: "Start 14-Day Free Trial",
      url: "/signup"
    },
    cta_secondary: {
      text: "See how it works →",
      url: "#demo"
    },
    social_proof_snippet: "Trusted by 500+ founders to track $100M+ in runway",
    hero_visual: {
      type: "product_screenshot" as const,
      description: "Clean dashboard showing key metrics: Cash balance $2.1M, Monthly burn $185K, Runway 11.3 months. Trend chart showing burn rate over time with alerts configured."
    }
  },
  problem_section: {
    section_id: "problem",
    eyebrow: "Stop the spreadsheet guessing game",
    headline: "You shouldn't discover runway problems in a spreadsheet at 11pm",
    description: "Runway tracking in spreadsheets is broken. By the time you update your model, the numbers are already stale. Cash crunches happen gradually, then suddenly.",
    pain_points: [
      {
        icon: "table",
        title: "Spreadsheets get stale", 
        description: "You update your runway model monthly—if you remember. By the time you check, the numbers are already wrong. That 14 months you thought you had? It's actually 11."
      },
      {
        icon: "trending-up",
        title: "Burn creeps up unnoticed",
        description: "New hire here, annual renewal there, AWS bill slightly higher this month. Small increases compound. You don't notice until runway is suddenly shorter than expected."
      },
      {
        icon: "alert-triangle",
        title: "No early warning system",
        description: "You find out runway is short when it's already an emergency. Now you're panic-fundraising or making rushed layoff decisions. It didn't have to be this way."
      },
      {
        icon: "clock",
        title: "Always behind the numbers",
        description: "Your last board update showed 18 months runway. But that was based on last quarter's spend. Current reality? You have 12 months and dropping fast."
      }
    ],
    stat_callout: {
      number: "73%",
      label: "of startups underestimate their burn rate by 20%+ according to First Round Capital",
      source: "State of Startups 2023"
    }
  },
  solution_section: {
    section_id: "solution",
    eyebrow: "Real-time financial intelligence",
    headline: "Real-time runway that updates while you build",
    description: "Connect your bank accounts and get instant visibility into your burn rate, runway, and cash trajectory. Always accurate, always current.",
    features: [
      {
        icon: "building-2",
        title: "Bank-Connected Data",
        description: "Connect Mercury, Chase, or any bank via Plaid. Your runway is always based on actual cash, not estimates."
      },
      {
        icon: "flame",
        title: "Daily Burn Rate",
        description: "See your burn rate update daily. Trailing averages, trend direction, and month-over-month changes."
      },
      {
        icon: "bell",
        title: "Runway Alerts",
        description: "Set thresholds at 12, 9, 6 months—whatever matters to you. Get notified before problems become emergencies."
      },
      {
        icon: "pie-chart",
        title: "Expense Breakdown",
        description: "See where money goes: payroll, software, contractors, AWS. Catch category spikes before they hurt."
      },
      {
        icon: "calculator",
        title: "Scenario Modeling",
        description: "'What if we hire 2 engineers?' Get instant runway impact. No spreadsheet required."
      },
      {
        icon: "file-text",
        title: "Investor Reports",
        description: "One-click reports with the metrics boards actually want. Stop recreating the same update every month."
      }
    ],
    visual: {
      type: "demo" as const,
      description: "Interactive demo showing bank connection flow, real-time dashboard updates, and alert configuration"
    }
  },
  how_it_works: {
    section_id: "how-it-works",
    eyebrow: "Set up in minutes",
    headline: "Set up in 10 minutes. Know your runway forever.",
    steps: [
      {
        number: 1,
        title: "Connect your bank",
        description: "Link your bank accounts via Plaid. We only need read access—we can't move money.",
        visual_description: "Secure bank connection interface with logos of supported banks"
      },
      {
        number: 2,
        title: "See your runway",
        description: "Instantly see your burn rate, runway, and expense breakdown. No configuration needed.",
        visual_description: "Dashboard populating with real data: burn rate, runway countdown, expense categories"
      },
      {
        number: 3,
        title: "Set alerts and relax",
        description: "Choose your thresholds. We'll watch your runway and tell you when action is needed.",
        visual_description: "Alert configuration panel with threshold sliders and notification preferences"
      }
    ]
  },
  social_proof: {
    section_id: "proof",
    eyebrow: "Trusted by founders",
    headline: "Founders who stopped guessing",
    testimonials: [
      {
        quote: "RunwayAlert caught our burn spike 3 months before we would have noticed. Saved us from panic mode and gave us time to adjust properly.",
        author: "Sarah Chen",
        role: "CEO & Co-founder",
        company: "DataFlow",
        avatar_description: "Asian female founder in modern office setting",
        result: "3 months early warning"
      },
      {
        quote: "I use the investor reports for every board meeting. What used to take me 4 hours in Excel now takes 30 seconds.",
        author: "Marcus Rodriguez",
        role: "CEO",
        company: "TechStart",
        avatar_description: "Latino male founder with laptop and coffee",
        result: "4 hours saved monthly"
      },
      {
        quote: "We went from checking runway once a month to having it always visible. Game changer for financial planning.",
        author: "Emily Watson",
        role: "CTO & Co-founder",
        company: "CloudBuild",
        avatar_description: "Female technical founder with dual monitors",
        result: "Daily runway visibility"
      }
    ],
    stats: [
      {
        number: "$100M+",
        label: "Runway Tracked",
        context: "across all customers"
      },
      {
        number: "67%",
        label: "Earlier Problem Detection",
        context: "vs manual tracking"
      },
      {
        number: "500+",
        label: "Startups Protected",
        context: "from cash surprises"
      },
      {
        number: "1,200+",
        label: "Alerts Sent",
        context: "before crisis point"
      }
    ],
    logos: {
      headline: "Integrates With Your Stack",
      companies: ["Plaid", "Mercury", "Chase", "Slack", "Stripe", "QuickBooks"]
    },
    trust_badges: [
      {
        icon: "shield",
        text: "Bank-Level Security"
      },
      {
        icon: "lock", 
        text: "Read-Only Access"
      },
      {
        icon: "check",
        text: "SOC 2 Compliant"
      }
    ]
  },
  pricing: {
    section_id: "pricing",
    eyebrow: "Transparent pricing",
    headline: "Know your runway for less than a nice dinner",
    subheadline: "$49/month. 14-day free trial. Cancel anytime.",
    plans: [
      {
        name: "Founder",
        price: "$49",
        price_detail: "/month",
        description: "Perfect for solo founders and small teams at seed stage",
        features: [
          "1 company / entity",
          "Connect up to 3 bank accounts",
          "Real-time burn rate and runway",
          "Runway alerts (email + Slack)",
          "Expense categorization",
          "Basic scenario modeling",
          "Weekly runway digest",
          "Investor report PDF",
          "Email support"
        ],
        cta: "Start Free Trial",
        highlighted: true,
        badge: "Most Popular"
      },
      {
        name: "Startup",
        price: "$99",
        price_detail: "/month",
        description: "For Series A companies with multiple accounts or entities",
        features: [
          "Everything in Founder",
          "Unlimited bank accounts",
          "Multiple entities (holding company, subsidiaries)",
          "Revenue tracking and net burn",
          "Advanced scenario modeling",
          "Board deck templates",
          "3 team seats",
          "Priority support"
        ],
        cta: "Start Free Trial",
        highlighted: false,
        badge: null
      },
      {
        name: "Scale",
        price: "$199",
        price_detail: "/month",
        description: "For larger startups with finance teams and complex structures",
        features: [
          "Everything in Startup",
          "Unlimited entities",
          "Unlimited team seats",
          "Role-based access (view-only for board)",
          "API access",
          "Custom alert rules",
          "Benchmark comparisons",
          "Dedicated success manager",
          "Quarterly business review"
        ],
        cta: "Contact Sales",
        highlighted: false,
        badge: "Enterprise"
      }
    ],
    guarantee: {
      headline: "14-Day Free Trial",
      description: "Full access to all features. No credit card required. Cancel anytime."
    },
    pricing_note: "20% discount on annual plans. All plans include unlimited data retention and exports."
  },
  faq: {
    section_id: "faq",
    headline: "Questions? We've Got Answers.",
    questions: [
      {
        question: "Which banks do you support?",
        answer: "Any bank that works with Plaid—which is most of them. Mercury, Chase, SVB (successor banks), First Republic (JPMorgan), Bank of America, and hundreds more. If your bank isn't supported, let us know."
      },
      {
        question: "Is my banking data secure?",
        answer: "Yes. We use Plaid for bank connections—the same infrastructure used by Venmo, Robinhood, and most fintech apps. We only have read access and never store credentials. Your data is encrypted at rest and in transit."
      },
      {
        question: "How accurate is the burn rate?",
        answer: "Very. We calculate burn from actual transactions, not estimates. We automatically detect and handle one-time expenses, refunds, and revenue so your average burn reflects reality."
      },
      {
        question: "Can I add revenue to get net burn?",
        answer: "Yes! On Startup tier and above, we detect incoming revenue and show both gross burn and net burn. For more accurate revenue, you can connect Stripe."
      },
      {
        question: "Do you integrate with my accounting software?",
        answer: "Not yet—we're focused on bank data for now. But if you use QuickBooks or Xero, we can use their categorization for expense breakdowns. Full integration is on the roadmap."
      },
      {
        question: "What if I have multiple entities or accounts?",
        answer: "Startup tier supports multiple entities and unlimited bank accounts. You get a consolidated view across all accounts plus per-entity breakdowns."
      }
    ]
  },
  final_cta: {
    section_id: "cta",
    headline: "Stop wondering. Start knowing.",
    subheadline: "14-day free trial. No credit card required.",
    cta_text: "Start Free Trial →",
    trust_element: "✓ 14-day free trial ✓ No credit card required ✓ Bank-level security ✓ Cancel anytime"
  },
  footer: {
    tagline: "Know your runway. Always.",
    links: {
      product: ["Features", "Pricing", "Integrations", "Security"],
      resources: ["Blog", "Help Center", "API Docs", "Runway Calculator"],
      company: ["About", "Careers", "Press", "Contact"],
      legal: ["Privacy", "Terms", "Security", "Compliance"]
    },
    social: ["Twitter", "LinkedIn", "GitHub", "Slack"],
    newsletter: {
      headline: "Founder finance tips",
      placeholder: "Your email",
      cta: "Subscribe"
    }
  }
};

async function seedRunwayAlert() {
  console.log("Seeding RunwayAlert (idea_069)...");

  try {
    // Check if it already exists
    const existing = await db.select().from(ideas).where(eq(ideas.id, runwayalertIdea.id));
    
    if (existing.length > 0) {
      console.log("RunwayAlert idea already exists. Updating...");
      await db.update(ideas)
        .set({ 
          ...runwayalertIdea,
          updatedAt: new Date()
        })
        .where(eq(ideas.id, runwayalertIdea.id));
    } else {
      // Insert the idea
      await db.insert(ideas).values({
        ...runwayalertIdea,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created RunwayAlert idea.");
    }

    // Check if landing page exists
    const existingLanding = await db.select().from(landingPages).where(eq(landingPages.slug, "runwayalert"));
    
    if (existingLanding.length > 0) {
      console.log("RunwayAlert landing page already exists. Updating...");
      await db.update(landingPages)
        .set({ 
          content: JSON.stringify(runwayalertLanding),
          updatedAt: new Date(),
          isPublished: true 
        })
        .where(eq(landingPages.slug, "runwayalert"));
    } else {
      // Insert the landing page
      await db.insert(landingPages).values({
        ideaId: runwayalertIdea.id,
        slug: "runwayalert",
        content: JSON.stringify(runwayalertLanding),
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created RunwayAlert landing page.");
    }

    // Create execution plan with all deliverable content
    const deliverableContent = {
      // For now, we'll use placeholder content until deliverable files are created
      brand_package: JSON.stringify({
        brand_name: "RunwayAlert",
        tagline: "Know your runway. Always.",
        brand_personality: ["Vigilant", "Direct", "Founder-friendly", "Calm", "Trustworthy"],
        messaging: "Real-time runway tracking for founders who need to know their cash position without becoming spreadsheet jockeys."
      }),
      landing_page: JSON.stringify(runwayalertLanding),
      ad_creatives: JSON.stringify({
        headline: "Stop checking spreadsheets. Start knowing your runway.",
        pain: "Founders discover cash problems when it's too late",
        solution: "Real-time burn rate and runway alerts",
        cta: "Start 14-Day Free Trial"
      }),
      mvp_roadmap: JSON.stringify({
        phase_1: "Plaid integration, burn rate calculation, runway dashboard",
        phase_2: "Expense categorization, scenario modeling, alerts",
        phase_3: "Multi-entity support, investor reports, team access",
        timeline: "6-8 weeks MVP, 3-4 month full feature set"
      }),
      pricing_strategy: JSON.stringify({
        model: "Tiered SaaS subscription",
        tiers: ["Founder $49/mo", "Startup $99/mo", "Scale $199/mo"],
        strategy: "No free tier - serious runway tracking justifies payment"
      }),
      product_requirements: JSON.stringify({
        core_features: ["Bank connection via Plaid", "Burn rate calculation", "Runway alerts", "Expense categorization"],
        integrations: ["Slack", "Email", "Stripe for revenue", "QuickBooks"],
        security: "SOC 2, bank-level security, read-only access"
      }),
      gtm_strategy: JSON.stringify({
        target: "Seed to Series A founders with 6-24 month runway",
        channels: ["Founder communities", "Content marketing", "Product Hunt"],
        messaging: "Real-time runway visibility prevents cash emergencies"
      }),
      competitive_analysis: JSON.stringify({
        direct: ["Pilot (too expensive)", "Jirav (too complex)", "Causal (requires modeling)"],
        positioning: "Simple, real-time, founder-focused runway tracking",
        differentiation: "Bank-connected data, proactive alerts, zero configuration"
      }),
      technical_architecture: JSON.stringify({
        stack: "Next.js, Supabase, Plaid, Vercel",
        integrations: ["Plaid for bank data", "Slack API", "Resend for emails"],
        security: "Encrypted data, read-only bank access, SOC 2 compliance"
      }),
      user_research: JSON.stringify({
        findings: "Founders check runway monthly in spreadsheets, want real-time visibility",
        pain_points: ["Stale data", "Manual updates", "No early warnings"],
        validation: "73% underestimate burn rate, need proactive monitoring"
      })
    };

    // Check if execution plan already exists
    const existingPlan = await db.select().from(executionPlans).where(eq(executionPlans.ideaId, runwayalertIdea.id));
    
    if (existingPlan.length > 0) {
      console.log("RunwayAlert execution plan already exists. Updating...");
      await db.update(executionPlans)
        .set({
          elevatorPitch: deliverableContent.ad_creatives,
          persona: deliverableContent.brand_package, 
          userStories: [
            deliverableContent.landing_page,
            deliverableContent.mvp_roadmap,
            deliverableContent.pricing_strategy,
            deliverableContent.product_requirements,
            deliverableContent.gtm_strategy,
            deliverableContent.competitive_analysis,
            deliverableContent.technical_architecture,
            deliverableContent.user_research
          ],
          recommendedStack: deliverableContent.technical_architecture,
          launchChecklist: [
            "Plaid Integration Complete",
            "Burn Rate Calculator Built", 
            "Runway Dashboard Live",
            "Alert System Configured",
            "Expense Categorization Working",
            "Landing Page Published",
            "Stripe Billing Setup",
            "Security Review Complete",
            "Beta Testing Done",
            "Launch Campaign Ready"
          ]
        })
        .where(eq(executionPlans.ideaId, runwayalertIdea.id));
    } else {
      // Insert new execution plan
      await db.insert(executionPlans).values({
        ideaId: runwayalertIdea.id,
        userId: null,
        elevatorPitch: deliverableContent.ad_creatives,
        persona: deliverableContent.brand_package,
        userStories: [
          deliverableContent.landing_page,
          deliverableContent.mvp_roadmap, 
          deliverableContent.pricing_strategy,
          deliverableContent.product_requirements,
          deliverableContent.gtm_strategy,
          deliverableContent.competitive_analysis,
          deliverableContent.technical_architecture,
          deliverableContent.user_research
        ],
        recommendedStack: deliverableContent.technical_architecture,
        launchChecklist: [
          "Plaid Integration Complete",
          "Burn Rate Calculator Built",
          "Runway Dashboard Live",
          "Alert System Configured",
          "Expense Categorization Working",
          "Landing Page Published", 
          "Stripe Billing Setup",
          "Security Review Complete",
          "Beta Testing Done",
          "Launch Campaign Ready"
        ],
        createdAt: new Date()
      });
      console.log("Created RunwayAlert execution plan with deliverables.");
    }

    console.log("Done! RunwayAlert has been added to the idea library with all deliverable content.");
  } catch (error) {
    console.error("Error seeding RunwayAlert:", error);
    process.exit(1);
  }

  process.exit(0);
}

seedRunwayAlert();