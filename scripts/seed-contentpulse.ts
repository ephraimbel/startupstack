import { db } from "../server/db";
import { ideas, landingPages } from "../shared/schema";
import { eq } from "drizzle-orm";

// ContentPulse - idea_052
const contentPulseIdea = {
  id: "contentpulse-001",
  userId: null,
  title: "ContentPulse",
  oneLiner: "Real-time content analytics that shows what's actually driving revenue across all your platforms",
  problem: "Creators post across 5+ platforms but have no unified view of what content drives real business results. Platform analytics show vanity metrics, not revenue. They waste time creating content that gets views but doesn't convert, while their money-making content patterns go unnoticed.",
  targetCustomer: "Content creators, coaches, and course creators with $10K+ monthly revenue who post on multiple platforms and sell their own products/services.",
  solution: "Connect all your platforms and payment processors. AI analyzes which content topics, formats, and posting times actually drive email signups, course sales, and client inquiries. Get a unified dashboard showing content ROI, not just engagement. Weekly AI reports highlight your money-making content patterns.",
  monetization: "$97/month for solo creators (up to 8 platforms), $297/month for teams (unlimited users + advanced analytics), $997/month enterprise (API access + custom integrations).",
  tags: ["analytics", "ai", "content-optimization", "revenue-tracking", "creator-tools"],
  keywords: null,
  status: "validated" as const,
  demandScore: 84,
  demandBand: "high" as const,
  trendLabel: "rising" as const,
  validationSummary: null,
  validatedAt: null,
  isPublic: true,
  isSaved: false,
  whyNow: "Creator economy is maturing beyond vanity metrics. Platform APIs now available. Payment processor integrations easier. Creators need to prove ROI as competition increases and audiences become more selective.",
  revenueImpact: "Creators typically see 30-50% revenue increase within 3 months by focusing on content that converts. A creator making $20K/month could add $6-10K by optimizing their content strategy around revenue data.",
  marketSize: "$50B+",
  competitionLevel: "Medium" as const,
  category: "analytics" as const,
  businessType: "b2b" as const,
  priceRange: "premium" as const
};

const contentPulseLanding = {
  meta: {
    title: "ContentPulse - See Which Content Actually Makes You Money",
    description: "Stop guessing what works. Connect your platforms and payment processors to see exactly which content drives revenue, not just likes.",
    og_image_concept: "Dashboard showing content performance with revenue data overlaid on posts, highlighting a viral post with $0 revenue vs a low-engagement post that drove $5K in sales"
  },
  hero: {
    headline: "Your Content Gets Views. But Which Posts Make Money?",
    subheadline: "ContentPulse tracks the full journey from post to payment, showing you exactly which content drives signups, sales, and revenue—across all your platforms.",
    cta_primary: {
      text: "Start 14-Day Free Trial",
      subtext: "No credit card required"
    },
    cta_secondary: {
      text: "See Live Demo",
      url: "#demo"
    },
    social_proof_snippet: "Trusted by 3,000+ creators who've increased revenue by an average of 37%",
    hero_visual: {
      type: "product_screenshot" as const,
      description: "Split dashboard showing Instagram post with 50K likes = $0 revenue vs LinkedIn post with 500 views = $8K in course sales"
    }
  },
  problem_section: {
    section_id: "problem",
    eyebrow: "The Hidden Problem",
    headline: "You're Optimizing for the Wrong Metrics",
    description: "Platform analytics show likes, views, and shares. But viral content rarely pays the bills. Meanwhile, the posts that quietly drive course sales and client inquiries get lost in the noise. You're flying blind, creating content based on vanity metrics instead of revenue data.",
    pain_points: [
      {
        icon: "trending-up",
        title: "Vanity Metrics Mislead",
        description: "That viral TikTok got 100K views but generated zero sales. The 'boring' LinkedIn post brought in 5 high-ticket clients."
      },
      {
        icon: "shuffle",
        title: "Scattered Analytics",
        description: "Jumping between YouTube, Instagram, TikTok, LinkedIn, Twitter analytics—never seeing the complete picture."
      },
      {
        icon: "help-circle",
        title: "Attribution Black Hole",
        description: "Someone buys your course, but which content convinced them? Was it the YouTube video, the email, or that Twitter thread?"
      },
      {
        icon: "clock",
        title: "Wasted Creation Time",
        description: "Spending hours on content types that don't convert while your money-makers gather dust in the archives."
      }
    ],
    stat_callout: {
      number: "73%",
      label: "of creators can't identify which content drives revenue",
      source: "Creator Economy Report 2024"
    }
  },
  solution_section: {
    section_id: "solution",
    eyebrow: "Unified Intelligence",
    headline: "Finally See Your Content ROI",
    description: "ContentPulse connects your content platforms with your business tools—email, payments, calendars. Our AI tracks the complete customer journey from first view to final purchase, revealing which content actually makes money.",
    features: [
      {
        icon: "link",
        title: "Universal Platform Sync",
        description: "Connect YouTube, Instagram, TikTok, LinkedIn, Twitter, podcasts—all in one dashboard with real revenue data."
      },
      {
        icon: "target",
        title: "Revenue Attribution",
        description: "Track which posts drive email signups, discovery calls booked, course purchases, and coaching inquiries."
      },
      {
        icon: "brain",
        title: "AI Pattern Recognition",
        description: "Discover hidden patterns: Maybe Tuesday LinkedIn posts about mindset convert 5x better than how-to content."
      },
      {
        icon: "trending-up",
        title: "Predictive Analytics",
        description: "Get content suggestions based on what's actually made money before, not what might go viral."
      },
      {
        icon: "calendar",
        title: "Revenue-Based Planning",
        description: "Plan your content calendar around proven money-makers, with AI predicting revenue for each post."
      }
    ],
    visual: {
      type: "screenshot" as const,
      description: "Dashboard showing content performance with revenue overlay, highlighting high-converting content patterns"
    }
  },
  how_it_works: {
    section_id: "how-it-works",
    eyebrow: "Simple Setup",
    headline: "From Guessing to Knowing in 10 Minutes",
    steps: [
      {
        number: 1,
        title: "Connect Your Ecosystem",
        description: "Link your content platforms, email service, payment processors, and calendar. One-click connections, no code required.",
        visual_description: "Integration screen showing platform logos connecting to central hub"
      },
      {
        number: 2,
        title: "AI Maps Your Revenue",
        description: "Our AI analyzes your historical data, connecting content to conversions. See which posts led to sales, sometimes months later.",
        visual_description: "Flowchart showing content → engagement → email signup → nurture → purchase journey"
      },
      {
        number: 3,
        title: "Get Your Money Map",
        description: "See exactly which content drives revenue. Get weekly reports on what to create more of and what to stop wasting time on.",
        visual_description: "Heat map of content with revenue data overlaid, green highlighting money-makers"
      }
    ]
  },
  social_proof: {
    section_id: "proof",
    eyebrow: "Creator Results",
    headline: "They Stopped Chasing Likes. Started Chasing Revenue.",
    testimonials: [
      {
        quote: "I was grinding on Instagram Reels because they got views. ContentPulse showed me my money came from LinkedIn. Shifted focus and went from $15K to $31K/month.",
        author: "Jessica Park",
        role: "Business Coach",
        company: "$380K ARR",
        avatar_description: "Professional woman in her early 30s",
        result: "2x revenue in 4 months"
      },
      {
        quote: "Turns out my highest-earning content was my 'Teaching Tuesday' emails, not my viral TikToks. Now I know exactly what content to double down on.",
        author: "Mike Chen",
        role: "Course Creator",
        company: "Design Mastery Academy",
        avatar_description: "Creative professional in casual attire",
        result: "+$72K from optimized content"
      },
      {
        quote: "ContentPulse revealed that my podcast episodes about mindset drove 3x more coaching inquiries than tactical content. Complete game-changer for my business.",
        author: "Dr. Sarah Williams",
        role: "Executive Coach",
        company: "7-figure coaching practice",
        avatar_description: "Professional woman with confident demeanor",
        result: "47% increase in qualified leads"
      }
    ],
    stats: [
      {
        number: "37%",
        label: "Average Revenue Increase",
        context: "within 90 days"
      },
      {
        number: "3,000+",
        label: "Creators Optimizing",
        context: "with real data"
      },
      {
        number: "$47M",
        label: "Revenue Tracked",
        context: "and attributed"
      },
      {
        number: "4.8/5",
        label: "Creator Rating",
        context: "from 500+ reviews"
      }
    ],
    logos: {
      headline: "Integrates With Your Stack",
      companies: ["Stripe", "ConvertKit", "Gumroad", "Calendly", "Mailchimp", "Teachable"]
    },
    trust_badges: [
      {
        icon: "shield-check",
        text: "SOC 2 Compliant"
      },
      {
        icon: "lock",
        text: "Your Data Stays Yours"
      },
      {
        icon: "zap",
        text: "Real-Time Sync"
      }
    ]
  },
  pricing: {
    section_id: "pricing",
    eyebrow: "Investment in Clarity",
    headline: "Stop Leaving Money on the Table",
    subheadline: "Most creators see ROI within the first week of understanding their content economics.",
    plans: [
      {
        name: "Solo Creator",
        price: "$97",
        price_detail: "/month",
        description: "Perfect for individual creators ready to get serious about content ROI.",
        features: [
          "Up to 8 platform connections",
          "Revenue attribution tracking",
          "AI pattern recognition",
          "Weekly revenue reports",
          "Content calendar optimizer",
          "Email & chat support"
        ],
        cta: "Start Free Trial",
        highlighted: true,
        badge: "Most Popular"
      },
      {
        name: "Creator Team",
        price: "$297",
        price_detail: "/month",
        description: "For creator businesses with teams who need shared insights.",
        features: [
          "Everything in Solo Creator",
          "Unlimited team members",
          "Custom dashboards",
          "Client revenue tracking",
          "White-label reports",
          "Priority support",
          "Quarterly strategy calls"
        ],
        cta: "Start Free Trial",
        highlighted: false,
        badge: null
      },
      {
        name: "Enterprise",
        price: "$997",
        price_detail: "/month",
        description: "For agencies and large creator organizations.",
        features: [
          "Everything in Team",
          "API access",
          "Custom integrations",
          "Dedicated success manager",
          "Advanced attribution models",
          "Custom AI training",
          "SLA guarantee"
        ],
        cta: "Book a Demo",
        highlighted: false,
        badge: "Full Service"
      }
    ],
    guarantee: {
      headline: "30-Day Revenue Clarity Guarantee",
      description: "If you don't discover at least 3 actionable insights about your content revenue in 30 days, we'll refund your money and help you implement a custom tracking system for free."
    },
    pricing_note: "All plans include 14-day free trial. No credit card required to start."
  },
  faq: {
    section_id: "faq",
    headline: "Questions? We've Got Answers",
    questions: [
      {
        question: "How does ContentPulse track revenue attribution?",
        answer: "We connect your content platforms with your business tools using official APIs. When someone engages with your content, we track their journey through email signups, link clicks, calendar bookings, and purchases. Our AI then connects the dots to show which content initiated the customer journey."
      },
      {
        question: "What platforms and tools do you integrate with?",
        answer: "We integrate with all major content platforms (YouTube, Instagram, TikTok, LinkedIn, Twitter, podcasts), email services (ConvertKit, Mailchimp, ActiveCampaign), payment processors (Stripe, PayPal, Gumroad), calendars (Calendly, Cal.com), and course platforms (Teachable, Kajabi, Podia)."
      },
      {
        question: "How long before I see results?",
        answer: "You'll get your first insights within 24 hours of connecting your platforms. Most creators identify their first money-making content patterns within a week. Revenue optimization typically shows results within 30-60 days as you shift focus to proven content."
      },
      {
        question: "Is my data private and secure?",
        answer: "Absolutely. We're SOC 2 compliant with bank-level encryption. We never sell or share your data. You can delete everything with one click. We only access the minimum data needed to show revenue attribution."
      },
      {
        question: "What if I sell through DMs or offline?",
        answer: "Great question! You can manually log sales with source attribution, or use our Chrome extension to track DM conversations. Many creators use our 'assisted attribution' feature to note which content sparked offline conversations."
      },
      {
        question: "Can I track client/customer lifetime value?",
        answer: "Yes! ContentPulse tracks not just initial purchases but ongoing customer value. See which content attracts one-time buyers versus loyal customers who purchase multiple products over time."
      }
    ]
  },
  final_cta: {
    section_id: "cta",
    headline: "Your Best Content is Hidden in Your Analytics",
    subheadline: "Join 3,000+ creators who've stopped guessing and started growing with data-driven content decisions.",
    cta_text: "Start Your 14-Day Free Trial",
    trust_element: "No credit card required • Setup in 10 minutes • Cancel anytime"
  },
  footer: {
    tagline: "Turn content insights into revenue growth.",
    links: {
      product: ["Features", "Integrations", "Pricing", "API Docs"],
      resources: ["Blog", "Case Studies", "Content ROI Guide", "Webinars"],
      company: ["About", "Careers", "Partners", "Contact"],
      legal: ["Privacy", "Terms", "Security", "GDPR"]
    },
    social: ["Twitter", "LinkedIn", "YouTube"],
    newsletter: {
      headline: "Weekly revenue optimization tips",
      placeholder: "Your email",
      cta: "Subscribe"
    }
  }
};

async function seedContentPulse() {
  console.log("Seeding ContentPulse (idea_052)...");

  try {
    // Insert the idea
    await db.insert(ideas).values({
      ...contentPulseIdea,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    console.log("Created ContentPulse idea.");

    // Insert the landing page
    await db.insert(landingPages).values({
      ideaId: contentPulseIdea.id,
      slug: "contentpulse",
      content: JSON.stringify(contentPulseLanding),
      isPublished: true,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    console.log("Created ContentPulse landing page.");

    console.log("Done! ContentPulse has been added to the idea library.");
  } catch (error) {
    console.error("Error seeding ContentPulse:", error);
    process.exit(1);
  }

  process.exit(0);
}

seedContentPulse();