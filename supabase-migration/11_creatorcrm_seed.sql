-- CreatorCRM Seed Data (idea_001)
-- CRM built for how creators actually work

INSERT INTO ideas (
  id, user_id, title, one_liner, problem, target_customer, solution, monetization,
  tags, keywords, status, demand_score, demand_band, trend_label, validation_summary,
  validated_at, is_public, is_saved, created_at, updated_at, why_now, revenue_impact,
  market_size, competition_level, category, business_type, price_range
) VALUES (
  'creatorcrm-001',
  NULL,
  'CreatorCRM',
  'Finally, a CRM that gets how creators work. Track deals, nurture brands, get paid.',
  'Creators managing 5+ brand deals per month are drowning in chaos. Sponsor conversations happen across email, DMs, and texts. Deal terms live in Google Docs nobody can find. Payment tracking means scrolling through PayPal. Nobody knows which brands ghosted, which invoices are overdue, or which relationships are worth nurturing. The result? Missed follow-ups, forgotten invoices, and leaving thousands on the table from repeat partnerships that never happened.',
  'Full-time content creators with 25K-500K followers doing 5+ brand deals per month who need to get organized as their business scales. Secondary: Creator managers and small agencies managing multiple talent with scattered deal flow.',
  'A CRM built for how creators actually work. Track every brand relationship from first contact to paid invoice. Pipeline view shows deal stages at a glance. Auto-log emails and DMs. Set reminders to follow up. Track payments and see your true earnings. Know exactly which brands are worth your time—and which ghosted you twice.',
  'Freemium: Free (25 contacts, 10 deals), Pro $19/month (unlimited, email integration), Business $49/month (team features), Agency $149/month (white-label, unlimited seats).',
  ARRAY['crm', 'creator-tools', 'business-tools', 'saas', 'influencer-marketing'],
  NULL,
  'validated',
  88,
  'high',
  'rising',
  NULL,
  NULL,
  TRUE,
  FALSE,
  NOW(),
  NOW(),
  'Three converging forces: (1) Creator economy has professionalized—top creators do 50+ brand deals/year and need real business tools, (2) Brand deal volume is up 3x since 2020 but creator tools haven''t kept up, (3) Creators are realizing their ''business'' needs systems, not just creativity.',
  'Finally track what you''re owed. Build lasting partnerships. Know which brands are worth your time. Turn scattered conversations into organized business relationships.',
  '$100B',
  'Medium',
  'productivity',
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

-- Insert landing page for CreatorCRM
INSERT INTO landing_pages (idea_id, slug, content, is_published, created_at, updated_at)
VALUES (
  'creatorcrm-001',
  'creatorcrm',
  '{
    "meta": {
      "title": "CreatorCRM — Manage Brand Deals & Sponsor Relationships",
      "description": "The CRM built for content creators. Track brand deals, manage your pipeline, and never miss a payment. Free to start.",
      "og_image_concept": "Clean dashboard showing deal pipeline with brand logos and payment status indicators"
    },
    "hero": {
      "headline": "Your brand deals, finally organized",
      "subheadline": "Track every sponsor relationship, manage your deal pipeline, and never miss a payment. The CRM built for how creators actually work.",
      "cta_primary": {
        "text": "Start Free",
        "url": "/signup"
      },
      "cta_secondary": {
        "text": "See how it works →",
        "url": "#demo"
      },
      "social_proof_snippet": "Used by 2,500+ creators • Track $15M+ in brand deals",
      "hero_visual": {
        "type": "product_screenshot",
        "description": "Clean dashboard showing kanban-style deal pipeline with brand cards moving from Pitched to Paid"
      }
    },
    "problem_section": {
      "section_id": "problem",
      "eyebrow": "Sound familiar?",
      "headline": "Your brand deals are everywhere except where you need them",
      "description": "When your business grows beyond a few deals per month, the chaos becomes real. Every successful creator hits this wall.",
      "pain_points": [
        {
          "icon": "message-circle",
          "title": "Conversations everywhere",
          "description": "Brand emails in your inbox. DM negotiations on Instagram. Contract terms in a Google Doc somewhere. You''re constantly searching for ''that one thread.''"
        },
        {
          "icon": "clock",
          "title": "Deals falling through the cracks",
          "description": "You meant to follow up with that brand last week. You forgot to send the invoice. That warm lead went cold because life got busy."
        },
        {
          "icon": "dollar-sign",
          "title": "No idea what you''re actually making",
          "description": "''How much did I earn this quarter?'' requires an archaeology expedition through PayPal, Stripe, and that one wire transfer you forgot about."
        },
        {
          "icon": "users",
          "title": "Repeat deals never happen",
          "description": "That brand loved working with you 6 months ago. But you lost touch, forgot to follow up, and they found someone else."
        }
      ],
      "stat_callout": {
        "number": "73%",
        "label": "of creators say disorganization costs them repeat partnerships",
        "source": "Creator Economy Report 2024"
      }
    },
    "solution_section": {
      "section_id": "solution",
      "eyebrow": "One place for your entire creator business",
      "headline": "Track every deal. Build every relationship.",
      "description": "CreatorCRM brings order to the chaos. See every brand relationship, deal status, and payment in one dashboard built specifically for how creators work.",
      "features": [
        {
          "icon": "columns",
          "title": "Deal Pipeline",
          "description": "Kanban board with creator-specific stages: Lead → Pitched → Negotiating → Contracted → Delivering → Invoiced → Paid. Drag-and-drop simplicity."
        },
        {
          "icon": "users",
          "title": "Brand Relationships",
          "description": "Full database of brand contacts with company, role, email, social handles. See complete history of every interaction and deal."
        },
        {
          "icon": "mail",
          "title": "Email Integration",
          "description": "Connect Gmail/Outlook. Conversations with brand contacts auto-log to their profile. Never lose context again."
        },
        {
          "icon": "credit-card",
          "title": "Payment Tracking",
          "description": "Mark invoices sent/paid. Track payment terms and due dates. See overdue payments at a glance. Know exactly what you''ve earned."
        },
        {
          "icon": "bell",
          "title": "Follow-up Reminders",
          "description": "Set reminders to follow up on deals. Get nudged when deals go quiet too long. Smart suggestions based on deal stage."
        },
        {
          "icon": "bar-chart-2",
          "title": "Earnings Dashboard",
          "description": "Monthly, quarterly, yearly earnings. Average deal size. Revenue by brand category. See your business grow with real data."
        }
      ],
      "visual": {
        "type": "demo_video",
        "description": "Screen recording showing user adding a new deal, tracking it through the pipeline, and receiving payment notification"
      }
    },
    "how_it_works": {
      "section_id": "how-it-works",
      "eyebrow": "Get organized in minutes",
      "headline": "From chaos to closed deals",
      "steps": [
        {
          "number": 1,
          "title": "Add your brands",
          "description": "Import contacts or add manually. Tag by category (fashion, tech, food). Build your sponsor database.",
          "visual_description": "Contact import screen with brand logos and category tags"
        },
        {
          "number": 2,
          "title": "Track your deals",
          "description": "Log every opportunity. Move deals through your pipeline from pitch to paid. Set values and deadlines.",
          "visual_description": "Deal creation modal with pipeline stage selector and value input"
        },
        {
          "number": 3,
          "title": "Never miss a beat",
          "description": "Get reminders to follow up. See overdue payments. Track payment history. Build lasting relationships.",
          "visual_description": "Notification panel showing follow-up reminders and payment alerts"
        }
      ]
    },
    "social_proof": {
      "section_id": "proof",
      "eyebrow": "Creators are closing more deals",
      "headline": "Turn scattered conversations into repeat partnerships",
      "testimonials": [
        {
          "quote": "I went from losing track of deals to having 3 brands on retainer. CreatorCRM helped me see which relationships were actually worth nurturing.",
          "author": "Alex Chen",
          "role": "Tech YouTuber",
          "company": "150K subscribers",
          "avatar_description": "Asian male creator with laptop",
          "result": "3x repeat deal rate"
        },
        {
          "quote": "Before CreatorCRM, I was leaving money on the table because I''d forget to invoice or follow up. Now I''m finally running a real business.",
          "author": "Sarah Martinez",
          "role": "Lifestyle Influencer",
          "company": "75K Instagram followers",
          "avatar_description": "Latina female creator with ring light setup",
          "result": "40% faster payments"
        },
        {
          "quote": "Managing 5 creators was chaos until we found CreatorCRM. Now everyone''s deals are in one place and nothing falls through the cracks.",
          "author": "David Kim",
          "role": "Creator Manager",
          "company": "Manages 12 creators",
          "avatar_description": "Asian male in business attire at desk",
          "result": "5x more organized"
        }
      ],
      "stats": [
        {
          "number": "$15M+",
          "label": "In Deals Tracked",
          "context": "by our creators"
        },
        {
          "number": "2,500+",
          "label": "Active Creators",
          "context": "trust CreatorCRM"
        },
        {
          "number": "35%",
          "label": "More Repeat Deals",
          "context": "on average"
        },
        {
          "number": "4.8/5",
          "label": "Creator Rating",
          "context": "from 500+ reviews"
        }
      ],
      "logos": {
        "headline": "Trusted by creators across platforms",
        "companies": ["YouTube", "Instagram", "TikTok", "LinkedIn", "Twitter", "Twitch"]
      },
      "trust_badges": [
        {
          "icon": "shield",
          "text": "SOC 2 Compliant"
        },
        {
          "icon": "lock",
          "text": "Bank-Level Security"
        },
        {
          "icon": "users",
          "text": "Creator-First Support"
        }
      ]
    },
    "pricing": {
      "section_id": "pricing",
      "eyebrow": "Free to start. Upgrade when you scale.",
      "headline": "Finally, CRM pricing that makes sense for creators",
      "subheadline": "Track up to 25 contacts and 10 deals free. No credit card required.",
      "plans": [
        {
          "name": "Free",
          "price": "$0",
          "price_detail": "forever",
          "description": "Perfect for creators just getting started",
          "features": [
            "Up to 25 brand contacts",
            "Up to 10 active deals",
            "Basic pipeline view",
            "Manual activity logging",
            "Payment tracking",
            "Mobile app access"
          ],
          "cta": "Start Free",
          "highlighted": false,
          "badge": null
        },
        {
          "name": "Pro",
          "price": "$19",
          "price_detail": "/month",
          "description": "For full-time creators scaling their business",
          "features": [
            "Unlimited contacts & deals",
            "Email integration (Gmail/Outlook)",
            "Earnings dashboard & analytics",
            "Brand scoring",
            "Follow-up reminders",
            "Remove CreatorCRM branding",
            "Priority support"
          ],
          "cta": "Start Free Trial",
          "highlighted": true,
          "badge": "Most Popular"
        },
        {
          "name": "Business",
          "price": "$49",
          "price_detail": "/month",
          "description": "For managers and small agencies",
          "features": [
            "Everything in Pro",
            "Team seats (up to 3 users)",
            "Manager/talent views",
            "Advanced analytics & reporting",
            "Contract file storage (10GB)",
            "Calendar integration",
            "API access"
          ],
          "cta": "Start Free Trial",
          "highlighted": false,
          "badge": null
        },
        {
          "name": "Agency",
          "price": "$149",
          "price_detail": "/month",
          "description": "For agencies with multiple talent",
          "features": [
            "Everything in Business",
            "Unlimited team seats",
            "Multi-talent management",
            "White-label option",
            "Custom reporting",
            "Dedicated support",
            "Onboarding assistance"
          ],
          "cta": "Contact Sales",
          "highlighted": false,
          "badge": "Best Value"
        }
      ],
      "guarantee": {
        "headline": "30-Day Money-Back Guarantee",
        "description": "Not seeing more organization and better deal tracking? Get a full refund, no questions asked."
      },
      "pricing_note": "Annual plans save 21%. Need custom pricing? Contact us."
    },
    "faq": {
      "section_id": "faq",
      "headline": "Questions? We''ve Got Answers.",
      "questions": [
        {
          "question": "How is this different from using Notion or a spreadsheet?",
          "answer": "CreatorCRM is purpose-built for brand deals with pipeline stages that match how partnerships actually work. Plus: email integration, payment tracking, reminders, and analytics—without any setup."
        },
        {
          "question": "Can I import my existing contacts?",
          "answer": "Yes! Import from CSV or connect your email to automatically detect brand contacts. If you''re switching from a spreadsheet, you can bring everything over in minutes."
        },
        {
          "question": "Do you integrate with my email?",
          "answer": "Pro plans include Gmail and Outlook integration. Emails with brand contacts auto-log to their profile, so you have full conversation history."
        },
        {
          "question": "Can my manager or team use this too?",
          "answer": "Business and Agency plans include team seats. Managers can see talent pipelines, and talent can manage their own deals—all in one place."
        },
        {
          "question": "What about contracts and invoicing?",
          "answer": "You can attach contracts to deals and track invoice status. For contract generation, we integrate with tools like UGCContracts. For invoicing, connect your existing Stripe or PayPal."
        },
        {
          "question": "Is my data secure?",
          "answer": "Yes. All data is encrypted in transit and at rest. We''re SOC 2 compliant. We never share your brand relationships or earnings data. Your business is your business."
        }
      ]
    },
    "final_cta": {
      "section_id": "cta",
      "headline": "Stop juggling. Start closing.",
      "subheadline": "Join thousands of creators who finally have their brand deals organized.",
      "cta_text": "Start Free →",
      "trust_element": "No credit card required • 30-day money-back guarantee"
    },
    "footer": {
      "tagline": "Your brand deals, finally organized.",
      "links": {
        "product": ["Features", "Pricing", "Integrations", "Mobile App"],
        "resources": ["Blog", "Help Center", "Creator Resources", "Brand Deal Templates"],
        "company": ["About", "Careers", "Press", "Contact"],
        "legal": ["Privacy", "Terms", "Security", "GDPR"]
      },
      "social": ["Twitter", "LinkedIn", "Instagram"],
      "newsletter": {
        "headline": "Creator business tips & updates",
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

-- Insert execution plan with comprehensive CreatorCRM deliverable content
INSERT INTO execution_plans (idea_id, user_id, elevator_pitch, persona, user_stories, recommended_stack, launch_checklist, created_at)
VALUES (
  'creatorcrm-001',
  NULL,
  '{
    "problem_statement": "Creators managing 5+ brand deals per month are drowning in chaos. Sponsor conversations happen across email, DMs, and texts. Deal terms live in Google Docs nobody can find. Payment tracking means scrolling through PayPal. Nobody knows which brands ghosted, which invoices are overdue, or which relationships are worth nurturing. The result? Missed follow-ups, forgotten invoices, and leaving thousands on the table from repeat partnerships that never happened.",
    "solution_summary": "A CRM built for how creators actually work. Track every brand relationship from first contact to paid invoice. Pipeline view shows deal stages at a glance. Auto-log emails and DMs. Set reminders to follow up. Track payments and see your true earnings. Know exactly which brands are worth your time—and which ghosted you twice.",
    "target_customer": {
      "primary": "Full-time content creators with 25K-500K followers doing 5+ brand deals per month who need to get organized as their business scales",
      "secondary": "Creator managers and small agencies managing multiple talent with scattered deal flow",
      "market_size_estimate": {
        "tam": "$100B creator economy",
        "sam": "$5B creator business tools market",
        "som": "$200M professional creators needing deal management (500K+ creators doing $5K+/mo in brand deals)"
      }
    },
    "why_now": "Three converging forces: (1) Creator economy has professionalized—top creators do 50+ brand deals/year and need real business tools, (2) Brand deal volume is up 3x since 2020 but creator tools haven''t kept up, (3) Creators are realizing their ''business'' needs systems, not just creativity."
  }',

  '{
    "direct_competitors": [
      {
        "name": "Notion (DIY templates)",
        "url": "https://notion.so",
        "positioning": "All-in-one workspace with creator templates",
        "pricing": "Free to $10/mo",
        "strengths": ["Flexible", "Free tier", "Creator community templates"],
        "weaknesses": ["Requires setup from scratch", "No automation", "No email integration", "Not purpose-built for deals"]
      },
      {
        "name": "HubSpot (overkill)",
        "url": "https://hubspot.com",
        "positioning": "Enterprise CRM",
        "pricing": "Free to $1,600/mo",
        "strengths": ["Powerful", "Email integration", "Automation"],
        "weaknesses": ["Way too complex for creators", "Designed for sales teams", "Expensive for features needed", "Steep learning curve"]
      },
      {
        "name": "Honeybook",
        "url": "https://honeybook.com",
        "positioning": "Client management for freelancers",
        "pricing": "$19-79/mo",
        "strengths": ["Good for service businesses", "Contracts & invoicing", "Clean UI"],
        "weaknesses": ["Built for photographers/planners", "Doesn''t understand brand deals", "No social/DM integration", "Project-focused not relationship-focused"]
      },
      {
        "name": "Airtable (DIY)",
        "url": "https://airtable.com",
        "positioning": "Spreadsheet-database hybrid",
        "pricing": "Free to $20/mo",
        "strengths": ["Flexible", "Powerful views", "Good templates"],
        "weaknesses": ["Requires configuration", "No native email tracking", "Not built for creator workflow", "Gets complex fast"]
      }
    ],
    "indirect_competitors": [
      "Creator management agencies (expensive, give up control)",
      "General project management tools (Asana, Monday—wrong model)",
      "Influencer platforms (brand-side, not creator-side)",
      "Email inbox chaos (the status quo)",
      "Memory and sticky notes (doesn''t scale)"
    ],
    "market_gaps": [
      "No CRM built specifically for creator-brand relationships",
      "Existing tools don''t understand deal lifecycle (pitch → negotiate → deliver → get paid)",
      "No integration with where creator convos happen (DMs, email)",
      "Invoicing tools don''t track relationship history",
      "No visibility into which brand relationships are most valuable over time",
      "Creator-specific metrics (rate per follower, deal velocity) don''t exist"
    ]
  }',

  ARRAY[
    '{
      "positioning_statement": "For professional creators juggling multiple brand deals who are tired of scattered conversations and missed opportunities, CreatorCRM is a relationship management tool built specifically for the creator business model. Unlike generic CRMs or DIY spreadsheets, we understand how brand deals actually work—from first DM to final payment—and help you build a real business around your influence.",
      "unique_value_proposition": "Finally, a CRM that gets how creators work. Track deals, nurture brands, get paid.",
      "key_differentiators": [
        "Creator-native workflow: Pipeline stages match how brand deals actually progress (Pitched → Negotiating → Contracted → Delivering → Invoiced → Paid)",
        "Relationship intelligence: See full history with every brand—past deals, rates, responsiveness, lifetime value",
        "Where you work: Log conversations from email, Instagram DMs, and Twitter DMs in one place",
        "Money tracking: Know exactly what you''ve earned, what''s pending, and what''s overdue",
        "Repeat deal engine: Surface brands ready for re-engagement based on timing and past success"
      ],
      "category": "Creator business tools (creating subcategory: ''Creator CRM'')"
    }',

    '{
      "core_features": [
        {
          "feature": "Brand Contact Management",
          "description": "Database of brand contacts with company, role, email, social handles. Quick add from email or manual entry. Tag by category (fashion, tech, food, etc.).",
          "priority": "P0",
          "effort": "Small"
        },
        {
          "feature": "Deal Pipeline",
          "description": "Kanban board with creator-specific stages: Lead → Pitched → Negotiating → Contracted → Delivering → Invoiced → Paid → Completed. Drag-and-drop. Deal value tracking.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Deal Records",
          "description": "For each deal: brand, contact, deliverables, rate, timeline, contract status, payment status, notes. Attach files (contracts, briefs).",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Activity Timeline",
          "description": "Log interactions: emails, calls, DMs, meetings. Manual logging with quick-add. See full history with each brand.",
          "priority": "P0",
          "effort": "Small"
        },
        {
          "feature": "Follow-up Reminders",
          "description": "Set reminders to follow up on deals. Email/push notifications. Smart suggestions based on deal stage and time since last contact.",
          "priority": "P0",
          "effort": "Small"
        },
        {
          "feature": "Payment Tracking",
          "description": "Mark invoices sent/paid. Track payment terms and due dates. See overdue payments at a glance. Monthly/yearly earnings dashboard.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Email Integration",
          "description": "Connect Gmail/Outlook. Auto-log emails from known brand contacts. BCC address for manual logging.",
          "priority": "P1",
          "effort": "Large"
        },
        {
          "feature": "Earnings Dashboard",
          "description": "Total earnings by period. Average deal size. Deals by stage. Revenue by brand category. Projected pipeline value.",
          "priority": "P1",
          "effort": "Medium"
        },
        {
          "feature": "Brand Scoring",
          "description": "Rate brands on payment speed, communication, repeat likelihood. Filter contacts by quality score. Know who to prioritize.",
          "priority": "P1",
          "effort": "Small"
        },
        {
          "feature": "Mobile App",
          "description": "iOS app to check deals, log activity, and get reminders on the go. Quick-add deals from anywhere.",
          "priority": "P1",
          "effort": "Large"
        }
      ],
      "post_mvp_features": [
        "Instagram DM integration (when API allows)",
        "Email templates for common responses",
        "Contract generation and e-signature",
        "Invoice generation and tracking",
        "Team/manager collaboration view",
        "AI-powered follow-up suggestions",
        "Rate benchmarking against similar creators",
        "Tax-ready earnings reports",
        "Calendar integration for deadlines",
        "Brand discovery (find new potential sponsors)"
      ],
      "out_of_scope": [
        "Full invoicing platform (integrate with Stripe, PayPal)",
        "Contract legal review (integrate with UGCContracts)",
        "Rate calculation (integrate with SponsorCalc)",
        "Content scheduling and publishing",
        "Influencer marketplace (brand-side discovery)",
        "Accounting software (integrate with QuickBooks)"
      ],
      "mvp_timeline": "8-10 weeks for solo developer, 5-6 weeks for small team"
    }',

    '{
      "recommended_stack": {
        "frontend": "Next.js 14 (App Router) — Fast, great for dashboards and data-heavy apps",
        "backend": "Next.js API Routes + Supabase Edge Functions — Simple, serverless",
        "database": "Supabase (Postgres) — Relational data for contacts, deals, activities",
        "auth": "Supabase Auth — Simple email/password + social login",
        "payments": "Stripe — Subscription billing",
        "hosting": "Vercel — Edge performance, easy deploys",
        "mobile": "React Native or Expo — Share code with web for mobile app",
        "email_integration": "Nylas API or Gmail API — Email sync and logging",
        "key_integrations": [
          "Gmail/Google OAuth — Email integration",
          "Nylas — Cross-provider email sync",
          "Stripe — Payment tracking webhook",
          "Google Calendar — Deadline sync",
          "Resend — Reminder notifications"
        ]
      },
      "build_vs_buy": [
        {
          "component": "CRM Core (contacts, deals, pipeline)",
          "recommendation": "Build (core product)",
          "reasoning": "This is the product. Build it custom with creator-specific data models."
        },
        {
          "component": "Email Integration",
          "recommendation": "Buy (Nylas or direct Gmail API)",
          "reasoning": "Email integration is complex. Nylas handles multiple providers. Gmail API works if you only need Google."
        },
        {
          "component": "Kanban/Pipeline UI",
          "recommendation": "Build (with library)",
          "reasoning": "Use react-beautiful-dnd or dnd-kit. The UX is core to the product."
        },
        {
          "component": "Notifications/Reminders",
          "recommendation": "Build (simple) + Buy (delivery)",
          "reasoning": "Build reminder logic. Use Resend for email delivery, OneSignal for push."
        },
        {
          "component": "Mobile App",
          "recommendation": "Build (React Native)",
          "reasoning": "Share code with web. Start with iOS, add Android later."
        }
      ],
      "estimated_monthly_cost": {
        "0_100_users": "$50-100/mo (Vercel free, Supabase free, ~$50 Nylas)",
        "100_1000_users": "$300-700/mo (Vercel Pro, Supabase Pro, ~$200 Nylas, ~$50 Resend)",
        "1000_10000_users": "$1,500-4,000/mo (Scale with email sync volume)"
      }
    }'
  ],

  '{
    "pricing_model": "Freemium with deal/contact limits",
    "pricing_rationale": "Creators need to try before they buy. Free tier gets them hooked, paid unlocks scale and power features. Pricing aligns with creator income—affordable for part-timers, worth it for full-timers.",
    "tiers": [
      {
        "name": "Free",
        "price": "$0",
        "target_customer": "Creators just getting started with brand deals",
        "features": [
          "Up to 25 brand contacts",
          "Up to 10 active deals",
          "Basic pipeline view",
          "Manual activity logging",
          "Payment tracking",
          "Mobile app access"
        ],
        "limitations": [
          "25 contact limit",
          "10 active deal limit",
          "No email integration",
          "No analytics",
          "CreatorCRM branding"
        ]
      },
      {
        "name": "Pro",
        "price": "$19/month ($15/mo annual)",
        "target_customer": "Full-time creators doing 5-15 deals/month",
        "features": [
          "Unlimited contacts",
          "Unlimited deals",
          "Email integration (Gmail/Outlook)",
          "Earnings dashboard & analytics",
          "Brand scoring",
          "Follow-up reminders",
          "Remove CreatorCRM branding",
          "Priority support"
        ],
        "limitations": [
          "1 user",
          "Basic integrations only"
        ]
      },
      {
        "name": "Business",
        "price": "$49/month ($39/mo annual)",
        "target_customer": "High-volume creators, managers, small agencies",
        "features": [
          "Everything in Pro",
          "Team seats (up to 3 users)",
          "Manager/talent views",
          "Advanced analytics & reporting",
          "Contract file storage (10GB)",
          "Calendar integration",
          "Tax-ready export",
          "API access"
        ],
        "limitations": [
          "3 user limit"
        ]
      },
      {
        "name": "Agency",
        "price": "$149/month ($125/mo annual)",
        "target_customer": "Agencies and managers with multiple talent",
        "features": [
          "Everything in Business",
          "Unlimited team seats",
          "Multi-talent management",
          "White-label option",
          "Custom reporting",
          "Dedicated support",
          "Onboarding assistance"
        ],
        "limitations": []
      }
    ],
    "free_tier_strategy": "Free tier is genuinely useful for starting creators. Limits hit when you have 10+ deals at once—exactly when you need to upgrade. Growth creates natural conversion.",
    "annual_discount": "21% discount (2.5 months free) for annual plans",
    "pricing_psychology": "$19/mo is less than one meal out—easy yes for working creators. $49 is still affordable for serious creators doing $5K+/mo. Agency pricing captures real value for multi-talent management."
  }',

  ARRAY[
    '{
      "brand_name": "CreatorCRM",
      "tagline": "Your brand deals, finally organized.",
      "brand_personality": [
        "Professional but approachable — This is a business tool, but for creative people",
        "Organized — Everything in its place, calm not chaotic",
        "Empowering — Helps creators run a real business",
        "Modern — Clean, contemporary, not corporate",
        "Reliable — Trustworthy with your business data"
      ],
      "brand_voice": {
        "tone": "Friendly professional. Like a business-savvy creator friend helping you get organized.",
        "do": [
          "Use creator language (brand deals, sponsors, rates, deliverables)",
          "Acknowledge the chaos they''re escaping",
          "Celebrate wins (closed deals, payments received)",
          "Be direct and actionable",
          "Respect their time and expertise"
        ],
        "dont": [
          "Don''t be overly corporate or formal",
          "Don''t use enterprise sales jargon",
          "Don''t talk down to creators",
          "Don''t overcomplicate—they have enough chaos",
          "Don''t be preachy about ''building a business''"
        ]
      },
      "visual_direction": {
        "color_palette": {
          "primary": "#6366F1 (Indigo) — Modern, trustworthy, distinct from social platforms",
          "secondary": "#312E81 (Dark indigo) — Depth, premium feel",
          "accent": "#10B981 (Emerald) — Money/success, positive actions",
          "warning": "#F59E0B (Amber) — Overdue/attention needed",
          "neutrals": ["#F9FAFB (off-white)", "#111827 (near-black)"]
        },
        "typography": {
          "display": "Inter or Plus Jakarta Sans — Clean, modern, professional",
          "body": "Inter — Readable, professional"
        },
        "visual_style": "Clean and organized with purposeful whitespace. Dashboard-forward aesthetic. Light mode primary. Subtle shadows for depth. Calm and controlled—the antidote to inbox chaos."
      },
      "messaging": {
        "elevator_pitch_10s": "CreatorCRM helps content creators manage brand deals, track payments, and build lasting sponsor relationships.",
        "elevator_pitch_30s": "Managing brand deals as a creator is chaos—conversations scattered across email and DMs, contracts you can''t find, invoices you forgot to send. CreatorCRM brings it all together: track every brand relationship, manage your deal pipeline, and know exactly what you''ve earned. Stop juggling. Start building a real creator business.",
        "key_messages": [
          "Every brand deal, one place.",
          "Know what you''re owed. Get paid on time.",
          "Turn one-off deals into repeat partnerships.",
          "The business tool creators actually need.",
          "From chaos to closed deals."
        ]
      }
    }',

    '{
      "hero": {
        "headline": "Your brand deals, finally organized",
        "subheadline": "Track every sponsor relationship, manage your deal pipeline, and never miss a payment. The CRM built for how creators actually work.",
        "cta_primary": "Start Free",
        "cta_secondary": "See how it works →"
      },
      "problem_section": {
        "headline": "Sound familiar?",
        "pain_points": [
          {
            "pain": "Conversations everywhere",
            "detail": "Brand emails in your inbox. DM negotiations on Instagram. Contract terms in a Google Doc somewhere. You''re constantly searching for ''that one thread.''"
          },
          {
            "pain": "Deals falling through the cracks",
            "detail": "You meant to follow up with that brand last week. You forgot to send the invoice. That warm lead went cold because life got busy."
          },
          {
            "pain": "No idea what you''re actually making",
            "detail": "''How much did I earn this quarter?'' requires an archaeology expedition through PayPal, Stripe, and that one wire transfer you forgot about."
          }
        ]
      },
      "solution_section": {
        "headline": "One place for your entire creator business",
        "features": [
          {
            "title": "Deal Pipeline",
            "description": "See every deal at a glance. Drag-and-drop from pitch to paid. Never lose track again.",
            "icon_suggestion": "Kanban/columns icon"
          },
          {
            "title": "Brand Relationships",
            "description": "Full history with every brand. Past deals, rates, contacts. Know who''s worth your time.",
            "icon_suggestion": "Users/network icon"
          },
          {
            "title": "Email Integration",
            "description": "Connect your inbox. Conversations auto-log to the right brand. Everything in context.",
            "icon_suggestion": "Mail/inbox icon"
          },
          {
            "title": "Payment Tracking",
            "description": "Track invoiced vs paid. See overdue at a glance. Know exactly what you''ve earned.",
            "icon_suggestion": "Dollar/money icon"
          },
          {
            "title": "Follow-up Reminders",
            "description": "Set reminders and never forget. Get nudged when deals go quiet too long.",
            "icon_suggestion": "Bell/reminder icon"
          },
          {
            "title": "Earnings Dashboard",
            "description": "Monthly, quarterly, yearly earnings. Average deal size. See your business grow.",
            "icon_suggestion": "Chart/analytics icon"
          }
        ]
      },
      "how_it_works": {
        "headline": "Get organized in minutes",
        "steps": [
          {
            "step": 1,
            "title": "Add your brands",
            "description": "Import contacts or add manually. Tag by category. Build your sponsor database."
          },
          {
            "step": 2,
            "title": "Track your deals",
            "description": "Log every opportunity. Move through your pipeline from pitch to paid."
          },
          {
            "step": 3,
            "title": "Never miss a beat",
            "description": "Get reminders to follow up. See overdue payments. Nurture your best relationships."
          }
        ]
      },
      "social_proof": {
        "headline": "Creators are closing more deals",
        "testimonial_placeholders": [
          "Full-time YouTuber testimonial about deal organization",
          "Instagram creator testimonial about getting paid faster",
          "Podcaster testimonial about building repeat partnerships"
        ],
        "stats_to_display": [
          "$X million in deals tracked",
          "XX% faster payment collection",
          "XX average deals per creator",
          "XX hours saved per month"
        ]
      },
      "pricing_section": {
        "headline": "Free to start. Upgrade when you scale.",
        "subheadline": "Track up to 10 deals free. No credit card required."
      },
      "faq": [
        {
          "question": "How is this different from using Notion or a spreadsheet?",
          "answer": "CreatorCRM is purpose-built for brand deals with pipeline stages that match how partnerships actually work. Plus: email integration, payment tracking, reminders, and analytics—without any setup."
        },
        {
          "question": "Can I import my existing contacts?",
          "answer": "Yes! Import from CSV or add manually. If you''re switching from a spreadsheet, you can bring everything over in minutes."
        },
        {
          "question": "Do you integrate with my email?",
          "answer": "Pro plans include Gmail and Outlook integration. Emails with brand contacts auto-log to their profile, so you have full conversation history."
        },
        {
          "question": "Can my manager or team use this too?",
          "answer": "Business and Agency plans include team seats. Managers can see talent pipelines, and talent can manage their own deals—all in one place."
        },
        {
          "question": "What about contracts and invoicing?",
          "answer": "You can attach contracts to deals and track invoice status. For contract generation, we integrate with tools like UGCContracts. For invoicing, connect your existing Stripe or PayPal."
        },
        {
          "question": "Is my data secure?",
          "answer": "Yes. All data is encrypted in transit and at rest. We never share your brand relationships or earnings data. Your business is your business."
        }
      ],
      "final_cta": {
        "headline": "Stop juggling. Start closing.",
        "subheadline": "Join thousands of creators who finally have their brand deals organized.",
        "cta": "Start Free →"
      },
      "meta": {
        "page_title": "CreatorCRM — Manage Brand Deals & Sponsor Relationships",
        "meta_description": "The CRM built for content creators. Track brand deals, manage your pipeline, and never miss a payment. Free to start."
      }
    }',

    '{
      "pre_launch": {
        "4_weeks_before": [
          {"task": "MVP with contacts, deals, pipeline, and payment tracking", "category": "Product", "critical": true},
          {"task": "Landing page live with waitlist", "category": "Marketing", "critical": true},
          {"task": "Mobile-responsive web app (mobile app can wait)", "category": "Product", "critical": true},
          {"task": "Demo video showing pipeline in action", "category": "Marketing", "critical": true},
          {"task": "Set up PostHog for analytics", "category": "Product", "critical": true},
          {"task": "Start Twitter presence sharing creator business tips", "category": "Marketing", "critical": false}
        ],
        "2_weeks_before": [
          {"task": "Beta test with 20-30 creators (mix of niches/sizes)", "category": "Product", "critical": true},
          {"task": "Collect beta testimonials and use case examples", "category": "Marketing", "critical": true},
          {"task": "Add email integration (Gmail)", "category": "Product", "critical": true},
          {"task": "Fix critical bugs from beta", "category": "Product", "critical": true},
          {"task": "Prepare Product Hunt assets", "category": "Marketing", "critical": true},
          {"task": "Set up Stripe billing and test all tiers", "category": "Product", "critical": true}
        ],
        "1_week_before": [
          {"task": "Final product polish", "category": "Product", "critical": true},
          {"task": "Reach out to creator communities", "category": "Marketing", "critical": false},
          {"task": "Prepare Product Hunt maker comment", "category": "Marketing", "critical": true},
          {"task": "Schedule all launch day social posts", "category": "Marketing", "critical": true},
          {"task": "Test full signup → add deal flow", "category": "Product", "critical": true}
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
        {"time": "8:00 AM", "task": "Instagram story showing the product", "platform": "Instagram"},
        {"time": "9:00 AM", "task": "Send launch email to waitlist", "platform": "Email"},
        {"time": "10:00 AM", "task": "Post in creator Discord servers", "platform": "Discord"},
        {"time": "11:00 AM", "task": "LinkedIn post for manager/agency audience", "platform": "LinkedIn"},
        {"time": "All day", "task": "Reply to every PH comment", "platform": "Product Hunt"},
        {"time": "All day", "task": "Engage with social mentions", "platform": "All"},
        {"time": "All day", "task": "Monitor for bugs", "platform": "Product"},
        {"time": "Evening", "task": "Share day 1 results and thank supporters", "platform": "Twitter/X"}
      ],
      "post_launch": {
        "week_1": [
          "Respond to all user feedback within 24 hours",
          "Ship fixes for critical issues",
          "Follow up with free users who haven''t added deals",
          "Share creator success stories",
          "Publish ''how we built CreatorCRM'' thread"
        ],
        "week_2_4": [
          "Implement top 3 feature requests",
          "Launch basic mobile app (iOS)",
          "Create tutorial content (pipeline setups, workflows)",
          "Partner with creator newsletters for coverage",
          "Begin SEO content on managing brand deals"
        ],
        "month_2_3": [
          "Analyze conversion funnel and optimize",
          "A/B test pricing page",
          "Add more integrations (Outlook, calendar)",
          "Explore partnerships with creator tools (SponsorCalc, etc.)",
          "Consider affiliate program with creators"
        ]
      },
      "launch_platforms": {
        "primary": ["Product Hunt", "Twitter/X"],
        "secondary": ["Instagram", "LinkedIn"],
        "community": [
          "Creator economy Discord servers",
          "YouTuber communities",
          "Influencer marketing subreddits",
          "Creator newsletters (The Publish Press, Creator Economy)",
          "TikTok creator groups"
        ]
      }
    }',

    '{
      "north_star_metric": {
        "metric": "Deals Actively Tracked",
        "definition": "Total number of deals in pipeline stages (not completed) across all users",
        "target_day_1": "100 deals",
        "target_month_1": "2,000 deals",
        "target_month_3": "15,000 deals"
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
          "target": "8-12% (creator tools convert well)",
          "tool": "PostHog"
        },
        {
          "metric": "Cost per signup",
          "definition": "Ad spend / signups",
          "target": "<$5",
          "tool": "Ad platforms"
        }
      ],
      "activation_metrics": [
        {
          "metric": "First brand added",
          "definition": "% of signups who add at least 1 brand contact",
          "target": "70%+",
          "tool": "PostHog"
        },
        {
          "metric": "First deal created",
          "definition": "% of users with contacts who create at least 1 deal",
          "target": "60%+",
          "tool": "PostHog"
        },
        {
          "metric": "Time to first deal",
          "definition": "Hours from signup to first deal created",
          "target": "<2 hours",
          "tool": "PostHog"
        }
      ],
      "retention_metrics": [
        {
          "metric": "Week 1 retention",
          "definition": "% of users who return in week 2",
          "target": "50%+ (CRM is sticky)",
          "tool": "PostHog"
        },
        {
          "metric": "Monthly retention",
          "definition": "% of users active month-over-month",
          "target": "60%+",
          "tool": "PostHog"
        },
        {
          "metric": "Deal velocity",
          "definition": "Average deals moved through pipeline per user per month",
          "target": "3+ (proves active use)",
          "tool": "Database query"
        }
      ],
      "revenue_metrics": [
        {
          "metric": "Free to paid conversion",
          "definition": "% of free users who upgrade to Pro",
          "target": "8-12%",
          "tool": "Stripe + database"
        },
        {
          "metric": "MRR",
          "definition": "Monthly recurring revenue",
          "target": "$5K month 3, $20K month 6",
          "tool": "Stripe"
        },
        {
          "metric": "ARPU",
          "definition": "Average revenue per paying user",
          "target": "$22-28/month (mix of Pro and Business)",
          "tool": "Stripe"
        },
        {
          "metric": "Churn rate",
          "definition": "% of paying users who cancel monthly",
          "target": "<5% (CRM data is sticky)",
          "tool": "Stripe"
        }
      ],
      "unit_economics": {
        "target_cac": "$15-30 (creator audience is reachable)",
        "target_ltv": "$300+ (14+ months at $22 ARPU)",
        "target_ltv_cac_ratio": "10:1 or better",
        "target_payback_period": "1-2 months"
      }
    }'
  ],

  NOW()
);