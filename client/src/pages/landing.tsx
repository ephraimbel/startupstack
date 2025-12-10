import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, TrendingUp, Rocket, ArrowRight, Sparkles, BarChart3, ListChecks, Gauge, Megaphone, CheckCircle, Workflow } from 'lucide-react';
import { Link } from 'wouter';
import { useAuth } from '@/lib/auth';
import { Logo } from '@/components/Logo';
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid';

export default function Landing() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-[hsl(var(--startup-bg-primary))]">
      {/* Header */}
      <header className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo size="md" />
            <nav className="flex items-center gap-6">
              <Link href="/ideas">
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-ideas">
                  Ideas
                </span>
              </Link>
              <Link href="/pricing">
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-pricing">
                  Pricing
                </span>
              </Link>
              {user ? (
                <Link href="/dashboard">
                  <Button size="sm" data-testid="button-dashboard">Dashboard</Button>
                </Link>
              ) : (
                <div className="flex items-center gap-3">
                  <Link href="/login">
                    <Button variant="ghost" size="sm" data-testid="button-login">Log in</Button>
                  </Link>
                  <Link href="/signup">
                    <Button size="sm" className="bg-[hsl(224,54%,51%)] hover:bg-[hsl(224,54%,45%)]" data-testid="button-signup">
                      Get Started
                    </Button>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-[hsl(var(--startup-ink))] leading-[1.1] tracking-tight">
            Turn Ideas Into<br />
            <span className="text-[hsl(224,54%,51%)]">Validated Startups</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI-powered idea generation, real-time demand validation, and execution plans 
            that take you from concept to launch.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ideas">
              <Button size="lg" className="bg-[hsl(224,54%,51%)] hover:bg-[hsl(224,54%,45%)] text-white px-8" data-testid="button-browse-ideas">
                Browse Ideas
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" variant="outline" className="px-8" data-testid="button-get-started">
                Start Generating
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[hsl(var(--startup-bg-secondary))]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[hsl(var(--startup-ink))]">
              How It Works
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              From idea to launch in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-border">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-14 h-14 rounded-full bg-[hsl(224,54%,51%)]/10 flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-7 h-7 text-[hsl(224,54%,51%)]" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  1. Generate Ideas
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tell us your interests and skills. Our AI generates personalized startup ideas 
                  tailored to your strengths.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-border">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-7 h-7 text-emerald-500" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  2. Validate Demand
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Real-time trend analysis shows you which ideas have the highest market 
                  demand and growth potential.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-border">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  3. Execute Plan
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Get a complete execution plan with user stories, tech stack recommendations, 
                  and step-by-step launch checklist.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[hsl(var(--startup-ink))] leading-tight">
                Everything You Need<br />to Launch Faster
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Stop second-guessing. StartupStack gives you the validation and roadmap 
                you need to move from idea to MVP with confidence.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[hsl(224,54%,51%)]/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-[hsl(224,54%,51%)]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">AI-Powered Generation</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Context-aware ideas based on your skills and market preferences
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Real Demand Data</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Live trend analysis and demand scoring for every idea
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <ListChecks className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Execution Roadmaps</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      User stories, tech stack, and launch checklist included
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[hsl(var(--startup-bg-secondary))] rounded-lg p-8 border border-border">
              <div className="space-y-4">
                <div className="h-4 bg-border rounded w-3/4" />
                <div className="h-4 bg-border rounded w-1/2" />
                <div className="h-24 bg-white rounded border border-border" />
                <div className="flex gap-2">
                  <div className="h-6 bg-[hsl(224,54%,51%)]/20 rounded w-16" />
                  <div className="h-6 bg-emerald-500/20 rounded w-20" />
                  <div className="h-6 bg-amber-500/20 rounded w-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Grid */}
      <section className="py-24 bg-[hsl(var(--startup-bg-secondary))]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[hsl(var(--startup-ink))] leading-tight">
              Move from spark to launch with clarity
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              StartupStack combines research, validation, and execution so you always know the next best move.
            </p>
          </div>

          <BentoGrid>
            <BentoCard
              name="AI Idea Studio"
              description="Generate startup concepts tailored to your skills and niches, complete with positioning and value props."
              Icon={Sparkles}
              href="/ideas"
              cta="Browse validated ideas"
              className="md:col-span-2"
              background={
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--startup-accent))/0.10] via-white to-transparent" />
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[hsl(var(--startup-accent))/0.15] blur-3xl" />
                </div>
              }
            />

            <BentoCard
              name="Demand Radar"
              description="Live trend signals, search lift, and audience intent so you ship what the market is already asking for."
              Icon={Gauge}
              href="/signup"
              cta="See demand scores"
              className="md:col-span-1"
              background={
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/15 via-white to-transparent" />
                  <div className="absolute -bottom-8 -left-6 h-32 w-32 rounded-full bg-emerald-500/20 blur-3xl" />
                </div>
              }
            />

            <BentoCard
              name="Evidence to Greenlight"
              description="Surveys, messaging tests, and willingness-to-pay prompts packaged into quick experiments."
              Icon={Megaphone}
              href="/signup"
              cta="Run a fast test"
              className="md:col-span-1"
              background={
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/14 via-white to-transparent" />
                  <div className="absolute -right-8 bottom-0 h-28 w-28 rounded-full bg-amber-400/30 blur-2xl" />
                </div>
              }
            />

            <BentoCard
              name="Execution Blueprints"
              description="Week-by-week build plans with tickets, stack recommendations, and launch checklists ready to ship."
              Icon={Workflow}
              href="/dashboard"
              cta="Preview the roadmap"
              className="md:col-span-2"
              background={
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--startup-bg-tertiary))/0.8] via-white to-transparent" />
                  <div className="absolute left-10 top-6 h-24 w-24 rounded-full bg-[hsl(var(--startup-accent))/0.12] blur-2xl" />
                </div>
              }
            />

            <BentoCard
              name="Founder Confidence"
              description="Scorecards that combine market pull, effort, and risk so you can prioritize the ideas that win."
              Icon={CheckCircle}
              href="/pricing"
              cta="See how scoring works"
              className="md:col-span-1"
              background={
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-white to-transparent" />
                  <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-slate-900/10 blur-xl" />
                </div>
              }
            />
          </BentoGrid>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[hsl(var(--startup-ink))]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white">
            Ready to Find Your Next Startup?
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Join thousands of founders who use StartupStack to validate their ideas before building.
          </p>
          <div className="mt-10">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-[hsl(var(--startup-ink))] hover:bg-gray-100 px-8" data-testid="button-cta-signup">
                Start for Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Logo size="sm" linkTo="" />
            <p className="text-sm text-muted-foreground">
              Built for founders, by founders.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
