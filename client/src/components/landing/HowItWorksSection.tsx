import type { LandingPageHowItWorks } from "@shared/schema";

interface HowItWorksSectionProps {
  howItWorks: LandingPageHowItWorks;
}

export function HowItWorksSection({ howItWorks }: HowItWorksSectionProps) {
  return (
    <section 
      id={howItWorks.section_id} 
      className="py-24 px-6 bg-secondary/30"
      data-testid="section-how-it-works"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span 
            className="text-sm font-mono text-muted-foreground uppercase tracking-wider"
            data-testid="text-hiw-eyebrow"
          >
            {howItWorks.eyebrow}
          </span>
          <h2 
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-foreground mt-4"
            data-testid="text-hiw-headline"
          >
            {howItWorks.headline}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {howItWorks.steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center"
              data-testid={`step-${step.number}`}
            >
              <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-2xl">{step.number}</span>
              </div>
              <h3 className="font-medium text-xl text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
