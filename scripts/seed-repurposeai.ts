import { db } from "../server/db";
import { ideas, landingPages, executionPlans } from "../shared/schema";
import { eq } from "drizzle-orm";
import { readFileSync } from "fs";
import { join } from "path";

// RepurposeAI - idea_052
const repurposeAIIdea = {
  id: "repurposeai-001",
  userId: null,
  title: "RepurposeAI",
  oneLiner: "Turn one video into a week of content across every platform",
  problem: "Content creators spend 4+ hours creating long-form content that lives on a single platform. Repurposing this content for other platforms (Twitter, LinkedIn, TikTok, newsletters) requires an additional 4-6 hours of manual work—time most creators don't have.",
  targetCustomer: "YouTubers with 10K-500K subscribers, podcasters, and course creators who publish weekly content and want to grow across multiple platforms without burnout.",
  solution: "Upload your YouTube video or podcast. AI analyzes content, identifies key moments, and generates Twitter threads, LinkedIn posts, Instagram carousels, TikTok clips, newsletters, and blog posts—all optimized for each platform in under 10 minutes.",
  monetization: "$29/month (5 videos), $79/month (20 videos), $199/month (unlimited + team features). Free 14-day trial, no card required.",
  tags: ["ai", "content-creation", "automation", "creator-tools", "video-editing"],
  keywords: null,
  status: "validated" as const,
  demandScore: 86,
  demandBand: "high" as const,
  trendLabel: "rising" as const,
  validationSummary: null,
  validatedAt: null,
  isPublic: true,
  isSaved: false,
  whyNow: "AI capabilities now sufficient for quality content generation. Creator burnout at all-time high. Multi-platform presence expected by audiences. Manual repurposing barrier prevents solo creators from competing with teams.",
  revenueImpact: "Creators save 40+ hours/month and grow 3x faster by maintaining presence everywhere. A creator spending 10 hours/week on content can reclaim 6+ hours while expanding reach.",
  marketSize: "$12B",
  competitionLevel: "Medium" as const,
  category: "productivity" as const,
  businessType: "b2c" as const,
  priceRange: "smb" as const
};

const repurposeAILanding = {
  meta: {
    title: "RepurposeAI — Turn One Video Into a Week of Content",
    description: "AI-powered content repurposing for creators. Transform YouTube videos and podcasts into Twitter threads, LinkedIn posts, Instagram carousels, TikToks, and newsletters automatically.",
    og_image_concept: "Split visual showing video thumbnail transforming into multiple content formats. Bold headline overlay: 'One Video. Endless Content.'"
  },
  hero: {
    headline: "One Video. A Week of Content.",
    subheadline: "Upload your YouTube video or podcast. Get Twitter threads, LinkedIn posts, Instagram carousels, TikToks, newsletters, and blog posts—all optimized for each platform.",
    cta_primary: {
      text: "Try Free — No Card Required",
      url: "/signup"
    },
    cta_secondary: {
      text: "See How It Works",
      url: "#how-it-works"
    },
    social_proof_snippet: "Trusted by 12,000+ creators • 2M+ pieces of content generated",
    hero_visual: {
      type: "product_screenshot" as const,
      description: "Split screen: left shows a single YouTube video thumbnail, right shows an explosion of content pieces (tweet, carousel, TikTok, newsletter) radiating out. Animated on scroll."
    }
  },
  problem_section: {
    section_id: "problem",
    eyebrow: "The Content Struggle",
    headline: "You're Sitting on a Content Goldmine",
    description: "That 30-minute video could be 20 pieces of content. But who has 4 hours to cut clips, write captions, and resize graphics? You're leaving 90% of your content's value unrealized.",
    pain_points: [
      {
        icon: "clock",
        title: "Hours Lost to Reformatting",
        description: "Manual repurposing takes 4-6 hours per video. Time you could spend creating."
      },
      {
        icon: "trending-down",
        title: "Platforms You're Ignoring",
        description: "You know you should be on LinkedIn, TikTok, and Twitter. But you barely have time for one platform."
      },
      {
        icon: "dollar-sign",
        title: "Hiring Is Expensive",
        description: "A good editor costs $2-5K/month. That's not realistic when you're still growing."
      },
      {
        icon: "zap",
        title: "Content Dies After Upload",
        description: "Your best insights get buried in long videos instead of reaching new audiences."
      }
    ],
    stat_callout: {
      number: "90%",
      label: "of content value is left untapped by creators",
      source: "Creator Economy Report 2024"
    }
  },
  solution_section: {
    section_id: "solution",
    eyebrow: "AI-Powered Multiplication",
    headline: "Your AI Content Team",
    description: "RepurposeAI watches your video, understands what makes it valuable, and transforms it into native content for every platform—each piece optimized for how that platform's algorithm works.",
    features: [
      {
        icon: "video",
        title: "Video → Viral Clips",
        description: "AI identifies engaging moments and cuts them into vertical clips with captions, hooks, and trending sounds."
      },
      {
        icon: "twitter",
        title: "Video → Twitter Threads",
        description: "Key insights become scroll-stopping threads with perfect pacing, hooks, and CTAs."
      },
      {
        icon: "image",
        title: "Video → Instagram Carousels",
        description: "Main points transformed into swipeable carousels with on-brand templates."
      },
      {
        icon: "briefcase",
        title: "Video → LinkedIn Posts",
        description: "Professional angle extracted and formatted for LinkedIn's algorithm."
      },
      {
        icon: "mail",
        title: "Video → Newsletter",
        description: "Full episode summary with key takeaways, timestamps, and subscriber insights."
      },
      {
        icon: "file-text",
        title: "Video → Blog Post",
        description: "SEO-optimized article with your transcript cleaned up, structured, and enhanced."
      }
    ],
    visual: {
      type: "demo_video" as const,
      description: "60-second demo showing upload → AI processing → dashboard with all content ready"
    }
  },
  how_it_works: {
    section_id: "how-it-works",
    eyebrow: "Simple Process",
    headline: "Three Steps. Twenty Pieces of Content.",
    steps: [
      {
        number: 1,
        title: "Drop Your Video",
        description: "Paste a YouTube link or upload directly. We handle videos up to 3 hours.",
        visual_description: "Upload interface with drag-drop animation"
      },
      {
        number: 2,
        title: "AI Does the Heavy Lifting",
        description: "Our AI analyzes your content, identifies key moments, and generates platform-native content in minutes.",
        visual_description: "Processing animation with AI brain analyzing video"
      },
      {
        number: 3,
        title: "Review, Edit, Publish",
        description: "Everything lands in your dashboard. Tweak anything, then export or schedule directly.",
        visual_description: "Dashboard showing all generated content ready to go"
      }
    ]
  },
  social_proof: {
    section_id: "proof",
    eyebrow: "Creator Success",
    headline: "Creators Are Shipping 10x More Content",
    testimonials: [
      {
        quote: "I went from posting once a week to having content scheduled for the entire month. My Twitter grew 340% in 60 days.",
        author: "Sarah Chen",
        role: "YouTuber",
        company: "182K subscribers",
        avatar_description: "Young female creator with YouTube play button",
        result: "340% Twitter growth"
      },
      {
        quote: "This replaced my $3K/month editor for repurposing. The AI clips are sometimes better than what I'd pick myself.",
        author: "Marcus Johnson",
        role: "Podcaster",
        company: "The Growth Show",
        avatar_description: "Professional male podcaster with microphone",
        result: "Saved $3K/month"
      },
      {
        quote: "Finally on LinkedIn and it's driving actual business. RepurposeAI makes it effortless to show up everywhere.",
        author: "Priya Patel",
        role: "Course Creator",
        company: "Design Academy",
        avatar_description: "Female course creator in professional setting",
        result: "5 new clients from LinkedIn"
      }
    ],
    stats: [
      {
        number: "12,000+",
        label: "Active Creators",
        context: "and growing"
      },
      {
        number: "2M+",
        label: "Content Pieces",
        context: "generated"
      },
      {
        number: "47 hrs",
        label: "Saved Monthly",
        context: "per creator"
      },
      {
        number: "4.8/5",
        label: "Creator Rating",
        context: "from 3K+ reviews"
      }
    ],
    logos: {
      headline: "Works With Your Favorite Platforms",
      companies: ["YouTube", "Spotify", "Instagram", "TikTok", "LinkedIn", "Twitter"]
    },
    trust_badges: [
      {
        icon: "shield",
        text: "Your Content Is Safe"
      },
      {
        icon: "zap",
        text: "10-Min Processing"
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
    headline: "Plans That Scale With Your Content",
    subheadline: "Start free. Upgrade when you see the value. Cancel anytime.",
    plans: [
      {
        name: "Starter",
        price: "$29",
        price_detail: "/month",
        description: "Perfect for creators just getting started with repurposing",
        features: [
          "5 videos per month",
          "All content types",
          "Twitter, LinkedIn, Instagram",
          "TikTok/Shorts clips",
          "Newsletter drafts",
          "Blog post conversion"
        ],
        cta: "Start Free Trial",
        highlighted: false,
        badge: null
      },
      {
        name: "Creator",
        price: "$79",
        price_detail: "/month",
        description: "For serious creators who publish weekly",
        features: [
          "20 videos per month",
          "Everything in Starter",
          "Custom brand templates",
          "Priority processing",
          "Carousel designer",
          "Quote graphics generator",
          "Content calendar view"
        ],
        cta: "Start Free Trial",
        highlighted: true,
        badge: "Most Popular"
      },
      {
        name: "Pro",
        price: "$199",
        price_detail: "/month",
        description: "For teams and high-volume creators",
        features: [
          "Unlimited videos",
          "Everything in Creator",
          "Team workspaces (3 seats)",
          "API access",
          "White-label exports",
          "Dedicated manager",
          "Custom AI training"
        ],
        cta: "Start Free Trial",
        highlighted: false,
        badge: "Best Value"
      }
    ],
    guarantee: {
      headline: "14-Day Free Trial",
      description: "Try RepurposeAI risk-free. No credit card required. Cancel anytime."
    },
    pricing_note: "Need more? Contact us for custom enterprise pricing."
  },
  faq: {
    section_id: "faq",
    headline: "Questions? We've Got Answers.",
    questions: [
      {
        question: "What video formats and lengths do you support?",
        answer: "We support YouTube links, MP4, MOV, and most common formats. Videos can be up to 3 hours long. Most creators upload their weekly YouTube videos or podcast episodes."
      },
      {
        question: "How long does it take to process a video?",
        answer: "A 30-minute video typically generates all content types in 5-10 minutes. Longer videos may take up to 20 minutes. You'll get an email when everything is ready."
      },
      {
        question: "Can I edit the generated content?",
        answer: "Absolutely. Everything is editable in our dashboard. Tweak the copy, swap clips, adjust carousel slides—make it yours before publishing."
      },
      {
        question: "Does it work for any niche?",
        answer: "Yes. Our AI adapts to your content style and niche. Whether you're in tech, fitness, business, lifestyle, or education—it learns what makes your content unique."
      },
      {
        question: "Can I schedule posts directly?",
        answer: "We integrate with Buffer, Hootsuite, and Later for scheduling. You can also export everything to post manually or use native platform schedulers."
      },
      {
        question: "What if I don't like the output?",
        answer: "Regenerate any piece with one click. You can also provide feedback to improve future outputs. And there's a 14-day money-back guarantee if it's not for you."
      }
    ]
  },
  final_cta: {
    section_id: "cta",
    headline: "Your Next Video Deserves to Be Everywhere",
    subheadline: "Join 12,000+ creators who save 40+ hours every month",
    cta_text: "Start Your Free Trial",
    trust_element: "No credit card • Cancel anytime • 5 minutes to setup"
  },
  footer: {
    tagline: "Multiply your content. Not your workload.",
    links: {
      product: ["Features", "Pricing", "Integrations", "API"],
      resources: ["Blog", "Help Center", "Tutorials", "Community"],
      company: ["About", "Careers", "Press Kit", "Contact"],
      legal: ["Privacy", "Terms", "Security"]
    },
    social: ["Twitter", "YouTube", "LinkedIn"],
    newsletter: {
      headline: "Creator tips & updates",
      placeholder: "Your email",
      cta: "Subscribe"
    }
  }
};

async function seedRepurposeAI() {
  console.log("Seeding RepurposeAI (idea_052)...");

  try {
    // Check if it already exists
    const existing = await db.select().from(ideas).where(eq(ideas.id, repurposeAIIdea.id));
    
    if (existing.length > 0) {
      console.log("RepurposeAI idea already exists. Updating...");
      await db.update(ideas)
        .set({ 
          ...repurposeAIIdea,
          updatedAt: new Date()
        })
        .where(eq(ideas.id, repurposeAIIdea.id));
    } else {
      // Insert the idea
      await db.insert(ideas).values({
        ...repurposeAIIdea,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created RepurposeAI idea.");
    }

    // Check if landing page exists
    const existingLanding = await db.select().from(landingPages).where(eq(landingPages.slug, "repurposeai"));
    
    if (existingLanding.length > 0) {
      console.log("RepurposeAI landing page already exists. Updating...");
      await db.update(landingPages)
        .set({ 
          content: JSON.stringify(repurposeAILanding),
          updatedAt: new Date(),
          isPublished: true 
        })
        .where(eq(landingPages.slug, "repurposeai"));
    } else {
      // Insert the landing page
      await db.insert(landingPages).values({
        ideaId: repurposeAIIdea.id,
        slug: "repurposeai",
        content: JSON.stringify(repurposeAILanding),
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created RepurposeAI landing page.");
    }

    // Create execution plan with all deliverable content
    const deliverableContent = {
      // Reading the prompt files we created
      brand_package: readFileSync(join(process.cwd(), 'repurposeai-deliverables/brand-package/prompt.md'), 'utf-8'),
      landing_page: readFileSync(join(process.cwd(), 'repurposeai-deliverables/landing-page/prompt.md'), 'utf-8'),
      ad_creatives: readFileSync(join(process.cwd(), 'repurposeai-deliverables/ad-creatives/prompt.md'), 'utf-8'),
      content_calendar: readFileSync(join(process.cwd(), 'repurposeai-deliverables/content-calendar/prompt.md'), 'utf-8'),
      email_funnel: readFileSync(join(process.cwd(), 'repurposeai-deliverables/email-funnel-system/prompt.md'), 'utf-8'),
      email_sequence: readFileSync(join(process.cwd(), 'repurposeai-deliverables/email-sequence/prompt.md'), 'utf-8'),
      lead_magnet: readFileSync(join(process.cwd(), 'repurposeai-deliverables/lead-magnet/prompt.md'), 'utf-8'),
    };

    // Check if execution plan already exists
    const existingPlan = await db.select().from(executionPlans).where(eq(executionPlans.ideaId, repurposeAIIdea.id));
    
    if (existingPlan.length > 0) {
      console.log("RepurposeAI execution plan already exists. Updating...");
      await db.update(executionPlans)
        .set({
          elevatorPitch: deliverableContent.ad_creatives,
          persona: deliverableContent.brand_package, 
          userStories: [
            deliverableContent.landing_page,
            deliverableContent.content_calendar,
            deliverableContent.email_funnel,
            deliverableContent.email_sequence,
            deliverableContent.lead_magnet
          ],
          recommendedStack: deliverableContent.brand_package,
          launchChecklist: [
            "Brand Package Complete",
            "Landing Page Live", 
            "Ad Creatives Ready",
            "Content Calendar Planned",
            "Email Sequences Set",
            "Lead Magnet Created"
          ]
        })
        .where(eq(executionPlans.ideaId, repurposeAIIdea.id));
    } else {
      // Insert new execution plan
      await db.insert(executionPlans).values({
        ideaId: repurposeAIIdea.id,
        userId: null,
        elevatorPitch: deliverableContent.ad_creatives,
        persona: deliverableContent.brand_package,
        userStories: [
          deliverableContent.landing_page,
          deliverableContent.content_calendar, 
          deliverableContent.email_funnel,
          deliverableContent.email_sequence,
          deliverableContent.lead_magnet
        ],
        recommendedStack: deliverableContent.brand_package,
        launchChecklist: [
          "Brand Package Complete",
          "Landing Page Live",
          "Ad Creatives Ready", 
          "Content Calendar Planned",
          "Email Sequences Set",
          "Lead Magnet Created"
        ],
        createdAt: new Date()
      });
      console.log("Created RepurposeAI execution plan with deliverables.");
    }

    console.log("Done! RepurposeAI has been added to the idea library with all deliverable content.");
  } catch (error) {
    console.error("Error seeding RepurposeAI:", error);
    console.error("Make sure the deliverable files exist in repurposeai-deliverables/ folder");
    process.exit(1);
  }

  process.exit(0);
}

seedRepurposeAI();