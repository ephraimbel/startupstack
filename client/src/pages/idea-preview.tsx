import { useQuery } from '@tanstack/react-query';
import { useParams } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { DemandBadge } from '@/components/demand-badge';
import { PaywallModal } from '@/components/paywall-modal';
import { useAuth } from '@/lib/auth';
import { Link } from 'wouter';
import { Idea } from '@shared/schema';
import { useState } from 'react';
import { ArrowLeft, Lock, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Logo } from '@/components/Logo';

export default function IdeaPreview() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [showPaywall, setShowPaywall] = useState(false);

  const { data, isLoading } = useQuery<{ idea: Idea }>({
    queryKey: ['/api/ideas', id],
    queryFn: async () => {
      const response = await fetch(`/api/ideas/${id}`, { credentials: 'include' });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to fetch idea');
      }
      return response.json();
    },
  });

  const idea = data?.idea;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[hsl(var(--startup-bg-primary))]">
        <header className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Skeleton className="h-6 w-32" />
            </div>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Skeleton className="h-8 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/2 mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-32 w-full" />
          </div>
        </main>
      </div>
    );
  }

  if (!idea) {
    return (
      <div className="min-h-screen bg-[hsl(var(--startup-bg-primary))] flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-medium text-foreground mb-2">Idea not found</h2>
          <Link href="/ideas">
            <Button variant="outline">Back to Ideas</Button>
          </Link>
        </div>
      </div>
    );
  }

  const showFullContent = !!user;

  return (
    <div className="min-h-screen bg-[hsl(var(--startup-bg-primary))]">
      {/* Header */}
      <header className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo size="md" />
            <nav className="flex items-center gap-3">
              {user ? (
                <Link href="/dashboard">
                  <Button size="sm" data-testid="button-dashboard">Dashboard</Button>
                </Link>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="ghost" size="sm" data-testid="button-login">Log in</Button>
                  </Link>
                  <Link href="/signup">
                    <Button size="sm" className="bg-[hsl(224,54%,51%)] hover:bg-[hsl(224,54%,45%)]" data-testid="button-signup">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/ideas">
          <Button variant="ghost" size="sm" className="mb-6 -ml-2" data-testid="button-back">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Ideas
          </Button>
        </Link>

        {/* Idea Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[hsl(var(--startup-ink))] leading-tight">
              {idea.title}
            </h1>
            <DemandBadge band={idea.demandBand as 'high' | 'medium' | 'low'} />
          </div>
          <p className="text-lg text-muted-foreground">{idea.oneLiner}</p>
          
          {idea.tags && idea.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {idea.tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="font-mono text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Content Cards */}
        <div className="space-y-6">
          <Card className="bg-white border-border">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-red-500" />
              </div>
              <CardTitle className="font-serif text-xl">The Problem</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={showFullContent ? 'text-foreground' : 'blur-[4px] select-none'}>
                {idea.problem}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-border">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[hsl(224,54%,51%)]/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-[hsl(224,54%,51%)]" />
              </div>
              <CardTitle className="font-serif text-xl">Target Customer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={showFullContent ? 'text-foreground' : 'blur-[4px] select-none'}>
                {idea.targetCustomer}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-border">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-emerald-500" />
              </div>
              <CardTitle className="font-serif text-xl">The Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={showFullContent ? 'text-foreground' : 'blur-[4px] select-none'}>
                {idea.solution}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-border">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-amber-500" />
              </div>
              <CardTitle className="font-serif text-xl">Monetization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={showFullContent ? 'text-foreground' : 'blur-[4px] select-none'}>
                {idea.monetization}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA for non-logged in users */}
        {!user && (
          <div className="mt-8 p-8 bg-[hsl(var(--startup-bg-secondary))] rounded-lg border border-border text-center">
            <Lock className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-serif text-xl font-medium text-foreground mb-2">
              Sign up to unlock full details
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Create a free account to view complete idea breakdowns, generate your own ideas, 
              and get execution plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/signup">
                <Button className="bg-[hsl(224,54%,51%)] hover:bg-[hsl(224,54%,45%)]" data-testid="button-signup-cta">
                  Sign Up Free
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" data-testid="button-pricing-cta">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Generate Plan CTA for logged in users */}
        {user && (
          <div className="mt-8 p-6 bg-[hsl(224,54%,51%)]/5 rounded-lg border border-[hsl(224,54%,51%)]/20">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-medium text-foreground">Ready to build this?</h3>
                <p className="text-sm text-muted-foreground">
                  Generate a complete execution plan with user stories and launch checklist
                </p>
              </div>
              <Link href={`/dashboard/ideas/${idea.id}`}>
                <Button className="bg-[hsl(224,54%,51%)] hover:bg-[hsl(224,54%,45%)]" data-testid="button-generate-plan">
                  View Full Details
                </Button>
              </Link>
            </div>
          </div>
        )}
      </main>

      <PaywallModal
        isOpen={showPaywall}
        onClose={() => setShowPaywall(false)}
        reason="signup_required"
      />
    </div>
  );
}
