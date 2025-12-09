-- StartupStack Seed Data for Supabase
-- Run this after creating the schema to insert your existing data

-- Insert Ideas (public seed data)
INSERT INTO ideas (
  id, user_id, title, one_liner, problem, target_customer, solution, monetization,
  tags, keywords, status, demand_score, demand_band, trend_label, validation_summary,
  validated_at, is_public, is_saved, created_at, updated_at, why_now, revenue_impact,
  market_size, competition_level, category, business_type, price_range
) VALUES (
  'sponsorcalc-001',
  NULL,
  'SponsorCalc',
  'AI-powered rate cards for content creators based on real engagement data',
  'Creators leave money on the table because they don''t know what to charge for sponsorships. They guess rates, get lowballed by brands, or price themselves out of deals. There''s no standardized way to justify pricing, and most creators undercharge by 30-50% compared to their actual value.',
  'Content creators with 10K-500K followers across YouTube, TikTok, Instagram, and podcasts who do 2+ brand deals per month.',
  'Connect social accounts. AI analyzes engagement rates, audience demographics, niche CPMs, and comparable creator rates. Generates professional rate cards with tiered pricing for posts, stories, videos, and bundles. Includes negotiation scripts and industry benchmarks to help creators confidently justify their rates.',
  '$19/month for creators (3 platforms), $49/month for agencies (unlimited creators + white-label reports).',
  ARRAY['ai', 'monetization', 'influencer', 'pricing', 'creator-tools'],
  NULL,
  'validated',
  79,
  'high',
  'rising',
  NULL,
  NULL,
  TRUE,
  FALSE,
  NOW(),
  NOW(),
  'The creator economy has exploded to $250B+ but pricing remains Wild West. New FTC disclosure requirements and platform API access make real engagement data more accessible.',
  'Creators using data-backed rate cards typically increase their sponsorship revenue by 40-60%. A creator earning $2K/month from brand deals could see an additional $800-1,200/month.',
  '$250B+',
  'Low',
  'marketing',
  'b2b',
  'smb'
);

-- Note: User data was test data and not included
-- Add more seed data as needed
