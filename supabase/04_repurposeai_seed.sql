-- RepurposeAI Seed Data (idea_052)
-- AI-powered content repurposing for creators

INSERT INTO ideas (
  id, user_id, title, one_liner, problem, target_customer, solution, monetization,
  tags, keywords, status, demand_score, demand_band, trend_label, validation_summary,
  validated_at, is_public, is_saved, created_at, updated_at, why_now, revenue_impact,
  market_size, competition_level, category, business_type, price_range
) VALUES (
  'repurposeai-001',
  NULL,
  'RepurposeAI',
  'Turn one video into a week of content across every platform',
  'Content creators spend 4+ hours creating long-form content that lives on a single platform. Repurposing this content for other platforms (Twitter, LinkedIn, TikTok, newsletters) requires an additional 4-6 hours of manual work—time most creators don''t have.',
  'YouTubers with 10K-500K subscribers, podcasters, and course creators who publish weekly content and want to grow across multiple platforms without burnout.',
  'Upload your YouTube video or podcast. AI analyzes content, identifies key moments, and generates Twitter threads, LinkedIn posts, Instagram carousels, TikTok clips, newsletters, and blog posts—all optimized for each platform in under 10 minutes.',
  '$29/month (5 videos), $79/month (20 videos), $199/month (unlimited + team features). Free 14-day trial, no card required.',
  ARRAY['ai', 'content-creation', 'automation', 'creator-tools', 'video-editing'],
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
  'AI capabilities now sufficient for quality content generation. Creator burnout at all-time high. Multi-platform presence expected by audiences. Manual repurposing barrier prevents solo creators from competing with teams.',
  'Creators save 40+ hours/month and grow 3x faster by maintaining presence everywhere. A creator spending 10 hours/week on content can reclaim 6+ hours while expanding reach.',
  '$12B',
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

-- Insert landing page for RepurposeAI
INSERT INTO landing_pages (idea_id, slug, content, is_published, created_at, updated_at)
VALUES (
  'repurposeai-001',
  'repurposeai',
  '{
    "meta": {
      "title": "RepurposeAI — Turn One Video Into a Week of Content",
      "description": "AI-powered content repurposing for creators. Transform YouTube videos and podcasts into Twitter threads, LinkedIn posts, Instagram carousels, TikToks, and newsletters automatically."
    },
    "hero": {
      "headline": "One Video. A Week of Content.",
      "subheadline": "Upload your YouTube video or podcast. Get Twitter threads, LinkedIn posts, Instagram carousels, TikToks, newsletters, and blog posts—all optimized for each platform."
    }
  }'::jsonb,
  TRUE,
  NOW(),
  NOW()
) ON CONFLICT (slug) DO UPDATE SET
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert execution plan with Tier 1 deliverable content for RepurposeAI
INSERT INTO execution_plans (idea_id, user_id, elevator_pitch, persona, user_stories, recommended_stack, launch_checklist, created_at)
VALUES (
  'repurposeai-001',
  NULL,
  '{
    "problem_statement": "Creators spend 5-10 hours weekly manually reformatting content for each platform. A single 30-minute YouTube video could become 20+ pieces of content, but the editing, reformatting, and optimization time makes it impractical. Most creators either burn out trying to be everywhere or accept limited reach by focusing on one platform.",
    "solution_summary": "Upload a video or paste a YouTube link. AI automatically generates platform-optimized content: Twitter threads, LinkedIn posts, Instagram carousels, email newsletters, blog posts, and quote graphics. Each output follows platform-specific best practices with native hooks, hashtags, and formatting—ready to post or schedule.",
    "target_customer": {
      "primary": "YouTubers and podcasters with 10K-100K subscribers producing weekly long-form content who want to grow on other platforms without hiring a team",
      "secondary": "Course creators, coaches, and B2B content marketers repurposing webinars and educational content",
      "market_size_estimate": {
        "tam": "$15B creator economy tools market",
        "sam": "$800M content repurposing and scheduling tools",
        "som": "$50M serious creators actively seeking repurposing solutions"
      }
    },
    "why_now": "Three converging trends: (1) AI can now understand video context and generate quality written content, (2) Platform algorithms increasingly reward consistent multi-platform presence, (3) Creator burnout is at all-time highs—70% report content creation stress as their #1 challenge."
  }',

  '{
    "direct_competitors": [
      {
        "name": "Opus Clip",
        "url": "https://opus.pro",
        "positioning": "AI-powered short clip generation from long videos",
        "pricing": "Free tier, $19/mo Pro, $49/mo Business",
        "strengths": ["Strong viral clip detection", "Good vertical video output", "Captions built-in"],
        "weaknesses": ["Video-to-video only, no written content", "Limited platform optimization", "No scheduling"]
      },
      {
        "name": "Descript",
        "url": "https://descript.com",
        "positioning": "All-in-one audio/video editing with transcription",
        "pricing": "Free tier, $12/mo Creator, $24/mo Pro",
        "strengths": ["Excellent transcription", "Full editing suite", "Overdub feature"],
        "weaknesses": ["Not focused on repurposing", "Steep learning curve", "Overkill for simple repurposing"]
      },
      {
        "name": "Castmagic",
        "url": "https://castmagic.io",
        "positioning": "AI content from podcasts and audio",
        "pricing": "$29/mo Starter, $99/mo Pro",
        "strengths": ["Podcast-focused features", "Multiple output types", "Good transcription"],
        "weaknesses": ["Audio-focused, video secondary", "Outputs need heavy editing", "Limited visual content"]
      },
      {
        "name": "Vidyo.ai",
        "url": "https://vidyo.ai",
        "positioning": "Short clips from long videos",
        "pricing": "Free tier, $29/mo, $49/mo",
        "strengths": ["AI scene detection", "Template system", "Fast processing"],
        "weaknesses": ["Only video clips", "No written content", "Generic templates"]
      },
      {
        "name": "Munch",
        "url": "https://getmunch.com",
        "positioning": "AI video repurposing for social",
        "pricing": "$49/mo Pro, $116/mo Enterprise",
        "strengths": ["Trend analysis", "Multi-clip generation", "Good AI detection"],
        "weaknesses": ["Expensive", "Video-only", "Limited customization"]
      }
    ],
    "indirect_competitors": [
      "Hiring a VA or content team ($1-3K/month)",
      "Manual repurposing with ChatGPT + Canva (free but 5+ hours/video)",
      "Ignoring other platforms entirely (most common)",
      "Generic AI writing tools (Claude, ChatGPT) without video understanding"
    ],
    "market_gaps": [
      "No tool does video-to-written-content well—they all focus on video-to-video clips",
      "Platform-specific optimization is surface-level (hashtags only, not hooks/structure)",
      "No one connects to actual publishing/scheduling",
      "Visual content (carousels, quote cards) requires separate tools",
      "B2B/LinkedIn content is underserved—most tools optimize for TikTok/Reels"
    ]
  }',

  ARRAY[
    '{
      "positioning_statement": "For content creators who want to be everywhere without burning out, RepurposeAI is a content multiplication platform that transforms one video into a week of platform-perfect posts. Unlike clip generators that only make short videos, we create written content, carousels, and graphics optimized for how each platform actually works.",
      "unique_value_proposition": "One video in, 20+ ready-to-post pieces out—across every format and platform.",
      "key_differentiators": [
        "Written content focus: Threads, posts, newsletters—not just video clips",
        "True platform optimization: Native hooks, structure, and formatting per platform",
        "Visual content included: Carousels and quote graphics, not just text",
        "One-click ready: Outputs are ready to post, not drafts that need editing",
        "Full-funnel content: Top-of-funnel social AND email/blog for SEO and nurture"
      ],
      "category": "Content repurposing automation (creating a new category: Content Multiplication)"
    }',

    '{
      "core_features": [
        {
          "feature": "Video/Audio Upload",
          "description": "Upload MP4/MP3 or paste YouTube/podcast link. Extract transcript with speaker identification.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "AI Content Analysis",
          "description": "Identify key insights, quotable moments, main topics, and content themes from transcript.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Twitter/X Thread Generator",
          "description": "Generate 5-10 tweet threads with hooks, value, and CTAs. Multiple thread options per video.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "LinkedIn Post Generator",
          "description": "Generate LinkedIn-native posts with proper formatting, hooks, and professional tone.",
          "priority": "P0",
          "effort": "Small"
        },
        {
          "feature": "Instagram Carousel Script",
          "description": "Generate carousel slide content (text for each slide) with hook and CTA structure.",
          "priority": "P0",
          "effort": "Small"
        },
        {
          "feature": "Blog Post Draft",
          "description": "Generate SEO-structured blog post with headers, sections, and meta description.",
          "priority": "P1",
          "effort": "Medium"
        },
        {
          "feature": "Email Newsletter Draft",
          "description": "Generate newsletter version with subject line, preview text, and email-native structure.",
          "priority": "P1",
          "effort": "Small"
        },
        {
          "feature": "Quote Graphics",
          "description": "Generate 3-5 quote card designs with key soundbites and simple branded templates.",
          "priority": "P1",
          "effort": "Medium"
        },
        {
          "feature": "Content Dashboard",
          "description": "View all generated content per video, copy/export individually or in bulk.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Basic Customization",
          "description": "Set tone, target audience, and brand voice preferences that apply to all generations.",
          "priority": "P1",
          "effort": "Small"
        }
      ],
      "post_mvp_features": [
        "Direct publishing to platforms (Twitter, LinkedIn, Buffer, etc.)",
        "Visual carousel generator (actual images, not just scripts)",
        "Video clip extraction with auto-captions",
        "Content calendar and scheduling",
        "Team workspaces",
        "Brand voice training from examples",
        "Analytics on which repurposed content performs best",
        "Chrome extension for YouTube",
        "Bulk processing for content libraries"
      ],
      "out_of_scope": [
        "Video editing (use Descript/CapCut)",
        "Full social media management (use Buffer/Hootsuite)",
        "Original content ideation (this is repurposing, not creation)",
        "Live streaming tools",
        "Podcast hosting"
      ],
      "mvp_timeline": "6-8 weeks for solo developer, 4-5 weeks for small team"
    }',

    '{
      "recommended_stack": {
        "frontend": "Next.js 14 (App Router) — Best DX, great for content-heavy apps, easy deployment",
        "backend": "Next.js API Routes + Supabase Edge Functions — Keeps it simple, scales well",
        "database": "Supabase (Postgres) — Auth, storage, and database in one, great free tier",
        "auth": "Supabase Auth — Email/password + OAuth, handles everything",
        "payments": "Stripe — Industry standard, great subscription management",
        "hosting": "Vercel — Seamless Next.js deployment, generous free tier",
        "ai_ml": "OpenAI GPT-4 (content generation) + AssemblyAI or Deepgram (transcription)",
        "file_storage": "Supabase Storage or Cloudflare R2 — For video/audio uploads",
        "key_integrations": [
          "YouTube Data API — Pull videos directly from YouTube",
          "AssemblyAI — Fast, accurate transcription with speaker diarization",
          "OpenAI API — GPT-4 for content generation",
          "Replicate or Together AI — Backup/cheaper inference option"
        ]
      },
      "build_vs_buy": [
        {
          "component": "Transcription",
          "recommendation": "Buy (AssemblyAI)",
          "reasoning": "Transcription is commoditized. AssemblyAI is fast, accurate, cheap ($0.006/min). Building would take months."
        },
        {
          "component": "Content Generation",
          "recommendation": "Buy (OpenAI) + Build (prompts)",
          "reasoning": "Use GPT-4 for generation but invest heavily in prompt engineering—that is your IP."
        },
        {
          "component": "Auth & User Management",
          "recommendation": "Buy (Supabase)",
          "reasoning": "Auth is table stakes. Do not build it."
        },
        {
          "component": "Image Generation for Quote Cards",
          "recommendation": "Build (HTML/CSS to image)",
          "reasoning": "Use html-to-image or Satori. AI image gen is overkill and expensive for simple branded graphics."
        },
        {
          "component": "Video Processing",
          "recommendation": "Buy (Cloud services)",
          "reasoning": "FFmpeg on serverless is painful. Use a service or defer video features to post-MVP."
        }
      ],
      "estimated_monthly_cost": {
        "0_100_users": "$50-150/mo (Vercel free tier, Supabase free tier, ~$50 OpenAI, ~$30 AssemblyAI)",
        "100_1000_users": "$300-800/mo (Vercel Pro, Supabase Pro, ~$400 OpenAI, ~$200 AssemblyAI)",
        "1000_10000_users": "$2,000-5,000/mo (Scale with usage, consider dedicated inference)"
      }
    }'
  ],

  '{
    "pricing_model": "Freemium with usage limits",
    "pricing_rationale": "Creators need to experience the magic before paying. Free tier creates habit and word-of-mouth. Video processing has real costs, so usage limits are necessary.",
    "tiers": [
      {
        "name": "Free",
        "price": "$0",
        "target_customer": "Trying it out, low-volume hobbyist creators",
        "features": [
          "2 videos/month",
          "All content types (threads, posts, carousels, etc.)",
          "Basic templates",
          "Copy/paste export"
        ],
        "limitations": [
          "2 videos/month cap",
          "No brand customization",
          "RepurposeAI watermark on graphics",
          "Standard processing speed"
        ]
      },
      {
        "name": "Creator",
        "price": "$29/month ($24/mo annual)",
        "target_customer": "Regular creators publishing weekly content",
        "features": [
          "10 videos/month",
          "All content types",
          "Brand voice customization",
          "No watermarks",
          "Priority processing",
          "Content history (90 days)"
        ],
        "limitations": [
          "10 videos/month",
          "Single user",
          "No API access"
        ]
      },
      {
        "name": "Pro",
        "price": "$79/month ($66/mo annual)",
        "target_customer": "Full-time creators, agencies, content teams",
        "features": [
          "30 videos/month",
          "Everything in Creator",
          "Team members (3 seats)",
          "Bulk upload",
          "Advanced customization",
          "Content calendar view",
          "Unlimited history"
        ],
        "limitations": [
          "30 videos/month",
          "3 team seats"
        ]
      },
      {
        "name": "Agency",
        "price": "$199/month ($166/mo annual)",
        "target_customer": "Agencies managing multiple creator clients",
        "features": [
          "Unlimited videos",
          "10 team seats",
          "White-label exports",
          "Client workspaces",
          "API access",
          "Priority support"
        ],
        "limitations": []
      }
    ],
    "free_tier_strategy": "Free tier is a growth engine. 2 videos/month is enough to feel the value but not enough to build a workflow around. Watermark on graphics creates organic promotion. Goal: 10% free-to-paid conversion.",
    "annual_discount": "17% discount (2 months free) on annual plans",
    "pricing_psychology": "Creator tier at $29 is the anchor—feels reasonable for a business expense. Pro at $79 uses contrast to make Creator feel cheap while capturing power users. Agency at $199 is for self-selection."
  }',

  ARRAY[
    '{
      "brand_name": "RepurposeAI",
      "tagline": "One video. Everywhere.",
      "brand_personality": [
        "Efficient — Respects creators time, gets to the point",
        "Empowering — Makes you feel like you have a content team",
        "Modern — Clean, current, not stuck in 2015 SaaS design",
        "Approachable — Not intimidating or overly technical",
        "Reliable — It just works, every time"
      ],
      "brand_voice": {
        "tone": "Friendly professional. Like a smart friend who happens to be great at content marketing.",
        "do": [
          "Use you and your — speak directly to the creator",
          "Be specific about benefits (save 5 hours/week not save time)",
          "Use active voice",
          "Keep sentences short",
          "Celebrate their content, not ours"
        ],
        "dont": [
          "Do not use jargon (leverage, synergy, ecosystem)",
          "Do not be overly casual or use excessive emojis",
          "Do not talk down to creators—they are experts at what they do",
          "Do not overpromise (viral, guaranteed)",
          "Do not sound like every other AI tool"
        ]
      },
      "visual_direction": {
        "color_palette": {
          "primary": "#6366F1 (Indigo) — Modern, creative, stands out from sea of blue SaaS",
          "secondary": "#1E1B4B (Dark indigo) — Depth, sophistication for dark modes and headers",
          "accent": "#F59E0B (Amber) — Energy, highlights, CTAs, warmth",
          "neutrals": ["#F8FAFC (near-white)", "#0F172A (near-black)"]
        },
        "typography": {
          "display": "Cal Sans or DM Sans — Modern, friendly, distinctive headlines",
          "body": "Inter — Clean, readable, professional body text"
        },
        "visual_style": "Modern minimal with creative energy. Clean layouts but not sterile. Subtle gradients okay. Show content examples prominently. Dark mode native."
      },
      "messaging": {
        "elevator_pitch_10s": "RepurposeAI turns one video into a week of content for every platform—automatically.",
        "elevator_pitch_30s": "Creators spend 10+ hours repurposing content manually. RepurposeAI lets you upload a video and instantly get Twitter threads, LinkedIn posts, Instagram carousels, newsletter drafts, and more—all optimized for each platform. One video in, 20 pieces out.",
        "key_messages": [
          "Stop choosing between platforms. Be everywhere.",
          "Your content deserves more than one upload.",
          "10 hours of work in 10 minutes.",
          "Same message. Native to every platform.",
          "Built for creators, not marketers."
        ]
      }
    }',

    '{
      "hero": {
        "headline": "Turn one video into a week of content",
        "subheadline": "Upload your video. Get Twitter threads, LinkedIn posts, Instagram carousels, newsletter drafts, and more—all optimized for each platform.",
        "cta_primary": "Try Free — No Card Required",
        "cta_secondary": "See it in action →"
      },
      "problem_section": {
        "headline": "Great content deserves better than one upload",
        "pain_points": [
          {
            "pain": "You are stuck on one platform",
            "detail": "Your YouTube video could reach 10x more people on Twitter, LinkedIn, and Instagram. But who has time to reformat everything?"
          },
          {
            "pain": "Repurposing takes forever",
            "detail": "Watching back, pulling quotes, writing threads, designing carousels—a 30-minute video becomes a 5-hour repurposing marathon."
          },
          {
            "pain": "Copy-paste does not work",
            "detail": "What works on YouTube dies on Twitter. Each platform has different hooks, formats, and best practices. Generic cross-posting gets ignored."
          }
        ]
      },
      "solution_section": {
        "headline": "One video in. 20+ pieces out.",
        "features": [
          {
            "title": "Twitter Threads",
            "description": "Engaging threads with hooks that stop the scroll. Multiple variations per video.",
            "icon_suggestion": "Twitter/message icon"
          },
          {
            "title": "LinkedIn Posts",
            "description": "Professional posts with the formatting and tone that performs on LinkedIn.",
            "icon_suggestion": "Briefcase/LinkedIn icon"
          },
          {
            "title": "Instagram Carousels",
            "description": "Slide-by-slide content ready to drop into your favorite design tool.",
            "icon_suggestion": "Grid/carousel icon"
          },
          {
            "title": "Email Newsletters",
            "description": "Newsletter drafts with subject lines that get opened.",
            "icon_suggestion": "Mail icon"
          },
          {
            "title": "Blog Posts",
            "description": "SEO-optimized articles with headers and structure.",
            "icon_suggestion": "Document icon"
          },
          {
            "title": "Quote Graphics",
            "description": "Shareable quote cards with your best soundbites.",
            "icon_suggestion": "Quote icon"
          }
        ]
      },
      "how_it_works": {
        "headline": "Three clicks to content everywhere",
        "steps": [
          {
            "step": 1,
            "title": "Upload or paste",
            "description": "Drop in a video file or paste a YouTube link. We handle the rest."
          },
          {
            "step": 2,
            "title": "AI does the work",
            "description": "Our AI watches your video, identifies key moments, and generates platform-native content."
          },
          {
            "step": 3,
            "title": "Copy, tweak, post",
            "description": "Review your content, make any tweaks, and post. That is it."
          }
        ]
      },
      "social_proof": {
        "headline": "Creators are saving 10+ hours every week",
        "testimonial_placeholders": [
          "YouTuber testimonial about time saved",
          "Podcaster testimonial about growing other platforms",
          "Coach/consultant testimonial about content ROI"
        ],
        "stats_to_display": [
          "XX hours saved per creator per month",
          "XX,XXX pieces of content generated",
          "XX platforms supported"
        ]
      },
      "pricing_section": {
        "headline": "Start free. Upgrade when you are ready.",
        "subheadline": "No credit card required. Cancel anytime."
      },
      "faq": [
        {
          "question": "What video formats do you support?",
          "answer": "MP4, MOV, and WebM uploads, plus direct YouTube and podcast RSS links. Most formats work—if yours does not, we will add it."
        },
        {
          "question": "How long does it take to process a video?",
          "answer": "Most videos under 30 minutes process in 2-3 minutes. Longer videos take proportionally longer. You will get an email when it is ready."
        },
        {
          "question": "Can I customize the tone and style?",
          "answer": "Yes! Set your brand voice, preferred tone, and target audience. The AI adapts to match your style across all outputs."
        },
        {
          "question": "What if I do not like the output?",
          "answer": "Regenerate with one click. You can also edit everything directly before copying. The output is a starting point, not a straitjacket."
        },
        {
          "question": "Do you post directly to my accounts?",
          "answer": "Not yet—we are focused on getting the content perfect first. Direct publishing is on the roadmap. For now, it is copy-paste or download."
        },
        {
          "question": "Is there a free trial?",
          "answer": "Better—there is a free plan. Process 2 videos/month for free, forever. No credit card needed."
        }
      ],
      "final_cta": {
        "headline": "Your next video could be 20 pieces of content",
        "subheadline": "Join thousands of creators who stopped choosing between platforms.",
        "cta": "Start Repurposing Free"
      },
      "meta": {
        "page_title": "RepurposeAI — Turn One Video Into a Week of Content",
        "meta_description": "Upload a video, get Twitter threads, LinkedIn posts, Instagram carousels, newsletters, and more. AI-powered content repurposing for creators."
      }
    }',

    '{
      "pre_launch": {
        "4_weeks_before": [
          {"task": "MVP feature complete and tested", "category": "Product", "critical": true},
          {"task": "Landing page live with waitlist", "category": "Marketing", "critical": true},
          {"task": "Set up analytics (Plausible/PostHog)", "category": "Product", "critical": true},
          {"task": "Create demo video showing the product", "category": "Marketing", "critical": true},
          {"task": "Draft launch tweets/posts", "category": "Marketing", "critical": false},
          {"task": "Set up customer support (email/Intercom)", "category": "Support", "critical": true}
        ],
        "2_weeks_before": [
          {"task": "Beta test with 10-20 creators", "category": "Product", "critical": true},
          {"task": "Fix critical bugs from beta", "category": "Product", "critical": true},
          {"task": "Prepare Product Hunt assets", "category": "Marketing", "critical": true},
          {"task": "Line up hunter if using one", "category": "Marketing", "critical": false},
          {"task": "Create first comment for Product Hunt", "category": "Marketing", "critical": true},
          {"task": "Set up Stripe billing and test", "category": "Product", "critical": true},
          {"task": "Write launch email to waitlist", "category": "Marketing", "critical": true}
        ],
        "1_week_before": [
          {"task": "Final product walkthrough", "category": "Product", "critical": true},
          {"task": "Schedule all launch day posts", "category": "Marketing", "critical": true},
          {"task": "Brief any supporters to upvote/comment", "category": "Marketing", "critical": false},
          {"task": "Prepare responses to common questions", "category": "Support", "critical": true},
          {"task": "Test full signup and payment flow", "category": "Product", "critical": true}
        ],
        "day_before": [
          {"task": "Pre-schedule Product Hunt post (if allowed)", "category": "Marketing", "critical": true},
          {"task": "Get good sleep", "category": "Personal", "critical": true},
          {"task": "Clear calendar for launch day", "category": "Personal", "critical": true}
        ]
      },
      "launch_day": [
        {"time": "12:00 AM", "task": "Product Hunt goes live", "platform": "Product Hunt"},
        {"time": "6:00 AM", "task": "Post first comment with story", "platform": "Product Hunt"},
        {"time": "7:00 AM", "task": "Tweet announcement thread", "platform": "Twitter"},
        {"time": "8:00 AM", "task": "LinkedIn launch post", "platform": "LinkedIn"},
        {"time": "9:00 AM", "task": "Send waitlist launch email", "platform": "Email"},
        {"time": "10:00 AM", "task": "Post in relevant communities", "platform": "Reddit/Discord/Slack"},
        {"time": "All day", "task": "Reply to every PH comment", "platform": "Product Hunt"},
        {"time": "All day", "task": "Engage with social mentions", "platform": "Twitter/LinkedIn"},
        {"time": "All day", "task": "Monitor for bugs/issues", "platform": "Product"},
        {"time": "Evening", "task": "Thank you post with day 1 results", "platform": "Twitter"}
      ],
      "post_launch": {
        "week_1": [
          "Respond to all user feedback",
          "Ship quick fixes for any reported issues",
          "Follow up with new signups who have not converted",
          "Share user success stories",
          "Publish lessons from launch thread"
        ],
        "week_2_4": [
          "Implement top 3 feature requests",
          "Set up automated onboarding emails",
          "Create tutorials/help content",
          "Start content marketing (use your own tool!)",
          "Reach out to creator newsletters for coverage"
        ],
        "month_2_3": [
          "Analyze conversion funnel, optimize weak spots",
          "A/B test pricing page",
          "Build out SEO content",
          "Explore partnerships (podcasts, YouTube channels)",
          "Consider affiliate program"
        ]
      },
      "launch_platforms": {
        "primary": ["Product Hunt", "Twitter"],
        "secondary": ["LinkedIn", "Indie Hackers"],
        "community": [
          "r/content_marketing",
          "r/youtube",
          "Creator-focused Discord servers",
          "Podcast communities",
          "LinkedIn creator groups"
        ]
      }
    }',

    '{
      "north_star_metric": {
        "metric": "Weekly Active Content Creators (WACC)",
        "definition": "Unique users who generated content from at least 1 video in the past 7 days",
        "target_day_1": "50 WACC",
        "target_month_1": "200 WACC",
        "target_month_3": "1,000 WACC"
      },
      "acquisition_metrics": [
        {
          "metric": "Website visitors",
          "definition": "Unique visitors to marketing site",
          "target": "10K/month by month 3",
          "tool": "Plausible/PostHog"
        },
        {
          "metric": "Signup rate",
          "definition": "Visitors who create an account",
          "target": "5-10%",
          "tool": "PostHog"
        },
        {
          "metric": "Cost per signup",
          "definition": "Ad spend / signups (when running ads)",
          "target": "<$5",
          "tool": "Ad platforms + attribution"
        }
      ],
      "activation_metrics": [
        {
          "metric": "First video processed",
          "definition": "% of signups who process at least 1 video",
          "target": "60%+",
          "tool": "PostHog"
        },
        {
          "metric": "Time to first video",
          "definition": "Hours from signup to first video processed",
          "target": "<24 hours",
          "tool": "PostHog"
        },
        {
          "metric": "Content exported",
          "definition": "% of users who copy/export at least 1 piece of content",
          "target": "80% of video processors",
          "tool": "PostHog"
        }
      ],
      "retention_metrics": [
        {
          "metric": "Week 1 retention",
          "definition": "% of users who return in week 2",
          "target": "40%+",
          "tool": "PostHog"
        },
        {
          "metric": "Monthly retention",
          "definition": "% of users active month-over-month",
          "target": "60%+",
          "tool": "PostHog"
        },
        {
          "metric": "Videos per user per month",
          "definition": "Average videos processed by active users",
          "target": "4+ (weekly content)",
          "tool": "Database query"
        }
      ],
      "revenue_metrics": [
        {
          "metric": "Free to paid conversion",
          "definition": "% of free users who upgrade",
          "target": "5-10%",
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
          "definition": "Average revenue per user",
          "target": "$35-45/month",
          "tool": "Stripe"
        },
        {
          "metric": "Churn rate",
          "definition": "% of paying users who cancel monthly",
          "target": "<5%",
          "tool": "Stripe"
        }
      ],
      "unit_economics": {
        "target_cac": "$50-100 (paid), $0 (organic)",
        "target_ltv": "$400+ (12+ month retention at $35 ARPU)",
        "target_ltv_cac_ratio": "4:1 or better",
        "target_payback_period": "2 months or less"
      }
    }'
  ],

  NOW()
);