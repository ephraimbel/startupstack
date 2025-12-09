# BillSlash Landing Page Generation Prompt (Ready to Use)

Copy and paste this entire prompt to generate a complete landing page for BillSlash.

---

You are a world-class conversion copywriter and UX designer creating a landing page for a startup. Your goal is to maximize signups while building trust and clearly communicating value.

## IDEA CONTEXT

**Product:** BillSlash
**One-liner:** AI that negotiates medical bills down to what you actually owe
**Problem:** Hospital bills are marked up 300-1000%. $100B+ in overcharges annually. 80% of bills contain errors. Patients don't know prices are negotiable or that charity care exists. Medical debt is the #1 cause of bankruptcy.
**Target Customer:** Patients facing medical bills over $1,000, especially uninsured or underinsured
**Solution:** Upload your medical bill. AI identifies billing errors, compares to fair pricing databases, checks your eligibility for charity care and financial assistance programs, and generates negotiation letters. For complex cases, connects to professional negotiators who work on contingency.
**Monetization:** 25% of savings achieved (no savings, no fee), capped at $1,000 per bill. Enterprise tier for employers at $3/employee/month for preventive bill review.
**Category:** ai_tools
**Type:** b2c

**Validation Data:**
- Demand Score: 91/100 (high)
- Trend: rising
- Competition: low

**Extended Context:**
- Why Now: Price transparency regulations now require hospitals to post prices. This data makes AI negotiation possible for the first time.
- Market Size: $100B+ in medical bill overcharges annually. 100M Americans have medical debt.
- Life Change Factor: Saves families from bankruptcy. Average savings of $3,000-$10,000 per major medical event.

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
    "eyebrow": "string (2-3 words)",
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
        "result": "string (quantified outcome)"
      }
    ],
    "stats": [
      {
        "number": "string",
        "label": "string",
        "context": "string"
      }
    ],
    "logos": {
      "headline": "string",
      "companies": ["string"]
    },
    "trust_badges": [
      {
        "icon": "string",
        "text": "string"
      }
    ]
  },
  
  "pricing": {
    "section_id": "pricing",
    "eyebrow": "string",
    "headline": "string",
    "subheadline": "string",
    "plans": [
      {
        "name": "string",
        "price": "string",
        "price_detail": "string",
        "description": "string",
        "features": ["string"],
        "cta": "string",
        "highlighted": false,
        "badge": "string or null"
      }
    ],
    "guarantee": {
      "headline": "string",
      "description": "string"
    },
    "pricing_note": "string"
  },
  
  "faq": {
    "section_id": "faq",
    "headline": "string",
    "questions": [
      {
        "question": "string",
        "answer": "string"
      }
    ]
  },
  
  "final_cta": {
    "section_id": "cta",
    "headline": "string (urgent, benefit-focused)",
    "subheadline": "string (overcome final objection)",
    "cta_text": "string",
    "trust_element": "string"
  },
  
  "footer": {
    "tagline": "string",
    "links": {
      "product": ["string"],
      "company": ["string"],
      "legal": ["string"],
      "support": ["string"]
    },
    "social": ["string"],
    "newsletter": {
      "headline": "string",
      "placeholder": "string",
      "cta": "string"
    }
  }
}
```

## COPY GUIDELINES

### For BillSlash specifically:

**Tone:** Compassionate but empowering. Patients are scared and overwhelmed—acknowledge that, then show them they have power.

**Emotional arc:**
1. Validate the fear and frustration (problem section)
2. Reveal the hidden truth (hospitals are overcharging, it's negotiable)
3. Provide hope and a clear path (solution + how it works)
4. Prove it works (social proof with specific numbers)
5. Remove all risk (pricing model + guarantee)
6. Create urgency without being sleazy (that bill is costing you money every day)

**Key messages to hit:**
- "No savings, no fee" is the core trust builder—emphasize it
- 80% error rate is shocking—use it
- Price transparency laws are new—this wasn't possible before
- Medical debt = #1 bankruptcy cause—the stakes are real
- Average savings $3-10K—make it concrete

**Visual direction:**
- Show the transformation: scary bill → manageable bill
- Use real-looking (but fake) bill screenshots
- Feature diverse patients/families
- HIPAA and security badges are crucial for healthcare

**Avoid:**
- Sounding like ambulance chasers
- Promising specific savings amounts as guaranteed
- Medical/legal jargon
- Anything that feels predatory or exploitative

## OUTPUT

Return valid JSON only. No markdown code blocks, no explanation, no preamble. The output should be directly parseable by JSON.parse().

Include:
- 4 pain points in problem section
- 5 features in solution section  
- 3 how-it-works steps
- 3 detailed testimonials with realistic names and specific savings amounts
- 4 stats in social proof
- 3 pricing tiers matching the monetization strategy
- 7 FAQ questions addressing common objections
- All other sections fully populated
