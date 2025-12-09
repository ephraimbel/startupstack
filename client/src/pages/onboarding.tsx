import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useLocation } from 'wouter';
import { useAuth } from '@/lib/auth';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { cn } from '@/lib/utils';
import { Code, Palette, Briefcase, Users, Building2, ArrowRight, Loader2, Check } from 'lucide-react';
import { Logo } from '@/components/Logo';

const SKILL_LEVELS = [
  { id: 'dev', label: 'Developer', description: 'I can code', icon: Code },
  { id: 'no_code', label: 'No-Code', description: 'I use tools like Lovable, Replit, Bubble', icon: Palette },
  { id: 'non_technical', label: 'Non-Technical', description: 'I focus on business & marketing', icon: Briefcase },
] as const;

const PREFERENCES = [
  { id: 'b2b', label: 'B2B', description: 'Sell to businesses' },
  { id: 'b2c', label: 'B2C', description: 'Sell to consumers' },
  { id: 'either', label: 'Either', description: 'Open to both' },
] as const;

const MARKETS = [
  'AI Tools', 'SaaS', 'Marketing', 'Creator Economy', 'Productivity',
  'Finance', 'Healthcare', 'Education', 'E-commerce', 'Developer Tools',
] as const;

export default function Onboarding() {
  const [, setLocation] = useLocation();
  const { refreshUser } = useAuth();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [skillLevel, setSkillLevel] = useState<string>('');
  const [preference, setPreference] = useState<string>('');
  const [marketTags, setMarketTags] = useState<string[]>([]);

  const mutation = useMutation({
    mutationFn: async () => {
      await apiRequest('POST', '/api/auth/onboarding', {
        skillLevel,
        preference,
        marketTags,
      });
    },
    onSuccess: async () => {
      await refreshUser();
      toast({ title: 'Setup complete!' });
      setLocation('/dashboard');
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to save preferences',
        variant: 'destructive',
      });
    },
  });

  const toggleMarket = (market: string) => {
    setMarketTags(prev =>
      prev.includes(market)
        ? prev.filter(m => m !== market)
        : [...prev, market]
    );
  };

  const canProceed = () => {
    if (step === 1) return !!skillLevel;
    if (step === 2) return !!preference;
    if (step === 3) return marketTags.length >= 1;
    return false;
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      mutation.mutate();
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--startup-bg-primary))] flex flex-col">
      <header className="border-b border-border bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Logo size="md" />
          </div>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-lg bg-white border-border">
          <CardHeader className="text-center">
            <div className="flex justify-center gap-2 mb-4">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={cn(
                    'w-2 h-2 rounded-full transition-colors',
                    s === step ? 'bg-[hsl(224,54%,51%)]' : s < step ? 'bg-emerald-500' : 'bg-border'
                  )}
                />
              ))}
            </div>
            <CardTitle className="font-serif text-2xl">
              {step === 1 && 'What\'s your skill level?'}
              {step === 2 && 'Who do you want to sell to?'}
              {step === 3 && 'What markets interest you?'}
            </CardTitle>
            <CardDescription>
              {step === 1 && 'This helps us tailor ideas to your abilities'}
              {step === 2 && 'We\'ll prioritize ideas matching your preference'}
              {step === 3 && 'Select at least one market'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <div className="space-y-3">
                {SKILL_LEVELS.map((skill) => (
                  <button
                    key={skill.id}
                    onClick={() => setSkillLevel(skill.id)}
                    className={cn(
                      'w-full flex items-center gap-4 p-4 rounded-lg border transition-all',
                      skillLevel === skill.id
                        ? 'border-[hsl(224,54%,51%)] bg-[hsl(224,54%,51%)]/5'
                        : 'border-border hover:border-gray-300'
                    )}
                    data-testid={`button-skill-${skill.id}`}
                  >
                    <div className={cn(
                      'w-10 h-10 rounded-lg flex items-center justify-center',
                      skillLevel === skill.id ? 'bg-[hsl(224,54%,51%)]/10' : 'bg-muted'
                    )}>
                      <skill.icon className={cn(
                        'w-5 h-5',
                        skillLevel === skill.id ? 'text-[hsl(224,54%,51%)]' : 'text-muted-foreground'
                      )} />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-foreground">{skill.label}</div>
                      <div className="text-sm text-muted-foreground">{skill.description}</div>
                    </div>
                    {skillLevel === skill.id && (
                      <Check className="w-5 h-5 text-[hsl(224,54%,51%)] ml-auto" />
                    )}
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="grid grid-cols-3 gap-3">
                {PREFERENCES.map((pref) => (
                  <button
                    key={pref.id}
                    onClick={() => setPreference(pref.id)}
                    className={cn(
                      'flex flex-col items-center gap-2 p-4 rounded-lg border transition-all',
                      preference === pref.id
                        ? 'border-[hsl(224,54%,51%)] bg-[hsl(224,54%,51%)]/5'
                        : 'border-border hover:border-gray-300'
                    )}
                    data-testid={`button-pref-${pref.id}`}
                  >
                    <div className={cn(
                      'w-10 h-10 rounded-full flex items-center justify-center',
                      preference === pref.id ? 'bg-[hsl(224,54%,51%)]/10' : 'bg-muted'
                    )}>
                      {pref.id === 'b2b' && <Building2 className={cn('w-5 h-5', preference === pref.id ? 'text-[hsl(224,54%,51%)]' : 'text-muted-foreground')} />}
                      {pref.id === 'b2c' && <Users className={cn('w-5 h-5', preference === pref.id ? 'text-[hsl(224,54%,51%)]' : 'text-muted-foreground')} />}
                      {pref.id === 'either' && <Check className={cn('w-5 h-5', preference === pref.id ? 'text-[hsl(224,54%,51%)]' : 'text-muted-foreground')} />}
                    </div>
                    <div className="font-medium text-foreground">{pref.label}</div>
                    <div className="text-xs text-muted-foreground text-center">{pref.description}</div>
                  </button>
                ))}
              </div>
            )}

            {step === 3 && (
              <div className="flex flex-wrap gap-2">
                {MARKETS.map((market) => (
                  <button
                    key={market}
                    onClick={() => toggleMarket(market)}
                    className={cn(
                      'px-4 py-2 rounded-full border text-sm font-medium transition-all',
                      marketTags.includes(market)
                        ? 'border-[hsl(224,54%,51%)] bg-[hsl(224,54%,51%)] text-white'
                        : 'border-border hover:border-gray-300 text-foreground'
                    )}
                    data-testid={`button-market-${market.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {market}
                  </button>
                ))}
              </div>
            )}

            <div className="flex gap-3 mt-8">
              {step > 1 && (
                <Button
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  className="flex-1"
                  data-testid="button-back"
                >
                  Back
                </Button>
              )}
              <Button
                onClick={handleNext}
                disabled={!canProceed() || mutation.isPending}
                className={cn(
                  'bg-[hsl(224,54%,51%)] hover:bg-[hsl(224,54%,45%)]',
                  step === 1 ? 'w-full' : 'flex-1'
                )}
                data-testid="button-next"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : step === 3 ? (
                  'Complete Setup'
                ) : (
                  <>
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
