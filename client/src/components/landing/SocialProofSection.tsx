import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import * as LucideIcons from "lucide-react";
import type { LandingPageSocialProof } from "@shared/schema";

interface SocialProofSectionProps {
  socialProof: LandingPageSocialProof;
}

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const iconName = name.split('-').map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join('') as keyof typeof LucideIcons;
  
  const Icon = LucideIcons[iconName] as React.ComponentType<{ className?: string }>;
  
  if (!Icon) {
    return <LucideIcons.Shield className={className} />;
  }
  
  return <Icon className={className} />;
}

export function SocialProofSection({ socialProof }: SocialProofSectionProps) {
  return (
    <section 
      id={socialProof.section_id} 
      className="py-24 px-6"
      data-testid="section-social-proof"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span 
            className="text-sm font-mono text-muted-foreground uppercase tracking-wider"
            data-testid="text-proof-eyebrow"
          >
            {socialProof.eyebrow}
          </span>
          <h2 
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-foreground mt-4"
            data-testid="text-proof-headline"
          >
            {socialProof.headline}
          </h2>
        </div>
        
        {socialProof.stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {socialProof.stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center"
                data-testid={`stat-${index}`}
              >
                <span className="font-serif text-4xl md:text-5xl font-normal text-foreground">
                  {stat.number}
                </span>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                {stat.context && (
                  <p className="text-xs text-muted-foreground/60 mt-1">{stat.context}</p>
                )}
              </div>
            ))}
          </div>
        )}
        
        {socialProof.testimonials.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {socialProof.testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6"
                data-testid={`testimonial-${index}`}
              >
                <LucideIcons.Quote className="w-8 h-8 text-muted-foreground/30 mb-4" />
                <blockquote className="text-foreground mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm text-foreground">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                      {testimonial.company && `, ${testimonial.company}`}
                    </p>
                  </div>
                </div>
                {testimonial.result && (
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm font-medium text-primary">{testimonial.result}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        )}
        
        {socialProof.trust_badges && socialProof.trust_badges.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialProof.trust_badges.map((badge, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="px-4 py-2 text-sm"
                data-testid={`trust-badge-${index}`}
              >
                <DynamicIcon name={badge.icon} className="w-4 h-4 mr-2" />
                {badge.text}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
