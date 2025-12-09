import { db } from "../server/db";
import { landingPages, ideas } from "../shared/schema";
import { eq } from "drizzle-orm";

const billslashContent = {
  meta: {
    title: "BillSlash - Cut Your Medical Bills by Up to 80%",
    description: "AI-powered medical bill negotiation. Upload your bill, we find errors and savings. No savings, no fee.",
    og_image_concept: "Split screen showing a scary $15,000 medical bill transforming into a manageable $3,000 bill with a green checkmark"
  },
  hero: {
    headline: "Stop Overpaying for Healthcare",
    subheadline: "Upload your medical bill. Our AI finds billing errors, compares fair prices, and negotiates savings—so you only pay what you actually owe.",
    cta_primary: {
      text: "Analyze My Bill Free",
      subtext: "No credit card required"
    },
    cta_secondary: {
      text: "See How It Works",
      url: "#how-it-works"
    },
    social_proof_snippet: "Over $47M saved for 12,000+ patients",
    hero_visual: {
      type: "product_screenshot" as const,
      description: "Clean interface showing a medical bill being analyzed with errors highlighted and savings calculated"
    }
  },
  problem_section: {
    section_id: "problem",
    eyebrow: "The Hidden Crisis",
    headline: "Medical Bills Are Designed to Confuse You",
    description: "Hospitals mark up prices by 300-1000%. Most patients don't know they can negotiate, that 80% of bills contain errors, or that charity care programs exist. The result? Medical debt is now the #1 cause of bankruptcy in America.",
    pain_points: [
      {
        icon: "alert-triangle",
        title: "Hidden Billing Errors",
        description: "80% of medical bills contain errors—duplicate charges, wrong codes, and services never rendered."
      },
      {
        icon: "trending-up",
        title: "Massive Markups",
        description: "Hospitals routinely charge 300-1000% more than fair market rates for the same procedures."
      },
      {
        icon: "help-circle",
        title: "Confusing Paperwork",
        description: "Bills are intentionally complex. Most patients pay without questioning charges they don't understand."
      },
      {
        icon: "ban",
        title: "Hidden Assistance",
        description: "Billions in charity care and financial assistance go unclaimed because hospitals don't advertise it."
      }
    ],
    stat_callout: {
      number: "$100B+",
      label: "in medical bill overcharges annually in the US",
      source: "Healthcare Financial Management Association"
    }
  },
  solution_section: {
    section_id: "solution",
    eyebrow: "Your Bill Advocate",
    headline: "AI That Fights Your Medical Bills",
    description: "BillSlash combines advanced AI with expert negotiators to find every possible savings opportunity. We analyze your bills, identify errors, and negotiate on your behalf.",
    features: [
      {
        icon: "scan",
        title: "Instant Error Detection",
        description: "Our AI scans for duplicate charges, upcoding, and billing mistakes in seconds."
      },
      {
        icon: "database",
        title: "Fair Price Comparison",
        description: "Compare your charges against our database of 50M+ fair market prices nationwide."
      },
      {
        icon: "heart",
        title: "Charity Care Matching",
        description: "We check your eligibility for hospital financial assistance programs automatically."
      },
      {
        icon: "file-text",
        title: "Negotiation Letters",
        description: "Get professionally crafted dispute and negotiation letters ready to send."
      },
      {
        icon: "users",
        title: "Expert Negotiators",
        description: "For complex cases, our team of professional negotiators works on your behalf."
      }
    ],
    visual: {
      type: "screenshot" as const,
      description: "Dashboard showing bill analysis with errors flagged and estimated savings"
    }
  },
  how_it_works: {
    section_id: "how-it-works",
    eyebrow: "Simple Process",
    headline: "Three Steps to Savings",
    steps: [
      {
        number: 1,
        title: "Upload Your Bill",
        description: "Take a photo or upload a PDF of your medical bill. Our AI extracts all the details automatically.",
        visual_description: "Phone camera pointed at a medical bill with scanning animation"
      },
      {
        number: 2,
        title: "Get Your Analysis",
        description: "Within minutes, see every error, overcharge, and savings opportunity. Know exactly what you should pay.",
        visual_description: "Bill breakdown showing original vs fair price with savings highlighted"
      },
      {
        number: 3,
        title: "We Handle the Rest",
        description: "Use our letters to negotiate yourself, or let our experts handle everything. You only pay if we save you money.",
        visual_description: "Progress tracker showing negotiation status and final savings"
      }
    ]
  },
  social_proof: {
    section_id: "proof",
    eyebrow: "Real Results",
    headline: "Patients Trust BillSlash",
    testimonials: [
      {
        quote: "I was about to pay a $23,000 surgery bill. BillSlash found $18,000 in errors and overcharges. I ended up paying $5,200.",
        author: "Sarah Chen",
        role: "Teacher",
        company: "Austin, TX",
        avatar_description: "Professional woman in her 30s",
        result: "Saved $17,800"
      },
      {
        quote: "My insurance denied coverage and I was stuck with a $45,000 bill. BillSlash got me enrolled in charity care. I paid $0.",
        author: "Marcus Johnson",
        role: "Small Business Owner",
        company: "Atlanta, GA",
        avatar_description: "Middle-aged man with glasses",
        result: "Saved $45,000"
      },
      {
        quote: "They found billing codes for procedures I never had. Without BillSlash, I would have paid for someone else's treatment.",
        author: "Jennifer Martinez",
        role: "Retired Nurse",
        company: "Phoenix, AZ",
        avatar_description: "Woman in her 60s",
        result: "Saved $8,400"
      }
    ],
    stats: [
      {
        number: "$47M+",
        label: "Saved for Patients",
        context: "and counting"
      },
      {
        number: "12,000+",
        label: "Bills Reduced",
        context: "across all 50 states"
      },
      {
        number: "73%",
        label: "Average Savings",
        context: "on negotiated bills"
      },
      {
        number: "4.9/5",
        label: "Patient Rating",
        context: "based on 2,400+ reviews"
      }
    ],
    logos: {
      headline: "Featured In",
      companies: ["Forbes", "WSJ", "NPR", "CBS News", "Healthline"]
    },
    trust_badges: [
      {
        icon: "shield-check",
        text: "HIPAA Compliant"
      },
      {
        icon: "lock",
        text: "Bank-Level Security"
      },
      {
        icon: "award",
        text: "BBB A+ Rated"
      }
    ]
  },
  pricing: {
    section_id: "pricing",
    eyebrow: "Simple Pricing",
    headline: "No Savings, No Fee",
    subheadline: "We only get paid when you save money. It's that simple.",
    plans: [
      {
        name: "Self-Service",
        price: "Free",
        price_detail: "to analyze",
        description: "Get your bill analyzed and negotiation letters to handle it yourself.",
        features: [
          "AI bill analysis",
          "Error detection report",
          "Fair price comparison",
          "DIY negotiation letters",
          "Charity care eligibility check"
        ],
        cta: "Analyze My Bill",
        highlighted: false,
        badge: null
      },
      {
        name: "Full Service",
        price: "25%",
        price_detail: "of savings",
        description: "Our expert negotiators handle everything. You just approve the final result.",
        features: [
          "Everything in Self-Service",
          "Dedicated case manager",
          "Professional negotiation",
          "Payment plan setup",
          "Appeals handling",
          "Capped at $1,000 max fee"
        ],
        cta: "Get Expert Help",
        highlighted: true,
        badge: "Most Popular"
      },
      {
        name: "Enterprise",
        price: "$3",
        price_detail: "/employee/month",
        description: "Proactive bill review for employers who want to protect their teams.",
        features: [
          "Preventive bill monitoring",
          "Employee portal access",
          "Bulk bill processing",
          "HR dashboard & analytics",
          "Dedicated account manager",
          "Custom integration options"
        ],
        cta: "Contact Sales",
        highlighted: false,
        badge: null
      }
    ],
    guarantee: {
      headline: "100% Risk-Free Guarantee",
      description: "If we don't save you money, you don't pay us anything. We're so confident in our results that we put our fee on the line."
    },
    pricing_note: "Average patient saves $4,200. Maximum fee is $1,000 per bill, regardless of savings amount."
  },
  faq: {
    section_id: "faq",
    headline: "Common Questions",
    questions: [
      {
        question: "Is this legal? Can I really negotiate medical bills?",
        answer: "Absolutely. Medical bills are almost always negotiable. Hospitals have different price lists for different payers, and most have financial assistance programs they're required to offer but rarely advertise. You have every right to dispute errors and negotiate prices."
      },
      {
        question: "How long does the process take?",
        answer: "Bill analysis takes just minutes. For self-service negotiations, results depend on how quickly you follow up. For full-service, most negotiations are resolved within 30-60 days, though complex cases may take longer."
      },
      {
        question: "Will this hurt my credit score?",
        answer: "No. We work with you to handle bills before they go to collections. If a bill is already in collections, our negotiation process doesn't negatively impact your credit—and successfully reducing or paying off the debt helps improve it."
      },
      {
        question: "What if the hospital refuses to negotiate?",
        answer: "In our experience, over 90% of negotiations result in some savings. We have multiple strategies including error disputes, fair pricing appeals, financial assistance applications, and payment plan negotiations. There's almost always a path to savings."
      },
      {
        question: "Is my medical information secure?",
        answer: "Yes. We're fully HIPAA compliant with bank-level encryption. Your data is never sold or shared. We use it only to analyze and negotiate your bills."
      },
      {
        question: "What types of bills can you help with?",
        answer: "We help with all medical bills—hospital stays, surgeries, ER visits, imaging, lab work, specialist visits, and more. We work with bills from any healthcare provider in the United States."
      },
      {
        question: "What if I already paid my bill?",
        answer: "In some cases, we can help recover overpayments, especially if billing errors are found. Upload your paid bills and we'll analyze them for potential refund opportunities."
      }
    ]
  },
  final_cta: {
    section_id: "cta",
    headline: "Every Day You Wait Costs Money",
    subheadline: "Interest and late fees add up. Start your free analysis now and see exactly what you could save.",
    cta_text: "Analyze My Bill Free",
    trust_element: "No credit card required • Results in minutes • 100% confidential"
  },
  footer: {
    tagline: "Fighting unfair medical bills with AI and human expertise.",
    links: {
      product: ["How It Works", "Pricing", "Success Stories", "For Employers"],
      company: ["About Us", "Careers", "Press", "Contact"],
      legal: ["Privacy Policy", "Terms of Service", "HIPAA Compliance"],
      support: ["Help Center", "FAQs", "Community"]
    },
    social: ["Twitter", "LinkedIn", "Facebook"],
    newsletter: {
      headline: "Get healthcare savings tips",
      placeholder: "Enter your email",
      cta: "Subscribe"
    }
  }
};

async function seedBillSlash() {
  console.log("Seeding BillSlash landing page...");

  // Check if it already exists
  const existing = await db.select().from(landingPages).where(eq(landingPages.slug, "billslash"));
  
  if (existing.length > 0) {
    console.log("BillSlash landing page already exists. Updating...");
    await db.update(landingPages)
      .set({ 
        content: JSON.stringify(billslashContent),
        updatedAt: new Date(),
        isPublished: true 
      })
      .where(eq(landingPages.slug, "billslash"));
    console.log("Updated BillSlash landing page.");
  } else {
    // Find or create a BillSlash idea
    let ideaId: string | null = null;
    const existingIdeas = await db.select().from(ideas).where(eq(ideas.title, "BillSlash"));
    
    if (existingIdeas.length > 0) {
      ideaId = existingIdeas[0].id;
    }

    await db.insert(landingPages).values({
      ideaId,
      slug: "billslash",
      content: JSON.stringify(billslashContent),
      isPublished: true,
    });
    console.log("Created BillSlash landing page.");
  }

  console.log("Done! Visit /startup/billslash to view the landing page.");
  process.exit(0);
}

seedBillSlash().catch((err) => {
  console.error("Error seeding BillSlash:", err);
  process.exit(1);
});
