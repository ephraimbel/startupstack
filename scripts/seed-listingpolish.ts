import { db } from "../server/db";
import { ideas, landingPages, executionPlans } from "../shared/schema";
import { eq } from "drizzle-orm";

// ListingPolish - idea_056
const listingPolishIdea = {
  id: "listingpolish-001",
  userId: null,
  title: "ListingPolish",
  oneLiner: "Find out why your rental isn't getting inquiries",
  problem: "Landlords and property managers create rental listings that underperform. Bad photos, weak descriptions, missing details, and poor keyword usage mean properties sit vacant for weeks longer than necessary. They don't know what's wrong with their listing or how to fix it—they just see low inquiry rates.",
  targetCustomer: "Independent landlords with 1-20 units who self-manage and create their own listings. Secondary: Small property management companies managing 20-100 units who want to improve vacancy times.",
  solution: "Paste your listing URL or upload photos and text. ListingPolish AI scores each element, identifies specific weaknesses, and provides actionable improvements. Get rewritten descriptions optimized for each platform, photo suggestions with examples of what works, and a competitive analysis of similar listings in your area.",
  monetization: "$19 one-time (single analysis), $49/month (Landlord - 5 listings), $99/month (Property Manager - 25 listings), $199/month (Agency - unlimited). Free sample analysis on landing page shows value.",
  tags: ["proptech", "real-estate", "ai", "saas", "optimization"],
  keywords: null,
  status: "validated" as const,
  demandScore: 84,
  demandBand: "high" as const,
  trendLabel: "rising" as const,
  validationSummary: null,
  validatedAt: null,
  isPublic: true,
  isSaved: false,
  whyNow: "Rental market is increasingly competitive in many areas. Platforms like Zillow and Apartments.com use algorithms that reward better listings. Professional landlords are eating independent landlords' lunch with optimized listings. AI can now analyze photos and text at scale affordably.",
  revenueImpact: "One good analysis can save weeks of vacancy. Every week vacant costs $500-1,000. Position as ROI—'save 2 weeks vacancy time, save $2,000.' Landlords increase listing performance and reduce time-to-rent.",
  marketSize: "$30B",
  competitionLevel: "Medium" as const,
  category: "proptech" as const,
  businessType: "b2c" as const,
  priceRange: "smb" as const
};

const listingPolishLanding = {
  meta: {
    title: "ListingPolish — AI Rental Listing Analyzer & Optimizer",
    description: "Find out why your rental listing isn't getting inquiries. AI analyzes your photos and description with specific fixes to fill vacancies faster.",
    og_image_concept: "Before/after listing comparison showing a poor listing transformed into an optimized one with score improvement overlay"
  },
  hero: {
    headline: "Find out why your rental isn't getting inquiries",
    subheadline: "AI analyzes your listing photos and description, then tells you exactly what to fix. Fill your vacancy faster.",
    cta_primary: {
      text: "Analyze My Listing — $19",
      url: "/signup"
    },
    cta_secondary: {
      text: "See a sample analysis",
      url: "#sample-analysis"
    },
    social_proof_snippet: "Used by 2,500+ landlords • 85% see improved inquiry rates",
    hero_visual: {
      type: "product_screenshot" as const,
      description: "Split screen showing a rental listing scoring interface with photo analysis, description feedback, and actionable improvement checklist"
    }
  },
  problem_section: {
    section_id: "problem",
    eyebrow: "The Vacancy Problem",
    headline: "Every week vacant is $500-1,000 lost",
    description: "Your property could be perfect, but if your listing doesn't do the work, renters scroll past in seconds. You can't see what they see.",
    pain_points: [
      {
        icon: "image",
        title: "Your photos aren't doing the work",
        description: "Dark rooms, bad angles, missing spaces. Renters scroll past in seconds."
      },
      {
        icon: "file-text",
        title: "Your description sounds like every other listing",
        description: "'Spacious 2BR in great location!' doesn't stand out. Renters see dozens of these."
      },
      {
        icon: "eye-off",
        title: "You don't know what good looks like",
        description: "You've seen your property 100 times. You can't see what renters see."
      },
      {
        icon: "clock",
        title: "Time is money",
        description: "Every week your property sits vacant costs hundreds in lost rent."
      }
    ],
    stat_callout: {
      number: "47%",
      label: "of rental inquiries come from the listing photos alone",
      source: "RentSpree 2024 Report"
    }
  },
  solution_section: {
    section_id: "solution",
    eyebrow: "AI-Powered Analysis",
    headline: "See your listing through renters' eyes",
    description: "ListingPolish AI analyzes every element of your listing—photos, description, keywords, positioning—and tells you exactly what's turning renters off.",
    features: [
      {
        icon: "award",
        title: "Listing Score",
        description: "0-100 score with breakdown. Know exactly where you stand."
      },
      {
        icon: "camera",
        title: "Photo Analysis",
        description: "AI evaluates every photo. Lighting, composition, what's missing."
      },
      {
        icon: "edit-3",
        title: "Description Rewrite",
        description: "Get an optimized description with better keywords and hooks."
      },
      {
        icon: "check-circle",
        title: "Action Items",
        description: "Prioritized list of specific fixes. Not 'improve photos'—'retake kitchen, use this angle.'"
      },
      {
        icon: "bar-chart-2",
        title: "Competitive Analysis",
        description: "See how your listing compares to similar rentals nearby."
      },
      {
        icon: "smartphone",
        title: "Platform Tips",
        description: "Specific optimizations for Zillow, Apartments.com, Craigslist."
      }
    ],
    visual: {
      type: "demo_video" as const,
      description: "Dashboard walkthrough showing analysis results with before/after examples and actionable recommendations"
    }
  },
  how_it_works: {
    section_id: "how-it-works",
    eyebrow: "Simple Process",
    headline: "Three minutes to a better listing",
    steps: [
      {
        number: 1,
        title: "Paste your listing URL",
        description: "Or upload photos and description directly.",
        visual_description: "Upload interface with URL paste and drag-drop options"
      },
      {
        number: 2,
        title: "AI analyzes everything",
        description: "Photos, description, keywords, competitive positioning.",
        visual_description: "AI processing animation showing photo and text analysis"
      },
      {
        number: 3,
        title: "Get your action plan",
        description: "Specific fixes ranked by impact. Make changes and repost.",
        visual_description: "Results dashboard with prioritized improvement checklist"
      }
    ]
  },
  social_proof: {
    section_id: "proof",
    eyebrow: "Landlord Success",
    headline: "Landlords are filling vacancies faster",
    testimonials: [
      {
        quote: "I never realized my kitchen photos were so dark. After retaking them with ListingPolish's suggestions, I had 3 showings in 2 days.",
        author: "Maria Rodriguez",
        role: "Landlord",
        company: "San Diego, CA",
        avatar_description: "Hispanic female landlord with house keys",
        result: "Filled in 6 days vs 3 weeks"
      },
      {
        quote: "The description rewrite was so much better than mine. It highlighted features I didn't even think were important. Rented in 10 days.",
        author: "James Chen",
        role: "Property Manager", 
        company: "15-unit portfolio",
        avatar_description: "Asian male property manager in business attire",
        result: "10 days vs 25 days average"
      },
      {
        quote: "Worth every penny. One analysis saved me 2 weeks of vacancy—that's $2,400 saved for a $19 investment.",
        author: "Sarah Williams",
        role: "Landlord",
        company: "Austin, TX",
        avatar_description: "Female landlord holding tablet",
        result: "$2,400 saved in vacancy"
      }
    ],
    stats: [
      {
        number: "2,500+",
        label: "Listings Analyzed",
        context: "and counting"
      },
      {
        number: "85%",
        label: "See More Inquiries",
        context: "after implementing fixes"
      },
      {
        number: "12 days",
        label: "Average Reduction",
        context: "in time to rent"
      },
      {
        number: "4.9/5",
        label: "Landlord Rating",
        context: "from 800+ reviews"
      }
    ],
    logos: {
      headline: "Analyzes Listings From",
      companies: ["Zillow", "Apartments.com", "Craigslist", "Facebook Marketplace", "Trulia", "PadMapper"]
    },
    trust_badges: [
      {
        icon: "shield",
        text: "Your Data Is Safe"
      },
      {
        icon: "clock",
        text: "3-Min Analysis"
      },
      {
        icon: "dollar-sign",
        text: "Money-Back Guarantee"
      }
    ]
  },
  pricing: {
    section_id: "pricing",
    eyebrow: "Simple Pricing",
    headline: "One analysis. Dozens of insights.",
    subheadline: "Pay for what you need. $19 per listing, or subscribe for ongoing optimization.",
    plans: [
      {
        name: "Single Analysis",
        price: "$19",
        price_detail: "one-time",
        description: "Perfect for landlords with 1 vacancy to fill",
        features: [
          "Full listing analysis",
          "Photo scoring and feedback", 
          "Rewritten description",
          "Actionable improvement list",
          "Competitive analysis (5 comps)"
        ],
        cta: "Analyze My Listing",
        highlighted: false,
        badge: null
      },
      {
        name: "Landlord",
        price: "$49",
        price_detail: "/month",
        description: "For landlords with regular turnover",
        features: [
          "5 listings per month",
          "All analysis features",
          "Before/after tracking",
          "Unlimited revisions",
          "Priority support"
        ],
        cta: "Start Free Trial",
        highlighted: true,
        badge: "Most Popular"
      },
      {
        name: "Property Manager",
        price: "$99",
        price_detail: "/month",
        description: "For PMs with 10-50 units",
        features: [
          "25 listings per month",
          "Bulk analysis upload",
          "Portfolio dashboard",
          "Team access (3 seats)",
          "White-label reports"
        ],
        cta: "Start Free Trial",
        highlighted: false,
        badge: null
      },
      {
        name: "Agency",
        price: "$199",
        price_detail: "/month",
        description: "For PMs with 50+ units",
        features: [
          "Unlimited listings",
          "10 team seats",
          "Custom branding",
          "Priority processing",
          "API access"
        ],
        cta: "Contact Sales",
        highlighted: false,
        badge: "Best Value"
      }
    ],
    guarantee: {
      headline: "Money-Back Guarantee",
      description: "If you follow our recommendations and don't see an improvement in inquiries within 14 days, get a full refund."
    },
    pricing_note: "Annual plans save 18%. Need custom pricing? Contact us."
  },
  faq: {
    section_id: "faq",
    headline: "Questions? We've Got Answers.",
    questions: [
      {
        question: "What platforms can you analyze?",
        answer: "We can import listings from Zillow, Apartments.com, Trulia, Craigslist, and Facebook Marketplace. You can also upload photos and text directly."
      },
      {
        question: "How long does analysis take?",
        answer: "Most analyses complete in 2-3 minutes. You'll get an email when your report is ready."
      },
      {
        question: "Do you actually look at my photos?",
        answer: "Yes! Our AI analyzes each photo individually—evaluating lighting, composition, angles, and identifying what rooms or features are missing."
      },
      {
        question: "What if I don't have a listing yet?",
        answer: "Upload your photos and draft description. We'll analyze what you have and help you create a strong listing before you post."
      },
      {
        question: "Will this actually help me rent faster?",
        answer: "Listings with better photos and optimized descriptions consistently get more inquiries. We can't guarantee specific results, but we can tell you exactly what's hurting your listing."
      },
      {
        question: "Is there a money-back guarantee?",
        answer: "If you follow our recommendations and don't see an improvement in inquiries within 14 days, contact us for a refund."
      }
    ]
  },
  final_cta: {
    section_id: "cta",
    headline: "Your vacancy is costing you money",
    subheadline: "Find out what's wrong with your listing in 3 minutes.",
    cta_text: "Analyze My Listing — $19",
    trust_element: "Money-back guarantee • 3-minute analysis • Instant results"
  },
  footer: {
    tagline: "Fill vacancies faster.",
    links: {
      product: ["Features", "Pricing", "Sample Analysis", "API"],
      resources: ["Blog", "Help Center", "Landlord Resources", "Property Management Tips"],
      company: ["About", "Careers", "Press", "Contact"],
      legal: ["Privacy", "Terms", "Refund Policy"]
    },
    social: ["Twitter", "LinkedIn", "Facebook"],
    newsletter: {
      headline: "Landlord tips & updates",
      placeholder: "Your email",
      cta: "Subscribe"
    }
  }
};

const listingPolishExecutionPlan = {
  ideaId: "listingpolish-001",
  userId: null,
  elevatorPitch: JSON.stringify({
    problem_statement: "Landlords and property managers create rental listings that underperform. Bad photos, weak descriptions, missing details, and poor keyword usage mean properties sit vacant for weeks longer than necessary. They don't know what's wrong with their listing or how to fix it—they just see low inquiry rates.",
    solution_summary: "Paste your listing URL or upload photos and text. ListingPolish AI scores each element, identifies specific weaknesses, and provides actionable improvements. Get rewritten descriptions optimized for each platform, photo suggestions with examples of what works, and a competitive analysis of similar listings in your area.",
    target_customer: {
      primary: "Independent landlords with 1-20 units who self-manage and create their own listings",
      secondary: "Small property management companies managing 20-100 units who want to improve vacancy times",
      market_size_estimate: {
        tam: "$30B property management software market",
        sam: "$2B listing and marketing tools for rentals", 
        som: "$100M landlords actively seeking listing optimization help"
      }
    },
    why_now: "Rental market is increasingly competitive in many areas. Platforms like Zillow and Apartments.com use algorithms that reward better listings. Professional landlords are eating independent landlords' lunch with optimized listings. AI can now analyze photos and text at scale affordably."
  }),
  persona: JSON.stringify({
    direct_competitors: [
      {
        name: "Zillow Rental Manager",
        url: "https://zillow.com/rental-manager",
        positioning: "Free listing tool from Zillow",
        pricing: "Free listings, paid syndication",
        strengths: ["Huge audience", "Free", "Integrated with Zillow"],
        weaknesses: ["No optimization feedback", "Generic interface", "Optimizes for Zillow only"]
      },
      {
        name: "Apartments.com (CoStar)",
        url: "https://apartments.com", 
        positioning: "Major rental listing platform",
        pricing: "Free to $500+/mo for premium",
        strengths: ["Large audience", "Good analytics", "Multiple tiers"],
        weaknesses: ["No listing optimization", "Expensive premium tiers", "Platform-locked"]
      },
      {
        name: "RentRedi",
        url: "https://rentredi.com",
        positioning: "All-in-one landlord software",
        pricing: "$12-25/mo",
        strengths: ["Full suite (payments, screening, etc.)", "Modern UX", "Mobile-first"],
        weaknesses: ["Listing syndication only, no optimization", "Jack of all trades"]
      },
      {
        name: "Avail (Realtor.com)",
        url: "https://avail.co",
        positioning: "DIY landlord platform", 
        pricing: "Free, $7/unit/mo Unlimited Plus",
        strengths: ["Free tier", "Good syndication", "Full landlord toolkit"],
        weaknesses: ["No listing analysis", "Basic listing creation"]
      }
    ],
    indirect_competitors: [
      "Hiring a property photographer ($150-400 per shoot)",
      "Hiring a copywriter for listings ($50-200 per listing)",
      "Just posting and hoping",
      "Asking ChatGPT for help (generic, no listing context)",
      "Looking at competing listings and copying"
    ],
    market_gaps: [
      "No tool scores your listing and tells you WHAT'S WRONG",
      "Photo feedback is nonexistent—landlords don't know their photos are bad", 
      "Platform-specific optimization (Zillow vs Apartments.com) doesn't exist",
      "Competitive analysis of nearby listings is manual and tedious",
      "No one connects improvements to actual outcomes (days on market)"
    ]
  }),
  userStories: [
    JSON.stringify({
      positioning_statement: "For landlords whose listings get ignored, ListingPolish is an AI listing optimizer that analyzes photos, descriptions, and positioning to tell you exactly why your property isn't getting inquiries. Unlike generic listing platforms, we diagnose problems and provide specific fixes that reduce vacancy time.",
      unique_value_proposition: "See what's wrong with your listing. Fix it in minutes.",
      key_differentiators: [
        "Diagnostic approach — We don't just create listings, we analyze and fix them",
        "Photo analysis — AI evaluates composition, lighting, angles with specific feedback",
        "Competitive context — See how your listing stacks up against nearby rentals", 
        "Platform-specific — Optimizations for Zillow, Apartments.com, Craigslist, Facebook",
        "Improvement tracking — Before/after metrics show what worked"
      ],
      category: "Rental listing optimization (creating: 'AI listing diagnostics')"
    }),
    JSON.stringify({
      core_features: [
        {
          feature: "Listing URL Import",
          description: "Paste Zillow, Apartments.com, or Craigslist URL. We scrape and analyze the listing.",
          priority: "P0",
          effort: "Medium"
        },
        {
          feature: "Manual Upload",
          description: "Upload photos and paste description text directly for listings not yet posted.",
          priority: "P0",
          effort: "Small"
        },
        {
          feature: "Listing Score", 
          description: "Overall 0-100 score with breakdown by category: photos, description, details, keywords.",
          priority: "P0",
          effort: "Medium"
        },
        {
          feature: "Photo Analysis",
          description: "AI evaluates each photo for lighting, composition, staging. Identifies missing room types.",
          priority: "P0",
          effort: "Large"
        },
        {
          feature: "Description Analysis",
          description: "Evaluates clarity, keywords, feature highlights, call-to-action. Identifies missing details.",
          priority: "P0",
          effort: "Medium"
        },
        {
          feature: "Rewritten Description",
          description: "AI generates improved description with better keywords and structure.",
          priority: "P0",
          effort: "Medium"
        },
        {
          feature: "Actionable Improvements",
          description: "Prioritized list of specific changes ranked by impact. 'Retake kitchen photo' not 'improve photos.'",
          priority: "P0",
          effort: "Medium"
        },
        {
          feature: "Competitive Analysis",
          description: "Compare your listing to 5-10 similar rentals in the area. See what they do better.",
          priority: "P1",
          effort: "Large"
        }
      ],
      post_mvp_features: [
        "Multi-platform description variants (Zillow vs Craigslist tone)",
        "Photo retake shot list with example angles",
        "Staging suggestions based on room type", 
        "Pricing analysis vs comps",
        "Syndication to multiple platforms",
        "A/B testing of listing variants",
        "Vacancy time tracking",
        "Bulk analysis for PMs with portfolios"
      ],
      out_of_scope: [
        "Photography services (use Thumbtack)",
        "Full property management (use Buildium/AppFolio)",
        "Tenant screening",
        "Rent collection",
        "Lease management"
      ],
      mvp_timeline: "6-8 weeks for solo developer, 4-5 weeks for small team"
    }),
    JSON.stringify({
      recommended_stack: {
        frontend: "Next.js 14 — Good for image-heavy apps, file uploads, SEO",
        backend: "Next.js API Routes + Supabase — Handles auth, stores analyses",
        database: "Supabase (Postgres) — User accounts, listing analyses, history",
        auth: "Supabase Auth — Email/password, simple onboarding",
        payments: "Stripe — Per-analysis credits or subscription",
        hosting: "Vercel — Simple deployment, good for image processing",
        ai_services: "OpenAI GPT-4V (vision) + GPT-4 (text) — Core analysis engine",
        web_scraping: "Puppeteer or Playwright — Scrape listing URLs",
        key_integrations: [
          "OpenAI GPT-4V API — Photo analysis",
          "OpenAI GPT-4 API — Text analysis and generation",
          "Cloudinary or Imgix — Image optimization",
          "Bright Data or similar — For reliable web scraping"
        ]
      },
      build_vs_buy: [
        {
          component: "Photo Analysis",
          recommendation: "Buy (GPT-4V)",
          reasoning: "Vision models are commoditized. Use GPT-4V with custom prompts. Prompt engineering is your IP."
        },
        {
          component: "Web Scraping",
          recommendation: "Build + Buy backup",
          reasoning: "Build scrapers for major platforms. Use scraping APIs as fallback for reliability."
        },
        {
          component: "Competitive Analysis",
          recommendation: "Build",
          reasoning: "Requires combining geo data, listing data, and analysis. Core differentiator."
        },
        {
          component: "Image Storage",
          recommendation: "Buy (Cloudinary)",
          reasoning: "Handles resizing, optimization, CDN. Not worth building."
        }
      ],
      estimated_monthly_cost: {
        "0_100_users": "$100-300/mo (Vercel free, Supabase free, $100-200 OpenAI, scraping costs)",
        "100_1000_users": "$500-1,500/mo (OpenAI scales with analyses, scraping costs)",
        "1000_10000_users": "$2,000-5,000/mo (Negotiate OpenAI volume, optimize prompts)"
      }
    })
  ],
  recommendedStack: JSON.stringify({
    pricing_model: "Credit-based with subscription options",
    pricing_rationale: "Each analysis has real cost (AI APIs). Per-listing pricing aligns with landlord mental model—they think per-property. Subscription for PMs with multiple listings. One good analysis can save weeks of vacancy.",
    tiers: [
      {
        name: "Single Analysis",
        price: "$19 one-time",
        target_customer: "Landlords with 1 vacancy to fill",
        features: [
          "Full listing analysis",
          "Photo scoring and feedback", 
          "Rewritten description",
          "Actionable improvement list",
          "Competitive analysis (5 comps)"
        ],
        limitations: [
          "1 listing only",
          "No history access after 30 days"
        ]
      },
      {
        name: "Landlord",
        price: "$49/month ($40/mo annual)",
        target_customer: "Landlords with 1-10 units, regular turnover",
        features: [
          "5 listings per month",
          "All analysis features",
          "Before/after tracking", 
          "Unlimited revisions to descriptions",
          "Priority support"
        ],
        limitations: [
          "5 listings/month"
        ]
      },
      {
        name: "Property Manager",
        price: "$99/month ($80/mo annual)",
        target_customer: "PMs with 10-50 units",
        features: [
          "25 listings per month",
          "Bulk analysis upload",
          "Portfolio dashboard",
          "Team access (3 seats)",
          "White-label reports for owners",
          "API access"
        ],
        limitations: [
          "25 listings/month"
        ]
      },
      {
        name: "Agency",
        price: "$199/month ($166/mo annual)",
        target_customer: "PMs with 50+ units",
        features: [
          "Unlimited listings",
          "10 team seats", 
          "Custom branding",
          "Priority processing",
          "Dedicated support",
          "Full API access"
        ],
        limitations: []
      }
    ],
    free_tier_strategy: "No free tier—but offer a money-back guarantee if score doesn't improve their listing. Free sample analysis on landing page shows value without full report.",
    annual_discount: "18% off annual plans",
    pricing_psychology: "$19 for one analysis is trivial compared to one extra week of vacancy ($1,000-3,000). Position as ROI—'save 2 weeks vacancy time, save $2,000.'"
  }),
  launchChecklist: [
    JSON.stringify({
      brand_name: "ListingPolish",
      tagline: "Fill vacancies faster.",
      brand_personality: [
        "Diagnostic — We find the problems",
        "Practical — Actionable advice, not theory",
        "Expert — We know what good looks like",
        "Efficient — Landlords are busy, we respect that",
        "Results-oriented — Focused on filling units"
      ],
      brand_voice: {
        tone: "Knowledgeable property consultant. Direct about problems, helpful about solutions.",
        do: [
          "Be specific ('Your kitchen photo is too dark' not 'improve photos')",
          "Reference outcomes ('listings with X get 30% more inquiries')",
          "Use landlord/PM language naturally",
          "Acknowledge time/budget constraints",
          "Provide examples when possible"
        ],
        dont: [
          "Don't be preachy about listing quality",
          "Don't use real estate jargon excessively", 
          "Don't make landlords feel dumb about their listings",
          "Don't overpromise ('guaranteed to rent')",
          "Don't ignore that landlords aren't photographers"
        ]
      },
      visual_direction: {
        color_palette: {
          primary: "#2563EB (Royal Blue) — Professional, trustworthy, clear",
          secondary: "#1E3A5F (Navy) — Depth, expertise",
          accent: "#F59E0B (Amber) — Action items, highlights, scores",
          neutrals: ["#F9FAFB", "#111827"]
        },
        typography: {
          display: "Inter or DM Sans — Clean, professional",
          body: "Inter — Excellent readability"
        },
        visual_style: "Clean and informative. Dashboard aesthetic. Data visualizations for scores. Before/after comparisons. Property-appropriate (not generic SaaS). Light mode primary."
      },
      messaging: {
        elevator_pitch_10s: "ListingPolish tells landlords exactly why their listing isn't getting inquiries—and how to fix it.",
        elevator_pitch_30s: "Every week your rental sits vacant costs $500-1,000. ListingPolish AI analyzes your listing photos, description, and positioning to identify exactly what's turning renters off. Get specific fixes—not generic advice—that help you fill your unit faster.",
        key_messages: [
          "Fill vacancies faster.",
          "See what's wrong. Fix it in minutes.",
          "Every week vacant is money lost.",
          "Your listing, diagnosed.",
          "What renters see vs. what they want to see."
        ]
      }
    }),
    JSON.stringify({
      launch_checklist: {
        pre_launch: {
          "4_weeks_before": [
            "Core analysis engine working (photos + text)",
            "Web scraping for Zillow and Apartments.com",
            "Landing page with sample analysis",
            "Test with 20+ real listings across markets"
          ],
          "2_weeks_before": [
            "Beta with 15-20 landlords",
            "Calibrate scoring to match expert assessments",
            "Competitive analysis feature working", 
            "Collect beta testimonials"
          ],
          "1_week_before": [
            "Fix issues from beta",
            "Prepare landlord community posts",
            "Create demo video showing analysis"
          ],
          "day_before": [
            "Full flow test with live listings",
            "Verify Stripe billing"
          ]
        },
        launch_day: [
          {"time": "8:00 AM", "task": "Post in BiggerPockets forums"},
          {"time": "9:00 AM", "task": "Reddit posts in landlord communities"},
          {"time": "10:00 AM", "task": "Twitter announcement"},
          {"time": "11:00 AM", "task": "Facebook landlord groups"},
          {"time": "12:00 PM", "task": "Product Hunt launch"},
          {"time": "All day", "task": "Respond to all comments"},
          {"time": "All day", "task": "Monitor for scraping/analysis failures"}
        ],
        post_launch: {
          week_1: [
            "Respond to all feedback",
            "Fix any scraping issues with specific platforms",
            "Improve analysis accuracy based on feedback",
            "Share success stories"
          ],
          week_2_4: [
            "Add more listing platforms (Craigslist, FB Marketplace)",
            "Create SEO content (rental listing tips)",
            "Improve competitive analysis depth",
            "Build email nurture for one-time purchasers"
          ],
          month_2_3: [
            "PM portfolio features",
            "Before/after tracking",
            "Explore partnerships with PM software",
            "Consider B2B outreach to PMs"
          ]
        },
        launch_platforms: {
          primary: ["BiggerPockets", "Reddit landlord subs", "Product Hunt"],
          secondary: ["Twitter", "Facebook landlord groups"],
          community: [
            "r/landlord",
            "r/realestateinvesting", 
            "BiggerPockets forums",
            "Landlord Facebook groups",
            "PM association newsletters"
          ]
        }
      },
      key_metrics: {
        north_star_metric: {
          metric: "Listings Analyzed Weekly",
          definition: "Complete analyses delivered in a 7-day period",
          target_day_1: "30/week",
          target_month_1: "100/week", 
          target_month_3: "400/week"
        },
        acquisition_metrics: [
          {
            metric: "Website visitors",
            definition: "Unique visitors to marketing site",
            target: "5K/month by month 3"
          },
          {
            metric: "Analysis starts",
            definition: "Users who begin an analysis (URL paste or upload)",
            target: "20% of visitors"
          }
        ],
        activation_metrics: [
          {
            metric: "Analysis completion",
            definition: "% of started analyses that complete to payment",
            target: "50%+"
          },
          {
            metric: "Time to first analysis",
            definition: "Minutes from landing to completed purchase", 
            target: "<10 minutes"
          }
        ],
        retention_metrics: [
          {
            metric: "Repeat analysis rate",
            definition: "% of users who analyze another listing",
            target: "30%+"
          },
          {
            metric: "One-time to subscription conversion",
            definition: "% of single purchasers who upgrade to subscription",
            target: "15%+"
          }
        ],
        revenue_metrics: [
          {
            metric: "Revenue per analysis",
            definition: "Average revenue per completed analysis",
            target: "$22-28 (mix of one-time and subscription)"
          },
          {
            metric: "MRR",
            definition: "Monthly recurring revenue from subscriptions",
            target: "$2K month 3, $8K month 6"
          },
          {
            metric: "Total monthly revenue",
            definition: "Subscriptions + one-time purchases",
            target: "$4K month 3, $15K month 6"
          }
        ],
        unit_economics: {
          target_cac: "$20-40 (blended)",
          target_ltv: "$80+ (2-3 analyses per landlord per year, or subscription)",
          target_ltv_cac_ratio: "3:1+",
          target_payback_period: "Immediate (one-time) or <2 months (subscription)"
        }
      }
    })
  ],
  createdAt: new Date(),
};

async function seedListingPolish() {
  try {
    console.log("Seeding ListingPolish (idea_056)...");

    // Check if idea already exists
    const existingIdea = await db.select().from(ideas).where(eq(ideas.id, listingPolishIdea.id));
    
    if (existingIdea.length > 0) {
      console.log("ListingPolish idea already exists. Updating...");
      await db.update(ideas)
        .set({ 
          ...listingPolishIdea,
          updatedAt: new Date()
        })
        .where(eq(ideas.id, listingPolishIdea.id));
    } else {
      console.log("Creating new ListingPolish idea...");
      await db.insert(ideas).values({
        ...listingPolishIdea,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    // Check if landing page already exists
    const existingLandingPage = await db.select().from(landingPages).where(eq(landingPages.slug, "listingpolish"));
    
    if (existingLandingPage.length > 0) {
      console.log("ListingPolish landing page already exists. Updating...");
      await db.update(landingPages)
        .set({ 
          content: JSON.stringify(listingPolishLanding),
          updatedAt: new Date(),
          isPublished: true 
        })
        .where(eq(landingPages.slug, "listingpolish"));
    } else {
      console.log("Creating new ListingPolish landing page...");
      await db.insert(landingPages).values({
        ideaId: listingPolishIdea.id,
        slug: "listingpolish",
        content: JSON.stringify(listingPolishLanding),
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    // Check if execution plan already exists
    const existingPlan = await db.select().from(executionPlans).where(eq(executionPlans.ideaId, listingPolishExecutionPlan.ideaId));
    
    if (existingPlan.length > 0) {
      console.log("ListingPolish execution plan already exists. Updating...");
      await db.update(executionPlans).set(listingPolishExecutionPlan).where(eq(executionPlans.ideaId, listingPolishExecutionPlan.ideaId));
    } else {
      console.log("Creating new ListingPolish execution plan...");
      await db.insert(executionPlans).values(listingPolishExecutionPlan);
    }

    console.log("Done! ListingPolish has been added to the idea library with comprehensive content.");

  } catch (error) {
    console.error("Error seeding ListingPolish:", error);
    process.exit(1);
  }
}

// Run the seeding if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedListingPolish();
}

export { seedListingPolish };