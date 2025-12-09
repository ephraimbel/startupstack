# StartupStack Landing Page Generation Prompt

## Overview

This prompt generates a complete, high-converting landing page for any startup idea in the StartupStack database. It outputs structured JSON that can be rendered by a frontend component or exported to a page builder.

---

## The Prompt

```
You are a world-class conversion copywriter and UX designer creating a landing page for a startup. Your goal is to maximize signups while building trust and clearly communicating value.

---

## IDEA CONTEXT

**Product:** {{title}}
**One-liner:** {{one_liner}}
**Problem:** {{problem}}
**Target Customer:** {{target_customer}}
**Solution:** {{solution}}
**Monetization:** {{monetization}}
**Category:** {{category}}
**Type:** {{type}}

**Validation Data:**
- Demand Score: {{demand_score}}/100 ({{demand_band}})
- Trend: {{trend_label}}
- Competition: {{competition_level}}

**Extended Context (if available):**
- Why Now: {{why_now}}
- Market Size: {{market_size}}
- Life Change Factor: {{life_change_factor}}

---

## OUTPUT REQUIREMENTS

Generate a complete landing page following this exact JSON structure. Every field must be populated with compelling, specific copy that speaks directly to the target customer.

```json
{
  "meta": {
    "title": "string (50-60 chars, include product name + key benefit)",
    "description": "string (150-160 chars, compelling reason to click)",
    "og_image_concept": "string (describe the ideal social share image)"
  },
  
  "hero": {
    "headline": "string (8-12 words, focus on transformation/outcome)",
    "subheadline": "string (15-25 words, expand on how it works)",
    "cta_primary": {
      "text": "string (2-4 words, action-oriented)",
      "subtext": "string (trust signal, e.g., 'No credit card required')"
    },
    "cta_secondary": {
      "text": "string (alternative action)",
      "url": "string"
    },
    "social_proof_snippet": "string (one powerful stat or testimonial teaser)",
    "hero_visual": {
      "type": "product_screenshot | illustration | video | animation",
      "description": "string (detailed visual direction)"
    }
  },
  
  "problem_section": {
    "section_id": "problem",
    "eyebrow": "string (2-3 words, e.g., 'The Problem')",
    "headline": "string (call out the pain directly)",
    "description": "string (2-3 sentences expanding on the problem)",
    "pain_points": [
      {
        "icon": "string (lucide icon name)",
        "title": "string (4-6 words)",
        "description": "string (1-2 sentences)"
      }
    ],
    "stat_callout": {
      "number": "string (big scary number)",
      "label": "string (what it represents)",
      "source": "string (credibility)"
    }
  },
  
  "solution_section": {
    "section_id": "solution",
    "eyebrow": "string",
    "headline": "string (introduce the solution)",
    "description": "string (how it solves the problem)",
    "features": [
      {
        "icon": "string (lucide icon name)",
        "title": "string (benefit-focused, 3-5 words)",
        "description": "string (1-2 sentences, specific outcome)"
      }
    ],
    "visual": {
      "type": "screenshot | diagram | video",
      "description": "string"
    }
  },
  
  "how_it_works": {
    "section_id": "how-it-works",
    "eyebrow": "string",
    "headline": "string",
    "steps": [
      {
        "number": 1,
        "title": "string (action verb + object)",
        "description": "string (what happens, 1-2 sentences)",
        "visual_description": "string"
      }
    ]
  },
  
  "social_proof": {
    "section_id": "proof",
    "eyebrow": "string",
    "headline": "string",
    "testimonials": [
      {
        "quote": "string (specific, includes numbers if possible)",
        "author": "string (realistic name)",
        "role": "string (job title or context)",
        "company": "string (or personal context)",
        "avatar_description": "string",
        "result": "string (quantified outcome if applicable)"
      }
    ],
    "stats": [
      {
        "number": "string",
        "label": "string",
        "context": "string (optional detail)"
      }
    ],
    "logos": {
      "headline": "string (e.g., 'Trusted by teams at')",
      "companies": ["string (realistic company names)"]
    },
    "trust_badges": [
      {
        "icon": "string",
        "text": "string (e.g., 'HIPAA Compliant', '256-bit encryption')"
      }
    ]
  },
  
  "pricing": {
    "section_id": "pricing",
    "eyebrow": "string",
    "headline": "string",
    "subheadline": "string (address pricing objections)",
    "plans": [
      {
        "name": "string",
        "price": "string (include period or model)",
        "price_detail": "string (billing clarification)",
        "description": "string (who this is for)",
        "features": ["string"],
        "cta": "string",
        "highlighted": false,
        "badge": "string (optional, e.g., 'Most Popular')"
      }
    ],
    "guarantee": {
      "headline": "string",
      "description": "string"
    },
    "pricing_note": "string (any important clarification)"
  },
  
  "faq": {
    "section_id": "faq",
    "headline": "string",
    "questions": [
      {
        "question": "string (actual customer question)",
        "answer": "string (direct, helpful answer)"
      }
    ]
  },
  
  "final_cta": {
    "section_id": "cta",
    "headline": "string (urgent, benefit-focused)",
    "subheadline": "string (overcome final objection)",
    "cta_text": "string",
    "trust_element": "string (final reassurance)"
  },
  
  "footer": {
    "tagline": "string (memorable closer)",
    "links": {
      "product": ["Features", "Pricing", "How it Works"],
      "company": ["About", "Blog", "Careers"],
      "legal": ["Privacy", "Terms", "Security"],
      "support": ["Help Center", "Contact", "Status"]
    },
    "social": ["twitter", "linkedin", "instagram"],
    "newsletter": {
      "headline": "string",
      "placeholder": "string",
      "cta": "string"
    }
  }
}
```

---

## COPY GUIDELINES

### Headlines
- Lead with the transformation, not the technology
- Use numbers when possible
- Address the reader directly ("you", "your")
- Create urgency without being sleazy

### Pain Points
- Be specific and visceral
- Use numbers to quantify the pain
- Make the reader nod in recognition

### Features/Benefits
- Lead with the benefit, explain the feature
- "So you can..." or "Which means..."
- One clear idea per feature

### Testimonials
- Include specific results/numbers
- Match testimonials to target personas
- Vary the contexts (different roles, situations)

### CTAs
- Use action verbs
- Reduce friction ("Start free", "See it in action")
- Add trust signals nearby

### Pricing
- Anchor with value before showing price
- Show the math on savings/ROI
- Address "what if it doesn't work" objection

---

## DESIGN DIRECTION

For a {{category}} product targeting {{type}} customers:

- **Tone:** [Professional/Friendly/Urgent/Reassuring based on context]
- **Visuals:** [Product-focused/Emotional/Data-driven based on category]
- **Proof emphasis:** [Stats/Testimonials/Logos based on trust needs]
- **CTA style:** [Soft/Direct/Urgent based on buyer journey]

---

## OUTPUT

Return valid JSON only. No markdown code blocks, no explanation, no preamble. The output should be directly parseable.
```

---

## Example: BillSlash Landing Page

### Input Variables

```json
{
  "title": "BillSlash",
  "slug": "billslash",
  "one_liner": "AI that negotiates medical bills down to what you actually owe",
  "problem": "Hospital bills are marked up 300-1000%. $100B+ in overcharges annually. 80% of bills contain errors. Patients don't know prices are negotiable or that charity care exists. Medical debt is the #1 cause of bankruptcy.",
  "target_customer": "Patients facing medical bills over $1,000, especially uninsured or underinsured",
  "solution": "Upload your medical bill. AI identifies billing errors, compares to fair pricing databases, checks your eligibility for charity care and financial assistance programs, and generates negotiation letters. For complex cases, connects to professional negotiators who work on contingency.",
  "monetization": "25% of savings achieved (no savings, no fee), capped at $1,000 per bill. Enterprise tier for employers at $3/employee/month for preventive bill review.",
  "category": "ai_tools",
  "type": "b2c",
  "demand_score": 91,
  "demand_band": "high",
  "trend_label": "rising",
  "competition_level": "low",
  "why_now": "Price transparency regulations now require hospitals to post prices. This data makes AI negotiation possible for the first time.",
  "market_size": "$100B+ in medical bill overcharges annually. 100M Americans have medical debt.",
  "life_change_factor": "Saves families from bankruptcy. Average savings of $3,000-$10,000 per major medical event."
}
```

### Expected Output

```json
{
  "meta": {
    "title": "BillSlash – Cut Your Medical Bills by 50-80% with AI",
    "description": "Upload your hospital bill, find errors automatically, and get professional negotiation letters. No savings, no fee. Average user saves $4,200.",
    "og_image_concept": "Split screen: LEFT shows a scary $12,847 hospital bill with red warning stamps. RIGHT shows the same bill crossed out with '$3,420' in green, with a happy family in the background. BillSlash logo prominent."
  },
  
  "hero": {
    "headline": "Stop Overpaying for Healthcare. Fight Back with AI.",
    "subheadline": "Upload your medical bill. Our AI finds errors, compares fair prices, and generates negotiation letters that actually work. Average savings: $4,200.",
    "cta_primary": {
      "text": "Analyze My Bill Free",
      "subtext": "No savings, no fee. Takes 2 minutes."
    },
    "cta_secondary": {
      "text": "See how it works",
      "url": "#how-it-works"
    },
    "social_proof_snippet": "Already helped 12,000+ patients save over $51M in medical bills",
    "hero_visual": {
      "type": "product_screenshot",
      "description": "Clean dashboard showing a bill being analyzed: original amount $8,450, identified errors highlighted in red, fair price comparison showing $2,890, and a generated negotiation letter preview. Progress bar showing 'Savings Found: $5,560'. Subtle animations on the error detection."
    }
  },
  
  "problem_section": {
    "section_id": "problem",
    "eyebrow": "The Healthcare Billing Crisis",
    "headline": "You're Being Overcharged. And They're Counting on You Not Fighting Back.",
    "description": "Hospital billing isn't just confusing—it's designed to extract maximum payment from people at their most vulnerable. The same procedure can cost $500 at one hospital and $15,000 at another. And 80% of bills contain errors in the hospital's favor.",
    "pain_points": [
      {
        "icon": "alert-triangle",
        "title": "Bills Marked Up 300-1000%",
        "description": "Hospitals charge wildly different prices for the same procedures. That $47 aspirin? It costs them $0.10. Without insider knowledge, you have no way to know what's fair."
      },
      {
        "icon": "file-x",
        "title": "80% of Bills Contain Errors",
        "description": "Duplicate charges, services never rendered, incorrect codes—billing departments make mistakes constantly. And those 'mistakes' always seem to be in their favor."
      },
      {
        "icon": "help-circle",
        "title": "Charity Care Exists But Nobody Tells You",
        "description": "Most hospitals have financial assistance programs that can reduce or eliminate your bill. They're legally required to offer them—but they won't mention it unless you ask."
      },
      {
        "icon": "trending-down",
        "title": "#1 Cause of Bankruptcy",
        "description": "Medical debt destroys more American families than credit cards, mortgages, and student loans combined. Two-thirds of bankruptcies are tied to medical bills."
      }
    ],
    "stat_callout": {
      "number": "$100B+",
      "label": "in medical bill overcharges every year in the US",
      "source": "JAMA Internal Medicine"
    }
  },
  
  "solution_section": {
    "section_id": "solution",
    "eyebrow": "The Solution",
    "headline": "AI That Fights Your Medical Bills Like a Pro—For a Fraction of the Cost",
    "description": "BillSlash uses the same pricing databases and negotiation tactics that professional medical bill advocates use, but automated and accessible to everyone. Upload your bill, and we do the rest.",
    "features": [
      {
        "icon": "scan",
        "title": "Instant Error Detection",
        "description": "Our AI scans your bill against thousands of common billing errors—duplicate charges, unbundling schemes, incorrect codes, and services you never received."
      },
      {
        "icon": "scale",
        "title": "Fair Price Comparison",
        "description": "We compare your charges against Medicare rates, hospital pricing data (now public!), and what others paid for the same procedures in your area."
      },
      {
        "icon": "heart-handshake",
        "title": "Charity Care Eligibility Check",
        "description": "Based on your income and the hospital's policies, we identify financial assistance programs you may qualify for—programs hospitals won't mention voluntarily."
      },
      {
        "icon": "file-text",
        "title": "Professional Negotiation Letters",
        "description": "Get attorney-quality demand letters citing specific regulations, fair pricing data, and the exact language that gets billing departments to take you seriously."
      },
      {
        "icon": "users",
        "title": "Expert Backup When You Need It",
        "description": "For complex cases or tough hospitals, connect with professional medical bill negotiators who work on contingency—they only get paid if you save money."
      }
    ],
    "visual": {
      "type": "screenshot",
      "description": "Three-panel product walkthrough: 1) Upload interface with drag-and-drop bill, 2) Analysis results showing errors and fair price, 3) Generated negotiation letter with one-click send option."
    }
  },
  
  "how_it_works": {
    "section_id": "how-it-works",
    "eyebrow": "Simple Process",
    "headline": "From Overwhelming Bill to Massive Savings in 3 Steps",
    "steps": [
      {
        "number": 1,
        "title": "Upload Your Bill",
        "description": "Take a photo or upload a PDF of your medical bill. Our AI extracts every line item, code, and charge automatically. Takes about 30 seconds.",
        "visual_description": "Phone camera pointed at a hospital bill, with a glowing scan effect and extracted data appearing beside it"
      },
      {
        "number": 2,
        "title": "Get Your Savings Report",
        "description": "Within minutes, see exactly where you're being overcharged. We show billing errors, fair price comparisons, and every assistance program you qualify for.",
        "visual_description": "Dashboard showing a pie chart of 'overcharges found' with itemized list: duplicate charge, inflated rate, charity care eligible"
      },
      {
        "number": 3,
        "title": "Send & Save",
        "description": "Download professional negotiation letters or send them directly to the billing department. Track your case and watch your bill shrink. Average savings: $4,200.",
        "visual_description": "Before/after bill comparison with a large green checkmark, showing original $9,400 reduced to $2,800"
      }
    ]
  },
  
  "social_proof": {
    "section_id": "proof",
    "eyebrow": "Real Results",
    "headline": "Thousands of Patients Have Saved Millions",
    "testimonials": [
      {
        "quote": "I had a $23,000 bill after my daughter's emergency appendectomy. BillSlash found $6,800 in duplicate charges and got me approved for the hospital's charity program. Final bill: $2,100. I literally cried.",
        "author": "Maria Rodriguez",
        "role": "Mother of two",
        "company": "Austin, TX",
        "avatar_description": "Latina woman in her 40s, warm smile, casual professional attire",
        "result": "Saved $20,900 (91%)"
      },
      {
        "quote": "As a freelancer without insurance, I thought I was stuck with my $8,400 ER bill. BillSlash showed me the same procedure averaged $1,900 in my area and generated a letter citing hospital price transparency requirements. Settled for $2,200.",
        "author": "James Chen",
        "role": "Freelance Designer",
        "company": "Portland, OR",
        "avatar_description": "Asian man in his 30s, creative casual style, glasses",
        "result": "Saved $6,200 (74%)"
      },
      {
        "quote": "I'm a nurse—I know hospital billing is broken. When my mom got a $45,000 bill for her knee replacement, even I didn't know where to start. BillSlash found the hospital was charging 4x the Medicare rate and connected us with a negotiator. Final bill: $11,200.",
        "author": "Patricia Williams",
        "role": "Registered Nurse",
        "company": "Chicago, IL",
        "avatar_description": "Black woman in her 50s, professional, confident demeanor",
        "result": "Saved $33,800 (75%)"
      }
    ],
    "stats": [
      {
        "number": "$51M+",
        "label": "Total savings for patients",
        "context": "and counting"
      },
      {
        "number": "12,000+",
        "label": "Bills analyzed",
        "context": "in the last 12 months"
      },
      {
        "number": "73%",
        "label": "Average bill reduction",
        "context": "across all users"
      },
      {
        "number": "94%",
        "label": "Success rate",
        "context": "in finding savings"
      }
    ],
    "logos": {
      "headline": "As featured in",
      "companies": ["The New York Times", "NPR", "CNBC", "Kaiser Health News", "Consumer Reports"]
    },
    "trust_badges": [
      {
        "icon": "shield-check",
        "text": "HIPAA Compliant"
      },
      {
        "icon": "lock",
        "text": "256-bit Encryption"
      },
      {
        "icon": "award",
        "text": "BBB A+ Rated"
      },
      {
        "icon": "check-circle",
        "text": "SOC 2 Certified"
      }
    ]
  },
  
  "pricing": {
    "section_id": "pricing",
    "eyebrow": "Simple, Fair Pricing",
    "headline": "No Savings? No Fee. It's That Simple.",
    "subheadline": "We only make money when you save money. If we can't reduce your bill, you pay nothing.",
    "plans": [
      {
        "name": "Single Bill",
        "price": "25% of savings",
        "price_detail": "Capped at $1,000 max",
        "description": "For individuals with a medical bill to fight",
        "features": [
          "AI-powered bill analysis",
          "Error and overcharge detection",
          "Fair price comparison report",
          "Charity care eligibility check",
          "Professional negotiation letter",
          "Email support"
        ],
        "cta": "Analyze My Bill",
        "highlighted": true,
        "badge": "Most Popular"
      },
      {
        "name": "Family Plan",
        "price": "$29/month",
        "price_detail": "Cancel anytime",
        "description": "For families managing multiple medical situations",
        "features": [
          "Unlimited bill analyses",
          "Priority processing",
          "Phone support",
          "Dedicated account manager",
          "Proactive insurance review",
          "Explanation of Benefits monitoring"
        ],
        "cta": "Start Family Plan",
        "highlighted": false,
        "badge": null
      },
      {
        "name": "Enterprise",
        "price": "$3/employee/mo",
        "price_detail": "Billed annually",
        "description": "For employers offering this as a benefit",
        "features": [
          "All Family Plan features",
          "Employee onboarding portal",
          "Usage analytics dashboard",
          "HR admin tools",
          "Dedicated success manager",
          "Custom integrations"
        ],
        "cta": "Contact Sales",
        "highlighted": false,
        "badge": null
      }
    ],
    "guarantee": {
      "headline": "100% No-Risk Guarantee",
      "description": "If we don't find any savings on your bill, you pay absolutely nothing. And even if we do find savings, you're never obligated to use our letters or negotiation services. You stay in complete control."
    },
    "pricing_note": "The 25% fee is only charged on confirmed savings—meaning money that actually comes off your final bill or is approved through financial assistance. We don't charge on 'potential' or 'estimated' savings."
  },
  
  "faq": {
    "section_id": "faq",
    "headline": "Questions? We've Got Answers.",
    "questions": [
      {
        "question": "How do you find errors and overcharges in my bill?",
        "answer": "Our AI cross-references your bill against multiple databases: Medicare pricing data, hospital chargemasters (now legally required to be public), fair health pricing benchmarks, and patterns from the thousands of bills we've analyzed. We flag duplicate charges, unbundled codes (where one procedure is split into multiple charges), and prices significantly above fair market rates."
      },
      {
        "question": "What if the hospital refuses to negotiate?",
        "answer": "Our letters cite specific regulations (like the No Surprises Act and state-level patient protection laws) that hospitals must follow. In our experience, 89% of hospitals respond positively to a well-documented request. For tough cases, we can connect you with professional medical bill advocates who specialize in negotiation and work on contingency."
      },
      {
        "question": "Is my medical information secure?",
        "answer": "Absolutely. We're HIPAA compliant, SOC 2 certified, and use bank-level 256-bit encryption. Your bills are analyzed by our AI—no humans see your personal health information. You can request deletion of your data at any time."
      },
      {
        "question": "How long does the process take?",
        "answer": "The initial analysis takes 2-5 minutes. Most hospitals respond to negotiation letters within 2-4 weeks. Full resolution (including financial assistance applications if applicable) typically takes 4-8 weeks, though some cases resolve faster."
      },
      {
        "question": "Do I need to be uninsured to use BillSlash?",
        "answer": "No! We help everyone—uninsured, underinsured, and fully insured patients. Even with insurance, you can face massive bills from out-of-network charges, high deductibles, or services your plan doesn't cover. We've found savings for patients at every coverage level."
      },
      {
        "question": "What if my bill is from collections?",
        "answer": "We can still help. In fact, bills in collections are often more negotiable because collectors bought your debt for pennies on the dollar. We'll analyze the original charges, identify errors, and help you negotiate a settlement that's actually fair—often 20-40% of the collection amount."
      },
      {
        "question": "When do I pay the 25% fee?",
        "answer": "Only after savings are confirmed—meaning the hospital has agreed to reduce your bill or you've been approved for financial assistance. You'll see exactly how much you saved before we charge anything. And remember, we cap our fee at $1,000 max, no matter how much you save."
      }
    ]
  },
  
  "final_cta": {
    "section_id": "cta",
    "headline": "That Bill Sitting on Your Counter? It's Probably Wrong.",
    "subheadline": "Join 12,000+ patients who refused to overpay. Upload your bill in 2 minutes and see exactly how much you could save—completely free.",
    "cta_text": "Analyze My Bill Free",
    "trust_element": "No credit card required • No savings, no fee • HIPAA compliant"
  },
  
  "footer": {
    "tagline": "Fighting unfair medical bills, one family at a time.",
    "links": {
      "product": ["How It Works", "Pricing", "For Employers", "Success Stories"],
      "company": ["About Us", "Our Mission", "Press", "Careers"],
      "legal": ["Privacy Policy", "Terms of Service", "HIPAA Compliance", "Security"],
      "support": ["Help Center", "Contact Us", "FAQ", "Bill Upload Guide"]
    },
    "social": ["twitter", "facebook", "linkedin", "instagram"],
    "newsletter": {
      "headline": "Get healthcare billing tips & advocacy updates",
      "placeholder": "Enter your email",
      "cta": "Subscribe"
    }
  }
}
```

---

## Usage Notes

### For Developers
1. Parse the JSON output into your component system
2. Map `icon` fields to your icon library (Lucide recommended)
3. Use `visual.description` fields for designer briefs or AI image generation
4. The structure supports both static generation and dynamic rendering

### For Designers
1. Each section is self-contained and can be styled independently
2. Visual descriptions provide creative direction without being prescriptive
3. Mobile-first: all sections should stack cleanly
4. Maintain the emotional arc: Problem → Solution → Proof → Action

### For Content Teams
1. All copy is placeholder-quality but should be reviewed for brand voice
2. Testimonials are fictional—replace with real customer stories
3. Stats should be updated with actual metrics as they become available
4. FAQ questions are based on common objections—monitor support tickets for more

---

## Variations by Category

| Category | Tone | Visual Focus | Proof Type | CTA Style |
|----------|------|--------------|------------|-----------|
| `ai_tools` | Innovative, trustworthy | Product screenshots, AI visualization | Before/after results | Direct trial |
| `saas` (B2B) | Professional, efficient | Dashboard UI, workflow diagrams | ROI stats, logos | Demo/trial |
| `healthcare` | Compassionate, secure | People, trust badges | Testimonials, compliance | Soft start |
| `finance` | Authoritative, clear | Numbers, charts | Security badges, stats | Calculate/estimate |
| `creator` | Energetic, aspirational | Creator content, results | Follower/revenue growth | Free tier |
| `dev_tools` | Technical, no-nonsense | Code, architecture | GitHub stars, adoption | Docs/sandbox |

---

## Quality Checklist

Before using generated output:

- [ ] All placeholder values ({{variable}}) are replaced
- [ ] Testimonial names/details are realistic for target market
- [ ] Stats are believable (not "1 million users" for a new product)
- [ ] CTAs match the actual product offering
- [ ] Trust badges reflect actual certifications
- [ ] FAQ questions address real objections
- [ ] Pricing matches the idea's monetization strategy
- [ ] Mobile reading flow makes sense (headlines → subheads → CTAs)
