import { db } from "../server/db";
import { ideas, landingPages, executionPlans } from "../shared/schema";
import { eq } from "drizzle-orm";

// RenewalRadar - idea_custom_005
const renewalRadarIdea = {
  id: "renewalradar-001",
  userId: null,
  title: "RenewalRadar",
  oneLiner: "Never miss a renewal. Never overpay again.",
  problem: "Companies waste thousands on auto-renewed contracts they meant to cancel. That $500/month tool nobody uses anymore? It just renewed for another year. Renewal negotiations start too late—vendors know you have no leverage 3 days before deadline. Critical dates are buried in PDFs nobody reads, confirmation emails nobody saves, and terms pages that change without notice. The average company with 50+ subscriptions loses $20-50K annually to unwanted renewals and missed negotiation windows.",
  targetCustomer: "Operations and procurement teams managing 20+ vendor contracts at companies with $500K+ in annual software spend. Secondary: Finance teams at startups and SMBs who handle vendor management without dedicated procurement.",
  solution: "Upload contracts or forward confirmation emails. AI extracts renewal dates, auto-renewal clauses, cancellation windows, and pricing terms. Get alerts at the optimal time for negotiation—not when it's too late. Track every vendor relationship in one place. See exactly how much you've saved by canceling or renegotiating before deadlines.",
  monetization: "Tiered subscription: Starter $49/month (25 contracts), Growth $149/month (100 contracts), Business $349/month (unlimited contracts). 14-day free trial with full features.",
  tags: ["contract-management", "procurement", "saas", "b2b-tools", "renewal-tracking"],
  keywords: null,
  status: "validated" as const,
  demandScore: 94,
  demandBand: "high" as const,
  trendLabel: "rising" as const,
  validationSummary: null,
  validatedAt: null,
  isPublic: true,
  isSaved: false,
  whyNow: "Perfect storm: (1) Average company now uses 100+ SaaS tools—tracking is impossible manually, (2) Subscription fatigue is real—nobody knows what they're paying for, (3) AI can now extract terms from contracts accurately, (4) Economic pressure means companies are auditing spend more carefully, (5) Auto-renewal is now the default—vendors count on you forgetting.",
  revenueImpact: "Stop wasting money on forgotten renewals. Negotiate from a position of strength. Save $20K+ annually on avoided auto-renewals. Reduce contract management time by 80%.",
  marketSize: "$8B",
  competitionLevel: "Medium" as const,
  category: "business-tools" as const,
  businessType: "b2b" as const,
  priceRange: "smb" as const
};

const renewalRadarLanding = {
  meta: {
    title: "RenewalRadar — Never Miss a Contract Renewal Again",
    description: "Track contract renewals, get alerts before deadlines, and stop wasting money on auto-renewed subscriptions. AI-powered extraction. SMB-friendly pricing. Try free.",
    og_image_concept: "Professional dashboard showing contract renewal timeline with AI extraction interface and savings tracker"
  },
  hero: {
    headline: "Stop wasting money on forgotten renewals",
    subheadline: "Upload your contracts. We extract the terms, track the dates, and alert you before it's too late to cancel or negotiate. Companies save $20K+ annually.",
    cta_primary: {
      text: "Start 14-Day Free Trial",
      url: "/signup"
    },
    cta_secondary: {
      text: "See how it works →",
      url: "#how-it-works"
    },
    social_proof_snippet: "Trusted by 1,200+ companies • $2M+ saved on renewals",
    hero_visual: {
      type: "product_screenshot" as const,
      description: "Clean renewal dashboard showing contract timeline, AI extraction interface, and alert system"
    }
  },
  problem_section: {
    section_id: "problem",
    eyebrow: "Contract Chaos",
    headline: "Your contracts are costing you more than you think",
    description: "Auto-renewals, missed deadlines, and scattered contract terms are bleeding your budget dry.",
    pain_points: [
      {
        icon: "refresh-cw",
        title: "Auto-renewals sneak past you",
        description: "That tool nobody uses anymore? It just auto-renewed for another year. You meant to cancel it. The email is buried somewhere. Now you're locked in for $6,000 you didn't want to spend."
      },
      {
        icon: "clock-x",
        title: "Negotiation windows close before you notice",
        description: "Vendors love 30-day cancellation windows. By the time you remember to negotiate, you have no leverage. The discount you could have gotten? Gone."
      },
      {
        icon: "file-x",
        title: "Contract terms live in scattered PDFs",
        description: "Renewal dates are buried in page 12 of a contract nobody's opened since signing. When does it renew? What's the cancellation window? Good luck finding out."
      },
      {
        icon: "credit-card",
        title: "Vendors count on you forgetting",
        description: "Auto-renewal is their business model. They make it easy to sign up, hard to cancel. Those buried terms and tight deadlines aren't accidents."
      }
    ],
    stat_callout: {
      number: "$20-50K",
      label: "wasted annually by companies with 50+ subscriptions on unwanted renewals",
      source: "Contract Management Study 2024"
    }
  },
  solution_section: {
    section_id: "solution",
    eyebrow: "AI-Powered Intelligence",
    headline: "Every renewal, tracked. Every deadline, caught.",
    description: "RenewalRadar extracts terms from your contracts automatically and alerts you when you can still negotiate—not when it's too late.",
    features: [
      {
        icon: "upload",
        title: "AI Contract Extraction",
        description: "Upload PDFs or forward confirmation emails. We extract vendor, amount, renewal date, auto-renewal terms, and cancellation window automatically."
      },
      {
        icon: "bell",
        title: "Smart Alert Timing",
        description: "Get notified at 90, 60, and 30 days—when you can still act. Not 3 days before when it's too late."
      },
      {
        icon: "calendar",
        title: "Renewal Calendar",
        description: "See everything coming up in one view. Color-coded by urgency. Filter by amount, vendor, or status."
      },
      {
        icon: "dollar-sign",
        title: "Savings Tracker",
        description: "Log every cancellation and negotiation. See your running total of money saved. Prove the ROI."
      },
      {
        icon: "book-open",
        title: "Negotiation Playbooks",
        description: "Scripts for negotiating with common vendors. What discount to ask for. What competitors to mention."
      },
      {
        icon: "users",
        title: "Team Collaboration",
        description: "Assign renewals to owners. Track status and notes. Everyone knows who's handling what."
      }
    ],
    visual: {
      type: "demo_video" as const,
      description: "Screen recording showing contract upload, AI extraction, and alert configuration"
    }
  },
  how_it_works: {
    section_id: "how-it-works",
    eyebrow: "Simple Setup",
    headline: "Up and running in 10 minutes",
    steps: [
      {
        number: 1,
        title: "Upload your contracts",
        description: "Drag and drop PDFs or forward confirmation emails. We extract the important terms automatically.",
        visual_description: "File upload interface with contract PDF being processed by AI"
      },
      {
        number: 2,
        title: "Review and confirm",
        description: "Check the extracted terms, add any missing details. Your renewal calendar populates instantly.",
        visual_description: "Contract details form with AI-extracted information being reviewed"
      },
      {
        number: 3,
        title: "Get alerts, take action",
        description: "We notify you at the right time. Cancel, negotiate, or renew—on your terms, not the vendor's.",
        visual_description: "Alert notification with action buttons for renewal decisions"
      }
    ]
  },
  social_proof: {
    section_id: "proof",
    eyebrow: "Customer Success",
    headline: "Companies are saving thousands",
    testimonials: [
      {
        quote: "RenewalRadar caught a $15K auto-renewal for software we hadn't used in months. The alert came 60 days early—plenty of time to cancel properly. Paid for itself 10x over.",
        author: "Sarah Chen",
        role: "Director of Operations",
        company: "TechFlow (Series A)",
        avatar_description: "Female ops leader with modern office background",
        result: "$15K saved"
      },
      {
        quote: "I was negotiating our Salesforce renewal with 3 days notice—they knew I had no leverage. Now I start 90 days early and saved 30% using their playbooks.",
        author: "Mike Rodriguez",
        role: "VP Finance",
        company: "GrowthCorp",
        avatar_description: "Male finance executive in professional setting",
        result: "30% renewal savings"
      },
      {
        quote: "Before RenewalRadar, I spent hours digging through contracts to find renewal dates. Now everything's extracted automatically. It's like having a procurement team in a box.",
        author: "Jennifer Park",
        role: "Office Manager",
        company: "CreativeStudio",
        avatar_description: "Female manager with creative workspace background",
        result: "10 hours/month saved"
      }
    ],
    stats: [
      {
        number: "$2M+",
        label: "Saved for Customers",
        context: "in avoided renewals"
      },
      {
        number: "5,000+",
        label: "Contracts Tracked",
        context: "and counting"
      },
      {
        number: "87%",
        label: "Negotiation Success Rate",
        context: "with our playbooks"
      },
      {
        number: "45 days",
        label: "Average Alert Lead Time",
        context: "before deadlines"
      }
    ],
    logos: {
      headline: "Integrates With Your Stack",
      companies: ["Slack", "Google Calendar", "Outlook", "Teams"]
    },
    trust_badges: [
      {
        icon: "shield",
        text: "SOC 2 Compliant"
      },
      {
        icon: "lock",
        text: "Bank-Level Encryption"
      },
      {
        icon: "clock",
        text: "10-Minute Setup"
      }
    ]
  },
  pricing: {
    section_id: "pricing",
    eyebrow: "ROI-Focused Pricing",
    headline: "One avoided renewal pays for a year",
    subheadline: "$49/month to track 25 contracts. The ROI is obvious.",
    plans: [
      {
        name: "Starter",
        price: "$49",
        price_detail: "/month",
        description: "For small teams managing essential vendor contracts",
        features: [
          "Up to 25 contracts tracked",
          "Unlimited contract uploads",
          "AI term extraction",
          "Renewal calendar",
          "Email and Slack alerts",
          "Basic savings tracking",
          "2 team seats",
          "Email support"
        ],
        cta: "Start Free Trial",
        highlighted: false,
        badge: null
      },
      {
        name: "Growth",
        price: "$149",
        price_detail: "/month",
        description: "For growing companies with expanding vendor relationships",
        features: [
          "Up to 100 contracts tracked",
          "Everything in Starter",
          "Email forwarding capture",
          "Negotiation playbooks (top 50 vendors)",
          "Spend analytics",
          "5 team seats",
          "Priority support"
        ],
        cta: "Start Free Trial",
        highlighted: true,
        badge: "Most Popular"
      },
      {
        name: "Business",
        price: "$349",
        price_detail: "/month",
        description: "For companies with significant software spend",
        features: [
          "Unlimited contracts",
          "Everything in Growth",
          "Full negotiation playbook library",
          "Benchmark pricing data",
          "API access",
          "Unlimited team seats",
          "SSO (SAML)",
          "Dedicated success manager",
          "Quarterly business reviews"
        ],
        cta: "Contact Sales",
        highlighted: false,
        badge: "Enterprise"
      }
    ],
    guarantee: {
      headline: "14-Day Free Trial",
      description: "Try any plan free for 14 days. If you don't save money on renewals, we'll refund your first month."
    },
    pricing_note: "Save 20% with annual billing. All plans include unlimited contract uploads."
  },
  faq: {
    section_id: "faq",
    headline: "Questions? We've got answers.",
    questions: [
      {
        question: "What types of contracts can I upload?",
        answer: "Any PDF contract or subscription confirmation email. SaaS subscriptions, software licenses, service agreements, even hardware maintenance contracts. If it has a renewal date, we can track it."
      },
      {
        question: "How accurate is the AI extraction?",
        answer: "Very accurate for standard contracts—90%+ of terms extracted correctly. You can review and edit anything. Complex or unusual contracts may need manual tweaks, which takes seconds."
      },
      {
        question: "Are my contracts secure?",
        answer: "Yes. All contracts are encrypted at rest and in transit. We're SOC 2 Type II compliant. Access is restricted to your team only. We never share or sell your data."
      },
      {
        question: "Can I import existing contracts in bulk?",
        answer: "Yes! Upload multiple PDFs at once or forward a batch of confirmation emails. Most companies are fully set up within an hour."
      },
      {
        question: "Do you negotiate for us?",
        answer: "We don't negotiate on your behalf (yet). We give you the playbooks, scripts, and timing to negotiate effectively yourself. You stay in control of vendor relationships."
      },
      {
        question: "What if I have contracts without clear renewal dates?",
        answer: "No problem—add them manually or mark them as 'month-to-month' or 'perpetual.' We'll still help you track spend and terms."
      }
    ]
  },
  final_cta: {
    section_id: "cta",
    headline: "Stop letting money slip through the cracks",
    subheadline: "14-day free trial. See your renewals clearly. Save thousands.",
    cta_text: "Start Free Trial →",
    trust_element: "No credit card required • 14-day free trial • SOC 2 compliant"
  },
  footer: {
    tagline: "Never miss a renewal. Never overpay again.",
    links: {
      product: ["Features", "Pricing", "Security", "Integrations"],
      resources: ["Blog", "Help Center", "Negotiation Guides", "Contract Templates"],
      company: ["About", "Careers", "Press", "Contact"],
      legal: ["Privacy", "Terms", "Security", "SOC 2"]
    },
    social: ["Twitter", "LinkedIn"],
    newsletter: {
      headline: "Contract management tips & updates",
      placeholder: "Your email",
      cta: "Subscribe"
    }
  }
};

const renewalRadarExecutionPlan = {
  elevator_pitch: {
    problem_statement: "Companies waste thousands on auto-renewed contracts they meant to cancel. That $500/month tool nobody uses anymore? It just renewed for another year. Renewal negotiations start too late—vendors know you have no leverage 3 days before deadline. Critical dates are buried in PDFs nobody reads, confirmation emails nobody saves, and terms pages that change without notice. The average company with 50+ subscriptions loses $20-50K annually to unwanted renewals and missed negotiation windows.",
    solution_summary: "Upload contracts or forward confirmation emails. AI extracts renewal dates, auto-renewal clauses, cancellation windows, and pricing terms. Get alerts at the optimal time for negotiation—not when it's too late. Track every vendor relationship in one place. See exactly how much you've saved by canceling or renegotiating before deadlines.",
    target_customer: {
      primary: "Operations and procurement teams managing 20+ vendor contracts at companies with $500K+ in annual software spend",
      secondary: "Finance teams at startups and SMBs who handle vendor management without dedicated procurement",
      market_size_estimate: {
        tam: "$8B contract management and procurement software market",
        sam: "$1.5B SaaS subscription and renewal management",
        som: "$150M SMBs actively seeking renewal tracking solutions (500K+ companies with 20+ subscriptions)"
      }
    },
    why_now: "Perfect storm: (1) Average company now uses 100+ SaaS tools—tracking is impossible manually, (2) Subscription fatigue is real—nobody knows what they're paying for, (3) AI can now extract terms from contracts accurately, (4) Economic pressure means companies are auditing spend more carefully, (5) Auto-renewal is now the default—vendors count on you forgetting."
  },
  
  persona: {
    direct_competitors: [
      {
        name: "Vendr",
        url: "https://www.vendr.com",
        positioning: "SaaS buying and renewal platform with negotiation services",
        pricing: "Custom pricing, typically $15K-50K+/year",
        strengths: ["Negotiation expertise", "Benchmark data", "Full-service option", "Enterprise focus"],
        weaknesses: ["Very expensive", "Overkill for SMBs", "Requires giving up control", "Long sales cycle"]
      },
      {
        name: "Zylo",
        url: "https://zylo.com",
        positioning: "SaaS management platform",
        pricing: "$20K+/year",
        strengths: ["Comprehensive SaaS discovery", "Usage analytics", "Enterprise features"],
        weaknesses: ["Enterprise pricing", "Complex implementation", "Not focused on renewals", "Requires SSO/API access"]
      },
      {
        name: "Productiv",
        url: "https://productiv.com",
        positioning: "SaaS intelligence platform",
        pricing: "Enterprise only (undisclosed)",
        strengths: ["Deep usage analytics", "Integrations", "Enterprise scale"],
        weaknesses: ["Enterprise only", "Expensive", "Focused on usage not renewals", "Complex"]
      },
      {
        name: "Tropic",
        url: "https://tropicapp.io",
        positioning: "Procurement and contract management",
        pricing: "Starts at $1K+/month",
        strengths: ["Intake workflows", "Negotiations", "Good UI"],
        weaknesses: ["Expensive for just renewal tracking", "Broader scope", "Minimum spend requirements"]
      },
      {
        name: "Spreadsheets / Calendar Reminders",
        url: "N/A",
        positioning: "DIY tracking",
        pricing: "Free",
        strengths: ["Free", "Flexible", "Full control"],
        weaknesses: ["Manual entry", "Gets stale", "No extraction", "No negotiation timing", "Contracts get lost"]
      }
    ],
    indirect_competitors: [
      "Contract management tools (Ironclad, ContractSafe) — broader scope, not renewal-focused",
      "Expense management (Ramp, Brex) — surface subscriptions but don't track renewals",
      "IT asset management (Zluri, Torii) — IT-focused, not finance/ops",
      "Calendar apps — reminders without intelligence"
    ],
    market_gaps: [
      "No affordable solution for SMBs (everything is $15K+/year)",
      "Existing tools require complex integrations—most companies just want to upload contracts",
      "No focus on negotiation timing—just basic reminders",
      "No easy way to track savings from avoided renewals",
      "Enterprise tools are overkill for 20-200 subscription companies",
      "No one helps with the actual negotiation playbook"
    ]
  },

  user_stories: [
    {
      positioning_statement: "For operations and finance teams drowning in vendor renewals, RenewalRadar is a contract intelligence tool that extracts renewal terms and alerts you at the optimal time to negotiate or cancel. Unlike enterprise platforms that cost $20K+/year or spreadsheets that go stale, we give you always-current renewal visibility for a price SMBs can actually afford.",
      unique_value_proposition: "Never miss a renewal. Never overpay again.",
      key_differentiators: [
        "Upload-and-forget simplicity: Just upload contracts or forward emails—AI extracts everything automatically",
        "Negotiation-timed alerts: We tell you when to act (60-90 days out), not just when to panic (3 days out)",
        "SMB-friendly pricing: $49-349/month, not $20K+/year like enterprise tools",
        "Savings tracker: See exactly how much you've saved by canceling or negotiating—proves ROI instantly",
        "Negotiation playbooks: Scripts and benchmarks for common vendors so you know what discount to ask for"
      ],
      category: "Contract and renewal management (creating subcategory: 'Renewal Intelligence')"
    },

    {
      core_features: [
        {
          feature: "Contract Upload & Parsing",
          description: "Upload PDFs, forward confirmation emails, or connect to email for auto-capture. AI extracts vendor name, renewal date, amount, term length, auto-renewal clause, and cancellation window.",
          priority: "P0",
          effort: "Large"
        },
        {
          feature: "Renewal Calendar",
          description: "Visual calendar showing all upcoming renewals. Color-coded by urgency and action needed. Filter by amount, vendor, or status.",
          priority: "P0",
          effort: "Medium"
        },
        {
          feature: "Smart Alerts",
          description: "Configurable alerts at optimal times: 90 days (start planning), 60 days (begin negotiation), 30 days (final decision), 7 days (last chance). Email and Slack notifications.",
          priority: "P0",
          effort: "Medium"
        },
        {
          feature: "Vendor Dashboard",
          description: "All contracts with a vendor in one place. Total spend, contract history, upcoming renewals. See vendor relationship at a glance.",
          priority: "P0",
          effort: "Medium"
        },
        {
          feature: "Action Tracking",
          description: "Mark renewals as: renewing, negotiating, canceling, or canceled. Notes field for negotiation progress. Status history for audit trail.",
          priority: "P0",
          effort: "Small"
        },
        {
          feature: "Savings Calculator",
          description: "Track savings from canceled subscriptions and negotiated discounts. Running total of money saved. ROI proof for the tool itself.",
          priority: "P0",
          effort: "Small"
        },
        {
          feature: "Email Forwarding Capture",
          description: "Unique email address to forward confirmation emails. AI extracts subscription details. Lower friction than uploading PDFs.",
          priority: "P1",
          effort: "Medium"
        },
        {
          feature: "Negotiation Playbooks",
          description: "Scripts and benchmarks for common vendors (Salesforce, HubSpot, AWS, etc.). What discount to ask for, what competitors to mention, timing tips.",
          priority: "P1",
          effort: "Medium"
        },
        {
          feature: "Team Collaboration",
          description: "Assign renewals to team members. Comments and @mentions. Shared visibility into status and negotiations.",
          priority: "P1",
          effort: "Medium"
        },
        {
          feature: "Spend Analytics",
          description: "Total spend by category, vendor, and time period. Spend trends. Identify consolidation opportunities.",
          priority: "P1",
          effort: "Medium"
        }
      ],
      post_mvp_features: [
        "Email inbox integration (auto-capture without forwarding)",
        "Credit card statement import for subscription discovery",
        "Benchmark pricing data (what others pay for same tools)",
        "API integrations with accounting software",
        "Multi-year contract amortization tracking",
        "Renewal calendar export (Google Cal, Outlook)",
        "Mobile app for quick renewal checks",
        "SSO and advanced permissions for enterprise",
        "Audit log for compliance",
        "White-label for MSPs and consultants"
      ],
      out_of_scope: [
        "Actual negotiation services (we enable, not execute)",
        "Procurement workflows (RFPs, approvals—use Zip, Airbase)",
        "Full contract lifecycle management (use Ironclad)",
        "SaaS usage analytics (use Productiv, Zylo)",
        "Expense management (use Ramp, Brex)"
      ],
      mvp_timeline: "8-10 weeks for solo developer, 5-6 weeks for small team"
    },

    {
      recommended_stack: {
        frontend: "Next.js 14 (App Router) — Dashboard-focused, calendar views",
        backend: "Next.js API Routes + Supabase Edge Functions",
        database: "Supabase (Postgres) — Contracts, vendors, alerts, users",
        auth: "Supabase Auth — Email/password + SSO for larger teams",
        payments: "Stripe — Subscription billing",
        hosting: "Vercel — Fast for dashboard interactions",
        file_storage: "Supabase Storage or Cloudflare R2 — Contract PDFs",
        email_processing: "Postmark or SendGrid inbound — For forwarded emails",
        key_integrations: [
          "OpenAI GPT-4 — Contract parsing and term extraction",
          "Slack API — Alert notifications",
          "Google Calendar API — Renewal export (optional)",
          "Resend — Email alerts and digests",
          "Textract or Document AI — PDF extraction (backup to GPT-4)"
        ]
      },
      build_vs_buy: [
        {
          component: "Contract Parsing",
          recommendation: "Build (with GPT-4 Vision + text extraction)",
          reasoning: "Core differentiator. GPT-4 handles most contracts well. Build custom prompts and validation. Fallback to manual entry for edge cases."
        },
        {
          component: "Email Ingestion",
          recommendation: "Buy (Postmark Inbound)",
          reasoning: "Email receiving is solved. Postmark is reliable and affordable. Parse the content yourself."
        },
        {
          component: "Calendar/Scheduling",
          recommendation: "Build (simple) + integrate (export)",
          reasoning: "Build your own renewal calendar UI. Add export to Google Calendar for convenience."
        },
        {
          component: "Alerts/Notifications",
          recommendation: "Build (logic) + Buy (delivery)",
          reasoning: "Build alert scheduling logic. Use Resend for email, Slack webhooks for Slack."
        },
        {
          component: "PDF Storage",
          recommendation: "Buy (Supabase Storage or R2)",
          reasoning: "Commodity storage. Don't build this. Encrypt at rest."
        }
      ],
      estimated_monthly_cost: {
        "0_100_users": "$150-300/mo (Vercel, Supabase, ~$100 OpenAI, ~$30 email services)",
        "100_500_users": "$500-1,200/mo (More contract processing, Supabase Pro, increased storage)",
        "500_2000_users": "$2,000-5,000/mo (OpenAI is primary cost driver at scale)"
      }
    }
  ],

  recommended_stack: {
    pricing_model: "Tiered subscription based on contracts tracked",
    pricing_rationale: "Price by contracts, not users—aligns with value delivered. One canceled $500/month subscription pays for a year of service. ROI is obvious and immediate.",
    tiers: [
      {
        name: "Starter",
        price: "$49/month ($39/mo annual)",
        target_customer: "Small teams managing 20-50 subscriptions",
        features: [
          "Up to 25 contracts tracked",
          "Unlimited contract uploads",
          "AI term extraction",
          "Renewal calendar",
          "Email and Slack alerts",
          "Basic savings tracking",
          "2 team seats",
          "Email support"
        ],
        limitations: [
          "25 contracts",
          "2 seats",
          "No negotiation playbooks"
        ]
      },
      {
        name: "Growth",
        price: "$149/month ($119/mo annual)",
        target_customer: "Growing companies with 50-150 subscriptions",
        features: [
          "Up to 100 contracts tracked",
          "Everything in Starter",
          "Email forwarding capture",
          "Negotiation playbooks (top 50 vendors)",
          "Spend analytics",
          "5 team seats",
          "Priority support"
        ],
        limitations: [
          "100 contracts",
          "5 seats"
        ]
      },
      {
        name: "Business",
        price: "$349/month ($279/mo annual)",
        target_customer: "Companies with significant software spend (150+ subscriptions)",
        features: [
          "Unlimited contracts",
          "Everything in Growth",
          "Full negotiation playbook library",
          "Benchmark pricing data",
          "API access",
          "Unlimited team seats",
          "SSO (SAML)",
          "Dedicated success manager",
          "Quarterly business reviews"
        ],
        limitations: []
      }
    ],
    free_tier_strategy: "14-day free trial with full Growth features. No free tier—this is a B2B tool where value is immediately obvious. One avoided auto-renewal pays for months of service.",
    annual_discount: "20% discount (2.4 months free) for annual plans",
    pricing_psychology: "Frame against cost of missed renewals. 'One forgotten $200/month subscription = $2,400/year wasted. RenewalRadar is $49/month.' ROI is 4x even on smallest wins."
  },

  launch_checklist: [
    {
      brand_name: "RenewalRadar",
      tagline: "Never miss a renewal. Never overpay again.",
      brand_personality: [
        "Vigilant — Always watching so you don't have to",
        "Money-saving — Every feature is about protecting your budget", 
        "Organized — Brings order to contract chaos",
        "Proactive — Alerts before problems, not after",
        "Trustworthy — Your contracts are sensitive; we treat them that way"
      ],
      brand_voice: {
        tone: "Professional but approachable. Like a sharp ops person who's saved the company thousands and wants to help you do the same.",
        do: [
          "Talk in terms of money saved",
          "Use clear, direct language",
          "Acknowledge the pain of contract management",
          "Celebrate savings wins",
          "Be specific about timelines (60 days, 90 days)"
        ],
        dont: [
          "Don't use procurement jargon",
          "Don't be preachy about organization",
          "Don't make it seem complicated",
          "Don't oversell—let the ROI speak for itself",
          "Don't be corporate or stuffy"
        ]
      },
      visual_direction: {
        color_palette: {
          primary: "#6366F1 (Indigo) — Professional, trustworthy, modern",
          secondary: "#4338CA (Dark indigo) — Depth, authority",
          success: "#22C55E (Green) — Money saved, contract canceled on time",
          warning: "#F59E0B (Amber) — Renewal approaching, action needed",
          danger: "#EF4444 (Red) — Deadline imminent, auto-renewal risk",
          neutrals: ["#F8FAFC (slate 50)", "#0F172A (slate 900)"]
        },
        typography: {
          display: "Inter — Clean, professional, works great with data",
          body: "Inter — Consistent across the product"
        },
        visual_style: "Clean, professional, dashboard-focused. Calendar is the hero view. Use color to signal urgency (green = handled, amber = coming up, red = urgent). Show savings prominently. Dark mode for the late-night contract review."
      },
      messaging: {
        elevator_pitch_10s: "RenewalRadar tracks all your vendor contracts and alerts you before renewals—so you never waste money on auto-renewed subscriptions or miss your negotiation window.",
        elevator_pitch_30s: "Companies lose thousands on auto-renewed contracts they meant to cancel, and miss negotiation windows because renewal dates are buried in PDFs. RenewalRadar extracts terms from your contracts automatically, alerts you at the right time (60-90 days out, not 3 days), and tracks exactly how much you've saved. Never overpay for software again.",
        key_messages: [
          "Never miss a renewal. Never overpay again.",
          "Your contracts, extracted and organized in minutes.",
          "Alerts when you can act, not when it's too late.",
          "See exactly how much you've saved.",
          "The ROI is obvious: one avoided renewal pays for a year."
        ]
      }
    },

    {
      hero: {
        headline: "Stop wasting money on forgotten renewals",
        subheadline: "Upload your contracts. We extract the terms, track the dates, and alert you before it's too late to cancel or negotiate. Companies save $20K+ annually.",
        cta_primary: "Start 14-Day Free Trial",
        cta_secondary: "See how it works →"
      },
      problem_section: {
        headline: "Your contracts are costing you more than you think",
        pain_points: [
          {
            pain: "Auto-renewals sneak past you",
            detail: "That tool nobody uses anymore? It just auto-renewed for another year. You meant to cancel it. The email is buried somewhere. Now you're locked in for $6,000 you didn't want to spend."
          },
          {
            pain: "Negotiation windows close before you notice", 
            detail: "Vendors love 30-day cancellation windows. By the time you remember to negotiate, you have no leverage. The discount you could have gotten? Gone."
          },
          {
            pain: "Contract terms live in scattered PDFs",
            detail: "Renewal dates are buried in page 12 of a contract nobody's opened since signing. When does it renew? What's the cancellation window? Good luck finding out."
          }
        ]
      },
      solution_section: {
        headline: "Every renewal, tracked. Every deadline, caught.",
        features: [
          {
            title: "AI Contract Extraction",
            description: "Upload PDFs or forward confirmation emails. We extract vendor, amount, renewal date, auto-renewal terms, and cancellation window automatically.",
            icon_suggestion: "Document/AI icon"
          },
          {
            title: "Smart Alert Timing",
            description: "Get notified at 90, 60, and 30 days—when you can still act. Not 3 days before when it's too late.",
            icon_suggestion: "Bell/clock icon"
          },
          {
            title: "Renewal Calendar",
            description: "See everything coming up in one view. Color-coded by urgency. Filter by amount, vendor, or status.",
            icon_suggestion: "Calendar icon"
          },
          {
            title: "Savings Tracker",
            description: "Log every cancellation and negotiation. See your running total of money saved. Prove the ROI.",
            icon_suggestion: "Dollar/chart icon"
          },
          {
            title: "Negotiation Playbooks",
            description: "Scripts for negotiating with common vendors. What discount to ask for. What competitors to mention.",
            icon_suggestion: "Book/strategy icon"
          },
          {
            title: "Team Collaboration",
            description: "Assign renewals to owners. Track status and notes. Everyone knows who's handling what.",
            icon_suggestion: "People/team icon"
          }
        ]
      },
      how_it_works: {
        headline: "Up and running in 10 minutes",
        steps: [
          {
            step: 1,
            title: "Upload your contracts",
            description: "Drag and drop PDFs or forward confirmation emails. We extract the important terms automatically."
          },
          {
            step: 2,
            title: "Review and confirm",
            description: "Check the extracted terms, add any missing details. Your renewal calendar populates instantly."
          },
          {
            step: 3,
            title: "Get alerts, take action",
            description: "We notify you at the right time. Cancel, negotiate, or renew—on your terms, not the vendor's."
          }
        ]
      },
      social_proof: {
        headline: "Companies are saving thousands",
        testimonial_placeholders: [
          "Ops leader who caught a $15K auto-renewal and canceled in time",
          "Startup CFO who negotiated 30% off a major renewal using playbooks",
          "IT manager who finally has visibility into all vendor contracts"
        ],
        stats_to_display: [
          "$X.XM saved by customers",
          "XX,XXX contracts tracked", 
          "XX% average savings on negotiations",
          "XX hours saved per month on contract tracking"
        ]
      },
      pricing_section: {
        headline: "One avoided renewal pays for a year",
        subheadline: "$49/month to track 25 contracts. The ROI is obvious."
      },
      faq: [
        {
          question: "What types of contracts can I upload?",
          answer: "Any PDF contract or subscription confirmation email. SaaS subscriptions, software licenses, service agreements, even hardware maintenance contracts. If it has a renewal date, we can track it."
        },
        {
          question: "How accurate is the AI extraction?",
          answer: "Very accurate for standard contracts—90%+ of terms extracted correctly. You can review and edit anything. Complex or unusual contracts may need manual tweaks, which takes seconds."
        },
        {
          question: "Are my contracts secure?",
          answer: "Yes. All contracts are encrypted at rest and in transit. We're SOC 2 Type II compliant. Access is restricted to your team only. We never share or sell your data."
        },
        {
          question: "Can I import existing contracts in bulk?",
          answer: "Yes! Upload multiple PDFs at once or forward a batch of confirmation emails. Most companies are fully set up within an hour."
        },
        {
          question: "Do you negotiate for us?",
          answer: "We don't negotiate on your behalf (yet). We give you the playbooks, scripts, and timing to negotiate effectively yourself. You stay in control of vendor relationships."
        },
        {
          question: "What if I have contracts without clear renewal dates?",
          answer: "No problem—add them manually or mark them as 'month-to-month' or 'perpetual.' We'll still help you track spend and terms."
        }
      ],
      final_cta: {
        headline: "Stop letting money slip through the cracks",
        subheadline: "14-day free trial. See your renewals clearly. Save thousands.",
        cta: "Start Free Trial →"
      },
      meta: {
        page_title: "RenewalRadar — Never Miss a Contract Renewal Again",
        meta_description: "Track contract renewals, get alerts before deadlines, and stop wasting money on auto-renewed subscriptions. AI-powered extraction. SMB-friendly pricing. Try free."
      }
    },

    {
      pre_launch: {
        "4_weeks_before": [
          {task: "Contract parsing MVP (PDF upload + GPT-4 extraction)", category: "Product", critical: true},
          {task: "Renewal calendar UI", category: "Product", critical: true},
          {task: "Basic alert system (email)", category: "Product", critical: true},
          {task: "Landing page with trial signup", category: "Marketing", critical: true},
          {task: "Start LinkedIn content on vendor management", category: "Marketing", critical: false},
          {task: "Identify 50 target companies for outreach", category: "Marketing", critical: false}
        ],
        "2_weeks_before": [
          {task: "Email forwarding capture working", category: "Product", critical: true},
          {task: "Savings tracker implemented", category: "Product", critical: true},
          {task: "Beta test with 20-30 companies", category: "Product", critical: true},
          {task: "Collect testimonials and savings numbers", category: "Marketing", critical: true},
          {task: "Set up Stripe billing", category: "Product", critical: true},
          {task: "Create negotiation playbooks for top 20 vendors", category: "Product", critical: false}
        ],
        "1_week_before": [
          {task: "Final product polish", category: "Product", critical: true},
          {task: "Security review of contract storage", category: "Product", critical: true},
          {task: "Prepare Product Hunt assets", category: "Marketing", critical: true},
          {task: "Reach out to ops/finance communities", category: "Marketing", critical: false},
          {task: "Schedule launch day posts", category: "Marketing", critical: true}
        ],
        "day_before": [
          {task: "Schedule Product Hunt launch", category: "Marketing", critical: true},
          {task: "Pre-write comment responses", category: "Support", critical: true},
          {task: "Test contract upload one more time", category: "Product", critical: true},
          {task: "Rest up", category: "Personal", critical: true}
        ]
      },
      launch_day: [
        {time: "12:01 AM PT", task: "Product Hunt goes live", platform: "Product Hunt"},
        {time: "6:00 AM", task: "Maker comment with story (auto-renewal horror story)", platform: "Product Hunt"},
        {time: "7:00 AM", task: "Twitter thread: 'We wasted $47K on auto-renewals. Here's how to never do that.'", platform: "Twitter/X"},
        {time: "8:00 AM", task: "LinkedIn post targeting ops/finance leaders", platform: "LinkedIn"},
        {time: "9:00 AM", task: "Send launch email to beta users and waitlist", platform: "Email"},
        {time: "10:00 AM", task: "Post in ops and finance communities", platform: "Slack/Reddit"},
        {time: "12:00 PM", task: "Hacker News (if someone posts)", platform: "Hacker News"},
        {time: "All day", task: "Reply to every PH comment", platform: "Product Hunt"},
        {time: "All day", task: "Monitor contract parsing for errors", platform: "Product"},
        {time: "Evening", task: "Share day 1 numbers and thank community", platform: "Twitter/X"}
      ],
      post_launch: {
        week_1: [
          "Respond to all user feedback within 24 hours",
          "Fix contract parsing issues as reported",
          "Follow up with trial users who uploaded contracts",
          "Share customer savings stories",
          "Publish 'how we built RenewalRadar' content"
        ],
        week_2_4: [
          "Add Slack integration for alerts",
          "Expand negotiation playbooks to 50 vendors",
          "Create SEO content on contract renewal management",
          "Partner with ops/finance newsletters",
          "Build automated onboarding sequence"
        ],
        month_2_3: [
          "Add spend analytics dashboard",
          "Launch benchmark pricing feature",
          "Analyze conversion funnel",
          "A/B test pricing page",
          "Explore partnerships with accounting firms"
        ]
      },
      launch_platforms: {
        primary: ["Product Hunt", "LinkedIn", "Twitter/X"],
        secondary: ["Hacker News", "Indie Hackers"],
        community: [
          "r/startups",
          "r/smallbusiness",
          "Operations-focused Slack groups",
          "CFO/Finance communities",
          "SaaSOps community",
          "RevOps communities"
        ]
      }
    },

    {
      north_star_metric: {
        metric: "Monthly Active Contracts Tracked",
        definition: "Total contracts with active renewal tracking across all paying customers",
        target_day_1: "200 contracts",
        target_month_1: "1,000 contracts",
        target_month_3: "5,000 contracts"
      },
      acquisition_metrics: [
        {
          metric: "Website visitors",
          definition: "Unique visitors to marketing site",
          target: "8K/month by month 3",
          tool: "Plausible/PostHog"
        },
        {
          metric: "Trial signup rate",
          definition: "Visitors who start free trial",
          target: "5-8% (B2B, high intent)",
          tool: "PostHog"
        },
        {
          metric: "First contract uploaded",
          definition: "% of trial signups who upload at least 1 contract",
          target: "60%+ (activation gate)",
          tool: "PostHog"
        }
      ],
      activation_metrics: [
        {
          metric: "5+ contracts uploaded",
          definition: "% of trials that upload 5 or more contracts",
          target: "40%+",
          tool: "PostHog"
        },
        {
          metric: "Alert configured",
          definition: "% of users who customize alert timing",
          target: "50%+",
          tool: "PostHog"
        },
        {
          metric: "Team member invited",
          definition: "% of accounts that invite at least 1 teammate",
          target: "30%+ (indicates stickiness)",
          tool: "PostHog"
        }
      ],
      retention_metrics: [
        {
          metric: "Monthly retention",
          definition: "% of paying customers active month-over-month",
          target: "90%+ (very sticky once contracts are uploaded)",
          tool: "PostHog"
        },
        {
          metric: "Contract additions",
          definition: "Average new contracts added per account per month",
          target: "3-5 (shows ongoing use)",
          tool: "Database query"
        },
        {
          metric: "Savings logged",
          definition: "% of accounts that log at least 1 savings event",
          target: "50%+ (proves value)",
          tool: "PostHog"
        }
      ],
      revenue_metrics: [
        {
          metric: "Trial to paid conversion",
          definition: "% of trial users who convert to paid",
          target: "20-30% (clear value prop)",
          tool: "Stripe + database"
        },
        {
          metric: "MRR",
          definition: "Monthly recurring revenue",
          target: "$10K month 3, $35K month 6",
          tool: "Stripe"
        },
        {
          metric: "ARPU",
          definition: "Average revenue per paying account",
          target: "$100-140/month (mix of tiers)",
          tool: "Stripe"
        },
        {
          metric: "Churn rate",
          definition: "% of paying customers who cancel monthly",
          target: "<3% (contracts create lock-in)",
          tool: "Stripe"
        }
      ],
      unit_economics: {
        target_cac: "$150-300 (B2B, longer sales consideration)",
        target_ltv: "$3,000+ (30+ months at $100 ARPU with low churn)",
        target_ltv_cac_ratio: "10:1 or better",
        target_payback_period: "2-3 months"
      }
    }
  ]
};

export async function seedRenewalRadar() {
  try {
    console.log("Seeding RenewalRadar idea...");

    // Insert idea
    const insertedIdea = await db
      .insert(ideas)
      .values(renewalRadarIdea)
      .onConflictDoUpdate({
        target: ideas.id,
        set: {
          title: renewalRadarIdea.title,
          oneLiner: renewalRadarIdea.oneLiner,
          problem: renewalRadarIdea.problem,
          targetCustomer: renewalRadarIdea.targetCustomer,
          solution: renewalRadarIdea.solution,
          monetization: renewalRadarIdea.monetization,
          tags: renewalRadarIdea.tags,
          demandScore: renewalRadarIdea.demandScore,
          demandBand: renewalRadarIdea.demandBand,
          trendLabel: renewalRadarIdea.trendLabel,
          whyNow: renewalRadarIdea.whyNow,
          revenueImpact: renewalRadarIdea.revenueImpact,
          marketSize: renewalRadarIdea.marketSize,
          competitionLevel: renewalRadarIdea.competitionLevel,
          category: renewalRadarIdea.category,
          businessType: renewalRadarIdea.businessType,
          priceRange: renewalRadarIdea.priceRange,
          updatedAt: new Date(),
        },
      })
      .returning();

    console.log("✓ RenewalRadar idea inserted");

    // Insert landing page
    const insertedLanding = await db
      .insert(landingPages)
      .values({
        ideaId: renewalRadarIdea.id,
        slug: "renewalradar",
        content: renewalRadarLanding,
        isPublished: true,
      })
      .onConflictDoUpdate({
        target: landingPages.slug,
        set: {
          content: renewalRadarLanding,
          updatedAt: new Date(),
        },
      })
      .returning();

    console.log("✓ RenewalRadar landing page inserted");

    // Insert execution plan
    const insertedExecutionPlan = await db
      .insert(executionPlans)
      .values({
        ideaId: renewalRadarIdea.id,
        userId: null,
        elevatorPitch: renewalRadarExecutionPlan.elevator_pitch,
        persona: renewalRadarExecutionPlan.persona,
        userStories: renewalRadarExecutionPlan.user_stories,
        recommendedStack: renewalRadarExecutionPlan.recommended_stack,
        launchChecklist: renewalRadarExecutionPlan.launch_checklist,
      })
      .returning();

    console.log("✓ RenewalRadar execution plan inserted");

    console.log("RenewalRadar seeding completed successfully!");
    return {
      idea: insertedIdea[0],
      landingPage: insertedLanding[0],
      executionPlan: insertedExecutionPlan[0],
    };
  } catch (error) {
    console.error("Error seeding RenewalRadar:", error);
    throw error;
  }
}

// Run if called directly
if (require.main === module) {
  seedRenewalRadar()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}