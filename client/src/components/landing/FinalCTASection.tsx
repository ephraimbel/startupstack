import { Button } from "@/components/ui/button";
import type { LandingPageFinalCTA } from "@shared/schema";

interface FinalCTASectionProps {
  finalCta: LandingPageFinalCTA;
}

export function FinalCTASection({ finalCta }: FinalCTASectionProps) {
  return (
    <section 
      id={finalCta.section_id} 
      className="py-24 px-6 bg-foreground text-background"
      data-testid="section-final-cta"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight mb-6"
          data-testid="text-cta-headline"
        >
          {finalCta.headline}
        </h2>
        
        <p 
          className="text-lg text-background/70 mb-8 max-w-xl mx-auto"
          data-testid="text-cta-subheadline"
        >
          {finalCta.subheadline}
        </p>
        
        <Button 
          size="lg" 
          variant="secondary"
          className="px-8 py-6 text-lg"
          data-testid="button-final-cta"
        >
          {finalCta.cta_text}
        </Button>
        
        {finalCta.trust_element && (
          <p 
            className="text-sm text-background/60 mt-4 font-mono"
            data-testid="text-cta-trust"
          >
            {finalCta.trust_element}
          </p>
        )}
      </div>
    </section>
  );
}
