import { db } from "../server/db";
import { ideas, landingPages, executionPlans } from "../shared/schema";
import { eq } from "drizzle-orm";

// ThumbTest - idea_053
const thumbTestIdea = {
  id: "thumbtest-001",
  userId: null,
  title: "ThumbTest",
  oneLiner: "Know which thumbnail wins before you upload",
  problem: "Thumbnails make or break YouTube videos—they account for 50%+ of CTR decisions. But creators can't test thumbnails without publishing, and changing thumbnails after upload tanks the algorithm. They're forced to guess, often losing thousands of views on a single wrong choice.",
  targetCustomer: "YouTubers with 50K-500K subscribers who publish 2+ videos weekly and actively optimize for CTR. Secondary: YouTube agencies managing multiple channels, thumbnail designers who want to prove their value.",
  solution: "Upload thumbnail variants before publishing. ThumbTest shows them to real users matching your audience demographics and measures actual click preference. Get statistically significant CTR predictions before you commit. Historical analysis reveals which thumbnail styles perform best for your channel.",
  monetization: "Credit-based with subscription options. $15 per test, $39/month Creator plan (10 tests), $99/month Pro plan (30 tests), $249/month Agency plan (unlimited). Free trial: 1 test.",
  tags: ["youtube", "creator-tools", "a-b-testing", "thumbnails", "ctr-optimization"],
  keywords: null,
  status: "validated" as const,
  demandScore: 92,
  demandBand: "high" as const,
  trendLabel: "rising" as const,
  validationSummary: null,
  validatedAt: null,
  isPublic: true,
  isSaved: false,
  whyNow: "YouTube is more competitive than ever—top channels test everything. Native A/B testing is locked behind YouTube Partners and has limitations. AI thumbnail generation is flooding the market with more competition. Creators who don't optimize get buried.",
  revenueImpact: "Creators see 20-40% CTR improvements by testing thumbnails before upload. Single test often pays for months of subscription. Prevents algorithm damage from post-publish changes.",
  marketSize: "$300M",
  competitionLevel: "Medium" as const,
  category: "creator-tools" as const,
  businessType: "b2c" as const,
  priceRange: "smb" as const
};

const thumbTestLanding = {
  meta: {
    title: "ThumbTest — YouTube Thumbnail A/B Testing Before You Publish",
    description: "Test YouTube thumbnails with real viewers before uploading. Get statistically proven CTR predictions in hours. Know which thumbnail wins.",
    og_image_concept: "Split screen showing two thumbnail variants with click data overlay, arrows pointing to clear winner with statistical confidence badge."
  },
  hero: {
    headline: "Know which thumbnail wins before you upload",
    subheadline: "Test your thumbnails with real viewers who match your audience. Get statistically proven winners in hours, not weeks.",
    cta_primary: {
      text: "Test Your First Thumbnail Free",
      url: "/signup"
    },
    cta_secondary: {
      text: "See how it works →",
      url: "#how-it-works"
    },
    social_proof_snippet: "Trusted by 5,000+ YouTubers • 50,000+ thumbnails tested",
    hero_visual: {
      type: "product_screenshot" as const,
      description: "Dashboard showing thumbnail variants side-by-side with click-through percentages, confidence scores, and clear winner highlighted."
    }
  },
  problem_section: {
    section_id: "problem",
    eyebrow: "The Thumbnail Gamble",
    headline: "Guessing costs you views",
    description: "One wrong thumbnail can tank your video before it even starts. Without pre-publish testing, you're gambling with every upload.",
    pain_points: [
      {
        icon: "trending-down",
        title: "One wrong thumbnail tanks your video",
        description: "Thumbnails drive 50%+ of click decisions. A 10% CTR difference means thousands of lost views—per video."
      },
      {
        icon: "clock", 
        title: "You can't test without publishing",
        description: "YouTube's A/B testing only works after upload. By the time you have data, the algorithm has moved on."
      },
      {
        icon: "alert-triangle",
        title: "Changing thumbnails kills momentum",
        description: "Swapping thumbnails after launch signals instability to the algorithm. Your video loses push."
      }
    ],
    stat_callout: {
      number: "50%",
      label: "of YouTube CTR comes from thumbnails",
      source: "YouTube Creator Insights 2024"
    }
  },
  solution_section: {
    section_id: "solution",
    eyebrow: "Pre-Publish Testing",
    headline: "Data before decisions",
    description: "ThumbTest transforms thumbnail guesswork into statistical certainty. Test 2-4 variants with real viewers who match your demographics, get confidence-backed winners in hours.",
    features: [
      {
        icon: "clock",
        title: "Pre-Publish Testing", 
        description: "Test 2-4 thumbnail variants before your video goes live. Zero algorithm risk."
      },
      {
        icon: "users",
        title: "Audience-Matched Panels",
        description: "Real viewers who match your demographics see your thumbnails and choose."
      },
      {
        icon: "bar-chart-3",
        title: "Statistical Confidence",
        description: "Know when you have a real winner vs. random noise. Clear confidence scores."
      },
      {
        icon: "zap",
        title: "Results in Hours", 
        description: "Get your winner in 3-12 hours. Fast enough for your upload schedule."
      },
      {
        icon: "trending-up",
        title: "Pattern Recognition",
        description: "See what's worked across your tests. Learn what YOUR audience responds to."
      },
      {
        icon: "layout",
        title: "Title + Thumbnail",
        description: "Test the full package. Viewers see title and thumbnail together, like real YouTube."
      }
    ],
    visual: {
      type: "demo_video" as const,
      description: "60-second walkthrough showing thumbnail upload, test setup, and results dashboard with clear winner"
    }
  },
  how_it_works: {
    section_id: "how-it-works",
    eyebrow: "Simple Process",
    headline: "Three steps to your winner",
    steps: [
      {
        number: 1,
        title: "Upload your variants",
        description: "Drop in 2-4 thumbnail options and your video title.",
        visual_description: "Upload interface with thumbnail variants and title field"
      },
      {
        number: 2,
        title: "We find your viewers",
        description: "100+ real people matching your audience demographics see your thumbnails.",
        visual_description: "Audience targeting interface with demographic options"
      },
      {
        number: 3,
        title: "Get your winner",
        description: "See clear results with statistical confidence. Upload with certainty.",
        visual_description: "Results dashboard showing winning thumbnail with confidence percentage"
      }
    ]
  },
  social_proof: {
    section_id: "proof",
    eyebrow: "Creator Success",
    headline: "Creators trust the data",
    testimonials: [
      {
        quote: "I used to stress about thumbnails for hours. ThumbTest lets me upload 3 options, get data back, and know exactly which one will perform. Game changer.",
        author: "Alex Chen",
        role: "Tech YouTuber",
        company: "285K subscribers",
        avatar_description: "Young tech creator with studio setup background",
        result: "32% CTR improvement"
      },
      {
        quote: "Saved my channel honestly. Was about to upload a thumbnail that tested 40% worse than the winner. One test paid for a year of subscription.",
        author: "Maria Gonzalez", 
        role: "Lifestyle Creator",
        company: "150K subscribers",
        avatar_description: "Female lifestyle creator in bright, aesthetic room",
        result: "Avoided thumbnail disaster"
      },
      {
        quote: "We use ThumbTest for all our clients now. Can't justify the risk of guessing when the data is this good. ROI is immediate.",
        author: "James Wilson",
        role: "YouTube Agency Owner",
        company: "12 channels managed",
        avatar_description: "Professional in modern office with team in background",
        result: "Agency standard practice"
      }
    ],
    stats: [
      {
        number: "5,000+",
        label: "Active Creators", 
        context: "testing weekly"
      },
      {
        number: "50K+",
        label: "Thumbnails Tested",
        context: "and counting"
      },
      {
        number: "25%",
        label: "Average CTR Lift",
        context: "from winning thumbnails"
      },
      {
        number: "6 hours",
        label: "Average Results Time",
        context: "fast enough for your schedule"
      }
    ],
    logos: {
      headline: "Works With Your Workflow",
      companies: ["YouTube Studio", "Canva", "Photoshop", "Figma", "TubeBuddy", "VidIQ"]
    },
    trust_badges: [
      {
        icon: "shield",
        text: "Your Content Is Safe"
      },
      {
        icon: "zap", 
        text: "Results in Hours"
      },
      {
        icon: "users",
        text: "Real Human Testers"
      }
    ]
  },
  pricing: {
    section_id: "pricing",
    eyebrow: "Simple Pricing",
    headline: "Start with a free test",
    subheadline: "See the data for yourself. Your first test is on us.",
    plans: [
      {
        name: "Free Trial",
        price: "Free",
        price_detail: "one test",
        description: "Perfect for trying ThumbTest risk-free",
        features: [
          "1 free test (up to 3 variants)",
          "50 responses", 
          "Basic demographic targeting",
          "Results within 24 hours",
          "Confidence scoring"
        ],
        cta: "Start Free Test",
        highlighted: false,
        badge: null
      },
      {
        name: "Pay Per Test", 
        price: "$15",
        price_detail: "per test",
        description: "Perfect for occasional testing",
        features: [
          "Up to 4 variants per test",
          "100 responses",
          "Full demographic targeting",
          "Results within 12 hours",
          "Confidence scoring",
          "Test history"
        ],
        cta: "Buy Single Test",
        highlighted: false,
        badge: null
      },
      {
        name: "Creator",
        price: "$39",
        price_detail: "/month",
        description: "For regular creators testing weekly", 
        features: [
          "10 tests per month",
          "Up to 4 variants, 100 responses each",
          "Full targeting + audience profiling",
          "Results within 6 hours",
          "Test history and patterns",
          "Priority support"
        ],
        cta: "Start Creator Plan",
        highlighted: true,
        badge: "Most Popular"
      },
      {
        name: "Pro",
        price: "$99", 
        price_detail: "/month",
        description: "For power users and multi-channel creators",
        features: [
          "30 tests per month",
          "Up to 6 variants, 150 responses", 
          "Advanced audience segmentation",
          "Results within 3 hours",
          "AI winner analysis",
          "Competitive tracking",
          "Team access (3 seats)"
        ],
        cta: "Upgrade to Pro",
        highlighted: false,
        badge: null
      }
    ],
    guarantee: {
      headline: "Results or Refund",
      description: "If your test doesn't show a statistically significant winner, we'll refund your test credit."
    },
    pricing_note: "All plans include unlimited thumbnail uploads and secure data handling."
  },
  faq: {
    section_id: "faq",
    headline: "Frequently Asked Questions",
    questions: [
      {
        question: "How is this different from YouTube's native A/B testing?",
        answer: "YouTube's testing happens AFTER you publish—you're risking algorithm performance on a live video. ThumbTest lets you test BEFORE upload. No risk, no regrets."
      },
      {
        question: "Who sees my thumbnails?",
        answer: "Real people from survey panels who match your audience demographics. Not bots, not random clicks—actual humans making click decisions."
      },
      {
        question: "How many responses do I need for reliable results?",
        answer: "Our tests use 100+ responses by default, which typically reaches statistical significance. We'll tell you the confidence level with every result."
      },
      {
        question: "How fast do I get results?",
        answer: "Most tests complete in 3-12 hours depending on your plan and targeting. Fast enough for your upload schedule."
      },
      {
        question: "What if there's no clear winner?",
        answer: "We'll tell you that too. Sometimes thumbnails truly tie—that's useful data. It means you can pick either, or neither is great and you should try new variants."
      },
      {
        question: "Can I test titles too?",
        answer: "Yes! Every test includes your title because viewers see both together. You can also run title-only variations with the same thumbnail."
      }
    ]
  },
  final_cta: {
    section_id: "cta",
    headline: "Your next thumbnail shouldn't be a guess",
    subheadline: "One test could mean thousands more views on your next video.",
    cta_text: "Test Your First Thumbnail Free",
    trust_element: "Free test • No credit card • Results in hours"
  },
  footer: {
    tagline: "Know before you upload.",
    links: {
      product: ["Features", "Pricing", "How It Works", "FAQ"],
      resources: ["Blog", "Help Center", "Best Practices", "Case Studies"],
      company: ["About", "Careers", "Press", "Contact"],
      legal: ["Privacy", "Terms", "Security", "Data Policy"]
    },
    social: ["Twitter", "YouTube", "Discord", "Instagram"],
    newsletter: {
      headline: "YouTube tips & case studies",
      placeholder: "Your email", 
      cta: "Get Tips"
    }
  }
};

async function seedThumbTest() {
  console.log("Seeding ThumbTest (idea_053)...");

  try {
    // Check if it already exists
    const existing = await db.select().from(ideas).where(eq(ideas.id, thumbTestIdea.id));
    
    if (existing.length > 0) {
      console.log("ThumbTest idea already exists. Updating...");
      await db.update(ideas)
        .set({ 
          ...thumbTestIdea,
          updatedAt: new Date()
        })
        .where(eq(ideas.id, thumbTestIdea.id));
    } else {
      // Insert the idea
      await db.insert(ideas).values({
        ...thumbTestIdea,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created ThumbTest idea.");
    }

    // Check if landing page exists
    const existingLanding = await db.select().from(landingPages).where(eq(landingPages.slug, "thumbtest"));
    
    if (existingLanding.length > 0) {
      console.log("ThumbTest landing page already exists. Updating...");
      await db.update(landingPages)
        .set({ 
          content: JSON.stringify(thumbTestLanding),
          updatedAt: new Date(),
          isPublished: true 
        })
        .where(eq(landingPages.slug, "thumbtest"));
    } else {
      // Insert the landing page
      await db.insert(landingPages).values({
        ideaId: thumbTestIdea.id,
        slug: "thumbtest",
        content: JSON.stringify(thumbTestLanding),
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created ThumbTest landing page.");
    }

    // Create execution plan
    const executionPlanContent = {
      elevatorPitch: `ThumbTest solves the biggest pain point for YouTube creators: you can't test thumbnails without publishing and risking algorithm performance. We show your thumbnail variants to real viewers matching your audience demographics, providing statistically significant CTR predictions in hours. Creators can upload with confidence knowing which thumbnail will perform 20-40% better, preventing the thousands of lost views that come from wrong thumbnail choices.`,
      
      persona: `Primary User: "Tyler the YouTube Optimizer" - 28-year-old tech YouTuber with 150K subscribers. Posts 2 videos/week, obsesses over CTR and analytics. Has tried TubeBuddy A/B testing but hates waiting 2 weeks for results after upload. Spends hours designing thumbnails and wants data-backed validation before committing. Values speed, accuracy, and anything that gives him an edge over competitors.`,
      
      userStories: [
        "As a YouTuber, I want to test thumbnail variants before upload so I don't risk algorithm performance with a bad choice.",
        "As a data-driven creator, I want statistically significant CTR predictions so I know which thumbnail will actually perform better.", 
        "As a busy creator, I want test results in hours not weeks so they fit my upload schedule.",
        "As an optimizer, I want to see which thumbnail styles work for MY audience so I can improve future designs.",
        "As a professional, I want demographic targeting so test viewers match my actual subscriber base."
      ],
      
      recommendedStack: `Frontend: Next.js 14 — Fast, image-optimized, good for user uploads and dashboard
Backend: Next.js API Routes + Supabase — Handles auth, file uploads, test management 
Database: Supabase (Postgres) — Stores tests, results, user data, panel responses
Auth: Supabase Auth — Email + Google OAuth (creators use Google accounts)
Payments: Stripe — Credit-based billing + subscriptions
Hosting: Vercel — Optimal for Next.js, handles image optimization well
Panel Provider: Pollfish or Prolific — Critical for accessing survey respondents
File Storage: Cloudinary — Image uploads, optimization, secure URLs for testing
Key Integrations: Pollfish/Prolific API, YouTube Data API, Stripe API, Cloudinary API`,
      
      launchChecklist: [
        "MVP core features: thumbnail upload, basic targeting, test creation, panel integration",
        "Statistical engine: confidence calculations, winner determination, result visualization", 
        "User dashboard: test history, result analytics, pattern recognition",
        "Payment system: credit-based billing with Stripe integration",
        "Panel integration: Pollfish/Prolific API for demographic targeting",
        "Beta testing: 50+ YouTubers across subscriber tiers for validation",
        "Landing page: conversion-optimized with free test offer",
        "Legal compliance: data privacy, panel terms, user agreements",
        "Launch strategy: Product Hunt, YouTube creator communities, influencer outreach",
        "Analytics setup: conversion tracking, cohort analysis, panel quality monitoring"
      ]
    };

    // Check if execution plan already exists
    const existingPlan = await db.select().from(executionPlans).where(eq(executionPlans.ideaId, thumbTestIdea.id));
    
    if (existingPlan.length > 0) {
      console.log("ThumbTest execution plan already exists. Updating...");
      await db.update(executionPlans)
        .set({
          elevatorPitch: executionPlanContent.elevatorPitch,
          persona: executionPlanContent.persona,
          userStories: executionPlanContent.userStories,
          recommendedStack: executionPlanContent.recommendedStack,
          launchChecklist: executionPlanContent.launchChecklist,
          updatedAt: new Date()
        })
        .where(eq(executionPlans.ideaId, thumbTestIdea.id));
    } else {
      // Insert new execution plan
      await db.insert(executionPlans).values({
        ideaId: thumbTestIdea.id,
        userId: null,
        elevatorPitch: executionPlanContent.elevatorPitch,
        persona: executionPlanContent.persona,
        userStories: executionPlanContent.userStories,
        recommendedStack: executionPlanContent.recommendedStack,
        launchChecklist: executionPlanContent.launchChecklist,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created ThumbTest execution plan.");
    }

    console.log("Done! ThumbTest has been added to the idea library.");
  } catch (error) {
    console.error("Error seeding ThumbTest:", error);
    process.exit(1);
  }

  process.exit(0);
}

seedThumbTest();