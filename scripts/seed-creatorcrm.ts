import { db } from "../server/db";
import { ideas, landingPages, executionPlans } from "../shared/schema";
import { eq } from "drizzle-orm";

// CreatorCRM - idea_custom_001
const creatorCrmIdea = {
  id: "creatorcrm-001",
  userId: null,
  title: "CreatorCRM",
  oneLiner: "Your brand deals, finally organized",
  problem: "Creators managing 5+ brand deals per month are drowning in chaos. Sponsor conversations happen across email, DMs, and texts. Deal terms live in Google Docs nobody can find. Payment tracking means scrolling through PayPal. Nobody knows which brands ghosted, which invoices are overdue, or which relationships are worth nurturing. The result? Missed follow-ups, forgotten invoices, and leaving thousands on the table from repeat partnerships that never happened.",
  targetCustomer: "Full-time content creators with 25K-500K followers doing 5+ brand deals per month who need to get organized as their business scales. Secondary: Creator managers and small agencies managing multiple talent with scattered deal flow.",
  solution: "A CRM built for how creators actually work. Track every brand relationship from first contact to paid invoice. Pipeline view shows deal stages at a glance. Auto-log emails and DMs. Set reminders to follow up. Track payments and see your true earnings. Know exactly which brands are worth your time—and which ghosted you twice.",
  monetization: "Freemium model: Free tier (25 contacts, 10 active deals), Pro $19/month (unlimited + email integration), Business $49/month (teams + analytics), Agency $149/month (unlimited seats + white-label).",
  tags: ["crm", "creator-tools", "business-management", "saas", "productivity"],
  keywords: null,
  status: "validated" as const,
  demandScore: 92,
  demandBand: "high" as const,
  trendLabel: "rising" as const,
  validationSummary: null,
  validatedAt: null,
  isPublic: true,
  isSaved: false,
  whyNow: "Three converging forces: (1) Creator economy has professionalized—top creators do 50+ brand deals/year and need real business tools, (2) Brand deal volume is up 3x since 2020 but creator tools haven't kept up, (3) Creators are realizing their 'business' needs systems, not just creativity.",
  revenueImpact: "Organized creators close 30% more deals and get paid 50% faster. A CRM prevents missed opportunities—one forgotten follow-up could cost $5K-50K in lost revenue. Repeat partnerships increase by 40% when relationships are properly managed.",
  marketSize: "$100B",
  competitionLevel: "Medium" as const,
  category: "creator-tools" as const,
  businessType: "b2c" as const,
  priceRange: "smb" as const
};

const creatorCrmLanding = {
  meta: {
    title: "CreatorCRM — Manage Brand Deals & Sponsor Relationships",
    description: "The CRM built for content creators. Track brand deals, manage your pipeline, and never miss a payment. Free to start.",
    og_image_concept: "Clean dashboard interface showing deal pipeline with brand logos and payment tracking, creator working on laptop"
  },
  hero: {
    headline: "Your brand deals, finally organized",
    subheadline: "Track every sponsor relationship, manage your deal pipeline, and never miss a payment. The CRM built for how creators actually work.",
    cta_primary: {
      text: "Start Free",
      url: "/signup"
    },
    cta_secondary: {
      text: "See how it works →",
      url: "#how-it-works"
    },
    social_proof_snippet: "Trusted by 5,000+ creators • $50M+ in deals tracked",
    hero_visual: {
      type: "product_screenshot" as const,
      description: "Clean CRM dashboard showing Kanban pipeline with deals moving from 'Pitched' to 'Paid', brand contact cards, and earnings summary"
    }
  },
  problem_section: {
    section_id: "problem",
    eyebrow: "The Creator Chaos",
    headline: "Sound familiar?",
    description: "You're running a real business, but your tools are scattered across a dozen apps. Every missed follow-up costs money.",
    pain_points: [
      {
        icon: "message-circle",
        title: "Conversations everywhere",
        description: "Brand emails in your inbox. DM negotiations on Instagram. Contract terms in a Google Doc somewhere. You're constantly searching for 'that one thread.'"
      },
      {
        icon: "clock",
        title: "Deals falling through the cracks",
        description: "You meant to follow up with that brand last week. You forgot to send the invoice. That warm lead went cold because life got busy."
      },
      {
        icon: "dollar-sign",
        title: "No idea what you're actually making",
        description: "'How much did I earn this quarter?' requires an archaeology expedition through PayPal, Stripe, and that one wire transfer you forgot about."
      },
      {
        icon: "users",
        title: "Relationships going nowhere",
        description: "That brand paid you well 6 months ago. Are they ready for another deal? You have no system to track relationship cycles or spot opportunities."
      }
    ],
    stat_callout: {
      number: "73%",
      label: "of creators have missed payment deadlines due to poor organization",
      source: "Creator Economy Report 2024"
    }
  },
  solution_section: {
    section_id: "solution",
    eyebrow: "Built for Creators",
    headline: "One place for your entire creator business",
    description: "CreatorCRM understands how brand deals actually work. From first contact to final payment, see everything in one organized system.",
    features: [
      {
        icon: "columns",
        title: "Deal Pipeline",
        description: "See every deal at a glance. Drag-and-drop from pitch to paid. Never lose track again."
      },
      {
        icon: "users",
        title: "Brand Relationships",
        description: "Full history with every brand. Past deals, rates, contacts. Know who's worth your time."
      },
      {
        icon: "mail",
        title: "Email Integration",
        description: "Connect your inbox. Conversations auto-log to the right brand. Everything in context."
      },
      {
        icon: "credit-card",
        title: "Payment Tracking",
        description: "Track invoiced vs paid. See overdue at a glance. Know exactly what you've earned."
      },
      {
        icon: "bell",
        title: "Follow-up Reminders",
        description: "Set reminders and never forget. Get nudged when deals go quiet too long."
      },
      {
        icon: "trending-up",
        title: "Earnings Dashboard",
        description: "Monthly, quarterly, yearly earnings. Average deal size. See your business grow."
      }
    ],
    visual: {
      type: "demo_video" as const,
      description: "Screen recording showing deal being moved through pipeline, email auto-logging, and payment tracking in action"
    }
  },
  how_it_works: {
    section_id: "how-it-works",
    eyebrow: "Simple Setup",
    headline: "Get organized in minutes",
    steps: [
      {
        number: 1,
        title: "Add your brands",
        description: "Import contacts or add manually. Tag by category. Build your sponsor database.",
        visual_description: "Contact import interface with brand logos and category tags"
      },
      {
        number: 2,
        title: "Track your deals",
        description: "Log every opportunity. Move through your pipeline from pitch to paid.",
        visual_description: "Kanban board with deals being dragged between pipeline stages"
      },
      {
        number: 3,
        title: "Never miss a beat",
        description: "Get reminders to follow up. See overdue payments. Nurture your best relationships.",
        visual_description: "Notification center with follow-up reminders and payment alerts"
      }
    ]
  },
  social_proof: {
    section_id: "proof",
    eyebrow: "Creator Success",
    headline: "Creators are closing more deals",
    testimonials: [
      {
        quote: "I went from chaos to closed deals. CreatorCRM helped me see which brands were ghosting me and which were gold. My repeat partnership rate doubled.",
        author: "Alex Rivera",
        role: "YouTuber",
        company: "Tech Reviews (450K subs)",
        avatar_description: "Male tech reviewer in studio setup",
        result: "2x repeat partnerships"
      },
      {
        quote: "Before CreatorCRM, I was losing track of payments and missing follow-ups. Now I can see exactly what I'm owed and who to prioritize. Game changer.",
        author: "Sophie Chen",
        role: "Instagram Creator",
        company: "Fashion & Lifestyle (180K)",
        avatar_description: "Female fashion creator in stylish outfit",
        result: "30% faster payments"
      },
      {
        quote: "Managing 12 creators was a nightmare until CreatorCRM. Now each talent can manage their pipeline while I see the big picture. We're closing 40% more deals.",
        author: "Marcus Thompson",
        role: "Creator Manager",
        company: "Velocity Talent",
        avatar_description: "Professional manager in office setting",
        result: "40% more deals closed"
      }
    ],
    stats: [
      {
        number: "$50M+",
        label: "Deals Tracked",
        context: "and counting"
      },
      {
        number: "30%",
        label: "More Deals Closed",
        context: "vs disorganized creators"
      },
      {
        number: "50%",
        label: "Faster Payment",
        context: "with tracking"
      },
      {
        number: "5,000+",
        label: "Active Creators",
        context: "trust CreatorCRM"
      }
    ],
    logos: {
      headline: "Integrates With Your Stack",
      companies: ["Gmail", "Outlook", "Stripe", "PayPal", "Calendar", "Notion"]
    },
    trust_badges: [
      {
        icon: "shield",
        text: "Bank-Level Security"
      },
      {
        icon: "clock",
        text: "2-Minute Setup"
      },
      {
        icon: "smartphone",
        text: "Mobile App Included"
      }
    ]
  },
  pricing: {
    section_id: "pricing",
    eyebrow: "Creator-Friendly Pricing",
    headline: "Free to start. Upgrade when you scale.",
    subheadline: "Track up to 10 deals free. No credit card required.",
    plans: [
      {
        name: "Free",
        price: "$0",
        price_detail: "forever",
        description: "Perfect for creators getting started with brand deals",
        features: [
          "Up to 25 brand contacts",
          "Up to 10 active deals",
          "Basic pipeline view",
          "Manual activity logging",
          "Payment tracking",
          "Mobile app access"
        ],
        cta: "Start Free",
        highlighted: false,
        badge: null
      },
      {
        name: "Pro",
        price: "$19",
        price_detail: "/month",
        description: "For full-time creators with regular brand deals",
        features: [
          "Unlimited contacts & deals",
          "Email integration (Gmail/Outlook)",
          "Earnings dashboard & analytics",
          "Brand scoring & rating",
          "Follow-up reminders",
          "Remove CreatorCRM branding",
          "Priority support"
        ],
        cta: "Start Free Trial",
        highlighted: true,
        badge: "Most Popular"
      },
      {
        name: "Business",
        price: "$49",
        price_detail: "/month",
        description: "For high-volume creators and small agencies",
        features: [
          "Everything in Pro",
          "Team seats (up to 3 users)",
          "Manager/talent views",
          "Advanced analytics & reporting",
          "Contract file storage (10GB)",
          "Calendar integration",
          "Tax-ready export",
          "API access"
        ],
        cta: "Start Free Trial",
        highlighted: false,
        badge: null
      },
      {
        name: "Agency",
        price: "$149",
        price_detail: "/month",
        description: "For agencies managing multiple creators",
        features: [
          "Everything in Business",
          "Unlimited team seats",
          "Multi-talent management",
          "White-label option",
          "Custom reporting",
          "Dedicated support",
          "Onboarding assistance"
        ],
        cta: "Contact Sales",
        highlighted: false,
        badge: "Enterprise"
      }
    ],
    guarantee: {
      headline: "14-Day Free Trial",
      description: "Try any paid plan free for 14 days. Cancel anytime, keep your data."
    },
    pricing_note: "Save 21% with annual billing. All plans include mobile app access."
  },
  faq: {
    section_id: "faq",
    headline: "Questions? We've got answers.",
    questions: [
      {
        question: "How is this different from using Notion or a spreadsheet?",
        answer: "CreatorCRM is purpose-built for brand deals with pipeline stages that match how partnerships actually work. Plus: email integration, payment tracking, reminders, and analytics—without any setup."
      },
      {
        question: "Can I import my existing contacts?",
        answer: "Yes! Import from CSV or add manually. If you're switching from a spreadsheet, you can bring everything over in minutes."
      },
      {
        question: "Do you integrate with my email?",
        answer: "Pro plans include Gmail and Outlook integration. Emails with brand contacts auto-log to their profile, so you have full conversation history."
      },
      {
        question: "Can my manager or team use this too?",
        answer: "Business and Agency plans include team seats. Managers can see talent pipelines, and talent can manage their own deals—all in one place."
      },
      {
        question: "What about contracts and invoicing?",
        answer: "You can attach contracts to deals and track invoice status. For contract generation, we integrate with tools like UGCContracts. For invoicing, connect your existing Stripe or PayPal."
      },
      {
        question: "Is my data secure?",
        answer: "Yes. All data is encrypted in transit and at rest. We never share your brand relationships or earnings data. Your business is your business."
      },
      {
        question: "Do you have a mobile app?",
        answer: "Yes! Our mobile app lets you update deals, log activities, and check payments on the go. Available for iOS and Android."
      },
      {
        question: "Can I cancel anytime?",
        answer: "Absolutely. Cancel anytime from your account settings. You can export all your data before canceling."
      }
    ]
  },
  final_cta: {
    section_id: "cta",
    headline: "Stop juggling. Start closing.",
    subheadline: "Join thousands of creators who finally have their brand deals organized.",
    cta_text: "Start Free →",
    trust_element: "No credit card required • Setup in 2 minutes • 14-day free trial"
  },
  footer: {
    tagline: "Finally, a CRM that gets how creators work.",
    links: {
      product: ["Features", "Pricing", "Mobile App", "Integrations"],
      resources: ["Blog", "Help Center", "Creator Guides", "Deal Templates"],
      company: ["About", "Careers", "Press", "Contact"],
      legal: ["Privacy", "Terms", "Security", "GDPR"]
    },
    social: ["Twitter", "Instagram", "LinkedIn", "YouTube"],
    newsletter: {
      headline: "Creator business tips",
      placeholder: "Your email",
      cta: "Subscribe"
    }
  }
};

async function seedCreatorCrm() {
  console.log("Seeding CreatorCRM...");

  try {
    // Check if it already exists
    const existing = await db.select().from(ideas).where(eq(ideas.id, creatorCrmIdea.id));
    
    if (existing.length > 0) {
      console.log("CreatorCRM idea already exists. Updating...");
      await db.update(ideas)
        .set({ 
          ...creatorCrmIdea,
          updatedAt: new Date()
        })
        .where(eq(ideas.id, creatorCrmIdea.id));
    } else {
      // Insert the idea
      await db.insert(ideas).values({
        ...creatorCrmIdea,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created CreatorCRM idea.");
    }

    // Check if landing page exists
    const existingLanding = await db.select().from(landingPages).where(eq(landingPages.slug, "creatorcrm"));
    
    if (existingLanding.length > 0) {
      console.log("CreatorCRM landing page already exists. Updating...");
      await db.update(landingPages)
        .set({ 
          content: JSON.stringify(creatorCrmLanding),
          updatedAt: new Date(),
          isPublished: true 
        })
        .where(eq(landingPages.slug, "creatorcrm"));
    } else {
      // Insert the landing page
      await db.insert(landingPages).values({
        ideaId: creatorCrmIdea.id,
        slug: "creatorcrm",
        content: JSON.stringify(creatorCrmLanding),
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created CreatorCRM landing page.");
    }

    // Create execution plan with comprehensive deliverable content
    const executionPlanData = {
      ideaId: creatorCrmIdea.id,
      userId: null,
      elevatorPitch: JSON.stringify({
        problem_statement: "Creators managing 5+ brand deals per month are drowning in chaos. Sponsor conversations happen across email, DMs, and texts. Deal terms live in Google Docs nobody can find. Payment tracking means scrolling through PayPal. Nobody knows which brands ghosted, which invoices are overdue, or which relationships are worth nurturing. The result? Missed follow-ups, forgotten invoices, and leaving thousands on the table from repeat partnerships that never happened.",
        solution_summary: "A CRM built for how creators actually work. Track every brand relationship from first contact to paid invoice. Pipeline view shows deal stages at a glance. Auto-log emails and DMs. Set reminders to follow up. Track payments and see your true earnings. Know exactly which brands are worth your time—and which ghosted you twice.",
        target_customer: {
          primary: "Full-time content creators with 25K-500K followers doing 5+ brand deals per month who need to get organized as their business scales",
          secondary: "Creator managers and small agencies managing multiple talent with scattered deal flow",
          market_size_estimate: {
            tam: "$100B creator economy",
            sam: "$5B creator business tools market",
            som: "$200M professional creators needing deal management (500K+ creators doing $5K+/mo in brand deals)"
          }
        },
        why_now: "Three converging forces: (1) Creator economy has professionalized—top creators do 50+ brand deals/year and need real business tools, (2) Brand deal volume is up 3x since 2020 but creator tools haven't kept up, (3) Creators are realizing their 'business' needs systems, not just creativity."
      }),
      persona: JSON.stringify({
        direct_competitors: [
          {
            name: "Notion (DIY templates)",
            url: "https://notion.so",
            positioning: "All-in-one workspace with creator templates",
            pricing: "Free to $10/mo",
            strengths: ["Flexible", "Free tier", "Creator community templates"],
            weaknesses: ["Requires setup from scratch", "No automation", "No email integration", "Not purpose-built for deals"]
          },
          {
            name: "HubSpot (overkill)",
            url: "https://hubspot.com",
            positioning: "Enterprise CRM",
            pricing: "Free to $1,600/mo",
            strengths: ["Powerful", "Email integration", "Automation"],
            weaknesses: ["Way too complex for creators", "Designed for sales teams", "Expensive for features needed", "Steep learning curve"]
          },
          {
            name: "Honeybook",
            url: "https://honeybook.com",
            positioning: "Client management for freelancers",
            pricing: "$19-79/mo",
            strengths: ["Good for service businesses", "Contracts & invoicing", "Clean UI"],
            weaknesses: ["Built for photographers/planners", "Doesn't understand brand deals", "No social/DM integration", "Project-focused not relationship-focused"]
          },
          {
            name: "Airtable (DIY)",
            url: "https://airtable.com",
            positioning: "Spreadsheet-database hybrid",
            pricing: "Free to $20/mo",
            strengths: ["Flexible", "Powerful views", "Good templates"],
            weaknesses: ["Requires configuration", "No native email tracking", "Not built for creator workflow", "Gets complex fast"]
          }
        ],
        indirect_competitors: [
          "Creator management agencies (expensive, give up control)",
          "General project management tools (Asana, Monday—wrong model)",
          "Influencer platforms (brand-side, not creator-side)",
          "Email inbox chaos (the status quo)",
          "Memory and sticky notes (doesn't scale)"
        ],
        market_gaps: [
          "No CRM built specifically for creator-brand relationships",
          "Existing tools don't understand deal lifecycle (pitch → negotiate → deliver → get paid)",
          "No integration with where creator convos happen (DMs, email)",
          "Invoicing tools don't track relationship history",
          "No visibility into which brand relationships are most valuable over time",
          "Creator-specific metrics (rate per follower, deal velocity) don't exist"
        ]
      }),
      userStories: [
        JSON.stringify({
          positioning_statement: "For professional creators juggling multiple brand deals who are tired of scattered conversations and missed opportunities, CreatorCRM is a relationship management tool built specifically for the creator business model. Unlike generic CRMs or DIY spreadsheets, we understand how brand deals actually work—from first DM to final payment—and help you build a real business around your influence.",
          unique_value_proposition: "Finally, a CRM that gets how creators work. Track deals, nurture brands, get paid.",
          key_differentiators: [
            "Creator-native workflow: Pipeline stages match how brand deals actually progress (Pitched → Negotiating → Contracted → Delivering → Invoiced → Paid)",
            "Relationship intelligence: See full history with every brand—past deals, rates, responsiveness, lifetime value",
            "Where you work: Log conversations from email, Instagram DMs, and Twitter DMs in one place",
            "Money tracking: Know exactly what you've earned, what's pending, and what's overdue",
            "Repeat deal engine: Surface brands ready for re-engagement based on timing and past success"
          ],
          category: "Creator business tools (creating subcategory: 'Creator CRM')"
        }),
        JSON.stringify({
          core_features: [
            {
              feature: "Brand Contact Management",
              description: "Database of brand contacts with company, role, email, social handles. Quick add from email or manual entry. Tag by category (fashion, tech, food, etc.).",
              priority: "P0",
              effort: "Small"
            },
            {
              feature: "Deal Pipeline",
              description: "Kanban board with creator-specific stages: Lead → Pitched → Negotiating → Contracted → Delivering → Invoiced → Paid → Completed. Drag-and-drop. Deal value tracking.",
              priority: "P0",
              effort: "Medium"
            },
            {
              feature: "Deal Records",
              description: "For each deal: brand, contact, deliverables, rate, timeline, contract status, payment status, notes. Attach files (contracts, briefs).",
              priority: "P0",
              effort: "Medium"
            },
            {
              feature: "Activity Timeline",
              description: "Log interactions: emails, calls, DMs, meetings. Manual logging with quick-add. See full history with each brand.",
              priority: "P0",
              effort: "Small"
            },
            {
              feature: "Follow-up Reminders",
              description: "Set reminders to follow up on deals. Email/push notifications. Smart suggestions based on deal stage and time since last contact.",
              priority: "P0",
              effort: "Small"
            },
            {
              feature: "Payment Tracking",
              description: "Mark invoices sent/paid. Track payment terms and due dates. See overdue payments at a glance. Monthly/yearly earnings dashboard.",
              priority: "P0",
              effort: "Medium"
            },
            {
              feature: "Email Integration",
              description: "Connect Gmail/Outlook. Auto-log emails from known brand contacts. BCC address for manual logging.",
              priority: "P1",
              effort: "Large"
            },
            {
              feature: "Earnings Dashboard",
              description: "Total earnings by period. Average deal size. Deals by stage. Revenue by brand category. Projected pipeline value.",
              priority: "P1",
              effort: "Medium"
            }
          ],
          post_mvp_features: [
            "Instagram DM integration (when API allows)",
            "Email templates for common responses",
            "Contract generation and e-signature",
            "Invoice generation and tracking",
            "Team/manager collaboration view",
            "AI-powered follow-up suggestions",
            "Rate benchmarking against similar creators",
            "Tax-ready earnings reports",
            "Calendar integration for deadlines",
            "Brand discovery (find new potential sponsors)"
          ],
          out_of_scope: [
            "Full invoicing platform (integrate with Stripe, PayPal)",
            "Contract legal review (integrate with UGCContracts)",
            "Rate calculation (integrate with SponsorCalc)",
            "Content scheduling and publishing",
            "Influencer marketplace (brand-side discovery)",
            "Accounting software (integrate with QuickBooks)"
          ],
          mvp_timeline: "8-10 weeks for solo developer, 5-6 weeks for small team"
        }),
        JSON.stringify({
          recommended_stack: {
            frontend: "Next.js 14 (App Router) — Fast, great for dashboards and data-heavy apps",
            backend: "Next.js API Routes + Supabase Edge Functions — Simple, serverless",
            database: "Supabase (Postgres) — Relational data for contacts, deals, activities",
            auth: "Supabase Auth — Simple email/password + social login",
            payments: "Stripe — Subscription billing",
            hosting: "Vercel — Edge performance, easy deploys",
            mobile: "React Native or Expo — Share code with web for mobile app",
            email_integration: "Nylas API or Gmail API — Email sync and logging",
            key_integrations: [
              "Gmail/Google OAuth — Email integration",
              "Nylas — Cross-provider email sync",
              "Stripe — Payment tracking webhook",
              "Google Calendar — Deadline sync",
              "Resend — Reminder notifications"
            ]
          },
          build_vs_buy: [
            {
              component: "CRM Core (contacts, deals, pipeline)",
              recommendation: "Build (core product)",
              reasoning: "This is the product. Build it custom with creator-specific data models."
            },
            {
              component: "Email Integration",
              recommendation: "Buy (Nylas or direct Gmail API)",
              reasoning: "Email integration is complex. Nylas handles multiple providers. Gmail API works if you only need Google."
            },
            {
              component: "Kanban/Pipeline UI",
              recommendation: "Build (with library)",
              reasoning: "Use react-beautiful-dnd or dnd-kit. The UX is core to the product."
            },
            {
              component: "Notifications/Reminders",
              recommendation: "Build (simple) + Buy (delivery)",
              reasoning: "Build reminder logic. Use Resend for email delivery, OneSignal for push."
            },
            {
              component: "Mobile App",
              recommendation: "Build (React Native)",
              reasoning: "Share code with web. Start with iOS, add Android later."
            }
          ],
          estimated_monthly_cost: {
            "0_100_users": "$50-100/mo (Vercel free, Supabase free, ~$50 Nylas)",
            "100_1000_users": "$300-700/mo (Vercel Pro, Supabase Pro, ~$200 Nylas, ~$50 Resend)",
            "1000_10000_users": "$1,500-4,000/mo (Scale with email sync volume)"
          }
        })
      ],
      recommendedStack: JSON.stringify({
        pricing_model: "Freemium with deal/contact limits",
        pricing_rationale: "Creators need to try before they buy. Free tier gets them hooked, paid unlocks scale and power features. Pricing aligns with creator income—affordable for part-timers, worth it for full-timers.",
        tiers: [
          {
            name: "Free",
            price: "$0",
            target_customer: "Creators just getting started with brand deals",
            features: [
              "Up to 25 brand contacts",
              "Up to 10 active deals",
              "Basic pipeline view",
              "Manual activity logging",
              "Payment tracking",
              "Mobile app access"
            ],
            limitations: [
              "25 contact limit",
              "10 active deal limit",
              "No email integration",
              "No analytics",
              "CreatorCRM branding"
            ]
          },
          {
            name: "Pro",
            price: "$19/month ($15/mo annual)",
            target_customer: "Full-time creators doing 5-15 deals/month",
            features: [
              "Unlimited contacts",
              "Unlimited deals",
              "Email integration (Gmail/Outlook)",
              "Earnings dashboard & analytics",
              "Brand scoring",
              "Follow-up reminders",
              "Remove CreatorCRM branding",
              "Priority support"
            ],
            limitations: [
              "1 user",
              "Basic integrations only"
            ]
          },
          {
            name: "Business",
            price: "$49/month ($39/mo annual)",
            target_customer: "High-volume creators, managers, small agencies",
            features: [
              "Everything in Pro",
              "Team seats (up to 3 users)",
              "Manager/talent views",
              "Advanced analytics & reporting",
              "Contract file storage (10GB)",
              "Calendar integration",
              "Tax-ready export",
              "API access"
            ],
            limitations: [
              "3 user limit"
            ]
          },
          {
            name: "Agency",
            price: "$149/month ($125/mo annual)",
            target_customer: "Agencies and managers with multiple talent",
            features: [
              "Everything in Business",
              "Unlimited team seats",
              "Multi-talent management",
              "White-label option",
              "Custom reporting",
              "Dedicated support",
              "Onboarding assistance"
            ],
            limitations: []
          }
        ],
        free_tier_strategy: "Free tier is genuinely useful for starting creators. Limits hit when you have 10+ deals at once—exactly when you need to upgrade. Growth creates natural conversion.",
        annual_discount: "21% discount (2.5 months free) for annual plans",
        pricing_psychology: "$19/mo is less than one meal out—easy yes for working creators. $49 is still affordable for serious creators doing $5K+/mo. Agency pricing captures real value for multi-talent management."
      }),
      launchChecklist: [
        JSON.stringify({
          brand_name: "CreatorCRM",
          tagline: "Your brand deals, finally organized.",
          brand_personality: [
            "Professional but approachable — This is a business tool, but for creative people",
            "Organized — Everything in its place, calm not chaotic",
            "Empowering — Helps creators run a real business",
            "Modern — Clean, contemporary, not corporate",
            "Reliable — Trustworthy with your business data"
          ],
          brand_voice: {
            tone: "Friendly professional. Like a business-savvy creator friend helping you get organized.",
            do: [
              "Use creator language (brand deals, sponsors, rates, deliverables)",
              "Acknowledge the chaos they're escaping",
              "Celebrate wins (closed deals, payments received)",
              "Be direct and actionable",
              "Respect their time and expertise"
            ],
            dont: [
              "Don't be overly corporate or formal",
              "Don't use enterprise sales jargon",
              "Don't talk down to creators",
              "Don't overcomplicate—they have enough chaos",
              "Don't be preachy about 'building a business'"
            ]
          },
          visual_direction: {
            color_palette: {
              primary: "#6366F1 (Indigo) — Modern, trustworthy, distinct from social platforms",
              secondary: "#312E81 (Dark indigo) — Depth, premium feel",
              accent: "#10B981 (Emerald) — Money/success, positive actions",
              warning: "#F59E0B (Amber) — Overdue/attention needed",
              neutrals: ["#F9FAFB (off-white)", "#111827 (near-black)"]
            },
            typography: {
              display: "Inter or Plus Jakarta Sans — Clean, modern, professional",
              body: "Inter — Readable, professional"
            },
            visual_style: "Clean and organized with purposeful whitespace. Dashboard-forward aesthetic. Light mode primary. Subtle shadows for depth. Calm and controlled—the antidote to inbox chaos."
          },
          messaging: {
            elevator_pitch_10s: "CreatorCRM helps content creators manage brand deals, track payments, and build lasting sponsor relationships.",
            elevator_pitch_30s: "Managing brand deals as a creator is chaos—conversations scattered across email and DMs, contracts you can't find, invoices you forgot to send. CreatorCRM brings it all together: track every brand relationship, manage your deal pipeline, and know exactly what you've earned. Stop juggling. Start building a real creator business.",
            key_messages: [
              "Every brand deal, one place.",
              "Know what you're owed. Get paid on time.",
              "Turn one-off deals into repeat partnerships.",
              "The business tool creators actually need.",
              "From chaos to closed deals."
            ]
          }
        }),
        JSON.stringify({
          launch_checklist: {
            pre_launch: {
              "4_weeks_before": [
                "MVP with contacts, deals, pipeline, and payment tracking",
                "Landing page live with waitlist",
                "Mobile-responsive web app (mobile app can wait)",
                "Demo video showing pipeline in action",
                "Set up PostHog for analytics",
                "Start Twitter presence sharing creator business tips"
              ],
              "2_weeks_before": [
                "Beta test with 20-30 creators (mix of niches/sizes)",
                "Collect beta testimonials and use case examples",
                "Add email integration (Gmail)",
                "Fix critical bugs from beta",
                "Prepare Product Hunt assets",
                "Set up Stripe billing and test all tiers"
              ],
              "1_week_before": [
                "Final product polish",
                "Reach out to creator communities",
                "Prepare Product Hunt maker comment",
                "Schedule all launch day social posts",
                "Test full signup → add deal flow"
              ],
              "day_before": [
                "Schedule Product Hunt post",
                "Pre-write responses to common questions",
                "Clear calendar for launch day",
                "Get good sleep"
              ]
            },
            launch_day: [
              {
                time: "12:01 AM PT",
                task: "Product Hunt goes live"
              },
              {
                time: "6:00 AM",
                task: "Post maker comment with founder story"
              },
              {
                time: "7:00 AM",
                task: "Twitter launch thread with GIF demos"
              },
              {
                time: "8:00 AM",
                task: "Instagram story showing the product"
              },
              {
                time: "9:00 AM",
                task: "Send launch email to waitlist"
              },
              {
                time: "10:00 AM",
                task: "Post in creator Discord servers"
              },
              {
                time: "11:00 AM",
                task: "LinkedIn post for manager/agency audience"
              }
            ],
            post_launch: {
              week_1: [
                "Respond to all user feedback within 24 hours",
                "Ship fixes for critical issues",
                "Follow up with free users who haven't added deals",
                "Share creator success stories",
                "Publish 'how we built CreatorCRM' thread"
              ],
              week_2_4: [
                "Implement top 3 feature requests",
                "Launch basic mobile app (iOS)",
                "Create tutorial content (pipeline setups, workflows)",
                "Partner with creator newsletters for coverage",
                "Begin SEO content on managing brand deals"
              ],
              month_2_3: [
                "Analyze conversion funnel and optimize",
                "A/B test pricing page",
                "Add more integrations (Outlook, calendar)",
                "Explore partnerships with creator tools (SponsorCalc, etc.)",
                "Consider affiliate program with creators"
              ]
            },
            launch_platforms: {
              primary: ["Product Hunt", "Twitter/X"],
              secondary: ["Instagram", "LinkedIn"],
              community: [
                "Creator economy Discord servers",
                "YouTuber communities",
                "Influencer marketing subreddits",
                "Creator newsletters (The Publish Press, Creator Economy)",
                "TikTok creator groups"
              ]
            }
          },
          key_metrics: {
            north_star_metric: {
              metric: "Deals Actively Tracked",
              definition: "Total number of deals in pipeline stages (not completed) across all users",
              target_day_1: "100 deals",
              target_month_1: "2,000 deals",
              target_month_3: "15,000 deals"
            },
            acquisition_metrics: [
              {
                metric: "Website visitors",
                definition: "Unique visitors to marketing site",
                target: "15K/month by month 3"
              },
              {
                metric: "Signup rate",
                definition: "Visitors who create an account",
                target: "8-12% (creator tools convert well)"
              },
              {
                metric: "Cost per signup",
                definition: "Ad spend / signups",
                target: "<$5"
              }
            ],
            activation_metrics: [
              {
                metric: "First brand added",
                definition: "% of signups who add at least 1 brand contact",
                target: "70%+"
              },
              {
                metric: "First deal created",
                definition: "% of users with contacts who create at least 1 deal",
                target: "60%+"
              },
              {
                metric: "Time to first deal",
                definition: "Hours from signup to first deal created",
                target: "<2 hours"
              }
            ],
            retention_metrics: [
              {
                metric: "Week 1 retention",
                definition: "% of users who return in week 2",
                target: "50%+ (CRM is sticky)"
              },
              {
                metric: "Monthly retention",
                definition: "% of users active month-over-month",
                target: "60%+"
              },
              {
                metric: "Deal velocity",
                definition: "Average deals moved through pipeline per user per month",
                target: "3+ (proves active use)"
              }
            ],
            revenue_metrics: [
              {
                metric: "Free to paid conversion",
                definition: "% of free users who upgrade to Pro",
                target: "8-12%"
              },
              {
                metric: "MRR",
                definition: "Monthly recurring revenue",
                target: "$5K month 3, $20K month 6"
              },
              {
                metric: "ARPU",
                definition: "Average revenue per paying user",
                target: "$22-28/month (mix of Pro and Business)"
              },
              {
                metric: "Churn rate",
                definition: "% of paying users who cancel monthly",
                target: "<5% (CRM data is sticky)"
              }
            ],
            unit_economics: {
              target_cac: "$15-30 (creator audience is reachable)",
              target_ltv: "$300+ (14+ months at $22 ARPU)",
              target_ltv_cac_ratio: "10:1 or better",
              target_payback_period: "1-2 months"
            }
          }
        })
      ],
      createdAt: new Date()
    };

    // Check if execution plan already exists  
    const existingPlan = await db.select().from(executionPlans).where(eq(executionPlans.ideaId, creatorCrmIdea.id));
    
    if (existingPlan.length > 0) {
      console.log("CreatorCRM execution plan already exists. Updating...");
      await db.update(executionPlans)
        .set({
          elevatorPitch: executionPlanData.elevatorPitch,
          persona: executionPlanData.persona,
          userStories: executionPlanData.userStories,
          recommendedStack: executionPlanData.recommendedStack,
          launchChecklist: executionPlanData.launchChecklist
        })
        .where(eq(executionPlans.ideaId, creatorCrmIdea.id));
    } else {
      // Insert new execution plan
      await db.insert(executionPlans).values(executionPlanData);
      console.log("Created CreatorCRM execution plan with comprehensive deliverables.");
    }

    console.log("Done! CreatorCRM has been added to the idea library with all comprehensive content.");
  } catch (error) {
    console.error("Error seeding CreatorCRM:", error);
    process.exit(1);
  }

  process.exit(0);
}

seedCreatorCrm();