-- Clippie Seed Data (idea_004)
-- AI viral clip generator that finds and formats best moments from long videos

INSERT INTO ideas (
  id, user_id, title, one_liner, problem, target_customer, solution, monetization,
  tags, keywords, status, demand_score, demand_band, trend_label, validation_summary,
  validated_at, is_public, is_saved, created_at, updated_at, why_now, revenue_impact,
  market_size, competition_level, category, business_type, price_range
) VALUES (
  'clippie-004',
  NULL,
  'Clippie',
  'Your best moments, found and formatted',
  'Creators spend 3-5 hours per long-form video scrubbing through footage to find clip-worthy moments. A 2-hour podcast contains maybe 8-12 viral-worthy clips, but finding them manually is tedious and doesn''t scale. Most creators give up—meaning 90% of their best content never reaches short-form audiences.',
  'YouTubers, podcasters, and Twitch streamers with 10K-500K subscribers producing weekly long-form content who want to grow on short-form platforms without hiring editors',
  'Upload your video or connect YouTube/Twitch. AI analyzes the entire recording using speech patterns, sentiment analysis, topic shifts, and engagement predictors to identify high-potential viral moments. Automatically generates vertical clips with perfectly-timed captions, speaker labels, and optional b-roll suggestions. Export directly to TikTok, YouTube Shorts, and Instagram Reels formats.',
  '$29/month (10 hours), $79/month (50 hours), $199/month (200 hours + team). Free tier: 60 minutes/month with watermarked exports.',
  ARRAY['ai', 'content-creation', 'viral-clips', 'creator-tools', 'video-editing', 'automation'],
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
  'Perfect storm: (1) Short-form video is fastest-growing content format—TikTok, Shorts, and Reels have 3B+ daily users, (2) AI video understanding reached quality threshold for automated clipping, (3) Platform algorithms heavily favor consistent short-form posting, (4) Creator burnout is epidemic—automation isn''t luxury, it''s survival.',
  'Creators save 20+ hours monthly and 3x their short-form posting frequency. A creator spending $500/month on editors can replace them while getting better viral moment detection. Average user sees 240% growth in short-form engagement.',
  '$2B video editing and repurposing tools market',
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

-- Insert landing page for Clippie
INSERT INTO landing_pages (idea_id, slug, content, is_published, created_at, updated_at)
VALUES (
  'clippie-004',
  'clippie',
  '{
    "meta": {
      "title": "Clippie — Turn Your Long Videos Into Viral Shorts",
      "description": "AI finds your best moments and creates ready-to-post clips with captions. Upload once, clip forever. Save 4+ hours per video while increasing viral potential.",
      "og_image_concept": "Split screen showing single YouTube video transforming into multiple vertical clips with sparkle effects and virality scores. Bold headline: ''Your Best Moments, Found and Formatted.''"
    },
    "hero": {
      "headline": "Turn your long videos into viral shorts",
      "subheadline": "AI finds your best moments and creates ready-to-post clips with captions. Upload once, clip forever.",
      "cta_primary": {
        "text": "Try Free — 60 Minutes Included",
        "url": "/signup"
      },
      "cta_secondary": {
        "text": "Watch demo (2 min) →",
        "url": "#demo"
      },
      "social_proof_snippet": "Join 12,000+ creators saving 4+ hours per video",
      "hero_visual": {
        "type": "product_screenshot",
        "description": "Split screen: left shows single YouTube video, right shows explosion of vertical clips with captions and virality scores. AI processing animation with sparkle effects."
      }
    }
  }'::jsonb,
  TRUE,
  NOW(),
  NOW()
) ON CONFLICT (slug) DO UPDATE SET
  content = EXCLUDED.content,
  updated_at = NOW();

-- Insert execution plan with Tier 1 deliverable content for Clippie
INSERT INTO execution_plans (idea_id, user_id, elevator_pitch, persona, user_stories, recommended_stack, launch_checklist, created_at)
VALUES (
  'clippie-004',
  NULL,
  '{
    "problem_statement": "Creators spend 3-5 hours per video manually scrubbing footage to find clip-worthy moments. Most creators give up entirely, meaning 90% of their best content never reaches short-form audiences where 3B+ daily users consume content.",
    "solution_summary": "Upload video or connect YouTube/Twitch. AI analyzes speech patterns, sentiment, and engagement predictors to identify viral moments. Automatically generates vertical clips with captions, virality scores, and platform optimization. Export ready-to-post clips for TikTok, YouTube Shorts, Instagram Reels.",
    "target_customer": {
      "primary": "YouTubers, podcasters, Twitch streamers (10K-500K subscribers) producing weekly long-form content who want short-form growth without manual work",
      "secondary": "Video editors and agencies managing multiple creator clients who need to scale clip production",
      "market_size_estimate": {
        "tam": "$25B creator economy tools market",
        "sam": "$2B video editing and repurposing tools",
        "som": "$200M creators actively seeking automated clip solutions"
      }
    },
    "why_now": "Perfect storm: (1) Short-form video fastest-growing format with 3B+ daily users, (2) AI video understanding reached quality threshold for automated clipping, (3) Platform algorithms heavily favor consistent short-form posting, (4) Creator burnout epidemic—automation is survival, not luxury."
  }',

  '{
    "direct_competitors": [
      {
        "name": "Opus Clip",
        "url": "https://opus.pro",
        "positioning": "AI-powered short clip generation from long videos with virality scoring",
        "pricing": "Free tier (60 min/mo), $19/mo Pro (200 min), $49/mo Business (600 min)",
        "strengths": ["Strong viral clip detection algorithm", "Good caption styles", "Fast processing", "Clean UI"],
        "weaknesses": ["Caption customization limited", "No speaker diarization for podcasts", "Clip selection can miss context", "No direct platform publishing"]
      },
      {
        "name": "Munch",
        "url": "https://getmunch.com",
        "positioning": "AI video repurposing with trend analysis",
        "pricing": "$49/mo Pro, $116/mo Enterprise",
        "strengths": ["Trend-aware clip suggestions", "Multi-clip batching", "Good AI detection of key moments"],
        "weaknesses": ["Expensive for indie creators", "Overkill complexity", "Slow processing times", "Limited style customization"]
      },
      {
        "name": "Vidyo.ai",
        "url": "https://vidyo.ai",
        "positioning": "AI short clip maker with templates",
        "pricing": "Free tier, $29/mo Creator, $49/mo Pro",
        "strengths": ["Good template variety", "Fast scene detection", "Social media calendar integration"],
        "weaknesses": ["Generic templates look samey", "AI clip selection inconsistent", "Limited podcast support", "No virality prediction"]
      },
      {
        "name": "Descript",
        "url": "https://descript.com",
        "positioning": "All-in-one video/audio editing with AI features",
        "pricing": "Free tier, $12/mo Creator, $24/mo Pro",
        "strengths": ["Excellent transcription", "Full editing suite", "Overdub feature", "Industry standard"],
        "weaknesses": ["Not focused on auto-clipping", "Steep learning curve", "Manual work still required", "No virality prediction"]
      }
    ],
    "indirect_competitors": [
      "Hiring a video editor ($500-2,000/month for dedicated clip work)",
      "Fiverr editors ($10-50 per clip, inconsistent quality)",
      "Manual clipping with CapCut/Premiere (free but 2-4 hours per video)",
      "Ignoring short-form entirely and accepting limited reach (most common)",
      "VA services that scrub videos and timestamp moments (slow, expensive)"
    ],
    "market_gaps": [
      "Podcast-specific features are weak everywhere—multi-speaker clips need better handling",
      "Virality prediction is either missing or poorly explained (black box scores)",
      "No one does clip series/narratives—tools only find isolated moments",
      "B-roll and visual enhancement suggestions are absent",
      "Batch processing for content libraries barely exists",
      "No learning from creator''s past performance—every video starts fresh",
      "Twitch/streaming integration is afterthought—live content has different patterns"
    ]
  }',

  ARRAY[
    '{
      "positioning_statement": "For long-form creators who want to dominate short-form without the grind, Clippie is an AI clip engine that finds your most viral moments and turns them into ready-to-post shorts. Unlike basic clip tools that give you random timestamps, we analyze engagement patterns, predict virality, and output polished clips with captions—not rough cuts that need editing.",
      "unique_value_proposition": "Your best moments, found and formatted. Upload once, clip forever.",
      "key_differentiators": [
        "Virality-first detection: AI trained on what actually goes viral, not just ''interesting'' moments",
        "Podcast-native: Multi-speaker diarization, dynamic layouts for conversation clips",
        "Learn and improve: System learns from your channel''s performance data over time",
        "Polished output: Captions, animations, and formatting included—not raw cuts",
        "Batch processing: Process entire video libraries, not just one video at a time"
      ],
      "category": "AI video clipping (creating subcategory: ''Viral Moment Extraction'')"
    }',

    '{
      "core_features": [
        {
          "feature": "Video Upload & YouTube Connect",
          "description": "Upload MP4/MOV files directly or paste YouTube URL for automatic import. Support videos up to 4 hours. Queue multiple videos.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "AI Moment Detection",
          "description": "Analyze video using speech patterns, sentiment peaks, topic shifts, and audio energy to identify 8-15 clip-worthy moments per hour of content.",
          "priority": "P0",
          "effort": "Large"
        },
        {
          "feature": "Virality Score",
          "description": "Score each detected clip 1-100 based on hook strength, emotional arc, completion likelihood, and share potential. Explain why each clip scored high.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Auto-Clip Generation",
          "description": "Generate 15-60 second vertical clips (9:16) from detected moments. Intelligent start/end trimming to preserve context and punchlines.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Auto-Captions",
          "description": "Generate word-by-word animated captions with customizable styles (bold keywords, color highlights, emoji). Multiple font/animation presets.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Speaker Detection",
          "description": "Identify and label multiple speakers for podcasts/interviews. Support split-screen and dynamic focus layouts.",
          "priority": "P1",
          "effort": "Medium"
        },
        {
          "feature": "Clip Editor",
          "description": "Fine-tune auto-generated clips: adjust start/end, edit captions, change aspect ratio, add simple text overlays.",
          "priority": "P1",
          "effort": "Medium"
        },
        {
          "feature": "Export Presets",
          "description": "One-click export optimized for TikTok, YouTube Shorts, Instagram Reels, and Twitter. Correct dimensions, bitrates, and formats.",
          "priority": "P0",
          "effort": "Small"
        },
        {
          "feature": "Clip Dashboard",
          "description": "View all generated clips per video, sort by virality score, bulk export, and track which clips you''ve posted.",
          "priority": "P0",
          "effort": "Medium"
        },
        {
          "feature": "Brand Templates",
          "description": "Save and reuse caption styles, colors, fonts, and intro/outro elements across all clips.",
          "priority": "P1",
          "effort": "Small"
        }
      ],
      "post_mvp_features": [
        "Twitch VOD integration with highlight detection",
        "Direct posting to TikTok, YouTube, Instagram",
        "B-roll suggestions from stock libraries",
        "Performance analytics per clip",
        "AI learning from your viral clips to improve detection",
        "Clip series builder (multi-part stories)",
        "Team workspaces with approval workflows",
        "API for agencies and custom integrations",
        "Bulk library processing for back catalogs",
        "Hook/CTA overlay templates"
      ],
      "out_of_scope": [
        "Full video editing (use Premiere/DaVinci/CapCut)",
        "Podcast hosting (use Riverside/Spotify)",
        "Long-form video creation (this is repurposing, not creation)",
        "Social media scheduling (use Buffer/Later)",
        "Written content repurposing (different product category)"
      ],
      "mvp_timeline": "8-10 weeks for solo developer, 5-6 weeks for small team"
    }',

    '{
      "recommended_stack": {
        "frontend": "Next.js 14 (App Router) — Modern React, great for media-heavy apps, edge rendering for video previews",
        "backend": "Next.js API Routes + Supabase Edge Functions — Simple architecture, serverless scales with demand",
        "database": "Supabase (Postgres) — Auth, storage, database. Row-level security for multi-tenant",
        "auth": "Supabase Auth — Email/password + Google OAuth for creator accounts",
        "payments": "Stripe — Usage-based billing, subscription management, metered billing support",
        "hosting": "Vercel (frontend) + Railway/Render (video processing workers)",
        "ai_ml": "OpenAI Whisper (transcription) + GPT-4 (moment analysis) + Custom ML (virality scoring)",
        "video_processing": "FFmpeg via Remotion or Creatomate for clip generation, Cloudflare Stream for delivery",
        "file_storage": "Cloudflare R2 or AWS S3 — Cost-effective for large video files",
        "key_integrations": [
          "YouTube Data API — Import videos directly from channels",
          "OpenAI Whisper — Accurate transcription with word-level timestamps",
          "OpenAI GPT-4 — Analyze transcripts for viral moments",
          "Remotion — Programmatic video generation for clips",
          "Cloudflare Stream — Video delivery and adaptive bitrate"
        ]
      },
      "build_vs_buy": [
        {
          "component": "Transcription",
          "recommendation": "Buy (OpenAI Whisper API or AssemblyAI)",
          "reasoning": "Whisper is incredibly accurate and cheap ($0.006/min). AssemblyAI offers speaker diarization. Don''t build this."
        },
        {
          "component": "Moment Detection AI",
          "recommendation": "Build (Core IP)",
          "reasoning": "This is your competitive moat. Use GPT-4 for initial analysis but build custom models trained on viral clip data over time."
        },
        {
          "component": "Video Processing",
          "recommendation": "Buy (FFmpeg + Remotion/Creatomate)",
          "reasoning": "FFmpeg is the standard. Remotion lets you programmatically create videos with React. Don''t reinvent video encoding."
        },
        {
          "component": "Caption Generation",
          "recommendation": "Build (on top of transcription)",
          "reasoning": "Caption styling is a differentiator. Build custom animation system using Remotion. Word-level timing from Whisper."
        },
        {
          "component": "Auth & Billing",
          "recommendation": "Buy (Supabase + Stripe)",
          "reasoning": "Solved problems. Supabase handles auth, Stripe handles subscriptions. Focus on core product."
        }
      ],
      "estimated_monthly_cost": {
        "0_100_users": "$100-300/mo (Vercel free, Supabase free, ~$50 OpenAI, ~$100 video processing, ~$50 storage)",
        "100_1000_users": "$1,000-3,000/mo (Vercel Pro, Supabase Pro, ~$500 OpenAI, ~$1,000 video processing)",
        "1000_10000_users": "$8,000-20,000/mo (Video processing is the main cost—consider GPU instances)"
      }
    }'
  ],

  '{
    "pricing_model": "Usage-based with tier floors",
    "pricing_rationale": "Video processing has real costs per minute. Creators understand paying for what they use. Free tier lets them experience the magic. Usage caps prevent runaway costs while allowing power users to scale.",
    "tiers": [
      {
        "name": "Free",
        "price": "$0",
        "target_customer": "Trying it out, occasional creators",
        "features": [
          "60 minutes of video/month",
          "Up to 5 clips per video",
          "Basic caption styles",
          "720p export",
          "Clippie watermark"
        ],
        "limitations": [
          "60 min/month cap",
          "5 clips per video max",
          "Watermarked exports",
          "No speaker diarization",
          "Standard processing queue"
        ]
      },
      {
        "name": "Creator",
        "price": "$29/month ($24/mo annual)",
        "target_customer": "Weekly content creators building short-form presence",
        "features": [
          "10 hours of video/month",
          "Unlimited clips per video",
          "All caption styles",
          "1080p export",
          "No watermark",
          "Speaker diarization",
          "Priority processing",
          "Brand templates (3 saved)"
        ],
        "limitations": [
          "10 hours/month",
          "Single user",
          "No API access"
        ]
      },
      {
        "name": "Pro",
        "price": "$79/month ($66/mo annual)",
        "target_customer": "Daily creators, podcasters with multiple shows",
        "features": [
          "50 hours of video/month",
          "Everything in Creator",
          "4K export",
          "Bulk video queue",
          "Unlimited brand templates",
          "Analytics dashboard",
          "Twitch VOD integration"
        ],
        "limitations": [
          "50 hours/month",
          "Single user"
        ]
      },
      {
        "name": "Agency",
        "price": "$199/month ($166/mo annual)",
        "target_customer": "Video editors and agencies managing multiple creators",
        "features": [
          "200 hours of video/month",
          "Everything in Pro",
          "5 team seats",
          "Client workspaces",
          "White-label exports",
          "API access",
          "Priority support",
          "Custom integrations"
        ],
        "limitations": []
      }
    ],
    "free_tier_strategy": "Free tier with watermark creates organic marketing. 60 minutes lets creators process ~2 videos and see value. Watermark drives brand awareness. 5 clips per video is enough to demonstrate quality but not enough to fully replace paid.",
    "annual_discount": "17% discount (2 months free) for annual plans",
    "pricing_psychology": "Creator at $29 is the anchor—same as competitors like Opus Clip. Pro at $79 captures power users who process lots of content. Agency at $199 is self-selection for businesses. Usage-based feels fair to creators."
  }',

  ARRAY[
    '{
      "brand_name": "Clippie",
      "tagline": "Your best moments, found and formatted.",
      "brand_personality": [
        "Fast — Speed is a feature. Creators are impatient.",
        "Clever — Smart AI that actually understands content",
        "Playful — Clips are fun content, the tool should feel fun",
        "Reliable — Works every time, no surprises",
        "Creator-first — Built by creators, for creators"
      ],
      "brand_voice": {
        "tone": "Energetic but not manic. Confident but not cocky. Like a talented friend who loves helping you succeed.",
        "do": [
          "Use creator language (clips, shorts, viral, algorithm)",
          "Celebrate their wins and content",
          "Be specific about time savings",
          "Use active, punchy sentences",
          "Show personality—puns okay in moderation"
        ],
        "dont": [
          "Don''t be corporate or stiff",
          "Don''t overpromise ''guaranteed viral''",
          "Don''t talk down to creators",
          "Don''t use enterprise jargon",
          "Don''t be cringey with internet slang"
        ]
      },
      "visual_direction": {
        "color_palette": {
          "primary": "#8B5CF6 (Violet) — Stands out, creative, modern. Not the typical blue SaaS",
          "secondary": "#1E1B4B (Dark purple) — Depth for dark mode, premium feel",
          "accent": "#FBBF24 (Amber/Gold) — Energy, highlights, success states",
          "success": "#10B981 (Emerald) — Completed clips, positive actions",
          "neutrals": ["#FAFAF9 (warm white)", "#18181B (near-black)"]
        },
        "typography": {
          "display": "Clash Display or Space Grotesk — Bold, modern, stands out",
          "body": "Inter — Clean, readable, professional"
        },
        "visual_style": "Bold and energetic with creative flair. Dark mode by default (creators work at night). Video-forward UI—show clips prominently. Micro-animations for delight. Progress indicators for processing."
      },
      "messaging": {
        "elevator_pitch_10s": "Clippie finds your most viral moments and turns them into ready-to-post shorts—automatically.",
        "elevator_pitch_30s": "You''ve got hours of great content buried in your long-form videos. Clippie''s AI watches your videos, finds the moments that''ll go viral, and generates polished clips with captions. No more scrubbing through footage. Upload, wait 5 minutes, get 10+ clips ready to post.",
        "key_messages": [
          "Stop scrubbing. Start posting.",
          "Your back catalog is a goldmine.",
          "10 hours of footage. 10 viral clips. 10 minutes.",
          "AI that actually understands what goes viral.",
          "Built for creators, not enterprises."
        ]
      }
    }',

    '{
      "hero": {
        "headline": "Turn your long videos into viral shorts",
        "subheadline": "AI finds your best moments and creates ready-to-post clips with captions. Upload once, clip forever.",
        "cta_primary": {
          "text": "Try Free — 60 Minutes Included",
          "url": "/signup"
        },
        "cta_secondary": {
          "text": "Watch demo (2 min) →",
          "url": "#how-it-works"
        },
        "social_proof_snippet": "Trusted by 12,000+ creators • 2M+ pieces of content generated",
        "hero_visual": {
          "type": "product_screenshot",
          "description": "Split screen: left shows a single YouTube video thumbnail, right shows an explosion of content pieces (tweet, carousel, TikTok, newsletter) radiating out. Animated on scroll."
        }
      },
      "problem_section": {
        "section_id": "problem",
        "eyebrow": "The Creator Struggle",
        "headline": "Your best content is trapped in hour-long videos",
        "description": "Every podcast and stream has 10+ viral moments. But who has 4 hours to find them? Those views are going to creators who clip.",
        "pain_points": [
          {
            "icon": "clock",
            "title": "You''re leaving views on the table",
            "description": "Every podcast and stream has 10+ viral moments. But who has 4 hours to find them? Those views are going to creators who clip."
          },
          {
            "icon": "trending-down",
            "title": "Manual clipping doesn''t scale",
            "description": "You tried scrubbing through footage. It''s mind-numbing. You hire an editor for $500/month. They quit. You''re back to square one."
          },
          {
            "icon": "zap",
            "title": "Short-form is non-negotiable now",
            "description": "TikTok, Shorts, Reels—3 billion daily users. If you''re not there, you''re invisible to half your potential audience."
          },
          {
            "icon": "skull",
            "title": "Content dies after upload",
            "description": "Your best insights get buried in long videos instead of reaching new audiences as clips."
          }
        ],
        "stat_callout": {
          "number": "90%",
          "label": "of content value is left untapped by creators who don''t clip",
          "source": "Creator Economy Report 2024"
        }
      },
      "solution_section": {
        "section_id": "solution",
        "eyebrow": "AI-Powered Viral Detection",
        "headline": "AI that watches so you don''t have to",
        "description": "Clippie analyzes your entire video for viral-worthy moments. Emotional peaks, perfect soundbites, visual hooks—then creates polished clips with captions.",
        "features": [
          {
            "icon": "sparkles",
            "title": "Smart Moment Detection",
            "description": "AI analyzes your entire video for viral-worthy moments. Emotional peaks, perfect soundbites, visual hooks."
          },
          {
            "icon": "fire",
            "title": "Virality Scoring",
            "description": "Every clip gets a 1-100 score with explanations. Know which clips to post first."
          },
          {
            "icon": "type",
            "title": "Animated Captions",
            "description": "Word-by-word captions that pop. Bold keywords, color highlights, emoji reactions."
          },
          {
            "icon": "users",
            "title": "Speaker Detection",
            "description": "Perfect for podcasts. Automatically labels speakers and creates dynamic layouts."
          },
          {
            "icon": "download",
            "title": "One-Click Export",
            "description": "TikTok, YouTube Shorts, Instagram Reels. Right format, right dimensions, every time."
          },
          {
            "icon": "palette",
            "title": "Brand Templates",
            "description": "Save your style. Consistent look across every clip without starting from scratch."
          }
        ],
        "visual": {
          "type": "demo_video",
          "description": "60-second demo showing upload → AI processing → dashboard with all content ready"
        }
      },
      "how_it_works": {
        "section_id": "how-it-works",
        "eyebrow": "Simple Process",
        "headline": "Three steps to endless clips",
        "steps": [
          {
            "number": 1,
            "title": "Upload or connect",
            "description": "Drop in a video file or paste a YouTube link. We handle everything from 5-minute vlogs to 4-hour streams.",
            "visual_description": "Upload interface with drag-drop animation"
          },
          {
            "number": 2,
            "title": "AI finds the gold",
            "description": "In minutes, our AI identifies every viral-worthy moment with timestamps and virality scores.",
            "visual_description": "Processing animation with AI brain analyzing video"
          },
          {
            "number": 3,
            "title": "Export and dominate",
            "description": "Download polished clips with captions or fine-tune in our editor. Post and watch the views roll in.",
            "visual_description": "Dashboard showing all generated content ready to go"
          }
        ]
      },
      "social_proof": {
        "section_id": "proof",
        "eyebrow": "Creator Success",
        "headline": "Creators are posting 10x more shorts",
        "testimonials": [
          {
            "quote": "I went from posting once a week to having clips scheduled for the entire month. My TikTok grew 240% in 60 days.",
            "author": "Jake Martinez",
            "role": "Gaming YouTuber",
            "company": "89K subscribers",
            "avatar_description": "Young male gamer with gaming setup background",
            "result": "240% TikTok growth"
          },
          {
            "quote": "This replaced my $2K/month clip editor. The AI finds moments I would never have thought to clip.",
            "author": "Sarah Kim",
            "role": "Business Podcaster",
            "company": "The Growth Mindset",
            "avatar_description": "Professional female podcaster with microphone",
            "result": "Saved $2K/month"
          },
          {
            "quote": "Finally consistent on all platforms without burning out. Clippie makes it effortless.",
            "author": "Alex Torres",
            "role": "Tech Reviewer",
            "company": "156K subscribers",
            "avatar_description": "Professional creator in tech review setup",
            "result": "10x more short-form content"
          }
        ],
        "stats": [
          {
            "number": "12,000+",
            "label": "Active Creators",
            "context": "and growing daily"
          },
          {
            "number": "500K+",
            "label": "Clips Generated",
            "context": "this month"
          },
          {
            "number": "4.2 hrs",
            "label": "Saved Per Video",
            "context": "average"
          },
          {
            "number": "3x",
            "label": "Faster Growth",
            "context": "on short-form"
          }
        ],
        "logos": {
          "headline": "Works With Your Content",
          "companies": ["YouTube", "TikTok", "Instagram", "Twitter", "Twitch", "Spotify"]
        },
        "trust_badges": [
          {
            "icon": "shield",
            "text": "Your Videos Stay Private"
          },
          {
            "icon": "zap",
            "text": "5-Min Processing"
          },
          {
            "icon": "globe",
            "text": "All Platforms Supported"
          }
        ]
      },
      "pricing": {
        "section_id": "pricing",
        "eyebrow": "Simple Pricing",
        "headline": "Start free. Scale when you''re viral.",
        "subheadline": "60 minutes free. No credit card required.",
        "plans": [
          {
            "name": "Free",
            "price": "$0",
            "price_detail": "forever",
            "description": "Try it out, occasional creators",
            "features": [
              "60 minutes of video/month",
              "Up to 5 clips per video",
              "Basic caption styles",
              "720p export",
              "Clippie watermark"
            ],
            "cta": "Get Started Free",
            "highlighted": false,
            "badge": null
          },
          {
            "name": "Creator",
            "price": "$29",
            "price_detail": "/month",
            "description": "Weekly content creators building short-form presence",
            "features": [
              "10 hours of video/month",
              "Unlimited clips per video",
              "All caption styles",
              "1080p export",
              "No watermark",
              "Speaker diarization",
              "Priority processing"
            ],
            "cta": "Start Free Trial",
            "highlighted": true,
            "badge": "Most Popular"
          },
          {
            "name": "Pro",
            "price": "$79",
            "price_detail": "/month",
            "description": "Daily creators, podcasters with multiple shows",
            "features": [
              "50 hours of video/month",
              "Everything in Creator",
              "4K export",
              "Bulk video queue",
              "Analytics dashboard",
              "Twitch VOD integration"
            ],
            "cta": "Start Free Trial",
            "highlighted": false,
            "badge": null
          },
          {
            "name": "Agency",
            "price": "$199",
            "price_detail": "/month",
            "description": "Video editors and agencies managing multiple creators",
            "features": [
              "200 hours of video/month",
              "Everything in Pro",
              "5 team seats",
              "Client workspaces",
              "White-label exports",
              "API access",
              "Priority support"
            ],
            "cta": "Contact Sales",
            "highlighted": false,
            "badge": "Best for Teams"
          }
        ],
        "guarantee": {
          "headline": "Free 14-Day Trial",
          "description": "Try Clippie risk-free on all paid plans. No credit card required. Cancel anytime."
        },
        "pricing_note": "All plans include unlimited clip exports and storage."
      },
      "faq": {
        "section_id": "faq",
        "headline": "Questions? We''ve Got Answers.",
        "questions": [
          {
            "question": "What video formats do you support?",
            "answer": "MP4, MOV, WebM, and MKV uploads. Plus direct import from YouTube, Twitch VODs, and podcast RSS feeds. If it''s video, we can clip it."
          },
          {
            "question": "How long does processing take?",
            "answer": "About 1-2 minutes per 10 minutes of video. A 1-hour podcast typically processes in 6-10 minutes. You''ll get an email when clips are ready."
          },
          {
            "question": "How many clips do you generate per video?",
            "answer": "Typically 8-15 clips per hour of content, depending on the video. Our AI is selective—we only surface moments with real viral potential."
          },
          {
            "question": "Can I edit the clips after generation?",
            "answer": "Absolutely. Every clip can be fine-tuned: adjust start/end times, edit captions, change styles. The AI gives you a head start, not a straitjacket."
          },
          {
            "question": "What about podcasts with multiple speakers?",
            "answer": "We''ve got you. Speaker diarization automatically labels who''s talking and creates dynamic layouts. Perfect for interview clips."
          },
          {
            "question": "Do you post directly to my accounts?",
            "answer": "Not yet—we''re focused on making the best clips possible first. Export and post through your preferred scheduler, or just upload directly."
          }
        ]
      },
      "final_cta": {
        "section_id": "cta",
        "headline": "Your viral clips are waiting",
        "subheadline": "Upload your first video and see what Clippie finds. 60 minutes free, no credit card.",
        "cta_text": "Start Clipping Free →",
        "trust_element": "✓ No credit card required ✓ 60 minutes included ✓ Cancel anytime"
      },
      "footer": {
        "tagline": "Your best moments, found and formatted.",
        "links": {
          "product": ["Features", "Pricing", "How It Works", "API"],
          "resources": ["Blog", "Help Center", "Creator Guide", "Community"],
          "company": ["About", "Careers", "Press", "Contact"],
          "legal": ["Privacy", "Terms", "Security", "GDPR"]
        },
        "social": ["Twitter", "YouTube", "TikTok", "Discord"],
        "newsletter": {
          "headline": "Creator tips & viral strategies",
          "placeholder": "Your email",
          "cta": "Subscribe"
        }
      }
    }',

    '{
      "pre_launch": {
        "4_weeks_before": [
          {"task": "MVP feature complete with core clipping flow", "category": "Product", "critical": true},
          {"task": "Process 50+ test videos across different content types", "category": "Product", "critical": true},
          {"task": "Landing page live with waitlist", "category": "Marketing", "critical": true},
          {"task": "Set up PostHog for product analytics", "category": "Product", "critical": true},
          {"task": "Create demo video showing full workflow", "category": "Marketing", "critical": true},
          {"task": "Build ''before/after'' comparison content", "category": "Marketing", "critical": false}
        ],
        "2_weeks_before": [
          {"task": "Beta test with 20-30 creators across niches", "category": "Product", "critical": true},
          {"task": "Fix critical bugs and processing edge cases", "category": "Product", "critical": true},
          {"task": "Gather beta testimonials and case studies", "category": "Marketing", "critical": true},
          {"task": "Prepare Product Hunt assets (logo, images, tagline)", "category": "Marketing", "critical": true},
          {"task": "Line up hunter or schedule self-hunt", "category": "Marketing", "critical": false},
          {"task": "Set up Stripe billing and test all tiers", "category": "Product", "critical": true},
          {"task": "Write launch email sequence to waitlist", "category": "Marketing", "critical": true}
        ],
        "1_week_before": [
          {"task": "Final product walkthrough and bug bash", "category": "Product", "critical": true},
          {"task": "Create launch day Twitter/X thread", "category": "Marketing", "critical": true},
          {"task": "Reach out to creator newsletters for coverage", "category": "Marketing", "critical": false},
          {"task": "Prepare Product Hunt first comment and FAQ", "category": "Marketing", "critical": true},
          {"task": "Brief supporters to upvote and comment", "category": "Marketing", "critical": false},
          {"task": "Test full signup → clip → export flow", "category": "Product", "critical": true}
        ],
        "day_before": [
          {"task": "Schedule Product Hunt post for 12:01 AM PT", "category": "Marketing", "critical": true},
          {"task": "Pre-write responses to common questions", "category": "Support", "critical": true},
          {"task": "Clear calendar for launch day engagement", "category": "Personal", "critical": true},
          {"task": "Get good sleep", "category": "Personal", "critical": true}
        ]
      },
      "launch_day": [
        {"time": "12:01 AM PT", "task": "Product Hunt goes live", "platform": "Product Hunt"},
        {"time": "6:00 AM", "task": "Post maker comment with story", "platform": "Product Hunt"},
        {"time": "7:00 AM", "task": "Launch Twitter thread with demo GIF", "platform": "Twitter/X"},
        {"time": "8:00 AM", "task": "Post in creator Discord servers", "platform": "Discord"},
        {"time": "9:00 AM", "task": "Send launch email to waitlist", "platform": "Email"},
        {"time": "10:00 AM", "task": "Post in r/NewTubers, r/podcasting, r/Twitch", "platform": "Reddit"},
        {"time": "All day", "task": "Reply to every PH comment within 30 min", "platform": "Product Hunt"},
        {"time": "All day", "task": "Engage with all social mentions", "platform": "All"},
        {"time": "All day", "task": "Monitor for bugs and processing issues", "platform": "Product"},
        {"time": "Evening", "task": "Post day 1 results and thank you", "platform": "Twitter/X"}
      ],
      "post_launch": {
        "week_1": [
          "Respond to all user feedback within 24 hours",
          "Ship hotfixes for any critical bugs",
          "Follow up with free users who haven''t clipped",
          "Share user success stories (with permission)",
          "Publish ''behind the scenes'' launch thread"
        ],
        "week_2_4": [
          "Implement top 3 most-requested features",
          "Set up automated onboarding email sequence",
          "Create YouTube tutorial content",
          "Reach out to creator tool reviewers",
          "Use Clippie on your own content (dogfooding)"
        ],
        "month_2_3": [
          "Analyze conversion funnel, fix drop-off points",
          "A/B test pricing page and plans",
          "Build SEO content targeting ''video to shorts'' keywords",
          "Explore YouTube creator partnerships",
          "Consider affiliate program for creator referrals"
        ]
      },
      "launch_platforms": {
        "primary": ["Product Hunt", "Twitter/X"],
        "secondary": ["YouTube (creator communities)", "Indie Hackers"],
        "community": [
          "r/NewTubers",
          "r/podcasting",
          "r/Twitch",
          "r/PartneredYoutube",
          "Creator-focused Discord servers",
          "Podcast editor Slack communities",
          "YouTube creator Facebook groups"
        ]
      }
    }',

    '{
      "north_star_metric": {
        "metric": "Clips Exported Weekly",
        "definition": "Total clips downloaded or exported across all users in rolling 7-day window",
        "target_day_1": "500 clips",
        "target_month_1": "10,000 clips",
        "target_month_3": "100,000 clips"
      },
      "acquisition_metrics": [
        {
          "metric": "Website visitors",
          "definition": "Unique visitors to marketing site",
          "target": "20K/month by month 3",
          "tool": "Plausible/PostHog"
        },
        {
          "metric": "Signup rate",
          "definition": "Visitors who create an account",
          "target": "8-12%",
          "tool": "PostHog"
        },
        {
          "metric": "Cost per signup",
          "definition": "Ad spend / signups",
          "target": "<$3 (creator audiences are targeted)",
          "tool": "Ad platforms"
        }
      ],
      "activation_metrics": [
        {
          "metric": "First video processed",
          "definition": "% of signups who upload and process at least 1 video",
          "target": "50%+",
          "tool": "PostHog"
        },
        {
          "metric": "Time to first clip",
          "definition": "Minutes from signup to first clip exported",
          "target": "<15 minutes",
          "tool": "PostHog"
        },
        {
          "metric": "Clips exported per user",
          "definition": "Average clips exported in first session",
          "target": "3+ clips",
          "tool": "PostHog"
        }
      ],
      "retention_metrics": [
        {
          "metric": "Week 1 retention",
          "definition": "% of users who process another video in week 2",
          "target": "35%+",
          "tool": "PostHog"
        },
        {
          "metric": "Monthly retention",
          "definition": "% of active users month-over-month",
          "target": "55%+ (tied to content cadence)",
          "tool": "PostHog"
        },
        {
          "metric": "Videos per user per month",
          "definition": "Average videos processed by paying users",
          "target": "6+ (weekly content + backlog)",
          "tool": "Database query"
        }
      ],
      "revenue_metrics": [
        {
          "metric": "Free to paid conversion",
          "definition": "% of free users who upgrade",
          "target": "8-12% (higher than average due to clear value)",
          "tool": "Stripe + database"
        },
        {
          "metric": "MRR",
          "definition": "Monthly recurring revenue",
          "target": "$10K month 3, $30K month 6",
          "tool": "Stripe"
        },
        {
          "metric": "ARPU",
          "definition": "Average revenue per paying user",
          "target": "$40-50/month",
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
        "target_cac": "$30-60 (paid), $0 (organic/viral)",
        "target_ltv": "$350+ (10+ month retention at $40 ARPU)",
        "target_ltv_cac_ratio": "6:1 or better",
        "target_payback_period": "1.5 months or less"
      }
    }'
  ],

  NOW()
);