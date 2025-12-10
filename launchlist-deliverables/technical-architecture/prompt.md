# LaunchList Technical Architecture - AI Generation Prompt

## Overview
Create a comprehensive technical architecture document for LaunchList, the viral waitlist platform, including system design, infrastructure requirements, database schema, API structure, and scalability considerations.

## Product Context
- **Core Features**: Drag-and-drop page builder, viral referral system, email sequences, real-time analytics, user management
- **Scale Requirements**: Handle viral traffic spikes (10K+ signups/hour), support 100K+ waitlists, process 1M+ emails monthly
- **Performance Goals**: <2s page loads, <5s real-time updates, 99.9% uptime, global CDN distribution
- **Tech Stack**: Next.js 14, Supabase (PostgreSQL), Resend, Vercel, PostHog, Stripe

## High-Level Architecture

### System Architecture Diagram
```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Frontend      │    │   API Gateway    │    │   Database      │
│   (Next.js)     │◄──►│   (Next.js API)  │◄──►│   (Supabase)    │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   CDN/Static    │    │   Background     │    │   File Storage  │
│   (Vercel)      │    │   Jobs (Queue)   │    │   (Supabase)    │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Analytics     │    │   Email Service  │    │   Payment       │
│   (PostHog)     │    │   (Resend)       │    │   (Stripe)      │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### Core Components

#### 1. Frontend Application (Next.js 14)
**Framework**: Next.js 14 with App Router
- **UI Components**: shadcn/ui with Tailwind CSS
- **State Management**: Zustand for client state, React Query for server state
- **Authentication**: Supabase Auth with social providers (Google, GitHub)
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Turbopack for fast development builds

**Key Features**:
- Server-side rendering for SEO optimization
- Static generation for public waitlist pages
- Real-time updates via WebSocket connections
- Progressive Web App capabilities
- Responsive design with mobile-first approach

#### 2. Backend API (Next.js API Routes)
**Architecture**: RESTful API with tRPC for type safety
- **Runtime**: Node.js 18+ with Edge Runtime for performance
- **Validation**: Zod schemas for input/output validation
- **Error Handling**: Centralized error management with proper HTTP codes
- **Rate Limiting**: Redis-based rate limiting to prevent abuse
- **Logging**: Structured logging with Winston/Pino

**API Structure**:
```
/api
├── auth/           # Authentication endpoints
├── waitlists/      # Waitlist CRUD operations
├── signups/        # Signup management
├── referrals/      # Referral tracking
├── emails/         # Email campaign management
├── analytics/      # Analytics data endpoints
├── billing/        # Stripe webhook handling
└── webhooks/       # External service webhooks
```

#### 3. Database Layer (PostgreSQL via Supabase)
**Database**: PostgreSQL 15+ with Row Level Security (RLS)
- **ORM**: Drizzle ORM for type-safe database operations
- **Migrations**: Automated schema migrations with version control
- **Backup**: Daily automated backups with point-in-time recovery
- **Scaling**: Read replicas for analytics queries

## Database Schema Design

### Core Tables

#### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  avatar_url TEXT,
  subscription_status VARCHAR(50) DEFAULT 'free',
  subscription_tier VARCHAR(50) DEFAULT 'free',
  stripe_customer_id VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Waitlists Table
```sql
CREATE TABLE waitlists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  custom_domain VARCHAR(255),
  template_id VARCHAR(50) NOT NULL,
  customization JSONB NOT NULL DEFAULT '{}',
  referral_enabled BOOLEAN DEFAULT true,
  referral_rewards JSONB DEFAULT '[]',
  email_sequences JSONB DEFAULT '[]',
  settings JSONB DEFAULT '{}',
  status VARCHAR(20) DEFAULT 'draft',
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Signups Table
```sql
CREATE TABLE signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  waitlist_id UUID REFERENCES waitlists(id) ON DELETE CASCADE,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  referrer_id UUID REFERENCES signups(id),
  referral_code VARCHAR(50) UNIQUE,
  position INTEGER NOT NULL,
  referral_count INTEGER DEFAULT 0,
  metadata JSONB DEFAULT '{}',
  source VARCHAR(100),
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(waitlist_id, email)
);
```

#### Referrals Table
```sql
CREATE TABLE referrals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  waitlist_id UUID REFERENCES waitlists(id) ON DELETE CASCADE,
  referrer_id UUID REFERENCES signups(id) ON DELETE CASCADE,
  referee_id UUID REFERENCES signups(id) ON DELETE CASCADE,
  reward_claimed BOOLEAN DEFAULT false,
  reward_type VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### Email Campaigns Table
```sql
CREATE TABLE email_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  waitlist_id UUID REFERENCES waitlists(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  trigger_type VARCHAR(50) NOT NULL,
  trigger_conditions JSONB DEFAULT '{}',
  sent_count INTEGER DEFAULT 0,
  open_count INTEGER DEFAULT 0,
  click_count INTEGER DEFAULT 0,
  status VARCHAR(20) DEFAULT 'draft',
  scheduled_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Indexes for Performance
```sql
-- Frequently queried fields
CREATE INDEX idx_waitlists_user_id ON waitlists(user_id);
CREATE INDEX idx_waitlists_slug ON waitlists(slug);
CREATE INDEX idx_signups_waitlist_id ON signups(waitlist_id);
CREATE INDEX idx_signups_referral_code ON signups(referral_code);
CREATE INDEX idx_signups_position ON signups(waitlist_id, position);
CREATE INDEX idx_referrals_referrer ON referrals(referrer_id);

-- Analytics queries
CREATE INDEX idx_signups_created_at ON signups(created_at);
CREATE INDEX idx_signups_source ON signups(waitlist_id, source);
```

## API Design & Endpoints

### Authentication & Authorization
**Auth Provider**: Supabase Auth with JWT tokens
- **Social Logins**: Google, GitHub, Twitter
- **Session Management**: Secure HTTP-only cookies
- **Token Refresh**: Automatic token refresh with sliding sessions
- **Rate Limiting**: Per-user rate limits on sensitive operations

### RESTful API Endpoints

#### Waitlist Management
```
GET    /api/waitlists              # List user's waitlists
POST   /api/waitlists              # Create new waitlist
GET    /api/waitlists/[id]         # Get waitlist details
PUT    /api/waitlists/[id]         # Update waitlist
DELETE /api/waitlists/[id]         # Delete waitlist
POST   /api/waitlists/[id]/publish # Publish waitlist
```

#### Signup Management
```
POST   /api/signups                # Create new signup (public)
GET    /api/waitlists/[id]/signups # List waitlist signups
POST   /api/signups/[id]/refer     # Generate referral link
GET    /api/signups/[id]/position  # Get current position
```

#### Analytics & Reporting
```
GET    /api/waitlists/[id]/analytics    # Waitlist analytics
GET    /api/waitlists/[id]/leaderboard  # Referral leaderboard
GET    /api/waitlists/[id]/exports      # Export signup data
```

### WebSocket Connections for Real-time Updates
- **Position Updates**: Notify users when position changes
- **New Signups**: Real-time dashboard updates
- **Leaderboard**: Live referral competition updates

## Infrastructure & Deployment

### Hosting & CDN (Vercel)
- **Frontend**: Deployed to Vercel Edge Network
- **API**: Serverless functions with Edge Runtime
- **Static Assets**: Global CDN distribution
- **Custom Domains**: SSL certificates via Let's Encrypt
- **Performance**: 99.99% uptime SLA

### Database Infrastructure (Supabase)
- **Primary Database**: PostgreSQL 15 with 4 vCPU, 16GB RAM
- **Scaling Strategy**: Auto-scaling based on CPU and connection count
- **Backup Strategy**: Continuous WAL backups with 30-day retention
- **Security**: Row Level Security (RLS) with fine-grained policies

### Email Infrastructure (Resend)
- **Delivery**: High-deliverability email service
- **Volume**: 10K emails/month free, scale to 1M+
- **Templates**: HTML email templates with tracking
- **Authentication**: SPF, DKIM, DMARC configuration

### Monitoring & Analytics (PostHog)
- **User Analytics**: Event tracking and funnel analysis
- **Performance Monitoring**: Real-time error tracking
- **Feature Flags**: A/B testing and gradual rollouts
- **Session Recordings**: User behavior analysis

## Scalability Considerations

### Traffic Scaling
**Projected Load**:
- **Month 3**: 50K page views, 5K signups
- **Month 6**: 200K page views, 25K signups  
- **Month 12**: 1M page views, 100K signups

**Scaling Strategy**:
- **Horizontal Scaling**: Vercel serverless auto-scaling
- **Database Scaling**: Supabase read replicas for analytics
- **CDN**: Global edge caching for static content
- **Queue System**: Background job processing for email sends

### Viral Traffic Handling
**Challenge**: Waitlists going viral can create 10x traffic spikes
**Solutions**:
- **Edge Caching**: Aggressive caching of public pages
- **Rate Limiting**: Prevent signup spam and abuse
- **Queue Processing**: Async email sending and position calculation
- **Circuit Breakers**: Graceful degradation during overload

### Database Performance
**Optimization Strategies**:
- **Query Optimization**: Efficient indexes for common queries
- **Connection Pooling**: PgBouncer for connection management
- **Read Replicas**: Separate analytics queries from transactional load
- **Archival Strategy**: Move old signups to cold storage

## Security Architecture

### Data Protection
- **Encryption**: AES-256 encryption at rest and in transit
- **PII Handling**: Minimal data collection with GDPR compliance
- **Access Controls**: Role-based access with principle of least privilege
- **Audit Logging**: Complete audit trail of data modifications

### Authentication Security
- **Multi-Factor Auth**: Optional 2FA for account security
- **Session Security**: Secure cookies with CSRF protection
- **Password Security**: bcrypt hashing with salt (handled by Supabase)
- **Account Recovery**: Secure password reset flows

### API Security
- **Rate Limiting**: Prevent brute force and abuse
- **Input Validation**: Strict validation with Zod schemas
- **CORS**: Properly configured cross-origin policies
- **SQL Injection**: Parameterized queries via ORM

## Development & DevOps

### Development Workflow
- **Version Control**: Git with feature branch workflow
- **Code Quality**: ESLint, Prettier, TypeScript strict mode
- **Testing**: Unit tests (Jest), integration tests (Playwright)
- **CI/CD**: GitHub Actions with automated deployments

### Environment Management
- **Environments**: Development, Staging, Production
- **Configuration**: Environment variables via Vercel/Supabase
- **Secrets**: Encrypted secrets management
- **Database Migrations**: Automated with rollback capability

### Monitoring & Observability
- **Application Monitoring**: PostHog for user analytics
- **Error Tracking**: Vercel Analytics for performance monitoring
- **Database Monitoring**: Supabase built-in metrics
- **Uptime Monitoring**: External service monitoring

This technical architecture provides a solid foundation for LaunchList to handle viral growth while maintaining performance, security, and developer productivity throughout the scaling journey.