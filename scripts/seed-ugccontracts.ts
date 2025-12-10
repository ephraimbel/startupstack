import { db } from "../server/db";
import { ideas, landingPages, executionPlans } from "../shared/schema";
import { eq } from "drizzle-orm";
import { readFileSync } from "fs";
import { join } from "path";

// UGCContracts - idea_054
const ugcContractsIdea = {
  id: "ugccontracts-054",
  userId: null,
  title: "UGCContracts",
  oneLiner: "Professional UGC contracts in 60 seconds, no lawyer needed",
  problem: "UGC creators and brands waste hours negotiating contract terms over email and DMs. Standard templates don't properly cover usage rights, revision limits, exclusivity periods, or platform-specific terms. Disputes happen because terms were unclear, and both sides lack documentation when things go wrong.",
  targetCustomer: "UGC creators doing 5+ brand deals monthly who need professional contracts without paying a lawyer for each one",
  solution: "Answer simple questions about your deal. UGCContracts generates a complete, legally sound contract covering deliverables, payment terms, usage rights, exclusivity, revision limits, and cancellation clauses. Both parties sign digitally. A dashboard tracks all active agreements and alerts before renewals or exclusivity periods expire.",
  monetization: "$15/month for 10 contracts, $29/month unlimited. Free tier includes 1 contract/month. Brand tier at $49/month for multi-creator management.",
  tags: ["legal", "creator-tools", "contracts", "ugc", "automation"],
  keywords: null,
  status: "validated" as const,
  demandScore: 85,
  demandBand: "high" as const,
  trendLabel: "rising" as const,
  validationSummary: null,
  validatedAt: null,
  isPublic: true,
  isSaved: false,
  whyNow: "UGC exploded post-2020—brands now spend billions on creator content for ads. But contracts haven't kept up. Horror stories of usage rights violations, payment disputes, and content theft are everywhere. Creators are professionalizing and demanding better protection.",
  revenueImpact: "Professional contracts protect high-value deals. Each contract could protect $5K-$50K+ deals. Proper terms prevent disputes and ensure creators get paid for extended usage.",
  marketSize: "$8B UGC and influencer content market",
  competitionLevel: "Medium" as const,
  category: "legal" as const,
  businessType: "b2b2c" as const,
  priceRange: "smb" as const
};

const ugcContractsLanding = {
  meta: {
    title: "UGCContracts — Professional Creator Contracts in 60 Seconds",
    description: "Generate legally binding UGC contracts with usage rights, payment terms, and revision limits. E-sign included. Protect your work without a lawyer.",
    og_image_concept: "Split visual showing messy DM conversation transforming into professional contract document. Headline overlay: 'Get It In Writing.'"
  },
  hero: {
    headline: "UGC contracts in 60 seconds",
    subheadline: "Stop negotiating over DMs. Generate professional contracts that protect your work, your rights, and your payment.",
    cta_primary: {
      text: "Create My First Contract Free",
      url: "/signup"
    },
    cta_secondary: {
      text: "See a sample contract →",
      url: "#sample-contract"
    },
    social_proof_snippet: "2,847 contracts created • $12.4M in deals protected • 3.2 average days to signature",
    hero_visual: {
      type: "product_screenshot" as const,
      description: "Split screen: chaotic DM conversation on left, clean professional contract on right. Arrow showing transformation."
    }
  },
  problem_section: {
    section_id: "problem",
    eyebrow: "The DM Deal Problem",
    headline: "DM deals are risky deals",
    description: "Handshake agreements in creator DMs lead to payment disputes, usage rights violations, and endless unpaid revisions. You're leaving yourself exposed.",
    pain_points: [
      {
        icon: "message-x",
        title: "'I'll pay you when it goes live' — and then silence",
        description: "Without a contract, you have no recourse when brands ghost, delay, or refuse to pay.",
        stat: "67% of creators experienced payment disputes"
      },
      {
        icon: "copy",
        title: "Your UGC ends up everywhere you didn't agree to",
        description: "That one TikTok you made? Now it's on billboards, TV ads, and their website. Where's your cut?",
        stat: "89% of usage rights violations happen without contracts"
      },
      {
        icon: "refresh-cw",
        title: "Endless revisions without extra pay",
        description: "'Just one more tweak' turns into 10 rounds. Without revision limits in writing, you're stuck.",
        stat: "Average 7.3 revision rounds without limits"
      }
    ],
    stat_callout: {
      number: "$2.3B",
      label: "lost annually by creators to contract disputes",
      source: "Creator Economy Legal Report 2024"
    }
  },
  solution_section: {
    section_id: "solution",
    eyebrow: "Professional Protection",
    headline: "Everything agreed. Everything written.",
    description: "UGCContracts generates comprehensive, legally sound agreements that protect both creators and brands. No more DM deals, no more disputes.",
    features: [
      {
        icon: "clock",
        title: "60-Second Contracts",
        description: "Answer a few questions. Get a complete, professional contract. No templates to customize."
      },
      {
        icon: "shield",
        title: "Usage Rights Clarity",
        description: "Specify exactly where and how long your content can be used. No surprises."
      },
      {
        icon: "signature",
        title: "Built-in E-Signature",
        description: "Both parties sign digitally. Legally binding. No need for DocuSign."
      },
      {
        icon: "layers",
        title: "Revision Limits",
        description: "Define how many revisions are included. Extra rounds = extra payment."
      },
      {
        icon: "dollar-sign",
        title: "Payment Terms",
        description: "Due dates, payment schedules, late fees—all spelled out."
      },
      {
        icon: "dashboard",
        title: "Track Everything",
        description: "Dashboard shows all your contracts, deadlines, and exclusivity periods."
      }
    ],
    visual: {
      type: "demo_video" as const,
      description: "60-second demo showing questionnaire → contract generation → signing → dashboard tracking"
    }
  },
  how_it_works: {
    section_id: "how-it-works",
    eyebrow: "Simple Process",
    headline: "Three steps to protection",
    steps: [
      {
        number: 1,
        title: "Answer questions about your deal",
        description: "Deliverables, timeline, payment, usage rights. Takes 60 seconds.",
        visual_description: "Smart form with creator-specific questions"
      },
      {
        number: 2,
        title: "Review your contract",
        description: "We generate a complete agreement. Review, edit if needed.",
        visual_description: "Professional contract preview with edit capabilities"
      },
      {
        number: 3,
        title: "Send and sign",
        description: "Send to the brand. Both sign digitally. Done.",
        visual_description: "E-signature process and confirmation"
      }
    ]
  },
  social_proof: {
    section_id: "proof",
    eyebrow: "Creator Success",
    headline: "Creators are protecting their work",
    testimonials: [
      {
        quote: "I went from handshake deals to professional contracts. Brands take me more seriously and I've avoided two payment disputes already.",
        author: "Sarah Chen",
        role: "Beauty Creator",
        company: "125K followers",
        avatar_description: "Young female beauty creator with ring light",
        result: "Avoided 2 payment disputes"
      },
      {
        quote: "The usage rights clarity saved me $15K. A brand wanted to use my content in TV ads but only paid for organic posts. The contract made it clear they needed to pay more.",
        author: "Marcus Johnson",
        role: "Fitness Creator",
        company: "89K followers",
        avatar_description: "Fit male creator in gym setting",
        result: "Saved $15K in usage fees"
      },
      {
        quote: "As a brand, we love working with creators who use UGCContracts. Everything is clear upfront, no confusion later.",
        author: "Lisa Park",
        role: "Marketing Manager",
        company: "DTC Skincare Brand",
        avatar_description: "Professional female marketer in office",
        result: "Faster creator partnerships"
      }
    ],
    stats: [
      {
        number: "2,847",
        label: "Contracts Created",
        context: "and growing"
      },
      {
        number: "$12.4M",
        label: "Deals Protected",
        context: "from disputes"
      },
      {
        number: "3.2 days",
        label: "Average Signature",
        context: "time"
      },
      {
        number: "4.9/5",
        label: "Creator Rating",
        context: "from 800+ reviews"
      }
    ],
    logos: {
      headline: "Trusted by Creators Working With",
      companies: ["Glossier", "Gymshark", "Daniel Wellington", "Mejuri", "Alo Yoga", "SKIMS"]
    },
    trust_badges: [
      {
        icon: "shield",
        text: "Legally Binding"
      },
      {
        icon: "lock",
        text: "Bank-Grade Security"
      },
      {
        icon: "check-circle",
        text: "Lawyer Reviewed"
      }
    ]
  },
  pricing: {
    section_id: "pricing",
    eyebrow: "Simple Pricing",
    headline: "Your first contract is free",
    subheadline: "Because your work deserves protection from day one.",
    plans: [
      {
        name: "Free",
        price: "$0",
        price_detail: "forever",
        description: "Trying out, occasional deals",
        features: [
          "1 contract per month",
          "Basic contract types",
          "E-signature included",
          "PDF download"
        ],
        limitations: [
          "1 contract/month",
          "No tracking/alerts", 
          "UGCContracts branding"
        ],
        cta: "Start Free",
        highlighted: false,
        badge: null
      },
      {
        name: "Creator",
        price: "$15",
        price_detail: "/month",
        annual_price: "$12",
        annual_detail: "/month billed annually",
        description: "Active UGC creators with regular brand deals",
        features: [
          "10 contracts/month",
          "All contract types",
          "Custom branding (your logo)",
          "Date tracking & alerts",
          "Contract library",
          "Priority support"
        ],
        cta: "Start 14-day Free Trial",
        highlighted: true,
        badge: "Most Popular"
      },
      {
        name: "Pro Creator",
        price: "$29",
        price_detail: "/month",
        annual_price: "$24",
        annual_detail: "/month billed annually",
        description: "Full-time UGC creators, high volume",
        features: [
          "Unlimited contracts",
          "Custom clause library",
          "Duplicate from past contracts",
          "Analytics dashboard",
          "Invoice generation (coming soon)"
        ],
        cta: "Start 14-day Free Trial",
        highlighted: false,
        badge: null
      },
      {
        name: "Brand / Agency",
        price: "$49",
        price_detail: "/month",
        annual_price: "$40",
        annual_detail: "/month billed annually",
        description: "Brands and agencies managing multiple creators",
        features: [
          "Unlimited contracts",
          "Multi-creator management",
          "White-label contracts",
          "Team access (3 seats)",
          "Bulk send",
          "API access"
        ],
        cta: "Contact Sales",
        highlighted: false,
        badge: null
      }
    ],
    guarantee: {
      headline: "14-Day Free Trial",
      description: "Try UGCContracts risk-free. No credit card required. Cancel anytime."
    },
    pricing_note: "$15/month is trivial compared to the deals you're protecting. Position as insurance for $5K-$50K+ deals."
  },
  faq: {
    section_id: "faq",
    headline: "Questions? We've Got Answers.",
    questions: [
      {
        question: "Are these contracts legally binding?",
        answer: "Yes. Our contracts are designed by legal professionals and signed using legally recognized e-signature technology. They're as binding as traditional paper contracts."
      },
      {
        question: "Do I need a lawyer?",
        answer: "For standard UGC deals, no. Our contracts cover the key terms. For complex situations or large deals, we recommend consulting a lawyer."
      },
      {
        question: "Can the brand edit the contract?",
        answer: "You control the contract. If a brand wants changes, they can request them and you can accept or negotiate. Nothing changes without your approval."
      },
      {
        question: "What types of deals are covered?",
        answer: "UGC for ads, organic posts, whitelisting agreements, product-only deals, and more. We cover the common deal structures in the creator economy."
      },
      {
        question: "What about usage rights?",
        answer: "Our contracts specifically address where content can be used (organic, paid, TV, etc.), how long (30 days, 1 year, perpetual), and geographic limits. This is the #1 thing that causes disputes—we make it crystal clear."
      },
      {
        question: "Can brands use UGCContracts too?",
        answer: "Absolutely. We have a Brand tier for companies working with multiple creators. Fair contracts work for everyone."
      }
    ]
  },
  final_cta: {
    section_id: "cta",
    headline: "Your next deal deserves a contract",
    subheadline: "Create your first one free. Takes 60 seconds.",
    cta_text: "Create My Contract Free",
    trust_element: "No credit card • 1 free contract forever • Lawyer reviewed"
  },
  footer: {
    tagline: "Get it in writing.",
    links: {
      product: ["Features", "Pricing", "Contract Types", "Sample Contract"],
      resources: ["Blog", "Help Center", "Contract Guide", "Community"],
      company: ["About", "Security", "Press Kit", "Contact"],
      legal: ["Privacy", "Terms", "Cookie Policy"]
    },
    social: ["Twitter", "LinkedIn", "TikTok"],
    newsletter: {
      headline: "Creator legal tips",
      placeholder: "Your email",
      cta: "Subscribe"
    }
  }
};

const executionPlanData = {
  elevator_pitch: {
    problem_statement: "UGC creators and brands waste hours negotiating contract terms over email and DMs. Standard templates don't properly cover usage rights, revision limits, exclusivity periods, or platform-specific terms. Disputes happen because terms were unclear, and both sides lack documentation when things go wrong.",
    solution_summary: "Answer simple questions about your deal. UGCContracts generates a complete, legally sound contract covering deliverables, payment terms, usage rights, exclusivity, revision limits, and cancellation clauses. Both parties sign digitally. A dashboard tracks all active agreements and alerts before renewals or exclusivity periods expire.",
    target_customer: {
      primary: "UGC creators doing 5+ brand deals monthly who need professional contracts without paying a lawyer for each one",
      secondary: "DTC brands and agencies working with multiple UGC creators who need consistent, protective agreements",
      market_size_estimate: {
        tam: "$8B UGC and influencer content market",
        sam: "$200M creator business tools (contracts, invoicing, etc.)",
        som: "$20M UGC-specific contract and legal tools"
      }
    },
    why_now: "UGC exploded post-2020—brands now spend billions on creator content for ads. But contracts haven't kept up. Horror stories of usage rights violations, payment disputes, and content theft are everywhere. Creators are professionalizing and demanding better protection."
  },
  personas: {
    primary_persona: {
      name: "Ashley Rodriguez",
      age: 27,
      title: "Full-time UGC Creator",
      background: "Former marketing coordinator turned full-time content creator. Creates UGC for beauty and lifestyle brands.",
      goals: [
        "Protect herself from payment disputes and usage rights violations",
        "Look more professional when working with brands", 
        "Save time on contract negotiations",
        "Ensure fair compensation for her work"
      ],
      pain_points: [
        "Brands often want to negotiate over email/DMs which takes forever",
        "Has been burned by brands using content beyond what was agreed",
        "Doesn't want to pay $500+ per contract for a lawyer",
        "Generic contract templates don't cover UGC-specific terms",
        "Tracking multiple brand deals and their terms is overwhelming"
      ],
      behavior: [
        "Does 8-12 brand collaborations per month",
        "Primarily creates for Instagram, TikTok, and YouTube Shorts",
        "Charges $800-3000 per campaign depending on deliverables",
        "Active in creator Facebook groups and Discord communities"
      ],
      tech_comfort: "High - uses Canva, scheduling tools, analytics platforms"
    }
  },
  user_stories: [
    {
      title: "As a UGC creator, I want to generate a contract in under 2 minutes",
      description: "So I can quickly formalize brand partnerships without lengthy negotiations",
      acceptance_criteria: [
        "Contract questionnaire takes <90 seconds to complete",
        "Generated contract is comprehensive and ready to send", 
        "Can preview contract before sending to brand"
      ]
    },
    {
      title: "As a creator, I want clear usage rights in my contracts",
      description: "So brands can't use my content beyond what we agreed to",
      acceptance_criteria: [
        "Contract specifies platforms (organic social, paid ads, website, etc.)",
        "Duration of usage is clearly defined",
        "Geographic restrictions if applicable",
        "Additional payment required for extended usage"
      ]
    }
  ],
  recommended_stack: {
    frontend: "Next.js 14 — Good form handling, fast pages",
    backend: "Next.js API Routes + Supabase — Stores contracts, handles auth", 
    database: "Supabase (Postgres) — User accounts, contracts, signatures",
    auth: "Supabase Auth — Email/password + magic links",
    payments: "Stripe — Subscription billing",
    hosting: "Vercel — Simple deployment",
    e_signature: "DocuSign API or Dropbox Sign API — Legal e-signatures",
    pdf_generation: "React-PDF or Puppeteer — Contract PDF exports"
  },
  launch_checklist: [
    "Core contract generation working for UGC ad deals",
    "E-signature integration complete",
    "Have lawyer review base contract templates", 
    "Landing page with waitlist",
    "Beta with 15-20 UGC creators",
    "Product Hunt launch prepared"
  ]
};

async function seedUGCContracts() {
  console.log("Seeding UGCContracts (idea_054)...");

  try {
    // Check if it already exists
    const existing = await db.select().from(ideas).where(eq(ideas.id, ugcContractsIdea.id));
    
    if (existing.length > 0) {
      console.log("UGCContracts idea already exists. Updating...");
      await db.update(ideas)
        .set({ 
          ...ugcContractsIdea,
          updatedAt: new Date()
        })
        .where(eq(ideas.id, ugcContractsIdea.id));
    } else {
      // Insert the idea
      await db.insert(ideas).values({
        ...ugcContractsIdea,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created UGCContracts idea.");
    }

    // Check if landing page exists
    const existingLanding = await db.select().from(landingPages).where(eq(landingPages.slug, "ugccontracts"));
    
    if (existingLanding.length > 0) {
      console.log("UGCContracts landing page already exists. Updating...");
      await db.update(landingPages)
        .set({ 
          content: JSON.stringify(ugcContractsLanding),
          updatedAt: new Date(),
          isPublished: true 
        })
        .where(eq(landingPages.slug, "ugccontracts"));
    } else {
      // Insert the landing page
      await db.insert(landingPages).values({
        ideaId: ugcContractsIdea.id,
        slug: "ugccontracts",
        content: JSON.stringify(ugcContractsLanding),
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created UGCContracts landing page.");
    }

    // Create execution plan with all deliverable content
    const deliverableContent = {
      // Reading the prompt files we created
      brand_package: readFileSync(join(process.cwd(), 'ugccontracts-deliverables/brand-package/prompt.md'), 'utf-8'),
      landing_page: readFileSync(join(process.cwd(), 'ugccontracts-deliverables/landing-page/prompt.md'), 'utf-8'),
      ad_creatives: readFileSync(join(process.cwd(), 'ugccontracts-deliverables/ad-creatives/prompt.md'), 'utf-8'),
      user_personas: readFileSync(join(process.cwd(), 'ugccontracts-deliverables/user-personas/prompt.md'), 'utf-8'),
      product_requirements: readFileSync(join(process.cwd(), 'ugccontracts-deliverables/product-requirements/prompt.md'), 'utf-8'),
      mvp_roadmap: readFileSync(join(process.cwd(), 'ugccontracts-deliverables/mvp-roadmap/prompt.md'), 'utf-8'),
      competitive_analysis: readFileSync(join(process.cwd(), 'ugccontracts-deliverables/competitive-analysis/prompt.md'), 'utf-8'),
      pricing_strategy: readFileSync(join(process.cwd(), 'ugccontracts-deliverables/pricing-strategy/prompt.md'), 'utf-8'),
      gtm_strategy: readFileSync(join(process.cwd(), 'ugccontracts-deliverables/gtm-strategy/prompt.md'), 'utf-8'),
    };

    // Check if execution plan already exists
    const existingPlan = await db.select().from(executionPlans).where(eq(executionPlans.ideaId, ugcContractsIdea.id));
    
    if (existingPlan.length > 0) {
      console.log("UGCContracts execution plan already exists. Updating...");
      await db.update(executionPlans)
        .set({
          elevatorPitch: deliverableContent.brand_package,
          persona: deliverableContent.user_personas,
          userStories: [
            deliverableContent.landing_page,
            deliverableContent.ad_creatives,
            deliverableContent.product_requirements,
            deliverableContent.mvp_roadmap,
            deliverableContent.competitive_analysis,
            deliverableContent.pricing_strategy,
            deliverableContent.gtm_strategy
          ],
          recommendedStack: deliverableContent.product_requirements,
          launchChecklist: [
            "Legal review of contract templates completed",
            "Contract generation engine functional",
            "E-signature integration working",
            "Landing page with creator testimonials live",
            "Creator community partnerships established",
            "Payment processing and subscription tiers operational",
            "Beta testing with 25+ real UGC creators completed",
            "Product Hunt launch assets prepared"
          ]
        })
        .where(eq(executionPlans.ideaId, ugcContractsIdea.id));
    } else {
      // Insert new execution plan
      await db.insert(executionPlans).values({
        ideaId: ugcContractsIdea.id,
        userId: null,
        elevatorPitch: deliverableContent.brand_package,
        persona: deliverableContent.user_personas,
        userStories: [
          deliverableContent.landing_page,
          deliverableContent.ad_creatives,
          deliverableContent.product_requirements,
          deliverableContent.mvp_roadmap,
          deliverableContent.competitive_analysis,
          deliverableContent.pricing_strategy,
          deliverableContent.gtm_strategy
        ],
        recommendedStack: deliverableContent.product_requirements,
        launchChecklist: [
          "Legal review of contract templates completed",
          "Contract generation engine functional",
          "E-signature integration working",
          "Landing page with creator testimonials live",
          "Creator community partnerships established",
          "Payment processing and subscription tiers operational",
          "Beta testing with 25+ real UGC creators completed",
          "Product Hunt launch assets prepared"
        ],
        createdAt: new Date()
      });
      console.log("Created UGCContracts execution plan with deliverables.");
    }

    console.log("Done! UGCContracts has been added to the idea library with all deliverable content.");
  } catch (error) {
    console.error("Error seeding UGCContracts:", error);
    console.error("Make sure the deliverable files exist in ugccontracts-deliverables/ folder");
    process.exit(1);
  }

  process.exit(0);
}

seedUGCContracts();