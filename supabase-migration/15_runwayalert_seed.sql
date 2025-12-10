-- RunwayAlert Seed Data (idea_069)
-- Real-time runway tracking for startups

INSERT INTO ideas (
  id, user_id, title, one_liner, problem, target_customer, solution, monetization,
  tags, keywords, status, demand_score, demand_band, trend_label, validation_summary,
  validated_at, is_public, is_saved, created_at, updated_at, why_now, revenue_impact,
  market_size, competition_level, category, business_type, price_range
) VALUES (
  'runwayalert-069',
  NULL,
  'RunwayAlert',
  'Know your runway. Always.',
  'Founders check runway in spreadsheets monthly—if they check at all. They get surprised by cash crunches because spending creeps up unnoticed. That new hire, the annual software renewals, the slightly-higher-than-expected AWS bill—it all compounds. By the time they realize runway is short, it''s too late to course-correct or fundraise comfortably.',
  'Seed to Series A founders managing $500K-$5M in the bank with 6-24 months runway and no full-time finance hire',
  'Connect your bank accounts and payroll. Get real-time burn rate calculations with trend analysis. Receive alerts when runway drops below your thresholds (12 months, 9 months, 6 months—whatever you set). Model scenarios for hiring plans and revenue changes. Generate investor-ready reports for board meetings.',
  '$49/month (1 entity, 3 accounts), $99/month (unlimited accounts, 3 users), $199/month (unlimited users, API access). 14-day free trial, 20% annual discount.',
  ARRAY['financial-tools', 'runway-tracking', 'cash-management', 'burn-rate', 'startup-finance', 'alerts'],
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
  'Perfect timing: (1) Higher interest rates mean VCs are pushing portfolio companies to extend runway—founders need visibility, (2) The 2022-2023 downturn showed how fast runway problems can spiral, (3) Bank failures (SVB) made founders hyper-aware of cash positions, (4) More first-time founders than ever who don''t have finance backgrounds.',
  'Founders avoid panic fundraising and make better financial decisions. Early runway alerts prevent emergency layoffs and enable proactive fundraising. Saves founders 10+ hours/month on manual runway tracking and financial reporting.',
  '$500M runway and cash management tools for startups',
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

-- Insert landing page for RunwayAlert
INSERT INTO landing_pages (idea_id, slug, content, is_published, created_at, updated_at)
VALUES (
  'runwayalert-069',
  'runwayalert',
  '{
    "meta": {
      "title": "RunwayAlert — Real-Time Runway Tracking for Startups",
      "description": "Know your runway. Always. Real-time burn rate and runway alerts for founders. Connect your bank, set alerts, never be surprised by a cash crunch. Free trial.",
      "og_image_concept": "Dashboard mockup showing runway countdown (8.4 months), burn rate trend, and alert notifications. Clean, numbers-focused design with green/amber/red color coding for runway health."
    },
    "hero": {
      "headline": "Know your runway. Always.",
      "subheadline": "Real-time burn rate and runway tracking. Connect your bank, set alerts, never be surprised by a cash crunch again.",
      "cta_primary": {
        "text": "Start 14-Day Free Trial",
        "url": "/signup"
      },
      "cta_secondary": {
        "text": "See how it works →",
        "url": "#demo"
      },
      "social_proof_snippet": "Trusted by 500+ founders to track $100M+ in runway",
      "hero_visual": {
        "type": "product_screenshot",
        "description": "Clean dashboard showing key metrics: Cash balance $2.1M, Monthly burn $185K, Runway 11.3 months. Trend chart showing burn rate over time with alerts configured."
      }
    },
    "problem_section": {
      "section_id": "problem",
      "eyebrow": "Stop the spreadsheet guessing game",
      "headline": "You shouldn''t discover runway problems in a spreadsheet at 11pm",
      "description": "Runway tracking in spreadsheets is broken. By the time you update your model, the numbers are already stale. Cash crunches happen gradually, then suddenly.",
      "pain_points": [
        {
          "icon": "table",
          "title": "Spreadsheets get stale", 
          "description": "You update your runway model monthly—if you remember. By the time you check, the numbers are already wrong. That 14 months you thought you had? It''s actually 11."
        },
        {
          "icon": "trending-up",
          "title": "Burn creeps up unnoticed",
          "description": "New hire here, annual renewal there, AWS bill slightly higher this month. Small increases compound. You don''t notice until runway is suddenly shorter than expected."
        },
        {
          "icon": "alert-triangle",
          "title": "No early warning system",
          "description": "You find out runway is short when it''s already an emergency. Now you''re panic-fundraising or making rushed layoff decisions. It didn''t have to be this way."
        },
        {
          "icon": "clock",
          "title": "Always behind the numbers",
          "description": "Your last board update showed 18 months runway. But that was based on last quarter''s spend. Current reality? You have 12 months and dropping fast."
        }
      ],
      "stat_callout": {
        "number": "73%",
        "label": "of startups underestimate their burn rate by 20%+ according to First Round Capital",
        "source": "State of Startups 2023"
      }
    },
    "solution_section": {
      "section_id": "solution",
      "eyebrow": "Real-time financial intelligence",
      "headline": "Real-time runway that updates while you build",
      "description": "Connect your bank accounts and get instant visibility into your burn rate, runway, and cash trajectory. Always accurate, always current.",
      "features": [
        {
          "icon": "building-2",
          "title": "Bank-Connected Data",
          "description": "Connect Mercury, Chase, or any bank via Plaid. Your runway is always based on actual cash, not estimates."
        },
        {
          "icon": "flame",
          "title": "Daily Burn Rate",
          "description": "See your burn rate update daily. Trailing averages, trend direction, and month-over-month changes."
        },
        {
          "icon": "bell",
          "title": "Runway Alerts",
          "description": "Set thresholds at 12, 9, 6 months—whatever matters to you. Get notified before problems become emergencies."
        },
        {
          "icon": "pie-chart",
          "title": "Expense Breakdown",
          "description": "See where money goes: payroll, software, contractors, AWS. Catch category spikes before they hurt."
        },
        {
          "icon": "calculator",
          "title": "Scenario Modeling",
          "description": "''What if we hire 2 engineers?'' Get instant runway impact. No spreadsheet required."
        },
        {
          "icon": "file-text",
          "title": "Investor Reports",
          "description": "One-click reports with the metrics boards actually want. Stop recreating the same update every month."
        }
      ],
      "visual": {
        "type": "demo",
        "description": "Interactive demo showing bank connection flow, real-time dashboard updates, and alert configuration"
      }
    },
    "how_it_works": {
      "section_id": "how-it-works",
      "eyebrow": "Set up in minutes",
      "headline": "Set up in 10 minutes. Know your runway forever.",
      "steps": [
        {
          "number": 1,
          "title": "Connect your bank",
          "description": "Link your bank accounts via Plaid. We only need read access—we can''t move money.",
          "visual_description": "Secure bank connection interface with logos of supported banks"
        },
        {
          "number": 2,
          "title": "See your runway",
          "description": "Instantly see your burn rate, runway, and expense breakdown. No configuration needed.",
          "visual_description": "Dashboard populating with real data: burn rate, runway countdown, expense categories"
        },
        {
          "number": 3,
          "title": "Set alerts and relax",
          "description": "Choose your thresholds. We''ll watch your runway and tell you when action is needed.",
          "visual_description": "Alert configuration panel with threshold sliders and notification preferences"
        }
      ]
    },
    "social_proof": {
      "section_id": "proof",
      "eyebrow": "Trusted by founders",
      "headline": "Founders who stopped guessing",
      "testimonials": [
        {
          "quote": "RunwayAlert caught our burn spike 3 months before we would have noticed. Saved us from panic mode and gave us time to adjust properly.",
          "author": "Sarah Chen",
          "role": "CEO & Co-founder",
          "company": "DataFlow",
          "avatar_description": "Asian female founder in modern office setting",
          "result": "3 months early warning"
        },
        {
          "quote": "I use the investor reports for every board meeting. What used to take me 4 hours in Excel now takes 30 seconds.",
          "author": "Marcus Rodriguez",
          "role": "CEO",
          "company": "TechStart",
          "avatar_description": "Latino male founder with laptop and coffee",
          "result": "4 hours saved monthly"
        },
        {
          "quote": "We went from checking runway once a month to having it always visible. Game changer for financial planning.",
          "author": "Emily Watson",
          "role": "CTO & Co-founder",
          "company": "CloudBuild",
          "avatar_description": "Female technical founder with dual monitors",
          "result": "Daily runway visibility"
        }
      ],
      "stats": [
        {
          "number": "$100M+",
          "label": "Runway Tracked",
          "context": "across all customers"
        },
        {
          "number": "67%",
          "label": "Earlier Problem Detection",
          "context": "vs manual tracking"
        },
        {
          "number": "500+",
          "label": "Startups Protected",
          "context": "from cash surprises"
        },
        {
          "number": "1,200+",
          "label": "Alerts Sent",
          "context": "before crisis point"
        }
      ],
      "logos": {
        "headline": "Integrates With Your Stack",
        "companies": ["Plaid", "Mercury", "Chase", "Slack", "Stripe", "QuickBooks"]
      },
      "trust_badges": [
        {
          "icon": "shield",
          "text": "Bank-Level Security"
        },
        {
          "icon": "lock", 
          "text": "Read-Only Access"
        },
        {
          "icon": "check",
          "text": "SOC 2 Compliant"
        }
      ]
    },
    "pricing": {
      "section_id": "pricing",
      "eyebrow": "Transparent pricing",
      "headline": "Know your runway for less than a nice dinner",
      "subheadline": "$49/month. 14-day free trial. Cancel anytime.",
      "plans": [
        {
          "name": "Founder",
          "price": "$49",
          "price_detail": "/month",
          "description": "Perfect for solo founders and small teams at seed stage",
          "features": [
            "1 company / entity",
            "Connect up to 3 bank accounts",
            "Real-time burn rate and runway",
            "Runway alerts (email + Slack)",
            "Expense categorization",
            "Basic scenario modeling",
            "Weekly runway digest",
            "Investor report PDF",
            "Email support"
          ],
          "cta": "Start Free Trial",
          "highlighted": true,
          "badge": "Most Popular"
        },
        {
          "name": "Startup",
          "price": "$99",
          "price_detail": "/month",
          "description": "For Series A companies with multiple accounts or entities",
          "features": [
            "Everything in Founder",
            "Unlimited bank accounts",
            "Multiple entities (holding company, subsidiaries)",
            "Revenue tracking and net burn",
            "Advanced scenario modeling",
            "Board deck templates",
            "3 team seats",
            "Priority support"
          ],
          "cta": "Start Free Trial",
          "highlighted": false,
          "badge": null
        },
        {
          "name": "Scale",
          "price": "$199",
          "price_detail": "/month",
          "description": "For larger startups with finance teams and complex structures",
          "features": [
            "Everything in Startup",
            "Unlimited entities",
            "Unlimited team seats",
            "Role-based access (view-only for board)",
            "API access",
            "Custom alert rules",
            "Benchmark comparisons",
            "Dedicated success manager",
            "Quarterly business review"
          ],
          "cta": "Contact Sales",
          "highlighted": false,
          "badge": "Enterprise"
        }
      ],
      "guarantee": {
        "headline": "14-Day Free Trial",
        "description": "Full access to all features. No credit card required. Cancel anytime."
      },
      "pricing_note": "20% discount on annual plans. All plans include unlimited data retention and exports."
    },
    "faq": {
      "section_id": "faq",
      "headline": "Questions? We''ve Got Answers.",
      "questions": [
        {
          "question": "Which banks do you support?",
          "answer": "Any bank that works with Plaid—which is most of them. Mercury, Chase, SVB (successor banks), First Republic (JPMorgan), Bank of America, and hundreds more. If your bank isn''t supported, let us know."
        },
        {
          "question": "Is my banking data secure?",
          "answer": "Yes. We use Plaid for bank connections—the same infrastructure used by Venmo, Robinhood, and most fintech apps. We only have read access and never store credentials. Your data is encrypted at rest and in transit."
        },
        {
          "question": "How accurate is the burn rate?",
          "answer": "Very. We calculate burn from actual transactions, not estimates. We automatically detect and handle one-time expenses, refunds, and revenue so your average burn reflects reality."
        },
        {
          "question": "Can I add revenue to get net burn?",
          "answer": "Yes! On Startup tier and above, we detect incoming revenue and show both gross burn and net burn. For more accurate revenue, you can connect Stripe."
        },
        {
          "question": "Do you integrate with my accounting software?",
          "answer": "Not yet—we''re focused on bank data for now. But if you use QuickBooks or Xero, we can use their categorization for expense breakdowns. Full integration is on the roadmap."
        },
        {
          "question": "What if I have multiple entities or accounts?",
          "answer": "Startup tier supports multiple entities and unlimited bank accounts. You get a consolidated view across all accounts plus per-entity breakdowns."
        }
      ]
    },
    "final_cta": {
      "section_id": "cta",
      "headline": "Stop wondering. Start knowing.",
      "subheadline": "14-day free trial. No credit card required.",
      "cta_text": "Start Free Trial →",
      "trust_element": "✓ 14-day free trial ✓ No credit card required ✓ Bank-level security ✓ Cancel anytime"
    },
    "footer": {
      "tagline": "Know your runway. Always.",
      "links": {
        "product": ["Features", "Pricing", "Integrations", "Security"],
        "resources": ["Blog", "Help Center", "API Docs", "Runway Calculator"],
        "company": ["About", "Careers", "Press", "Contact"],
        "legal": ["Privacy", "Terms", "Security", "Compliance"]
      },
      "social": ["Twitter", "LinkedIn", "GitHub", "Slack"],
      "newsletter": {
        "headline": "Founder finance tips",
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

-- Insert execution plan with deliverable content for RunwayAlert
INSERT INTO execution_plans (idea_id, user_id, elevator_pitch, persona, user_stories, recommended_stack, launch_checklist, created_at)
VALUES (
  'runwayalert-069',
  NULL,
  '{
    "problem_statement": "Founders check runway in spreadsheets monthly—if they check at all. They get surprised by cash crunches because spending creeps up unnoticed. That new hire, the annual software renewals, the slightly-higher-than-expected AWS bill—it all compounds. By the time they realize runway is short, it''s too late to course-correct or fundraise comfortably. The result: panic fundraising, forced layoffs, or worse.",
    "solution_summary": "Connect your bank accounts and payroll. Get real-time burn rate calculations with trend analysis. Receive alerts when runway drops below your thresholds (12 months, 9 months, 6 months—whatever you set). Model scenarios for hiring plans and revenue changes. Generate investor-ready reports for board meetings. Know your numbers, always.",
    "target_customer": {
      "primary": "Seed to Series A founders managing $500K-$5M in the bank with 6-24 months runway and no full-time finance hire",
      "secondary": "Early-stage CFOs and fractional finance leaders who want real-time visibility without building spreadsheet models",
      "market_size_estimate": {
        "tam": "$5B startup financial tools market",
        "sam": "$500M runway and cash management tools for startups",
        "som": "$50M seed/Series A startups actively seeking runway visibility (50K+ startups at this stage)"
      }
    },
    "why_now": "Perfect timing: (1) Higher interest rates mean VCs are pushing portfolio companies to extend runway—founders need visibility, (2) The 2022-2023 downturn showed how fast runway problems can spiral, (3) Bank failures (SVB) made founders hyper-aware of cash positions, (4) More first-time founders than ever who don''t have finance backgrounds."
  }',

  '{
    "direct_competitors": [
      {
        "name": "Pilot",
        "url": "https://pilot.com",
        "positioning": "Full-service bookkeeping for startups",
        "pricing": "$500-2,000+/mo",
        "strengths": ["Full bookkeeping service", "Human accountants", "Investor-ready financials", "Tax prep included"],
        "weaknesses": ["Expensive for early stage", "Overkill for runway tracking", "Not real-time", "Minimum company size"]
      },
      {
        "name": "Pry (now Brex Venture Debt)",
        "url": "https://pry.co (acquired)",
        "positioning": "Financial planning for startups",
        "pricing": "Was $50-200/mo before acquisition",
        "strengths": ["Built for startups", "Scenario planning", "Good UX"],
        "weaknesses": ["Acquired/deprecated", "No longer independent product", "Bundled with Brex services"]
      },
      {
        "name": "Jirav",
        "url": "https://jirav.com",
        "positioning": "FP&A and financial planning",
        "pricing": "$500+/mo",
        "strengths": ["Full FP&A", "Forecasting", "Integrations"],
        "weaknesses": ["Too complex for early stage", "Expensive", "Requires finance expertise", "Enterprise-focused"]
      },
      {
        "name": "Causal",
        "url": "https://causal.app",
        "positioning": "Spreadsheets for financial modeling",
        "pricing": "$50-500/mo",
        "strengths": ["Flexible modeling", "Beautiful UI", "Collaboration"],
        "weaknesses": ["Still requires model building", "Not automated", "Generalist tool", "Learning curve"]
      },
      {
        "name": "Spreadsheets (DIY)",
        "url": "N/A",
        "positioning": "Manual runway tracking",
        "pricing": "Free",
        "strengths": ["Free", "Flexible", "Full control"],
        "weaknesses": ["Manual updates", "Gets stale", "Error-prone", "No alerts", "Not connected to real data"]
      }
    ],
    "indirect_competitors": [
      "QuickBooks/Xero reports (not startup-focused, not real-time)",
      "Banking dashboards (Mercury, Brex—show balance but not burn analysis)",
      "Investor update tools (Visible, Carta—reporting not tracking)",
      "Fractional CFOs (expensive, not automated)"
    ],
    "market_gaps": [
      "No simple, real-time runway tracker for early-stage startups",
      "Existing tools are either too expensive or too complex",
      "Bank dashboards don''t calculate burn rate or runway",
      "Spreadsheets require manual updates and get stale",
      "No proactive alerts—founders discover problems reactively",
      "Scenario modeling requires finance expertise most founders lack"
    ]
  }',

  ARRAY[
    '{
      "positioning_statement": "For seed to Series A founders who need to know their runway without becoming spreadsheet jockeys, RunwayAlert is a real-time cash monitoring tool that connects to your bank and shows exactly how long you can survive. Unlike full-service bookkeeping (expensive) or DIY spreadsheets (stale), we give you always-accurate runway with alerts before problems become emergencies.",
      "unique_value_proposition": "Know your runway. Always. No spreadsheets, no surprises.",
      "key_differentiators": [
        "Real-time, not monthly: Bank-connected data means your runway is always current, not based on last month''s numbers",
        "Alerts before crisis: Get notified at 12, 9, 6 months runway—not when you''re already at 3 months",
        "Burn trend analysis: See if burn is accelerating or decelerating—catch creeping expenses early",
        "Zero-config scenario modeling: ''What if we hire 2 engineers?'' answered in seconds without building models",
        "Investor-ready reports: One-click board updates with the metrics investors actually want to see"
      ],
      "category": "Startup financial monitoring (creating subcategory: Runway Intelligence)"
    }',

    '{
      "core_features": [
        {
          "feature": "Bank Account Connection",
          "description": "Connect bank accounts via Plaid. Support Mercury, SVB, First Republic, Chase, traditional banks. Read-only access to transactions.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Payroll Detection",
          "description": "Automatically identify payroll transactions from common providers (Gusto, Rippling, Justworks, ADP). Separate from other expenses for cleaner burn analysis.",
          "priority": "P0",
          "effort": "Small"
        },
        {
          "feature": "Burn Rate Calculator",
          "description": "Calculate monthly burn rate from transaction data. Show trailing 3-month average, trend direction, and month-over-month change.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Runway Dashboard",
          "description": "Current cash balance ÷ average burn = runway in months. Visual runway bar that updates daily. Historical runway chart showing trajectory.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Runway Alerts",
          "description": "Set thresholds (e.g., 12, 9, 6 months). Email and Slack alerts when runway drops below each threshold. Weekly runway digest email.",
          "priority": "P0",
          "effort": "Small"
        },
        {
          "feature": "Expense Categories",
          "description": "Auto-categorize expenses (payroll, software, contractors, AWS/infra, marketing, etc.). Show burn breakdown by category with trends.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Scenario Modeling",
          "description": "Simple ''what if'' calculator: add hires, change revenue, adjust expenses. Instantly see impact on runway. No spreadsheet skills required.",
          "priority": "P1",
          "effort": "Medium"
        },
        {
          "feature": "Investor Report",
          "description": "One-click PDF/link with: cash balance, burn rate, runway, burn by category, and trend. Format investors actually want for updates.",
          "priority": "P1",
          "effort": "Medium"
        },
        {
          "feature": "Multi-Account Support",
          "description": "Connect multiple bank accounts and entities. Consolidated view across all accounts. Useful for holding company structures.",
          "priority": "P1",
          "effort": "Small"
        },
        {
          "feature": "Revenue Tracking",
          "description": "Detect and separate incoming revenue from expenses. Calculate net burn (expenses minus revenue). Important for companies with some revenue.",
          "priority": "P1",
          "effort": "Medium"
        }
      ],
      "post_mvp_features": [
        "Stripe/payment processor integration for accurate revenue",
        "Board deck templates with auto-populated metrics",
        "Benchmark comparisons (your burn vs similar stage/industry)",
        "Cash flow forecasting based on recurring transactions",
        "Multiple user roles (founder, CFO, board observer)",
        "Fundraising runway scenarios (dilution modeling)",
        "Integration with cap table tools (Carta, Pulley)",
        "Mobile app for quick runway checks",
        "Quickbooks/Xero integration for categorization",
        "AI-powered spending insights and savings recommendations"
      ],
      "out_of_scope": [
        "Full bookkeeping (use Pilot, Bench)",
        "Invoicing and billing",
        "Tax preparation",
        "Expense management and receipt scanning",
        "Payroll processing",
        "Banking services"
      ],
      "mvp_timeline": "6-8 weeks for solo developer, 4-5 weeks for small team"
    }',

    '{
      "recommended_stack": {
        "frontend": "Next.js 14 (App Router) — Dashboard-focused, needs good charting",
        "backend": "Next.js API Routes + Supabase Edge Functions",
        "database": "Supabase (Postgres) — Transactions, accounts, alerts",
        "auth": "Supabase Auth — Email/password + magic links (founders hate passwords)",
        "payments": "Stripe — Subscription billing",
        "hosting": "Vercel — Edge performance for dashboards",
        "background_jobs": "Inngest or Trigger.dev — Daily sync, alert checking",
        "key_integrations": [
          "Plaid — Bank account connections (core integration)",
          "Slack API — Alert notifications",
          "Resend — Email alerts and weekly digests",
          "OpenAI — Transaction categorization (optional enhancement)"
        ]
      },
      "build_vs_buy": [
        {
          "component": "Bank Connections",
          "recommendation": "Buy (Plaid)",
          "reasoning": "Bank aggregation is complex and regulated. Plaid is the standard. Cost: ~$0.30/account/month at scale."
        },
        {
          "component": "Transaction Categorization",
          "recommendation": "Build (rule-based + AI)",
          "reasoning": "Start with rules (Gusto = payroll, AWS = infrastructure). Add AI for edge cases. Plaid provides some categorization."
        },
        {
          "component": "Burn Rate Calculations",
          "recommendation": "Build (core product)",
          "reasoning": "Simple math but your differentiator is getting it right. Handle edge cases (refunds, one-time expenses, etc.)."
        },
        {
          "component": "Alerting",
          "recommendation": "Build (simple) + Buy (delivery)",
          "reasoning": "Logic is simple (runway < threshold). Use Resend for email, Slack webhooks for Slack."
        },
        {
          "component": "Charts/Visualization",
          "recommendation": "Build (with Tremor/Recharts)",
          "reasoning": "Use charting library but build custom dashboards. Runway visualization is core UX."
        },
        {
          "component": "PDF Reports",
          "recommendation": "Build (with react-pdf)",
          "reasoning": "Investor reports are a key feature. Control the design. react-pdf works well."
        }
      ],
      "estimated_monthly_cost": {
        "0_100_users": "$100-250/mo (Vercel free, Supabase free, ~$50 Plaid, ~$30 Resend)",
        "100_500_users": "$500-1,000/mo (Plaid scales, Supabase Pro, more API calls)",
        "500_2000_users": "$2,000-5,000/mo (Plaid is primary cost at scale)"
      }
    }'
  ],

  '{
    "pricing_model": "Tiered subscription based on features",
    "pricing_rationale": "No free tier—founders who care about runway will pay. Low entry price ($49) removes friction. Higher tiers for multi-entity and team access. Annual discount rewards commitment.",
    "tiers": [
      {
        "name": "Founder",
        "price": "$49/month ($39/mo annual)",
        "target_customer": "Solo founders and small teams at seed stage",
        "features": [
          "1 company / entity",
          "Connect up to 3 bank accounts",
          "Real-time burn rate and runway",
          "Runway alerts (email + Slack)",
          "Expense categorization",
          "Basic scenario modeling",
          "Weekly runway digest",
          "Investor report PDF",
          "Email support"
        ],
        "limitations": [
          "1 entity only",
          "3 bank accounts",
          "1 user"
        ]
      },
      {
        "name": "Startup",
        "price": "$99/month ($79/mo annual)",
        "target_customer": "Series A companies with multiple accounts or entities",
        "features": [
          "Everything in Founder",
          "Unlimited bank accounts",
          "Multiple entities (holding company, subsidiaries)",
          "Revenue tracking and net burn",
          "Advanced scenario modeling",
          "Board deck templates",
          "3 team seats",
          "Priority support"
        ],
        "limitations": [
          "3 users",
          "5 entities max"
        ]
      },
      {
        "name": "Scale",
        "price": "$199/month ($159/mo annual)",
        "target_customer": "Larger startups with finance teams and complex structures",
        "features": [
          "Unlimited entities",
          "Unlimited team seats",
          "Role-based access (view-only for board)",
          "API access",
          "Custom alert rules",
          "Benchmark comparisons",
          "Dedicated success manager",
          "Quarterly business review"
        ],
        "limitations": []
      }
    ],
    "free_tier_strategy": "No free tier. Founders serious about runway will pay $49/mo. Offer 14-day free trial with full features to reduce friction.",
    "annual_discount": "20% discount (2.4 months free) for annual plans",
    "pricing_psychology": "$49/mo is less than one hour of fractional CFO time. Position against the cost of not knowing (panic fundraising, bad decisions). Know your runway for the price of a nice dinner."
  }',

  ARRAY[
    '{
      "brand_name": "RunwayAlert",
      "tagline": "Know your runway. Always.",
      "brand_personality": [
        "Vigilant — Always watching your cash so you don''t have to",
        "Direct — No BS, just the numbers that matter",
        "Founder-friendly — Built by people who''ve been there",
        "Calm — Reduces anxiety, doesn''t create it",
        "Trustworthy — Your financial data is sacred"
      ],
      "brand_voice": {
        "tone": "Confident, direct, and supportive. Like a level-headed co-founder who keeps an eye on the numbers while you focus on building.",
        "do": [
          "Use founder language (runway, burn, raise, bridge)",
          "Be direct about numbers—good or bad",
          "Acknowledge the stress of cash management",
          "Celebrate runway improvements",
          "Give actionable insights, not just data"
        ],
        "dont": [
          "Don''t be alarmist (even when runway is short)",
          "Don''t use finance jargon (EBITDA, accruals)",
          "Don''t lecture about spending",
          "Don''t pretend cash management is fun",
          "Don''t make founders feel bad about their burn"
        ]
      },
      "visual_direction": {
        "color_palette": {
          "primary": "#0EA5E9 (Sky blue) — Clarity, calm, visibility",
          "secondary": "#0369A1 (Dark sky) — Trust, stability",
          "success": "#22C55E (Green) — Healthy runway, positive trends",
          "warning": "#F59E0B (Amber) — Attention needed, approaching threshold",
          "danger": "#EF4444 (Red) — Critical runway, action required",
          "neutrals": ["#F8FAFC (slate 50)", "#0F172A (slate 900)"]
        },
        "typography": {
          "display": "Inter — Clean, professional, works great with numbers",
          "body": "Inter — Consistent, readable for dashboards"
        },
        "visual_style": "Clean, dashboard-focused, numbers-forward. Runway should be the hero metric—big, bold, impossible to miss. Use color strategically (green = good, amber = attention, red = urgent). Dark mode essential for the late-night runway check."
      },
      "messaging": {
        "elevator_pitch_10s": "RunwayAlert connects to your bank and tells you exactly how many months of runway you have—updated daily, with alerts before you''re in trouble.",
        "elevator_pitch_30s": "Founders find out they''re running low on cash when it''s already an emergency. RunwayAlert connects to your bank accounts, calculates your real burn rate, and shows your exact runway—updated every day. Set alerts at 12, 9, and 6 months. Never be surprised by a cash crunch again.",
        "key_messages": [
          "Know your runway. Always.",
          "Real-time burn rate. Daily runway updates.",
          "Alerts before problems become emergencies.",
          "Your runway, not a spreadsheet''s best guess.",
          "Stop checking spreadsheets. Start knowing."
        ]
      }
    }',

    '{
      "pre_launch": {
        "4_weeks_before": [
          {"task": "MVP with Plaid integration and basic dashboard", "category": "Product", "critical": true},
          {"task": "Burn rate calculation with trailing averages", "category": "Product", "critical": true},
          {"task": "Runway display and basic alerts", "category": "Product", "critical": true},
          {"task": "Landing page live with waitlist", "category": "Marketing", "critical": true},
          {"task": "Create demo video showing dashboard", "category": "Marketing", "critical": true},
          {"task": "Start Twitter content on founder finance topics", "category": "Marketing", "critical": false}
        ],
        "2_weeks_before": [
          {"task": "Add expense categorization", "category": "Product", "critical": true},
          {"task": "Email and Slack alerts working", "category": "Product", "critical": true},
          {"task": "Beta test with 20-30 founder friends", "category": "Product", "critical": true},
          {"task": "Collect testimonials from beta users", "category": "Marketing", "critical": true},
          {"task": "Set up Stripe billing with trial", "category": "Product", "critical": true},
          {"task": "Prepare Product Hunt assets", "category": "Marketing", "critical": true}
        ],
        "1_week_before": [
          {"task": "Final product polish", "category": "Product", "critical": true},
          {"task": "Security review of bank data handling", "category": "Product", "critical": true},
          {"task": "Reach out to founder communities", "category": "Marketing", "critical": false},
          {"task": "Schedule launch day posts", "category": "Marketing", "critical": true},
          {"task": "Brief on common support questions", "category": "Support", "critical": true}
        ],
        "day_before": [
          {"task": "Schedule Product Hunt launch", "category": "Marketing", "critical": true},
          {"task": "Pre-write responses for common questions", "category": "Support", "critical": true},
          {"task": "Test Plaid connections one more time", "category": "Product", "critical": true},
          {"task": "Rest up", "category": "Personal", "critical": true}
        ]
      },
      "launch_day": [
        {"time": "12:01 AM PT", "task": "Product Hunt goes live", "platform": "Product Hunt"},
        {"time": "6:00 AM", "task": "Maker comment with founder story (why I built this)", "platform": "Product Hunt"},
        {"time": "7:00 AM", "task": "Twitter thread: ''I almost ran out of cash. Here''s what I learned.''", "platform": "Twitter/X"},
        {"time": "8:00 AM", "task": "LinkedIn post targeting startup operators/CFOs", "platform": "LinkedIn"},
        {"time": "9:00 AM", "task": "Send launch email to waitlist", "platform": "Email"},
        {"time": "10:00 AM", "task": "Post in founder communities (YC, Indie Hackers, On Deck)", "platform": "Slack/Discord"},
        {"time": "12:00 PM", "task": "Engage with HN if someone posts", "platform": "Hacker News"},
        {"time": "All day", "task": "Reply to every PH comment", "platform": "Product Hunt"},
        {"time": "All day", "task": "Monitor Plaid connections for issues", "platform": "Product"},
        {"time": "Evening", "task": "Thank the community, share day 1 numbers", "platform": "Twitter/X"}
      ],
      "post_launch": {
        "week_1": [
          "Respond to all user feedback within 24 hours",
          "Fix any Plaid connection issues",
          "Follow up with free trial users who haven''t connected a bank",
          "Share user testimonials and runway insights saved",
          "Publish ''how we built RunwayAlert'' technical post"
        ],
        "week_2_4": [
          "Add investor report feature",
          "Implement scenario modeling",
          "Create content on founder financial literacy",
          "Partner with startup accountants for referrals",
          "SEO content on runway, burn rate, cash management"
        ],
        "month_2_3": [
          "Add Stripe integration for revenue tracking",
          "Launch multi-entity support",
          "Analyze conversion funnel",
          "A/B test pricing page",
          "Explore partnerships with accelerators and VCs"
        ]
      },
      "launch_platforms": {
        "primary": ["Product Hunt", "Twitter/X", "Hacker News"],
        "secondary": ["LinkedIn", "Indie Hackers"],
        "community": [
          "YC Slack/forums",
          "On Deck communities", 
          "Startup School forums",
          "r/startups",
          "r/SaaS",
          "Founder Slack groups"
        ]
      }
    }',

    '{
      "north_star_metric": {
        "metric": "Weekly Active Companies with Connected Banks",
        "definition": "Unique companies with at least 1 bank account connected that viewed their dashboard in the past 7 days",
        "target_day_1": "30 active companies",
        "target_month_1": "150 active companies", 
        "target_month_3": "600 active companies"
      },
      "acquisition_metrics": [
        {
          "metric": "Website visitors",
          "definition": "Unique visitors to marketing site",
          "target": "10K/month by month 3",
          "tool": "Plausible/PostHog"
        },
        {
          "metric": "Trial signup rate",
          "definition": "Visitors who start free trial",
          "target": "5-8% (niche product, high intent)",
          "tool": "PostHog"
        },
        {
          "metric": "Bank connected rate",
          "definition": "% of signups who connect at least 1 bank",
          "target": "70%+ (this is the activation moment)",
          "tool": "PostHog"
        }
      ],
      "activation_metrics": [
        {
          "metric": "Dashboard viewed after connection",
          "definition": "% of users who view runway dashboard after connecting bank",
          "target": "95%+",
          "tool": "PostHog"
        },
        {
          "metric": "Alert configured",
          "definition": "% of users who set up runway alerts", 
          "target": "60%+",
          "tool": "PostHog"
        },
        {
          "metric": "Second week login",
          "definition": "% of users who return in week 2",
          "target": "70%+",
          "tool": "PostHog"
        }
      ],
      "retention_metrics": [
        {
          "metric": "Monthly retention",
          "definition": "% of companies active month-over-month",
          "target": "85%+ (sticky product—runway matters always)",
          "tool": "PostHog"
        },
        {
          "metric": "Alert engagement",
          "definition": "% of alerts that result in dashboard visit within 24 hours",
          "target": "80%+",
          "tool": "PostHog"
        },
        {
          "metric": "Weekly digest open rate",
          "definition": "% of weekly runway emails opened",
          "target": "60%+",
          "tool": "Resend"
        }
      ],
      "revenue_metrics": [
        {
          "metric": "Trial to paid conversion",
          "definition": "% of trial users who convert to paid",
          "target": "25-35% (high-intent audience)",
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
          "definition": "Average revenue per paying company",
          "target": "$60-75/month (mix of tiers)",
          "tool": "Stripe"
        },
        {
          "metric": "Churn rate",
          "definition": "% of paying customers who cancel monthly",
          "target": "<4% (runway tracking is sticky)",
          "tool": "Stripe"
        }
      ],
      "unit_economics": {
        "target_cac": "$100-200 (founder communities are efficient)",
        "target_ltv": "$1,500+ (24+ months at $65 ARPU)",
        "target_ltv_cac_ratio": "7.5:1 or better",
        "target_payback_period": "2-3 months"
      }
    }'
  ],

  NOW()
);