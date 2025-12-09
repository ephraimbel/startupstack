import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DemandBadge } from './demand-badge';
import { Lock, Bookmark, BookmarkCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Idea } from '@shared/schema';
import { Link } from 'wouter';

type IdeaCardVariant = 'full' | 'preview' | 'locked';

interface IdeaCardProps {
  idea: Idea;
  variant?: IdeaCardVariant;
  onSave?: (id: string) => void;
  isSaved?: boolean;
  linkTo?: string;
  className?: string;
}

export function IdeaCard({ 
  idea, 
  variant = 'preview', 
  onSave, 
  isSaved = false,
  linkTo,
  className 
}: IdeaCardProps) {
  const isLocked = variant === 'locked';
  
  const cardContent = (
    <Card 
      className={cn(
        'group relative bg-white dark:bg-card border border-border transition-all duration-150',
        'hover:border-gray-300 dark:hover:border-gray-600',
        'hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]',
        isLocked && 'overflow-hidden',
        className
      )}
      data-testid={`card-idea-${idea.id}`}
    >
      <CardHeader className="flex flex-row items-start justify-between gap-2 pb-2">
        <div className="flex-1 min-w-0">
          <h3 className={cn(
            'font-serif text-lg font-medium text-foreground leading-tight',
            isLocked && 'blur-[2px]'
          )}>
            {idea.title}
          </h3>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <DemandBadge band={idea.demandBand as 'high' | 'medium' | 'low'} />
          {onSave && !isLocked && (
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onSave(idea.id);
              }}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1"
              data-testid={`button-save-idea-${idea.id}`}
            >
              {isSaved ? (
                <BookmarkCheck className="w-4 h-4 text-primary" />
              ) : (
                <Bookmark className="w-4 h-4 text-muted-foreground hover:text-primary" />
              )}
            </button>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className={cn(
          'text-sm text-muted-foreground line-clamp-2 mb-3',
          isLocked && 'blur-[3px]'
        )}>
          {idea.oneLiner}
        </p>
        
        {variant === 'full' && !isLocked && (
          <div className="space-y-3 mt-4 pt-4 border-t border-border">
            <div>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wide">Problem</span>
              <p className="text-sm text-foreground mt-1">{idea.problem}</p>
            </div>
            <div>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wide">Target Customer</span>
              <p className="text-sm text-foreground mt-1">{idea.targetCustomer}</p>
            </div>
          </div>
        )}
        
        {idea.tags && idea.tags.length > 0 && (
          <div className={cn(
            'flex flex-wrap gap-1.5 mt-3',
            isLocked && 'blur-[2px]'
          )}>
            {idea.tags.slice(0, 3).map((tag, i) => (
              <Badge 
                key={i} 
                variant="secondary" 
                className="text-xs font-mono px-2 py-0"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      
      {isLocked && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-[1px]">
          <Lock className="w-6 h-6 text-muted-foreground mb-2" />
          <span className="text-sm font-medium text-foreground">Sign up to view</span>
        </div>
      )}
    </Card>
  );

  if (linkTo && !isLocked) {
    return (
      <Link href={linkTo} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
