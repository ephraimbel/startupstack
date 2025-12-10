-- ThumbTest Complete Seed Data (idea_053)
-- YouTube thumbnail A/B testing before publishing
-- Comprehensive seed file with all ThumbTest data

INSERT INTO ideas (
  id, user_id, title, one_liner, problem, target_customer, solution, monetization,
  tags, keywords, status, demand_score, demand_band, trend_label, validation_summary,
  validated_at, is_public, is_saved, created_at, updated_at, why_now, revenue_impact,
  market_size, competition_level, category, business_type, price_range
) VALUES (
  'thumbtest-001',
  NULL,
  'ThumbTest',
  'Know which thumbnail wins before you upload',
  'Thumbnails make or break YouTube videos—they account for 50%+ of CTR decisions. But creators can''t test thumbnails without publishing, and changing thumbnails after upload tanks the algorithm. They''re forced to guess, often losing thousands of views on a single wrong choice.',
  'YouTubers with 50K-500K subscribers who publish 2+ videos weekly and actively optimize for CTR. Secondary: YouTube agencies managing multiple channels, thumbnail designers who want to prove their value.',
  'Upload thumbnail variants before publishing. ThumbTest shows them to real users matching your audience demographics and measures actual click preference. Get statistically significant CTR predictions before you commit. Historical analysis reveals which thumbnail styles perform best for your channel.',
  'Credit-based with subscription options. $15 per test, $39/month Creator plan (10 tests), $99/month Pro plan (30 tests), $249/month Agency plan (unlimited). Free trial: 1 test.',
  ARRAY['youtube', 'creator-tools', 'a-b-testing', 'thumbnails', 'ctr-optimization'],
  NULL,
  'validated',
  92,
  'high',
  'rising',
  'Validated through competitor analysis of TubeBuddy, VidIQ, and existing thumbnail testing tools. Market gap identified in pre-publish testing with audience-matched panels.',
  NOW() - INTERVAL '30 days',
  TRUE,
  FALSE,
  NOW(),
  NOW(),
  'YouTube is more competitive than ever—top channels test everything. Native A/B testing is locked behind YouTube Partners and has limitations. AI thumbnail generation is flooding the market with more competition. Creators who don''t optimize get buried.',
  'Creators see 20-40% CTR improvements by testing thumbnails before upload. Single test often pays for months of subscription. Prevents algorithm damage from post-publish changes.',
  '$300M',
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
  validation_summary = EXCLUDED.validation_summary,
  validated_at = EXCLUDED.validated_at,
  why_now = EXCLUDED.why_now,
  revenue_impact = EXCLUDED.revenue_impact,
  market_size = EXCLUDED.market_size,
  competition_level = EXCLUDED.competition_level,
  category = EXCLUDED.category,
  business_type = EXCLUDED.business_type,
  price_range = EXCLUDED.price_range,
  updated_at = NOW();

-- Insert comprehensive landing page for ThumbTest
INSERT INTO landing_pages (idea_id, slug, content, is_published, created_at, updated_at)
VALUES (
  'thumbtest-001',
  'thumbtest',
  '{
    "meta": {
      "title": "ThumbTest — YouTube Thumbnail A/B Testing Before You Publish",
      "description": "Test YouTube thumbnails with real viewers before uploading. Get statistically proven CTR predictions in hours. Know which thumbnail wins.",
      "og_image_concept": "Split screen showing two thumbnail variants with click data overlay, arrows pointing to clear winner with statistical confidence badge."
    },
    "hero": {
      "headline": "Know which thumbnail wins before you upload",
      "subheadline": "Test your thumbnails with real viewers who match your audience. Get statistically proven winners in hours, not weeks.",
      "cta_primary": {
        "text": "Test Your First Thumbnail Free",
        "url": "/signup"
      },
      "cta_secondary": {
        "text": "See how it works →",
        "url": "#how-it-works"
      },
      "social_proof_snippet": "Trusted by 5,000+ YouTubers • 50,000+ thumbnails tested",
      "hero_visual": {
        "type": "product_screenshot",
        "description": "Dashboard showing thumbnail variants side-by-side with click-through percentages, confidence scores, and clear winner highlighted."
      }
    },
    "problem_section": {
      "section_id": "problem",
      "eyebrow": "The Thumbnail Gamble",
      "headline": "Guessing costs you views",
      "description": "Traditional thumbnail testing is broken. YouTube''s A/B testing only works after upload, risking algorithm performance. Creators need data-backed CTR predictions before they commit.",
      "pain_points": [
        {
          "icon": "trending-down",
          "title": "One wrong thumbnail tanks your video",
          "description": "Thumbnails drive 50%+ of click decisions. A 10% CTR difference means thousands of lost views—per video."
        },
        {
          "icon": "clock",
          "title": "You can''t test without publishing",
          "description": "YouTube''s A/B testing only works after upload. By the time you have data, the algorithm has moved on."
        },
        {
          "icon": "alert-triangle",
          "title": "Changing thumbnails kills momentum",
          "description": "Swapping thumbnails after launch signals instability to the algorithm. Your video loses push."
        }
      ],
      "stat_callout": {
        "number": "50%",
        "label": "of YouTube CTR comes from thumbnails",
        "source": "YouTube Creator Insights 2024"
      }
    },
    "solution_section": {
      "section_id": "solution",
      "eyebrow": "Pre-Publish Testing",
      "headline": "Data before decisions",
      "description": "ThumbTest transforms thumbnail guesswork into statistical certainty. Test 2-4 variants with real viewers who match your demographics, get confidence-backed winners in hours.",
      "features": [
        {
          "icon": "clock",
          "title": "Pre-Publish Testing",
          "description": "Test 2-4 thumbnail variants before your video goes live. Zero algorithm risk."
        },
        {
          "icon": "users",
          "title": "Audience-Matched Panels",
          "description": "Real viewers who match your demographics see your thumbnails and choose."
        },
        {
          "icon": "bar-chart-3",
          "title": "Statistical Confidence",
          "description": "Know when you have a real winner vs. random noise. Clear confidence scores."
        },
        {
          "icon": "zap",
          "title": "Results in Hours",
          "description": "Get your winner in 3-12 hours. Fast enough for your upload schedule."
        },
        {
          "icon": "trending-up",
          "title": "Pattern Recognition",
          "description": "See what''s worked across your tests. Learn what YOUR audience responds to."
        },
        {
          "icon": "layout",
          "title": "Title + Thumbnail",
          "description": "Test the full package. Viewers see title and thumbnail together, like real YouTube."
        }
      ],
      "visual": {
        "type": "demo_video",
        "description": "60-second walkthrough showing thumbnail upload, test setup, and results dashboard with clear winner"
      }
    },
    "how_it_works": {
      "section_id": "how-it-works",
      "eyebrow": "Simple Process",
      "headline": "Three steps to your winner",
      "steps": [
        {
          "number": 1,
          "title": "Upload your variants",
          "description": "Drop in 2-4 thumbnail options and your video title.",
          "visual_description": "Upload interface with thumbnail variants and title field"
        },
        {
          "number": 2,
          "title": "We find your viewers",
          "description": "100+ real people matching your audience demographics see your thumbnails.",
          "visual_description": "Audience targeting interface with demographic options"
        },
        {
          "number": 3,
          "title": "Get your winner",
          "description": "See clear results with statistical confidence. Upload with certainty.",
          "visual_description": "Results dashboard showing winning thumbnail with confidence percentage"
        }
      ]
    },
    "social_proof": {
      "section_id": "proof",
      "eyebrow": "Creator Success",
      "headline": "Creators trust the data",
      "testimonials": [
        {
          "quote": "ThumbTest saved my video before it even went live. The data showed my gut choice would have gotten 40% fewer clicks. I swapped thumbnails and hit 15% CTR—my best performance yet.",
          "author": "Tyler Chen",
          "role": "Tech YouTuber",
          "company": "285K subscribers",
          "avatar_description": "Young tech creator with multiple monitors and RGB setup",
          "result": "32% CTR improvement"
        },
        {
          "quote": "As an agency, we can''t afford to guess on thumbnails for our clients. ThumbTest gives us the confidence to present data-backed choices. Our clients'' CTR has improved across the board.",
          "author": "Maria Rodriguez",
          "role": "Agency Director", 
          "company": "Creator Collective",
          "avatar_description": "Professional woman in modern agency office",
          "result": "Improved all client CTRs"
        },
        {
          "quote": "I used to spend hours designing thumbnails and just hoping one would work. Now I test 3 variants, get clear data in 6 hours, and upload with certainty. Game changer.",
          "author": "Gaming with James",
          "role": "Gaming Creator",
          "company": "420K subscribers",
          "avatar_description": "Male gamer with colorful gaming setup background",
          "result": "Eliminated thumbnail guesswork"
        }
      ],
      "stats": [
        {
          "number": "5,000+",
          "label": "Active Creators",
          "context": "testing weekly"
        },
        {
          "number": "50K+",
          "label": "Thumbnails Tested",
          "context": "and counting"
        },
        {
          "number": "25%",
          "label": "Average CTR Lift",
          "context": "from winning thumbnails"
        },
        {
          "number": "6 hours",
          "label": "Average Results Time",
          "context": "fast enough for your schedule"
        }
      ],
      "logos": {
        "headline": "Works With Your Workflow",
        "companies": ["YouTube Studio", "Canva", "Photoshop", "Figma", "TubeBuddy", "VidIQ"]
      },
      "trust_badges": [
        {
          "icon": "shield",
          "text": "Your Content Is Safe"
        },
        {
          "icon": "zap",
          "text": "Results in Hours"
        },
        {
          "icon": "globe",
          "text": "Real Human Testers"
        }
      ]
    },
    "pricing": {
      "section_id": "pricing",
      "eyebrow": "Simple Pricing",
      "headline": "Start with a free test",
      "subheadline": "See the data for yourself. Your first test is on us.",
      "plans": [
        {
          "name": "Free Trial",
          "price": "Free",
          "price_detail": "one test",
          "description": "Perfect for trying ThumbTest risk-free",
          "features": [
            "1 free test (up to 3 variants)",
            "50 responses",
            "Basic demographic targeting",
            "Results within 24 hours",
            "Confidence scoring"
          ],
          "cta": "Start Free Test",
          "highlighted": false,
          "badge": null
        },
        {
          "name": "Pay Per Test",
          "price": "$15",
          "price_detail": "per test",
          "description": "Perfect for occasional testing",
          "features": [
            "Up to 4 variants per test",
            "100 responses",
            "Full demographic targeting", 
            "Results within 12 hours",
            "Confidence scoring",
            "Test history"
          ],
          "cta": "Buy Single Test",
          "highlighted": false,
          "badge": null
        },
        {
          "name": "Creator",
          "price": "$39",
          "price_detail": "/month",
          "description": "For regular creators testing weekly",
          "features": [
            "10 tests per month",
            "Up to 4 variants, 100 responses each",
            "Full targeting + audience profiling",
            "Results within 6 hours",
            "Test history and patterns",
            "Priority support"
          ],
          "cta": "Start Creator Plan",
          "highlighted": true,
          "badge": "Most Popular"
        },
        {
          "name": "Pro",
          "price": "$99",
          "price_detail": "/month",
          "description": "For power users and multi-channel creators",
          "features": [
            "30 tests per month",
            "Up to 6 variants, 150 responses",
            "Advanced audience segmentation",
            "Results within 3 hours",
            "AI winner analysis",
            "Competitive tracking",
            "Team access (3 seats)"
          ],
          "cta": "Upgrade to Pro",
          "highlighted": false,
          "badge": null
        }
      ],
      "guarantee": {
        "headline": "Results or Refund",
        "description": "If your test doesn''t show a statistically significant winner, we''ll refund your test credit."
      },
      "pricing_note": "All plans include unlimited thumbnail uploads and secure data handling."
    },
    "faq": {
      "section_id": "faq",
      "headline": "Frequently Asked Questions",
      "questions": [
        {
          "question": "How is this different from YouTube''s native A/B testing?",
          "answer": "YouTube''s testing happens AFTER you publish—you''re risking algorithm performance on a live video. ThumbTest lets you test BEFORE upload. No risk, no regrets."
        },
        {
          "question": "Who sees my thumbnails?",
          "answer": "Real people from survey panels who match your audience demographics. Not bots, not random clicks—actual humans making click decisions."
        },
        {
          "question": "How many responses do I need for reliable results?",
          "answer": "Our tests use 100+ responses by default, which typically reaches statistical significance. We''ll tell you the confidence level with every result."
        },
        {
          "question": "How fast do I get results?",
          "answer": "Most tests complete in 3-12 hours depending on your plan and targeting. Fast enough for your upload schedule."
        },
        {
          "question": "What if there''s no clear winner?",
          "answer": "We''ll tell you that too. Sometimes thumbnails truly tie—that''s useful data. It means you can pick either, or neither is great and you should try new variants."
        },
        {
          "question": "Can I test titles too?",
          "answer": "Yes! Every test includes your title because viewers see both together. You can also run title-only variations with the same thumbnail."
        }
      ]
    },
    "final_cta": {
      "section_id": "cta",
      "headline": "Your next thumbnail shouldn''t be a guess",
      "subheadline": "One test could mean thousands more views on your next video.",
      "cta_text": "Test Your First Thumbnail Free",
      "trust_element": "Free test • No credit card • Results in hours"
    },
    "footer": {
      "tagline": "Know before you upload.",
      "links": {
        "product": ["Features", "Pricing", "How It Works", "FAQ"],
        "resources": ["Blog", "Help Center", "Best Practices", "Case Studies"],
        "company": ["About", "Careers", "Press", "Contact"],
        "legal": ["Privacy", "Terms", "Security", "Data Policy"]
      },
      "social": ["Twitter", "YouTube", "Discord", "Instagram"],
      "newsletter": {
        "headline": "YouTube tips & case studies",
        "placeholder": "Your email",
        "cta": "Get Tips"
      }
    }
  }'::jsonb,
  TRUE,
  NOW(),
  NOW()
) ON CONFLICT (slug) DO UPDATE SET
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert comprehensive execution plan for ThumbTest
INSERT INTO execution_plans (idea_id, user_id, elevator_pitch, persona, user_stories, recommended_stack, launch_checklist, created_at)
VALUES (
  'thumbtest-001',
  NULL,
  '{
    "problem_statement": "Thumbnails make or break YouTube videos—they account for 50%+ of CTR decisions. But creators can''t test thumbnails without publishing, and changing thumbnails after upload tanks the algorithm. They''re forced to guess, often losing thousands of views on a single wrong choice.",
    "solution_summary": "Upload thumbnail variants before publishing. ThumbTest shows them to real users matching your audience demographics and measures actual click preference. Get statistically significant CTR predictions before you commit. Historical analysis reveals which thumbnail styles perform best for your channel.",
    "target_customer": {
      "primary": "YouTubers with 50K-500K subscribers who publish 2+ videos weekly and actively optimize for CTR",
      "secondary": "YouTube agencies managing multiple channels, thumbnail designers who want to prove their value",
      "market_size_estimate": {
        "tam": "$5B YouTube creator tools and services market",
        "sam": "$300M thumbnail and analytics tools",
        "som": "$30M serious YouTubers willing to pay for optimization tools"
      }
    },
    "why_now": "YouTube is more competitive than ever—top channels test everything. Native A/B testing is locked behind YouTube Partners and has limitations. AI thumbnail generation is flooding the market with more competition. Creators who don''t optimize get buried."
  }',

  '{
    "direct_competitors": [
      {
        "name": "TubeBuddy",
        "url": "https://tubebuddy.com",
        "positioning": "All-in-one YouTube toolkit with A/B testing",
        "pricing": "Free, $4.50/mo, $19.60/mo, $39.20/mo",
        "strengths": ["Huge user base", "Native YouTube A/B testing", "Comprehensive toolkit"],
        "weaknesses": ["A/B testing is post-publish only", "Tests take 2+ weeks", "Bloated with features most don''t use"]
      },
      {
        "name": "VidIQ",
        "url": "https://vidiq.com",
        "positioning": "YouTube SEO and optimization suite",
        "pricing": "Free, $7.50/mo, $39/mo, $415/mo",
        "strengths": ["Strong SEO features", "Daily ideas", "Competitor tracking"],
        "weaknesses": ["No thumbnail testing", "Focus is keywords, not CTR", "Expensive higher tiers"]
      },
      {
        "name": "Thumbnail Test",
        "url": "https://thumbtest.com",
        "positioning": "Pre-publish thumbnail testing",
        "pricing": "Free tier, paid plans",
        "strengths": ["First mover in pre-publish testing", "Simple and focused"],
        "weaknesses": ["Limited audience targeting", "Small test panel", "Basic analytics"]
      },
      {
        "name": "PickFu",
        "url": "https://pickfu.com",
        "positioning": "General A/B testing for any creative",
        "pricing": "$15-$50+ per poll",
        "strengths": ["Quality panel", "Detailed responses", "Multiple use cases"],
        "weaknesses": ["Not YouTube-specific", "Expensive per test", "No channel-specific targeting"]
      }
    ],
    "indirect_competitors": [
      "Posting to Twitter/Discord and asking followers to vote",
      "Using AI click predictors (unproven accuracy)",
      "Gut feeling and experience",
      "Hiring thumbnail designers who ''know what works''",
      "YouTube''s native A/B testing (post-publish only)"
    ],
    "market_gaps": [
      "No one does pre-publish testing with audience-matched panels at scale",
      "TubeBuddy''s testing happens after upload—algorithm already damaged if you change",
      "Generic testing tools don''t understand YouTube-specific CTR patterns",
      "No historical analysis of what works for YOUR channel specifically",
      "No integration with the thumbnail creation workflow"
    ]
  }',

  ARRAY[
    '{
      "positioning_statement": "For YouTubers who can''t afford to guess, ThumbTest is a thumbnail validation platform that predicts CTR before you publish. Unlike post-publish A/B tests that risk algorithm damage, we test with real viewers who match your audience—before you commit.",
      "unique_value_proposition": "Know which thumbnail wins before you upload.",
      "key_differentiators": [
        "Pre-publish testing — No algorithm risk, test before committing",
        "Audience-matched panels — Real viewers who match YOUR demographics",
        "Statistical confidence — Know when you have a real winner, not noise",
        "Channel learning — Historical data shows patterns in what works for you",
        "Speed — Results in hours, not weeks"
      ],
      "category": "YouTube thumbnail optimization (creating: ''Pre-publish CTR prediction'')"
    }',

    '{
      "core_features": [
        {
          "feature": "Thumbnail Upload",
          "description": "Upload 2-4 thumbnail variants for any video. Supports standard YouTube dimensions.",
          "priority": "P0",
          "effort": "Small"
        },
        {
          "feature": "Title Context",
          "description": "Add video title so testers see the full package (thumbnail + title), like real YouTube.",
          "priority": "P0",
          "effort": "Small"
        },
        {
          "feature": "Audience Targeting",
          "description": "Select basic demographics: age range, gender, interests/topics. Panel matches these.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Click Test",
          "description": "Show thumbnails in simulated YouTube browse context. Track which one users click.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Statistical Analysis",
          "description": "Calculate confidence intervals. Show clear winner only when statistically significant.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Results Dashboard",
          "description": "See CTR per variant, demographic breakdowns, and click heatmaps on thumbnails.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Test History",
          "description": "Archive of all past tests with results. Reference what''s worked before.",
          "priority": "P1",
          "effort": "Small"
        },
        {
          "feature": "Quick Retest",
          "description": "One-click to run a new test with modified variants.",
          "priority": "P1",
          "effort": "Small"
        }
      ],
      "post_mvp_features": [
        "Channel connection for automatic audience profiling",
        "AI analysis of why certain thumbnails win",
        "Competitive thumbnail tracking",
        "Thumbnail design suggestions based on winners",
        "Team workspaces for agencies",
        "API for workflow integration",
        "Chrome extension for quick testing from YouTube Studio",
        "Performance correlation (compare test predictions to actual YouTube CTR)"
      ],
      "out_of_scope": [
        "Thumbnail design/creation (use Canva/Photoshop)",
        "Full YouTube analytics (use TubeBuddy/VidIQ)",
        "Video editing",
        "SEO optimization",
        "Post-publish A/B testing (YouTube native does this)"
      ],
      "mvp_timeline": "4-6 weeks for solo developer, 3-4 weeks for small team"
    }',

    '{
      "recommended_stack": {
        "frontend": "Next.js 14 — Fast, good for image-heavy apps, SEO-friendly landing page",
        "backend": "Next.js API Routes + Supabase — Simple, handles auth and data well",
        "database": "Supabase (Postgres) — Stores tests, results, user data. Good free tier.",
        "auth": "Supabase Auth — Email + Google OAuth (creators use Google)",
        "payments": "Stripe — Test-based credits or subscription, handles both",
        "hosting": "Vercel — Optimal for Next.js, good image optimization",
        "panel_provider": "Pollfish, Prolific, or custom panel — Critical decision",
        "key_integrations": [
          "Pollfish API or Prolific API — Access to survey respondents",
          "YouTube Data API — For channel connection feature (post-MVP)",
          "Cloudinary or Imgix — Image optimization and delivery",
          "PostHog — Product analytics"
        ]
      },
      "build_vs_buy": [
        {
          "component": "Survey/Test Panel",
          "recommendation": "Buy (Pollfish or Prolific)",
          "reasoning": "Building a panel is a separate business. Pollfish has targeting and scale. Start there, consider own panel at scale."
        },
        {
          "component": "Statistical Analysis",
          "recommendation": "Build",
          "reasoning": "Simple chi-square tests and confidence intervals. Library-level math, no need to outsource."
        },
        {
          "component": "Test Interface",
          "recommendation": "Build",
          "reasoning": "The simulated YouTube browse experience IS the product. Must be custom."
        },
        {
          "component": "Image Storage/Delivery",
          "recommendation": "Buy (Cloudinary)",
          "reasoning": "Handles resizing, optimization, CDN. Not worth building."
        }
      ],
      "estimated_monthly_cost": {
        "0_100_users": "$100-300/mo (Vercel free, Supabase free, $100-200 panel costs per active test)",
        "100_1000_users": "$500-2,000/mo (Panel costs scale with usage)",
        "1000_10000_users": "$3,000-10,000/mo (Consider negotiated panel rates or own panel)"
      }
    }'
  ],

  '{
    "pricing_model": "Credit-based with subscription options",
    "pricing_rationale": "Tests have real marginal cost (panel fees). Credits align cost with value. Subscriptions for predictable heavy users. This is a ''pay for value'' tool—each test has clear ROI.",
    "tiers": [
      {
        "name": "Free Trial",
        "price": "$0",
        "target_customer": "First-time users testing the product",
        "features": [
          "1 free test (up to 3 variants)",
          "50 responses",
          "Basic demographic targeting",
          "Results within 24 hours"
        ],
        "limitations": [
          "1 test only",
          "Limited targeting options",
          "No test history"
        ]
      },
      {
        "name": "Pay Per Test",
        "price": "$15 per test",
        "target_customer": "Occasional testers, smaller creators",
        "features": [
          "Up to 4 variants per test",
          "100 responses",
          "Full demographic targeting",
          "Results within 12 hours",
          "Confidence scoring"
        ],
        "limitations": [
          "Pay per test (no bulk discount)",
          "No priority support"
        ]
      },
      {
        "name": "Creator",
        "price": "$39/month",
        "target_customer": "Regular creators testing weekly",
        "features": [
          "10 tests per month",
          "Up to 4 variants, 100 responses each",
          "Full targeting + audience profiling",
          "Results within 6 hours",
          "Test history and patterns",
          "Priority support"
        ],
        "limitations": [
          "10 tests/month",
          "Single channel"
        ]
      },
      {
        "name": "Pro",
        "price": "$99/month",
        "target_customer": "Power users, multi-channel creators",
        "features": [
          "30 tests per month",
          "Up to 6 variants, 150 responses",
          "Advanced audience segmentation",
          "Results within 3 hours",
          "AI winner analysis",
          "Competitive tracking (3 channels)",
          "Team access (3 seats)"
        ],
        "limitations": [
          "30 tests/month"
        ]
      },
      {
        "name": "Agency",
        "price": "$249/month",
        "target_customer": "YouTube agencies managing multiple channels",
        "features": [
          "Unlimited tests",
          "Up to 8 variants, 200 responses",
          "White-label reports",
          "Unlimited channels",
          "10 team seats",
          "API access",
          "Dedicated support"
        ],
        "limitations": []
      }
    ],
    "free_tier_strategy": "One free test to prove the value. Must be enough responses to show statistical winner. Goal: demonstrate clear value, convert to paid on second test.",
    "annual_discount": "20% discount on annual plans",
    "pricing_psychology": "Per-test pricing makes value tangible (''$15 to know which thumbnail will get 20% more clicks''). Creator tier at $39 is < $4/test for weekly uploaders—obvious value."
  }',

  ARRAY[
    'MVP core features: thumbnail upload, basic targeting, test creation, panel integration',
    'Statistical engine: confidence calculations, winner determination, result visualization',
    'User dashboard: test history, result analytics, pattern recognition',
    'Payment system: credit-based billing with Stripe integration',
    'Panel integration: Pollfish/Prolific API for demographic targeting',
    'Beta testing: 50+ YouTubers across subscriber tiers for validation',
    'Landing page: conversion-optimized with free test offer',
    'Legal compliance: data privacy, panel terms, user agreements',
    'Launch strategy: Product Hunt, YouTube creator communities, influencer outreach',
    'Analytics setup: conversion tracking, cohort analysis, panel quality monitoring'
  ],

  NOW()
);