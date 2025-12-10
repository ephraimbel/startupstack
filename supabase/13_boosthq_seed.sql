-- BoostHQ Seed Data (idea_002)
-- Newsletter growth toolkit for cross-promotions and referrals

INSERT INTO ideas (
  id, user_id, title, one_liner, problem, target_customer, solution, monetization,
  tags, keywords, status, demand_score, demand_band, trend_label, validation_summary,
  validated_at, is_public, is_saved, created_at, updated_at, why_now, revenue_impact,
  market_size, competition_level, category, business_type, price_range
) VALUES (
  'boosthq-001',
  NULL,
  'BoostHQ',
  'Grow your newsletter 3x faster with cross-promos, referrals, and insights that work everywhere.',
  'Newsletter creators are stuck in growth limbo. They write great content but struggle to get discovered. Cross-promotions work but finding partners manually takes hours. Referral programs drive subscribers but Beehiiv charges extra, Substack doesn''t have them, and Ghost requires plugins. Analytics are siloed—you can''t see the full picture across platforms. The result? Writers hit a growth ceiling around 5-10K subscribers and don''t know how to break through.',
  'Newsletter creators with 1K-50K subscribers who want to break through growth plateaus and monetize their audience. Secondary: Newsletter operators at media companies and multi-author publications managing growth across multiple properties.',
  'The all-in-one growth toolkit for newsletter creators. Find and manage cross-promotion partners in your niche. Launch referral programs that work on any platform. See unified analytics across Substack, Beehiiv, Ghost, and ConvertKit. Get AI-powered growth recommendations based on what''s working for similar newsletters. Stop guessing. Start growing.',
  'Freemium: Free (1 newsletter, 5 cross-promos/mo), Growth $29/month (3 newsletters, unlimited promos, referrals), Pro $79/month (unlimited newsletters, advanced analytics), Team $199/month (5 seats, multi-publication).',
  ARRAY['newsletter-tools', 'growth-marketing', 'saas', 'analytics', 'email-marketing'],
  NULL,
  'validated',
  90,
  'high',
  'rising',
  NULL,
  NULL,
  TRUE,
  FALSE,
  NOW(),
  NOW(),
  'Newsletter renaissance is real: (1) Substack has 35M+ subscribers, Beehiiv growing 10x YoY—independent newsletters are a legitimate business, (2) Cross-promotion has emerged as the #1 growth hack but has no dedicated tooling, (3) Referral programs drove Morning Brew to 4M subscribers—everyone wants to replicate this, (4) Platform lock-in is a real concern—creators need platform-agnostic tools.',
  'Break through growth plateaus. 3x faster subscriber acquisition through proven cross-promo and referral strategies. Unified analytics save 10+ hours/week of manual tracking across platforms.',
  '$10B',
  'Medium',
  'marketing-tools',
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

-- Insert landing page for BoostHQ
INSERT INTO landing_pages (idea_id, slug, content, is_published, created_at, updated_at)
VALUES (
  'boosthq-001',
  'boosthq',
  '{
    "meta": {
      "title": "BoostHQ — Newsletter Growth Toolkit for Substack, Beehiiv & More",
      "description": "Grow your newsletter with cross-promotions, referral programs, and unified analytics. Works across Substack, Beehiiv, Ghost, and ConvertKit. Free to start.",
      "og_image_concept": "Dashboard showing newsletter growth analytics with cross-promo matches and referral tracking across multiple platforms"
    },
    "hero": {
      "headline": "Grow your newsletter 3x faster",
      "subheadline": "Cross-promotions, referral programs, and unified analytics that work across Substack, Beehiiv, Ghost, and more. Stop guessing. Start growing.",
      "cta_primary": {
        "text": "Start Growing Free",
        "url": "/signup"
      },
      "cta_secondary": {
        "text": "See how it works →",
        "url": "#demo"
      },
      "social_proof_snippet": "Trusted by 3,500+ newsletter creators • 2M+ subscribers acquired",
      "hero_visual": {
        "type": "product_screenshot",
        "description": "Multi-platform analytics dashboard showing subscriber growth across Substack, Beehiiv, and ConvertKit with cross-promo match suggestions"
      }
    },
    "problem_section": {
      "section_id": "problem",
      "eyebrow": "Growth Plateau Reality",
      "headline": "Stuck at 5K subscribers?",
      "description": "You write great content, but organic discovery has limits. The platforms want to keep you locked in. You need growth tactics that work everywhere.",
      "pain_points": [
        {
          "icon": "trending-down",
          "title": "Growth has flatlined",
          "description": "You write great content but the algorithm isn''t enough. Organic growth has slowed to a trickle. You need new channels."
        },
        {
          "icon": "message-circle-x",
          "title": "Cross-promos are manual chaos",
          "description": "Finding partners takes hours of DMs. Tracking who owes who what is a spreadsheet nightmare. Good partnerships fall through the cracks."
        },
        {
          "icon": "gift-off",
          "title": "Referral programs don''t work on your platform",
          "description": "Morning Brew grew to 4M with referrals. But Substack doesn''t support them, and Beehiiv charges extra. You''re leaving growth on the table."
        },
        {
          "icon": "scatter-chart",
          "title": "Analytics are scattered everywhere",
          "description": "Substack dashboard, Beehiiv stats, ConvertKit reports—you can''t see the full picture of what''s actually working across platforms."
        }
      ],
      "stat_callout": {
        "number": "87%",
        "label": "of newsletter creators hit a growth plateau between 5K-15K subscribers",
        "source": "Newsletter Growth Report 2024"
      }
    },
    "solution_section": {
      "section_id": "solution",
      "eyebrow": "Platform-Agnostic Growth",
      "headline": "Everything you need to grow—anywhere you publish",
      "description": "BoostHQ brings the growth tactics that work for big newsletters to independent creators. Cross-promos, referrals, and insights that work across every platform.",
      "features": [
        {
          "icon": "handshake",
          "title": "Cross-Promo Matching",
          "description": "Find newsletters in your niche with complementary audiences. AI suggests partners. Track every swap."
        },
        {
          "icon": "gift",
          "title": "Universal Referrals",
          "description": "Launch referral programs on any platform. Custom landing pages. Reward tracking. Works on Substack."
        },
        {
          "icon": "bar-chart-4",
          "title": "Unified Analytics",
          "description": "See subscribers, opens, and growth across all your platforms. One dashboard. Full picture."
        },
        {
          "icon": "trophy",
          "title": "Growth Benchmarks",
          "description": "Compare your metrics to similar newsletters. Know if your open rates are good or need work."
        },
        {
          "icon": "sparkles",
          "title": "AI Recommendations",
          "description": "Get specific suggestions based on what''s working for newsletters like yours."
        },
        {
          "icon": "search",
          "title": "Partner Directory",
          "description": "Browse hundreds of newsletters looking for cross-promo partners. Filter by niche, size, and audience."
        }
      ],
      "visual": {
        "type": "demo_video",
        "description": "Screen recording showing cross-promo partner discovery, referral program setup, and unified analytics dashboard"
      }
    },
    "how_it_works": {
      "section_id": "how-it-works",
      "eyebrow": "Simple 3-Step Process",
      "headline": "Growing is easier than you think",
      "steps": [
        {
          "number": 1,
          "title": "Connect your newsletter",
          "description": "Link Substack, Beehiiv, Ghost, or ConvertKit. We import your stats and create your profile.",
          "visual_description": "Platform integration screen showing OAuth connections to multiple newsletter platforms"
        },
        {
          "number": 2,
          "title": "Find growth opportunities",
          "description": "Discover cross-promo partners, launch your referral program, and see where you stand vs benchmarks.",
          "visual_description": "Partner discovery interface with AI-suggested matches and referral program setup wizard"
        },
        {
          "number": 3,
          "title": "Watch your list grow",
          "description": "Track every new subscriber. See what''s working. Double down on winners.",
          "visual_description": "Growth analytics dashboard showing subscriber acquisition by channel and growth velocity"
        }
      ]
    },
    "social_proof": {
      "section_id": "proof",
      "eyebrow": "Newsletter Success Stories",
      "headline": "Newsletter creators are breaking through",
      "testimonials": [
        {
          "quote": "BoostHQ helped me find the perfect cross-promo partners. I went from 2K to 15K subscribers in 6 months just from swaps I never would have found myself.",
          "author": "Sarah Kim",
          "role": "Tech Newsletter Creator",
          "company": "Weekly Wavelength",
          "avatar_description": "Female tech writer with laptop and coffee",
          "result": "2K → 15K subscribers in 6 months"
        },
        {
          "quote": "Finally got referrals working on Substack! The custom landing pages are genius. My readers love sharing and I''ve added 500 subs this month just from referrals.",
          "author": "Marcus Rodriguez",
          "role": "Substack Writer",
          "company": "Future of Finance",
          "avatar_description": "Male finance writer in home office",
          "result": "500 referral signups in 30 days"
        },
        {
          "quote": "I publish on Beehiiv and Ghost—BoostHQ finally gives me one place to see everything. The benchmarks showed me my open rates were way below average, so I fixed my subject lines.",
          "author": "Alex Chen",
          "role": "Newsletter Operator",
          "company": "3 newsletters, 45K total subs",
          "avatar_description": "Asian newsletter operator with multiple screens",
          "result": "25% open rate improvement"
        }
      ],
      "stats": [
        {
          "number": "2M+",
          "label": "Subscribers Acquired",
          "context": "through the platform"
        },
        {
          "number": "3x",
          "label": "Average Growth Rate",
          "context": "vs organic only"
        },
        {
          "number": "12,500+",
          "label": "Cross-Promos",
          "context": "successfully matched"
        },
        {
          "number": "3,500+",
          "label": "Newsletter Creators",
          "context": "trust BoostHQ"
        }
      ],
      "logos": {
        "headline": "Works With Your Platform",
        "companies": ["Substack", "Beehiiv", "Ghost", "ConvertKit", "Mailchimp", "EmailOctopus"]
      },
      "trust_badges": [
        {
          "icon": "shield",
          "text": "Your Data Stays Private"
        },
        {
          "icon": "zap",
          "text": "5-Minute Setup"
        },
        {
          "icon": "smartphone",
          "text": "Mobile Optimized"
        }
      ]
    },
    "pricing": {
      "section_id": "pricing",
      "eyebrow": "Growth-Based Pricing",
      "headline": "Free to start. Grow to pay.",
      "subheadline": "5 cross-promos and basic analytics free. Upgrade when you''re ready to scale.",
      "plans": [
        {
          "name": "Free",
          "price": "$0",
          "price_detail": "forever",
          "description": "Perfect for new newsletter creators exploring growth",
          "features": [
            "1 newsletter connected",
            "Basic analytics dashboard", 
            "5 cross-promo requests/month",
            "Browse partner directory",
            "Basic referral tracking (50 referrers)",
            "Community access"
          ],
          "cta": "Start Free",
          "highlighted": false,
          "badge": null
        },
        {
          "name": "Growth",
          "price": "$29",
          "price_detail": "/month",
          "description": "For active creators ready to scale (1K-10K subscribers)",
          "features": [
            "3 newsletters connected",
            "Unlimited cross-promo requests",
            "Full referral program (unlimited referrers)",
            "Custom referral landing pages",
            "Remove BoostHQ branding",
            "Benchmark comparisons",
            "AI growth recommendations",
            "Priority partner matching"
          ],
          "cta": "Start Free Trial",
          "highlighted": true,
          "badge": "Most Popular"
        },
        {
          "name": "Pro",
          "price": "$79",
          "price_detail": "/month",
          "description": "For serious newsletter operators (10K-100K subscribers)",
          "features": [
            "Unlimited newsletters",
            "Everything in Growth",
            "Advanced referral rewards (custom tiers)",
            "Cross-promo performance analytics",
            "Subscriber quality insights",
            "API access",
            "Dedicated partner matching",
            "Priority support"
          ],
          "cta": "Start Free Trial",
          "highlighted": false,
          "badge": null
        },
        {
          "name": "Team",
          "price": "$199",
          "price_detail": "/month",
          "description": "For media companies and multi-publication operators",
          "features": [
            "Everything in Pro",
            "5 team seats",
            "Multi-publication dashboard",
            "Cross-newsletter analytics",
            "Internal cross-promo scheduling",
            "White-label referral pages",
            "Dedicated success manager",
            "Custom integrations"
          ],
          "cta": "Contact Sales",
          "highlighted": false,
          "badge": "Enterprise"
        }
      ],
      "guarantee": {
        "headline": "14-Day Free Trial",
        "description": "Try any paid plan free for 14 days. See real growth results or get your money back."
      },
      "pricing_note": "Save 17% with annual billing. All plans include platform integrations."
    },
    "faq": {
      "section_id": "faq",
      "headline": "Questions? We''ve got answers.",
      "questions": [
        {
          "question": "Which newsletter platforms do you support?",
          "answer": "Substack, Beehiiv, Ghost, ConvertKit, and Mailchimp. We''re adding more platforms regularly. If yours isn''t supported, let us know."
        },
        {
          "question": "How does the referral program work on Substack?",
          "answer": "Since Substack doesn''t have native referrals, we provide custom landing pages that integrate with your Substack signup. Subscribers referred through your link are tracked automatically."
        },
        {
          "question": "How do you match cross-promo partners?",
          "answer": "Our AI analyzes newsletter content and audience to find complementary (not competitive) partners. We look for audience overlap in interests, not subscriber lists."
        },
        {
          "question": "Is my subscriber data safe?",
          "answer": "We never share your subscriber lists or contact information. Analytics are aggregated and anonymized for benchmarks. Your data is your data."
        },
        {
          "question": "What if a cross-promo partner doesn''t deliver?",
          "answer": "We track delivery on both sides. Partners who don''t honor agreements get flagged. You can rate partners and see their track record before requesting."
        },
        {
          "question": "Can I manage multiple newsletters?",
          "answer": "Yes! Growth plan supports 3 newsletters, Pro supports unlimited. Team plan adds multi-user access for media companies."
        }
      ]
    },
    "final_cta": {
      "section_id": "cta",
      "headline": "Your next 10,000 subscribers are waiting",
      "subheadline": "Join thousands of newsletter creators growing faster with BoostHQ.",
      "cta_text": "Start Growing Free →",
      "trust_element": "No credit card required • 5-minute setup • 14-day free trial"
    },
    "footer": {
      "tagline": "Grow your newsletter. Everywhere.",
      "links": {
        "product": ["Features", "Pricing", "Integrations", "Partner Directory"],
        "resources": ["Blog", "Help Center", "Growth Guides", "Newsletter Templates"],
        "company": ["About", "Careers", "Press", "Contact"],
        "legal": ["Privacy", "Terms", "Security", "Data Policy"]
      },
      "social": ["Twitter", "LinkedIn", "Substack"],
      "newsletter": {
        "headline": "Newsletter growth tips & updates",
        "placeholder": "Your email",
        "cta": "Subscribe"
      }
    }
  }'::jsonb,
  TRUE,
  NOW(),
  NOW()
) ON CONFLICT (slug) DO UPDATE SET
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert execution plan with comprehensive BoostHQ deliverable content
INSERT INTO execution_plans (idea_id, user_id, elevator_pitch, persona, user_stories, recommended_stack, launch_checklist, created_at)
VALUES (
  'boosthq-001',
  NULL,
  '{
    "problem_statement": "Newsletter creators are stuck in growth limbo. They write great content but struggle to get discovered. Cross-promotions work but finding partners manually takes hours. Referral programs drive subscribers but Beehiiv charges extra, Substack doesn''t have them, and Ghost requires plugins. Analytics are siloed—you can''t see the full picture across platforms. The result? Writers hit a growth ceiling around 5-10K subscribers and don''t know how to break through.",
    "solution_summary": "The all-in-one growth toolkit for newsletter creators. Find and manage cross-promotion partners in your niche. Launch referral programs that work on any platform. See unified analytics across Substack, Beehiiv, Ghost, and ConvertKit. Get AI-powered growth recommendations based on what''s working for similar newsletters. Stop guessing. Start growing.",
    "target_customer": {
      "primary": "Newsletter creators with 1K-50K subscribers who want to break through growth plateaus and monetize their audience",
      "secondary": "Newsletter operators at media companies and multi-author publications managing growth across multiple properties",
      "market_size_estimate": {
        "tam": "$10B email marketing and newsletter tools market",
        "sam": "$1B newsletter-specific tools and services",
        "som": "$100M active newsletter creators seeking growth solutions (500K+ newsletters with 1K+ subscribers)"
      }
    },
    "why_now": "Newsletter renaissance is real: (1) Substack has 35M+ subscribers, Beehiiv growing 10x YoY—independent newsletters are a legitimate business, (2) Cross-promotion has emerged as the #1 growth hack but has no dedicated tooling, (3) Referral programs drove Morning Brew to 4M subscribers—everyone wants to replicate this, (4) Platform lock-in is a real concern—creators need platform-agnostic tools."
  }',

  '{
    "direct_competitors": [
      {
        "name": "SparkLoop",
        "url": "https://sparkloop.app",
        "positioning": "Referral program and recommendation network for newsletters",
        "pricing": "$99/mo Partner, $199/mo Partner+, Custom Scale",
        "strengths": ["Strong referral programs", "Paid recommendation network", "Good Beehiiv/ConvertKit integrations"],
        "weaknesses": ["Expensive for small newsletters", "No cross-promo matching", "Limited analytics", "No Substack support"]
      },
      {
        "name": "Beehiiv Boosts (native)",
        "url": "https://beehiiv.com",
        "positioning": "Built-in recommendation network within Beehiiv",
        "pricing": "Included in Beehiiv Scale plan ($99/mo)",
        "strengths": ["Native integration", "Easy setup", "Growing network"],
        "weaknesses": ["Beehiiv-only", "Limited partner discovery", "No referral customization", "Locked to platform"]
      },
      {
        "name": "Lettergrowth",
        "url": "https://lettergrowth.com",
        "positioning": "Newsletter cross-promotion marketplace",
        "pricing": "Free to list, fees on trades",
        "strengths": ["Simple marketplace", "Free to use", "Growing directory"],
        "weaknesses": ["Manual matching", "No analytics", "No referral programs", "Basic features only"]
      },
      {
        "name": "The Sample / Refind",
        "url": "https://thesample.ai",
        "positioning": "AI-powered newsletter discovery for readers",
        "pricing": "Free for readers, revenue share for newsletters",
        "strengths": ["AI matching", "Reader-focused", "Growing distribution"],
        "weaknesses": ["Not creator-controlled", "Limited analytics", "Passive growth only", "Black box algorithm"]
      }
    ],
    "indirect_competitors": [
      "Platform-native growth tools (Substack network, Ghost recommendations)",
      "Paid ads for newsletter growth (Meta, Twitter)",
      "Newsletter aggregators (Newsletter Glue, Curated)",
      "Organic social media growth (Twitter threads, LinkedIn posts)",
      "SEO and content marketing for newsletter discovery"
    ],
    "market_gaps": [
      "No unified dashboard across newsletter platforms",
      "Cross-promo partner discovery is manual and time-consuming",
      "Referral programs don''t work on Substack without hacks",
      "No benchmarking against similar newsletters",
      "Growth recommendations are generic, not data-driven",
      "Multi-platform creators can''t track unified metrics"
    ]
  }',

  ARRAY[
    '{
      "positioning_statement": "For newsletter creators who want to grow beyond organic reach, BoostHQ is a growth toolkit that combines cross-promotion partner matching, universal referral programs, and unified analytics. Unlike platform-specific tools or manual outreach, we work across Substack, Beehiiv, Ghost, and ConvertKit—giving you one place to manage and accelerate your newsletter growth.",
      "unique_value_proposition": "Grow your newsletter 3x faster with cross-promos, referrals, and insights that work everywhere.",
      "key_differentiators": [
        "Platform-agnostic: Works with Substack, Beehiiv, Ghost, ConvertKit, and Mailchimp—not locked to one ecosystem",
        "Smart partner matching: AI finds cross-promo partners in your niche with complementary audiences, not competitors",
        "Universal referral programs: Launch referrals on any platform, even Substack which doesn''t natively support them",
        "Unified analytics: See open rates, growth trends, and engagement across all your newsletters in one dashboard",
        "Growth benchmarks: Compare your metrics to similar newsletters and get specific recommendations"
      ],
      "category": "Newsletter growth tools (creating subcategory: ''Newsletter Growth Engine'')"
    }',

    '{
      "core_features": [
        {
          "feature": "Newsletter Profile",
          "description": "Create profile with niche, subscriber count, open rates, audience demographics. Import stats from connected platforms. Public profile for partner discovery.",
          "priority": "P0",
          "effort": "Small"
        },
        {
          "feature": "Platform Connections",
          "description": "OAuth connect to Substack, Beehiiv, Ghost, ConvertKit. Pull subscriber counts, open rates, and growth data automatically.",
          "priority": "P0",
          "effort": "Large"
        },
        {
          "feature": "Cross-Promo Partner Discovery",
          "description": "Browse and filter newsletters by niche, size, and audience overlap. AI suggests ideal partners based on complementary (not competitive) audiences.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Cross-Promo Management",
          "description": "Request and manage cross-promos. Track scheduled swaps, generate promo copy suggestions, measure results per partnership.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Universal Referral Program",
          "description": "Create referral programs that work on any platform. Custom landing pages, unique referral links, reward tracking. Works even on Substack.",
          "priority": "P0",
          "effort": "Large"
        },
        {
          "feature": "Referral Rewards",
          "description": "Configure reward tiers (3 referrals = bonus content, 10 = shoutout, 25 = merch). Track referrer leaderboards and reward fulfillment.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Unified Analytics Dashboard",
          "description": "See subscriber growth, open rates, click rates across all connected platforms. Daily/weekly/monthly trends. Growth velocity metrics.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Growth Recommendations",
          "description": "AI-powered suggestions based on your metrics vs benchmarks. Identifies growth opportunities (optimal send times, subject line patterns, promo partners).",
          "priority": "P1",
          "effort": "Medium"
        },
        {
          "feature": "Benchmark Comparisons",
          "description": "Compare your open rates, growth rate, and engagement to newsletters in your niche and size bracket. Anonymous aggregated data.",
          "priority": "P1",
          "effort": "Medium"
        },
        {
          "feature": "Cross-Promo Templates",
          "description": "Library of proven cross-promo copy templates. AI generates customized recommendations based on your newsletter voice.",
          "priority": "P1",
          "effort": "Small"
        }
      ],
      "post_mvp_features": [
        "Paid recommendation network (pay per subscriber acquired)",
        "Welcome sequence optimization",
        "Subject line A/B testing across platforms",
        "Subscriber quality scoring",
        "Churn prediction and win-back campaigns",
        "Multi-newsletter management for media companies",
        "Growth playbooks and courses",
        "Community for newsletter creators",
        "API for custom integrations",
        "White-label for newsletter agencies"
      ],
      "out_of_scope": [
        "Newsletter publishing (use Substack, Beehiiv, etc.)",
        "Email design/editing tools",
        "Monetization/paywall management",
        "Ad network for newsletters",
        "Newsletter hosting/infrastructure"
      ],
      "mvp_timeline": "10-12 weeks for solo developer, 6-8 weeks for small team"
    }',

    '{
      "recommended_stack": {
        "frontend": "Next.js 14 (App Router) — Dashboard-heavy, great for analytics views",
        "backend": "Next.js API Routes + Supabase Edge Functions — Simple, handles OAuth well",
        "database": "Supabase (Postgres) — Relational data for profiles, partnerships, referrals",
        "auth": "Supabase Auth — Email/password + OAuth for platform connections",
        "payments": "Stripe — Subscription billing",
        "hosting": "Vercel — Edge performance for dashboard",
        "analytics_processing": "Supabase + cron jobs — Pull platform data daily",
        "key_integrations": [
          "Substack — Scraping + email stats (no official API, requires workarounds)",
          "Beehiiv API — Full integration for stats and subscriber data",
          "Ghost Admin API — Subscriber and email analytics",
          "ConvertKit API — Subscriber data and automations",
          "Mailchimp API — For users on legacy platforms"
        ]
      },
      "build_vs_buy": [
        {
          "component": "Platform Integrations",
          "recommendation": "Build (core product)",
          "reasoning": "This is your moat. Deep integrations with each platform require custom work. Beehiiv and ConvertKit have APIs; Substack requires clever workarounds."
        },
        {
          "component": "Partner Matching AI",
          "recommendation": "Build (on OpenAI embeddings)",
          "reasoning": "Use embeddings to match newsletters by content similarity. Simple ML that''s your differentiator."
        },
        {
          "component": "Referral System",
          "recommendation": "Build (core feature)",
          "reasoning": "Universal referral tracking is a key differentiator. Build it to work across all platforms."
        },
        {
          "component": "Analytics Dashboard",
          "recommendation": "Build (with Tremor/Recharts)",
          "reasoning": "Use a charting library but build the dashboard UX custom. This is core product."
        },
        {
          "component": "Email Notifications",
          "recommendation": "Buy (Resend)",
          "reasoning": "Transactional emails for cross-promo requests, referral notifications. Don''t build this."
        }
      ],
      "estimated_monthly_cost": {
        "0_100_users": "$50-150/mo (Vercel free, Supabase free, ~$50 OpenAI, ~$30 Resend)",
        "100_1000_users": "$400-800/mo (Vercel Pro, Supabase Pro, increased API calls)",
        "1000_10000_users": "$2,000-5,000/mo (Scale with platform API usage and processing)"
      }
    }'
  ],

  '{
    "pricing_model": "Freemium with feature limits",
    "pricing_rationale": "Newsletter creators are scrappy—free tier gets adoption. Growth features (unlimited cross-promos, referrals, benchmarks) unlock at paid tiers. Value scales with newsletter size.",
    "tiers": [
      {
        "name": "Free",
        "price": "$0",
        "target_customer": "New newsletter creators exploring growth tactics",
        "features": [
          "1 newsletter connected",
          "Basic analytics dashboard",
          "5 cross-promo requests/month",
          "Browse partner directory",
          "Basic referral tracking (50 referrers)",
          "Community access"
        ],
        "limitations": [
          "1 newsletter only",
          "5 cross-promo requests",
          "50 referrer limit",
          "No benchmarks",
          "No AI recommendations",
          "BoostHQ branding on referral pages"
        ]
      },
      {
        "name": "Growth",
        "price": "$29/month ($24/mo annual)",
        "target_customer": "Active newsletter creators ready to scale (1K-10K subscribers)",
        "features": [
          "3 newsletters connected",
          "Unlimited cross-promo requests",
          "Full referral program (unlimited referrers)",
          "Custom referral landing pages",
          "Remove BoostHQ branding",
          "Benchmark comparisons",
          "AI growth recommendations",
          "Priority partner matching",
          "Email support"
        ],
        "limitations": [
          "3 newsletters",
          "Basic reward tiers"
        ]
      },
      {
        "name": "Pro",
        "price": "$79/month ($66/mo annual)",
        "target_customer": "Serious newsletter operators (10K-100K subscribers)",
        "features": [
          "Unlimited newsletters",
          "Everything in Growth",
          "Advanced referral rewards (custom tiers, digital rewards)",
          "Cross-promo performance analytics",
          "Subscriber quality insights",
          "API access",
          "Dedicated partner matching",
          "Priority support"
        ],
        "limitations": [
          "Single user"
        ]
      },
      {
        "name": "Team",
        "price": "$199/month ($166/mo annual)",
        "target_customer": "Media companies and multi-publication operators",
        "features": [
          "Everything in Pro",
          "5 team seats",
          "Multi-publication dashboard",
          "Cross-newsletter analytics",
          "Internal cross-promo scheduling",
          "White-label referral pages",
          "Dedicated success manager",
          "Custom integrations"
        ],
        "limitations": []
      }
    ],
    "free_tier_strategy": "Free tier is genuinely useful for small creators. Limits hit when they have traction and want to scale—exactly when they should pay. Cross-promo limit creates urgency.",
    "annual_discount": "17% discount (2 months free) for annual plans",
    "pricing_psychology": "$29/mo is affordable for anyone monetizing their newsletter. Frame as ''cost of 3 paid subscribers'' to show ROI. Pro at $79 captures serious operators."
  }',

  ARRAY[
    '{
      "brand_name": "BoostHQ",
      "tagline": "Grow your newsletter. Everywhere.",
      "brand_personality": [
        "Growth-focused — Everything is about helping newsletters grow",
        "Data-driven — Decisions backed by metrics, not guesses",
        "Community-oriented — Newsletter creators helping each other",
        "Accessible — Works for beginners and pros alike",
        "Trustworthy — Your data and relationships are safe"
      ],
      "brand_voice": {
        "tone": "Encouraging and knowledgeable. Like a growth-savvy newsletter creator friend who''s been there.",
        "do": [
          "Use newsletter creator language (open rates, subs, growth hacks)",
          "Celebrate growth milestones",
          "Share specific, actionable advice",
          "Reference the newsletter community positively",
          "Be enthusiastic about growth tactics that work"
        ],
        "dont": [
          "Don''t be corporate or salesy",
          "Don''t promise overnight viral growth",
          "Don''t disparage any platform (Substack vs Beehiiv)",
          "Don''t use generic marketing speak",
          "Don''t ignore the hard work of content creation"
        ]
      },
      "visual_direction": {
        "color_palette": {
          "primary": "#8B5CF6 (Violet) — Growth, creativity, stands out from platform colors",
          "secondary": "#4C1D95 (Dark violet) — Depth, premium",
          "accent": "#10B981 (Emerald) — Growth, success, positive metrics",
          "warning": "#F59E0B (Amber) — Declining metrics, attention needed",
          "neutrals": ["#FAFAF9 (warm white)", "#1C1917 (warm black)"]
        },
        "typography": {
          "display": "Cal Sans or Satoshi — Bold, modern, newsletter vibe",
          "body": "Inter — Clean, readable for dashboards and data"
        },
        "visual_style": "Modern and data-forward. Dashboard-centric with clear data visualization. Growth charts should feel optimistic. Light mode primary with dark mode option. Celebrate upward trends visually."
      },
      "messaging": {
        "elevator_pitch_10s": "BoostHQ helps newsletter creators grow with cross-promotions, referral programs, and unified analytics that work across any platform.",
        "elevator_pitch_30s": "Growing a newsletter is hard when you''re stuck on one platform. BoostHQ gives you the growth toolkit that works everywhere: find cross-promotion partners in your niche, launch referral programs on any platform (even Substack), and see all your metrics in one dashboard. Stop guessing what works. Start growing with data.",
        "key_messages": [
          "Your growth shouldn''t be limited by your platform.",
          "Find partners. Launch referrals. Track everything.",
          "The newsletter growth toolkit that works everywhere.",
          "From 1K to 100K subscribers—we''ve got the tools.",
          "Cross-promo is the new growth hack. We make it easy."
        ]
      }
    }',

    '{
      "hero": {
        "headline": "Grow your newsletter 3x faster",
        "subheadline": "Cross-promotions, referral programs, and unified analytics that work across Substack, Beehiiv, Ghost, and more. Stop guessing. Start growing.",
        "cta_primary": "Start Growing Free",
        "cta_secondary": "See how it works →"
      },
      "problem_section": {
        "headline": "Stuck at 5K subscribers?",
        "pain_points": [
          {
            "pain": "Growth has flatlined",
            "detail": "You write great content but the algorithm isn''t enough. Organic growth has slowed to a trickle. You need new channels."
          },
          {
            "pain": "Cross-promos are manual chaos",
            "detail": "Finding partners takes hours of DMs. Tracking who owes who what is a spreadsheet nightmare. Good partnerships fall through the cracks."
          },
          {
            "pain": "Referral programs don''t work on your platform",
            "detail": "Morning Brew grew to 4M with referrals. But Substack doesn''t support them, and Beehiiv charges extra. You''re leaving growth on the table."
          }
        ]
      },
      "solution_section": {
        "headline": "Everything you need to grow—anywhere you publish",
        "features": [
          {
            "title": "Cross-Promo Matching",
            "description": "Find newsletters in your niche with complementary audiences. AI suggests partners. Track every swap.",
            "icon_suggestion": "Handshake/network icon"
          },
          {
            "title": "Universal Referrals",
            "description": "Launch referral programs on any platform. Custom landing pages. Reward tracking. Works on Substack.",
            "icon_suggestion": "Gift/share icon"
          },
          {
            "title": "Unified Analytics",
            "description": "See subscribers, opens, and growth across all your platforms. One dashboard. Full picture.",
            "icon_suggestion": "Chart/dashboard icon"
          },
          {
            "title": "Growth Benchmarks",
            "description": "Compare your metrics to similar newsletters. Know if your open rates are good or need work.",
            "icon_suggestion": "Trophy/compare icon"
          },
          {
            "title": "AI Recommendations",
            "description": "Get specific suggestions based on what''s working for newsletters like yours.",
            "icon_suggestion": "Sparkles/AI icon"
          },
          {
            "title": "Partner Directory",
            "description": "Browse hundreds of newsletters looking for cross-promo partners. Filter by niche, size, and audience.",
            "icon_suggestion": "Search/directory icon"
          }
        ]
      },
      "how_it_works": {
        "headline": "Growing is easier than you think",
        "steps": [
          {
            "step": 1,
            "title": "Connect your newsletter",
            "description": "Link Substack, Beehiiv, Ghost, or ConvertKit. We import your stats and create your profile."
          },
          {
            "step": 2,
            "title": "Find growth opportunities",
            "description": "Discover cross-promo partners, launch your referral program, and see where you stand vs benchmarks."
          },
          {
            "step": 3,
            "title": "Watch your list grow",
            "description": "Track every new subscriber. See what''s working. Double down on winners."
          }
        ]
      },
      "social_proof": {
        "headline": "Newsletter creators are breaking through",
        "testimonial_placeholders": [
          "Creator who grew from 5K to 20K with cross-promos",
          "Substack writer who finally launched referrals",
          "Multi-newsletter operator who unified analytics"
        ],
        "stats_to_display": [
          "XX% average growth rate increase",
          "XX,XXX cross-promos facilitated",
          "XX,XXX referral signups tracked",
          "XXM total subscribers across platform"
        ]
      },
      "pricing_section": {
        "headline": "Free to start. Grow to pay.",
        "subheadline": "5 cross-promos and basic analytics free. Upgrade when you''re ready to scale."
      },
      "faq": [
        {
          "question": "Which newsletter platforms do you support?",
          "answer": "Substack, Beehiiv, Ghost, ConvertKit, and Mailchimp. We''re adding more platforms regularly. If yours isn''t supported, let us know."
        },
        {
          "question": "How does the referral program work on Substack?",
          "answer": "Since Substack doesn''t have native referrals, we provide custom landing pages that integrate with your Substack signup. Subscribers referred through your link are tracked automatically."
        },
        {
          "question": "How do you match cross-promo partners?",
          "answer": "Our AI analyzes newsletter content and audience to find complementary (not competitive) partners. We look for audience overlap in interests, not subscriber lists."
        },
        {
          "question": "Is my subscriber data safe?",
          "answer": "We never share your subscriber lists or contact information. Analytics are aggregated and anonymized for benchmarks. Your data is your data."
        },
        {
          "question": "What if a cross-promo partner doesn''t deliver?",
          "answer": "We track delivery on both sides. Partners who don''t honor agreements get flagged. You can rate partners and see their track record before requesting."
        },
        {
          "question": "Can I manage multiple newsletters?",
          "answer": "Yes! Growth plan supports 3 newsletters, Pro supports unlimited. Team plan adds multi-user access for media companies."
        }
      ],
      "final_cta": {
        "headline": "Your next 10,000 subscribers are waiting",
        "subheadline": "Join thousands of newsletter creators growing faster with BoostHQ.",
        "cta": "Start Growing Free →"
      },
      "meta": {
        "page_title": "BoostHQ — Newsletter Growth Toolkit for Substack, Beehiiv & More",
        "meta_description": "Grow your newsletter with cross-promotions, referral programs, and unified analytics. Works across Substack, Beehiiv, Ghost, and ConvertKit. Free to start."
      }
    }',

    '{
      "pre_launch": {
        "4_weeks_before": [
          {"task": "MVP with Beehiiv + ConvertKit integrations (easiest APIs)", "category": "Product", "critical": true},
          {"task": "Basic cross-promo directory and request flow", "category": "Product", "critical": true},
          {"task": "Landing page live with waitlist", "category": "Marketing", "critical": true},
          {"task": "Create demo showing cross-promo and analytics", "category": "Marketing", "critical": true},
          {"task": "Set up PostHog for analytics", "category": "Product", "critical": true},
          {"task": "Start Twitter presence on newsletter growth tips", "category": "Marketing", "critical": false}
        ],
        "2_weeks_before": [
          {"task": "Add Substack integration (workarounds for limited API)", "category": "Product", "critical": true},
          {"task": "Beta test with 30-50 newsletter creators", "category": "Product", "critical": true},
          {"task": "Launch referral program MVP", "category": "Product", "critical": true},
          {"task": "Collect beta testimonials and growth stories", "category": "Marketing", "critical": true},
          {"task": "Prepare Product Hunt assets", "category": "Marketing", "critical": true},
          {"task": "Set up Stripe billing", "category": "Product", "critical": true}
        ],
        "1_week_before": [
          {"task": "Final product polish and bug fixes", "category": "Product", "critical": true},
          {"task": "Seed directory with 100+ newsletter profiles", "category": "Product", "critical": true},
          {"task": "Reach out to newsletter creator communities", "category": "Marketing", "critical": false},
          {"task": "Prepare Product Hunt maker comment", "category": "Marketing", "critical": true},
          {"task": "Schedule launch day posts", "category": "Marketing", "critical": true}
        ],
        "day_before": [
          {"task": "Schedule Product Hunt post", "category": "Marketing", "critical": true},
          {"task": "Pre-write responses to common questions", "category": "Support", "critical": true},
          {"task": "Clear calendar for launch day", "category": "Personal", "critical": true},
          {"task": "Get good sleep", "category": "Personal", "critical": true}
        ]
      },
      "launch_day": [
        {"time": "12:01 AM PT", "task": "Product Hunt goes live", "platform": "Product Hunt"},
        {"time": "6:00 AM", "task": "Post maker comment with founder story", "platform": "Product Hunt"},
        {"time": "7:00 AM", "task": "Twitter launch thread with GIF demos", "platform": "Twitter/X"},
        {"time": "8:00 AM", "task": "LinkedIn post targeting media/newsletter operators", "platform": "LinkedIn"},
        {"time": "9:00 AM", "task": "Send launch email to waitlist", "platform": "Email"},
        {"time": "10:00 AM", "task": "Post in newsletter creator communities", "platform": "Slack/Discord"},
        {"time": "11:00 AM", "task": "Share in Substack Notes and relevant Substacks", "platform": "Substack"},
        {"time": "All day", "task": "Reply to every PH comment", "platform": "Product Hunt"},
        {"time": "All day", "task": "Engage with social mentions", "platform": "All"},
        {"time": "All day", "task": "Monitor for bugs", "platform": "Product"},
        {"time": "Evening", "task": "Share day 1 results", "platform": "Twitter/X"}
      ],
      "post_launch": {
        "week_1": [
          "Respond to all user feedback within 24 hours",
          "Ship fixes for critical integration bugs",
          "Follow up with free users who haven''t connected platforms",
          "Share user growth success stories",
          "Publish ''how we built BoostHQ'' thread"
        ],
        "week_2_4": [
          "Add Ghost integration",
          "Implement top 3 feature requests",
          "Create tutorial content (cross-promo best practices)",
          "Partner with newsletter creator newsletters (The Newsletter Newsletter, etc.)",
          "Begin SEO content on newsletter growth"
        ],
        "month_2_3": [
          "Analyze conversion funnel and optimize",
          "A/B test pricing page",
          "Launch benchmark comparisons feature",
          "Explore paid recommendation network",
          "Consider affiliate program with newsletter creators"
        ]
      },
      "launch_platforms": {
        "primary": ["Product Hunt", "Twitter/X"],
        "secondary": ["LinkedIn", "Substack Notes"],
        "community": [
          "Newsletter creator Slack groups",
          "Indie Hackers",
          "Substack Discord",
          "Beehiiv community",
          "Newsletter Twitter",
          "r/newsletters"
        ]
      }
    }',

    '{
      "north_star_metric": {
        "metric": "Subscriber Growth Attributed",
        "definition": "Total new subscribers acquired through BoostHQ (cross-promos + referrals) per week across all users",
        "target_day_1": "500 subscribers attributed",
        "target_month_1": "10,000 subscribers attributed",
        "target_month_3": "100,000 subscribers attributed"
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
          "target": "10-15% (newsletter creators are action-oriented)",
          "tool": "PostHog"
        },
        {
          "metric": "Platform connected",
          "definition": "% of signups who connect at least 1 platform",
          "target": "70%+",
          "tool": "PostHog"
        }
      ],
      "activation_metrics": [
        {
          "metric": "Profile completed",
          "definition": "% of users with complete newsletter profile",
          "target": "60%+",
          "tool": "PostHog"
        },
        {
          "metric": "First cross-promo request",
          "definition": "% of users who send at least 1 cross-promo request",
          "target": "40%+",
          "tool": "PostHog"
        },
        {
          "metric": "Referral program launched",
          "definition": "% of users who activate referral program",
          "target": "30%+",
          "tool": "PostHog"
        }
      ],
      "retention_metrics": [
        {
          "metric": "Week 1 retention",
          "definition": "% of users who return in week 2",
          "target": "45%+",
          "tool": "PostHog"
        },
        {
          "metric": "Monthly retention",
          "definition": "% of users checking analytics monthly",
          "target": "55%+",
          "tool": "PostHog"
        },
        {
          "metric": "Cross-promos completed",
          "definition": "Average completed cross-promos per active user per month",
          "target": "2+ (proves active use)",
          "tool": "Database query"
        }
      ],
      "revenue_metrics": [
        {
          "metric": "Free to paid conversion",
          "definition": "% of free users who upgrade",
          "target": "8-12%",
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
          "target": "$35-45/month (mix of Growth and Pro)",
          "tool": "Stripe"
        },
        {
          "metric": "Churn rate",
          "definition": "% of paying users who cancel monthly",
          "target": "<6%",
          "tool": "Stripe"
        }
      ],
      "unit_economics": {
        "target_cac": "$20-40 (newsletter creators are reachable via content)",
        "target_ltv": "$400+ (12+ months at $35 ARPU)",
        "target_ltv_cac_ratio": "10:1 or better",
        "target_payback_period": "1-2 months"
      }
    }'
  ],

  NOW()
);