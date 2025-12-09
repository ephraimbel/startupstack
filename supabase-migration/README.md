# StartupStack Supabase Migration Guide

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note your project URL and anon/service keys

## Step 2: Run the Schema Migration

1. Go to your Supabase dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the contents of `01_schema.sql`
4. Click **Run** to create all tables

## Step 3: Import Seed Data (Optional)

1. In the SQL Editor, run `02_seed_data.sql` to add the sample idea

## Step 4: Get Your Connection String

1. Go to **Project Settings** → **Database**
2. Copy the **Connection string** (URI format)
3. It looks like: `postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres`

## Step 5: Update Your Project for Cursor

### Update `.env` file:
```env
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
```

### Update `server/db.ts` (if using connection pooling):
```typescript
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '@shared/schema';

const connectionString = process.env.DATABASE_URL!;

// For Supabase with connection pooling (Transaction mode)
const client = postgres(connectionString, { prepare: false });

export const db = drizzle(client, { schema });
```

### Install postgres-js driver:
```bash
npm install postgres
```

## Step 6: Verify Connection

Test the connection by running your app and checking if queries work.

## Environment Variables Needed

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | Supabase PostgreSQL connection string |
| `OPENAI_API_KEY` | OpenAI API key for AI features |
| `SESSION_SECRET` | Secret for session encryption |
| `STRIPE_SECRET_KEY` | Stripe API key (if using payments) |

## Schema Overview

| Table | Description |
|-------|-------------|
| `users` | User authentication data |
| `user_profiles` | User preferences and subscription info |
| `ideas` | Startup ideas with validation data |
| `execution_plans` | AI-generated execution plans for ideas |
| `landing_pages` | Generated landing page content |

## Notes

- The schema uses `VARCHAR` with `gen_random_uuid()` for IDs (compatible with Drizzle)
- Row Level Security (RLS) is commented out - enable as needed
- Indexes are created for common query patterns
