import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Shield } from "lucide-react";
import type { LandingPagePricing } from "@shared/schema";

interface PricingSectionProps {
  pricing: LandingPagePricing;
}

export function PricingSection({ pricing }: PricingSectionProps) {
  return (
    <section 
      id={pricing.section_id} 
      className="py-24 px-6 bg-secondary/30"
      data-testid="section-pricing"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span 
            className="text-sm font-mono text-muted-foreground uppercase tracking-wider"
            data-testid="text-pricing-eyebrow"
          >
            {pricing.eyebrow}
          </span>
          <h2 
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-foreground mt-4 mb-4"
            data-testid="text-pricing-headline"
          >
            {pricing.headline}
          </h2>
          {pricing.subheadline && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {pricing.subheadline}
            </p>
          )}
        </div>
        
        <div className={`grid grid-cols-1 gap-6 ${pricing.plans.length === 3 ? 'md:grid-cols-3' : pricing.plans.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'max-w-md mx-auto'}`}>
          {pricing.plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 relative ${plan.highlighted ? 'border-primary ring-2 ring-primary/20' : ''}`}
              data-testid={`pricing-plan-${index}`}
            >
              {plan.badge && (
                <Badge 
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                  data-testid={`badge-plan-${index}`}
                >
                  {plan.badge}
                </Badge>
              )}
              <div className="text-center mb-6">
                <h3 className="font-medium text-xl text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-serif text-4xl text-foreground">{plan.price}</span>
                  {plan.price_detail && (
                    <span className="text-muted-foreground">{plan.price_detail}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full" 
                variant={plan.highlighted ? "default" : "outline"}
                data-testid={`button-plan-${index}`}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
        
        {pricing.guarantee && (
          <div 
            className="max-w-2xl mx-auto mt-12 text-center p-6 bg-background rounded-lg border"
            data-testid="pricing-guarantee"
          >
            <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
            <h4 className="font-medium text-lg text-foreground mb-2">{pricing.guarantee.headline}</h4>
            <p className="text-muted-foreground">{pricing.guarantee.description}</p>
          </div>
        )}
        
        {pricing.pricing_note && (
          <p className="text-center text-sm text-muted-foreground mt-8">
            {pricing.pricing_note}
          </p>
        )}
      </div>
    </section>
  );
}
