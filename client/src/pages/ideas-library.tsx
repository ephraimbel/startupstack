import { useState, useEffect, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useSearch } from 'wouter';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { IdeaCard } from '@/components/idea-card';
import { FilterBar } from '@/components/filters';
import { PaywallModal } from '@/components/paywall-modal';
import { Logo } from '@/components/Logo';
import { useAuth } from '@/lib/auth';
import { Link } from 'wouter';
import { Idea, ACCESS_TIERS } from '@shared/schema';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import {
  FilterState,
  DEFAULT_FILTERS,
  parseFiltersFromURL,
  filtersToURLParams,
  hasActiveFilters,
} from '@/lib/filters';

export default function IdeasLibrary() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const searchString = useSearch();
  const [offset, setOffset] = useState(0);
  const [showPaywall, setShowPaywall] = useState(false);
  const limit = 12;

  const filters = useMemo(() => {
    const params = new URLSearchParams(searchString);
    return parseFiltersFromURL(params);
  }, [searchString]);

  const setFilters = (newFilters: FilterState) => {
    const params = filtersToURLParams(newFilters);
    setLocation(params ? `/ideas?${params}` : '/ideas', { replace: true });
    setOffset(0);
  };

  const tier = user ? (user.profile?.subscriptionTier as 'free' | 'premium') || 'free' : 'anonymous';
  const libraryLimit = ACCESS_TIERS[tier === 'anonymous' ? 'anonymous' : tier].libraryLimit;

  const buildQueryString = () => {
    const params = new URLSearchParams();
    params.set('limit', limit.toString());
    params.set('offset', offset.toString());
    
    if (filters.category.length > 0) params.set('category', filters.category.join(','));
    if (filters.type.length > 0) params.set('type', filters.type.join(','));
    if (filters.demandBand.length > 0) params.set('demand', filters.demandBand.join(','));
    if (filters.trend.length > 0) params.set('trend', filters.trend.join(','));
    if (filters.competition.length > 0) params.set('competition', filters.competition.join(','));
    if (filters.priceRange.length > 0) params.set('price', filters.priceRange.join(','));
    if (filters.query) params.set('q', filters.query);
    if (filters.sortBy !== 'demand_score') params.set('sort', filters.sortBy);
    if (filters.sortOrder !== 'desc') params.set('order', filters.sortOrder);
    
    return params.toString();
  };

  const { data, isLoading } = useQuery<{
    ideas: Idea[];
    total: number;
    hasMore: boolean;
    landingPageSlugs: Record<string, string>;
  }>({
    queryKey: ['/api/public/ideas', filters, limit, offset],
    queryFn: async () => {
      const response = await fetch(`/api/public/ideas?${buildQueryString()}`, { credentials: 'include' });
      if (!response.ok) throw new Error('Failed to fetch ideas');
      return response.json();
    },
  });

  const ideas = data?.ideas || [];
  const total = data?.total || 0;
  const totalPages = Math.ceil(Math.min(total, libraryLimit) / limit);
  const currentPage = Math.floor(offset / limit) + 1;

  return (
    <div className="min-h-screen bg-[hsl(var(--startup-bg-primary))]">
      <header className="border-b border-border bg-white/80 dark:bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-16">
            <Logo size="md" />
            <nav className="flex items-center gap-6">
              <Link href="/ideas">
                <span className="text-sm text-foreground font-medium cursor-pointer" data-testid="link-ideas">
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
                    <Button size="sm" data-testid="button-signup">
                      Get Started
                    </Button>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[hsl(var(--startup-ink))]">
            Startup Ideas
          </h1>
          <p className="mt-2 text-muted-foreground">
            Browse {total.toLocaleString()}+ validated startup ideas
          </p>
        </div>

        <div className="sticky top-16 z-40 bg-[hsl(var(--startup-bg-primary))]/95 dark:bg-background/95 backdrop-blur-sm py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 mb-6">
          <FilterBar filters={filters} onChange={setFilters} />
        </div>

        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <div className="flex gap-2 pt-2">
                  <Skeleton className="h-5 w-12" />
                  <Skeleton className="h-5 w-16" />
                </div>
              </div>
            ))}
          </div>
        ) : ideas.length === 0 ? (
          <div className="text-center py-16">
            <Sparkles className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-serif text-xl font-medium text-foreground mb-2">
              No ideas found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters or check back later
            </p>
            <Button
              variant="outline"
              onClick={() => setFilters(DEFAULT_FILTERS)}
              data-testid="button-clear-filters"
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ideas.map((idea, index) => {
                const isLocked = !user && index >= 20;
                const linkTo = isLocked ? undefined : `/idea/${idea.id}`;
                return (
                  <IdeaCard
                    key={idea.id}
                    idea={idea}
                    variant={isLocked ? 'locked' : 'preview'}
                    linkTo={linkTo}
                  />
                );
              })}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-12">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setOffset(Math.max(0, offset - limit))}
                  disabled={offset === 0}
                  data-testid="button-prev-page"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                <span className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setOffset(offset + limit)}
                  disabled={offset + limit >= Math.min(total, libraryLimit)}
                  data-testid="button-next-page"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            )}

            {tier !== 'premium' && total >= libraryLimit && (
              <div className="text-center mt-8 p-6 bg-[hsl(var(--startup-bg-secondary))] rounded-lg border border-border">
                <p className="text-muted-foreground mb-4">
                  {user ? 
                    'Upgrade to Premium for unlimited access to all ideas' :
                    'Sign up to see more ideas and unlock full details'
                  }
                </p>
                <Link href={user ? '/pricing' : '/signup'}>
                  <Button data-testid="button-upgrade">
                    {user ? 'Upgrade to Premium' : 'Sign Up Free'}
                  </Button>
                </Link>
              </div>
            )}
          </>
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
