-- PodPitch Seed Data (idea_026)
-- AI-powered podcast outreach platform for founders and executives

INSERT INTO ideas (
  id, user_id, title, one_liner, problem, target_customer, solution, monetization,
  tags, keywords, status, demand_score, demand_band, trend_label, validation_summary,
  validated_at, is_public, is_saved, created_at, updated_at, why_now, revenue_impact,
  market_size, competition_level, category, business_type, price_range
) VALUES (
  'podpitch-026',
  NULL,
  'PodPitch',
  'Get booked on podcasts that matter',
  'Podcast guesting is the highest-ROI marketing channel nobody uses well. A single 45-minute interview reaches thousands of qualified listeners, builds lasting authority, and generates backlinks—all for free. But the process is broken: finding relevant shows takes hours of research, crafting personalized pitches is tedious, tracking outreach is chaos, and follow-ups fall through the cracks. Most founders send 5 generic pitches, get rejected or ignored, and give up.',
  'Founders, consultants, and B2B executives who want to build authority and drive qualified leads through podcast appearances',
  'Access a database of 50,000+ podcasts with audience size, topic focus, and booking contact information. Describe your expertise once—AI writes personalized pitches for each show based on the host''s style, past episodes, and audience interests. Track your outreach pipeline, automate follow-ups, and see which shows actually book guests like you. Go from cold pitching to confirmed bookings without the manual grind.',
  '$79/month (20 pitches), $179/month (50 pitches), $399/month (unlimited + team). Free tier: 5 AI pitches/month.',
  ARRAY['ai', 'podcast-outreach', 'b2b-marketing', 'authority-building', 'sales', 'pr'],
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
  'Perfect timing: (1) Podcast listenership hit 500M+ globally—audiences are larger than ever, (2) B2B buyers increasingly trust podcast guests over ads—72% have purchased after hearing a founder on a show, (3) AI can now write genuinely personalized pitches that don''t feel templated, (4) Traditional PR agencies charge $10K+/month but podcast booking is the one thing founders can do themselves—with the right tools.',
  'Founders save $30K+ annually compared to agencies while maintaining full control. One booked podcast can generate $10K+ in qualified leads for B2B founders. Average user books 2+ shows monthly, building lasting authority and reach.',
  '$500M podcast PR and guesting services',
  'Medium',
  'marketing',
  'b2b',
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

-- Insert landing page for PodPitch
INSERT INTO landing_pages (idea_id, slug, content, is_published, created_at, updated_at)
VALUES (
  'podpitch-026',
  'podpitch',
  '{
    "meta": {
      "title": "PodPitch — Get Booked on Podcasts That Matter",
      "description": "AI-powered podcast outreach for founders. 50K+ shows, personalized pitches, full pipeline management. Book appearances without agency fees.",
      "og_image_concept": "Professional dashboard showing podcast database with AI-generated pitch preview and booking pipeline. Clean, data-forward design with founder testimonials overlay."
    },
    "hero": {
      "headline": "Get booked on podcasts that reach your customers",
      "subheadline": "50K+ podcasts. AI-personalized pitches. Full pipeline management. Book appearances that build authority—without hiring an agency.",
      "cta_primary": {
        "text": "Start Free — 5 Pitches Included",
        "url": "/signup"
      },
      "cta_secondary": {
        "text": "See how it works →",
        "url": "#how-it-works"
      },
      "social_proof_snippet": "Join founders booking 5-10 podcasts per month",
      "hero_visual": {
        "type": "product_screenshot",
        "description": "Professional dashboard showing podcast search results with AI-generated pitch preview and pipeline kanban view. Clean, data-forward design."
      }
    }
  }'::jsonb,
  TRUE,
  NOW(),
  NOW()
) ON CONFLICT (slug) DO UPDATE SET
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert execution plan with Tier 1 deliverable content for PodPitch
INSERT INTO execution_plans (idea_id, user_id, elevator_pitch, persona, user_stories, recommended_stack, launch_checklist, created_at)
VALUES (
  'podpitch-026',
  NULL,
  '{
    "problem_statement": "Podcast guesting is the highest-ROI marketing channel nobody uses well. Finding relevant shows takes hours, crafting personalized pitches is tedious, tracking outreach is chaos, and follow-ups fall through cracks. Most founders send 5 generic pitches, get rejected, and give up—missing the best marketing channel for authority building.",
    "solution_summary": "Access 50,000+ podcasts with verified contacts. AI writes personalized pitches analyzing host style, recent episodes, and audience interests. Complete pipeline management tracks outreach from draft to booked appearance. Automated follow-ups ensure no opportunities slip through cracks.",
    "target_customer": {
      "primary": "Founders, consultants, B2B executives who want to build authority and drive qualified leads through podcast appearances",
      "secondary": "Authors, course creators, coaches launching products who need visibility in specific niches",
      "market_size_estimate": {
        "tam": "$5B personal branding and PR services market",
        "sam": "$500M podcast PR and guesting services",
        "som": "$50M founders and thought leaders actively seeking podcast opportunities"
      }
    },
    "why_now": "Perfect timing: (1) Podcast listenership hit 500M+ globally, (2) B2B buyers trust podcast guests over ads—72% purchased after hearing founder on show, (3) AI can write genuinely personalized pitches that don''t feel templated, (4) Traditional agencies charge $10K+/month but podcast booking is something founders can do themselves with right tools."
  }',

  '{
    "direct_competitors": [
      {
        "name": "Podmatch",
        "url": "https://podmatch.com",
        "positioning": "Two-sided marketplace matching podcast hosts and guests",
        "pricing": "$25/mo Guest, $50/mo Host, $99/mo Both",
        "strengths": ["Large network of shows", "Hosts actively seeking guests", "Simple matching system"],
        "weaknesses": ["Passive—you wait for matches instead of proactively pitching", "Quality varies wildly", "Limited personalization", "No outreach management"]
      },
      {
        "name": "Podchaser",
        "url": "https://podchaser.com",
        "positioning": "Podcast database and discovery platform",
        "pricing": "Free basic, $99/mo Pro for contact info",
        "strengths": ["Comprehensive database", "Good filtering", "Industry standard"],
        "weaknesses": ["Database only—no pitch assistance", "Contact info often outdated", "No outreach tracking", "No AI personalization"]
      },
      {
        "name": "Podcast Bookers (Agency)",
        "url": "https://podcastbookers.com",
        "positioning": "Done-for-you podcast booking agency",
        "pricing": "$2,500-$5,000/month",
        "strengths": ["Full-service", "Established relationships", "High-touch"],
        "weaknesses": ["Expensive", "You lose control", "Cookie-cutter pitches", "3-6 month commitments"]
      },
      {
        "name": "Kitcaster",
        "url": "https://kitcaster.com",
        "positioning": "Podcast PR agency with tech platform",
        "pricing": "$2,000-$4,000/month",
        "strengths": ["Quality show targeting", "Experienced team", "Good for enterprise"],
        "weaknesses": ["Agency model pricing", "Minimum commitments", "Not self-serve"]
      }
    ],
    "indirect_competitors": [
      "Traditional PR agencies ($10K-$30K/month retainers)",
      "Manual research + cold email (free but 10+ hours per show pitched)",
      "LinkedIn outreach to hosts (hit-or-miss, no tracking)",
      "Hiring a VA to research and pitch ($500-2K/month, inconsistent quality)",
      "Ignoring podcasts entirely and relying on paid ads (most common)"
    ],
    "market_gaps": [
      "No tool combines database + AI pitches + outreach tracking in one place",
      "Existing databases have stale contact info—80% of emails bounce",
      "AI pitch tools write generic copy that hosts immediately recognize",
      "No one shows booking success rates by show—you pitch blind",
      "Follow-up automation is absent—the #1 reason pitches fail",
      "No learning from successful bookings—what worked stays in founders'' heads"
    ]
  }',

  ARRAY[
    '{
      "positioning_statement": "For founders and thought leaders who want to build authority through podcast appearances, PodPitch is an AI-powered outreach platform that finds relevant shows, writes personalized pitches, and manages your booking pipeline. Unlike podcast databases that give you raw data or agencies that charge $3K/month, we help you run pro-level podcast PR yourself.",
      "unique_value_proposition": "Find shows. Write pitches. Book appearances. One platform.",
      "key_differentiators": [
        "AI-personalized pitches: Not templates—actual personalization based on each show''s style and recent episodes",
        "Verified contacts: We verify booking contacts quarterly, not scrape stale data",
        "Booking intelligence: See which shows actually book external guests and their acceptance patterns",
        "Full pipeline: Track pitches, automate follow-ups, manage scheduling—not just a database",
        "Success patterns: Learn from what''s working across thousands of successful bookings"
      ],
      "category": "Podcast PR automation (creating subcategory: ''Self-Serve Podcast Booking'')"
    }',

    '{
      "core_features": [
        {
          "feature": "Expert Profile Builder",
          "description": "Create your guest profile with expertise areas, talking points, past appearances, and bio variations. This powers all AI pitch personalization.",
          "priority": "P0",
          "effort": "Small"
        },
        {
          "feature": "Podcast Database",
          "description": "Search 50K+ podcasts by topic, audience size, episode frequency, and guest acceptance rate. Filter by niche, format (interview vs solo), and booking method.",
          "priority": "P0",
          "effort": "Large"
        },
        {
          "feature": "AI Pitch Generator",
          "description": "Generate personalized pitch emails for each show. AI analyzes recent episodes, host style, and audience to craft relevant hooks and topic suggestions.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Verified Contact Info",
          "description": "Display verified booking contacts (email, form URL, or submission process). Flag stale contacts and update quarterly.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Pitch Pipeline",
          "description": "Track every pitch: Draft → Sent → Opened → Replied → Booked. Kanban view of your outreach funnel.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Follow-Up Automation",
          "description": "Schedule automatic follow-up emails if no response. Customizable sequences (3-5 touches). Stop on reply.",
          "priority": "P1",
          "effort": "Medium"
        },
        {
          "feature": "Show Research Cards",
          "description": "Quick research summaries per show: host background, recent topics, guest patterns, audience demographics, and suggested talking points.",
          "priority": "P1",
          "effort": "Medium"
        },
        {
          "feature": "Pitch Analytics",
          "description": "Track open rates, response rates, and booking rates by show category, pitch style, and subject line. Learn what''s working.",
          "priority": "P1",
          "effort": "Small"
        },
        {
          "feature": "Calendar Integration",
          "description": "Sync with Google Calendar or Calendly. When a booking is confirmed, schedule the recording and add prep reminders.",
          "priority": "P1",
          "effort": "Small"
        },
        {
          "feature": "Media Kit Export",
          "description": "Generate a one-page media kit PDF with your bio, topics, and past appearances to attach to pitches.",
          "priority": "P1",
          "effort": "Small"
        }
      ],
      "post_mvp_features": [
        "Chrome extension to pitch shows while browsing",
        "Direct integrations with podcast booking forms",
        "Interview prep guides per show (topics to mention, host preferences)",
        "Appearance tracker with episode links and metrics",
        "Team workspaces for PR agencies",
        "Referral network (past guests who can introduce you)",
        "Podcast host mode (find guests for your show)",
        "API for CRM integration",
        "Done-for-you concierge tier"
      ],
      "out_of_scope": [
        "Podcast production or editing (use Riverside, Squadcast)",
        "Content repurposing from appearances (use RepurposeAI)",
        "Full PR services beyond podcasts",
        "Podcast hosting platform",
        "Podcast advertising/sponsorship management"
      ],
      "mvp_timeline": "8-10 weeks for solo developer, 5-6 weeks for small team"
    }',

    '{
      "recommended_stack": {
        "frontend": "Next.js 14 (App Router) — Great for data-heavy apps, server components for database views",
        "backend": "Next.js API Routes + Supabase Edge Functions — Simple, scales well, serverless",
        "database": "Supabase (Postgres) — Complex queries for podcast filtering, full-text search",
        "auth": "Supabase Auth — Email/password + Google OAuth",
        "payments": "Stripe — Subscription management, usage-based for pitch credits",
        "hosting": "Vercel — Edge deployment, great DX",
        "ai_ml": "OpenAI GPT-4 (pitch generation) + Claude for longer research summaries",
        "email": "Resend or Postmark — Transactional email for pitch sending",
        "email_tracking": "Custom pixel tracking or Mailgun — Open/click tracking",
        "key_integrations": [
          "OpenAI API — GPT-4 for pitch personalization",
          "Resend — Sending pitches from custom domains",
          "Google Calendar API — Booking scheduling",
          "Calendly API — Optional scheduling integration",
          "Hunter.io or Apollo — Email verification backup"
        ]
      },
      "build_vs_buy": [
        {
          "component": "Podcast Database",
          "recommendation": "Build + License (ListenNotes API as base)",
          "reasoning": "ListenNotes has podcast metadata. Supplement with custom contact scraping and verification. This is core IP—invest here."
        },
        {
          "component": "AI Pitch Generation",
          "recommendation": "Build (on GPT-4)",
          "reasoning": "Use GPT-4 but invest heavily in prompt engineering and fine-tuning. The pitch quality is your differentiator."
        },
        {
          "component": "Email Sending",
          "recommendation": "Buy (Resend)",
          "reasoning": "Email deliverability is hard. Resend handles reputation, DKIM, warming. Focus on pitches, not infrastructure."
        },
        {
          "component": "Contact Verification",
          "recommendation": "Buy (Hunter.io) + Build (custom verification)",
          "reasoning": "Use Hunter for initial verification, but build custom checks for podcast-specific contacts (forms, social DMs)."
        },
        {
          "component": "Email Tracking",
          "recommendation": "Build (simple) or Buy (Mailgun)",
          "reasoning": "Basic pixel tracking is simple to build. For robust analytics, use Mailgun or similar."
        }
      ],
      "estimated_monthly_cost": {
        "0_100_users": "$100-250/mo (Vercel free, Supabase free, ~$50 OpenAI, ~$50 ListenNotes, ~$30 Resend)",
        "100_1000_users": "$500-1,500/mo (Vercel Pro, Supabase Pro, ~$300 OpenAI, ~$200 ListenNotes, ~$100 Resend)",
        "1000_10000_users": "$3,000-8,000/mo (Scale with API costs, email volume, database size)"
      }
    }'
  ],

  '{
    "pricing_model": "Subscription with pitch credits",
    "pricing_rationale": "Podcast guesting is high-intent—users will pay for quality. Pitch-based pricing aligns cost with value delivered. Free tier lets users experience the database and AI quality before committing.",
    "tiers": [
      {
        "name": "Free",
        "price": "$0",
        "target_customer": "Exploring podcast guesting, testing the platform",
        "features": [
          "Browse podcast database",
          "5 AI-generated pitches/month",
          "Basic pitch tracking",
          "Media kit template"
        ],
        "limitations": [
          "5 pitches/month cap",
          "No follow-up automation",
          "Limited contact info access",
          "No analytics"
        ]
      },
      {
        "name": "Starter",
        "price": "$79/month ($66/mo annual)",
        "target_customer": "Founders actively building podcast presence",
        "features": [
          "20 AI-generated pitches/month",
          "Full podcast database access",
          "Verified contact info",
          "Pitch pipeline tracking",
          "Basic follow-up sequences (3 touches)",
          "Show research cards",
          "Pitch analytics",
          "Calendar integration"
        ],
        "limitations": [
          "20 pitches/month",
          "Single user",
          "Standard support"
        ]
      },
      {
        "name": "Growth",
        "price": "$179/month ($149/mo annual)",
        "target_customer": "Serious about podcast PR, booking multiple shows monthly",
        "features": [
          "50 AI-generated pitches/month",
          "Everything in Starter",
          "Advanced follow-up sequences (5 touches)",
          "A/B test pitch variants",
          "Booking success patterns",
          "Priority database updates",
          "Interview prep guides",
          "Appearance tracker"
        ],
        "limitations": [
          "50 pitches/month",
          "Single user"
        ]
      },
      {
        "name": "Agency",
        "price": "$399/month ($333/mo annual)",
        "target_customer": "PR agencies and consultants managing multiple clients",
        "features": [
          "Unlimited pitches",
          "Everything in Growth",
          "5 client workspaces",
          "White-label pitch sending",
          "Team collaboration",
          "API access",
          "Dedicated success manager",
          "Custom reporting"
        ],
        "limitations": []
      }
    ],
    "free_tier_strategy": "Free tier shows database quality and AI pitch capability. 5 pitches is enough to book 1-2 shows if they''re good, proving value. Limited contacts push conversion.",
    "annual_discount": "17% discount (2 months free) for annual plans",
    "pricing_psychology": "Starter at $79 is 1/30th the cost of agencies. Growth at $179 captures power users—still cheaper than one VA hour per pitch. Agency at $399 is value pricing for firms billing $5K+/client."
  }',

  ARRAY[
    '{
      "brand_name": "PodPitch",
      "tagline": "Get booked on podcasts that matter.",
      "brand_personality": [
        "Professional — This is business development, not a hobby",
        "Efficient — Respects busy founders'' time",
        "Strategic — Podcast guesting as a growth lever, not vanity",
        "Confident — You belong on these shows, we help you prove it",
        "Insider — Knows how podcast booking actually works"
      ],
      "brand_voice": {
        "tone": "Knowledgeable and direct. Like a mentor who''s booked 100+ podcasts sharing what actually works.",
        "do": [
          "Use founder language (growth, pipeline, ROI, authority)",
          "Be specific about outcomes (bookings, not just pitches)",
          "Reference real podcast dynamics",
          "Give tactical advice",
          "Celebrate booked appearances"
        ],
        "dont": [
          "Don''t be salesy or hype-driven",
          "Don''t promise viral fame or overnight success",
          "Don''t talk like a generic SaaS product",
          "Don''t underestimate the user—they''re smart founders",
          "Don''t ignore the relationship aspect of podcast guesting"
        ]
      },
      "visual_direction": {
        "color_palette": {
          "primary": "#0F766E (Teal) — Professional, trustworthy, stands out from purple/blue SaaS",
          "secondary": "#134E4A (Dark teal) — Depth, sophistication",
          "accent": "#F59E0B (Amber) — Energy, highlights, CTAs, success states",
          "neutrals": ["#F8FAFC (off-white)", "#0F172A (near-black)"]
        },
        "typography": {
          "display": "DM Sans or Satoshi — Modern, professional, approachable",
          "body": "Inter — Clean, readable"
        },
        "visual_style": "Professional but not corporate. Clean layouts with strategic use of color. Podcast imagery (waveforms, microphones) used sparingly. Data-forward UI showing pipeline and metrics."
      },
      "messaging": {
        "elevator_pitch_10s": "PodPitch helps founders get booked on podcasts—with AI-powered pitches and a database of 50K+ shows.",
        "elevator_pitch_30s": "Want to build authority and reach your target customers? Podcast guesting is the best marketing channel nobody uses well. PodPitch gives you a database of 50K+ shows with verified contacts, AI that writes personalized pitches for each one, and a pipeline to track everything. Stop paying agencies $3K/month or spending hours on research—book podcasts yourself.",
        "key_messages": [
          "Your expertise deserves an audience.",
          "Stop pitching blind. Know which shows book guests like you.",
          "AI pitches that don''t sound like AI pitches.",
          "The agency results without the agency fees.",
          "One booked podcast > 100 cold emails."
        ]
      }
    }',

    '{
      "hero": {
        "headline": "Get booked on podcasts that reach your customers",
        "subheadline": "50K+ podcasts. AI-personalized pitches. Full pipeline management. Book appearances that build authority—without hiring an agency.",
        "cta_primary": {
          "text": "Start Free — 5 Pitches Included",
          "url": "/signup"
        },
        "cta_secondary": {
          "text": "See how it works →",
          "url": "#how-it-works"
        }
      },
      "problem_section": {
        "headline": "Podcast guesting works. The process doesn''t.",
        "pain_points": [
          {
            "pain": "Finding shows is a full-time job",
            "detail": "Hours of Googling, scrolling Apple Podcasts, and checking if they even take guests. You''ve got a company to run."
          },
          {
            "pain": "Generic pitches get ignored",
            "detail": "Hosts receive 50+ pitches weekly. Templated emails go straight to trash. Personalization takes 20+ minutes per show."
          },
          {
            "pain": "Follow-ups fall through the cracks",
            "detail": "You pitch 10 shows, get busy, forget to follow up. 80% of bookings come from follow-ups. Opportunities lost."
          }
        ]
      },
      "solution_section": {
        "headline": "Professional podcast PR. Do it yourself.",
        "features": [
          {
            "title": "50K+ Podcast Database",
            "description": "Search by topic, audience size, and guest acceptance rate. Find shows your customers actually listen to.",
            "icon_suggestion": "Database/search icon"
          },
          {
            "title": "AI-Personalized Pitches",
            "description": "Not templates. AI analyzes each show''s style, recent episodes, and audience to write pitches that get replies.",
            "icon_suggestion": "Sparkles/AI icon"
          },
          {
            "title": "Verified Contacts",
            "description": "Booking emails and submission forms verified quarterly. Stop bouncing off dead addresses.",
            "icon_suggestion": "Checkmark/verified icon"
          },
          {
            "title": "Pipeline Management",
            "description": "Track every pitch from draft to booked. Never lose track of a warm lead again.",
            "icon_suggestion": "Kanban/pipeline icon"
          },
          {
            "title": "Automated Follow-Ups",
            "description": "Schedule follow-up sequences that stop on reply. Persistence without the awkwardness.",
            "icon_suggestion": "Repeat/automation icon"
          },
          {
            "title": "Booking Intelligence",
            "description": "See which shows actually book external guests and what pitches work. Stop guessing.",
            "icon_suggestion": "Chart/analytics icon"
          }
        ]
      },
      "how_it_works": {
        "headline": "From pitch to booking in three steps",
        "steps": [
          {
            "step": 1,
            "title": "Build your profile",
            "description": "Tell us your expertise, talking points, and past appearances. This powers personalized pitches across every show."
          },
          {
            "step": 2,
            "title": "Find and pitch shows",
            "description": "Search our database, select relevant podcasts, and let AI write personalized pitches in seconds."
          },
          {
            "step": 3,
            "title": "Track and book",
            "description": "Manage your pipeline, automate follow-ups, and convert interested hosts into booked appearances."
          }
        ]
      },
      "social_proof": {
        "headline": "Founders are booking 5-10 podcasts per month",
        "testimonial_placeholders": [
          "SaaS founder testimonial about qualified leads from appearances",
          "Author testimonial about book launch PR success",
          "Consultant testimonial about client pipeline from podcast authority"
        ],
        "stats_to_display": [
          "25,000+ pitches sent",
          "18% average response rate",
          "50,000+ podcasts in database",
          "7.3 average bookings per active user"
        ]
      },
      "pricing_section": {
        "headline": "A fraction of agency fees. Full control.",
        "subheadline": "Start free. No credit card required."
      },
      "faq": [
        {
          "question": "How is this different from podcast agencies?",
          "answer": "Agencies charge $2-5K/month and send generic pitches. PodPitch gives you the same tools and database for 1/30th the cost, with AI personalization that''s often better than junior PR associates."
        },
        {
          "question": "What makes the AI pitches different?",
          "answer": "We don''t just fill in [PODCAST NAME]. Our AI reads recent episodes, understands host preferences, and suggests relevant talking points. Hosts tell us they can''t tell it''s AI—it just sounds like a founder who did their homework."
        },
        {
          "question": "How do you verify contact information?",
          "answer": "We verify booking contacts quarterly through a mix of automated email validation, manual checks, and user feedback. Stale contacts are flagged and updated. Our bounce rate is under 5%."
        },
        {
          "question": "What if I''ve never been on a podcast before?",
          "answer": "Perfect—everyone starts somewhere. We have guides on pitching without prior appearances and help you identify smaller shows where first-time guests are welcome. Build your portfolio, then level up."
        },
        {
          "question": "Can I see results before subscribing?",
          "answer": "Yes. The free tier includes 5 AI-generated pitches so you can test pitch quality and browse our database. Most users book at least one show before upgrading."
        },
        {
          "question": "Do you help with interview prep?",
          "answer": "Growth tier includes interview prep guides for each show—topics to mention, host preferences, and what makes appearances memorable. We''re working on AI-powered prep coaching for 2025."
        }
      ],
      "final_cta": {
        "headline": "Your expertise deserves an audience",
        "subheadline": "Join founders booking 5-10 podcasts per month. Start free with 5 AI pitches.",
        "cta": "Start Pitching Free →"
      },
      "meta": {
        "page_title": "PodPitch — Get Booked on Podcasts That Matter",
        "meta_description": "AI-powered podcast outreach for founders. 50K+ shows, personalized pitches, full pipeline management. Book appearances without agency fees."
      }
    }',

    '{
      "pre_launch": {
        "4_weeks_before": [
          {"task": "Build initial podcast database (10K+ shows with contacts)", "category": "Product", "critical": true},
          {"task": "MVP with profile builder, search, and pitch generation", "category": "Product", "critical": true},
          {"task": "Landing page live with waitlist", "category": "Marketing", "critical": true},
          {"task": "Create demo video showing pitch flow", "category": "Marketing", "critical": true},
          {"task": "Set up PostHog for product analytics", "category": "Product", "critical": true},
          {"task": "Begin building in public on Twitter/X", "category": "Marketing", "critical": false}
        ],
        "2_weeks_before": [
          {"task": "Beta test with 20-30 founders across niches", "category": "Product", "critical": true},
          {"task": "Collect booking success stories from beta", "category": "Marketing", "critical": true},
          {"task": "Fix critical bugs and improve pitch quality", "category": "Product", "critical": true},
          {"task": "Prepare Product Hunt assets", "category": "Marketing", "critical": true},
          {"task": "Reach out to founder communities for launch support", "category": "Marketing", "critical": false},
          {"task": "Set up Stripe billing and test all tiers", "category": "Product", "critical": true}
        ],
        "1_week_before": [
          {"task": "Final product walkthrough", "category": "Product", "critical": true},
          {"task": "Write launch Twitter thread with case studies", "category": "Marketing", "critical": true},
          {"task": "Reach out to startup newsletters", "category": "Marketing", "critical": false},
          {"task": "Prepare Product Hunt first comment", "category": "Marketing", "critical": true},
          {"task": "Test full signup → pitch → track flow", "category": "Product", "critical": true}
        ],
        "day_before": [
          {"task": "Schedule all launch posts", "category": "Marketing", "critical": true},
          {"task": "Brief supporters for PH launch", "category": "Marketing", "critical": false},
          {"task": "Clear calendar for launch day", "category": "Personal", "critical": true},
          {"task": "Get good sleep", "category": "Personal", "critical": true}
        ]
      },
      "launch_day": [
        {"time": "12:01 AM PT", "task": "Product Hunt goes live", "platform": "Product Hunt"},
        {"time": "6:00 AM", "task": "Post maker comment with founder story", "platform": "Product Hunt"},
        {"time": "7:00 AM", "task": "Launch Twitter thread", "platform": "Twitter/X"},
        {"time": "8:00 AM", "task": "Post in founder Slack communities", "platform": "Slack"},
        {"time": "9:00 AM", "task": "Send launch email to waitlist", "platform": "Email"},
        {"time": "10:00 AM", "task": "LinkedIn launch post", "platform": "LinkedIn"},
        {"time": "11:00 AM", "task": "Post in Indie Hackers", "platform": "Indie Hackers"},
        {"time": "All day", "task": "Reply to every PH comment", "platform": "Product Hunt"},
        {"time": "All day", "task": "Engage with social mentions", "platform": "All"},
        {"time": "Evening", "task": "Share day 1 results and thank you", "platform": "Twitter/X"}
      ],
      "post_launch": {
        "week_1": [
          "Respond to all user feedback within 24 hours",
          "Ship fixes for any critical bugs",
          "Follow up with free users who haven''t pitched",
          "Celebrate first successful bookings publicly",
          "Publish ''building PodPitch'' thread"
        ],
        "week_2_4": [
          "Implement top feature requests (likely more shows, better filtering)",
          "Expand database to 25K+ podcasts",
          "Create tutorial content (how to pitch different niches)",
          "Reach out to startup podcasts for partnerships",
          "Use PodPitch to get booked on podcasts (dogfooding!)"
        ],
        "month_2_3": [
          "Analyze conversion funnel and optimize",
          "A/B test pricing page",
          "Build SEO content targeting ''how to get on podcasts'' keywords",
          "Explore partnerships with PR consultants",
          "Consider affiliate program for referrals"
        ]
      },
      "launch_platforms": {
        "primary": ["Product Hunt", "Twitter/X"],
        "secondary": ["LinkedIn", "Indie Hackers"],
        "community": [
          "Founder Slack groups (Startup School, OnDeck alumni)",
          "r/Entrepreneur",
          "r/startups",
          "SaaS founder communities",
          "Author and book launch communities",
          "Podcast host communities (for reverse angle)"
        ]
      }
    }',

    '{
      "north_star_metric": {
        "metric": "Podcast Bookings Confirmed",
        "definition": "Total appearances marked as ''Booked'' or ''Recorded'' in user pipelines per week",
        "target_day_1": "10 bookings",
        "target_month_1": "100 bookings",
        "target_month_3": "500 bookings"
      },
      "acquisition_metrics": [
        {
          "metric": "Website visitors",
          "definition": "Unique visitors to marketing site",
          "target": "15K/month by month 3",
          "tool": "Plausible/PostHog"
        },
        {
          "metric": "Signup rate",
          "definition": "Visitors who create an account",
          "target": "6-10%",
          "tool": "PostHog"
        },
        {
          "metric": "Cost per signup",
          "definition": "Ad spend / signups",
          "target": "<$8",
          "tool": "Ad platforms"
        }
      ],
      "activation_metrics": [
        {
          "metric": "Profile completed",
          "definition": "% of signups who complete expert profile",
          "target": "70%+",
          "tool": "PostHog"
        },
        {
          "metric": "First pitch sent",
          "definition": "% of users who send at least 1 pitch",
          "target": "50%+",
          "tool": "PostHog"
        },
        {
          "metric": "Time to first pitch",
          "definition": "Minutes from signup to first pitch sent",
          "target": "<20 minutes",
          "tool": "PostHog"
        }
      ],
      "retention_metrics": [
        {
          "metric": "Week 1 retention",
          "definition": "% of users who return in week 2",
          "target": "35%+",
          "tool": "PostHog"
        },
        {
          "metric": "Monthly retention",
          "definition": "% of paying users active month-over-month",
          "target": "65%+ (campaign-based usage pattern)",
          "tool": "PostHog"
        },
        {
          "metric": "Pitches per user per month",
          "definition": "Average pitches sent by paying users",
          "target": "15+ pitches",
          "tool": "Database query"
        }
      ],
      "revenue_metrics": [
        {
          "metric": "Free to paid conversion",
          "definition": "% of free users who upgrade",
          "target": "10-15%",
          "tool": "Stripe + database"
        },
        {
          "metric": "MRR",
          "definition": "Monthly recurring revenue",
          "target": "$8K month 3, $25K month 6",
          "tool": "Stripe"
        },
        {
          "metric": "ARPU",
          "definition": "Average revenue per paying user",
          "target": "$100-130/month",
          "tool": "Stripe"
        },
        {
          "metric": "Churn rate",
          "definition": "% of paying users who cancel monthly",
          "target": "<8% (some natural churn after booking goals met)",
          "tool": "Stripe"
        }
      ],
      "unit_economics": {
        "target_cac": "$40-80 (paid), $0 (organic/referral)",
        "target_ltv": "$600+ (6+ month retention at $110 ARPU)",
        "target_ltv_cac_ratio": "8:1 or better",
        "target_payback_period": "1 month or less"
      }
    }'
  ],

  NOW()
);