import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/lib/auth';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { PREMIUM_PRICE, ACCESS_TIERS } from '@shared/schema';
import { Zap, CreditCard, User, Crown, ExternalLink } from 'lucide-react';
import { AppHeader } from '@/components/AppHeader';

export default function Settings() {
  const { user } = useAuth();
  const { toast } = useToast();

  const tier = (user?.profile?.subscriptionTier as 'free' | 'premium') || 'free';
  const isPremium = tier === 'premium';

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
        description: 'Failed to start checkout',
        variant: 'destructive',
      });
    },
  });

  const portalMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest('POST', '/api/billing/portal', {});
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
        description: 'Failed to open billing portal',
        variant: 'destructive',
      });
    },
  });

  const skillLabels: Record<string, string> = {
    dev: 'Developer',
    no_code: 'No-Code Builder',
    non_technical: 'Non-Technical',
  };

  const prefLabels: Record<string, string> = {
    b2b: 'B2B',
    b2c: 'B2C',
    either: 'Either',
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--startup-bg-primary))]">
      <AppHeader />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-serif text-2xl sm:text-3xl font-medium text-[hsl(var(--startup-ink))] mb-8">
          Settings
        </h1>

        <div className="space-y-6">
          {/* Profile */}
          <Card className="bg-white border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Username</span>
                <span className="font-medium text-foreground">{user?.username}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Email</span>
                <span className="font-medium text-foreground">{user?.email}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Skill Level</span>
                <span className="font-medium text-foreground">
                  {skillLabels[user?.profile?.skillLevel || ''] || 'Not set'}
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Market Preference</span>
                <span className="font-medium text-foreground">
                  {prefLabels[user?.profile?.preference || ''] || 'Not set'}
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-muted-foreground">Market Interests</span>
                <div className="flex flex-wrap gap-1 justify-end max-w-[200px]">
                  {user?.profile?.marketTags?.slice(0, 3).map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {(user?.profile?.marketTags?.length || 0) > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{(user?.profile?.marketTags?.length || 0) - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Subscription */}
          <Card className="bg-white border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="w-5 h-5" />
                Subscription
              </CardTitle>
              <CardDescription>
                Manage your plan and billing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground text-lg">
                      {isPremium ? 'Premium' : 'Free'} Plan
                    </span>
                    {isPremium && (
                      <Badge className="bg-[hsl(224,54%,51%)]">Active</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {isPremium ? `$${PREMIUM_PRICE}/month` : 'Limited features'}
                  </p>
                </div>
              </div>

              {isPremium ? (
                <Button
                  variant="outline"
                  onClick={() => portalMutation.mutate()}
                  disabled={portalMutation.isPending}
                  className="w-full"
                  data-testid="button-manage-billing"
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Manage Billing
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 bg-[hsl(var(--startup-bg-secondary))] rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">Upgrade to Premium</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                      <li>Unlimited idea generation</li>
                      <li>Unlimited execution plans</li>
                      <li>Full validation data</li>
                      <li>Priority support</li>
                    </ul>
                    <p className="text-lg font-medium text-foreground">
                      ${PREMIUM_PRICE}<span className="text-sm font-normal text-muted-foreground">/month</span>
                    </p>
                  </div>
                  <Button
                    onClick={() => checkoutMutation.mutate()}
                    disabled={checkoutMutation.isPending}
                    className="w-full bg-[hsl(224,54%,51%)] hover:bg-[hsl(224,54%,45%)]"
                    data-testid="button-upgrade"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Upgrade to Premium
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Usage This Month */}
          <Card className="bg-white border-border">
            <CardHeader>
              <CardTitle>Usage This Month</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Ideas Generated</span>
                <span className="font-medium text-foreground">
                  {user?.profile?.ideasGeneratedThisMonth || 0}
                  {!isPremium && ` / ${ACCESS_TIERS.free.ideasPerMonth}`}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Detail Views</span>
                <span className="font-medium text-foreground">
                  {user?.profile?.detailViewsThisMonth || 0}
                  {!isPremium && ` / ${ACCESS_TIERS.free.detailViews}`}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Execution Plans</span>
                <span className="font-medium text-foreground">
                  {user?.profile?.plansGeneratedThisMonth || 0}
                  {!isPremium && ` / ${ACCESS_TIERS.free.plansPerMonth}`}
                </span>
              </div>
              <p className="text-xs text-muted-foreground pt-2">
                Usage resets on the 1st of each month
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
