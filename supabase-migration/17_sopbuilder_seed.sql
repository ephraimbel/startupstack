-- SOPBuilder Seed Data (idea_081)
-- AI-powered SOP documentation from screen recordings

INSERT INTO ideas (
  id, user_id, title, one_liner, problem, target_customer, solution, monetization,
  tags, keywords, status, demand_score, demand_band, trend_label, validation_summary,
  validated_at, is_public, is_saved, created_at, updated_at, why_now, revenue_impact,
  market_size, competition_level, category, business_type, price_range
) VALUES (
  'sopbuilder-081',
  NULL,
  'SOPBuilder',
  'Record once. Document forever. Train everyone.',
  'Companies hemorrhage money when employees improvise instead of following processes. That experienced employee who knows exactly how to process refunds, configure the CRM, or onboard new clients? When they leave, their knowledge walks out the door. New hires take months to get up to speed because training is ''watch me do it once'' or a Google Doc from 2019.',
  'Operations managers at companies with 20-200 employees who are tired of answering the same questions and losing knowledge when people leave',
  'Just do the task while our browser extension records. SOPBuilder watches your screen, captures every click and keystroke, and uses AI to generate professional step-by-step documentation with annotated screenshots, decision points, and warnings. Version control tracks changes over time.',
  '$29/month (10 SOPs, 3 editors), $79/month (50 SOPs, 10 editors), $199/month (unlimited SOPs and editors). 14-day free trial, 17% annual discount.',
  ARRAY['documentation', 'process-management', 'ai-tools', 'training', 'operations', 'automation'],
  NULL,
  'validated',
  86,
  'high',
  'rising',
  NULL,
  NULL,
  TRUE,
  FALSE,
  NOW(),
  NOW(),
  'Perfect timing: (1) Remote/hybrid work made ''watch me do it'' training impossible—documentation is essential, (2) Employee turnover is at record highs—knowledge loss is critical, (3) AI can now understand screen recordings and generate coherent documentation, (4) Companies are drowning in tribal knowledge that exists only in people''s heads.',
  'Companies save 50+ hours per month on documentation creation and reduce new hire ramp time by 60%. Prevents knowledge loss worth $50K+ when experienced employees leave. Reduces process-related errors and support tickets.',
  '$2.5B SOP and procedure documentation tools',
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

-- Insert landing page for SOPBuilder
INSERT INTO landing_pages (idea_id, slug, content, is_published, created_at, updated_at)
VALUES (
  'sopbuilder-081',
  'sopbuilder',
  '{
    "meta": {
      "title": "SOPBuilder — AI-Powered SOP Documentation from Screen Recordings",
      "description": "Record your screen as you work. AI generates professional SOPs with screenshots. Version control and training tracking included. Try free for 14 days.",
      "og_image_concept": "Before/after transformation: messy screen recording on left, clean professional SOP document on right with numbered steps and annotated screenshots. Shows AI magic happening in between."
    },
    "hero": {
      "headline": "Stop documenting. Start recording.",
      "subheadline": "SOPBuilder watches you work and writes the SOP. Screen recording → AI documentation → professional procedures in minutes, not hours.",
      "cta_primary": {
        "text": "Start Free Trial",
        "url": "/signup"
      },
      "cta_secondary": {
        "text": "Watch it work →",
        "url": "#demo"
      },
      "social_proof_snippet": "Trusted by 1,000+ operations teams to document 25,000+ procedures",
      "hero_visual": {
        "type": "product_demo",
        "description": "Split-screen showing browser extension recording on left, AI-generated professional SOP with numbered steps and annotated screenshots on right. Transformation animation between the two."
      }
    },
    "problem_section": {
      "section_id": "problem",
      "eyebrow": "Knowledge walks out the door",
      "headline": "Your best knowledge walks out the door every day",
      "description": "Every company depends on tribal knowledge that exists only in employees'' heads. When they leave, productivity, efficiency, and institutional memory leave with them.",
      "pain_points": [
        {
          "icon": "user-x",
          "title": "Tribal knowledge is a liability", 
          "description": "That one person who knows exactly how to process refunds, configure the CRM, or close the quarterly books? When they leave, months of productivity leave with them. You can''t afford to depend on individual memory."
        },
        {
          "icon": "clock",
          "title": "Documentation takes forever",
          "description": "Writing a good SOP takes 2-3 hours: screenshot every step, write clear instructions, format it nicely. Multiply by dozens of procedures. Nobody has time. So nobody does it."
        },
        {
          "icon": "file-x",
          "title": "What you have is already outdated",
          "description": "That Google Doc from 2021? The process changed six times since then. Nobody updated the doc. New employees follow old instructions and make mistakes. Or they skip the docs entirely."
        },
        {
          "icon": "help-circle",
          "title": "Training is ''watch me once''",
          "description": "New hires shadow experienced staff for weeks, asking the same questions repeatedly. Knowledge transfer is inefficient and inconsistent. Different people teach different ways."
        }
      ],
      "stat_callout": {
        "number": "$50K+",
        "label": "average cost when an experienced employee leaves without documented knowledge",
        "source": "Operations Leadership Survey 2024"
      }
    },
    "solution_section": {
      "section_id": "solution",
      "eyebrow": "AI-powered documentation",
      "headline": "AI documentation that actually happens",
      "description": "Stop writing SOPs manually. Record your screen as you work and let AI create professional documentation instantly.",
      "features": [
        {
          "icon": "video",
          "title": "Record As You Work",
          "description": "Our browser extension captures your screen as you complete any task. Every click, every keystroke, every step—automatically."
        },
        {
          "icon": "sparkles",
          "title": "AI Writes the SOP",
          "description": "AI analyzes your recording and generates professional documentation: numbered steps, annotated screenshots, decision points, and warnings."
        },
        {
          "icon": "git-branch",
          "title": "Version Everything",
          "description": "Every edit is tracked. See what changed between versions. Revert mistakes. Know who updated what and when—like Git for SOPs."
        },
        {
          "icon": "graduation-cap",
          "title": "Train Your Team",
          "description": "Assign SOPs to team members. They mark steps complete as they learn. Dashboard shows who knows what. No more ''watch me once'' training."
        },
        {
          "icon": "split",
          "title": "Handle Complexity",
          "description": "Real procedures have branches. ''If enterprise client, do X. If SMB, do Y.'' We capture decision trees that other tools can''t handle."
        },
        {
          "icon": "share",
          "title": "Share Anywhere",
          "description": "Embed in Notion. Export to PDF. Share public links. Your SOPs work wherever your team does."
        }
      ],
      "visual": {
        "type": "interactive_demo",
        "description": "Live demo showing extension in action: user performing task, AI processing, final SOP generated"
      }
    },
    "how_it_works": {
      "section_id": "how-it-works",
      "eyebrow": "Minutes, not hours",
      "headline": "From task to documentation in 10 minutes",
      "steps": [
        {
          "number": 1,
          "title": "Just do the task",
          "description": "Install our extension and hit record. Then complete the procedure as you normally would. We capture everything.",
          "visual_description": "Browser with extension recording indicator, user performing task normally"
        },
        {
          "number": 2,
          "title": "AI builds your SOP",
          "description": "In seconds, get a complete document: numbered steps, screenshots with highlights, tips, and warnings. Edit if needed.",
          "visual_description": "AI processing screen with transformation animation, clean SOP document appearing"
        },
        {
          "number": 3,
          "title": "Share and train",
          "description": "Publish to your team. Assign for training. Track who''s up to speed. Keep it updated as processes evolve.",
          "visual_description": "Team dashboard showing SOP library, training assignments, and completion tracking"
        }
      ]
    },
    "social_proof": {
      "section_id": "proof",
      "eyebrow": "Operations teams love it",
      "headline": "Operations teams are documenting everything",
      "testimonials": [
        {
          "quote": "We documented 50 procedures in one week. What used to take our team months now takes days. SOPBuilder transformed our operations.",
          "author": "Jennifer Martinez",
          "role": "Operations Manager",
          "company": "TechFlow",
          "avatar_description": "Professional operations manager in modern office setting",
          "result": "50 SOPs in 1 week"
        },
        {
          "quote": "New hire onboarding went from 3 months to 6 weeks. They have clear documentation for everything instead of shadowing people constantly.",
          "author": "David Chen",
          "role": "HR Director",
          "company": "GrowthCorp",
          "avatar_description": "HR professional with laptop and training materials",
          "result": "50% faster onboarding"
        },
        {
          "quote": "Our ''how do I...'' Slack messages dropped by 70%. People find the answers in SOPs instead of asking the same questions repeatedly.",
          "author": "Sarah Kim",
          "role": "Support Manager", 
          "company": "CloudBase",
          "avatar_description": "Support manager with multiple monitors showing team chat",
          "result": "70% fewer questions"
        }
      ],
      "stats": [
        {
          "number": "25,000+",
          "label": "SOPs Created",
          "context": "across all customers"
        },
        {
          "number": "90%",
          "label": "Time Saved",
          "context": "vs manual documentation"
        },
        {
          "number": "1,000+",
          "label": "Operations Teams",
          "context": "using SOPBuilder"
        },
        {
          "number": "60%",
          "label": "Faster Onboarding",
          "context": "with documented procedures"
        }
      ],
      "logos": {
        "headline": "Integrates With Your Tools",
        "companies": ["Notion", "Confluence", "Slack", "Chrome", "Edge", "Microsoft"]
      },
      "trust_badges": [
        {
          "icon": "shield",
          "text": "Enterprise Security"
        },
        {
          "icon": "eye-off", 
          "text": "Privacy Controls"
        },
        {
          "icon": "check",
          "text": "SOC 2 Compliant"
        }
      ]
    },
    "pricing": {
      "section_id": "pricing",
      "eyebrow": "Team pricing, not per-user",
      "headline": "Flat pricing. Document everything.",
      "subheadline": "No per-user fees. Unlimited team members. Pay by SOPs, not seats.",
      "plans": [
        {
          "name": "Starter",
          "price": "$29",
          "price_detail": "/month",
          "description": "Perfect for small teams documenting core procedures",
          "features": [
            "Up to 10 SOPs",
            "Unlimited team members (viewers)",
            "3 editors",
            "Browser extension capture",
            "AI documentation generation",
            "Basic version history (30 days)",
            "PDF export",
            "Email support"
          ],
          "cta": "Start Free Trial",
          "highlighted": false,
          "badge": null
        },
        {
          "name": "Team",
          "price": "$79",
          "price_detail": "/month",
          "description": "For growing companies standardizing operations",
          "features": [
            "Up to 50 SOPs",
            "Unlimited team members",
            "10 editors",
            "Everything in Starter",
            "Full version history",
            "Training mode",
            "Decision branch support",
            "Notion/Confluence embed",
            "Slack notifications",
            "Priority support"
          ],
          "cta": "Start Free Trial",
          "highlighted": true,
          "badge": "Most Popular"
        },
        {
          "name": "Business",
          "price": "$199",
          "price_detail": "/month",
          "description": "For established companies with complex operations",
          "features": [
            "Unlimited SOPs",
            "Unlimited team members",
            "Unlimited editors",
            "Everything in Team",
            "Desktop app capture",
            "Training analytics dashboard",
            "SSO (SAML)",
            "API access",
            "Audit log",
            "Dedicated success manager"
          ],
          "cta": "Contact Sales",
          "highlighted": false,
          "badge": "Enterprise"
        }
      ],
      "guarantee": {
        "headline": "14-Day Free Trial",
        "description": "Full Team features. No credit card required. Cancel anytime."
      },
      "pricing_note": "17% discount on annual plans. Free plan with 3 SOPs and 1 editor available."
    },
    "faq": {
      "section_id": "faq",
      "headline": "Questions? We''ve Got Answers.",
      "questions": [
        {
          "question": "What apps can I document?",
          "answer": "Any web-based application works with our browser extension: CRMs, ERPs, admin dashboards, cloud tools—anything you do in Chrome or Edge. Desktop apps (Excel, Photoshop) require our Business plan desktop agent."
        },
        {
          "question": "How accurate is the AI documentation?",
          "answer": "Very good for most procedures—you''ll typically make minor edits rather than rewrites. Complex workflows with lots of conditional logic may need more cleanup. The editor makes refinements easy."
        },
        {
          "question": "Can I edit the generated SOPs?",
          "answer": "Absolutely. Full WYSIWYG editor lets you reorder steps, add notes, blur sensitive info, and insert decision branches. You can also add video walkthroughs and supplementary content."
        },
        {
          "question": "What about sensitive data in screenshots?",
          "answer": "We offer one-click blur for any part of any screenshot. You can also pause recording when entering sensitive data. All content is encrypted at rest and in transit."
        },
        {
          "question": "How do you compare to Scribe or Tango?",
          "answer": "They do capture well, but we add what they''re missing: true version control, team training tracking, decision tree support, and flat pricing instead of per-user. Plus we think our AI generates better documentation."
        },
        {
          "question": "What if our processes change?",
          "answer": "Just re-record and update. Version history shows what changed. Coming soon: AI will detect when your actual workflow differs from the SOP and flag it for update."
        }
      ]
    },
    "final_cta": {
      "section_id": "cta",
      "headline": "Every process documented. Every team member trained.",
      "subheadline": "Start your 14-day free trial. No credit card required.",
      "cta_text": "Start Free Trial →",
      "trust_element": "✓ 14-day free trial ✓ No credit card required ✓ 90% time savings ✓ Unlimited viewers"
    },
    "footer": {
      "tagline": "Record once. Document forever. Train everyone.",
      "links": {
        "product": ["Features", "Pricing", "Chrome Extension", "Desktop Capture"],
        "resources": ["Blog", "Help Center", "SOP Templates", "Training Resources"],
        "company": ["About", "Careers", "Press", "Contact"],
        "legal": ["Privacy", "Terms", "Security", "Data Processing"]
      },
      "social": ["Twitter", "LinkedIn", "YouTube", "Slack"],
      "newsletter": {
        "headline": "Operations and process tips",
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

-- Insert execution plan with deliverable content for SOPBuilder
INSERT INTO execution_plans (idea_id, user_id, elevator_pitch, persona, user_stories, recommended_stack, launch_checklist, created_at)
VALUES (
  'sopbuilder-081',
  NULL,
  '{
    "problem_statement": "Companies hemorrhage money when employees improvise instead of following processes. That experienced employee who knows exactly how to process refunds, configure the CRM, or onboard new clients? When they leave, their knowledge walks out the door. New hires take months to get up to speed because training is ''watch me do it once'' or a Google Doc from 2019. The average company loses $50K+ annually to process inconsistency, training time, and mistakes from undocumented workflows.",
    "solution_summary": "Just do the task while our browser extension records. SOPBuilder watches your screen, captures every click and keystroke, and uses AI to generate professional step-by-step documentation with annotated screenshots, decision points, and warnings. Version control tracks changes over time. Training mode lets employees confirm they''ve learned each step.",
    "target_customer": {
      "primary": "Operations managers at companies with 20-200 employees who are tired of answering the same questions and losing knowledge when people leave",
      "secondary": "HR/Training leaders standardizing onboarding, and team leads documenting technical procedures",
      "market_size_estimate": {
        "tam": "$12B process documentation and knowledge management market",
        "sam": "$2.5B SOP and procedure documentation tools",
        "som": "$250M SMBs actively seeking automated documentation solutions (500K+ companies with 20-200 employees)"
      }
    },
    "why_now": "Perfect timing: (1) Remote/hybrid work made ''watch me do it'' training impossible—documentation is essential, (2) Employee turnover is at record highs—knowledge loss is critical, (3) AI can now understand screen recordings and generate coherent documentation, (4) Companies are drowning in tribal knowledge that exists only in people''s heads, (5) Competitors (Scribe, Tango) validated the market but left room for better features."
  }',

  '{
    "direct_competitors": [
      {
        "name": "Scribe",
        "url": "https://scribehow.com",
        "positioning": "Auto-generate how-to guides from screen recordings",
        "pricing": "$23/user/month Pro, custom Enterprise",
        "strengths": ["Strong brand", "Good capture quality", "Integrations", "Enterprise traction"],
        "weaknesses": ["Per-user pricing gets expensive", "No version control", "Limited training tracking", "No decision tree support"]
      },
      {
        "name": "Tango",
        "url": "https://tango.us",
        "positioning": "Free workflow documentation",
        "pricing": "Free basic, $16/user/month Pro",
        "strengths": ["Free tier", "Good capture", "Nice UI", "Browser extension"],
        "weaknesses": ["Limited free tier", "Per-user pricing", "No training verification", "Basic version control"]
      },
      {
        "name": "Loom + Google Docs",
        "url": "N/A",
        "positioning": "DIY documentation",
        "pricing": "Free-$15/user/month",
        "strengths": ["Familiar tools", "Flexible", "Cheap"],
        "weaknesses": ["Completely manual", "No searchability", "Videos become outdated", "No step extraction"]
      },
      {
        "name": "Trainual",
        "url": "https://trainual.com",
        "positioning": "Training and onboarding platform",
        "pricing": "$249/month and up",
        "strengths": ["Full training platform", "Progress tracking", "Good for onboarding"],
        "weaknesses": ["Expensive", "Requires manual content creation", "Overkill for just SOPs", "No auto-capture"]
      },
      {
        "name": "Notion/Confluence",
        "url": "N/A",
        "positioning": "General documentation",
        "pricing": "Free-$10/user/month",
        "strengths": ["Flexible", "Good for many use cases", "Search"],
        "weaknesses": ["All manual", "SOPs buried with other docs", "No capture", "No training tracking"]
      }
    ],
    "indirect_competitors": [
      "Screen recording tools (Loom, CloudApp)",
      "Wiki software (Notion, Confluence, Slite)",
      "LMS platforms (Lessonly, Docebo)",
      "Knowledge base tools (Guru, Tettra)"
    ],
    "market_gaps": [
      "No tool does recording + AI docs + version control + training tracking together",
      "Per-user pricing makes competitors expensive for larger teams",
      "Competitors don''t handle decision trees (if X, do Y; otherwise do Z)",
      "No tool tracks when procedures actually change vs just documentation updates",
      "Training verification is afterthought or separate product",
      "Competitors focus on creation, not on keeping docs up-to-date"
    ]
  }',

  ARRAY[
    '{
      "positioning_statement": "For operations leaders who are tired of tribal knowledge walking out the door, SOPBuilder is an AI documentation tool that turns screen recordings into professional SOPs with version control and training tracking. Unlike Scribe or Tango that just capture steps, we help you maintain documentation over time and verify employees actually learned the procedures.",
      "unique_value_proposition": "Record once. Document forever. Train everyone.",
      "key_differentiators": [
        "Team pricing, not per-user: Flat monthly rate so you can document everything without counting seats",
        "Version control that matters: See what changed between versions, track who updated what, revert if needed—like Git for SOPs",
        "Decision tree support: Handle ''if this, then that'' procedures that competitors can''t capture properly",
        "Training verification: Employees confirm each step as they learn, managers see completion status and knowledge gaps",
        "Change detection: AI notices when your actual workflow differs from the documented one and flags it for update"
      ],
      "category": "Process documentation and knowledge management (creating subcategory: AI-Powered SOP Automation)"
    }',

    '{
      "core_features": [
        {
          "feature": "Browser Extension Capture",
          "description": "Chrome/Edge extension records screen with every click, scroll, and text entry. Captures screenshots automatically at each step. Works on any web-based tool.",
          "priority": "P0",
          "effort": "Large"
        },
        {
          "feature": "AI Documentation Generator",
          "description": "Analyzes recording and generates professional SOP: numbered steps, annotated screenshots with click indicators, warnings for critical actions, and tips for common mistakes.",
          "priority": "P0",
          "effort": "Large"
        },
        {
          "feature": "SOP Editor",
          "description": "Edit generated docs: reorder steps, add notes, blur sensitive info in screenshots, add decision branches. WYSIWYG editing for non-technical users.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "SOP Library",
          "description": "Organized repository of all SOPs. Folders by team/department. Search across all documentation. Favorite frequently-used procedures.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Sharing & Permissions",
          "description": "Share SOPs with team members or make public links. Control who can view vs edit. Embed in Notion/Confluence or export to PDF.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Version History",
          "description": "Every edit creates a version. Side-by-side comparison of changes. Restore previous versions. See who changed what and when.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Team Workspace",
          "description": "Invite team members. Assign SOP ownership. Activity feed shows recent changes. Notifications when SOPs you follow are updated.",
          "priority": "P1",
          "effort": "Medium"
        },
        {
          "feature": "Training Mode",
          "description": "Assign SOPs to team members. They mark each step complete as they practice. Dashboard shows who''s trained on what. Due dates for required training.",
          "priority": "P1",
          "effort": "Medium"
        },
        {
          "feature": "Decision Branch Support",
          "description": "Add conditional paths: ''If customer is enterprise, go to step 5. If SMB, go to step 3.'' Visual flowchart for complex procedures.",
          "priority": "P1",
          "effort": "Medium"
        },
        {
          "feature": "Desktop App Capture",
          "description": "Record procedures in desktop apps (Excel, Photoshop, etc.), not just web browsers. Requires desktop agent installation.",
          "priority": "P1",
          "effort": "Large"
        }
      ],
      "post_mvp_features": [
        "Change detection (AI notices when workflow changed)",
        "Zapier/API integration for workflow triggers",
        "Analytics (most viewed SOPs, training completion rates)",
        "Video walkthroughs embedded in SOPs",
        "Multi-language SOP generation",
        "Compliance/audit trail for regulated industries",
        "Mobile capture for field procedures",
        "AI chat that answers questions from SOP content",
        "Automatic SOP suggestions based on support tickets",
        "White-label for consultants and MSPs"
      ],
      "out_of_scope": [
        "Full LMS/course creation (we do SOPs, not courses)",
        "HR onboarding workflows (use with BambooHR, etc.)",
        "IT documentation (use with ITGlue, Hudu)",
        "Video editing features (we generate docs from video)",
        "Workflow automation (we document, not automate)"
      ],
      "mvp_timeline": "10-12 weeks for solo developer, 6-8 weeks for small team"
    }',

    '{
      "recommended_stack": {
        "frontend": "Next.js 14 (App Router) — Dashboard + WYSIWYG editor",
        "backend": "Next.js API Routes + Supabase Edge Functions",
        "database": "Supabase (Postgres) — SOPs, versions, users, training records",
        "auth": "Supabase Auth — Email/password + Google SSO",
        "payments": "Stripe — Subscription billing",
        "hosting": "Vercel — Fast for dashboard interactions",
        "file_storage": "Cloudflare R2 or Supabase Storage — Screenshots and recordings",
        "browser_extension": "Chrome Extension (Manifest V3) — Screen capture and event tracking",
        "key_integrations": [
          "OpenAI GPT-4 Vision — Analyze screenshots and generate documentation",
          "Chrome Extension APIs — Screen recording, DOM event capture",
          "Notion API — Embed/export integration",
          "Slack API — Notifications and sharing",
          "Resend — Email notifications"
        ]
      },
      "build_vs_buy": [
        {
          "component": "Screen Recording",
          "recommendation": "Build (browser extension)",
          "reasoning": "Core functionality. Chrome extension APIs are well-documented. Capture clicks, scrolls, text inputs. Generate screenshots at each step."
        },
        {
          "component": "AI Documentation",
          "recommendation": "Build (with GPT-4 Vision)",
          "reasoning": "Core differentiator. Send screenshots + event data to GPT-4. Custom prompts for step generation. This is your moat."
        },
        {
          "component": "Rich Text Editor",
          "recommendation": "Buy (Tiptap or Plate)",
          "reasoning": "WYSIWYG editing is complex. Use Tiptap (open source) or Plate. Customize for SOP-specific features."
        },
        {
          "component": "Version Control",
          "recommendation": "Build (on Postgres)",
          "reasoning": "Store versions as JSON diff or full snapshots. Not as complex as it sounds. PostgreSQL handles it well."
        },
        {
          "component": "File Storage",
          "recommendation": "Buy (Cloudflare R2)",
          "reasoning": "Screenshots add up. R2 is cheap, fast, and S3-compatible. Don''t build storage infrastructure."
        }
      ],
      "estimated_monthly_cost": {
        "0_50_teams": "$200-400/mo (Vercel, Supabase, ~$150 OpenAI, ~$20 R2)",
        "50_200_teams": "$800-1,800/mo (More AI processing, storage growth, Supabase Pro)",
        "200_1000_teams": "$3,000-8,000/mo (OpenAI at scale is main cost, consider caching)"
      }
    }'
  ],

  '{
    "pricing_model": "Flat team pricing by SOP count (not per-user)",
    "pricing_rationale": "Per-user pricing punishes adoption—companies avoid documenting to save money. Flat pricing encourages everyone to create and use SOPs. Price by SOP count aligns with value delivered and scales with company maturity.",
    "tiers": [
      {
        "name": "Starter",
        "price": "$29/month ($24/mo annual)",
        "target_customer": "Small teams documenting core procedures",
        "features": [
          "Up to 10 SOPs",
          "Unlimited team members (viewers)",
          "3 editors",
          "Browser extension capture",
          "AI documentation generation",
          "Basic version history (30 days)",
          "PDF export",
          "Email support"
        ],
        "limitations": [
          "10 SOPs",
          "3 editors",
          "No training tracking",
          "No desktop app capture"
        ]
      },
      {
        "name": "Team",
        "price": "$79/month ($65/mo annual)",
        "target_customer": "Growing companies standardizing operations",
        "features": [
          "Up to 50 SOPs",
          "Unlimited team members",
          "10 editors",
          "Everything in Starter",
          "Full version history",
          "Training mode",
          "Decision branch support",
          "Notion/Confluence embed",
          "Slack notifications",
          "Priority support"
        ],
        "limitations": [
          "50 SOPs",
          "10 editors",
          "No desktop capture"
        ]
      },
      {
        "name": "Business",
        "price": "$199/month ($165/mo annual)",
        "target_customer": "Established companies with complex operations",
        "features": [
          "Unlimited SOPs",
          "Unlimited team members",
          "Unlimited editors",
          "Everything in Team",
          "Desktop app capture",
          "Training analytics dashboard",
          "SSO (SAML)",
          "API access",
          "Audit log",
          "Dedicated success manager"
        ],
        "limitations": []
      }
    ],
    "free_tier_strategy": "14-day free trial with full Team features. Free plan with 3 SOPs and 1 editor for tiny teams or evaluation. Generous trial because product stickiness is high once SOPs are created.",
    "annual_discount": "17% discount (2 months free) for annual plans",
    "pricing_psychology": "Frame against cost of tribal knowledge loss. ''One departing employee takes $50K of knowledge with them. SOPBuilder is $79/month.'' Also: ''Creating one SOP manually takes 2-3 hours. SOPBuilder does it in 10 minutes. Do the math on your ops team''s time.''"
  }',

  ARRAY[
    '{
      "brand_name": "SOPBuilder",
      "tagline": "Record once. Document forever. Train everyone.",
      "brand_personality": [
        "Efficient — Respects everyone''s time",
        "Practical — Built for real operations, not theory",
        "Reliable — Your processes, always documented",
        "Empowering — Makes everyone capable",
        "Modern — AI-powered but not gimmicky"
      ],
      "brand_voice": {
        "tone": "Friendly expert. Like an operations consultant who''s seen how painful undocumented processes are and built the solution everyone needed.",
        "do": [
          "Emphasize time savings",
          "Celebrate knowledge sharing",
          "Acknowledge the pain of documentation",
          "Use plain language (SOP, procedure, steps)",
          "Show before/after transformations"
        ],
        "dont": [
          "Don''t use heavy corporate jargon",
          "Don''t make it sound complicated",
          "Don''t be preachy about documentation",
          "Don''t oversell AI capabilities",
          "Don''t ignore that people hate creating docs"
        ]
      },
      "visual_direction": {
        "color_palette": {
          "primary": "#3B82F6 (Blue) — Professional, trustworthy, clear",
          "secondary": "#1D4ED8 (Dark blue) — Authority, depth",
          "success": "#22C55E (Green) — Complete, trained, documented",
          "warning": "#F59E0B (Amber) — Needs update, in progress",
          "accent": "#8B5CF6 (Purple) — AI-powered features",
          "neutrals": ["#F8FAFC (slate 50)", "#0F172A (slate 900)"]
        },
        "typography": {
          "display": "Inter — Clean, professional, highly readable",
          "body": "Inter — Consistent, works well for documentation"
        },
        "visual_style": "Clean, professional, productivity-focused. Screenshots with annotation overlays are the hero visual. Show the transformation: messy screen recording → beautiful SOP. Use step indicators (1, 2, 3) prominently."
      },
      "messaging": {
        "elevator_pitch_10s": "SOPBuilder records your screen as you work and uses AI to generate professional SOPs automatically—so your tribal knowledge becomes documented processes anyone can follow.",
        "elevator_pitch_30s": "Every company has knowledge that exists only in people''s heads. When they leave, it leaves too. New hires take months to figure things out. SOPBuilder fixes this: just do the task while our extension records, and AI generates step-by-step documentation with screenshots. Version control keeps docs current. Training mode verifies everyone learned.",
        "key_messages": [
          "Record once. Document forever. Train everyone.",
          "Turn 3 hours of writing into 10 minutes of doing.",
          "Tribal knowledge becomes team knowledge.",
          "Documentation that keeps itself up to date.",
          "Every process, captured. Every team member, trained."
        ]
      }
    }',

    '{
      "pre_launch": {
        "4_weeks_before": [
          {"task": "Browser extension MVP (Chrome)", "category": "Product", "critical": true},
          {"task": "AI documentation generation (GPT-4 Vision)", "category": "Product", "critical": true},
          {"task": "Basic SOP editor", "category": "Product", "critical": true},
          {"task": "Landing page with demo video", "category": "Marketing", "critical": true},
          {"task": "Create 5-10 sample SOPs showing different use cases", "category": "Marketing", "critical": true},
          {"task": "Start content on operations/process documentation", "category": "Marketing", "critical": false}
        ],
        "2_weeks_before": [
          {"task": "Version history implemented", "category": "Product", "critical": true},
          {"task": "Team workspace and sharing", "category": "Product", "critical": true},
          {"task": "Beta test with 20-30 operations teams", "category": "Product", "critical": true},
          {"task": "Collect before/after testimonials", "category": "Marketing", "critical": true},
          {"task": "Set up Stripe billing", "category": "Product", "critical": true},
          {"task": "Chrome Web Store listing prepared", "category": "Product", "critical": true}
        ],
        "1_week_before": [
          {"task": "Final polish on extension", "category": "Product", "critical": true},
          {"task": "Publish Chrome extension", "category": "Product", "critical": true},
          {"task": "Prepare Product Hunt assets", "category": "Marketing", "critical": true},
          {"task": "Reach out to operations communities", "category": "Marketing", "critical": false},
          {"task": "Schedule launch content", "category": "Marketing", "critical": true}
        ],
        "day_before": [
          {"task": "Schedule Product Hunt launch", "category": "Marketing", "critical": true},
          {"task": "Pre-write common support responses", "category": "Support", "critical": true},
          {"task": "Test full flow one more time", "category": "Product", "critical": true},
          {"task": "Rest up", "category": "Personal", "critical": true}
        ]
      },
      "launch_day": [
        {"time": "12:01 AM PT", "task": "Product Hunt goes live", "platform": "Product Hunt"},
        {"time": "6:00 AM", "task": "Maker comment with story (knowledge loss pain)", "platform": "Product Hunt"},
        {"time": "7:00 AM", "task": "Twitter thread: ''We lost $50K of tribal knowledge when our ops lead quit''", "platform": "Twitter/X"},
        {"time": "8:00 AM", "task": "LinkedIn post for operations professionals", "platform": "LinkedIn"},
        {"time": "9:00 AM", "task": "Send launch email to waitlist/beta users", "platform": "Email"},
        {"time": "10:00 AM", "task": "Post in operations communities", "platform": "Reddit/Slack"},
        {"time": "12:00 PM", "task": "Demo video on YouTube", "platform": "YouTube"},
        {"time": "All day", "task": "Reply to every PH comment", "platform": "Product Hunt"},
        {"time": "All day", "task": "Monitor extension for bugs", "platform": "Product"},
        {"time": "Evening", "task": "Share day 1 metrics and thank community", "platform": "Twitter/X"}
      ],
      "post_launch": {
        "week_1": [
          "Respond to all feedback quickly",
          "Fix extension issues as reported",
          "Follow up with trial users who haven''t created SOPs",
          "Share user success stories",
          "Publish comparison content (vs Scribe, Tango, manual)"
        ],
        "week_2_4": [
          "Add training mode",
          "Launch Edge extension",
          "Create SEO content on SOP templates and examples",
          "Partner with operations newsletters/podcasts",
          "Build automated onboarding sequence"
        ],
        "month_2_3": [
          "Add desktop app capture",
          "Launch decision branch support",
          "Analyze conversion funnel",
          "A/B test pricing page",
          "Explore partnerships with HR/training platforms"
        ]
      },
      "launch_platforms": {
        "primary": ["Product Hunt", "LinkedIn", "Twitter/X"],
        "secondary": ["Hacker News", "Indie Hackers"],
        "community": [
          "r/Operations",
          "r/smallbusiness",
          "Operations-focused Slack groups",
          "HR/Training communities",
          "COO/Operations leader communities",
          "Process Hacker community"
        ]
      }
    }',

    '{
      "north_star_metric": {
        "metric": "Weekly Active SOPs",
        "definition": "Total SOPs viewed or updated in the past 7 days across all paying customers",
        "target_day_1": "100 SOPs",
        "target_month_1": "500 SOPs",
        "target_month_3": "3,000 SOPs"
      },
      "acquisition_metrics": [
        {
          "metric": "Website visitors",
          "definition": "Unique visitors to marketing site",
          "target": "15K/month by month 3",
          "tool": "Plausible/PostHog"
        },
        {
          "metric": "Extension installs",
          "definition": "Chrome extension installations",
          "target": "3K installs month 1",
          "tool": "Chrome Web Store"
        },
        {
          "metric": "Trial signup rate",
          "definition": "Visitors who start free trial",
          "target": "5-8% (B2B, high intent traffic)",
          "tool": "PostHog"
        }
      ],
      "activation_metrics": [
        {
          "metric": "First SOP created",
          "definition": "% of trial signups who create at least 1 SOP",
          "target": "50%+ (critical activation gate)",
          "tool": "PostHog"
        },
        {
          "metric": "SOP shared",
          "definition": "% of users who share an SOP with a teammate",
          "target": "30%+ (viral loop)",
          "tool": "PostHog"
        },
        {
          "metric": "3+ SOPs created",
          "definition": "% of trials that create 3 or more SOPs",
          "target": "25%+ (indicates habit forming)",
          "tool": "PostHog"
        }
      ],
      "retention_metrics": [
        {
          "metric": "Monthly retention",
          "definition": "% of paying teams active month-over-month",
          "target": "90%+ (SOPs are sticky once created)",
          "tool": "PostHog"
        },
        {
          "metric": "SOPs created per team per month",
          "definition": "Average new SOPs created by active teams",
          "target": "3-5 (shows ongoing use)",
          "tool": "Database query"
        },
        {
          "metric": "Training completions",
          "definition": "% of assigned training that gets completed",
          "target": "60%+ (validates training feature value)",
          "tool": "Database query"
        }
      ],
      "revenue_metrics": [
        {
          "metric": "Trial to paid conversion",
          "definition": "% of trial teams who convert to paid",
          "target": "15-25%",
          "tool": "Stripe + database"
        },
        {
          "metric": "MRR",
          "definition": "Monthly recurring revenue",
          "target": "$15K month 3, $50K month 6",
          "tool": "Stripe"
        },
        {
          "metric": "ARPU",
          "definition": "Average revenue per paying team",
          "target": "$90-110/month (mix of tiers)",
          "tool": "Stripe"
        },
        {
          "metric": "Churn rate",
          "definition": "% of paying teams who cancel monthly",
          "target": "<5% (SOPs create lock-in)",
          "tool": "Stripe"
        }
      ],
      "unit_economics": {
        "target_cac": "$100-200 (content marketing + community focus)",
        "target_ltv": "$2,000+ (20+ months at $100 ARPU)",
        "target_ltv_cac_ratio": "10:1 or better",
        "target_payback_period": "2-3 months"
      }
    }'
  ],

  NOW()
);