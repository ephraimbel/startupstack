-- LaunchList Seed Data (idea_009)
-- Viral waitlist platform for product launches

INSERT INTO ideas (
  id, user_id, title, one_liner, problem, target_customer, solution, monetization,
  tags, keywords, status, demand_score, demand_band, trend_label, validation_summary,
  validated_at, is_public, is_saved, created_at, updated_at, why_now, revenue_impact,
  market_size, competition_level, category, business_type, price_range
) VALUES (
  'launchlist-009',
  NULL,
  'LaunchList',
  'Waitlists that grow themselves',
  'Most startups launch with a boring Mailchimp form that collects emails and does nothing with them. No excitement, no virality, no community building. Signups trickle in, early adopters get bored waiting, and launch day arrives with a lukewarm list of people who forgot they even signed up.',
  'Founders and indie hackers launching new products who want to build pre-launch momentum and validate demand before writing code',
  'Launch beautiful, high-converting waitlist pages in minutes—no code required. Built-in referral mechanics let users move up the list by sharing. Leaderboards create competition and urgency. Automated email sequences keep signups warm and engaged.',
  '$29/month (5K signups), $79/month (25K signups), $199/month (unlimited + team features). Free tier: 500 signups with LaunchList branding.',
  ARRAY['viral-marketing', 'waitlists', 'product-launch', 'referral-system', 'email-marketing', 'analytics'],
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
  'Perfect timing: (1) Product Hunt and Twitter/X launches have become the default playbook—everyone needs a waitlist now, (2) Harry''s, Robinhood, and Dropbox proved referral waitlists can generate millions of signups—founders want to replicate this, (3) No-code tools have trained users to expect beautiful pages without developers.',
  'Founders save 2-4 weeks of engineering time worth $5K-15K and achieve 1.5-3x viral coefficient on their launches. Users typically see 240% more engaged signups compared to static email collection forms.',
  '$500M pre-launch and waitlist tools market',
  'Medium',
  'productivity',
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

-- Insert landing page for LaunchList
INSERT INTO landing_pages (idea_id, slug, content, is_published, created_at, updated_at)
VALUES (
  'launchlist-009',
  'launchlist',
  '{
    "meta": {
      "title": "LaunchList — Waitlists That Grow Themselves",
      "description": "Beautiful pre-launch pages with built-in referral mechanics. Turn every signup into a marketer. Launch with thousands of warm leads, not crickets.",
      "og_image_concept": "Split screen: boring email form vs beautiful viral waitlist with referral leaderboard and position tracking. Animated growth visualization with rocket launch theme."
    },
    "hero": {
      "headline": "Waitlists that grow themselves",
      "subheadline": "Beautiful pre-launch pages with built-in referral mechanics. Turn every signup into a marketer. Launch with thousands of warm leads.",
      "cta_primary": {
        "text": "Create Free Waitlist",
        "url": "/signup"
      },
      "cta_secondary": {
        "text": "See examples →",
        "url": "#examples"
      },
      "social_proof_snippet": "Join founders who have collected 1M+ pre-launch signups",
      "hero_visual": {
        "type": "product_screenshot",
        "description": "Split screen showing boring old Mailchimp form vs. beautiful LaunchList page with referral leaderboard and position counter. Animated viral growth visualization."
      }
    },
    "problem_section": {
      "section_id": "problem",
      "eyebrow": "Your waitlist is probably broken",
      "headline": "Most launches fail because nobody cares by launch day",
      "description": "Harry''s collected 100,000+ signups before launch using referral waitlists. You''re using a boring form.",
      "pain_points": [
        {
          "icon": "mail",
          "title": "Signups and then... silence", 
          "description": "People join your waitlist and forget you exist. By launch day, they don''t remember signing up. Zero engagement, zero excitement."
        },
        {
          "icon": "link",
          "title": "No virality without engineering",
          "description": "Building referral tracking takes weeks. You know it works—Harry''s got 100K signups—but you don''t have time to build it yourself."
        },
        {
          "icon": "frown",
          "title": "Boring pages lose signups",
          "description": "Your product is innovative but your waitlist page looks like a 2015 Mailchimp form. First impressions matter. People bounce."
        },
        {
          "icon": "bar-chart",
          "title": "No idea what''s working",
          "description": "Is your conversion rate good? Who are your top referrers? How many will actually show up on launch day? You''re flying blind."
        }
      ],
      "stat_callout": {
        "number": "100,000+",
        "label": "signups collected by Harry''s before launch using referral waitlists",
        "source": "Harvard Business Review"
      }
    },
    "solution_section": {
      "section_id": "solution",
      "eyebrow": "AI-Powered Viral Mechanics",
      "headline": "Launch with momentum, not crickets",
      "description": "Everything you need to turn your pre-launch waitlist into a viral growth engine.",
      "features": [
        {
          "icon": "palette",
          "title": "Beautiful Launch Pages",
          "description": "Modern templates designed for startups. Customize in minutes. Mobile-perfect by default."
        },
        {
          "icon": "link",
          "title": "Referral Mechanics",
          "description": "Every signup gets a unique link. Track referrals. Reward top sharers with early access."
        },
        {
          "icon": "trophy",
          "title": "Waitlist Position",
          "description": "Show position in line. Leaderboard creates competition. People share to move up."
        },
        {
          "icon": "mail",
          "title": "Email Sequences",
          "description": "Keep signups warm with automated updates. They''ll remember you on launch day."
        },
        {
          "icon": "trending-up",
          "title": "Viral Analytics",
          "description": "See your viral coefficient. Track top referrers. Know your launch day audience."
        },
        {
          "icon": "rocket",
          "title": "One-Click Launch",
          "description": "Custom domain, social sharing, OG previews—everything you need, nothing you don''t."
        }
      ],
      "visual": {
        "type": "video",
        "description": "Screen recording showing: template selection → customization → referral setup → live page with people signing up and sharing"
      }
    },
    "how_it_works": {
      "section_id": "how-it-works",
      "eyebrow": "Live in five minutes",
      "headline": "Three steps to viral growth",
      "steps": [
        {
          "number": 1,
          "title": "Pick a template",
          "description": "Choose from modern, conversion-optimized designs. Add your brand and messaging.",
          "visual_description": "Template gallery with beautiful startup-focused waitlist designs"
        },
        {
          "number": 2,
          "title": "Enable referrals",
          "description": "One toggle turns on referral tracking. Configure rewards if you want—or keep it simple.",
          "visual_description": "Simple toggle interface with referral settings and reward configuration"
        },
        {
          "number": 3,
          "title": "Launch and grow",
          "description": "Share your page. Watch signups multiply as early adopters spread the word.",
          "visual_description": "Live analytics dashboard showing viral growth with real-time signup notifications"
        }
      ]
    },
    "social_proof": {
      "section_id": "proof",
      "eyebrow": "Founder Success",
      "headline": "Founders are launching bigger",
      "testimonials": [
        {
          "quote": "LaunchList helped us get 5,000 signups before launch—10x more than our last product. The referral system just works.",
          "author": "Alex Chen",
          "role": "Indie Hacker",
          "company": "BuildSpace",
          "avatar_description": "Young founder with modern startup workspace background",
          "result": "10x more signups"
        },
        {
          "quote": "Instead of 200 lukewarm emails, we launched with 3,000 engaged users. Our viral coefficient was 1.4!",
          "author": "Maria Santos",
          "role": "SaaS Founder", 
          "company": "FlowTrack",
          "avatar_description": "Professional female founder with laptop in coffee shop",
          "result": "1.4x viral coefficient"
        },
        {
          "quote": "The email sequences kept our audience warm for 3 months. Launch day felt like Christmas morning.",
          "author": "David Kim",
          "role": "Product Manager",
          "company": "TechCorp",
          "avatar_description": "Product manager with dual monitor setup",
          "result": "78% signup-to-launch conversion"
        }
      ],
      "stats": [
        {
          "number": "1,000,000+",
          "label": "Signups Collected",
          "context": "across all waitlists"
        },
        {
          "number": "1.8",
          "label": "Average Viral Coefficient",
          "context": "vs 1.0 for static forms"
        },
        {
          "number": "500+",
          "label": "Products Launched",
          "context": "with LaunchList"
        },
        {
          "number": "78%",
          "label": "Signup-to-Launch Rate",
          "context": "average conversion"
        }
      ],
      "logos": {
        "headline": "Works With Your Stack",
        "companies": ["Zapier", "Mailchimp", "ConvertKit", "Notion", "Slack", "Discord"]
      },
      "trust_badges": [
        {
          "icon": "shield",
          "text": "GDPR Compliant"
        },
        {
          "icon": "zap", 
          "text": "5-Min Setup"
        },
        {
          "icon": "globe",
          "text": "99.9% Uptime"
        }
      ]
    },
    "pricing": {
      "section_id": "pricing",
      "eyebrow": "Free to start. Scale when you''re viral.",
      "headline": "500 signups free. No credit card required.",
      "subheadline": "Engineering a referral system: 2-4 weeks | LaunchList: 5 minutes",
      "plans": [
        {
          "name": "Free",
          "price": "$0",
          "price_detail": "forever",
          "description": "500 signups, 1 waitlist, referral tracking, LaunchList branding",
          "features": [
            "500 signups total",
            "1 active waitlist",
            "Basic referral tracking",
            "Confirmation emails",
            "LaunchList branding",
            "Basic analytics"
          ],
          "cta": "Get Started Free",
          "highlighted": false,
          "badge": null
        },
        {
          "name": "Starter",
          "price": "$29",
          "price_detail": "/month",
          "description": "5K signups, 3 waitlists, custom domain, email sequences, no branding",
          "features": [
            "5,000 signups/month",
            "3 active waitlists",
            "Remove LaunchList branding",
            "Email sequences (3 emails)",
            "Custom domain support",
            "Reward tier configuration",
            "Priority support"
          ],
          "cta": "Start Free Trial",
          "highlighted": true,
          "badge": "Most Popular"
        },
        {
          "name": "Growth",
          "price": "$79",
          "price_detail": "/month", 
          "description": "25K signups, unlimited waitlists, A/B testing, integrations, fraud detection",
          "features": [
            "25,000 signups/month",
            "Unlimited waitlists",
            "Unlimited email sequences",
            "A/B testing",
            "Advanced analytics",
            "Integrations (Zapier, etc.)",
            "Fraud detection"
          ],
          "cta": "Start Free Trial",
          "highlighted": false,
          "badge": null
        },
        {
          "name": "Scale",
          "price": "$199",
          "price_detail": "/month",
          "description": "Unlimited signups, white-label, team seats, API access, priority support",
          "features": [
            "Unlimited signups",
            "Everything in Growth",
            "White-label option",
            "Team collaboration (5 seats)",
            "API access",
            "Custom reporting",
            "Dedicated success manager"
          ],
          "cta": "Contact Sales",
          "highlighted": false,
          "badge": "Best for Teams"
        }
      ],
      "guarantee": {
        "headline": "Free Trial on All Plans",
        "description": "Try LaunchList risk-free. No credit card required. Cancel anytime."
      },
      "pricing_note": "All plans include unlimited exports and integrations."
    },
    "faq": {
      "section_id": "faq",
      "headline": "Questions? We''ve Got Answers.",
      "questions": [
        {
          "question": "How does the referral system work?",
          "answer": "Each signup gets a unique link. When someone signs up through that link, both people move up the waitlist. You can also set reward tiers—like early access at 5 referrals, discount at 10, swag at 25."
        },
        {
          "question": "Can I use my own domain?",
          "answer": "Yes! Starter plans and above include custom domains. Your waitlist can live at waitlist.yourproduct.com with full SSL."
        },
        {
          "question": "How do I prevent fake signups and referrals?",
          "answer": "We detect duplicate emails, disposable email domains, and suspicious referral patterns. Growth plans include advanced fraud detection."
        },
        {
          "question": "Can I export my signups?",
          "answer": "Absolutely. Export to CSV anytime, or integrate directly with Mailchimp, ConvertKit, and 50+ tools via Zapier."
        },
        {
          "question": "What happens on launch day?",
          "answer": "You can send a launch announcement to your entire list with one click. We''re also building Product Hunt integration to auto-notify signups when you launch."
        },
        {
          "question": "Is there really a free plan?",
          "answer": "Yes—500 signups, forever free. Enough to validate your idea. When you''re ready to scale, upgrade. We grow when you grow."
        }
      ]
    },
    "final_cta": {
      "section_id": "cta",
      "headline": "Your launch starts now",
      "subheadline": "Create a viral waitlist in minutes. Free for up to 500 signups.",
      "cta_text": "Create Free Waitlist →",
      "trust_element": "✓ No credit card required ✓ 500 signups free ✓ Launch in 5 minutes ✓ Used by 1000+ founders"
    },
    "footer": {
      "tagline": "Waitlists that grow themselves.",
      "links": {
        "product": ["Features", "Pricing", "How It Works", "Templates"],
        "resources": ["Blog", "Help Center", "Launch Guide", "Community"],
        "company": ["About", "Careers", "Press", "Contact"],
        "legal": ["Privacy", "Terms", "Security", "GDPR"]
      },
      "social": ["Twitter", "LinkedIn", "Product Hunt", "Discord"],
      "newsletter": {
        "headline": "Launch tips & viral strategies",
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

-- Insert execution plan with Tier 1 deliverable content for LaunchList
INSERT INTO execution_plans (idea_id, user_id, elevator_pitch, persona, user_stories, recommended_stack, launch_checklist, created_at)
VALUES (
  'launchlist-009',
  NULL,
  '{
    "problem_statement": "Most startups launch with a boring Mailchimp form that collects emails and does nothing with them. No excitement, no virality, no community building. Signups trickle in, early adopters get bored waiting, and launch day arrives with a lukewarm list of people who forgot they even signed up. Meanwhile, the 1% of launches that go viral all share a secret: referral-powered waitlists that turn every signup into a marketer.",
    "solution_summary": "Launch beautiful, high-converting waitlist pages in minutes—no code required. Built-in referral mechanics let users move up the list by sharing. Leaderboards create competition and urgency. Automated email sequences keep signups warm and engaged. Real-time analytics show your viral coefficient, top referrers, and conversion funnel. Turn your waitlist into a growth engine, not a dead email dump.",
    "target_customer": {
      "primary": "Founders and indie hackers launching new products who want to build pre-launch momentum and validate demand before writing code",
      "secondary": "Product managers at startups launching new features or products who need to generate internal/external buzz",
      "market_size_estimate": {
        "tam": "$5B marketing automation and landing page market",
        "sam": "$500M pre-launch and waitlist tools market",
        "som": "$50M founders actively launching products seeking viral waitlist solutions"
      }
    },
    "why_now": "Perfect timing: (1) Product Hunt and Twitter/X launches have become the default playbook—everyone needs a waitlist now, (2) Harry''s, Robinhood, and Dropbox proved referral waitlists can generate millions of signups—founders want to replicate this, (3) No-code tools have trained users to expect beautiful pages without developers, (4) Economic uncertainty means founders must validate before building—waitlists are the ultimate validation tool."
  }',

  '{
    "direct_competitors": [
      {
        "name": "Waitlist.me (Viral Loops)",
        "url": "https://viral-loops.com/waitlist",
        "positioning": "Referral marketing platform with waitlist templates",
        "pricing": "$49/mo Startup, $199/mo Growth, $499/mo Power",
        "strengths": ["Proven referral mechanics", "Good template variety", "Established brand"],
        "weaknesses": ["Expensive for early-stage", "Overly complex for simple waitlists", "Clunky UX", "Focus is referral broadly, not waitlists specifically"]
      },
      {
        "name": "LaunchRock",
        "url": "https://launchrock.com",
        "positioning": "Coming soon pages for startups",
        "pricing": "Free basic, $49/mo Pro",
        "strengths": ["Simple to use", "Good for basic pages", "Free tier exists"],
        "weaknesses": ["Dated design templates", "Limited referral features", "No email sequences", "Feels abandoned/legacy"]
      },
      {
        "name": "KickoffLabs",
        "url": "https://kickofflabs.com",
        "positioning": "Viral landing pages and contests",
        "pricing": "$49/mo Hobby, $99/mo Premium, $199/mo Business",
        "strengths": ["Strong referral tracking", "Contest mechanics", "Good analytics"],
        "weaknesses": ["Complex pricing", "Learning curve", "Templates need updating", "Feature bloat"]
      },
      {
        "name": "Gleam",
        "url": "https://gleam.io",
        "positioning": "Contests, giveaways, and viral campaigns",
        "pricing": "$10/mo Hobby, $79/mo Pro, $199/mo Business",
        "strengths": ["Versatile campaign types", "Good social integrations", "Established"],
        "weaknesses": ["More contest-focused than waitlist", "Complex setup", "Not specifically for product launches"]
      },
      {
        "name": "Carrd + Notion + Zapier (DIY)",
        "url": "https://carrd.co",
        "positioning": "Build it yourself with no-code tools",
        "pricing": "$19/year Carrd + various Zapier costs",
        "strengths": ["Cheap", "Full control", "No vendor lock-in"],
        "weaknesses": ["No built-in referral tracking", "Requires technical setup", "No email sequences", "No analytics out of box"]
      }
    ],
    "indirect_competitors": [
      "Basic landing page builders (Carrd, Framer) without referral features",
      "Email marketing tools (Mailchimp, ConvertKit) with basic signup forms",
      "Custom engineering solutions (expensive, time-consuming)",
      "Typeform/Google Forms for basic email collection (no virality)",
      "Launching without a waitlist (YOLO approach)"
    ],
    "market_gaps": [
      "Existing tools are either too simple (no referrals) or too complex (enterprise features)",
      "Design quality is poor—templates look like 2015",
      "Email sequences are afterthoughts or require separate tools",
      "Analytics are surface-level—no cohort analysis or viral coefficient",
      "No one optimizes for Product Hunt specifically (timing, social proof)",
      "Pricing excludes bootstrap founders with $0 budget at critical validation stage"
    ]
  }',

  ARRAY[
    '{
      "positioning_statement": "For founders launching products who want to turn their waitlist into a growth engine, LaunchList is a viral waitlist platform that combines beautiful pages, referral mechanics, and automated engagement. Unlike basic landing page builders or complex marketing platforms, we''re purpose-built for product launches with everything you need and nothing you don''t.",
      "unique_value_proposition": "Beautiful waitlists that grow themselves. Launch in minutes.",
      "key_differentiators": [
        "Launch-optimized templates: Designed specifically for Product Hunt, Twitter launches, and startup aesthetics",
        "Dead-simple referral tracking: One toggle to enable referral mechanics, no complex setup",
        "Built-in engagement: Email sequences keep signups warm—not just collected",
        "Viral analytics: See your viral coefficient, top referrers, and predict launch day audience",
        "Founder-friendly pricing: Generous free tier for validation, scale when you''re ready"
      ],
      "category": "Viral waitlist platform (creating subcategory: Pre-Launch Growth Engine)"
    }',

    '{
      "core_features": [
        {
          "feature": "Waitlist Page Builder",
          "description": "Drag-and-drop builder with modern templates. Add logo, hero text, value props, and email capture. Mobile-responsive by default.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Referral System",
          "description": "Each signup gets a unique referral link. Track referrals per user. Configurable rewards (early access, discounts, swag tiers).",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Waitlist Position & Leaderboard",
          "description": "Show users their position in line. Display leaderboard of top referrers. Position improves with referrals.",
          "priority": "P0",
          "effort": "Small"
        },
        {
          "feature": "Signup Confirmation Emails",
          "description": "Automatic welcome email with referral link and position. Customizable template.",
          "priority": "P0",
          "effort": "Small"
        },
        {
          "feature": "Email Sequences",
          "description": "Automated drip sequences to keep signups engaged. Templates for common flows (weekly updates, milestone announcements).",
          "priority": "P1",
          "effort": "Medium"
        },
        {
          "feature": "Analytics Dashboard",
          "description": "Track signups, referrals, viral coefficient, conversion rate, and traffic sources. Daily/weekly trends.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Custom Domain",
          "description": "Use your own domain (waitlist.yourproduct.com) for branded experience.",
          "priority": "P1",
          "effort": "Small"
        },
        {
          "feature": "Social Sharing Optimization",
          "description": "Pre-written share messages for Twitter, LinkedIn, email. One-click sharing. OG image preview.",
          "priority": "P1",
          "effort": "Small"
        },
        {
          "feature": "Integrations",
          "description": "Export to Mailchimp, ConvertKit, Notion. Zapier webhook for custom workflows.",
          "priority": "P1",
          "effort": "Medium"
        },
        {
          "feature": "Reward Tiers",
          "description": "Configure rewards at referral milestones (5 referrals = early access, 10 = discount, 25 = swag).",
          "priority": "P1",
          "effort": "Small"
        }
      ],
      "post_mvp_features": [
        "A/B testing for page variants",
        "Countdown timers for launch date",
        "Product Hunt launch integration (auto-notify on launch day)",
        "SMS signup option",
        "Team workspaces for agencies",
        "White-label for client waitlists",
        "Survey questions on signup",
        "Slack notifications for signups",
        "Fraud detection for fake referrals",
        "Embeddable widget for existing sites"
      ],
      "out_of_scope": [
        "Full landing page builder (use Framer, Webflow)",
        "Email marketing platform (use ConvertKit, Mailchimp)",
        "Referral program for existing products (use ReferralCandy)",
        "Contest/giveaway platform (use Gleam)",
        "Product launch management (use ProductHunt, Peerlist)"
      ],
      "mvp_timeline": "5-6 weeks for solo developer, 3-4 weeks for small team"
    }',

    '{
      "recommended_stack": {
        "frontend": "Next.js 14 (App Router) — Great for landing pages, SSR for SEO, fast edge rendering",
        "backend": "Next.js API Routes + Supabase Edge Functions — Simple, serverless, scales",
        "database": "Supabase (Postgres) — Row-level security for multi-tenant, great free tier",
        "auth": "Supabase Auth — For creator accounts (not waitlist signups)",
        "payments": "Stripe — Subscription billing, usage-based for overages",
        "hosting": "Vercel — Edge deployment for global performance, custom domains",
        "email": "Resend or Postmark — Transactional emails with good deliverability",
        "file_storage": "Cloudflare R2 or Supabase Storage — Logo/image uploads",
        "key_integrations": [
          "Resend — Transactional and sequence emails",
          "Zapier — Webhook integration for custom workflows",
          "Mailchimp/ConvertKit APIs — Export subscriber data",
          "Vercel Analytics — Page performance",
          "PostHog — Product analytics"
        ]
      },
      "build_vs_buy": [
        {
          "component": "Page Builder",
          "recommendation": "Build (core product)",
          "reasoning": "This is the product. Use a component library (Radix, shadcn) but build the builder yourself."
        },
        {
          "component": "Referral Tracking",
          "recommendation": "Build (core IP)",
          "reasoning": "Simple to build, and it''s your competitive advantage. Don''t outsource this."
        },
        {
          "component": "Email Sending",
          "recommendation": "Buy (Resend)",
          "reasoning": "Email deliverability is hard. Resend handles reputation, DKIM, etc. Focus on content, not infrastructure."
        },
        {
          "component": "Analytics",
          "recommendation": "Build (simple) + Buy (PostHog)",
          "reasoning": "Build dashboard for key metrics. Use PostHog for product analytics on your own usage."
        },
        {
          "component": "Custom Domains",
          "recommendation": "Buy (Vercel)",
          "reasoning": "Vercel handles SSL, DNS, and custom domains seamlessly. Don''t manage certificates yourself."
        }
      ],
      "estimated_monthly_cost": {
        "0_100_users": "$20-50/mo (Vercel free, Supabase free, ~$20 Resend, PostHog free)",
        "100_1000_users": "$150-400/mo (Vercel Pro, Supabase Pro, ~$50 Resend)",
        "1000_10000_users": "$500-1,500/mo (Scale with email volume and custom domains)"
      }
    }'
  ],

  '{
    "pricing_model": "Freemium with signup limits",
    "pricing_rationale": "Founders need free tier to validate ideas—charging before validation kills conversions. Signup-based pricing aligns with value delivered. Scale pricing with success.",
    "tiers": [
      {
        "name": "Free",
        "price": "$0",
        "target_customer": "Founders validating ideas, small launches",
        "features": [
          "Up to 500 signups",
          "1 waitlist",
          "Basic referral tracking",
          "Confirmation emails",
          "LaunchList branding",
          "Basic analytics"
        ],
        "limitations": [
          "500 signup cap",
          "LaunchList branding",
          "No custom domain",
          "No email sequences",
          "Community support only"
        ]
      },
      {
        "name": "Starter",
        "price": "$29/month ($24/mo annual)",
        "target_customer": "Active launches expecting 1-5K signups",
        "features": [
          "Up to 5,000 signups",
          "3 waitlists",
          "Full referral mechanics",
          "Remove LaunchList branding",
          "Email sequences (3 emails)",
          "Custom domain",
          "Reward tiers",
          "Priority support"
        ],
        "limitations": [
          "5K signup cap",
          "3 email sequence limit",
          "No integrations"
        ]
      },
      {
        "name": "Growth",
        "price": "$79/month ($66/mo annual)",
        "target_customer": "Larger launches, serial launchers",
        "features": [
          "Up to 25,000 signups",
          "Unlimited waitlists",
          "Unlimited email sequences",
          "A/B testing",
          "Advanced analytics",
          "Integrations (Zapier, Mailchimp)",
          "Fraud detection",
          "Slack notifications"
        ],
        "limitations": [
          "25K signup cap"
        ]
      },
      {
        "name": "Scale",
        "price": "$199/month ($166/mo annual)",
        "target_customer": "Big launches, agencies, multiple products",
        "features": [
          "Unlimited signups",
          "Everything in Growth",
          "White-label option",
          "Team seats (5 users)",
          "API access",
          "Priority support",
          "Custom reporting",
          "Dedicated success manager"
        ],
        "limitations": []
      }
    ],
    "free_tier_strategy": "500 signups is enough to validate an idea but not enough for a real launch. Free users become paying users when they see traction. Branding creates awareness.",
    "annual_discount": "17% discount (2 months free) for annual plans",
    "pricing_psychology": "Free tier for validation is critical—founders won''t pay until they believe. Starter at $29 is impulse pricing when launch is imminent. Growth at $79 captures serious launches."
  }',

  ARRAY[
    '{
      "brand_name": "LaunchList",
      "tagline": "Waitlists that grow themselves.",
      "brand_personality": [
        "Energetic — Launching is exciting, the brand should match",
        "Builder-friendly — Made by founders, for founders",
        "Modern — Clean, contemporary aesthetic that matches startup culture",
        "Confident — Your launch will be successful, we''ll help",
        "Simple — No complexity, just results"
      ],
      "brand_voice": {
        "tone": "Excited but not hype-y. Like a founder friend who''s launched 10 products sharing what works.",
        "do": [
          "Use launch language (ship, launch, build, grow)",
          "Celebrate wins and milestones",
          "Be specific about outcomes (signups, viral coefficient)",
          "Reference the startup/indie hacker community",
          "Keep it casual and approachable"
        ],
        "dont": [
          "Don''t be corporate or formal",
          "Don''t overpromise viral success",
          "Don''t use enterprise marketing language",
          "Don''t be condescending to first-time founders",
          "Don''t make it complicated"
        ]
      },
      "visual_direction": {
        "color_palette": {
          "primary": "#8B5CF6 (Violet) — Stands out, creative, energetic",
          "secondary": "#1E1B4B (Dark violet) — Depth, premium feel",
          "accent": "#22C55E (Green) — Success, growth, positive actions",
          "highlight": "#F59E0B (Amber) — Urgency, attention, CTAs",
          "neutrals": ["#FAFAF9 (warm white)", "#18181B (near-black)"]
        },
        "typography": {
          "display": "Cal Sans or Space Grotesk — Bold, modern, startup vibe",
          "body": "Inter — Clean, readable, professional"
        },
        "visual_style": "Modern, energetic, slightly playful. Gradients are okay. Dark mode native. Celebrate the startup aesthetic—think Linear, Vercel, Arc vibes. Use motion/animation for delight."
      },
      "messaging": {
        "elevator_pitch_10s": "LaunchList turns your pre-launch waitlist into a viral growth engine with referral mechanics and automated engagement.",
        "elevator_pitch_30s": "Most waitlists collect emails and do nothing. LaunchList gives you beautiful pages, built-in referral tracking, and email sequences that keep signups engaged. Every person who signs up can move up the list by sharing—turning your audience into your marketing team. Launch with thousands of warm leads, not a stale email list.",
        "key_messages": [
          "Your waitlist should work as hard as you do.",
          "Every signup becomes a marketer.",
          "Beautiful pages. Built-in virality. Zero code.",
          "Don''t just collect emails. Build momentum.",
          "Launch day starts now."
        ]
      }
    }',

    '{
      "pre_launch": {
        "4_weeks_before": [
          {"task": "MVP with page builder, referral tracking, and basic emails", "category": "Product", "critical": true},
          {"task": "5-10 high-quality templates designed", "category": "Product", "critical": true},
          {"task": "Landing page live with our own waitlist (dogfooding!)", "category": "Marketing", "critical": true},
          {"task": "Create demo video showing the builder in action", "category": "Marketing", "critical": true},
          {"task": "Set up PostHog for product analytics", "category": "Product", "critical": true},
          {"task": "Begin building in public on Twitter/X", "category": "Marketing", "critical": false}
        ],
        "2_weeks_before": [
          {"task": "Beta test with 20-30 indie hackers launching products", "category": "Product", "critical": true},
          {"task": "Collect beta user testimonials and launch stats", "category": "Marketing", "critical": true},
          {"task": "Fix critical bugs from beta feedback", "category": "Product", "critical": true},
          {"task": "Prepare Product Hunt assets", "category": "Marketing", "critical": true},
          {"task": "Set up Stripe billing and test all tiers", "category": "Product", "critical": true},
          {"task": "Create launch Twitter thread with case studies", "category": "Marketing", "critical": true}
        ],
        "1_week_before": [
          {"task": "Final product polish and bug fixes", "category": "Product", "critical": true},
          {"task": "Reach out to indie hacker communities for launch support", "category": "Marketing", "critical": false},
          {"task": "Prepare Product Hunt maker comment", "category": "Marketing", "critical": true},
          {"task": "Schedule all launch day posts", "category": "Marketing", "critical": true},
          {"task": "Test full signup → page creation flow", "category": "Product", "critical": true}
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
        {"time": "7:00 AM", "task": "Launch Twitter thread with GIF demos", "platform": "Twitter/X"},
        {"time": "8:00 AM", "task": "Post in Indie Hackers", "platform": "Indie Hackers"},
        {"time": "9:00 AM", "task": "Send launch email to our own waitlist", "platform": "Email"},
        {"time": "10:00 AM", "task": "Post in r/startups, r/SideProject, r/Entrepreneur", "platform": "Reddit"},
        {"time": "11:00 AM", "task": "LinkedIn launch post", "platform": "LinkedIn"},
        {"time": "All day", "task": "Reply to every PH comment within 30 min", "platform": "Product Hunt"},
        {"time": "All day", "task": "Engage with social mentions", "platform": "All"},
        {"time": "All day", "task": "Monitor for bugs and scaling issues", "platform": "Product"},
        {"time": "Evening", "task": "Share day 1 results and thank supporters", "platform": "Twitter/X"}
      ],
      "post_launch": {
        "week_1": [
          "Respond to all user feedback within 24 hours",
          "Ship fixes for any critical bugs",
          "Follow up with free users who haven''t created pages",
          "Share user launch success stories",
          "Publish ''how we built LaunchList'' thread"
        ],
        "week_2_4": [
          "Implement top 3 feature requests",
          "Add more templates based on user demand",
          "Create tutorial content (how to maximize referrals)",
          "Reach out to startup newsletters for coverage",
          "Partner with Product Hunt for cross-promotion"
        ],
        "month_2_3": [
          "Analyze conversion funnel and optimize",
          "A/B test pricing page",
          "Build SEO content (how to launch a product, waitlist best practices)",
          "Explore partnerships with other launch tools",
          "Consider affiliate program"
        ]
      },
      "launch_platforms": {
        "primary": ["Product Hunt", "Twitter/X"],
        "secondary": ["Indie Hackers", "LinkedIn"],
        "community": [
          "r/startups",
          "r/SideProject",
          "r/Entrepreneur",
          "r/indiehackers",
          "Founder Slack groups",
          "Build in public communities",
          "No-code tool communities"
        ]
      }
    }',

    '{
      "north_star_metric": {
        "metric": "Waitlist Signups Collected",
        "definition": "Total signups collected across all active LaunchList pages per week",
        "target_day_1": "1,000 signups collected",
        "target_month_1": "25,000 signups collected",
        "target_month_3": "250,000 signups collected"
      },
      "acquisition_metrics": [
        {
          "metric": "Website visitors",
          "definition": "Unique visitors to LaunchList marketing site",
          "target": "20K/month by month 3",
          "tool": "Plausible/PostHog"
        },
        {
          "metric": "Signup rate",
          "definition": "Visitors who create a LaunchList account",
          "target": "10-15% (high intent audience)",
          "tool": "PostHog"
        },
        {
          "metric": "Cost per signup",
          "definition": "Ad spend / signups",
          "target": "<$3",
          "tool": "Ad platforms"
        }
      ],
      "activation_metrics": [
        {
          "metric": "Page created",
          "definition": "% of signups who create at least 1 waitlist page",
          "target": "60%+",
          "tool": "PostHog"
        },
        {
          "metric": "Page published",
          "definition": "% of users who publish (make live) their waitlist",
          "target": "70% of page creators",
          "tool": "PostHog"
        },
        {
          "metric": "First signup collected",
          "definition": "% of published pages that collect at least 1 signup",
          "target": "80%+",
          "tool": "PostHog"
        }
      ],
      "retention_metrics": [
        {
          "metric": "Week 1 retention",
          "definition": "% of users who return in week 2",
          "target": "40%+ (depends on launch timing)",
          "tool": "PostHog"
        },
        {
          "metric": "Monthly retention",
          "definition": "% of paying users active month-over-month",
          "target": "50%+ (campaign-based product)",
          "tool": "PostHog"
        },
        {
          "metric": "Repeat launches",
          "definition": "% of users who create 2+ waitlist pages",
          "target": "25%+",
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
          "target": "$5K month 3, $15K month 6",
          "tool": "Stripe"
        },
        {
          "metric": "ARPU",
          "definition": "Average revenue per paying user",
          "target": "$45-55/month",
          "tool": "Stripe"
        },
        {
          "metric": "Churn rate",
          "definition": "% of paying users who cancel monthly",
          "target": "<10% (campaign-based usage expected)",
          "tool": "Stripe"
        }
      ],
      "unit_economics": {
        "target_cac": "$20-40 (paid), $0 (organic/viral)",
        "target_ltv": "$250+ (5+ month retention at $50 ARPU)",
        "target_ltv_cac_ratio": "6:1 or better",
        "target_payback_period": "1 month or less"
      }
    }'
  ],

  NOW()
);