import { db } from "../server/db";
import { ideas, landingPages, executionPlans } from "../shared/schema";
import { eq } from "drizzle-orm";

// CreatorBooks - idea_custom_003
const creatorBooksIdea = {
  id: "creatorbooks-001",
  userId: null,
  title: "CreatorBooks",
  oneLiner: "Finally see your entire creator business in one place—every platform, every dollar, tax-ready",
  problem: "Creators earn from 5-10 different sources: YouTube AdSense, Patreon, Gumroad, Stripe, brand deals, affiliate programs, Twitch, TikTok Creator Fund, and more. Each platform has different payout schedules, tax forms, and reporting formats. At tax time, it's a nightmare of logging into 12 dashboards, downloading CSVs, and hoping you didn't miss income. Most creators either overpay in taxes because they miss deductions, or underpay and get audited because they missed a 1099. There's no single place to see 'how's my creator business actually doing?'",
  targetCustomer: "Full-time creators earning $50K-$500K/year across 4+ platforms who need to track business finances but aren't big enough for a full-time bookkeeper. Secondary: Part-time creators and side hustlers earning $5K-$50K who need to know if they're profitable and prepare for tax obligations.",
  solution: "Connect all your revenue sources in one dashboard. See total income across platforms, track expenses with receipt scanning, and get real-time tax estimates so you're never surprised. Export tax-ready reports for your accountant or file directly. Get business insights like which platform is growing fastest, your effective hourly rate, and revenue per subscriber metrics that actually matter for creator businesses.",
  monetization: "Freemium: Free (2 platforms, basic tracking), Pro $19/month (unlimited platforms, tax estimates, bank connections), Business $49/month (multiple entities, accountant access), Agency $149/month (unlimited creators).",
  tags: ["creator-tools", "financial-management", "accounting", "saas", "tax-software"],
  keywords: null,
  status: "validated" as const,
  demandScore: 92,
  demandBand: "high" as const,
  trendLabel: "rising" as const,
  validationSummary: null,
  validatedAt: null,
  isPublic: true,
  isSaved: false,
  whyNow: "Perfect storm: (1) Creator economy hit $250B in 2024—millions now earn real income across platforms, (2) IRS is cracking down on gig economy reporting with new 1099-K thresholds, (3) Traditional accounting software (QuickBooks) doesn't understand creator revenue streams, (4) Creator burnout is real—financial stress compounds creative stress.",
  revenueImpact: "Know exactly what you owe in taxes. Track every dollar automatically. See which platforms are worth your time. Reduce financial stress so you can focus on creating.",
  marketSize: "$50B",
  competitionLevel: "Medium" as const,
  category: "financial-tools" as const,
  businessType: "b2c" as const,
  priceRange: "smb" as const
};

const creatorBooksLanding = {
  meta: {
    title: "CreatorBooks — Financial Dashboard for YouTubers, Streamers & Creators",
    description: "Track income from YouTube, Patreon, Gumroad, and brand deals in one dashboard. Real-time tax estimates, expense tracking, and creator metrics. Free to start.",
    og_image_concept: "Dashboard showing multiple revenue streams (YouTube, Patreon, Gumroad logos) flowing into unified financial overview with tax estimate widget"
  },
  hero: {
    headline: "Finally know how your creator business is doing",
    subheadline: "Track income from YouTube, Patreon, Gumroad, brand deals, and more—all in one place. Real-time tax estimates. Zero spreadsheets.",
    cta_primary: {
      text: "Start Tracking Free",
      url: "/signup"
    },
    cta_secondary: {
      text: "See how it works →",
      url: "#how-it-works"
    },
    social_proof_snippet: "Trusted by 4,000+ creators • $25M+ income tracked",
    hero_visual: {
      type: "product_screenshot" as const,
      description: "Clean financial dashboard showing income from multiple creator platforms with real-time tax estimate and expense tracking"
    }
  },
  problem_section: {
    section_id: "problem",
    eyebrow: "The Creator Tax Nightmare",
    headline: "Your income is everywhere. Your clarity is nowhere.",
    description: "Earning from 6 platforms is great for diversification. Terrible for your taxes.",
    pain_points: [
      {
        icon: "layout-dashboard",
        title: "12 dashboards, 12 headaches",
        description: "YouTube AdSense, Patreon, Gumroad, Stripe, brand deals, affiliates... Each platform has different payouts, different reports, different tax forms. Good luck tracking it all."
      },
      {
        icon: "calendar-x",
        title: "Tax time is a nightmare",
        description: "Scrambling to download CSVs, find 1099s, and remember that brand deal from March. You either overpay because you missed deductions, or underpay and worry about audits."
      },
      {
        icon: "help-circle",
        title: "No idea if you're actually profitable",
        description: "Revenue is up, but so are expenses. Is your creator business actually working? What's your effective hourly rate? Which platform should you focus on?"
      },
      {
        icon: "alert-triangle",
        title: "Quarterly taxes are guesswork",
        description: "How much should you set aside? When are payments due? You're flying blind until it's too late and the penalties hit."
      }
    ],
    stat_callout: {
      number: "68%",
      label: "of creators have been surprised by a large tax bill",
      source: "Creator Economy Tax Survey 2024"
    }
  },
  solution_section: {
    section_id: "solution",
    eyebrow: "Built for Creator Income",
    headline: "One dashboard for your entire creator business",
    description: "CreatorBooks understands how creators actually make money. Track everything automatically, estimate taxes in real-time, and see insights that matter for your business.",
    features: [
      {
        icon: "download",
        title: "Auto-Import Income",
        description: "Connect YouTube, Patreon, Gumroad, Stripe, and more. Every dollar imported automatically."
      },
      {
        icon: "calculator",
        title: "Real-Time Tax Estimates",
        description: "Know your quarterly tax obligation today. Federal and state. No April surprises."
      },
      {
        icon: "camera",
        title: "Expense Tracking",
        description: "Connect your bank or snap receipts. AI categorizes everything. See what's deductible."
      },
      {
        icon: "handshake",
        title: "Brand Deal Tracker",
        description: "Log sponsorships, track payment status, see brand deal income separately."
      },
      {
        icon: "trending-up",
        title: "Creator Metrics",
        description: "Revenue per subscriber. Effective hourly rate. Platform diversification. Metrics that actually matter."
      },
      {
        icon: "file-text",
        title: "Tax-Ready Reports",
        description: "P&L reports, 1099 organizer, deduction summaries. Export everything for your accountant."
      }
    ],
    visual: {
      type: "demo_video" as const,
      description: "Screen recording showing platform connections, expense scanning, and real-time tax estimates updating"
    }
  },
  how_it_works: {
    section_id: "how-it-works",
    eyebrow: "Simple Setup",
    headline: "Set up in 5 minutes. Clarity forever.",
    steps: [
      {
        number: 1,
        title: "Connect your platforms",
        description: "Link YouTube, Patreon, Gumroad, and any other income sources. We import your revenue automatically.",
        visual_description: "Platform integration screen with OAuth connections to major creator platforms"
      },
      {
        number: 2,
        title: "Add your expenses",
        description: "Connect your bank or snap receipts. AI categorizes and finds deductions you're missing.",
        visual_description: "Receipt scanning interface and bank connection setup with expense categorization"
      },
      {
        number: 3,
        title: "See your real numbers",
        description: "Dashboard shows total income, expenses, profit, and exactly what you owe in taxes. Updated daily.",
        visual_description: "Comprehensive financial dashboard with real-time metrics and tax estimates"
      }
    ]
  },
  social_proof: {
    section_id: "proof",
    eyebrow: "Creator Success Stories",
    headline: "Creators are finally getting clarity",
    testimonials: [
      {
        quote: "CreatorBooks saved me $8,000 in taxes by finding deductions I didn't even know existed. My accountant was impressed with how organized my books were.",
        author: "Jessica Wong",
        role: "YouTuber",
        company: "Tech Reviews (380K subs)",
        avatar_description: "Female tech reviewer with camera setup background",
        result: "$8K in tax savings"
      },
      {
        quote: "I went from dreading tax time to having everything ready in February. The quarterly estimates helped me avoid a huge penalty this year.",
        author: "Marcus Thompson",
        role: "Twitch Streamer",
        company: "GameFlow (50K followers)",
        avatar_description: "Male gamer with streaming setup background",
        result: "Avoided $2.5K penalty"
      },
      {
        quote: "Finally know my effective hourly rate across all platforms. Turns out Patreon is 3x more profitable than YouTube ads. Game-changing insights.",
        author: "Sarah Martinez",
        role: "Content Creator",
        company: "Multi-platform creator",
        avatar_description: "Female creator with professional home studio",
        result: "3x better platform focus"
      }
    ],
    stats: [
      {
        number: "$25M+",
        label: "Creator Income Tracked",
        context: "across all platforms"
      },
      {
        number: "4,000+",
        label: "Creators Trust Us",
        context: "with their finances"
      },
      {
        number: "$4,200",
        label: "Average Tax Savings",
        context: "through better tracking"
      },
      {
        number: "15+",
        label: "Platforms Connected",
        context: "and growing"
      }
    ],
    logos: {
      headline: "Connects To Your Platforms",
      companies: ["YouTube", "Patreon", "Gumroad", "Stripe", "Ko-fi", "Twitch"]
    },
    trust_badges: [
      {
        icon: "shield",
        text: "Bank-Level Security"
      },
      {
        icon: "clock",
        text: "5-Minute Setup"
      },
      {
        icon: "check-circle",
        text: "Tax Professional Approved"
      }
    ]
  },
  pricing: {
    section_id: "pricing",
    eyebrow: "Creator-Friendly Pricing",
    headline: "Costs less than one hour with a CPA",
    subheadline: "Free to start. Upgrade when your creator business grows.",
    plans: [
      {
        name: "Free",
        price: "$0",
        price_detail: "forever",
        description: "Perfect for part-time creators exploring financial tracking",
        features: [
          "2 platform connections",
          "Basic revenue dashboard",
          "Manual expense entry",
          "Monthly income summary",
          "Basic tax estimate (federal only)"
        ],
        cta: "Start Free",
        highlighted: false,
        badge: null
      },
      {
        name: "Pro",
        price: "$19",
        price_detail: "/month",
        description: "For full-time creators earning $50K-$200K across platforms",
        features: [
          "Unlimited platform connections",
          "Bank/credit card connection",
          "Receipt scanning with AI categorization",
          "Real-time tax estimates (federal + state)",
          "Quarterly tax reminders",
          "Brand deal tracker",
          "P&L reports and exports",
          "Creator metrics dashboard",
          "Email support"
        ],
        cta: "Start Free Trial",
        highlighted: true,
        badge: "Most Popular"
      },
      {
        name: "Business",
        price: "$49",
        price_detail: "/month",
        description: "For established creators with $200K+ revenue",
        features: [
          "Everything in Pro",
          "Multiple business entities (LLC, S-Corp)",
          "Contractor payment tracking",
          "Accountant access portal",
          "Revenue forecasting",
          "Custom categories and tags",
          "Priority support",
          "Quarterly business review call"
        ],
        cta: "Start Free Trial",
        highlighted: false,
        badge: null
      },
      {
        name: "Agency",
        price: "$149",
        price_detail: "/month",
        description: "For agencies handling finances for multiple creators",
        features: [
          "Everything in Business",
          "Unlimited creators/entities",
          "Team management",
          "White-label reports",
          "API access",
          "Dedicated account manager",
          "Custom integrations"
        ],
        cta: "Contact Sales",
        highlighted: false,
        badge: "Enterprise"
      }
    ],
    guarantee: {
      headline: "14-Day Free Trial",
      description: "Try any paid plan free for 14 days. If you don't save money on taxes, get your money back."
    },
    pricing_note: "Save 21% with annual billing. All plans include platform integrations."
  },
  faq: {
    section_id: "faq",
    headline: "Questions? We've got answers.",
    questions: [
      {
        question: "Which platforms do you integrate with?",
        answer: "YouTube (AdSense), Patreon, Gumroad, Stripe, Ko-fi, Twitch, and more. We're adding new platforms regularly. If yours isn't supported, let us know."
      },
      {
        question: "Is this a replacement for an accountant?",
        answer: "No—we're a tool, not tax advice. CreatorBooks gives you organized financials and estimates to make tax time easier. We recommend working with a CPA for filing, and we make their job way easier."
      },
      {
        question: "How accurate are the tax estimates?",
        answer: "Our estimates use current federal and state tax brackets based on your actual income and deductible expenses. They're designed to help you plan, not replace official calculations. When in doubt, consult a tax professional."
      },
      {
        question: "Is my financial data secure?",
        answer: "Yes. We use bank-level encryption, never store credentials (Plaid handles bank connections), and are SOC 2 compliant. Your data is yours—we never sell or share it."
      },
      {
        question: "Can my accountant access my data?",
        answer: "Yes! Business tier includes accountant access. Share a read-only link so they can see your financials without needing login credentials."
      },
      {
        question: "What if I have multiple businesses or an LLC?",
        answer: "Business tier supports multiple entities. Track each business separately with consolidated reporting across all of them."
      }
    ]
  },
  final_cta: {
    section_id: "cta",
    headline: "Your creator business deserves real financials",
    subheadline: "Stop guessing. Start knowing. Free to start.",
    cta_text: "Start Tracking Free →",
    trust_element: "No credit card required • 14-day free trial • SOC 2 compliant"
  },
  footer: {
    tagline: "Your creator business, finally in focus.",
    links: {
      product: ["Features", "Pricing", "Integrations", "Security"],
      resources: ["Blog", "Help Center", "Tax Guides", "Creator Resources"],
      company: ["About", "Careers", "Press", "Contact"],
      legal: ["Privacy", "Terms", "Security", "SOC 2"]
    },
    social: ["Twitter", "LinkedIn", "YouTube"],
    newsletter: {
      headline: "Creator finance tips & updates",
      placeholder: "Your email",
      cta: "Subscribe"
    }
  }
};

async function seedCreatorBooks() {
  console.log("Seeding CreatorBooks...");

  try {
    // Check if it already exists
    const existing = await db.select().from(ideas).where(eq(ideas.id, creatorBooksIdea.id));
    
    if (existing.length > 0) {
      console.log("CreatorBooks idea already exists. Updating...");
      await db.update(ideas)
        .set({ 
          ...creatorBooksIdea,
          updatedAt: new Date()
        })
        .where(eq(ideas.id, creatorBooksIdea.id));
    } else {
      // Insert the idea
      await db.insert(ideas).values({
        ...creatorBooksIdea,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created CreatorBooks idea.");
    }

    // Check if landing page exists
    const existingLanding = await db.select().from(landingPages).where(eq(landingPages.slug, "creatorbooks"));
    
    if (existingLanding.length > 0) {
      console.log("CreatorBooks landing page already exists. Updating...");
      await db.update(landingPages)
        .set({ 
          content: JSON.stringify(creatorBooksLanding),
          updatedAt: new Date(),
          isPublished: true 
        })
        .where(eq(landingPages.slug, "creatorbooks"));
    } else {
      // Insert the landing page
      await db.insert(landingPages).values({
        ideaId: creatorBooksIdea.id,
        slug: "creatorbooks",
        content: JSON.stringify(creatorBooksLanding),
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created CreatorBooks landing page.");
    }

    // Create execution plan with comprehensive deliverable content
    const executionPlanData = {
      ideaId: creatorBooksIdea.id,
      userId: null,
      elevatorPitch: JSON.stringify({
        problem_statement: "Creators earn from 5-10 different sources: YouTube AdSense, Patreon, Gumroad, Stripe, brand deals, affiliate programs, Twitch, TikTok Creator Fund, and more. Each platform has different payout schedules, tax forms, and reporting formats. At tax time, it's a nightmare of logging into 12 dashboards, downloading CSVs, and hoping you didn't miss income. Most creators either overpay in taxes because they miss deductions, or underpay and get audited because they missed a 1099. There's no single place to see 'how's my creator business actually doing?'",
        solution_summary: "Connect all your revenue sources in one dashboard. See total income across platforms, track expenses with receipt scanning, and get real-time tax estimates so you're never surprised. Export tax-ready reports for your accountant or file directly. Get business insights like which platform is growing fastest, your effective hourly rate, and revenue per subscriber metrics that actually matter for creator businesses.",
        target_customer: {
          primary: "Full-time creators earning $50K-$500K/year across 4+ platforms who need to track business finances but aren't big enough for a full-time bookkeeper",
          secondary: "Part-time creators and side hustlers earning $5K-$50K who need to know if they're profitable and prepare for tax obligations",
          market_size_estimate: {
            tam: "$50B accounting and financial management software market",
            sam: "$2B self-employed and freelancer financial tools",
            som: "$200M creators actively seeking financial management solutions (2M+ creators earning $50K+)"
          }
        },
        why_now: "Perfect storm: (1) Creator economy hit $250B in 2024—millions now earn real income across platforms, (2) IRS is cracking down on gig economy reporting with new 1099-K thresholds, (3) Traditional accounting software (QuickBooks) doesn't understand creator revenue streams, (4) Creator burnout is real—financial stress compounds creative stress."
      }),
      persona: JSON.stringify({
        direct_competitors: [
          {
            name: "QuickBooks Self-Employed",
            url: "https://quickbooks.intuit.com/self-employed/",
            positioning: "Accounting for freelancers and self-employed",
            pricing: "$15/mo Self-Employed, $25/mo with TurboTax bundle",
            strengths: ["Established brand", "Tax integration", "Mileage tracking", "Receipt scanning"],
            weaknesses: ["Not designed for creators", "No platform integrations", "Manual income entry", "Confusing for non-accountants"]
          },
          {
            name: "Wave",
            url: "https://www.waveapps.com",
            positioning: "Free accounting for small businesses",
            pricing: "Free (paid payroll and payments)",
            strengths: ["Free", "Full double-entry accounting", "Invoicing included"],
            weaknesses: ["Too complex for most creators", "No platform integrations", "No tax estimates", "Desktop-focused UX"]
          },
          {
            name: "Bench",
            url: "https://bench.co",
            positioning: "Bookkeeping service with dedicated bookkeeper",
            pricing: "$299-$499/mo",
            strengths: ["Human bookkeeper", "Tax-ready financials", "Hands-off"],
            weaknesses: ["Expensive", "Not real-time", "Not creator-specific", "Overkill for most creators"]
          },
          {
            name: "Lili",
            url: "https://lili.co",
            positioning: "Banking app for freelancers",
            pricing: "Free basic, $9/mo Pro",
            strengths: ["Banking + bookkeeping", "Tax savings buckets", "Simple UI"],
            weaknesses: ["Requires using their bank", "Limited integrations", "Not creator-focused"]
          }
        ],
        indirect_competitors: [
          "Personal finance apps (Mint, YNAB) — track spending but not business income",
          "Creator analytics tools (Social Blade, vidIQ) — track metrics but not money",
          "Tax prep software (TurboTax, H&R Block) — once a year, not ongoing tracking",
          "Bank statements and CSVs — source of truth but no synthesis"
        ],
        market_gaps: [
          "No tool integrates with creator platforms (YouTube, Patreon, Gumroad, etc.)",
          "No real-time tax estimates based on actual creator income patterns",
          "No creator-specific metrics (revenue per subscriber, effective hourly rate)",
          "No brand deal tracking integrated with financial reporting",
          "Existing tools require accounting knowledge creators don't have",
          "No forecasting based on creator business patterns (seasonal income)"
        ]
      }),
      userStories: [
        JSON.stringify({
          positioning_statement: "For full-time creators who earn from multiple platforms, CreatorBooks is a financial command center that automatically tracks all revenue, estimates taxes in real-time, and surfaces business insights. Unlike QuickBooks (built for traditional businesses) or spreadsheets (manual and error-prone), we integrate directly with creator platforms so you always know exactly how your business is doing.",
          unique_value_proposition: "Finally see your entire creator business in one place—every platform, every dollar, tax-ready.",
          key_differentiators: [
            "Creator platform integrations: Direct connections to YouTube, Patreon, Gumroad, Stripe, Ko-fi, Twitch, and more—automatic income import",
            "Real-time tax estimates: Know your quarterly tax obligation today, not April 14th—with creator-specific deduction suggestions",
            "Creator metrics that matter: Revenue per subscriber, platform mix, effective hourly rate—not generic accounting reports",
            "Brand deal tracker: Log sponsorships with payment terms, track invoices, see brand deal % of total income",
            "Plain English financials: No accounting jargon—dashboards designed for creators, not accountants"
          ],
          category: "Creator financial management (creating subcategory: 'Creator Business OS')"
        }),
        JSON.stringify({
          core_features: [
            {
              feature: "Platform Connections",
              description: "OAuth connect to YouTube (AdSense), Patreon, Gumroad, Stripe, Ko-fi, Twitch, TikTok. Auto-import revenue with transaction details.",
              priority: "P0",
              effort: "Large"
            },
            {
              feature: "Revenue Dashboard",
              description: "Total income across all platforms. Breakdown by source. Month-over-month trends. Current month vs last month comparison.",
              priority: "P0",
              effort: "Medium"
            },
            {
              feature: "Expense Tracking",
              description: "Connect bank/credit card or manual entry. Receipt photo scanning with AI categorization. Tag expenses to categories (equipment, software, travel, etc.).",
              priority: "P0",
              effort: "Medium"
            },
            {
              feature: "Tax Estimate Dashboard",
              description: "Real-time estimated tax liability based on income minus deductible expenses. Quarterly payment reminders. Federal + state estimates.",
              priority: "P0",
              effort: "Medium"
            },
            {
              feature: "Brand Deal Tracker",
              description: "Log sponsorships manually. Track payment status (pitched, contracted, delivered, invoiced, paid). See brand deal income separately.",
              priority: "P0",
              effort: "Small"
            },
            {
              feature: "Profit & Loss Report",
              description: "Monthly/quarterly/annual P&L in plain language. Export to PDF for accountant. Highlights areas of concern.",
              priority: "P0",
              effort: "Medium"
            }
          ],
          post_mvp_features: [
            "Direct tax filing (TurboTax/IRS integration)",
            "Invoicing for brand deals and services",
            "Contractor payment tracking (1099 generation)",
            "Revenue forecasting based on historical patterns",
            "Multiple business entity support (LLC, S-Corp)",
            "Accountant access portal",
            "Affiliate link tracking and commission import",
            "Merchandise revenue tracking (Shopify, Spring)",
            "Payroll for creators with employees",
            "Financial planning and runway projections"
          ],
          out_of_scope: [
            "Full double-entry accounting (use QuickBooks for that)",
            "Banking services (use Lili or Mercury)",
            "Tax advice (we're a tool, not a CPA)",
            "Investment tracking (use Personal Capital)",
            "Personal finance budgeting (use YNAB)"
          ],
          mvp_timeline: "10-12 weeks for solo developer, 6-8 weeks for small team"
        }),
        JSON.stringify({
          recommended_stack: {
            frontend: "Next.js 14 (App Router) — Dashboard-heavy, needs good data viz",
            backend: "Next.js API Routes + Supabase Edge Functions",
            database: "Supabase (Postgres) — Relational data for transactions, accounts, categories",
            auth: "Supabase Auth — Email/password + OAuth for platform connections",
            payments: "Stripe — Subscription billing",
            hosting: "Vercel — Edge performance matters for dashboards",
            file_storage: "Supabase Storage — Receipt images",
            ai_ml: "OpenAI GPT-4 — Receipt parsing, expense categorization, deduction suggestions",
            key_integrations: [
              "Plaid — Bank and credit card connections for expense tracking",
              "YouTube Analytics API — AdSense revenue (requires workarounds)",
              "Patreon API — Subscriber and earnings data",
              "Gumroad API — Sales and payouts",
              "Stripe Connect — For creators using Stripe",
              "Ko-fi API — Tips and memberships",
              "Twitch API — Subscription and bits revenue"
            ]
          },
          build_vs_buy: [
            {
              component: "Bank Connections",
              recommendation: "Buy (Plaid)",
              reasoning: "Bank aggregation is complex and regulated. Plaid handles this well. $0.30/connection/mo at scale."
            },
            {
              component: "Receipt Scanning",
              recommendation: "Build (on OpenAI Vision)",
              reasoning: "GPT-4V handles receipt parsing well. Build custom UI for creator expense categories."
            },
            {
              component: "Platform Integrations",
              recommendation: "Build (core differentiator)",
              reasoning: "Creator platform integrations are your moat. Each API is different; custom work required."
            },
            {
              component: "Tax Calculations",
              recommendation: "Build (with tax API fallback)",
              reasoning: "Tax bracket calculations are straightforward. Use tax tables. State taxes more complex—consider API for v2."
            },
            {
              component: "Email Notifications",
              recommendation: "Buy (Resend)",
              reasoning: "Transactional emails for tax reminders, low balance alerts. Don't build this."
            }
          ],
          estimated_monthly_cost: {
            "0_100_users": "$100-200/mo (Vercel free, Supabase free, ~$50 Plaid, ~$50 OpenAI)",
            "100_1000_users": "$800-1,500/mo (Plaid scales with users, Supabase Pro, increased API calls)",
            "1000_10000_users": "$5,000-15,000/mo (Plaid is primary cost driver at scale)"
          }
        })
      ],
      recommendedStack: JSON.stringify({
        pricing_model: "Freemium with usage limits",
        pricing_rationale: "Free tier lets creators see the value before committing. Paid tiers unlock more platform connections, tax features, and advanced insights. Pricing scales with creator income—those earning more can afford more.",
        tiers: [
          {
            name: "Free",
            price: "$0",
            target_customer: "Part-time creators just starting to earn, want to track income",
            features: [
              "2 platform connections",
              "Basic revenue dashboard",
              "Manual expense entry",
              "Monthly income summary",
              "Basic tax estimate (federal only)"
            ],
            limitations: [
              "2 platforms only",
              "No bank connection",
              "No receipt scanning",
              "Federal tax only",
              "No brand deal tracker",
              "CreatorBooks branding on exports"
            ]
          },
          {
            name: "Pro",
            price: "$19/month ($15/mo annual)",
            target_customer: "Full-time creators earning $50K-$200K across multiple platforms",
            features: [
              "Unlimited platform connections",
              "Bank/credit card connection (via Plaid)",
              "Receipt scanning with AI categorization",
              "Real-time tax estimates (federal + state)",
              "Quarterly tax reminders",
              "Brand deal tracker",
              "P&L reports and exports",
              "Creator metrics dashboard",
              "Deduction suggestions",
              "Email support"
            ],
            limitations: [
              "Single user",
              "1 business entity"
            ]
          },
          {
            name: "Business",
            price: "$49/month ($39/mo annual)",
            target_customer: "Established creators with $200K+ revenue, may have contractors or complex setup",
            features: [
              "Everything in Pro",
              "Multiple business entities (LLC, S-Corp)",
              "Contractor payment tracking",
              "Accountant access portal",
              "Revenue forecasting",
              "Custom categories and tags",
              "Priority support",
              "Quarterly business review call"
            ],
            limitations: [
              "Up to 3 users"
            ]
          },
          {
            name: "Agency",
            price: "$149/month ($119/mo annual)",
            target_customer: "Creator agencies and managers handling finances for multiple creators",
            features: [
              "Everything in Business",
              "Unlimited creators/entities",
              "Team management",
              "White-label reports",
              "API access",
              "Dedicated account manager",
              "Custom integrations"
            ],
            limitations: []
          }
        ],
        free_tier_strategy: "Free tier is genuinely useful for tracking income from 2 platforms. Creators upgrade when they add more revenue sources, want expense tracking, or need real tax help.",
        annual_discount: "21% discount (2.5 months free) for annual plans",
        pricing_psychology: "$19/mo is less than one hour with a CPA. Position as 'costs less than one tax prep session but helps you all year.' Business tier targets creators who know they need more structure."
      }),
      launchChecklist: [
        JSON.stringify({
          brand_name: "CreatorBooks",
          tagline: "Your creator business, finally in focus.",
          brand_personality: [
            "Trustworthy — Handling money requires trust; we earn it",
            "Empowering — Give creators financial confidence",
            "Simple — No accounting jargon; plain English always",
            "Proactive — Alerts and suggestions before problems arise",
            "Creator-first — Built by people who understand the creator grind"
          ],
          brand_voice: {
            tone: "Confident and supportive. Like a financially-savvy creator friend who's got your back. Not corporate, not overly casual.",
            do: [
              "Use creator language (platforms, brand deals, sponsorships)",
              "Explain financial concepts in plain terms",
              "Celebrate financial wins (tax savings, revenue milestones)",
              "Be direct about tax obligations without being scary",
              "Acknowledge the hustle of creator life"
            ],
            dont: [
              "Don't use accounting jargon (GAAP, accrual, depreciation schedules)",
              "Don't be preachy about finances",
              "Don't make creators feel bad about their money habits",
              "Don't pretend taxes are fun",
              "Don't oversimplify actual tax obligations"
            ]
          },
          visual_direction: {
            color_palette: {
              primary: "#10B981 (Emerald) — Money, growth, positive financial health",
              secondary: "#065F46 (Dark emerald) — Trust, stability",
              accent: "#F59E0B (Amber) — Warnings, attention needed, tax alerts",
              danger: "#EF4444 (Red) — Overdue, negative balance, urgent",
              neutrals: ["#FAFAF9 (warm white)", "#18181B (zinc 900)"]
            },
            typography: {
              display: "Plus Jakarta Sans — Modern, friendly, trustworthy",
              body: "Inter — Clean, readable for numbers and data"
            },
            visual_style: "Clean and confident. Dashboard-focused with clear data hierarchy. Green for positive (income, savings), amber for attention (quarterly taxes due), red for urgent (overdue invoices). Light mode default with dark mode. Numbers should feel approachable, not intimidating."
          },
          messaging: {
            elevator_pitch_10s: "CreatorBooks tracks all your creator income in one place and tells you exactly what you owe in taxes—automatically.",
            elevator_pitch_30s: "Creators earn from YouTube, Patreon, Gumroad, brand deals, and more—but tracking it all is a nightmare. CreatorBooks connects to all your platforms, imports every dollar automatically, and shows your real-time tax estimate. No more spreadsheets, no more tax surprises. Just clarity on how your creator business is actually doing.",
            key_messages: [
              "Every platform. Every dollar. One dashboard.",
              "Know what you owe before tax day.",
              "Built for creators, not accountants.",
              "Your creator business deserves real financials.",
              "Stop guessing. Start knowing."
            ]
          }
        }),
        JSON.stringify({
          launch_checklist: {
            pre_launch: {
              "4_weeks_before": [
                "MVP with YouTube, Patreon, Gumroad integrations",
                "Revenue dashboard with basic charts",
                "Manual expense entry with categories",
                "Landing page live with waitlist",
                "Create demo video showing dashboard",
                "Start Twitter/YouTube content on creator finances"
              ],
              "2_weeks_before": [
                "Add Plaid for bank connections",
                "Tax estimate calculator (federal + major states)",
                "Receipt scanning with AI categorization",
                "Beta test with 30-50 creators",
                "Collect testimonials and case studies",
                "Set up Stripe billing"
              ],
              "1_week_before": [
                "Final product polish",
                "Prepare Product Hunt assets",
                "Reach out to creator finance newsletters/podcasts",
                "Prepare launch day social content",
                "Brief support on common questions"
              ],
              "day_before": [
                "Schedule Product Hunt launch",
                "Pre-write comment responses",
                "Test all integrations one more time",
                "Rest up"
              ]
            },
            launch_day: [
              {
                time: "12:01 AM PT",
                task: "Product Hunt goes live"
              },
              {
                time: "6:00 AM",
                task: "Maker comment with personal creator finance horror story"
              },
              {
                time: "7:00 AM",
                task: "Twitter thread: 'I tracked 127 creators' finances. Here's what I learned.'"
              },
              {
                time: "8:00 AM",
                task: "LinkedIn post targeting creator economy professionals"
              },
              {
                time: "9:00 AM",
                task: "Send launch email to waitlist"
              },
              {
                time: "10:00 AM",
                task: "Post in creator communities (Patreon Discord, YouTube subreddits)"
              },
              {
                time: "12:00 PM",
                task: "YouTube Shorts / TikTok showing the dashboard"
              }
            ],
            post_launch: {
              week_1: [
                "Respond to all user feedback within 24 hours",
                "Ship fixes for integration issues",
                "Follow up with users who connected platforms but haven't added expenses",
                "Share user success stories (tax savings discovered)",
                "Publish 'how we built CreatorBooks' content"
              ],
              week_2_4: [
                "Add Stripe and Ko-fi integrations",
                "Implement brand deal tracker",
                "Create tutorial content (tax tips for creators)",
                "Partner with creator accountants for referrals",
                "SEO content on creator taxes"
              ],
              month_2_3: [
                "Add Twitch integration",
                "Launch deduction suggestions feature",
                "Analyze conversion funnel",
                "A/B test pricing page",
                "Explore partnerships with Patreon, Gumroad"
              ]
            },
            launch_platforms: {
              primary: ["Product Hunt", "Twitter/X"],
              secondary: ["LinkedIn", "YouTube"],
              community: [
                "r/NewTubers",
                "r/PartneredYoutube",
                "r/patreon",
                "Creator economy Discords",
                "YouTube creator forums",
                "Indie Hackers"
              ]
            }
          },
          key_metrics: {
            north_star_metric: {
              metric: "Monthly Active Creators with Connected Platforms",
              definition: "Unique users who logged in and have at least 1 active platform connection importing data in the past 30 days",
              target_day_1: "100 active creators",
              target_month_1: "500 active creators",
              target_month_3: "2,500 active creators"
            },
            acquisition_metrics: [
              {
                metric: "Website visitors",
                definition: "Unique visitors to marketing site",
                target: "20K/month by month 3"
              },
              {
                metric: "Signup rate",
                definition: "Visitors who create an account",
                target: "8-12%"
              },
              {
                metric: "Platform connection rate",
                definition: "% of signups who connect at least 1 platform",
                target: "60%+"
              }
            ],
            activation_metrics: [
              {
                metric: "2+ platforms connected",
                definition: "% of users who connect 2 or more income sources",
                target: "40%+ of signups"
              },
              {
                metric: "First expense added",
                definition: "% of users who add at least 1 expense",
                target: "50%+"
              },
              {
                metric: "Viewed tax estimate",
                definition: "% of users who view tax estimate dashboard",
                target: "70%+"
              }
            ],
            retention_metrics: [
              {
                metric: "Week 1 retention",
                definition: "% of users who return in week 2",
                target: "50%+"
              },
              {
                metric: "Monthly retention",
                definition: "% of users active month-over-month",
                target: "60%+"
              },
              {
                metric: "Quarterly tax check-in",
                definition: "% of users who view dashboard around quarterly tax dates",
                target: "80%+ of active users"
              }
            ],
            revenue_metrics: [
              {
                metric: "Free to paid conversion",
                definition: "% of free users who upgrade to Pro or above",
                target: "10-15%"
              },
              {
                metric: "MRR",
                definition: "Monthly recurring revenue",
                target: "$10K month 3, $40K month 6"
              },
              {
                metric: "ARPU",
                definition: "Average revenue per paying user",
                target: "$22-28/month (mostly Pro tier)"
              },
              {
                metric: "Churn rate",
                definition: "% of paying users who cancel monthly",
                target: "<5% (financial tools are sticky)"
              }
            ],
            unit_economics: {
              target_cac: "$25-50 (content marketing focus)",
              target_ltv: "$450+ (18+ months at $25 ARPU)",
              target_ltv_cac_ratio: "9:1 or better",
              target_payback_period: "2-3 months"
            }
          }
        })
      ],
      createdAt: new Date()
    };

    // Check if execution plan already exists  
    const existingPlan = await db.select().from(executionPlans).where(eq(executionPlans.ideaId, creatorBooksIdea.id));
    
    if (existingPlan.length > 0) {
      console.log("CreatorBooks execution plan already exists. Updating...");
      await db.update(executionPlans)
        .set({
          elevatorPitch: executionPlanData.elevatorPitch,
          persona: executionPlanData.persona,
          userStories: executionPlanData.userStories,
          recommendedStack: executionPlanData.recommendedStack,
          launchChecklist: executionPlanData.launchChecklist
        })
        .where(eq(executionPlans.ideaId, creatorBooksIdea.id));
    } else {
      // Insert new execution plan
      await db.insert(executionPlans).values(executionPlanData);
      console.log("Created CreatorBooks execution plan with comprehensive deliverables.");
    }

    console.log("Done! CreatorBooks has been added to the idea library with all comprehensive content.");
  } catch (error) {
    console.error("Error seeding CreatorBooks:", error);
    process.exit(1);
  }

  process.exit(0);
}

seedCreatorBooks();