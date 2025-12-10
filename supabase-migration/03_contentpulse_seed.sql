-- ContentPulse Seed Data (idea_052)
-- Real-time content analytics showing revenue attribution

INSERT INTO ideas (
  id, user_id, title, one_liner, problem, target_customer, solution, monetization,
  tags, keywords, status, demand_score, demand_band, trend_label, validation_summary,
  validated_at, is_public, is_saved, created_at, updated_at, why_now, revenue_impact,
  market_size, competition_level, category, business_type, price_range
) VALUES (
  'contentpulse-001',
  NULL,
  'ContentPulse',
  'Real-time content analytics that shows what''s actually driving revenue across all your platforms',
  'Creators post across 5+ platforms but have no unified view of what content drives real business results. Platform analytics show vanity metrics, not revenue. They waste time creating content that gets views but doesn''t convert, while their money-making content patterns go unnoticed.',
  'Content creators, coaches, and course creators with $10K+ monthly revenue who post on multiple platforms and sell their own products/services.',
  'Connect all your platforms and payment processors. AI analyzes which content topics, formats, and posting times actually drive email signups, course sales, and client inquiries. Get a unified dashboard showing content ROI, not just engagement. Weekly AI reports highlight your money-making content patterns.',
  '$97/month for solo creators (up to 8 platforms), $297/month for teams (unlimited users + advanced analytics), $997/month enterprise (API access + custom integrations).',
  ARRAY['analytics', 'ai', 'content-optimization', 'revenue-tracking', 'creator-tools'],
  NULL,
  'validated',
  84,
  'high',
  'rising',
  NULL,
  NULL,
  TRUE,
  FALSE,
  NOW(),
  NOW(),
  'Creator economy is maturing beyond vanity metrics. Platform APIs now available. Payment processor integrations easier. Creators need to prove ROI as competition increases and audiences become more selective.',
  'Creators typically see 30-50% revenue increase within 3 months by focusing on content that converts. A creator making $20K/month could add $6-10K by optimizing their content strategy around revenue data.',
  '$50B+',
  'Medium',
  'analytics',
  'b2b',
  'premium'
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  one_liner = EXCLUDED.one_liner,
  problem = EXCLUDED.problem,
  target_customer = EXCLUDED.target_customer,
  solution = EXCLUDED.solution,
  monetization = EXCLUDED.monetization,
  tags = EXCLUDED.tags,
  demand_score = EXCLUDED.demand_score,
  updated_at = NOW();

-- Insert landing page for ContentPulse
INSERT INTO landing_pages (idea_id, slug, content, is_published, created_at, updated_at)
VALUES (
  'contentpulse-001',
  'contentpulse',
  '{
    "meta": {
      "title": "ContentPulse - See Which Content Actually Makes You Money",
      "description": "Stop guessing what works. Connect your platforms and payment processors to see exactly which content drives revenue, not just likes."
    },
    "hero": {
      "headline": "Your Content Gets Views. But Which Posts Make Money?",
      "subheadline": "ContentPulse tracks the full journey from post to payment, showing you exactly which content drives signups, sales, and revenue—across all your platforms."
    }
  }'::jsonb,
  TRUE,
  NOW(),
  NOW()
) ON CONFLICT (slug) DO UPDATE SET
  content = EXCLUDED.content,
  updated_at = NOW();