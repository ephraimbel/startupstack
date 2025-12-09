import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { IdeaCard } from '@/components/idea-card';
import { useAuth } from '@/lib/auth';
import { Link, useLocation } from 'wouter';
import { Idea, ACCESS_TIERS } from '@shared/schema';
import { Plus, Bookmark, TrendingUp, Lightbulb, FileText } from 'lucide-react';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { AppHeader } from '@/components/AppHeader';

export default function Dashboard() {
  const { user, isLoading: authLoading } = useAuth();
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const tier = (user?.profile?.subscriptionTier as 'free' | 'premium') || 'free';
  const limits = ACCESS_TIERS[tier];
  const isPremium = tier === 'premium';

  const { data: recentData, isLoading: loadingRecent } = useQuery<{ ideas: Idea[] }>({
    queryKey: ['/api/ideas'],
    queryFn: async () => {
      const response = await fetch('/api/ideas', { credentials: 'include' });
      if (!response.ok) throw new Error('Failed to fetch ideas');
      return response.json();
    },
  });

  const { data: savedData, isLoading: loadingSaved } = useQuery<{ ideas: Idea[] }>({
    queryKey: ['/api/ideas/saved'],
    queryFn: async () => {
      const response = await fetch('/api/ideas/saved', { credentials: 'include' });
      if (!response.ok) throw new Error('Failed to fetch saved ideas');
      return response.json();
    },
  });

  const recentIdeas = recentData?.ideas;
  const savedIdeas = savedData?.ideas;

  const saveMutation = useMutation({
    mutationFn: async (ideaId: string) => {
      await apiRequest('POST', `/api/ideas/${ideaId}/save`, {});
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/ideas'] });
      toast({ title: 'Idea updated' });
    },
  });

  // Wait for auth to load before redirecting
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[hsl(var(--startup-bg-primary))] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      </div>
    );
  }

  // Redirect to onboarding if not completed
  if (!user?.profile?.onboardingCompleted) {
    setLocation('/onboarding');
    return null;
  }

  const usageItems = [
    {
      label: 'Ideas Generated',
      used: user?.profile?.ideasGeneratedThisMonth || 0,
      limit: isPremium ? null : limits.ideasPerMonth,
      icon: Lightbulb,
    },
    {
      label: 'Detail Views',
      used: user?.profile?.detailViewsThisMonth || 0,
      limit: isPremium ? null : limits.detailViews,
      icon: TrendingUp,
    },
    {
      label: 'Execution Plans',
      used: user?.profile?.plansGeneratedThisMonth || 0,
      limit: isPremium ? null : limits.plansPerMonth,
      icon: FileText,
    },
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--startup-bg-primary))]">
      <AppHeader />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-medium text-[hsl(var(--startup-ink))]">
                Welcome back, {user?.username}
              </h1>
              <p className="text-muted-foreground mt-1">
                {isPremium ? 'Premium Member' : 'Free Plan'}
              </p>
            </div>
            <Link href="/generate">
              <Button className="bg-[hsl(224,54%,51%)] hover:bg-[hsl(224,54%,45%)]" data-testid="button-generate">
                <Plus className="w-4 h-4 mr-2" />
                Generate Ideas
              </Button>
            </Link>
          </div>

          {/* Usage Stats */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {usageItems.map((item) => (
              <Card key={item.label} className="bg-white border-border">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[hsl(224,54%,51%)]/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[hsl(224,54%,51%)]" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-lg font-medium text-foreground">
                        {item.used}
                        {item.limit !== null && (
                          <span className="text-muted-foreground font-normal"> / {item.limit}</span>
                        )}
                        {item.limit === null && (
                          <span className="text-xs text-emerald-500 ml-2">Unlimited</span>
                        )}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Ideas */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-xl font-medium text-foreground">Your Recent Ideas</h2>
            </div>
            {loadingRecent ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-3 p-4 border border-border rounded-lg bg-white">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                ))}
              </div>
            ) : recentIdeas && recentIdeas.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentIdeas.slice(0, 6).map((idea) => (
                  <IdeaCard
                    key={idea.id}
                    idea={idea}
                    variant="preview"
                    linkTo={`/dashboard/ideas/${idea.id}`}
                    onSave={(id) => saveMutation.mutate(id)}
                    isSaved={idea.isSaved || false}
                  />
                ))}
              </div>
            ) : (
              <Card className="bg-white border-border">
                <CardContent className="py-12 text-center">
                  <Lightbulb className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-medium text-foreground mb-2">No ideas yet</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Generate your first batch of startup ideas
                  </p>
                  <Link href="/generate">
                    <Button className="bg-[hsl(224,54%,51%)] hover:bg-[hsl(224,54%,45%)]">
                      Generate Ideas
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </section>

          {/* Saved Ideas */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-xl font-medium text-foreground flex items-center gap-2">
                <Bookmark className="w-5 h-5" />
                Saved Ideas
              </h2>
            </div>
            {loadingSaved ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2].map((i) => (
                  <div key={i} className="space-y-3 p-4 border border-border rounded-lg bg-white">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
            ) : savedIdeas && savedIdeas.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {savedIdeas.map((idea) => (
                  <IdeaCard
                    key={idea.id}
                    idea={idea}
                    variant="preview"
                    linkTo={`/dashboard/ideas/${idea.id}`}
                    onSave={(id) => saveMutation.mutate(id)}
                    isSaved={true}
                  />
                ))}
              </div>
            ) : (
              <Card className="bg-white border-border">
                <CardContent className="py-8 text-center">
                  <Bookmark className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">
                    Save ideas you like by clicking the bookmark icon
                  </p>
                </CardContent>
              </Card>
            )}
          </section>
      </main>
    </div>
  );
}
