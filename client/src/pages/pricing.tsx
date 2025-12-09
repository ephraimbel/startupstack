import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, Sparkles, Zap } from 'lucide-react';
import { Link } from 'wouter';
import { useAuth } from '@/lib/auth';
import { Logo } from '@/components/Logo';
import { PREMIUM_PRICE, ACCESS_TIERS } from '@shared/schema';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

export default function Pricing() {
  const { user } = useAuth();
  const { toast } = useToast();
  const isPremium = user?.profile?.subscriptionTier === 'premium';

  const checkoutMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest('POST', '/api/checkout', {});
      return response.json();
    },
    onSuccess: (data) => {
      if (data.url) {
        window.location.href = data.url;
      }
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to start checkout. Please try again.',
        variant: 'destructive',
      });
    },
  });

  const handleUpgrade = () => {
    if (!user) {
      window.location.href = '/signup';
      return;
    }
    checkoutMutation.mutate();
  };

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
                <span className="text-sm text-foreground font-medium cursor-pointer" data-testid="link-pricing">
                  Pricing
                </span>
              </Link>
              {user ? (
                <Link href="/dashboard">
                  <Button size="sm" data-testid="button-dashboard">Dashboard</Button>
                </Link>
              ) : (
                <Link href="/login">
                  <Button variant="ghost" size="sm" data-testid="button-login">Log in</Button>
                </Link>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Pricing Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[hsl(var(--startup-ink))]">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Start for free, upgrade when you need more
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <Card className="bg-white border-border relative">
            <CardHeader className="pb-4">
              <CardTitle className="font-serif text-2xl">Free</CardTitle>
              <CardDescription>Perfect for exploring ideas</CardDescription>
              <div className="pt-4">
                <span className="text-4xl font-serif font-medium text-foreground">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-foreground">
                    View up to {ACCESS_TIERS.free.libraryLimit} ideas
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-foreground">
                    {ACCESS_TIERS.free.detailViews} detailed views per month
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-foreground">
                    Generate {ACCESS_TIERS.free.ideasPerMonth} ideas per month
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-foreground">
                    {ACCESS_TIERS.free.plansPerMonth} execution plans per month
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-foreground">
                    Save favorite ideas
                  </span>
                </li>
              </ul>
              
              <div className="mt-8">
                {user ? (
                  <Button variant="outline" className="w-full" disabled>
                    Current Plan
                  </Button>
                ) : (
                  <Link href="/signup">
                    <Button variant="outline" className="w-full" data-testid="button-free-signup">
                      Get Started Free
                    </Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Premium Tier */}
          <Card className="bg-white border-[hsl(224,54%,51%)] border-2 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[hsl(224,54%,51%)] text-white text-xs font-medium">
                <Sparkles className="w-3 h-3" />
                Most Popular
              </span>
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="font-serif text-2xl">Premium</CardTitle>
              <CardDescription>For serious founders</CardDescription>
              <div className="pt-4">
                <span className="text-4xl font-serif font-medium text-foreground">${PREMIUM_PRICE}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">
                    Unlimited idea access
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">
                    Unlimited detailed views
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">
                    Unlimited idea generation
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">
                    Unlimited execution plans
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-foreground">
                    Full validation data & trends
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-foreground">
                    Export & download features
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-foreground">
                    Priority support
                  </span>
                </li>
              </ul>
              
              <div className="mt-8">
                {isPremium ? (
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600" disabled>
                    <Check className="w-4 h-4 mr-2" />
                    Current Plan
                  </Button>
                ) : (
                  <Button 
                    className="w-full bg-[hsl(224,54%,51%)] hover:bg-[hsl(224,54%,45%)]"
                    onClick={handleUpgrade}
                    disabled={checkoutMutation.isPending}
                    data-testid="button-upgrade-premium"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    {checkoutMutation.isPending ? 'Loading...' : 'Upgrade to Premium'}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="mt-24 max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl font-medium text-center text-[hsl(var(--startup-ink))] mb-8">
            Questions?
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-foreground mb-2">Can I cancel anytime?</h3>
              <p className="text-sm text-muted-foreground">
                Yes! You can cancel your Premium subscription at any time. You'll continue to have 
                access until the end of your billing period.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">What happens when I hit my free limits?</h3>
              <p className="text-sm text-muted-foreground">
                You'll see a prompt to upgrade to Premium. Your limits reset at the beginning of each month.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">How does idea generation work?</h3>
              <p className="text-sm text-muted-foreground">
                Our AI generates personalized startup ideas based on your skills, preferences, and the 
                focus areas you specify. Each idea comes with problem, solution, and monetization details.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
