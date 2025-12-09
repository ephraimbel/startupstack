import { Card } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";
import type { LandingPageSolutionSection } from "@shared/schema";

interface SolutionSectionProps {
  solution: LandingPageSolutionSection;
}

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const iconName = name.split('-').map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join('') as keyof typeof LucideIcons;
  
  const Icon = LucideIcons[iconName] as React.ComponentType<{ className?: string }>;
  
  if (!Icon) {
    return <LucideIcons.HelpCircle className={className} />;
  }
  
  return <Icon className={className} />;
}

export function SolutionSection({ solution }: SolutionSectionProps) {
  return (
    <section 
      id={solution.section_id} 
      className="py-24 px-6"
      data-testid="section-solution"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span 
            className="text-sm font-mono text-muted-foreground uppercase tracking-wider"
            data-testid="text-solution-eyebrow"
          >
            {solution.eyebrow}
          </span>
          <h2 
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-foreground mt-4 mb-6"
            data-testid="text-solution-headline"
          >
            {solution.headline}
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-solution-description"
          >
            {solution.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solution.features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover-elevate"
              data-testid={`card-feature-${index}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <DynamicIcon name={feature.icon} className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
