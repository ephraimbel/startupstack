import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { useLocation } from 'wouter';
import { PREMIUM_PRICE } from '@shared/schema';

type PaywallReason = 'signup_required' | 'limit_reached' | 'premium_required';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  reason: PaywallReason;
}

const PAYWALL_CONFIG = {
  signup_required: {
    title: 'Create Your Free Account',
    description: 'Sign up to unlock idea details, generate your own ideas, and save your favorites.',
    features: [
      'View 100 startup ideas',
      '5 detailed views per month',
      'Generate 30 ideas monthly',
      '2 execution plans',
    ],
    ctaText: 'Sign Up Free',
    ctaPath: '/signup',
    showPremium: true,
  },
  limit_reached: {
    title: 'You\'ve Reached Your Limit',
    description: 'Upgrade to Premium for unlimited access to all features.',
    features: [
      'Unlimited idea views',
      'Unlimited idea generation',
      'Unlimited execution plans',
      'Priority support',
    ],
    ctaText: 'Upgrade to Premium',
    ctaPath: '/pricing',
    showPremium: false,
  },
  premium_required: {
    title: 'Premium Feature',
    description: 'This feature is available exclusively for Premium members.',
    features: [
      'Unlimited idea generation',
      'Unlimited execution plans',
      'Full validation data',
      'Export & share features',
    ],
    ctaText: 'Upgrade to Premium',
    ctaPath: '/pricing',
    showPremium: false,
  },
};

export function PaywallModal({ isOpen, onClose, reason }: PaywallModalProps) {
  const [, setLocation] = useLocation();
  const config = PAYWALL_CONFIG[reason];

  const handleCta = () => {
    onClose();
    setLocation(config.ctaPath);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white dark:bg-card border-border">
        <DialogHeader className="text-center pb-4">
          <div className="mx-auto w-12 h-12 rounded-full bg-[hsl(224,54%,51%)]/10 flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-[hsl(224,54%,51%)]" />
          </div>
          <DialogTitle className="text-xl font-serif">{config.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground mt-2">
            {config.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-3 py-4">
          {config.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col gap-3 pt-4">
          <Button 
            onClick={handleCta}
            className="w-full bg-[hsl(224,54%,51%)] hover:bg-[hsl(224,54%,45%)] text-white"
            data-testid="button-paywall-cta"
          >
            {config.ctaText}
          </Button>
          
          {config.showPremium && (
            <Button 
              variant="outline" 
              onClick={() => { onClose(); setLocation('/pricing'); }}
              className="w-full"
              data-testid="button-paywall-pricing"
            >
              <Zap className="w-4 h-4 mr-2" />
              View Premium (${PREMIUM_PRICE}/mo)
            </Button>
          )}
        </div>
        
        {reason === 'signup_required' && (
          <p className="text-center text-sm text-muted-foreground pt-2">
            Already have an account?{' '}
            <button 
              onClick={() => { onClose(); setLocation('/login'); }}
              className="text-[hsl(224,54%,51%)] hover:underline"
              data-testid="link-login"
            >
              Log in
            </button>
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
}
