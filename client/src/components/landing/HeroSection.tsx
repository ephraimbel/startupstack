import { Button } from "@/components/ui/button";
import type { LandingPageHero } from "@shared/schema";

interface HeroSectionProps {
  hero: LandingPageHero;
  productName: string;
}

export function HeroSection({ hero, productName }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-24 px-6" data-testid="section-hero">
      <div className="max-w-4xl mx-auto text-center">
        <h1 
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-foreground mb-6"
          data-testid="text-hero-headline"
        >
          {hero.headline}
        </h1>
        
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          data-testid="text-hero-subheadline"
        >
          {hero.subheadline}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex flex-col items-center">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg"
              data-testid="button-hero-cta-primary"
            >
              {hero.cta_primary.text}
            </Button>
            {hero.cta_primary.subtext && (
              <span className="text-sm text-muted-foreground mt-2" data-testid="text-hero-cta-subtext">
                {hero.cta_primary.subtext}
              </span>
            )}
          </div>
          
          {hero.cta_secondary && (
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg"
              data-testid="button-hero-cta-secondary"
            >
              {hero.cta_secondary.text}
            </Button>
          )}
        </div>
        
        {hero.social_proof_snippet && (
          <p 
            className="text-sm text-muted-foreground font-mono"
            data-testid="text-hero-social-proof"
          >
            {hero.social_proof_snippet}
          </p>
        )}
      </div>
    </section>
  );
}
