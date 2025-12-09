import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { IdeaCard } from '@/components/idea-card';
import { PaywallModal } from '@/components/paywall-modal';
import { AppHeader } from '@/components/AppHeader';
import { useAuth } from '@/lib/auth';
import { Link } from 'wouter';
import { useMutation } from '@tanstack/react-query';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Idea, ACCESS_TIERS } from '@shared/schema';
import { Sparkles, Loader2, Wand2 } from 'lucide-react';

export default function Generate() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [focus, setFocus] = useState('');
  const [generatedIdeas, setGeneratedIdeas] = useState<Idea[]>([]);
  const [showPaywall, setShowPaywall] = useState(false);

  const tier = (user?.profile?.subscriptionTier as 'free' | 'premium') || 'free';
  const limits = ACCESS_TIERS[tier];
  const used = user?.profile?.ideasGeneratedThisMonth || 0;
  const remaining = tier === 'premium' ? Infinity : Math.max(0, limits.ideasPerMonth - used);

  const generateMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest('POST', '/api/ideas', { focus, count: 5 });
      return response.json();
    },
    onSuccess: (data) => {
      setGeneratedIdeas(data.ideas);
      queryClient.invalidateQueries({ queryKey: ['/api/ideas'] });
      toast({ title: `Generated ${data.ideas.length} ideas!` });
    },
    onError: (error: Error) => {
      if (error.message.includes('limit')) {
        setShowPaywall(true);
      } else {
        toast({
          title: 'Generation failed',
          description: 'Please try again',
          variant: 'destructive',
        });
      }
    },
  });

  const handleGenerate = () => {
    if (remaining <= 0 && tier !== 'premium') {
      setShowPaywall(true);
      return;
    }
    generateMutation.mutate();
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--startup-bg-primary))]">
      <AppHeader />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="bg-white border-border mb-8">
          <CardHeader>
            <CardTitle className="font-serif text-2xl flex items-center gap-2">
              <Wand2 className="w-6 h-6 text-[hsl(224,54%,51%)]" />
              Generate Startup Ideas
            </CardTitle>
            <CardDescription>
              Tell us what you want to build. Be specific about the market, problem, or technology.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="focus">Focus Area</Label>
                <Textarea
                  id="focus"
                  placeholder="e.g., AI tools for recruiters, productivity apps for remote teams, fintech for freelancers..."
                  value={focus}
                  onChange={(e) => setFocus(e.target.value)}
                  className="mt-2 min-h-[100px]"
                  data-testid="input-focus"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  {tier === 'premium' ? (
                    <span className="text-emerald-600">Unlimited generations</span>
                  ) : (
                    <span>{remaining} generations remaining this month</span>
                  )}
                </div>
                <Button
                  onClick={handleGenerate}
                  disabled={!focus.trim() || focus.length < 5 || generateMutation.isPending}
                  className="bg-[hsl(224,54%,51%)] hover:bg-[hsl(224,54%,45%)]"
                  data-testid="button-generate"
                >
                  {generateMutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate 5 Ideas
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Loading State */}
        {generateMutation.isPending && (
          <div className="grid sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Card key={i} className="bg-white border-border">
                <CardContent className="pt-6">
                  <Skeleton className="h-5 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-4" />
                  <div className="flex gap-2">
                    <Skeleton className="h-5 w-12" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Generated Ideas */}
        {!generateMutation.isPending && generatedIdeas.length > 0 && (
          <div>
            <h2 className="font-serif text-xl font-medium text-foreground mb-4">
              Your Generated Ideas
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {generatedIdeas.map((idea) => (
                <IdeaCard
                  key={idea.id}
                  idea={idea}
                  variant="preview"
                  linkTo={`/dashboard/ideas/${idea.id}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Tips */}
        {generatedIdeas.length === 0 && !generateMutation.isPending && (
          <div className="bg-[hsl(var(--startup-bg-secondary))] rounded-lg p-6 border border-border">
            <h3 className="font-medium text-foreground mb-3">Tips for better results</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Be specific about your target market or customer</li>
              <li>Mention technologies you're interested in (AI, blockchain, etc.)</li>
              <li>Include the problem space you want to solve</li>
              <li>Add constraints like "bootstrappable" or "subscription-based"</li>
            </ul>
          </div>
        )}
      </main>

      <PaywallModal
        isOpen={showPaywall}
        onClose={() => setShowPaywall(false)}
        reason="limit_reached"
      />
    </div>
  );
}
