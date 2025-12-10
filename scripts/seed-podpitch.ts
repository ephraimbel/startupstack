import { db } from "../server/db";
import { ideas, landingPages, executionPlans } from "../shared/schema";
import { eq } from "drizzle-orm";
import { readFileSync } from "fs";
import { join } from "path";

// PodPitch - idea_026
const podpitchIdea = {
  id: "podpitch-026",
  userId: null,
  title: "PodPitch",
  oneLiner: "Get booked on podcasts that matter",
  problem: "Podcast guesting is the highest-ROI marketing channel nobody uses well. A single 45-minute interview reaches thousands of qualified listeners, builds lasting authority, and generates backlinks—all for free. But the process is broken: finding relevant shows takes hours of research, crafting personalized pitches is tedious, tracking outreach is chaos, and follow-ups fall through the cracks. Most founders send 5 generic pitches, get rejected or ignored, and give up.",
  targetCustomer: "Founders, consultants, and B2B executives who want to build authority and drive qualified leads through podcast appearances",
  solution: "Access a database of 50,000+ podcasts with audience size, topic focus, and booking contact information. Describe your expertise once—AI writes personalized pitches for each show based on the host's style, past episodes, and audience interests. Track your outreach pipeline, automate follow-ups, and see which shows actually book guests like you. Go from cold pitching to confirmed bookings without the manual grind.",
  monetization: "$79/month (20 pitches), $179/month (50 pitches), $399/month (unlimited + team). Free tier: 5 AI pitches/month.",
  tags: ["ai", "podcast-outreach", "b2b-marketing", "authority-building", "sales", "pr"],
  keywords: null,
  status: "validated" as const,
  demandScore: 85,
  demandBand: "high" as const,
  trendLabel: "rising" as const,
  validationSummary: null,
  validatedAt: null,
  isPublic: true,
  isSaved: false,
  whyNow: "Perfect timing: (1) Podcast listenership hit 500M+ globally—audiences are larger than ever, (2) B2B buyers increasingly trust podcast guests over ads—72% have purchased after hearing a founder on a show, (3) AI can now write genuinely personalized pitches that don't feel templated, (4) Traditional PR agencies charge $10K+/month but podcast booking is the one thing founders can do themselves—with the right tools.",
  revenueImpact: "Founders save $30K+ annually compared to agencies while maintaining full control. One booked podcast can generate $10K+ in qualified leads for B2B founders. Average user books 2+ shows monthly, building lasting authority and reach.",
  marketSize: "$500M podcast PR and guesting services",
  competitionLevel: "Medium" as const,
  category: "marketing" as const,
  businessType: "b2b" as const,
  priceRange: "smb" as const
};

const podpitchLanding = {
  meta: {
    title: "PodPitch — Get Booked on Podcasts That Matter",
    description: "AI-powered podcast outreach for founders. 50K+ shows, personalized pitches, full pipeline management. Book appearances without agency fees.",
    og_image_concept: "Professional dashboard showing podcast database with AI-generated pitch preview and booking pipeline. Clean, data-forward design with founder testimonials overlay."
  },
  hero: {
    headline: "Get booked on podcasts that reach your customers",
    subheadline: "50K+ podcasts. AI-personalized pitches. Full pipeline management. Book appearances that build authority—without hiring an agency.",
    cta_primary: {
      text: "Start Free — 5 Pitches Included",
      url: "/signup"
    },
    cta_secondary: {
      text: "See how it works →",
      url: "#how-it-works"
    },
    social_proof_snippet: "Join founders booking 5-10 podcasts per month",
    hero_visual: {
      type: "product_screenshot" as const,
      description: "Professional dashboard showing podcast search results with AI-generated pitch preview and pipeline kanban view. Clean, data-forward design."
    }
  },
  problem_section: {
    section_id: "problem",
    eyebrow: "The Broken Process",
    headline: "Podcast guesting works. The process doesn't.",
    description: "A single appearance can generate $10K+ in qualified leads, but the outreach process stops most founders before they start.",
    pain_points: [
      {
        icon: "search",
        title: "Finding shows is a full-time job",
        description: "Hours of Googling, scrolling Apple Podcasts, and checking if they even take guests. You've got a company to run."
      },
      {
        icon: "mail",
        title: "Generic pitches get ignored",
        description: "Hosts receive 50+ pitches weekly. Templated emails go straight to trash. Personalization takes 20+ minutes per show."
      },
      {
        icon: "clock",
        title: "Follow-ups fall through the cracks",
        description: "You pitch 10 shows, get busy, forget to follow up. 80% of bookings come from follow-ups. Opportunities lost."
      },
      {
        icon: "dollar-sign",
        title: "Agencies cost a fortune",
        description: "Professional PR agencies charge $2-5K/month. That's $30K+ annually for what you could do yourself with the right tools."
      }
    ],
    stat_callout: {
      number: "72%",
      label: "of B2B buyers have purchased after hearing a founder on a podcast",
      source: "Podcast Industry Report 2024"
    }
  },
  solution_section: {
    section_id: "solution",
    eyebrow: "Professional PR, DIY Control",
    headline: "Professional podcast PR. Do it yourself.",
    description: "Everything you need to run agency-level podcast outreach campaigns from your desk.",
    features: [
      {
        icon: "database",
        title: "50K+ Podcast Database",
        description: "Search by topic, audience size, and guest acceptance rate. Find shows your customers actually listen to."
      },
      {
        icon: "bot",
        title: "AI-Personalized Pitches",
        description: "Not templates. AI analyzes each show's style, recent episodes, and audience to write pitches that get replies."
      },
      {
        icon: "check-circle",
        title: "Verified Contacts",
        description: "Booking emails and submission forms verified quarterly. Stop bouncing off dead addresses."
      },
      {
        icon: "trending-up",
        title: "Pipeline Management",
        description: "Track every pitch from draft to booked. Never lose track of a warm lead again."
      },
      {
        icon: "refresh-cw",
        title: "Automated Follow-Ups",
        description: "Schedule follow-up sequences that stop on reply. Persistence without the awkwardness."
      },
      {
        icon: "bar-chart",
        title: "Booking Intelligence",
        description: "See which shows actually book external guests and what pitches work. Stop guessing."
      }
    ],
    visual: {
      type: "demo_video" as const,
      description: "Screen recording showing: search for podcasts in specific niche → AI generating personalized pitch → tracking in pipeline → follow-up automation"
    }
  },
  how_it_works: {
    section_id: "how-it-works",
    eyebrow: "Simple Process",
    headline: "From pitch to booking in three steps",
    steps: [
      {
        number: 1,
        title: "Build your profile",
        description: "Tell us your expertise, talking points, and past appearances. This powers personalized pitches across every show.",
        visual_description: "Expert profile builder interface with expertise areas and credentials"
      },
      {
        number: 2,
        title: "Find and pitch shows",
        description: "Search our database, select relevant podcasts, and let AI write personalized pitches in seconds.",
        visual_description: "Podcast search interface with AI pitch generation in progress"
      },
      {
        number: 3,
        title: "Track and book",
        description: "Manage your pipeline, automate follow-ups, and convert interested hosts into booked appearances.",
        visual_description: "Pipeline kanban board showing pitches moving from sent to booked status"
      }
    ]
  },
  social_proof: {
    section_id: "proof",
    eyebrow: "Founder Success",
    headline: "Founders are booking 5-10 podcasts per month",
    testimonials: [
      {
        quote: "PodPitch helped me book 8 shows in my first month. The AI pitches are so good, hosts think I spent an hour researching each show.",
        author: "Sarah Chen",
        role: "SaaS Founder",
        company: "TechFlow",
        avatar_description: "Professional female founder in modern office setting",
        result: "8 bookings in 30 days"
      },
      {
        quote: "Replaced my $3K/month PR agency with PodPitch. Same results, 1/30th the cost, and I have full control.",
        author: "Marcus Rodriguez",
        role: "Author",
        company: "The Revenue Code",
        avatar_description: "Professional male author with business book backdrop",
        result: "Saved $36K annually"
      },
      {
        quote: "From zero podcast appearances to 15 booked shows in 60 days. My consultation pipeline is completely full now.",
        author: "Dr. Maya Patel",
        role: "Business Consultant",
        company: "Growth Strategy Partners",
        avatar_description: "Professional consultant in consulting firm setting",
        result: "15 bookings in 2 months"
      }
    ],
    stats: [
      {
        number: "25,000+",
        label: "Pitches Sent",
        context: "and counting"
      },
      {
        number: "18%",
        label: "Response Rate",
        context: "vs 3% industry avg"
      },
      {
        number: "50,000+",
        label: "Shows in Database",
        context: "updated quarterly"
      },
      {
        number: "7.3",
        label: "Avg Bookings/User",
        context: "per month"
      }
    ],
    logos: {
      headline: "Trusted by Founders From",
      companies: ["Y Combinator", "Techstars", "500 Startups", "AngelPad", "Plug and Play", "Mass Challenge"]
    },
    trust_badges: [
      {
        icon: "shield",
        text: "GDPR Compliant"
      },
      {
        icon: "clock",
        text: "24/7 Support"
      },
      {
        icon: "check",
        text: "Verified Contacts"
      }
    ]
  },
  pricing: {
    section_id: "pricing",
    eyebrow: "Professional Pricing",
    headline: "A fraction of agency fees. Full control.",
    subheadline: "Start free. No credit card required.",
    plans: [
      {
        name: "Free",
        price: "$0",
        price_detail: "forever",
        description: "Try it out, occasional users",
        features: [
          "Browse podcast database",
          "5 AI-generated pitches/month",
          "Basic pitch tracking",
          "Media kit template"
        ],
        cta: "Get Started Free",
        highlighted: false,
        badge: null
      },
      {
        name: "Starter",
        price: "$79",
        price_detail: "/month",
        description: "Founders actively building podcast presence",
        features: [
          "20 AI-generated pitches/month",
          "Full database access",
          "Verified contact info",
          "Pipeline tracking",
          "Follow-up sequences",
          "Show research cards",
          "Analytics dashboard"
        ],
        cta: "Start Free Trial",
        highlighted: true,
        badge: "Most Popular"
      },
      {
        name: "Growth",
        price: "$179",
        price_detail: "/month",
        description: "Serious about podcast strategy",
        features: [
          "50 pitches/month",
          "Everything in Starter",
          "A/B test pitch variants",
          "Booking success patterns",
          "Interview prep guides",
          "Appearance tracker"
        ],
        cta: "Start Free Trial",
        highlighted: false,
        badge: null
      },
      {
        name: "Agency",
        price: "$399",
        price_detail: "/month",
        description: "Agencies and enterprise",
        features: [
          "Unlimited pitches",
          "Everything in Growth",
          "5 client workspaces",
          "White-label sending",
          "API access",
          "Dedicated support"
        ],
        cta: "Contact Sales",
        highlighted: false,
        badge: "Enterprise"
      }
    ],
    guarantee: {
      headline: "14-Day Free Trial",
      description: "Try any paid plan risk-free. No credit card required until you're ready to scale."
    },
    pricing_note: "Traditional PR agencies: $2,500-$5,000/month | PodPitch Starter: $79/month"
  },
  faq: {
    section_id: "faq",
    headline: "Questions? We've Got Answers.",
    questions: [
      {
        question: "How is this different from podcast agencies?",
        answer: "Agencies charge $2-5K/month and send generic pitches. PodPitch gives you the same tools and database for 1/30th the cost, with AI personalization that's often better than junior PR associates."
      },
      {
        question: "What makes the AI pitches different?",
        answer: "We don't just fill in [PODCAST NAME]. Our AI reads recent episodes, understands host preferences, and suggests relevant talking points. Hosts tell us they can't tell it's AI—it just sounds like a founder who did their homework."
      },
      {
        question: "How do you verify contact information?",
        answer: "We verify booking contacts quarterly through automated email validation, manual checks, and user feedback. Stale contacts are flagged and updated. Our bounce rate is under 5%."
      },
      {
        question: "What if I've never been on a podcast before?",
        answer: "Perfect—everyone starts somewhere. We have guides on pitching without prior appearances and help you identify smaller shows where first-time guests are welcome."
      },
      {
        question: "Can I see results before subscribing?",
        answer: "Yes. The free tier includes 5 AI-generated pitches so you can test pitch quality and browse our database. Most users book at least one show before upgrading."
      },
      {
        question: "Do you help with interview prep?",
        answer: "Growth tier includes interview prep guides for each show—topics to mention, host preferences, and what makes appearances memorable."
      }
    ]
  },
  final_cta: {
    section_id: "cta",
    headline: "Your expertise deserves an audience",
    subheadline: "Join founders booking 5-10 podcasts per month. Start free with 5 AI pitches.",
    cta_text: "Start Pitching Free →",
    trust_element: "✓ No credit card required ✓ 5 pitches included ✓ 50K+ shows ✓ Cancel anytime"
  },
  footer: {
    tagline: "Get booked on podcasts that matter.",
    links: {
      product: ["Features", "Pricing", "How It Works", "Database"],
      resources: ["Blog", "Help Center", "Pitch Guide", "Success Stories"],
      company: ["About", "Careers", "Press", "Contact"],
      legal: ["Privacy", "Terms", "Security", "GDPR"]
    },
    social: ["Twitter", "LinkedIn", "YouTube"],
    newsletter: {
      headline: "Podcast booking tips & strategies",
      placeholder: "Your email",
      cta: "Subscribe"
    }
  }
};

async function seedPodPitch() {
  console.log("Seeding PodPitch (idea_026)...");

  try {
    // Check if it already exists
    const existing = await db.select().from(ideas).where(eq(ideas.id, podpitchIdea.id));
    
    if (existing.length > 0) {
      console.log("PodPitch idea already exists. Updating...");
      await db.update(ideas)
        .set({ 
          ...podpitchIdea,
          updatedAt: new Date()
        })
        .where(eq(ideas.id, podpitchIdea.id));
    } else {
      // Insert the idea
      await db.insert(ideas).values({
        ...podpitchIdea,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created PodPitch idea.");
    }

    // Check if landing page exists
    const existingLanding = await db.select().from(landingPages).where(eq(landingPages.slug, "podpitch"));
    
    if (existingLanding.length > 0) {
      console.log("PodPitch landing page already exists. Updating...");
      await db.update(landingPages)
        .set({ 
          content: JSON.stringify(podpitchLanding),
          updatedAt: new Date(),
          isPublished: true 
        })
        .where(eq(landingPages.slug, "podpitch"));
    } else {
      // Insert the landing page
      await db.insert(landingPages).values({
        ideaId: podpitchIdea.id,
        slug: "podpitch",
        content: JSON.stringify(podpitchLanding),
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created PodPitch landing page.");
    }

    // Create execution plan with all deliverable content
    const deliverableContent = {
      // Reading the prompt files we created
      brand_package: readFileSync(join(process.cwd(), 'podpitch-deliverables/brand-package/prompt.md'), 'utf-8'),
      landing_page: readFileSync(join(process.cwd(), 'podpitch-deliverables/landing-page/prompt.md'), 'utf-8'),
      ad_creatives: readFileSync(join(process.cwd(), 'podpitch-deliverables/ad-creatives/prompt.md'), 'utf-8'),
      mvp_roadmap: readFileSync(join(process.cwd(), 'podpitch-deliverables/mvp-roadmap/prompt.md'), 'utf-8'),
      pricing_strategy: readFileSync(join(process.cwd(), 'podpitch-deliverables/pricing-strategy/prompt.md'), 'utf-8'),
      product_requirements: readFileSync(join(process.cwd(), 'podpitch-deliverables/product-requirements/prompt.md'), 'utf-8'),
      gtm_strategy: readFileSync(join(process.cwd(), 'podpitch-deliverables/gtm-strategy/prompt.md'), 'utf-8'),
    };

    // Check if execution plan already exists
    const existingPlan = await db.select().from(executionPlans).where(eq(executionPlans.ideaId, podpitchIdea.id));
    
    if (existingPlan.length > 0) {
      console.log("PodPitch execution plan already exists. Updating...");
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
        .where(eq(executionPlans.ideaId, podpitchIdea.id));
    } else {
      // Insert new execution plan
      await db.insert(executionPlans).values({
        ideaId: podpitchIdea.id,
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
      console.log("Created PodPitch execution plan with deliverables.");
    }

    console.log("Done! PodPitch has been added to the idea library with all deliverable content.");
  } catch (error) {
    console.error("Error seeding PodPitch:", error);
    console.error("Make sure the deliverable files exist in podpitch-deliverables/ folder");
    process.exit(1);
  }

  process.exit(0);
}

seedPodPitch();