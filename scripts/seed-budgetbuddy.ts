import { db } from "../server/db";
import { ideas, landingPages, executionPlans } from "../shared/schema";
import { eq } from "drizzle-orm";

// BudgetBuddy - idea_054
const budgetBuddyIdea = {
  id: "budgetbuddy-001",
  userId: null,
  title: "BudgetBuddy",
  oneLiner: "AI financial coach that makes budgeting feel like a game",
  problem: "78% of Americans live paycheck to paycheck, but traditional budgeting apps are boring spreadsheets that people abandon within a week. Personal finance feels overwhelming, shameful, and impossible to stick with long-term.",
  targetCustomer: "Millennials and Gen Z (ages 22-35) earning $40K-$80K who want to save money but have tried and failed with traditional budgeting apps. They're digitally native but financially stressed.",
  solution: "Turn budgeting into an RPG-style game where users level up their 'Financial Character' by hitting spending goals, saving targets, and building healthy money habits. AI coaching provides personalized tips and celebrates wins to maintain motivation.",
  monetization: "Freemium: Free basic tracking, $9/month Premium (AI coaching, advanced insights), $19/month Pro (investment tracking, debt optimization). Revenue sharing with partner banks for high-yield savings referrals.",
  tags: ["fintech", "ai", "gamification", "personal-finance", "mobile-app"],
  keywords: null,
  status: "validated" as const,
  demandScore: 89,
  demandBand: "high" as const,
  trendLabel: "rising" as const,
  validationSummary: null,
  validatedAt: null,
  isPublic: true,
  isSaved: false,
  whyNow: "Financial stress at all-time highs post-pandemic. Gamification proven to drive habit formation. Open banking APIs make financial data integration seamless. Gen Z/Millennials comfortable with AI assistants and mobile-first experiences.",
  revenueImpact: "Users save average $3,200/year through better spending habits. Premium users see 5x better goal achievement rates vs free apps. Strong retention through gamification creates $150+ lifetime value per user.",
  marketSize: "$4.5B",
  competitionLevel: "Medium" as const,
  category: "finance" as const,
  businessType: "b2c" as const,
  priceRange: "consumer" as const
};

const budgetBuddyLanding = {
  meta: {
    title: "BudgetBuddy — AI Financial Coach That Makes Budgeting Fun",
    description: "Level up your finances with BudgetBuddy's gamified budgeting app. AI coaching, achievement systems, and social features make saving money feel like playing your favorite game.",
    og_image_concept: "Gaming-inspired interface showing character leveling up with financial achievements, XP points for saving goals, and progress bars for budget categories."
  },
  hero: {
    headline: "Level Up Your Money Game",
    subheadline: "Finally, a budgeting app that doesn't feel like homework. Track spending, build savings, and crush financial goals with your AI-powered financial coach.",
    cta_primary: {
      text: "Start Your Financial Journey",
      url: "/signup"
    },
    cta_secondary: {
      text: "See How It Works",
      url: "#how-it-works"
    },
    social_proof_snippet: "Join 150K+ players building better financial habits • 4.8★ App Store rating",
    hero_visual: {
      type: "product_screenshot" as const,
      description: "Mobile app interface showing RPG-style character progression, achievement badges, and colorful spending categories with XP rewards."
    }
  },
  problem_section: {
    section_id: "problem",
    eyebrow: "The Budgeting Struggle",
    headline: "Budgeting Apps Are Boring. So You Don't Use Them.",
    description: "Traditional finance apps feel like digital spreadsheets. No wonder 73% of people abandon them within the first month. Managing money shouldn't feel like a chore.",
    pain_points: [
      {
        icon: "trending-down",
        title: "Apps Are Abandoned Fast",
        description: "Most budgeting apps have less than 10% monthly active users after the first month."
      },
      {
        icon: "frown",
        title: "Financial Shame Spiral",
        description: "Overspending alerts make you feel guilty instead of motivated to improve."
      },
      {
        icon: "clock",
        title: "Too Much Manual Work",
        description: "Categorizing every transaction and updating spreadsheets feels like a part-time job."
      },
      {
        icon: "target",
        title: "Goals Feel Impossible",
        description: "Saving $10,000 seems overwhelming when broken down into boring monthly targets."
      }
    ],
    stat_callout: {
      number: "78%",
      label: "of Americans live paycheck to paycheck",
      source: "Federal Reserve 2024"
    }
  },
  solution_section: {
    section_id: "solution",
    eyebrow: "Gamified Personal Finance",
    headline: "Your Money. Your Game. Your Victory.",
    description: "BudgetBuddy transforms financial responsibility into an addictive RPG experience. Earn XP for smart spending, unlock achievements for hitting goals, and level up your Financial Character.",
    features: [
      {
        icon: "user",
        title: "Financial Character",
        description: "Create your money avatar. Gain XP for good habits, unlock new abilities as you level up your financial skills."
      },
      {
        icon: "trophy",
        title: "Achievement System",
        description: "Earn badges for streaks, milestones, and smart decisions. 'Meal Prep Master' for cooking at home 5 days straight."
      },
      {
        icon: "brain",
        title: "AI Coach",
        description: "Your personal finance sidekick provides custom tips, celebrates wins, and helps you bounce back from setbacks."
      },
      {
        icon: "users",
        title: "Friend Challenges",
        description: "Compete with friends on savings goals, share achievements, and support each other's financial journeys."
      },
      {
        icon: "zap",
        title: "Smart Automation",
        description: "Auto-categorize transactions, set up goal-based savings transfers, and get spending insights without the work."
      },
      {
        icon: "gift",
        title: "Reward Partnerships",
        description: "Unlock real rewards from partners when you hit milestones. Free coffee for a 30-day budget streak."
      }
    ],
    visual: {
      type: "demo_video" as const,
      description: "60-second walkthrough showing user earning XP for smart spending, unlocking achievements, and leveling up their character"
    }
  },
  how_it_works: {
    section_id: "how-it-works",
    eyebrow: "Simple Start",
    headline: "Three Steps to Financial Freedom",
    steps: [
      {
        number: 1,
        title: "Connect & Create",
        description: "Link your accounts securely and create your Financial Character. Choose your money personality and first goal.",
        visual_description: "Character creation screen with avatar customization and goal selection"
      },
      {
        number: 2,
        title: "Play & Progress",
        description: "Make smart money decisions and watch your character level up. AI coaching guides you with personalized tips and encouragement.",
        visual_description: "Dashboard showing XP gains, achievement notifications, and AI coach messages"
      },
      {
        number: 3,
        title: "Achieve & Celebrate",
        description: "Unlock achievements, earn real rewards, and build lasting financial habits that stick. Share victories with friends.",
        visual_description: "Achievement celebration screen with social sharing options and real reward offers"
      }
    ]
  },
  social_proof: {
    section_id: "proof",
    eyebrow: "Player Success",
    headline: "Real Players. Real Financial Wins.",
    testimonials: [
      {
        quote: "I've tried every budgeting app and always quit. BudgetBuddy made it actually fun. I've saved $4,000 in 6 months just trying to level up!",
        author: "Jessica Martinez",
        role: "Marketing Manager",
        company: "Level 47 Saver",
        avatar_description: "Young professional with achievement badges visible",
        result: "$4,000 saved in 6 months"
      },
      {
        quote: "The AI coach feels like having a financial advisor in your pocket. It knew exactly when to encourage me and when to give tough love.",
        author: "David Kim",
        role: "Software Developer", 
        company: "Level 32 Budgeter",
        avatar_description: "Tech professional with gaming controller",
        result: "Paid off $8K debt in 8 months"
      },
      {
        quote: "My friends and I compete on who can save the most each month. It's the first time budgeting felt social and supportive instead of isolating.",
        author: "Maria Santos",
        role: "Teacher",
        company: "Level 28 Goal Crusher",
        avatar_description: "Young woman with friend group in background",
        result: "Emergency fund fully built"
      }
    ],
    stats: [
      {
        number: "150K+",
        label: "Active Players",
        context: "and growing daily"
      },
      {
        number: "$180M",
        label: "Collective Savings",
        context: "by our community"
      },
      {
        number: "85%",
        label: "Still Active",
        context: "after 6 months"
      },
      {
        number: "$3,200",
        label: "Average Yearly Savings",
        context: "per active user"
      }
    ],
    logos: {
      headline: "Bank-Level Security You Can Trust",
      companies: ["Plaid", "256-bit SSL", "SOC 2 Certified", "FDIC Insured Partners", "Biometric Auth", "Military-Grade Encryption"]
    },
    trust_badges: [
      {
        icon: "shield",
        text: "Bank-Level Security"
      },
      {
        icon: "lock",
        text: "256-Bit Encryption"
      },
      {
        icon: "eye-off",
        text: "Read-Only Access"
      }
    ]
  },
  pricing: {
    section_id: "pricing",
    eyebrow: "Simple Pricing",
    headline: "Choose Your Adventure Level",
    subheadline: "Start free and upgrade when you're ready to unlock advanced features.",
    plans: [
      {
        name: "Explorer",
        price: "Free",
        price_detail: "forever",
        description: "Perfect for getting started with basic money tracking",
        features: [
          "Basic spending tracking",
          "Simple goal setting",
          "Level 1-10 character progression",
          "Core achievement badges",
          "Basic AI tips",
          "Account connection (2 accounts)"
        ],
        cta: "Start Free",
        highlighted: false,
        badge: null
      },
      {
        name: "Adventurer",
        price: "$9",
        price_detail: "/month",
        description: "For serious players ready to level up their finances",
        features: [
          "Everything in Explorer",
          "Advanced AI coaching",
          "Unlimited character levels",
          "Premium achievements",
          "Friend challenges",
          "Custom budgets & goals",
          "Spending insights & trends",
          "Partner rewards access"
        ],
        cta: "Upgrade to Adventurer",
        highlighted: true,
        badge: "Most Popular"
      },
      {
        name: "Master",
        price: "$19",
        price_detail: "/month",
        description: "For financial wizards wanting maximum power",
        features: [
          "Everything in Adventurer",
          "Investment tracking",
          "Debt optimization strategies",
          "Tax optimization tips",
          "Advanced analytics",
          "Priority AI coaching",
          "Early access to new features",
          "Premium partner rewards"
        ],
        cta: "Become a Master",
        highlighted: false,
        badge: "Maximum Features"
      }
    ],
    guarantee: {
      headline: "30-Day Money-Back Guarantee",
      description: "If you don't level up your finances in 30 days, we'll refund every penny. No questions asked."
    },
    pricing_note: "All plans include bank-level security and 24/7 support. Cancel anytime."
  },
  faq: {
    section_id: "faq",
    headline: "Frequently Asked Questions",
    questions: [
      {
        question: "How is my financial data kept secure?",
        answer: "We use bank-level 256-bit encryption and only connect with read-only access through Plaid. We never store your banking credentials and are SOC 2 certified for security compliance."
      },
      {
        question: "How does the gamification actually help with budgeting?",
        answer: "Gamification triggers dopamine release for positive financial behaviors, creating habit formation. The XP system breaks big goals into small wins, making progress feel achievable and rewarding."
      },
      {
        question: "What makes the AI coaching different?",
        answer: "Our AI learns your spending patterns, personality, and goals to provide personalized tips at exactly the right moment. It celebrates your wins and helps you recover from setbacks without judgment."
      },
      {
        question: "Can I use this if I have irregular income?",
        answer: "Absolutely! The AI coach adapts to irregular income patterns and helps you create flexible budgets that work with variable earnings. Many freelancers and gig workers love BudgetBuddy."
      },
      {
        question: "How do friend challenges work?",
        answer: "Connect with friends (without sharing specific financial data) to compete on savings goals, spending categories, and habit streaks. It's social support without the financial shame."
      },
      {
        question: "What if I'm starting with debt or no savings?",
        answer: "Perfect! The character system is designed to celebrate small wins and progress from any starting point. Paying off $50 debt gets XP just like saving $500. Every step forward counts."
      }
    ]
  },
  final_cta: {
    section_id: "cta",
    headline: "Ready to Win at Money?",
    subheadline: "Join 150K+ players who've turned financial stress into financial success",
    cta_text: "Start Your Financial Adventure",
    trust_element: "Free forever • 30-day guarantee • Bank-level security"
  },
  footer: {
    tagline: "Level up your money game.",
    links: {
      product: ["Features", "Pricing", "Security", "How It Works"],
      resources: ["Blog", "Help Center", "Financial Tips", "Community"],
      company: ["About", "Careers", "Press", "Contact"],
      legal: ["Privacy", "Terms", "Security", "Compliance"]
    },
    social: ["Twitter", "Instagram", "TikTok", "Discord"],
    newsletter: {
      headline: "Financial tips & game updates",
      placeholder: "Your email",
      cta: "Level Up"
    }
  }
};

async function seedBudgetBuddy() {
  console.log("Seeding BudgetBuddy (idea_054)...");

  try {
    // Check if it already exists
    const existing = await db.select().from(ideas).where(eq(ideas.id, budgetBuddyIdea.id));
    
    if (existing.length > 0) {
      console.log("BudgetBuddy idea already exists. Updating...");
      await db.update(ideas)
        .set({ 
          ...budgetBuddyIdea,
          updatedAt: new Date()
        })
        .where(eq(ideas.id, budgetBuddyIdea.id));
    } else {
      // Insert the idea
      await db.insert(ideas).values({
        ...budgetBuddyIdea,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created BudgetBuddy idea.");
    }

    // Check if landing page exists
    const existingLanding = await db.select().from(landingPages).where(eq(landingPages.slug, "budgetbuddy"));
    
    if (existingLanding.length > 0) {
      console.log("BudgetBuddy landing page already exists. Updating...");
      await db.update(landingPages)
        .set({ 
          content: JSON.stringify(budgetBuddyLanding),
          updatedAt: new Date(),
          isPublished: true 
        })
        .where(eq(landingPages.slug, "budgetbuddy"));
    } else {
      // Insert the landing page
      await db.insert(landingPages).values({
        ideaId: budgetBuddyIdea.id,
        slug: "budgetbuddy",
        content: JSON.stringify(budgetBuddyLanding),
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created BudgetBuddy landing page.");
    }

    // Create execution plan
    const executionPlanContent = {
      elevatorPitch: `BudgetBuddy transforms the painful chore of budgeting into an addictive RPG-style game. Users create a "Financial Character" that levels up through smart spending decisions, unlocking achievements and rewards along the way. With AI coaching providing personalized guidance, BudgetBuddy helps the 78% of Americans living paycheck-to-paycheck build lasting financial habits through gamification psychology that actually works.`,
      
      persona: `Primary User: "Sarah the Struggling Saver" - 28-year-old marketing coordinator earning $55K. Lives in expensive city, has student debt, wants to save but gets overwhelmed by traditional budgeting. Plays mobile games, uses social media heavily, values experiences over things. Currently uses Venmo, Instagram, and has tried Mint but abandoned it. Seeks financial improvement but needs motivation and simplicity.`,
      
      userStories: [
        "As a young professional, I want to see my financial progress visually so that budgeting feels rewarding instead of overwhelming.",
        "As someone who struggles with discipline, I want AI coaching that motivates me without making me feel guilty about mistakes.",
        "As a social person, I want to share financial wins with friends so that saving money becomes a fun group activity.",
        "As a busy person, I want automatic transaction categorization so that budgeting doesn't feel like homework.",
        "As a goal-oriented person, I want to unlock real rewards when I hit milestones so that my financial discipline pays off immediately."
      ],
      
      recommendedStack: `Frontend: React Native (iOS/Android apps) + Next.js (web dashboard)
Backend: Node.js + Express + PostgreSQL
AI/ML: OpenAI GPT-4 for coaching + custom ML models for spending insights
Banking: Plaid for account connections
Authentication: Auth0 or Firebase Auth
Cloud: AWS (RDS, Lambda, S3)
Payment: Stripe for subscriptions
Analytics: Mixpanel for user behavior
Push Notifications: Firebase Cloud Messaging
Security: SOC 2 compliance, encryption at rest/transit`,
      
      launchChecklist: [
        "MVP mobile app with core gamification features",
        "Secure banking integration via Plaid",
        "AI coaching system with personality engine", 
        "Achievement and XP progression system",
        "Basic social features (friend challenges)",
        "Freemium pricing with premium subscriptions",
        "App Store/Google Play submission",
        "Financial security certifications (SOC 2)",
        "Beta testing with 100+ target users",
        "Content marketing strategy for launch"
      ]
    };

    // Check if execution plan already exists
    const existingPlan = await db.select().from(executionPlans).where(eq(executionPlans.ideaId, budgetBuddyIdea.id));
    
    if (existingPlan.length > 0) {
      console.log("BudgetBuddy execution plan already exists. Updating...");
      await db.update(executionPlans)
        .set({
          elevatorPitch: executionPlanContent.elevatorPitch,
          persona: executionPlanContent.persona,
          userStories: executionPlanContent.userStories,
          recommendedStack: executionPlanContent.recommendedStack,
          launchChecklist: executionPlanContent.launchChecklist,
          updatedAt: new Date()
        })
        .where(eq(executionPlans.ideaId, budgetBuddyIdea.id));
    } else {
      // Insert new execution plan
      await db.insert(executionPlans).values({
        ideaId: budgetBuddyIdea.id,
        userId: null,
        elevatorPitch: executionPlanContent.elevatorPitch,
        persona: executionPlanContent.persona,
        userStories: executionPlanContent.userStories,
        recommendedStack: executionPlanContent.recommendedStack,
        launchChecklist: executionPlanContent.launchChecklist,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created BudgetBuddy execution plan.");
    }

    console.log("Done! BudgetBuddy has been added to the idea library.");
  } catch (error) {
    console.error("Error seeding BudgetBuddy:", error);
    process.exit(1);
  }

  process.exit(0);
}

seedBudgetBuddy();