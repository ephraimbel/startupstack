-- StartupStack Supabase Migration
-- Run this SQL in your Supabase SQL Editor to create the schema

-- Create custom types/enums
CREATE TYPE subscription_tier AS ENUM ('free', 'premium');
CREATE TYPE skill_level AS ENUM ('dev', 'no_code', 'non_technical');
CREATE TYPE preference AS ENUM ('b2b', 'b2c', 'either');
CREATE TYPE idea_status AS ENUM ('pending', 'validating', 'validated', 'failed');
CREATE TYPE demand_band AS ENUM ('high', 'medium', 'low');
CREATE TYPE trend_label AS ENUM ('rising', 'flat', 'declining');

-- Users table
CREATE TABLE users (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid()::text,
  username TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

-- User Profiles table
CREATE TABLE user_profiles (
  id VARCHAR PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  skill_level TEXT,
  preference TEXT,
  market_tags TEXT[],
  subscription_tier TEXT DEFAULT 'free',
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  ideas_generated_this_month INTEGER DEFAULT 0,
  plans_generated_this_month INTEGER DEFAULT 0,
  detail_views_this_month INTEGER DEFAULT 0,
  usage_reset_at TIMESTAMP DEFAULT NOW(),
  onboarding_completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Ideas table
CREATE TABLE ideas (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid()::text,
  user_id VARCHAR REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  one_liner TEXT,
  problem TEXT,
  target_customer TEXT,
  solution TEXT,
  monetization TEXT,
  why_now TEXT,
  revenue_impact TEXT,
  market_size TEXT,
  competition_level TEXT,
  category TEXT,
  business_type TEXT,
  price_range TEXT,
  tags TEXT[],
  keywords TEXT[],
  status TEXT DEFAULT 'pending',
  demand_score INTEGER,
  demand_band TEXT,
  trend_label TEXT,
  validation_summary TEXT,
  validated_at TIMESTAMP,
  is_public BOOLEAN DEFAULT FALSE,
  is_saved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Landing Pages table
CREATE TABLE landing_pages (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid()::text,
  idea_id VARCHAR REFERENCES ideas(id) ON DELETE CASCADE,
  slug TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Execution Plans table
CREATE TABLE execution_plans (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid()::text,
  idea_id VARCHAR REFERENCES ideas(id) ON DELETE CASCADE,
  user_id VARCHAR REFERENCES users(id) ON DELETE CASCADE,
  elevator_pitch TEXT,
  persona TEXT,
  user_stories TEXT[],
  recommended_stack TEXT,
  launch_checklist TEXT[],
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_ideas_user_id ON ideas(user_id);
CREATE INDEX idx_ideas_is_public ON ideas(is_public);
CREATE INDEX idx_ideas_category ON ideas(category);
CREATE INDEX idx_ideas_business_type ON ideas(business_type);
CREATE INDEX idx_execution_plans_idea_id ON execution_plans(idea_id);
CREATE INDEX idx_execution_plans_user_id ON execution_plans(user_id);
CREATE INDEX idx_landing_pages_idea_id ON landing_pages(idea_id);
CREATE INDEX idx_landing_pages_slug ON landing_pages(slug);

-- Enable Row Level Security (optional - configure as needed)
-- ALTER TABLE users ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE ideas ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE execution_plans ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE landing_pages ENABLE ROW LEVEL SECURITY;
