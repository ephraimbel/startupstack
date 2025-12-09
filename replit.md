# StartupStack

## Overview

StartupStack is a premium SaaS web application that generates, validates, and operationalizes startup ideas. Users can browse a public idea library, sign up to unlock more features, and pay for full access including AI-powered execution plans. The platform follows a "quiet luxury" design aesthetic inspired by Linear, Stripe, Vercel, and Notion.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and caching
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens matching the "quiet luxury" aesthetic
- **Typography**: Instrument Serif (headlines), Geist Sans (body), Geist Mono (code/badges)

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **API Design**: RESTful JSON API with session-based authentication
- **Session Management**: Express-session with MemoryStore (development) or connect-pg-simple (production)
- **Build Process**: Custom esbuild script that bundles server dependencies for optimized cold starts

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: `shared/schema.ts` contains all table definitions and Zod validation schemas
- **Key Tables**: users, userProfiles, ideas, executionPlans
- **Migrations**: Managed via drizzle-kit with output to `./migrations`

### Authentication & Authorization
- **Method**: Session-based authentication with password hashing (SHA-256)
- **Flow**: Login/Signup → Onboarding (skill level, preferences, market tags) → Dashboard
- **Access Tiers**: Anonymous, Free, and Premium with different usage limits
- **Paywall System**: Modal-based paywalls for signup prompts, limit warnings, and premium features

### AI Integration
- **Provider**: OpenAI API (GPT-4o)
- **Features**: Idea generation based on user focus areas and profile, execution plan generation, idea validation
- **Context Awareness**: Uses user's skill level, B2B/B2C preference, and market interests to personalize outputs

### Payment Processing
- **Provider**: Stripe (configured but implementation details in routes)
- **Features**: Checkout sessions for subscription upgrades, customer portal for billing management

## External Dependencies

### Third-Party Services
- **OpenAI API**: Powers AI idea generation, validation, and execution plan creation
- **Stripe**: Handles subscription payments, checkout flow, and customer billing portal
- **PostgreSQL**: Primary database (requires DATABASE_URL environment variable)

### Key NPM Packages
- **drizzle-orm** + **drizzle-zod**: Type-safe database ORM with Zod schema generation
- **@tanstack/react-query**: Server state management and data fetching
- **@radix-ui/***: Accessible UI component primitives
- **express-session** + **connect-pg-simple**: Session management
- **zod**: Runtime type validation for API inputs

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string
- `OPENAI_API_KEY`: OpenAI API authentication
- `STRIPE_SECRET_KEY`: Stripe API key (implied by Stripe integration)