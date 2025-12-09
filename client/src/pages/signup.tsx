import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useLocation } from 'wouter';
import { useAuth } from '@/lib/auth';
import { useToast } from '@/hooks/use-toast';
import { signupSchema } from '@shared/schema';
import { z } from 'zod';
import { Loader2, Check } from 'lucide-react';
import { Logo } from '@/components/Logo';

export default function Signup() {
  const [, setLocation] = useLocation();
  const { signup } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState<{ username?: string; email?: string; password?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      const validated = signupSchema.parse(formData);
      setIsLoading(true);
      await signup(validated.username, validated.email, validated.password);
      toast({ title: 'Account created!' });
      setLocation('/onboarding');
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: 'Signup failed',
          description: 'An account with this email may already exist',
          variant: 'destructive',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    'Browse 100+ startup ideas',
    'Generate 30 ideas per month',
    'Get 2 execution plans',
    'Save your favorite ideas',
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--startup-bg-primary))] flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo size="md" />
          </div>
        </div>
      </header>

      {/* Signup Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
          {/* Benefits */}
          <div className="hidden md:flex flex-col justify-center">
            <h2 className="font-serif text-3xl font-medium text-[hsl(var(--startup-ink))] mb-4">
              Start building your next startup today
            </h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of founders who use StartupStack to find and validate their next big idea.
            </p>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-500" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <Card className="bg-white border-border">
            <CardHeader className="text-center">
              <CardTitle className="font-serif text-2xl">Create your account</CardTitle>
              <CardDescription>Free forever, no credit card required</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="johndoe"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className={errors.username ? 'border-red-500' : ''}
                    data-testid="input-username"
                  />
                  {errors.username && (
                    <p className="text-sm text-red-500">{errors.username}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={errors.email ? 'border-red-500' : ''}
                    data-testid="input-email"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="At least 6 characters"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className={errors.password ? 'border-red-500' : ''}
                    data-testid="input-password"
                  />
                  {errors.password && (
                    <p className="text-sm text-red-500">{errors.password}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[hsl(224,54%,51%)] hover:bg-[hsl(224,54%,45%)]"
                  disabled={isLoading}
                  data-testid="button-signup"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    'Create account'
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <Link href="/login">
                    <span className="text-[hsl(224,54%,51%)] hover:underline cursor-pointer" data-testid="link-login">
                      Log in
                    </span>
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
