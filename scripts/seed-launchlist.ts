import { config } from "dotenv";
config(); // Load environment variables

import { db } from "../server/db";
import { ideas, landingPages, executionPlans } from "../shared/schema";
import { eq } from "drizzle-orm";
import { readFileSync } from "fs";
import { join } from "path";

// LaunchList - idea_009
const launchlistIdea = {
  id: "launchlist-009",
  userId: null,
  title: "LaunchList",
  oneLiner: "Waitlists that grow themselves",
  problem: "Most founders collect emails with boring forms and launch to crickets. Waitlists should create excitement and go viral, but building referral mechanics takes weeks of engineering time that founders don't have. By launch day, signups have forgotten about the product because there's zero engagement between signup and launch.",
  targetCustomer: "Founders, indie hackers, and product managers launching new products who want pre-launch momentum and validation without engineering referral systems from scratch",
  solution: "Beautiful waitlist pages with built-in viral referral mechanics. Drag-and-drop builder, automatic referral tracking, position leaderboards, email sequences, and real-time analytics. Turn every signup into a marketer. Launch with thousands of warm, engaged leads instead of lukewarm emails.",
  monetization: "$29/month (5K signups), $79/month (25K signups), $199/month (unlimited + team features). Free tier: 500 signups with LaunchList branding.",
  tags: ["viral-marketing", "waitlists", "product-launch", "referral-system", "email-marketing", "analytics"],
  keywords: null,
  status: "validated" as const,
  demandScore: 85,
  demandBand: "high" as const,
  trendLabel: "rising" as const,
  validationSummary: null,
  validatedAt: null,
  isPublic: true,
  isSaved: false,
  whyNow: "Perfect storm: (1) Viral launches like Harry's and Robinhood proved referral waitlists work, (2) Indie hacker community is exploding with product launches, (3) Social sharing is more powerful than ever, (4) Founders need validation tools but can't afford complex marketing platforms, (5) Launch fatigue means you need viral mechanics to cut through noise.",
  revenueImpact: "Founders save 2-4 weeks of engineering time worth $5K-15K and achieve 1.5-3x viral coefficient on their launches. Users typically see 240% more engaged signups compared to static email collection forms.",
  marketSize: "$200M+ viral marketing and referral tools market",
  competitionLevel: "Medium" as const,
  category: "productivity" as const,
  businessType: "b2b" as const,
  priceRange: "smb" as const
};

const launchlistLanding = {
  meta: {
    title: "LaunchList — Waitlists That Grow Themselves",
    description: "Beautiful pre-launch pages with built-in referral mechanics. Turn every signup into a marketer. Launch with thousands of warm leads, not crickets.",
    og_image_concept: "Split screen: boring email form vs beautiful viral waitlist with referral leaderboard and position tracking. Animated growth visualization with rocket launch theme."
  },
  hero: {
    headline: "Waitlists that grow themselves",
    subheadline: "Beautiful pre-launch pages with built-in referral mechanics. Turn every signup into a marketer. Launch with thousands of warm leads.",
    cta_primary: {
      text: "Create Free Waitlist",
      url: "/signup"
    },
    cta_secondary: {
      text: "See examples →",
      url: "#examples"
    },
    social_proof_snippet: "Join founders who've collected 1M+ pre-launch signups",
    hero_visual: {
      type: "product_screenshot" as const,
      description: "Split screen showing boring old Mailchimp form vs. beautiful LaunchList page with referral leaderboard and position counter. Animated viral growth visualization."
    }
  },
  problem_section: {
    section_id: "problem",
    eyebrow: "Your waitlist is probably broken",
    headline: "Most launches fail because nobody cares by launch day",
    description: "Harry's collected 100,000+ signups before launch using referral waitlists. You're using a boring form.",
    pain_points: [
      {
        icon: "mail",
        title: "Signups and then... silence", 
        description: "People join your waitlist and forget you exist. By launch day, they don't remember signing up. Zero engagement, zero excitement."
      },
      {
        icon: "link",
        title: "No virality without engineering",
        description: "Building referral tracking takes weeks. You know it works—Harry's got 100K signups—but you don't have time to build it yourself."
      },
      {
        icon: "frown",
        title: "Boring pages lose signups",
        description: "Your product is innovative but your waitlist page looks like a 2015 Mailchimp form. First impressions matter. People bounce."
      },
      {
        icon: "bar-chart",
        title: "No idea what's working",
        description: "Is your conversion rate good? Who are your top referrers? How many will actually show up on launch day? You're flying blind."
      }
    ],
    stat_callout: {
      number: "100,000+",
      label: "signups collected by Harry's before launch using referral waitlists",
      source: "Harvard Business Review"
    }
  },
  solution_section: {
    section_id: "solution",
    eyebrow: "AI-Powered Viral Mechanics",
    headline: "Launch with momentum, not crickets",
    description: "Everything you need to turn your pre-launch waitlist into a viral growth engine.",
    features: [
      {
        icon: "palette",
        title: "Beautiful Launch Pages",
        description: "Modern templates designed for startups. Customize in minutes. Mobile-perfect by default."
      },
      {
        icon: "link",
        title: "Referral Mechanics",
        description: "Every signup gets a unique link. Track referrals. Reward top sharers with early access."
      },
      {
        icon: "trophy",
        title: "Waitlist Position",
        description: "Show position in line. Leaderboard creates competition. People share to move up."
      },
      {
        icon: "mail",
        title: "Email Sequences",
        description: "Keep signups warm with automated updates. They'll remember you on launch day."
      },
      {
        icon: "trending-up",
        title: "Viral Analytics",
        description: "See your viral coefficient. Track top referrers. Know your launch day audience."
      },
      {
        icon: "rocket",
        title: "One-Click Launch",
        description: "Custom domain, social sharing, OG previews—everything you need, nothing you don't."
      }
    ],
    visual: {
      type: "video" as const,
      description: "Screen recording showing: template selection → customization → referral setup → live page with people signing up and sharing"
    }
  },
  how_it_works: {
    section_id: "how-it-works",
    eyebrow: "Live in five minutes",
    headline: "Three steps to viral growth",
    steps: [
      {
        number: 1,
        title: "Pick a template",
        description: "Choose from modern, conversion-optimized designs. Add your brand and messaging.",
        visual_description: "Template gallery with beautiful startup-focused waitlist designs"
      },
      {
        number: 2,
        title: "Enable referrals",
        description: "One toggle turns on referral tracking. Configure rewards if you want—or keep it simple.",
        visual_description: "Simple toggle interface with referral settings and reward configuration"
      },
      {
        number: 3,
        title: "Launch and grow",
        description: "Share your page. Watch signups multiply as early adopters spread the word.",
        visual_description: "Live analytics dashboard showing viral growth with real-time signup notifications"
      }
    ]
  },
  social_proof: {
    section_id: "proof",
    eyebrow: "Founder Success",
    headline: "Founders are launching bigger",
    testimonials: [
      {
        quote: "LaunchList helped us get 5,000 signups before launch—10x more than our last product. The referral system just works.",
        author: "Alex Chen",
        role: "Indie Hacker",
        company: "BuildSpace",
        avatar_description: "Young founder with modern startup workspace background",
        result: "10x more signups"
      },
      {
        quote: "Instead of 200 lukewarm emails, we launched with 3,000 engaged users. Our viral coefficient was 1.4!",
        author: "Maria Santos",
        role: "SaaS Founder", 
        company: "FlowTrack",
        avatar_description: "Professional female founder with laptop in coffee shop",
        result: "1.4x viral coefficient"
      },
      {
        quote: "The email sequences kept our audience warm for 3 months. Launch day felt like Christmas morning.",
        author: "David Kim",
        role: "Product Manager",
        company: "TechCorp",
        avatar_description: "Product manager with dual monitor setup",
        result: "78% signup-to-launch conversion"
      }
    ],
    stats: [
      {
        number: "1,000,000+",
        label: "Signups Collected",
        context: "across all waitlists"
      },
      {
        number: "1.8",
        label: "Average Viral Coefficient",
        context: "vs 1.0 for static forms"
      },
      {
        number: "500+",
        label: "Products Launched",
        context: "with LaunchList"
      },
      {
        number: "78%",
        label: "Signup-to-Launch Rate",
        context: "average conversion"
      }
    ],
    logos: {
      headline: "Works With Your Stack",
      companies: ["Zapier", "Mailchimp", "ConvertKit", "Notion", "Slack", "Discord"]
    },
    trust_badges: [
      {
        icon: "shield",
        text: "GDPR Compliant"
      },
      {
        icon: "zap", 
        text: "5-Min Setup"
      },
      {
        icon: "globe",
        text: "99.9% Uptime"
      }
    ]
  },
  pricing: {
    section_id: "pricing",
    eyebrow: "Free to start. Scale when you're viral.",
    headline: "500 signups free. No credit card required.",
    subheadline: "Engineering a referral system: 2-4 weeks | LaunchList: 5 minutes",
    plans: [
      {
        name: "Free",
        price: "$0",
        price_detail: "forever",
        description: "500 signups, 1 waitlist, referral tracking, LaunchList branding",
        features: [
          "500 signups total",
          "1 active waitlist",
          "Basic referral tracking",
          "Confirmation emails",
          "LaunchList branding",
          "Basic analytics"
        ],
        cta: "Get Started Free",
        highlighted: false,
        badge: null
      },
      {
        name: "Starter",
        price: "$29",
        price_detail: "/month",
        description: "5K signups, 3 waitlists, custom domain, email sequences, no branding",
        features: [
          "5,000 signups/month",
          "3 active waitlists",
          "Remove LaunchList branding",
          "Email sequences (3 emails)",
          "Custom domain support",
          "Reward tier configuration",
          "Priority support"
        ],
        cta: "Start Free Trial",
        highlighted: true,
        badge: "Most Popular"
      },
      {
        name: "Growth",
        price: "$79",
        price_detail: "/month", 
        description: "25K signups, unlimited waitlists, A/B testing, integrations, fraud detection",
        features: [
          "25,000 signups/month",
          "Unlimited waitlists",
          "Unlimited email sequences",
          "A/B testing",
          "Advanced analytics",
          "Integrations (Zapier, etc.)",
          "Fraud detection"
        ],
        cta: "Start Free Trial",
        highlighted: false,
        badge: null
      },
      {
        name: "Scale",
        price: "$199",
        price_detail: "/month",
        description: "Unlimited signups, white-label, team seats, API access, priority support",
        features: [
          "Unlimited signups",
          "Everything in Growth",
          "White-label option",
          "Team collaboration (5 seats)",
          "API access",
          "Custom reporting",
          "Dedicated success manager"
        ],
        cta: "Contact Sales",
        highlighted: false,
        badge: "Best for Teams"
      }
    ],
    guarantee: {
      headline: "Free Trial on All Plans",
      description: "Try LaunchList risk-free. No credit card required. Cancel anytime."
    },
    pricing_note: "All plans include unlimited exports and integrations."
  },
  faq: {
    section_id: "faq",
    headline: "Questions? We've Got Answers.",
    questions: [
      {
        question: "How does the referral system work?",
        answer: "Each signup gets a unique link. When someone signs up through that link, both people move up the waitlist. You can also set reward tiers—like early access at 5 referrals, discount at 10, swag at 25."
      },
      {
        question: "Can I use my own domain?",
        answer: "Yes! Starter plans and above include custom domains. Your waitlist can live at waitlist.yourproduct.com with full SSL."
      },
      {
        question: "How do I prevent fake signups and referrals?",
        answer: "We detect duplicate emails, disposable email domains, and suspicious referral patterns. Growth plans include advanced fraud detection."
      },
      {
        question: "Can I export my signups?",
        answer: "Absolutely. Export to CSV anytime, or integrate directly with Mailchimp, ConvertKit, and 50+ tools via Zapier."
      },
      {
        question: "What happens on launch day?",
        answer: "You can send a launch announcement to your entire list with one click. We're also building Product Hunt integration to auto-notify signups when you launch."
      },
      {
        question: "Is there really a free plan?",
        answer: "Yes—500 signups, forever free. Enough to validate your idea. When you're ready to scale, upgrade. We grow when you grow."
      }
    ]
  },
  final_cta: {
    section_id: "cta",
    headline: "Your launch starts now",
    subheadline: "Create a viral waitlist in minutes. Free for up to 500 signups.",
    cta_text: "Create Free Waitlist →",
    trust_element: "✓ No credit card required ✓ 500 signups free ✓ Launch in 5 minutes ✓ Used by 1000+ founders"
  },
  footer: {
    tagline: "Waitlists that grow themselves.",
    links: {
      product: ["Features", "Pricing", "How It Works", "Templates"],
      resources: ["Blog", "Help Center", "Launch Guide", "Community"],
      company: ["About", "Careers", "Press", "Contact"],
      legal: ["Privacy", "Terms", "Security", "GDPR"]
    },
    social: ["Twitter", "LinkedIn", "Product Hunt", "Discord"],
    newsletter: {
      headline: "Launch tips & viral strategies",
      placeholder: "Your email",
      cta: "Subscribe"
    }
  }
};

async function seedLaunchList() {
  console.log("Seeding LaunchList (idea_009)...");

  try {
    // Check if it already exists
    const existing = await db.select().from(ideas).where(eq(ideas.id, launchlistIdea.id));
    
    if (existing.length > 0) {
      console.log("LaunchList idea already exists. Updating...");
      await db.update(ideas)
        .set({ 
          ...launchlistIdea,
          updatedAt: new Date()
        })
        .where(eq(ideas.id, launchlistIdea.id));
    } else {
      // Insert the idea
      await db.insert(ideas).values({
        ...launchlistIdea,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created LaunchList idea.");
    }

    // Check if landing page exists
    const existingLanding = await db.select().from(landingPages).where(eq(landingPages.slug, "launchlist"));
    
    if (existingLanding.length > 0) {
      console.log("LaunchList landing page already exists. Updating...");
      await db.update(landingPages)
        .set({ 
          content: JSON.stringify(launchlistLanding),
          updatedAt: new Date(),
          isPublished: true 
        })
        .where(eq(landingPages.slug, "launchlist"));
    } else {
      // Insert the landing page
      await db.insert(landingPages).values({
        ideaId: launchlistIdea.id,
        slug: "launchlist",
        content: JSON.stringify(launchlistLanding),
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created LaunchList landing page.");
    }

    // Create execution plan with all deliverable content
    const deliverableContent = {
      // Reading the prompt files we created
      brand_package: readFileSync(join(process.cwd(), 'launchlist-deliverables/brand-package/prompt.md'), 'utf-8'),
      landing_page: readFileSync(join(process.cwd(), 'launchlist-deliverables/landing-page/prompt.md'), 'utf-8'),
      ad_creatives: readFileSync(join(process.cwd(), 'launchlist-deliverables/ad-creatives/prompt.md'), 'utf-8'),
      mvp_roadmap: readFileSync(join(process.cwd(), 'launchlist-deliverables/mvp-roadmap/prompt.md'), 'utf-8'),
      pricing_strategy: readFileSync(join(process.cwd(), 'launchlist-deliverables/pricing-strategy/prompt.md'), 'utf-8'),
      product_requirements: readFileSync(join(process.cwd(), 'launchlist-deliverables/product-requirements/prompt.md'), 'utf-8'),
      gtm_strategy: readFileSync(join(process.cwd(), 'launchlist-deliverables/gtm-strategy/prompt.md'), 'utf-8'),
      competitive_analysis: readFileSync(join(process.cwd(), 'launchlist-deliverables/competitive-analysis/prompt.md'), 'utf-8'),
      technical_architecture: readFileSync(join(process.cwd(), 'launchlist-deliverables/technical-architecture/prompt.md'), 'utf-8'),
      user_research: readFileSync(join(process.cwd(), 'launchlist-deliverables/user-research/prompt.md'), 'utf-8'),
    };

    // Check if execution plan already exists
    const existingPlan = await db.select().from(executionPlans).where(eq(executionPlans.ideaId, launchlistIdea.id));
    
    if (existingPlan.length > 0) {
      console.log("LaunchList execution plan already exists. Updating...");
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
            "Brand Package Complete",
            "Landing Page Live", 
            "Ad Creatives Ready",
            "MVP Roadmap Planned",
            "Pricing Strategy Set",
            "Product Requirements Defined",
            "GTM Strategy Mapped",
            "Competitive Analysis Done",
            "Technical Architecture Designed",
            "User Research Completed"
          ]
        })
        .where(eq(executionPlans.ideaId, launchlistIdea.id));
    } else {
      // Insert new execution plan
      await db.insert(executionPlans).values({
        ideaId: launchlistIdea.id,
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
          "Brand Package Complete",
          "Landing Page Live",
          "Ad Creatives Ready", 
          "MVP Roadmap Planned",
          "Pricing Strategy Set",
          "Product Requirements Defined",
          "GTM Strategy Mapped",
          "Competitive Analysis Done",
          "Technical Architecture Designed", 
          "User Research Completed"
        ],
        createdAt: new Date()
      });
      console.log("Created LaunchList execution plan with deliverables.");
    }

    console.log("Done! LaunchList has been added to the idea library with all deliverable content.");
  } catch (error) {
    console.error("Error seeding LaunchList:", error);
    console.error("Make sure the deliverable files exist in launchlist-deliverables/ folder");
    process.exit(1);
  }

  process.exit(0);
}

seedLaunchList();