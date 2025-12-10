# RepurposeAI KPI Dashboard - AI Generation Prompt

## Overview
Create a comprehensive KPI dashboard for RepurposeAI that tracks all critical business metrics across acquisition, activation, retention, and revenue.

## Dashboard Philosophy
**Purpose**: Single source of truth for business health and growth
**Audience**: Founders, investors, team leads
**Update Frequency**: Real-time for key metrics, daily/weekly summaries
**Focus**: Actionable insights that drive decision making

## Key Performance Indicators

### North Star Metric
**Metric**: Weekly Active Content Generators
**Definition**: Users who generate content from videos in the past 7 days
**Target**: 2,000 WAC by Month 3
**Why**: Best indicator of product value delivery and business health

### Acquisition Metrics

#### 1. Website Traffic
- **Total Visitors**: Monthly unique visitors to marketing site
- **Target**: 50K/month by Month 3
- **Source Breakdown**: Organic, paid, referral, social

#### 2. Trial Signups
- **Definition**: New free trial accounts created
- **Target**: 1,000/month by Month 3
- **Conversion Rate**: Visitor-to-trial (target: 5%)

#### 3. Customer Acquisition Cost (CAC)
- **Formula**: Marketing spend / New customers
- **Target**: <$50 blended CAC
- **By Channel**: Organic ($0-10), Paid ($30-60), Partnerships ($20-40)

#### 4. CAC Payback Period
- **Formula**: CAC / (Monthly ARPU × Gross Margin %)
- **Target**: <6 months
- **Trend**: Decreasing over time as channels optimize

### Activation Metrics

#### 1. First Video Upload Rate
- **Definition**: % of trial users who upload first video within 24 hours
- **Target**: 70%
- **Critical**: Strong predictor of trial conversion

#### 2. Content Generation Rate
- **Definition**: % of users who generate any content within 48 hours
- **Target**: 85% (of those who upload video)
- **Insight**: Core value demonstration

#### 3. Content Export Rate
- **Definition**: % of users who export/copy generated content
- **Target**: 60% (of those who generate content)
- **Insight**: Actual usage and value realization

#### 4. Time to First Value
- **Definition**: Median time from signup to first content export
- **Target**: <30 minutes
- **Optimization**: Key onboarding focus area

### Retention Metrics

#### 1. Trial-to-Paid Conversion
- **Definition**: % of completed trials that convert to paid
- **Target**: 15%
- **Cohort Analysis**: Track by signup source and user behavior

#### 2. Monthly Churn Rate
- **Definition**: % of paying customers who cancel each month
- **Target**: <5%
- **Segmentation**: By plan, tenure, usage level

#### 3. Net Revenue Retention
- **Definition**: Revenue expansion from existing customers
- **Target**: 100%+ (includes upgrades minus churn)
- **Driver**: Plan upgrades and feature expansion

#### 4. Customer Satisfaction
- **NPS Score**: Target >50
- **CSAT**: Target >4.5/5
- **Frequency**: Quarterly surveys + transactional feedback

### Revenue Metrics

#### 1. Monthly Recurring Revenue (MRR)
- **Definition**: Total monthly subscription revenue
- **Target**: $50K MRR by Month 6
- **Growth Rate**: 20%+ month-over-month

#### 2. Annual Recurring Revenue (ARR)
- **Definition**: MRR × 12
- **Target**: $600K ARR by Month 6
- **Benchmark**: SaaS industry standards

#### 3. Average Revenue Per User (ARPU)
- **Definition**: Total MRR / Active customers
- **Target**: $75 blended ARPU
- **Segmentation**: By plan tier (Starter $29, Creator $79, Pro $199)

#### 4. Customer Lifetime Value (LTV)
- **Formula**: ARPU × Gross Margin % × (1/Monthly Churn Rate)
- **Target**: $450+ (LTV:CAC ratio >3:1)
- **Improvement Drivers**: Retention and ARPU expansion

## Dashboard Layouts

### Executive Dashboard (Daily View)
**Purpose**: High-level business health check

**Key Metrics**:
- MRR growth (vs. target)
- New trials today/this week
- Trial conversion rate (7-day rolling)
- Active customers
- Churn alerts (customers at risk)

### Growth Dashboard (Weekly Review)
**Purpose**: Marketing and acquisition analysis

**Sections**:
- Traffic sources and conversion funnels
- CAC by channel
- Trial quality metrics
- Attribution analysis
- Competitive insights

### Product Dashboard (Weekly Review)  
**Purpose**: User behavior and product performance

**Sections**:
- Feature usage statistics
- User engagement cohorts
- Processing volume and performance
- Feature adoption rates
- User feedback themes

### Revenue Dashboard (Monthly Review)
**Purpose**: Financial performance and forecasting

**Sections**:
- Revenue growth and projections
- Customer segmentation analysis
- Plan upgrade/downgrade flows
- Retention cohort analysis
- Unit economics

## Alerting & Automation

### Critical Alerts (Immediate)
- Trial conversion drops below 10%
- Churn rate exceeds 7% in any month
- Processing errors spike above 5%
- Payment failures exceed normal rates

### Weekly Summary Alerts
- Traffic/conversion trends vs. targets
- Customer feedback sentiment changes
- Competitive movement alerts
- Feature usage pattern changes

### Monthly Business Reviews
- Full metrics package for stakeholders
- Cohort analysis and trends
- Strategic insights and recommendations
- Forecast updates and goal tracking

## Data Sources & Integration

### Required Integrations
- **Product Analytics**: Mixpanel/Amplitude for user behavior
- **Web Analytics**: Google Analytics for traffic and conversion
- **Revenue**: Stripe for subscription and payment data
- **Support**: Intercom/Zendesk for customer satisfaction
- **Email**: Customer.io/ConvertKit for engagement metrics

### Data Warehouse
- **ETL Process**: Daily data pulls into central warehouse
- **Storage**: Supabase analytics tables or separate analytics DB
- **Visualization**: Custom dashboard or tools like Grafana/Metabase

## Success Criteria by Phase

### Month 1 Targets
- 500+ trial signups
- 10%+ trial conversion rate
- $3K MRR
- 60+ paying customers

### Month 3 Targets  
- 1,000+ trial signups/month
- 15%+ trial conversion rate
- $15K MRR
- 300+ paying customers

### Month 6 Targets
- 2,000+ trial signups/month
- 15%+ trial conversion rate
- $50K MRR
- 800+ paying customers

Generate a comprehensive KPI dashboard that provides actionable insights for growing RepurposeAI from launch to scale, with clear targets and measurement frameworks.