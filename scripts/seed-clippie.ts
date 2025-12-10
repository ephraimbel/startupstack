import { db } from "../server/db";
import { ideas, landingPages, executionPlans } from "../shared/schema";
import { eq } from "drizzle-orm";
import { readFileSync } from "fs";
import { join } from "path";

// Clippie - idea_004
const clippieIdea = {
  id: "clippie-004",
  userId: null,
  title: "Clippie",
  oneLiner: "Your best moments, found and formatted",
  problem: "Creators spend 3-5 hours per long-form video scrubbing through footage to find clip-worthy moments. A 2-hour podcast contains maybe 8-12 viral-worthy clips, but finding them manually is tedious and doesn't scale. Most creators give up—meaning 90% of their best content never reaches short-form audiences.",
  targetCustomer: "YouTubers, podcasters, and Twitch streamers with 10K-500K subscribers producing weekly long-form content who want to grow on short-form platforms without hiring editors",
  solution: "Upload your video or connect YouTube/Twitch. AI analyzes the entire recording using speech patterns, sentiment analysis, topic shifts, and engagement predictors to identify high-potential viral moments. Automatically generates vertical clips with perfectly-timed captions, speaker labels, and optional b-roll suggestions. Export directly to TikTok, YouTube Shorts, and Instagram Reels formats.",
  monetization: "$29/month (10 hours), $79/month (50 hours), $199/month (200 hours + team). Free tier: 60 minutes/month with watermarked exports.",
  tags: ["ai", "content-creation", "viral-clips", "creator-tools", "video-editing", "automation"],
  keywords: null,
  status: "validated" as const,
  demandScore: 88,
  demandBand: "high" as const,
  trendLabel: "rising" as const,
  validationSummary: null,
  validatedAt: null,
  isPublic: true,
  isSaved: false,
  whyNow: "Perfect storm: (1) Short-form video is fastest-growing content format—TikTok, Shorts, and Reels have 3B+ daily users, (2) AI video understanding reached quality threshold for automated clipping, (3) Platform algorithms heavily favor consistent short-form posting, (4) Creator burnout is epidemic—automation isn't luxury, it's survival.",
  revenueImpact: "Creators save 20+ hours monthly and 3x their short-form posting frequency. A creator spending $500/month on editors can replace them while getting better viral moment detection. Average user sees 240% growth in short-form engagement.",
  marketSize: "$2B video editing and repurposing tools market",
  competitionLevel: "Medium" as const,
  category: "productivity" as const,
  businessType: "b2c" as const,
  priceRange: "smb" as const
};

const clippieLanding = {
  meta: {
    title: "Clippie — Turn Your Long Videos Into Viral Shorts",
    description: "AI finds your best moments and creates ready-to-post clips with captions. Upload once, clip forever. Save 4+ hours per video while increasing viral potential.",
    og_image_concept: "Split screen showing single YouTube video transforming into multiple vertical clips with sparkle effects and virality scores. Bold headline: 'Your Best Moments, Found and Formatted.'"
  },
  hero: {
    headline: "Turn your long videos into viral shorts",
    subheadline: "AI finds your best moments and creates ready-to-post clips with captions. Upload once, clip forever.",
    cta_primary: {
      text: "Try Free — 60 Minutes Included",
      url: "/signup"
    },
    cta_secondary: {
      text: "Watch demo (2 min) →",
      url: "#demo"
    },
    social_proof_snippet: "Join 12,000+ creators saving 4+ hours per video",
    hero_visual: {
      type: "product_screenshot" as const,
      description: "Split screen: left shows single YouTube video, right shows explosion of vertical clips with captions and virality scores. AI processing animation with sparkle effects."
    }
  },
  problem_section: {
    section_id: "problem",
    eyebrow: "The Creator Struggle",
    headline: "Your best content is trapped in hour-long videos",
    description: "Every podcast and stream has 10+ viral moments. But who has 4 hours to find them? Those views are going to creators who clip.",
    pain_points: [
      {
        icon: "clock",
        title: "You're leaving views on the table", 
        description: "Every podcast and stream has 10+ viral moments. But who has 4 hours to find them? Those views are going to creators who clip."
      },
      {
        icon: "trending-down",
        title: "Manual clipping doesn't scale",
        description: "You tried scrubbing through footage. It's mind-numbing. You hire an editor for $500/month. They quit. You're back to square one."
      },
      {
        icon: "zap",
        title: "Short-form is non-negotiable now",
        description: "TikTok, Shorts, Reels—3 billion daily users. If you're not there, you're invisible to half your potential audience."
      },
      {
        icon: "skull",
        title: "Content dies after upload",
        description: "Your best insights get buried in long videos instead of reaching new audiences as clips."
      }
    ],
    stat_callout: {
      number: "90%",
      label: "of content value is left untapped by creators who don't clip",
      source: "Creator Economy Report 2024"
    }
  },
  solution_section: {
    section_id: "solution",
    eyebrow: "AI-Powered Viral Detection",
    headline: "AI that watches so you don't have to",
    description: "Clippie analyzes your entire video for viral-worthy moments. Emotional peaks, perfect soundbites, visual hooks—then creates polished clips with captions.",
    features: [
      {
        icon: "sparkles",
        title: "Smart Moment Detection",
        description: "AI analyzes your entire video for viral-worthy moments. Emotional peaks, perfect soundbites, visual hooks."
      },
      {
        icon: "fire",
        title: "Virality Scoring",
        description: "Every clip gets a 1-100 score with explanations. Know which clips to post first."
      },
      {
        icon: "type",
        title: "Animated Captions",
        description: "Word-by-word captions that pop. Bold keywords, color highlights, emoji reactions."
      },
      {
        icon: "users",
        title: "Speaker Detection",
        description: "Perfect for podcasts. Automatically labels speakers and creates dynamic layouts."
      },
      {
        icon: "download",
        title: "One-Click Export",
        description: "TikTok, YouTube Shorts, Instagram Reels. Right format, right dimensions, every time."
      },
      {
        icon: "palette",
        title: "Brand Templates",
        description: "Save your style. Consistent look across every clip without starting from scratch."
      }
    ],
    visual: {
      type: "video" as const,
      description: "60-second demo showing upload → AI processing → dashboard with scored clips ready to export"
    }
  },
  how_it_works: {
    section_id: "how-it-works",
    eyebrow: "Simple Process",
    headline: "Three steps to endless clips",
    steps: [
      {
        number: 1,
        title: "Upload or connect",
        description: "Drop in a video file or paste a YouTube link. We handle everything from 5-minute vlogs to 4-hour streams.",
        visual_description: "Upload interface with drag-drop animation"
      },
      {
        number: 2,
        title: "AI finds the gold",
        description: "In minutes, our AI identifies every viral-worthy moment with timestamps and virality scores.",
        visual_description: "AI processing animation with moment detection and scoring"
      },
      {
        number: 3,
        title: "Export and dominate",
        description: "Download polished clips with captions or fine-tune in our editor. Post and watch the views roll in.",
        visual_description: "Dashboard showing clips ready to export with one-click platform options"
      }
    ]
  },
  social_proof: {
    section_id: "proof",
    eyebrow: "Creator Success",
    headline: "Creators are posting 10x more shorts",
    testimonials: [
      {
        quote: "I went from posting once a week to having clips scheduled for the entire month. My TikTok grew 240% in 60 days.",
        author: "Jake Martinez",
        role: "Gaming YouTuber",
        company: "89K subscribers",
        avatar_description: "Young male gamer with gaming setup background",
        result: "240% TikTok growth"
      },
      {
        quote: "This replaced my $2K/month clip editor. The AI finds moments I would never have thought to clip.",
        author: "Sarah Kim",
        role: "Business Podcaster", 
        company: "The Growth Mindset",
        avatar_description: "Professional female podcaster with microphone",
        result: "Saved $2K/month"
      },
      {
        quote: "Finally consistent on all platforms without burning out. Clippie makes it effortless.",
        author: "Alex Torres",
        role: "Tech Reviewer",
        company: "156K subscribers",
        avatar_description: "Professional creator in tech review setup",
        result: "10x more short-form content"
      }
    ],
    stats: [
      {
        number: "12,000+",
        label: "Active Creators",
        context: "and growing daily"
      },
      {
        number: "500K+",
        label: "Clips Generated",
        context: "this month"
      },
      {
        number: "4.2 hrs",
        label: "Saved Per Video",
        context: "average"
      },
      {
        number: "3x",
        label: "Faster Growth",
        context: "on short-form"
      }
    ],
    logos: {
      headline: "Works With Your Content",
      companies: ["YouTube", "TikTok", "Instagram", "Twitter", "Twitch", "Spotify"]
    },
    trust_badges: [
      {
        icon: "shield",
        text: "Your Videos Stay Private"
      },
      {
        icon: "zap", 
        text: "5-Min Processing"
      },
      {
        icon: "globe",
        text: "All Platforms Supported"
      }
    ]
  },
  pricing: {
    section_id: "pricing",
    eyebrow: "Simple Pricing",
    headline: "Start free. Scale when you're viral.",
    subheadline: "60 minutes free. No credit card required.",
    plans: [
      {
        name: "Free",
        price: "$0",
        price_detail: "forever",
        description: "Try it out, occasional creators",
        features: [
          "60 minutes of video/month",
          "Up to 5 clips per video", 
          "Basic caption styles",
          "720p export",
          "Clippie watermark"
        ],
        cta: "Get Started Free",
        highlighted: false,
        badge: null
      },
      {
        name: "Creator",
        price: "$29",
        price_detail: "/month",
        description: "Weekly content creators building short-form presence",
        features: [
          "10 hours of video/month",
          "Unlimited clips per video",
          "All caption styles",
          "1080p export",
          "No watermark",
          "Speaker diarization",
          "Priority processing"
        ],
        cta: "Start Free Trial",
        highlighted: true,
        badge: "Most Popular"
      },
      {
        name: "Pro",
        price: "$79",
        price_detail: "/month", 
        description: "Daily creators, podcasters with multiple shows",
        features: [
          "50 hours of video/month",
          "Everything in Creator",
          "4K export",
          "Bulk video queue",
          "Analytics dashboard",
          "Twitch VOD integration"
        ],
        cta: "Start Free Trial",
        highlighted: false,
        badge: null
      },
      {
        name: "Agency",
        price: "$199",
        price_detail: "/month",
        description: "Video editors and agencies managing multiple creators",
        features: [
          "200 hours of video/month",
          "Everything in Pro",
          "5 team seats",
          "Client workspaces", 
          "White-label exports",
          "API access",
          "Priority support"
        ],
        cta: "Contact Sales",
        highlighted: false,
        badge: "Best for Teams"
      }
    ],
    guarantee: {
      headline: "Free 14-Day Trial",
      description: "Try Clippie risk-free on all paid plans. No credit card required. Cancel anytime."
    },
    pricing_note: "All plans include unlimited clip exports and storage."
  },
  faq: {
    section_id: "faq",
    headline: "Questions? We've Got Answers.",
    questions: [
      {
        question: "What video formats do you support?",
        answer: "MP4, MOV, WebM, and MKV uploads. Plus direct import from YouTube, Twitch VODs, and podcast RSS feeds. If it's video, we can clip it."
      },
      {
        question: "How long does processing take?",
        answer: "About 1-2 minutes per 10 minutes of video. A 1-hour podcast typically processes in 6-10 minutes. You'll get an email when clips are ready."
      },
      {
        question: "How many clips do you generate per video?",
        answer: "Typically 8-15 clips per hour of content, depending on the video. Our AI is selective—we only surface moments with real viral potential."
      },
      {
        question: "Can I edit the clips after generation?",
        answer: "Absolutely. Every clip can be fine-tuned: adjust start/end times, edit captions, change styles. The AI gives you a head start, not a straitjacket."
      },
      {
        question: "What about podcasts with multiple speakers?",
        answer: "We've got you. Speaker diarization automatically labels who's talking and creates dynamic layouts. Perfect for interview clips."
      },
      {
        question: "Do you post directly to my accounts?",
        answer: "Not yet—we're focused on making the best clips possible first. Export and post through your preferred scheduler, or just upload directly."
      }
    ]
  },
  final_cta: {
    section_id: "cta",
    headline: "Your viral clips are waiting",
    subheadline: "Upload your first video and see what Clippie finds. 60 minutes free, no credit card.",
    cta_text: "Start Clipping Free →",
    trust_element: "✓ No credit card required ✓ 60 minutes included ✓ Cancel anytime"
  },
  footer: {
    tagline: "Your best moments, found and formatted.",
    links: {
      product: ["Features", "Pricing", "How It Works", "API"],
      resources: ["Blog", "Help Center", "Creator Guide", "Community"],
      company: ["About", "Careers", "Press", "Contact"],
      legal: ["Privacy", "Terms", "Security", "GDPR"]
    },
    social: ["Twitter", "YouTube", "TikTok", "Discord"],
    newsletter: {
      headline: "Creator tips & viral strategies",
      placeholder: "Your email",
      cta: "Subscribe"
    }
  }
};

async function seedClippie() {
  console.log("Seeding Clippie (idea_004)...");

  try {
    // Check if it already exists
    const existing = await db.select().from(ideas).where(eq(ideas.id, clippieIdea.id));
    
    if (existing.length > 0) {
      console.log("Clippie idea already exists. Updating...");
      await db.update(ideas)
        .set({ 
          ...clippieIdea,
          updatedAt: new Date()
        })
        .where(eq(ideas.id, clippieIdea.id));
    } else {
      // Insert the idea
      await db.insert(ideas).values({
        ...clippieIdea,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created Clippie idea.");
    }

    // Check if landing page exists
    const existingLanding = await db.select().from(landingPages).where(eq(landingPages.slug, "clippie"));
    
    if (existingLanding.length > 0) {
      console.log("Clippie landing page already exists. Updating...");
      await db.update(landingPages)
        .set({ 
          content: JSON.stringify(clippieLanding),
          updatedAt: new Date(),
          isPublished: true 
        })
        .where(eq(landingPages.slug, "clippie"));
    } else {
      // Insert the landing page
      await db.insert(landingPages).values({
        ideaId: clippieIdea.id,
        slug: "clippie",
        content: JSON.stringify(clippieLanding),
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created Clippie landing page.");
    }

    // Create execution plan with all deliverable content
    const deliverableContent = {
      // Reading the prompt files we created
      brand_package: readFileSync(join(process.cwd(), 'clippie-deliverables/brand-package/prompt.md'), 'utf-8'),
      landing_page: readFileSync(join(process.cwd(), 'clippie-deliverables/landing-page/prompt.md'), 'utf-8'),
      ad_creatives: readFileSync(join(process.cwd(), 'clippie-deliverables/ad-creatives/prompt.md'), 'utf-8'),
      mvp_roadmap: readFileSync(join(process.cwd(), 'clippie-deliverables/mvp-roadmap/prompt.md'), 'utf-8'),
      pricing_strategy: readFileSync(join(process.cwd(), 'clippie-deliverables/pricing-strategy/prompt.md'), 'utf-8'),
      product_requirements: readFileSync(join(process.cwd(), 'clippie-deliverables/product-requirements/prompt.md'), 'utf-8'),
      gtm_strategy: readFileSync(join(process.cwd(), 'clippie-deliverables/gtm-strategy/prompt.md'), 'utf-8'),
    };

    // Check if execution plan already exists
    const existingPlan = await db.select().from(executionPlans).where(eq(executionPlans.ideaId, clippieIdea.id));
    
    if (existingPlan.length > 0) {
      console.log("Clippie execution plan already exists. Updating...");
      await db.update(executionPlans)
        .set({
          elevatorPitch: deliverableContent.ad_creatives,
          persona: deliverableContent.brand_package, 
          userStories: [
            deliverableContent.landing_page,
            deliverableContent.mvp_roadmap,
            deliverableContent.pricing_strategy,
            deliverableContent.product_requirements,
            deliverableContent.gtm_strategy
          ],
          recommendedStack: deliverableContent.mvp_roadmap,
          launchChecklist: [
            "Brand Package Complete",
            "Landing Page Live", 
            "Ad Creatives Ready",
            "MVP Roadmap Planned",
            "Pricing Strategy Set",
            "Product Requirements Defined",
            "GTM Strategy Mapped"
          ]
        })
        .where(eq(executionPlans.ideaId, clippieIdea.id));
    } else {
      // Insert new execution plan
      await db.insert(executionPlans).values({
        ideaId: clippieIdea.id,
        userId: null,
        elevatorPitch: deliverableContent.ad_creatives,
        persona: deliverableContent.brand_package,
        userStories: [
          deliverableContent.landing_page,
          deliverableContent.mvp_roadmap, 
          deliverableContent.pricing_strategy,
          deliverableContent.product_requirements,
          deliverableContent.gtm_strategy
        ],
        recommendedStack: deliverableContent.mvp_roadmap,
        launchChecklist: [
          "Brand Package Complete",
          "Landing Page Live",
          "Ad Creatives Ready", 
          "MVP Roadmap Planned",
          "Pricing Strategy Set",
          "Product Requirements Defined",
          "GTM Strategy Mapped"
        ],
        createdAt: new Date()
      });
      console.log("Created Clippie execution plan with deliverables.");
    }

    console.log("Done! Clippie has been added to the idea library with all deliverable content.");
  } catch (error) {
    console.error("Error seeding Clippie:", error);
    console.error("Make sure the deliverable files exist in clippie-deliverables/ folder");
    process.exit(1);
  }

  process.exit(0);
}

seedClippie();