# SponsorCalc - MVP Roadmap

## Phase 0: Foundation (Week 1-2)
**Objective**: Set up core infrastructure and basic architecture

### Technical Setup
- **Development environment**: Next.js 14 + Supabase + Vercel
- **Database schema**: Users, platforms, rate calculations, history
- **Authentication system**: Supabase Auth with social OAuth
- **Basic UI framework**: Tailwind CSS, shadcn/ui components

### Key Deliverables
- [ ] Project structure and environment setup
- [ ] Database schema design and migration
- [ ] Basic user authentication flow
- [ ] Landing page wireframes and design

---

## Phase 1: Core Rate Calculator (Week 3-4)
**Objective**: Build the fundamental rate calculation engine

### Features
1. **Social Platform Connection**
   - OAuth integration for Instagram, YouTube, TikTok
   - Data fetching: followers, engagement, demographics
   - Manual platform entry for podcasts/newsletters

2. **Rate Calculation Algorithm V1**
   - Basic engagement rate analysis
   - Platform-specific multipliers
   - Niche CPM integration (top 10 categories)
   - Tiered pricing output (low/mid/high)

3. **Simple Rate Display**
   - Basic rate card view (web only)
   - Platform breakdown
   - Rate justification explanation

### Key Deliverables
- [ ] Instagram Graph API integration
- [ ] YouTube Data API integration  
- [ ] TikTok Business API integration
- [ ] Rate calculation engine V1
- [ ] Basic rate display interface
- [ ] Manual platform entry forms

### Success Criteria
- Users can connect at least one platform
- Rate calculations feel accurate to beta users
- Clear rate breakdown and explanation

---

## Phase 2: Professional Output (Week 5-6)
**Objective**: Create professional-grade deliverables creators can send to brands

### Features
1. **Rate Card PDF Export**
   - Professional PDF template design
   - Branded layout with user's content
   - Platform breakdown and justification
   - Contact information and terms

2. **Enhanced Rate Display**
   - Improved web interface
   - Multiple deliverable types (posts, stories, videos)
   - Bundle pricing options
   - Rate comparison context

3. **Basic User Management**
   - Account settings and preferences
   - Rate history and previous calculations
   - Platform connection management

### Key Deliverables
- [ ] PDF generation system (React-PDF or Puppeteer)
- [ ] Professional rate card templates (3 designs)
- [ ] Enhanced rate calculation display
- [ ] User account management interface
- [ ] Rate history tracking

### Success Criteria
- PDF exports look professional enough for brand outreach
- Users complete the connect→calculate→export flow
- Rate cards include all necessary information for brand negotiations

---

## Phase 3: Freemium Features (Week 7-8)
**Objective**: Implement subscription tiers and upgrade pathways

### Features
1. **Pricing Tiers Implementation**
   - Free tier limitations (1 platform, no PDF)
   - Creator plan features (3 platforms, PDF export)
   - Billing integration with Stripe

2. **Industry Benchmarks**
   - Anonymous comparison data
   - Niche-specific rate ranges
   - Percentile positioning

3. **Basic Negotiation Support**
   - Pre-written script library
   - Common objection responses
   - Rate justification talking points

### Key Deliverables
- [ ] Stripe billing integration
- [ ] Tier-based feature gating
- [ ] Industry benchmark calculations
- [ ] Negotiation script database
- [ ] Upgrade flow and pricing page

### Success Criteria
- Clear free vs paid feature distinction
- Smooth subscription signup process
- Benchmark data feels accurate and valuable
- Free users understand upgrade value proposition

---

## Phase 4: Polish & Launch Prep (Week 9-10)
**Objective**: Prepare for public launch with optimizations

### Features
1. **Mobile Optimization**
   - Responsive design improvements
   - Mobile-first rate calculation flow
   - Touch-friendly interface elements

2. **Onboarding & Education**
   - First-time user flow
   - Feature explanation and tooltips
   - Success metrics and value demonstration

3. **Performance & Analytics**
   - Page load optimization
   - User behavior tracking (PostHog)
   - Error monitoring and logging

### Key Deliverables
- [ ] Mobile-responsive interface
- [ ] User onboarding flow
- [ ] Analytics implementation
- [ ] Performance optimization
- [ ] Error handling and monitoring
- [ ] Beta user feedback integration

### Success Criteria
- Excellent mobile experience
- New users can successfully complete core flow
- Performance meets web standards
- Ready for public launch

---

## Technical Architecture

### Core Components
1. **Frontend**: Next.js 14 with TypeScript
2. **Backend**: Next.js API routes + Supabase Edge Functions
3. **Database**: Supabase (PostgreSQL)
4. **Authentication**: Supabase Auth
5. **Payments**: Stripe
6. **File Storage**: Supabase Storage
7. **Hosting**: Vercel

### External APIs
1. **Instagram Graph API**: Followers, engagement, demographics
2. **YouTube Data API**: Subscribers, views, engagement
3. **TikTok Business API**: Followers, engagement data
4. **OpenAI API**: Script generation and personalization

### Data Model
```
Users
├── Profiles
├── ConnectedPlatforms
├── RateCalculations
├── Subscriptions
└── UsageTracking
```

---

## Post-MVP Roadmap

### Phase 5: Enhanced Features (Month 2)
- Deal tracking and history
- Advanced negotiation scripts
- Media kit builder
- Rate trend analysis

### Phase 6: Scale Features (Month 3)
- API access for agencies
- White-label options
- Advanced analytics dashboard
- Team/collaboration features

### Phase 7: Platform Expansion (Month 4)
- Additional platform integrations
- International market support
- Advanced CPM data sources
- AI-powered insights

---

## Success Metrics

### Technical Metrics
- **Page load speed**: <2 seconds
- **API response time**: <500ms
- **Uptime**: 99.5%+
- **Error rate**: <0.1%

### Product Metrics
- **Activation rate**: 70%+ connect platform
- **Feature adoption**: 80%+ generate rate card
- **Conversion rate**: 10%+ free to paid
- **User satisfaction**: 4.5+ rating

### Business Metrics
- **Monthly signups**: 500+ by end of MVP
- **Paying customers**: 50+ by month 2
- **MRR**: $1,000+ by month 2
- **Churn rate**: <5% monthly

---

## Risk Mitigation

### Technical Risks
- **API rate limits**: Implement caching and rate limiting
- **Data accuracy**: Validate with manual testing and user feedback
- **Scalability**: Design for growth from day one

### Product Risks
- **User adoption**: Extensive beta testing and feedback integration
- **Feature complexity**: Focus on core use case first
- **Competitive response**: Fast execution and strong user experience

### Business Risks
- **Pricing model**: A/B test pricing and gather user feedback
- **Market timing**: Launch with strong value proposition
- **Resource constraints**: Prioritize ruthlessly based on user value

The MVP focuses on delivering immediate value (accurate rates) with professional output (PDF rate cards) while establishing the foundation for a sustainable freemium business model.