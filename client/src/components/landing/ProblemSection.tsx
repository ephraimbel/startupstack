import { Card } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";
import type { LandingPageProblemSection } from "@shared/schema";

interface ProblemSectionProps {
  problem: LandingPageProblemSection;
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

export function ProblemSection({ problem }: ProblemSectionProps) {
  return (
    <section 
      id={problem.section_id} 
      className="py-24 px-6 bg-secondary/30"
      data-testid="section-problem"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span 
            className="text-sm font-mono text-muted-foreground uppercase tracking-wider"
            data-testid="text-problem-eyebrow"
          >
            {problem.eyebrow}
          </span>
          <h2 
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-foreground mt-4 mb-6"
            data-testid="text-problem-headline"
          >
            {problem.headline}
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-problem-description"
          >
            {problem.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problem.pain_points.map((point, index) => (
            <Card 
              key={index} 
              className="p-6"
              data-testid={`card-pain-point-${index}`}
            >
              <DynamicIcon name={point.icon} className="w-8 h-8 text-destructive mb-4" />
              <h3 className="font-medium text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </Card>
          ))}
        </div>
        
        {problem.stat_callout && (
          <div 
            className="text-center bg-background rounded-lg p-8 border"
            data-testid="stat-callout"
          >
            <span className="font-serif text-5xl md:text-6xl font-normal text-foreground">
              {problem.stat_callout.number}
            </span>
            <p className="text-lg text-muted-foreground mt-2">{problem.stat_callout.label}</p>
            {problem.stat_callout.source && (
              <p className="text-xs text-muted-foreground/60 mt-2 font-mono">{problem.stat_callout.source}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
