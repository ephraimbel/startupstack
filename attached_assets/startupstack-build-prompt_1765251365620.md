# StartupStack — Full Build Prompt

Build a premium SaaS web app that generates, validates, and operationalizes startup ideas. Users browse a public idea library, sign up to unlock more, and pay for full access + execution plans.

**Design standard:** Linear, Stripe, Vercel, Notion-level polish. Quiet luxury aesthetic — off-white backgrounds, precise typography, subtle shadows, zero visual noise.

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Database/Auth:** Supabase (Postgres + Auth)
- **Styling:** Tailwind CSS
- **LLM:** OpenAI API (gpt-4o)
- **Trends:** Google Trends API or SerpApi wrapper
- **Payments:** Stripe (Checkout + Customer Portal)
- **Hosting:** Vercel
- **Background Jobs:** Vercel Cron or Supabase pg_cron

---

## Design System

### Color Palette (Manus-style off-white/grey)

```
Backgrounds:      #FAFAF9 (primary), #F6F6F3 (secondary), #F3F4F6 (tertiary), #EDEDED (cards)
Borders:          #E5E7EB (light), #D1D5DB (default), #C7C9CC (strong)
Text:             #374151 (primary), #4B5563 (secondary), #6B7280 (tertiary)
Deep:             #111827 (ink), #1A1A1A (graphite), #0F0F0F (soft-black)
Accent:           #3A5FCD (single blue-grey accent)
Semantic:         #059669 (success), #D97706 (warning), #DC2626 (error)
```

### Typography

- **Display:** Instrument Serif (headlines)
- **Body:** Geist Sans (UI text)
- **Mono:** Geist Mono (code, badges)

### Design Principles

- Generous whitespace, 8px spacing grid
- Subtle shadows (`0 1px 3px rgba(0,0,0,0.04)`)
- Border radius: 6px (cards), 8px (modals), 4px (buttons)
- No gradients, no flashy colors, no visual noise
- Micro-interactions: 150ms transitions, subtle hover states
- Cards: white background, 1px border, soft shadow on hover

---

## Database Schema

```sql
create type subscription_tier as enum ('free', 'premium');

create table user_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  skill_level text check (skill_level in ('dev', 'no_code', 'non_technical')),
  preference text check (preference in ('b2b', 'b2c', 'either')),
  market_tags text[],
  subscription_tier subscription_tier default 'free',
  stripe_customer_id text,
  stripe_subscription_id text,
  ideas_generated_this_month int default 0,
  plans_generated_this_month int default 0,
  detail_views_this_month int default 0,
  usage_reset_at timestamptz default now(),
  onboarding_completed boolean default false,
  created_at timestamptz default now()
);

create table ideas (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  title text not null,
  one_liner text,
  problem text,
  target_customer text,
  solution text,
  monetization text,
  tags text[],
  keywords text[],
  status text default 'pending' check (status in ('pending', 'validating', 'validated', 'failed')),
  demand_score int check (demand_score between 0 and 100),
  demand_band text check (demand_band in ('high', 'medium', 'low')),
  trend_label text check (trend_label in ('rising', 'flat', 'declining')),
  validation_summary text,
  validated_at timestamptz,
  is_public boolean default false,
  is_saved boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table execution_plans (
  id uuid primary key default gen_random_uuid(),
  idea_id uuid references ideas(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  elevator_pitch text,
  persona text,
  user_stories text[],
  recommended_stack text,
  launch_checklist text[],
  created_at timestamptz default now()
);

create index ideas_public on ideas(is_public, demand_score desc) where is_public = true;
create index ideas_user on ideas(user_id, created_at desc);
create index ideas_pending on ideas(status) where status = 'pending';
```

---

## Access Tiers

| Tier | Library Access | Detail Views | Ideas/Month | Plans/Month |
|------|----------------|--------------|-------------|-------------|
| Anonymous | 20 ideas, truncated | 0 | 0 | 0 |
| Free | 100 ideas | 5/month | 30 | 2 |
| Premium ($29/mo) | Unlimited | Unlimited | Unlimited | Unlimited |

---

## Routes & Pages

### Public (no auth)

| Route | Purpose |
|-------|---------|
| `/` | Landing page with hero, how-it-works, CTA |
| `/ideas` | Public idea library (grid, filters, gated) |
| `/ideas/[id]` | Public idea preview (teaser + signup prompt) |
| `/pricing` | Single premium tier, Stripe checkout |
| `/login` | Email/password login |
| `/signup` | Email/password signup + onboarding |

### Protected (auth required)

| Route | Purpose |
|-------|---------|
| `/dashboard` | User home: recent ideas, saved ideas |
| `/generate` | Generate new ideas form |
| `/dashboard/ideas/[id]` | Full idea detail (tier-gated) |
| `/plans/[id]` | Execution plan view |
| `/settings` | Profile, subscription management |

---

## API Endpoints

### `GET /api/public/ideas`
Public library. Returns limited fields based on auth status.

Request: `?category=ai&type=b2b&limit=20&offset=0`

Response:
```json
{
  "ideas": [{ "id", "title", "one_liner", "tags", "demand_band" }],
  "total": 247,
  "showing": 20,
  "limited": true
}
```

### `GET /api/ideas/[id]`
Full idea detail. Checks tier, increments view counter for free users.

### `POST /api/ideas`
Generate personalized ideas.

Request:
```json
{ "focus": "AI tools for recruiters", "count": 5 }
```

Response:
```json
{
  "ideas": [...],
  "generated": 5,
  "remaining_this_month": 25
}
```

### `POST /api/ideas/[id]/plan`
Generate execution plan. Premium or within free limit.

Response:
```json
{
  "plan": {
    "elevator_pitch": "...",
    "persona": "...",
    "user_stories": [...],
    "recommended_stack": "...",
    "launch_checklist": [...]
  }
}
```

### `POST /api/checkout`
Create Stripe checkout session. Returns `{ checkout_url }`.

### `POST /api/webhooks/stripe`
Handle `checkout.session.completed`, `customer.subscription.deleted`.

---

## LLM Prompts

### Idea Generation

```
You are a startup idea generator for technical founders.

User context:
- Skill: {skill_level}
- Preference: {preference}
- Markets: {market_tags}

Focus: {focus || "general SaaS/AI opportunities"}

Generate {count} startup ideas. For each, output JSON:
{
  "title": "string",
  "one_liner": "under 20 words",
  "problem": "1-2 sentences",
  "target_customer": "specific persona",
  "solution": "2-3 sentences",
  "monetization": "pricing model",
  "tags": ["b2b"|"b2c", "ai"|"saas", "vertical"],
  "keywords": ["3-5 searchable terms for trend validation"]
}

Return a JSON array. No markdown, no explanation.
```

### Execution Plan

```
Generate a startup execution plan for this idea:

Title: {title}
Problem: {problem}
Solution: {solution}
Target: {target_customer}
Monetization: {monetization}
Demand: {demand_band} ({trend_label})

Output JSON:
{
  "elevator_pitch": "2-3 sentences",
  "persona": "detailed target user with name, role, pain points",
  "user_stories": ["5-8 MVP user stories in 'As a... I want... so that...' format"],
  "recommended_stack": "specific tech stack recommendation with reasoning",
  "launch_checklist": ["10-12 ordered steps from now to first paying customers"]
}

No markdown, no explanation.
```

---

## Background Validation Worker

Runs every 5 minutes via cron:

1. Fetch ideas where `status = 'pending'` (limit 10)
2. For each idea:
   - Set `status = 'validating'`
   - Call Trends API for primary keyword → 12-month data
   - Compute `demand_score` (0-100), `demand_band` (high/medium/low), `trend_label` (rising/flat/declining)
   - Generate 2-sentence `validation_summary` via LLM
   - Set `status = 'validated'`, `validated_at = now()`
3. On error: set `status = 'failed'`

---

## Key Components

### IdeaCard
- Variants: `full` (all details), `preview` (one-liner only), `locked` (blur + CTA)
- Shows: title, one-liner, tags (chips), demand badge
- Hover: border darkens, subtle shadow elevation

### DemandBadge
- High: green dot + "HIGH"
- Medium: amber dot + "MEDIUM"
- Low: grey dot + "LOW"

### PaywallModal
- Reasons: `signup_required`, `limit_reached`, `premium_required`
- Backdrop blur, centered modal, clear CTA

### Filters
- Category pills (All, AI Tools, SaaS, Marketing, Creator, Productivity, Finance)
- Type toggle (All, B2B, B2C)

### ExecutionPlanView
- Sections: elevator pitch, persona, user stories (numbered list), stack, checklist (numbered steps)
- "Copy all" button, optional "Download .md"

---

## File Structure

```
app/
├── (public)/
│   ├── page.tsx                 # Landing
│   ├── ideas/
│   │   ├── page.tsx             # Public library
│   │   └── [id]/page.tsx        # Public preview
│   ├── pricing/page.tsx
│   └── layout.tsx
├── (auth)/
│   ├── login/page.tsx
│   ├── signup/page.tsx
│   └── layout.tsx
├── (dashboard)/
│   ├── dashboard/page.tsx
│   ├── generate/page.tsx
│   ├── ideas/[id]/page.tsx
│   ├── plans/[id]/page.tsx
│   ├── settings/page.tsx
│   └── layout.tsx
├── api/
│   ├── ideas/route.ts
│   ├── ideas/[id]/route.ts
│   ├── ideas/[id]/plan/route.ts
│   ├── public/ideas/route.ts
│   ├── checkout/route.ts
│   └── webhooks/stripe/route.ts
└── layout.tsx

components/
├── ui/ (button, input, badge, modal, card)
├── idea-card.tsx
├── demand-badge.tsx
├── paywall-modal.tsx
├── filters.tsx
├── plan-sections.tsx
├── header.tsx
└── sidebar.tsx

lib/
├── supabase/ (client.ts, server.ts)
├── stripe.ts
├── openai.ts
├── validation.ts
├── access.ts
└── constants.ts

jobs/
└── validate-ideas.ts
```

---

## Implementation Order

1. **Database:** Run schema in Supabase, configure RLS
2. **Auth:** Supabase Auth + onboarding flow
3. **Public library:** `/ideas` with anonymous/free gating
4. **Idea detail:** Tier-based access logic
5. **Generation:** `/generate` form + LLM integration
6. **Validation worker:** Cron job + Trends API
7. **Execution plans:** Generation + display
8. **Stripe:** Checkout + webhooks + portal
9. **Polish:** Animations, loading states, error handling

---

## Quality Checklist

- [ ] All text uses proper hierarchy (display → body → caption)
- [ ] Consistent 8px spacing grid
- [ ] Loading skeletons on async operations
- [ ] Toast notifications for actions
- [ ] Empty states with helpful CTAs
- [ ] Mobile responsive (stack grids, adjust padding)
- [ ] Keyboard navigation + focus states
- [ ] Error boundaries + fallback UI
- [ ] Meta tags + OG images for public pages
