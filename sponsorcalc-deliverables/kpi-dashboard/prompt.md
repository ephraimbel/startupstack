# SponsorCalc - KPI Dashboard

## North Star Metric
**Rate Cards Generated Weekly**: Number of complete rate card exports (PDF or view) in a 7-day period
- **Target Day 1**: 50/week  
- **Target Month 1**: 200/week
- **Target Month 3**: 1,000/week

---

## Acquisition Metrics

### Website Traffic
- **Metric**: Unique visitors to marketing site
- **Target**: 10K/month by month 3
- **Tool**: Plausible Analytics
- **Tracking**: UTM campaigns, referral sources

### Signup Rate
- **Metric**: Visitors who create account
- **Target**: 8-12%
- **Tool**: PostHog
- **Calculation**: Signups / Unique visitors

### Cost Per Acquisition (CPA)
- **Metric**: Marketing spend / new signups
- **Target**: $15-30 (blended)
- **Tool**: Ad platforms + attribution
- **Breakdown**: Organic vs paid channels

### Channel Performance
- **Organic Social**: Track mentions, shares, click-through rates
- **Content Marketing**: Blog traffic, search rankings, conversion
- **Paid Advertising**: ROAS, CTR, conversion rates by platform

---

## Activation Metrics

### Platform Connected
- **Metric**: % of signups who connect at least 1 platform
- **Target**: 70%+
- **Tool**: PostHog
- **Critical**: Core product engagement indicator

### Rate Card Generated
- **Metric**: % of connected users who generate a rate card
- **Target**: 80%+
- **Tool**: PostHog
- **Critical**: Value realization moment

### PDF Exported (Paid Feature)
- **Metric**: % of users who export rate card PDF
- **Target**: 40% (indicates serious intent)
- **Tool**: PostHog
- **Note**: Strong conversion predictor

### Time to First Value
- **Metric**: Hours from signup to first rate card view
- **Target**: <2 hours
- **Tool**: PostHog
- **Optimization**: Onboarding flow improvements

---

## Engagement Metrics

### Monthly Active Users (MAU)
- **Metric**: Users who perform core action monthly
- **Target**: 60% of registered users
- **Tool**: PostHog
- **Definition**: Generated or viewed rate card in last 30 days

### Session Depth
- **Metric**: Pages viewed per session
- **Target**: 4+ pages
- **Tool**: Plausible
- **Indicates**: Product exploration and engagement

### Feature Adoption
- **Rate Calculator**: % using basic calculator
- **Industry Benchmarks**: % viewing comparison data
- **Negotiation Scripts**: % accessing script library
- **Deal Tracker**: % logging deals (post-MVP)

### Return Usage Patterns
- **Weekly return rate**: % of users who return week-over-week
- **Rate refresh frequency**: How often users recalculate rates
- **Platform additions**: Rate of connecting additional platforms

---

## Retention Metrics

### Monthly Retention
- **Metric**: % of users who return month-over-month
- **Target**: 50%+
- **Tool**: PostHog
- **Critical**: Long-term business health

### Cohort Analysis
- **Day 1**: % who return next day (target: 40%+)
- **Week 1**: % who return in week 2 (target: 30%+)
- **Month 1**: % who return in month 2 (target: 50%+)

### Rate Refreshes per User
- **Metric**: How often active users recalculate rates
- **Target**: 2+ times per month for active users
- **Tool**: Database analytics
- **Indicates**: Product stickiness and value

---

## Revenue Metrics

### Free to Paid Conversion
- **Metric**: % of free users who upgrade to paid plans
- **Target**: 8-12%
- **Tool**: Stripe + PostHog
- **Breakdown**: By user segment and acquisition channel

### Monthly Recurring Revenue (MRR)
- **Target**: $3K month 3, $12K month 6, $50K month 12
- **Tool**: Stripe dashboard
- **Components**: New MRR, expansion, churn, net MRR growth

### Average Revenue Per User (ARPU)
- **Target**: $22-28/month (blended)
- **Tool**: Stripe
- **Calculation**: Total MRR / Total paying customers
- **Trends**: Track by plan tier and cohort

### Customer Lifetime Value (CLV)
- **Target**: $150+ (8+ months retention at $19 average)
- **Calculation**: ARPU × Average customer lifespan
- **Optimization**: Reduce churn, increase ARPU

### Churn Rate
- **Target**: <5% monthly voluntary churn
- **Tool**: Stripe + custom analytics
- **Types**: Voluntary vs involuntary (failed payments)
- **Cohort analysis**: Churn by signup month and plan

---

## Product Performance Metrics

### Rate Calculation Accuracy
- **Metric**: User feedback on rate accuracy (surveys)
- **Target**: 4+ stars average rating
- **Tool**: In-app surveys + support feedback
- **Improvement**: Algorithm tuning based on deal outcomes

### PDF Export Quality
- **Metric**: Downloads vs usage in actual brand outreach
- **Target**: 70%+ of exported PDFs used for brand outreach
- **Tool**: User surveys and feedback

### Support Metrics
- **Response time**: Target <2 hours
- **Resolution time**: Target <24 hours
- **Satisfaction score**: Target 4.5+ stars
- **Common issues**: Track for product improvement

### Platform API Health
- **Instagram API**: Success rate, rate limits, data quality
- **YouTube API**: Connection success, data accuracy
- **TikTok API**: Uptime, rate limiting issues

---

## Competitive Intelligence

### Market Share Indicators
- **Brand mentions**: SponsorCalc vs competitors
- **Feature comparisons**: User feedback on competitive alternatives
- **Pricing analysis**: Market positioning relative to competitors

### User Acquisition Sources
- **Organic**: SEO rankings for target keywords
- **Direct**: Brand recognition and word-of-mouth
- **Referral**: Existing user recommendations
- **Paid**: Performance across advertising channels

---

## Operational Metrics

### Infrastructure Performance
- **Page load speed**: <2 seconds (target)
- **API response time**: <500ms (target)
- **Uptime**: 99.5%+ (target)
- **Error rate**: <0.1% (target)

### Customer Support
- **Ticket volume**: Track trends and common issues
- **Self-service success**: % of users finding answers in FAQ/docs
- **Escalation rate**: % requiring human intervention

---

## Dashboard Implementation

### Real-Time Monitoring
- **Grafana/DataDog**: Infrastructure metrics
- **PostHog**: User behavior and conversion funnels
- **Stripe**: Revenue and subscription metrics

### Daily Reports
- **Key metrics summary** emailed to team
- **Anomaly detection** for significant changes
- **User feedback digest** from support channels

### Weekly Reviews
- **Cohort analysis updates**
- **Feature adoption trends**
- **Competitive intelligence summary**

### Monthly Business Reviews
- **Unit economics assessment**
- **Goal progress tracking**
- **Strategic metric deep dives**

---

## Success Thresholds

### Green Zone (Excellent)
- **Activation rate**: >80%
- **Free to paid**: >12%
- **Monthly retention**: >60%
- **MRR growth**: >20% month-over-month

### Yellow Zone (Needs Attention)
- **Activation rate**: 60-79%
- **Free to paid**: 8-11%
- **Monthly retention**: 40-59%
- **MRR growth**: 10-19% month-over-month

### Red Zone (Critical Issues)
- **Activation rate**: <60%
- **Free to paid**: <8%
- **Monthly retention**: <40%
- **MRR growth**: <10% month-over-month

The KPI dashboard provides comprehensive visibility into product health, user behavior, and business performance to enable data-driven decision making and optimization.