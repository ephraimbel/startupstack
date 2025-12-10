-- UGCContracts Seed Data (idea_054)
-- Professional UGC contracts in 60 seconds

INSERT INTO ideas (
  id, user_id, title, one_liner, problem, target_customer, solution, monetization,
  tags, keywords, status, demand_score, demand_band, trend_label, validation_summary,
  validated_at, is_public, is_saved, created_at, updated_at, why_now, revenue_impact,
  market_size, competition_level, category, business_type, price_range
) VALUES (
  'ugccontracts-054',
  NULL,
  'UGCContracts',
  'Professional UGC contracts in 60 seconds, no lawyer needed',
  'UGC creators and brands waste hours negotiating contract terms over email and DMs. Standard templates don''t properly cover usage rights, revision limits, exclusivity periods, or platform-specific terms. Disputes happen because terms were unclear, and both sides lack documentation when things go wrong.',
  'UGC creators doing 5+ brand deals monthly who need professional contracts without paying a lawyer for each one',
  'Answer simple questions about your deal. UGCContracts generates a complete, legally sound contract covering deliverables, payment terms, usage rights, exclusivity, revision limits, and cancellation clauses. Both parties sign digitally. A dashboard tracks all active agreements and alerts before renewals or exclusivity periods expire.',
  '$15/month for 10 contracts, $29/month unlimited. Free tier includes 1 contract/month. Brand tier at $49/month for multi-creator management.',
  ARRAY['legal', 'creator-tools', 'contracts', 'ugc', 'automation'],
  NULL,
  'validated',
  85,
  'high',
  'rising',
  NULL,
  NULL,
  TRUE,
  FALSE,
  NOW(),
  NOW(),
  'UGC exploded post-2020—brands now spend billions on creator content for ads. But contracts haven''t kept up. Horror stories of usage rights violations, payment disputes, and content theft are everywhere. Creators are professionalizing and demanding better protection.',
  'Professional contracts protect high-value deals. Each contract could protect $5K-$50K+ deals. Proper terms prevent disputes and ensure creators get paid for extended usage.',
  '$8B UGC and influencer content market',
  'Medium',
  'legal',
  'b2b2c',
  'smb'
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  one_liner = EXCLUDED.one_liner,
  problem = EXCLUDED.problem,
  target_customer = EXCLUDED.target_customer,
  solution = EXCLUDED.solution,
  monetization = EXCLUDED.monetization,
  tags = EXCLUDED.tags,
  demand_score = EXCLUDED.demand_score,
  demand_band = EXCLUDED.demand_band,
  trend_label = EXCLUDED.trend_label,
  why_now = EXCLUDED.why_now,
  revenue_impact = EXCLUDED.revenue_impact,
  market_size = EXCLUDED.market_size,
  competition_level = EXCLUDED.competition_level,
  category = EXCLUDED.category,
  business_type = EXCLUDED.business_type,
  price_range = EXCLUDED.price_range,
  updated_at = NOW();

-- Insert landing page for UGCContracts
INSERT INTO landing_pages (idea_id, slug, content, is_published, created_at, updated_at)
VALUES (
  'ugccontracts-054',
  'ugccontracts',
  '{
    "meta": {
      "title": "UGCContracts — Professional Creator Contracts in 60 Seconds",
      "description": "Generate legally binding UGC contracts with usage rights, payment terms, and revision limits. E-sign included. Protect your work without a lawyer."
    },
    "hero": {
      "headline": "UGC contracts in 60 seconds",
      "subheadline": "Stop negotiating over DMs. Generate professional contracts that protect your work, your rights, and your payment.",
      "cta_primary": "Create My First Contract Free",
      "cta_secondary": "See a sample contract →",
      "social_proof": {
        "stats": [
          "2,847 contracts created",
          "$12.4M in deals protected",
          "3.2 average days to signature"
        ]
      }
    },
    "problem_section": {
      "headline": "DM deals are risky deals",
      "pain_points": [
        {
          "pain": "''I''ll pay you when it goes live'' — and then silence",
          "detail": "Without a contract, you have no recourse when brands ghost, delay, or refuse to pay.",
          "stat": "67% of creators have experienced payment disputes"
        },
        {
          "pain": "Your UGC ends up everywhere you didn''t agree to",
          "detail": "That one TikTok you made? Now it''s on billboards, TV ads, and their website. Where''s your cut?",
          "stat": "89% of usage rights violations happen without contracts"
        },
        {
          "pain": "Endless revisions without extra pay",
          "detail": "''Just one more tweak'' turns into 10 rounds. Without revision limits in writing, you''re stuck.",
          "stat": "Average 7.3 revision rounds without limits"
        }
      ]
    },
    "solution_section": {
      "headline": "Everything agreed. Everything written.",
      "features": [
        {
          "title": "60-Second Contracts",
          "description": "Answer a few questions. Get a complete, professional contract. No templates to customize.",
          "icon": "clock"
        },
        {
          "title": "Usage Rights Clarity",
          "description": "Specify exactly where and how long your content can be used. No surprises.",
          "icon": "shield"
        },
        {
          "title": "Built-in E-Signature",
          "description": "Both parties sign digitally. Legally binding. No need for DocuSign.",
          "icon": "signature"
        },
        {
          "title": "Revision Limits",
          "description": "Define how many revisions are included. Extra rounds = extra payment.",
          "icon": "layers"
        },
        {
          "title": "Payment Terms",
          "description": "Due dates, payment schedules, late fees—all spelled out.",
          "icon": "dollar"
        },
        {
          "title": "Track Everything",
          "description": "Dashboard shows all your contracts, deadlines, and exclusivity periods.",
          "icon": "dashboard"
        }
      ]
    },
    "how_it_works": {
      "headline": "Three steps to protection",
      "steps": [
        {
          "step": 1,
          "title": "Answer questions about your deal",
          "description": "Deliverables, timeline, payment, usage rights. Takes 60 seconds."
        },
        {
          "step": 2,
          "title": "Review your contract",
          "description": "We generate a complete agreement. Review, edit if needed."
        },
        {
          "step": 3,
          "title": "Send and sign",
          "description": "Send to the brand. Both sign digitally. Done."
        }
      ]
    },
    "social_proof": {
      "headline": "Creators are protecting their work",
      "testimonials": [
        {
          "quote": "I went from handshake deals to professional contracts. Brands take me more seriously and I''ve avoided two payment disputes already.",
          "author": "Sarah Chen",
          "title": "Beauty Creator, 125K followers"
        },
        {
          "quote": "The usage rights clarity saved me $15K. A brand wanted to use my content in TV ads but only paid for organic posts. The contract made it clear they needed to pay more.",
          "author": "Marcus Johnson",
          "title": "Fitness Creator, 89K followers"
        },
        {
          "quote": "As a brand, we love working with creators who use UGCContracts. Everything is clear upfront, no confusion later.",
          "author": "Lisa Park",
          "title": "Marketing Manager, DTC Brand"
        }
      ]
    },
    "pricing": {
      "headline": "Your first contract is free",
      "subheadline": "Because your work deserves protection from day one.",
      "tiers": [
        {
          "name": "Free",
          "price": "$0",
          "billing": "forever",
          "target": "Trying out, occasional deals",
          "features": [
            "1 contract per month",
            "Basic contract types",
            "E-signature included",
            "PDF download"
          ],
          "limitations": [
            "1 contract/month",
            "No tracking/alerts",
            "UGCContracts branding"
          ],
          "cta": "Start Free"
        },
        {
          "name": "Creator",
          "price": "$15",
          "billing": "per month",
          "annual_price": "$12",
          "target": "Active UGC creators with regular brand deals",
          "features": [
            "10 contracts/month",
            "All contract types",
            "Custom branding (your logo)",
            "Date tracking & alerts",
            "Contract library",
            "Priority support"
          ],
          "cta": "Start 14-day Free Trial",
          "popular": true
        },
        {
          "name": "Pro Creator",
          "price": "$29",
          "billing": "per month",
          "annual_price": "$24",
          "target": "Full-time UGC creators, high volume",
          "features": [
            "Unlimited contracts",
            "Custom clause library",
            "Duplicate from past contracts",
            "Analytics dashboard",
            "Invoice generation (coming soon)"
          ],
          "cta": "Start 14-day Free Trial"
        },
        {
          "name": "Brand / Agency",
          "price": "$49",
          "billing": "per month",
          "annual_price": "$40",
          "target": "Brands and agencies managing multiple creators",
          "features": [
            "Unlimited contracts",
            "Multi-creator management",
            "White-label contracts",
            "Team access (3 seats)",
            "Bulk send",
            "API access"
          ],
          "cta": "Contact Sales"
        }
      ]
    },
    "faq": [
      {
        "question": "Are these contracts legally binding?",
        "answer": "Yes. Our contracts are designed by legal professionals and signed using legally recognized e-signature technology. They''re as binding as traditional paper contracts."
      },
      {
        "question": "Do I need a lawyer?",
        "answer": "For standard UGC deals, no. Our contracts cover the key terms. For complex situations or large deals, we recommend consulting a lawyer."
      },
      {
        "question": "Can the brand edit the contract?",
        "answer": "You control the contract. If a brand wants changes, they can request them and you can accept or negotiate. Nothing changes without your approval."
      },
      {
        "question": "What types of deals are covered?",
        "answer": "UGC for ads, organic posts, whitelisting agreements, product-only deals, and more. We cover the common deal structures in the creator economy."
      },
      {
        "question": "What about usage rights?",
        "answer": "Our contracts specifically address where content can be used (organic, paid, TV, etc.), how long (30 days, 1 year, perpetual), and geographic limits. This is the #1 thing that causes disputes—we make it crystal clear."
      },
      {
        "question": "Can brands use UGCContracts too?",
        "answer": "Absolutely. We have a Brand tier for companies working with multiple creators. Fair contracts work for everyone."
      }
    ],
    "final_cta": {
      "headline": "Your next deal deserves a contract",
      "subheadline": "Create your first one free. Takes 60 seconds.",
      "cta": "Create My Contract Free"
    }
  }'::jsonb,
  TRUE,
  NOW(),
  NOW()
) ON CONFLICT (slug) DO UPDATE SET
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert execution plan with Tier 1 deliverable content for UGCContracts
INSERT INTO execution_plans (idea_id, user_id, elevator_pitch, persona, user_stories, recommended_stack, launch_checklist, created_at)
VALUES (
  'ugccontracts-054',
  NULL,
  '{
    "problem_statement": "UGC creators and brands waste hours negotiating contract terms over email and DMs. Standard templates don''t properly cover usage rights, revision limits, exclusivity periods, or platform-specific terms. Disputes happen because terms were unclear, and both sides lack documentation when things go wrong.",
    "solution_summary": "Answer simple questions about your deal. UGCContracts generates a complete, legally sound contract covering deliverables, payment terms, usage rights, exclusivity, revision limits, and cancellation clauses. Both parties sign digitally. A dashboard tracks all active agreements and alerts before renewals or exclusivity periods expire.",
    "target_customer": {
      "primary": "UGC creators doing 5+ brand deals monthly who need professional contracts without paying a lawyer for each one",
      "secondary": "DTC brands and agencies working with multiple UGC creators who need consistent, protective agreements",
      "market_size_estimate": {
        "tam": "$8B UGC and influencer content market",
        "sam": "$200M creator business tools (contracts, invoicing, etc.)",
        "som": "$20M UGC-specific contract and legal tools"
      }
    },
    "why_now": "UGC exploded post-2020—brands now spend billions on creator content for ads. But contracts haven''t kept up. Horror stories of usage rights violations, payment disputes, and content theft are everywhere. Creators are professionalizing and demanding better protection."
  }',
  
  '{
    "primary_persona": {
      "name": "Ashley Rodriguez",
      "age": 27,
      "title": "Full-time UGC Creator",
      "background": "Former marketing coordinator turned full-time content creator. Creates UGC for beauty and lifestyle brands.",
      "goals": [
        "Protect herself from payment disputes and usage rights violations",
        "Look more professional when working with brands",
        "Save time on contract negotiations",
        "Ensure fair compensation for her work"
      ],
      "pain_points": [
        "Brands often want to negotiate over email/DMs which takes forever",
        "Has been burned by brands using content beyond what was agreed",
        "Doesn''t want to pay $500+ per contract for a lawyer",
        "Generic contract templates don''t cover UGC-specific terms",
        "Tracking multiple brand deals and their terms is overwhelming"
      ],
      "behavior": [
        "Does 8-12 brand collaborations per month",
        "Primarily creates for Instagram, TikTok, and YouTube Shorts",
        "Charges $800-3000 per campaign depending on deliverables",
        "Active in creator Facebook groups and Discord communities"
      ],
      "tech_comfort": "High - uses Canva, scheduling tools, analytics platforms"
    },
    "secondary_persona": {
      "name": "David Chen",
      "age": 32,
      "title": "Marketing Manager, DTC Brand",
      "background": "Manages influencer partnerships for a growing skincare brand. Works with 20+ creators monthly.",
      "goals": [
        "Streamline creator contract process",
        "Ensure proper usage rights for paid advertising",
        "Reduce legal costs and contract negotiation time",
        "Build long-term relationships with reliable creators"
      ],
      "pain_points": [
        "Each creator has different contract preferences",
        "Legal team is expensive for routine creator agreements",
        "Usage rights disputes hurt brand relationships",
        "Manual tracking of creator agreements and exclusivity periods"
      ]
    }
  }',
  
  ARRAY[
    '{"title": "As a UGC creator, I want to generate a contract in under 2 minutes", "description": "So I can quickly formalize brand partnerships without lengthy negotiations", "acceptance_criteria": ["Contract questionnaire takes <90 seconds to complete", "Generated contract is comprehensive and ready to send", "Can preview contract before sending to brand"]}',
    '{"title": "As a creator, I want clear usage rights in my contracts", "description": "So brands cant use my content beyond what we agreed to", "acceptance_criteria": ["Contract specifies platforms (organic social, paid ads, website, etc.)", "Duration of usage is clearly defined", "Geographic restrictions if applicable", "Additional payment required for extended usage"]}',
    '{"title": "As a creator, I want to track all my active contracts", "description": "So I know when deals expire and can plan renewals", "acceptance_criteria": ["Dashboard shows all contracts with status", "Alerts before exclusivity periods expire", "Reminders for payment due dates", "Easy to see which brands I am currently working with"]}',
    '{"title": "As a brand manager, I want to send consistent contracts to all creators", "description": "So our legal terms are standardized and fair", "acceptance_criteria": ["Can set default terms for our brand", "All creator contracts follow same structure", "Legal team only needs to review template once"]}',
    '{"title": "As a brand, I want creators to sign contracts quickly", "description": "So we can move fast on campaign timelines", "acceptance_criteria": ["E-signature process is simple for creators", "No account creation required for brands to sign", "Automatic reminders if contract isnt signed"]}'
  ],
  
  '{
    "recommended_stack": {
      "frontend": "Next.js 14 — Good form handling, fast pages",
      "backend": "Next.js API Routes + Supabase — Stores contracts, handles auth",
      "database": "Supabase (Postgres) — User accounts, contracts, signatures",
      "auth": "Supabase Auth — Email/password + magic links",
      "payments": "Stripe — Subscription billing",
      "hosting": "Vercel — Simple deployment",
      "e_signature": "DocuSign API or Dropbox Sign API — Legal e-signatures",
      "pdf_generation": "React-PDF or Puppeteer — Contract PDF exports",
      "key_integrations": [
        "DocuSign or HelloSign API — Legally binding signatures",
        "Resend or Postmark — Email notifications and contract delivery",
        "Cal.com or Calendly API — Optional deadline reminders"
      ]
    },
    "build_vs_buy": [
      {
        "component": "E-Signature",
        "recommendation": "Buy (DocuSign/HelloSign API)",
        "reasoning": "E-signatures have legal requirements. Use a proven provider for liability protection."
      },
      {
        "component": "Contract Generation",
        "recommendation": "Build (template engine + optional AI)",
        "reasoning": "This is core IP. Build flexible template system with clause libraries."
      },
      {
        "component": "Contract Templates",
        "recommendation": "Build with lawyer review",
        "reasoning": "Have a lawyer review and approve your base templates. One-time cost, ongoing value."
      }
    ],
    "estimated_cost": {
      "0_100_users": "$100-300/mo (Vercel free, Supabase free, $100-200 e-sign API)",
      "100_1000_users": "$400-1,000/mo (E-sign costs scale with volume)",
      "1000_10000_users": "$2,000-5,000/mo (Negotiate volume pricing with e-sign provider)"
    }
  }',
  
  ARRAY[
    'Legal review of contract templates completed',
    'Contract generation engine functional',
    'E-signature integration working',
    'Landing page with creator testimonials live',
    'Creator community partnerships established',
    'Payment processing and subscription tiers operational',
    'Beta testing with 25+ real UGC creators completed',
    'Product Hunt launch assets prepared'
  ],

  NOW()
);