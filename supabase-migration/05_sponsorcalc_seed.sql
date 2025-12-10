-- SponsorCalc Seed Data (idea_051)
-- Creator sponsorship pricing intelligence platform

INSERT INTO ideas (
  id, user_id, title, one_liner, problem, target_customer, solution, monetization,
  tags, keywords, status, demand_score, demand_band, trend_label, validation_summary,
  validated_at, is_public, is_saved, created_at, updated_at, why_now, revenue_impact,
  market_size, competition_level, category, business_type, price_range
) VALUES (
  'sponsorcalc-001',
  NULL,
  'SponsorCalc',
  'Know your worth. Get data-backed sponsorship rates in seconds.',
  'Content creators leave money on the table because they don''t know what to charge for sponsorships. Without industry data, they guess rates, get lowballed by brands, or price themselves out of deals. There''s no standardized way to justify pricing, so negotiations become emotional instead of data-driven.',
  'Content creators with 10K-500K followers across YouTube, TikTok, Instagram, or podcasts doing 2+ brand deals per month. Secondary: Talent agencies and influencer marketing managers who need rate benchmarking at scale.',
  'Connect your social accounts. SponsorCalc analyzes engagement rates, audience demographics, niche CPMs, and comparable creator rates to generate professional rate cards with tiered pricing. Includes negotiation scripts, industry benchmarks, and media kit exports—everything you need to get paid what you''re worth.',
  '$19/month Creator plan (3 platforms, PDF export, negotiation scripts), $49/month Pro (unlimited platforms, custom branding), $99/month Agency (10 creators, white-label). Free tier: 1 platform, basic rates.',
  ARRAY['creator-tools', 'monetization', 'data-analytics', 'pricing', 'social-media'],
  NULL,
  'validated',
  89,
  'high',
  'rising',
  NULL,
  NULL,
  TRUE,
  FALSE,
  NOW(),
  NOW(),
  'Creator economy hit 50M+ people, but pricing remains opaque. Brands have sophisticated data; creators have guesswork. New platforms (TikTok, podcasts) have no pricing norms. Creator burnout often comes from underpricing—they work more because they earn less per deal.',
  'Creators increase rates by 20-40% using data-backed pricing. A single better-negotiated deal pays for years of subscription. Professional rate cards improve brand perception and deal close rates.',
  '$21B',
  'Medium',
  'creator-tools',
  'b2c',
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

-- Insert landing page for SponsorCalc
INSERT INTO landing_pages (idea_id, slug, content, is_published, created_at, updated_at)
VALUES (
  'sponsorcalc-001',
  'sponsorcalc',
  '{
    "meta": {
      "title": "SponsorCalc — Know What to Charge for Sponsorships",
      "description": "Get data-backed sponsorship rates based on your engagement and niche. Generate professional rate cards and negotiate with confidence."
    },
    "hero": {
      "headline": "Stop guessing what to charge for sponsorships",
      "subheadline": "Get data-backed rates based on your engagement, audience, and niche. Generate professional rate cards in seconds."
    }
  }'::jsonb,
  TRUE,
  NOW(),
  NOW()
) ON CONFLICT (slug) DO UPDATE SET
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert execution plan with comprehensive SponsorCalc deliverable content
INSERT INTO execution_plans (idea_id, user_id, elevator_pitch, persona, user_stories, recommended_stack, launch_checklist, created_at)
VALUES (
  'sponsorcalc-001',
  NULL,
  '{
    "problem_statement": "Content creators leave money on the table because they don''t know what to charge for sponsorships. Without industry data, they guess rates, get lowballed by brands, or price themselves out of deals. There''s no standardized way to justify pricing, so negotiations become emotional instead of data-driven.",
    "solution_summary": "Connect your social accounts. SponsorCalc analyzes engagement rates, audience demographics, niche CPMs, and comparable creator rates to generate professional rate cards with tiered pricing. Includes negotiation scripts, industry benchmarks, and media kit exports—everything you need to get paid what you''re worth.",
    "target_customer": {
      "primary": "Content creators with 10K-500K followers across YouTube, TikTok, Instagram, or podcasts doing 2+ brand deals per month",
      "secondary": "Talent agencies and influencer marketing managers who need rate benchmarking at scale",
      "market_size_estimate": {
        "tam": "$21B influencer marketing industry",
        "sam": "$500M creator tools for monetization",
        "som": "$30M mid-tier creators actively seeking pricing help"
      }
    },
    "why_now": "Creator economy hit 50M+ people, but pricing remains opaque. Brands have sophisticated data; creators have guesswork. New platforms (TikTok, podcasts) have no pricing norms. Creator burnout often comes from underpricing—they work more because they earn less per deal."
  }',

  '{
    "direct_competitors": [
      {
        "name": "Social Bluebook",
        "url": "https://socialbluebook.com",
        "positioning": "Calculate your social media value",
        "pricing": "Free basic, $9.99/mo Pro",
        "strengths": ["Established brand", "Free tier available", "Multi-platform"],
        "weaknesses": ["Outdated interface", "Valuations feel arbitrary", "No negotiation support"]
      },
      {
        "name": "FYPM (F*** You Pay Me)",
        "url": "https://fypm.vip",
        "positioning": "Crowdsourced brand deal database",
        "pricing": "Free access with contribution",
        "strengths": ["Real deal data from creators", "Community-driven", "Transparency focus"],
        "weaknesses": ["Requires sharing your deals", "Data can be inconsistent", "No personalized rates"]
      },
      {
        "name": "Creator Calculator",
        "url": "https://creatorcalculator.com",
        "positioning": "Simple follower-based rate calculator",
        "pricing": "Free",
        "strengths": ["Simple and fast", "No signup required"],
        "weaknesses": ["Overly simplistic (follower count only)", "No engagement analysis", "No rate card generation"]
      },
      {
        "name": "Aspire (formerly AspireIQ)",
        "url": "https://aspire.io",
        "positioning": "Brand-side influencer platform with creator rates",
        "pricing": "Enterprise",
        "strengths": ["Sophisticated data", "Brand relationships", "Full campaign management"],
        "weaknesses": ["Built for brands, not creators", "Expensive", "Creators don''t control their rates"]
      }
    ],
    "indirect_competitors": [
      "Asking other creators directly (unreliable, awkward)",
      "Googling ''how much to charge for sponsorships'' (generic advice)",
      "Talent managers who take 15-20% and set rates",
      "Flying blind and saying yes to whatever brands offer",
      "Spreadsheet templates from influencer courses"
    ],
    "market_gaps": [
      "No tool combines account data + engagement + niche CPMs + comparable creators",
      "Rate cards are manual to create and rarely professional",
      "No one helps with the NEGOTIATION, just the initial number",
      "Podcast and newsletter monetization is completely underserved",
      "Agency tools exist but nothing built creator-first"
    ]
  }',

  ARRAY[
    '{
      "positioning_statement": "For content creators tired of guessing what to charge, SponsorCalc is an AI-powered pricing platform that generates data-backed rate cards based on your actual performance. Unlike follower-count calculators, we analyze engagement, audience value, and market rates to ensure you never leave money on the table.",
      "unique_value_proposition": "Know your worth. Prove your worth. Get paid your worth.",
      "key_differentiators": [
        "Data-backed rates — Not follower count, but engagement + demographics + niche CPMs",
        "Professional rate cards — One-click export to PDF media kits",
        "Negotiation support — Scripts and tactics for common brand pushback",
        "Multi-platform — YouTube, TikTok, Instagram, podcasts, newsletters",
        "Agency-grade for creators — Same sophistication brands have, in your hands"
      ],
      "category": "Creator monetization tools (creating: ''Sponsorship pricing intelligence'')"
    }',

    '{
      "core_features": [
        {
          "feature": "Social Account Connection",
          "description": "OAuth connect Instagram, YouTube, TikTok. Pull followers, engagement, demographics automatically.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Manual Platform Entry",
          "description": "For platforms without API (podcasts, newsletters), enter stats manually.",
          "priority": "P0",
          "effort": "Small"
        },
        {
          "feature": "Rate Calculation Engine",
          "description": "Algorithm weighing engagement rate, niche CPMs, audience demographics, platform, and deliverable type.",
          "priority": "P0",
          "effort": "Large"
        },
        {
          "feature": "Tiered Rate Card",
          "description": "Generate pricing for different deliverables: posts, stories, videos, bundles. Low/mid/high ranges.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Rate Card PDF Export",
          "description": "Professional, branded PDF export suitable for sending to brands.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Industry Benchmarks",
          "description": "Show how your rates compare to creators in your niche and tier.",
          "priority": "P1",
          "effort": "Medium"
        },
        {
          "feature": "Negotiation Scripts",
          "description": "Pre-written responses to common brand objections (''Your rate is too high'', ''We have a limited budget'').",
          "priority": "P1",
          "effort": "Small"
        },
        {
          "feature": "Deal Tracker",
          "description": "Log past deals with rates and outcomes. Track your pricing history.",
          "priority": "P1",
          "effort": "Medium"
        }
      ],
      "post_mvp_features": [
        "Media kit builder (full kit, not just rates)",
        "Brand database with typical budgets",
        "Rate trend tracking over time",
        "AI pitch writer for brand outreach",
        "Contract templates and review",
        "Invoice generation",
        "Team/agency dashboard for multiple creators",
        "Integration with sponsorship marketplaces (Grin, etc.)"
      ],
      "out_of_scope": [
        "Sponsorship marketplace/matching (use Grin, AspireIQ)",
        "Contract negotiation or legal (use a lawyer)",
        "Payment processing (use PayPal/Stripe directly)",
        "Content creation tools",
        "Social media scheduling"
      ],
      "mvp_timeline": "5-7 weeks for solo developer, 4-5 weeks for small team"
    }',

    '{
      "recommended_stack": {
        "frontend": "Next.js 14 — Good for auth flows, PDF generation, SEO landing page",
        "backend": "Next.js API Routes + Supabase — Handles OAuth, stores user data",
        "database": "Supabase (Postgres) — User accounts, connected platforms, rate history",
        "auth": "Supabase Auth + social OAuth (Instagram, YouTube, TikTok APIs)",
        "payments": "Stripe — Subscription billing",
        "hosting": "Vercel — Simple deployment, good for API-heavy apps",
        "pdf_generation": "React-PDF or Puppeteer — For rate card exports",
        "key_integrations": [
          "Instagram Graph API — Followers, engagement, demographics",
          "YouTube Data API — Subscribers, views, engagement",
          "TikTok API — Followers, engagement (limited demographics)",
          "OpenAI — For negotiation script personalization"
        ]
      },
      "build_vs_buy": [
        {
          "component": "Social API Integrations",
          "recommendation": "Build (necessary for core product)",
          "reasoning": "Must connect directly to get accurate data. No shortcuts here."
        },
        {
          "component": "Rate Calculation Algorithm",
          "recommendation": "Build (this is the IP)",
          "reasoning": "The algorithm IS the product. Build and continuously improve based on deal outcome data."
        },
        {
          "component": "PDF Generation",
          "recommendation": "Buy/Library (React-PDF)",
          "reasoning": "PDF generation is commoditized. Use a library, focus on the design."
        },
        {
          "component": "Niche CPM Data",
          "recommendation": "Build (aggregate from multiple sources)",
          "reasoning": "Scrape industry reports, aggregate user-contributed data. This data is competitive advantage."
        }
      ],
      "estimated_monthly_cost": {
        "0_100_users": "$50-100/mo (Vercel free, Supabase free, minimal API costs)",
        "100_1000_users": "$200-500/mo (Supabase Pro, some OpenAI costs)",
        "1000_10000_users": "$500-1,500/mo (Scale with users, API rate limits)"
      }
    }'
  ],

  '{
    "pricing_model": "Freemium with feature gates",
    "pricing_rationale": "Free basic rate calculation hooks creators. Paid unlocks professional features (PDF export, negotiation support, benchmarks). Low cost-to-serve means generous free tier is sustainable.",
    "tiers": [
      {
        "name": "Free",
        "price": "$0",
        "target_customer": "Smaller creators exploring sponsorships",
        "features": [
          "1 platform connection",
          "Basic rate calculation",
          "Simple rate display (no PDF)",
          "Community benchmarks (anonymized)"
        ],
        "limitations": [
          "1 platform only",
          "No PDF export",
          "No negotiation scripts",
          "No deal tracking",
          "SponsorCalc branding on any shares"
        ]
      },
      {
        "name": "Creator",
        "price": "$19/month ($15/mo annual)",
        "target_customer": "Active creators doing regular brand deals",
        "features": [
          "3 platforms",
          "Full rate card with tiers",
          "Professional PDF export",
          "Negotiation script library",
          "Industry benchmarks",
          "Deal tracker",
          "Unlimited rate refreshes"
        ],
        "limitations": [
          "3 platforms",
          "No white-label",
          "No API access"
        ]
      },
      {
        "name": "Pro",
        "price": "$49/month ($40/mo annual)",
        "target_customer": "Full-time creators, multi-platform presence",
        "features": [
          "Unlimited platforms",
          "Custom branded media kit",
          "AI-personalized negotiation scripts",
          "Brand budget database",
          "Rate trend tracking",
          "Priority support",
          "Early access to features"
        ],
        "limitations": []
      },
      {
        "name": "Agency",
        "price": "$99/month ($80/mo annual)",
        "target_customer": "Talent managers and agencies",
        "features": [
          "Up to 10 creator profiles",
          "White-label PDF exports",
          "Bulk rate comparison",
          "Client management dashboard",
          "API access",
          "Dedicated support"
        ],
        "limitations": [
          "10 creators (more = custom pricing)"
        ]
      }
    ],
    "free_tier_strategy": "Free tier proves the value of data-backed rates. PDF export is the conversion lever—creators NEED professional rate cards to send to brands.",
    "annual_discount": "20% off annual plans (2.4 months free)",
    "pricing_psychology": "$19/mo pays for itself with a single better-negotiated deal. Position as ROI, not cost. Free tier creates habit, paid tier delivers professional credibility."
  }',

  ARRAY[
    '{
      "brand_name": "SponsorCalc",
      "tagline": "Know your worth.",
      "brand_personality": [
        "Empowering — Puts power in creators hands",
        "Confident — Helps creators negotiate from strength", 
        "Professional — Elevates creator businesses",
        "Data-driven — Decisions backed by numbers",
        "Creator-first — Built by people who get it"
      ],
      "brand_voice": {
        "tone": "Confident and supportive. Like a savvy friend who worked in the industry and now has your back.",
        "do": [
          "Emphasize empowerment (''You''re worth more than you think'')",
          "Use money language comfortably (''Get paid'', ''rates'', ''revenue'')",
          "Reference specific improvements (''20% higher rates'')",
          "Validate creator frustrations with brands",
          "Be direct about value"
        ],
        "dont": [
          "Don''t be preachy about money",
          "Don''t talk down to creators",
          "Don''t use corporate jargon",
          "Don''t promise specific dollar amounts (too variable)",
          "Don''t bash brands (creators need them)"
        ]
      },
      "visual_direction": {
        "color_palette": {
          "primary": "#10B981 (Emerald/Money Green) — Success, money, growth",
          "secondary": "#1F2937 (Slate) — Professional, sophisticated",
          "accent": "#F59E0B (Gold/Amber) — Premium, value, warmth",
          "neutrals": ["#F9FAFB", "#111827"]
        },
        "typography": {
          "display": "Satoshi or Clash Display — Modern, confident, premium feel",
          "body": "Inter — Clean, professional, readable"
        },
        "visual_style": "Premium but accessible. Money-adjacent colors without being tacky. Clean data visualizations. Show rate cards prominently. Professional enough that creators feel confident sending materials to Fortune 500 brands."
      },
      "messaging": {
        "elevator_pitch_10s": "SponsorCalc tells creators exactly what to charge brands—backed by data, not guesswork.",
        "elevator_pitch_30s": "Creators leave thousands on the table because they don''t know market rates. SponsorCalc analyzes your engagement, audience, and niche to generate professional rate cards with tiered pricing. Stop guessing, start knowing.",
        "key_messages": [
          "Know your worth.",
          "Data beats guesswork.",
          "Stop accepting whatever brands offer.",
          "Professional rates, professional rate cards.",
          "The same data brands have—now in your hands."
        ]
      }
    }',

    '{
      "hero": {
        "headline": "Stop guessing what to charge for sponsorships",
        "subheadline": "Get data-backed rates based on your engagement, audience, and niche. Generate professional rate cards in seconds.",
        "cta_primary": "Calculate My Rates — Free",
        "cta_secondary": "See example rate card →"
      },
      "problem_section": {
        "headline": "Brands have the data. You''re guessing.",
        "pain_points": [
          {
            "pain": "You have no idea what to charge",
            "detail": "Every creator asks the same question: ''Is this rate too high? Too low?'' Without data, you''re flying blind."
          },
          {
            "pain": "Brands lowball you constantly",
            "detail": "They know what other creators charge. You don''t. Guess who wins that negotiation?"
          },
          {
            "pain": "You can''t justify your rates",
            "detail": "When brands push back, you fold. You don''t have the data to stand your ground."
          }
        ]
      },
      "solution_section": {
        "headline": "Data-backed rates you can defend",
        "features": [
          {
            "title": "Connect Your Accounts",
            "description": "We pull your real engagement, demographics, and growth. No fake numbers.",
            "icon_suggestion": "Link/connect icon"
          },
          {
            "title": "AI-Powered Rate Calculation",
            "description": "Our algorithm factors engagement, niche CPMs, audience value, and market rates.",
            "icon_suggestion": "Calculator/AI icon"
          },
          {
            "title": "Professional Rate Cards",
            "description": "Export beautiful PDF rate cards ready to send to any brand.",
            "icon_suggestion": "Document/card icon"
          },
          {
            "title": "Tiered Pricing",
            "description": "Rates for every deliverable: posts, stories, videos, bundles. Low to premium tiers.",
            "icon_suggestion": "Layers/tiers icon"
          },
          {
            "title": "Negotiation Scripts",
            "description": "Know exactly what to say when brands push back on your rates.",
            "icon_suggestion": "Message/script icon"
          },
          {
            "title": "Industry Benchmarks",
            "description": "See how your rates compare to creators in your niche and follower range.",
            "icon_suggestion": "Chart/benchmark icon"
          }
        ]
      },
      "how_it_works": {
        "headline": "Know your worth in 3 steps",
        "steps": [
          {
            "step": 1,
            "title": "Connect your platforms",
            "description": "Link Instagram, YouTube, TikTok—wherever you create."
          },
          {
            "step": 2,
            "title": "Get your rates",
            "description": "AI analyzes your data and generates personalized pricing."
          },
          {
            "step": 3,
            "title": "Send your rate card",
            "description": "Export a professional PDF and negotiate with confidence."
          }
        ]
      },
      "social_proof": {
        "headline": "Creators are getting paid more",
        "testimonial_placeholders": [
          "Creator who raised rates after using SponsorCalc",
          "Creator who closed a deal using the rate card",
          "Creator who won a negotiation with the scripts"
        ],
        "stats_to_display": [
          "XX% average rate increase after using SponsorCalc",
          "XX,XXX rate cards generated",
          "$XXM in sponsorship value calculated"
        ]
      },
      "pricing_section": {
        "headline": "Know your worth—starting free",
        "subheadline": "Basic rate calculation is free forever. Upgrade for pro features."
      },
      "faq": [
        {
          "question": "How do you calculate my rates?",
          "answer": "We analyze your engagement rate (not just followers), audience demographics, your niche''s typical CPMs, and comparable creator rates. The result is a range that reflects your actual market value."
        },
        {
          "question": "What platforms do you support?",
          "answer": "Instagram, YouTube, and TikTok with direct API connection. Podcasts, newsletters, and other platforms via manual entry."
        },
        {
          "question": "Why should I trust these rates?",
          "answer": "Our rates are based on real market data, not arbitrary multipliers. We continuously update our benchmarks based on actual deals and industry CPMs."
        },
        {
          "question": "Can I see what other creators charge?",
          "answer": "Yes! Paid plans include anonymized benchmarks showing rates for creators in your niche and follower tier."
        },
        {
          "question": "What if a brand says my rate is too high?",
          "answer": "That''s what negotiation scripts are for. We give you word-for-word responses to common objections so you can stand your ground."
        },
        {
          "question": "Is my data safe?",
          "answer": "Absolutely. We only access public metrics you''d share anyway. We never post on your behalf or share your individual data."
        }
      ],
      "final_cta": {
        "headline": "Your next brand deal should pay what you''re worth",
        "subheadline": "Join thousands of creators who stopped leaving money on the table.",
        "cta": "Calculate My Rates Free"
      },
      "meta": {
        "page_title": "SponsorCalc — Know What to Charge for Sponsorships",
        "meta_description": "Get data-backed sponsorship rates based on your engagement and niche. Generate professional rate cards and negotiate with confidence."
      }
    }',

    '{
      "pre_launch": {
        "4_weeks_before": [
          {"task": "Social OAuth integrations complete (IG, YT, TT)", "category": "Product", "critical": true},
          {"task": "Rate calculation algorithm v1 ready", "category": "Product", "critical": true},
          {"task": "Rate card PDF export working", "category": "Product", "critical": true},
          {"task": "Landing page with waitlist", "category": "Marketing", "critical": true},
          {"task": "Gather CPM data for top 20 niches", "category": "Product", "critical": true}
        ],
        "2_weeks_before": [
          {"task": "Beta test with 20-30 creators across tiers", "category": "Product", "critical": true},
          {"task": "Validate rates feel accurate to beta users", "category": "Product", "critical": true},
          {"task": "Collect beta testimonials", "category": "Marketing", "critical": true},
          {"task": "Create sample rate card for demo", "category": "Marketing", "critical": true},
          {"task": "Write negotiation scripts library", "category": "Product", "critical": true}
        ],
        "1_week_before": [
          {"task": "Final rate algorithm tuning", "category": "Product", "critical": true},
          {"task": "Prepare Product Hunt assets", "category": "Marketing", "critical": true},
          {"task": "Schedule launch tweets/posts", "category": "Marketing", "critical": true},
          {"task": "Reach out to creator-focused accounts for support", "category": "Marketing", "critical": false}
        ],
        "day_before": [
          {"task": "Full user flow test: signup → connect → rate card → export", "category": "Product", "critical": true},
          {"task": "Verify Stripe billing works", "category": "Product", "critical": true}
        ]
      },
      "launch_day": [
        {"time": "12:00 AM", "task": "Product Hunt live", "platform": "Product Hunt"},
        {"time": "7:00 AM", "task": "Twitter launch thread", "platform": "Twitter"},
        {"time": "8:00 AM", "task": "Post in creator communities", "platform": "Reddit/Facebook Groups"},
        {"time": "9:00 AM", "task": "Email waitlist", "platform": "Email"},
        {"time": "10:00 AM", "task": "TikTok/Reels showing the tool", "platform": "TikTok/Instagram"},
        {"time": "All day", "task": "Engage with all comments", "platform": "All"},
        {"time": "All day", "task": "Monitor for API issues", "platform": "Product"}
      ],
      "post_launch": {
        "week_1": [
          "Respond to all user feedback",
          "Monitor rate accuracy feedback",
          "Quick fixes for any issues",
          "Share user success stories"
        ],
        "week_2_4": [
          "Add more niches to CPM database",
          "Improve rate card templates",
          "Create tutorial content",
          "Start SEO content (sponsorship pricing guides)"
        ],
        "month_2_3": [
          "Build brand budget database",
          "Media kit builder feature",
          "Agency tier refinement",
          "Explore partnerships with creator economy platforms"
        ]
      },
      "launch_platforms": {
        "primary": ["Product Hunt", "Twitter", "TikTok"],
        "secondary": ["LinkedIn", "Instagram"],
        "community": [
          "Creator economy subreddits",
          "Facebook groups for influencers",
          "Creator-focused Discords",
          "Influencer marketing newsletters"
        ]
      }
    }',

    '{
      "north_star_metric": {
        "metric": "Rate Cards Generated Weekly",
        "definition": "Number of complete rate card exports (PDF or view) in a 7-day period",
        "target_day_1": "50/week",
        "target_month_1": "200/week",
        "target_month_3": "1,000/week"
      },
      "acquisition_metrics": [
        {
          "metric": "Website visitors",
          "definition": "Unique visitors to marketing site",
          "target": "10K/month by month 3",
          "tool": "Plausible"
        },
        {
          "metric": "Signup rate",
          "definition": "Visitors who create account",
          "target": "8-12%",
          "tool": "PostHog"
        }
      ],
      "activation_metrics": [
        {
          "metric": "Platform connected",
          "definition": "% of signups who connect at least 1 platform",
          "target": "70%+",
          "tool": "PostHog"
        },
        {
          "metric": "Rate card generated",
          "definition": "% of connected users who generate a rate card",
          "target": "80%+",
          "tool": "PostHog"
        },
        {
          "metric": "PDF exported",
          "definition": "% of users who export rate card PDF",
          "target": "40% (indicates serious intent)",
          "tool": "PostHog"
        }
      ],
      "retention_metrics": [
        {
          "metric": "Monthly return rate",
          "definition": "% of users who return month-over-month",
          "target": "50%+",
          "tool": "PostHog"
        },
        {
          "metric": "Rate refreshes per user",
          "definition": "How often users recalculate their rates",
          "target": "2+/month for active users",
          "tool": "Database"
        }
      ],
      "revenue_metrics": [
        {
          "metric": "Free to paid conversion",
          "definition": "% of free users who upgrade",
          "target": "8-12%",
          "tool": "Stripe"
        },
        {
          "metric": "MRR",
          "definition": "Monthly recurring revenue",
          "target": "$3K month 3, $12K month 6",
          "tool": "Stripe"
        },
        {
          "metric": "ARPU",
          "definition": "Average revenue per paying user",
          "target": "$22-28/month",
          "tool": "Stripe"
        }
      ],
      "unit_economics": {
        "target_cac": "$15-30 (blended)",
        "target_ltv": "$150+ (8+ months at $19 average)",
        "target_ltv_cac_ratio": "5:1+",
        "target_payback_period": "<2 months"
      }
    }'
  ],

  NOW()
);