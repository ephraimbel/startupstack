import { db } from "../server/db";
import { ideas, landingPages, executionPlans } from "../shared/schema";
import { eq } from "drizzle-orm";
import { readFileSync } from "fs";
import { join } from "path";

// SOPBuilder - idea_081
const sopbuilderIdea = {
  id: "sopbuilder-081",
  userId: null,
  title: "SOPBuilder",
  oneLiner: "Record once. Document forever. Train everyone.",
  problem: "Companies hemorrhage money when employees improvise instead of following processes. That experienced employee who knows exactly how to process refunds, configure the CRM, or onboard new clients? When they leave, their knowledge walks out the door. New hires take months to get up to speed because training is 'watch me do it once' or a Google Doc from 2019.",
  targetCustomer: "Operations managers at companies with 20-200 employees who are tired of answering the same questions and losing knowledge when people leave",
  solution: "Just do the task while our browser extension records. SOPBuilder watches your screen, captures every click and keystroke, and uses AI to generate professional step-by-step documentation with annotated screenshots, decision points, and warnings. Version control tracks changes over time.",
  monetization: "$29/month (10 SOPs, 3 editors), $79/month (50 SOPs, 10 editors), $199/month (unlimited SOPs and editors). 14-day free trial, 17% annual discount.",
  tags: ["documentation", "process-management", "ai-tools", "training", "operations", "automation"],
  keywords: null,
  status: "validated" as const,
  demandScore: 86,
  demandBand: "high" as const,
  trendLabel: "rising" as const,
  validationSummary: null,
  validatedAt: null,
  isPublic: true,
  isSaved: false,
  whyNow: "Perfect timing: (1) Remote/hybrid work made 'watch me do it' training impossible—documentation is essential, (2) Employee turnover is at record highs—knowledge loss is critical, (3) AI can now understand screen recordings and generate coherent documentation, (4) Companies are drowning in tribal knowledge that exists only in people's heads.",
  revenueImpact: "Companies save 50+ hours per month on documentation creation and reduce new hire ramp time by 60%. Prevents knowledge loss worth $50K+ when experienced employees leave. Reduces process-related errors and support tickets.",
  marketSize: "$2.5B SOP and procedure documentation tools",
  competitionLevel: "Medium" as const,
  category: "productivity" as const,
  businessType: "b2b" as const,
  priceRange: "smb" as const
};

const sopbuilderLanding = {
  meta: {
    title: "SOPBuilder — AI-Powered SOP Documentation from Screen Recordings",
    description: "Record your screen as you work. AI generates professional SOPs with screenshots. Version control and training tracking included. Try free for 14 days.",
    og_image_concept: "Before/after transformation: messy screen recording on left, clean professional SOP document on right with numbered steps and annotated screenshots. Shows AI magic happening in between."
  },
  hero: {
    headline: "Stop documenting. Start recording.",
    subheadline: "SOPBuilder watches you work and writes the SOP. Screen recording → AI documentation → professional procedures in minutes, not hours.",
    cta_primary: {
      text: "Start Free Trial",
      url: "/signup"
    },
    cta_secondary: {
      text: "Watch it work →",
      url: "#demo"
    },
    social_proof_snippet: "Trusted by 1,000+ operations teams to document 25,000+ procedures",
    hero_visual: {
      type: "product_demo" as const,
      description: "Split-screen showing browser extension recording on left, AI-generated professional SOP with numbered steps and annotated screenshots on right. Transformation animation between the two."
    }
  },
  problem_section: {
    section_id: "problem",
    eyebrow: "Knowledge walks out the door",
    headline: "Your best knowledge walks out the door every day",
    description: "Every company depends on tribal knowledge that exists only in employees' heads. When they leave, productivity, efficiency, and institutional memory leave with them.",
    pain_points: [
      {
        icon: "user-x",
        title: "Tribal knowledge is a liability", 
        description: "That one person who knows exactly how to process refunds, configure the CRM, or close the quarterly books? When they leave, months of productivity leave with them. You can't afford to depend on individual memory."
      },
      {
        icon: "clock",
        title: "Documentation takes forever",
        description: "Writing a good SOP takes 2-3 hours: screenshot every step, write clear instructions, format it nicely. Multiply by dozens of procedures. Nobody has time. So nobody does it."
      },
      {
        icon: "file-x",
        title: "What you have is already outdated",
        description: "That Google Doc from 2021? The process changed six times since then. Nobody updated the doc. New employees follow old instructions and make mistakes. Or they skip the docs entirely."
      },
      {
        icon: "help-circle",
        title: "Training is 'watch me once'",
        description: "New hires shadow experienced staff for weeks, asking the same questions repeatedly. Knowledge transfer is inefficient and inconsistent. Different people teach different ways."
      }
    ],
    stat_callout: {
      number: "$50K+",
      label: "average cost when an experienced employee leaves without documented knowledge",
      source: "Operations Leadership Survey 2024"
    }
  },
  solution_section: {
    section_id: "solution",
    eyebrow: "AI-powered documentation",
    headline: "AI documentation that actually happens",
    description: "Stop writing SOPs manually. Record your screen as you work and let AI create professional documentation instantly.",
    features: [
      {
        icon: "video",
        title: "Record As You Work",
        description: "Our browser extension captures your screen as you complete any task. Every click, every keystroke, every step—automatically."
      },
      {
        icon: "sparkles",
        title: "AI Writes the SOP",
        description: "AI analyzes your recording and generates professional documentation: numbered steps, annotated screenshots, decision points, and warnings."
      },
      {
        icon: "git-branch",
        title: "Version Everything",
        description: "Every edit is tracked. See what changed between versions. Revert mistakes. Know who updated what and when—like Git for SOPs."
      },
      {
        icon: "graduation-cap",
        title: "Train Your Team",
        description: "Assign SOPs to team members. They mark steps complete as they learn. Dashboard shows who knows what. No more 'watch me once' training."
      },
      {
        icon: "split",
        title: "Handle Complexity",
        description: "Real procedures have branches. 'If enterprise client, do X. If SMB, do Y.' We capture decision trees that other tools can't handle."
      },
      {
        icon: "share",
        title: "Share Anywhere",
        description: "Embed in Notion. Export to PDF. Share public links. Your SOPs work wherever your team does."
      }
    ],
    visual: {
      type: "interactive_demo" as const,
      description: "Live demo showing extension in action: user performing task, AI processing, final SOP generated"
    }
  },
  how_it_works: {
    section_id: "how-it-works",
    eyebrow: "Minutes, not hours",
    headline: "From task to documentation in 10 minutes",
    steps: [
      {
        number: 1,
        title: "Just do the task",
        description: "Install our extension and hit record. Then complete the procedure as you normally would. We capture everything.",
        visual_description: "Browser with extension recording indicator, user performing task normally"
      },
      {
        number: 2,
        title: "AI builds your SOP",
        description: "In seconds, get a complete document: numbered steps, screenshots with highlights, tips, and warnings. Edit if needed.",
        visual_description: "AI processing screen with transformation animation, clean SOP document appearing"
      },
      {
        number: 3,
        title: "Share and train",
        description: "Publish to your team. Assign for training. Track who's up to speed. Keep it updated as processes evolve.",
        visual_description: "Team dashboard showing SOP library, training assignments, and completion tracking"
      }
    ]
  },
  social_proof: {
    section_id: "proof",
    eyebrow: "Operations teams love it",
    headline: "Operations teams are documenting everything",
    testimonials: [
      {
        quote: "We documented 50 procedures in one week. What used to take our team months now takes days. SOPBuilder transformed our operations.",
        author: "Jennifer Martinez",
        role: "Operations Manager",
        company: "TechFlow",
        avatar_description: "Professional operations manager in modern office setting",
        result: "50 SOPs in 1 week"
      },
      {
        quote: "New hire onboarding went from 3 months to 6 weeks. They have clear documentation for everything instead of shadowing people constantly.",
        author: "David Chen",
        role: "HR Director",
        company: "GrowthCorp",
        avatar_description: "HR professional with laptop and training materials",
        result: "50% faster onboarding"
      },
      {
        quote: "Our 'how do I...' Slack messages dropped by 70%. People find the answers in SOPs instead of asking the same questions repeatedly.",
        author: "Sarah Kim",
        role: "Support Manager", 
        company: "CloudBase",
        avatar_description: "Support manager with multiple monitors showing team chat",
        result: "70% fewer questions"
      }
    ],
    stats: [
      {
        number: "25,000+",
        label: "SOPs Created",
        context: "across all customers"
      },
      {
        number: "90%",
        label: "Time Saved",
        context: "vs manual documentation"
      },
      {
        number: "1,000+",
        label: "Operations Teams",
        context: "using SOPBuilder"
      },
      {
        number: "60%",
        label: "Faster Onboarding",
        context: "with documented procedures"
      }
    ],
    logos: {
      headline: "Integrates With Your Tools",
      companies: ["Notion", "Confluence", "Slack", "Chrome", "Edge", "Microsoft"]
    },
    trust_badges: [
      {
        icon: "shield",
        text: "Enterprise Security"
      },
      {
        icon: "eye-off", 
        text: "Privacy Controls"
      },
      {
        icon: "check",
        text: "SOC 2 Compliant"
      }
    ]
  },
  pricing: {
    section_id: "pricing",
    eyebrow: "Team pricing, not per-user",
    headline: "Flat pricing. Document everything.",
    subheadline: "No per-user fees. Unlimited team members. Pay by SOPs, not seats.",
    plans: [
      {
        name: "Starter",
        price: "$29",
        price_detail: "/month",
        description: "Perfect for small teams documenting core procedures",
        features: [
          "Up to 10 SOPs",
          "Unlimited team members (viewers)",
          "3 editors",
          "Browser extension capture",
          "AI documentation generation",
          "Basic version history (30 days)",
          "PDF export",
          "Email support"
        ],
        cta: "Start Free Trial",
        highlighted: false,
        badge: null
      },
      {
        name: "Team",
        price: "$79",
        price_detail: "/month",
        description: "For growing companies standardizing operations",
        features: [
          "Up to 50 SOPs",
          "Unlimited team members",
          "10 editors",
          "Everything in Starter",
          "Full version history",
          "Training mode",
          "Decision branch support",
          "Notion/Confluence embed",
          "Slack notifications",
          "Priority support"
        ],
        cta: "Start Free Trial",
        highlighted: true,
        badge: "Most Popular"
      },
      {
        name: "Business",
        price: "$199",
        price_detail: "/month",
        description: "For established companies with complex operations",
        features: [
          "Unlimited SOPs",
          "Unlimited team members",
          "Unlimited editors",
          "Everything in Team",
          "Desktop app capture",
          "Training analytics dashboard",
          "SSO (SAML)",
          "API access",
          "Audit log",
          "Dedicated success manager"
        ],
        cta: "Contact Sales",
        highlighted: false,
        badge: "Enterprise"
      }
    ],
    guarantee: {
      headline: "14-Day Free Trial",
      description: "Full Team features. No credit card required. Cancel anytime."
    },
    pricing_note: "17% discount on annual plans. Free plan with 3 SOPs and 1 editor available."
  },
  faq: {
    section_id: "faq",
    headline: "Questions? We've Got Answers.",
    questions: [
      {
        question: "What apps can I document?",
        answer: "Any web-based application works with our browser extension: CRMs, ERPs, admin dashboards, cloud tools—anything you do in Chrome or Edge. Desktop apps (Excel, Photoshop) require our Business plan desktop agent."
      },
      {
        question: "How accurate is the AI documentation?",
        answer: "Very good for most procedures—you'll typically make minor edits rather than rewrites. Complex workflows with lots of conditional logic may need more cleanup. The editor makes refinements easy."
      },
      {
        question: "Can I edit the generated SOPs?",
        answer: "Absolutely. Full WYSIWYG editor lets you reorder steps, add notes, blur sensitive info, and insert decision branches. You can also add video walkthroughs and supplementary content."
      },
      {
        question: "What about sensitive data in screenshots?",
        answer: "We offer one-click blur for any part of any screenshot. You can also pause recording when entering sensitive data. All content is encrypted at rest and in transit."
      },
      {
        question: "How do you compare to Scribe or Tango?",
        answer: "They do capture well, but we add what they're missing: true version control, team training tracking, decision tree support, and flat pricing instead of per-user. Plus we think our AI generates better documentation."
      },
      {
        question: "What if our processes change?",
        answer: "Just re-record and update. Version history shows what changed. Coming soon: AI will detect when your actual workflow differs from the SOP and flag it for update."
      }
    ]
  },
  final_cta: {
    section_id: "cta",
    headline: "Every process documented. Every team member trained.",
    subheadline: "Start your 14-day free trial. No credit card required.",
    cta_text: "Start Free Trial →",
    trust_element: "✓ 14-day free trial ✓ No credit card required ✓ 90% time savings ✓ Unlimited viewers"
  },
  footer: {
    tagline: "Record once. Document forever. Train everyone.",
    links: {
      product: ["Features", "Pricing", "Chrome Extension", "Desktop Capture"],
      resources: ["Blog", "Help Center", "SOP Templates", "Training Resources"],
      company: ["About", "Careers", "Press", "Contact"],
      legal: ["Privacy", "Terms", "Security", "Data Processing"]
    },
    social: ["Twitter", "LinkedIn", "YouTube", "Slack"],
    newsletter: {
      headline: "Operations and process tips",
      placeholder: "Your email",
      cta: "Subscribe"
    }
  }
};

async function seedSOPBuilder() {
  console.log("Seeding SOPBuilder (idea_081)...");

  try {
    // Check if it already exists
    const existing = await db.select().from(ideas).where(eq(ideas.id, sopbuilderIdea.id));
    
    if (existing.length > 0) {
      console.log("SOPBuilder idea already exists. Updating...");
      await db.update(ideas)
        .set({ 
          ...sopbuilderIdea,
          updatedAt: new Date()
        })
        .where(eq(ideas.id, sopbuilderIdea.id));
    } else {
      // Insert the idea
      await db.insert(ideas).values({
        ...sopbuilderIdea,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created SOPBuilder idea.");
    }

    // Check if landing page exists
    const existingLanding = await db.select().from(landingPages).where(eq(landingPages.slug, "sopbuilder"));
    
    if (existingLanding.length > 0) {
      console.log("SOPBuilder landing page already exists. Updating...");
      await db.update(landingPages)
        .set({ 
          content: JSON.stringify(sopbuilderLanding),
          updatedAt: new Date(),
          isPublished: true 
        })
        .where(eq(landingPages.slug, "sopbuilder"));
    } else {
      // Insert the landing page
      await db.insert(landingPages).values({
        ideaId: sopbuilderIdea.id,
        slug: "sopbuilder",
        content: JSON.stringify(sopbuilderLanding),
        isPublished: true,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log("Created SOPBuilder landing page.");
    }

    // Create execution plan with all deliverable content
    const deliverableContent = {
      // For now, we'll use structured content based on the provided information
      brand_package: JSON.stringify({
        brand_name: "SOPBuilder",
        tagline: "Record once. Document forever. Train everyone.",
        brand_personality: ["Efficient", "Practical", "Reliable", "Empowering", "Modern"],
        messaging: "AI-powered SOP documentation that transforms screen recordings into professional procedures",
        positioning: "Turn 3 hours of writing into 10 minutes of doing"
      }),
      landing_page: JSON.stringify(sopbuilderLanding),
      ad_creatives: JSON.stringify({
        headline: "Stop losing knowledge when employees leave",
        pain: "Tribal knowledge walks out the door with departing employees",
        solution: "Record your screen, get professional SOPs with AI",
        cta: "Start Free Trial - Document Everything"
      }),
      mvp_roadmap: JSON.stringify({
        phase_1: "Browser extension capture, AI documentation, basic editor",
        phase_2: "Version control, team workspace, training mode",
        phase_3: "Desktop app capture, decision trees, integrations",
        timeline: "10-12 weeks MVP, 4-6 month full feature set"
      }),
      pricing_strategy: JSON.stringify({
        model: "Flat team pricing by SOP count",
        tiers: ["Starter $29/mo (10 SOPs)", "Team $79/mo (50 SOPs)", "Business $199/mo (unlimited)"],
        strategy: "No per-user fees encourages adoption and documentation of everything"
      }),
      product_requirements: JSON.stringify({
        core_features: ["Browser extension capture", "AI documentation with GPT-4 Vision", "Version control", "Training verification"],
        integrations: ["Chrome Extension APIs", "Notion/Confluence", "Slack", "PDF export"],
        ai_features: "Screenshot analysis, step extraction, decision point detection"
      }),
      gtm_strategy: JSON.stringify({
        target: "Operations managers at 20-200 employee companies",
        channels: ["Operations communities", "LinkedIn B2B", "Content marketing", "Product Hunt"],
        messaging: "Transform knowledge loss into documented processes"
      }),
      competitive_analysis: JSON.stringify({
        direct: ["Scribe ($23/user - expensive)", "Tango ($16/user - basic)", "Trainual ($249/mo - overkill)"],
        positioning: "Team pricing + version control + training verification vs per-user tools",
        differentiation: "Flat pricing, true version control, decision trees, training tracking"
      }),
      technical_architecture: JSON.stringify({
        stack: "Next.js, Supabase, Chrome Extension, GPT-4 Vision",
        integrations: ["Chrome APIs for screen capture", "OpenAI for documentation", "Cloudflare R2 for storage"],
        security: "Encrypted storage, blur sensitive data, enterprise-grade security"
      }),
      user_research: JSON.stringify({
        findings: "Operations teams lose $50K+ when experienced employees leave without documentation",
        pain_points: ["Manual documentation takes 2-3 hours per SOP", "Docs get outdated quickly", "Training is 'watch me once'"],
        validation: "Companies with 20-200 employees actively seeking documentation solutions"
      })
    };

    // Check if execution plan already exists
    const existingPlan = await db.select().from(executionPlans).where(eq(executionPlans.ideaId, sopbuilderIdea.id));
    
    if (existingPlan.length > 0) {
      console.log("SOPBuilder execution plan already exists. Updating...");
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
            "Browser Extension MVP Built",
            "AI Documentation Generator Working", 
            "SOP Editor Functional",
            "Version Control Implemented",
            "Team Workspace Complete",
            "Training Mode Added",
            "Chrome Web Store Published",
            "Landing Page Live",
            "Stripe Billing Setup",
            "Beta Testing Complete"
          ]
        })
        .where(eq(executionPlans.ideaId, sopbuilderIdea.id));
    } else {
      // Insert new execution plan
      await db.insert(executionPlans).values({
        ideaId: sopbuilderIdea.id,
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
          "Browser Extension MVP Built",
          "AI Documentation Generator Working",
          "SOP Editor Functional",
          "Version Control Implemented",
          "Team Workspace Complete",
          "Training Mode Added",
          "Chrome Web Store Published", 
          "Landing Page Live",
          "Stripe Billing Setup",
          "Beta Testing Complete"
        ],
        createdAt: new Date()
      });
      console.log("Created SOPBuilder execution plan with deliverables.");
    }

    console.log("Done! SOPBuilder has been added to the idea library with all deliverable content.");
  } catch (error) {
    console.error("Error seeding SOPBuilder:", error);
    process.exit(1);
  }

  process.exit(0);
}

seedSOPBuilder();