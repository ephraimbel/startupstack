import { cn } from '@/lib/utils';

interface DemandBadgeProps {
  band: 'high' | 'medium' | 'low' | null | undefined;
  showLabel?: boolean;
  className?: string;
}

export function DemandBadge({ band, showLabel = true, className }: DemandBadgeProps) {
  if (!band) return null;
  
  const config = {
    high: {
      dotColor: 'bg-emerald-500',
      textColor: 'text-emerald-700 dark:text-emerald-400',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
      label: 'HIGH',
    },
    medium: {
      dotColor: 'bg-amber-500',
      textColor: 'text-amber-700 dark:text-amber-400',
      bgColor: 'bg-amber-50 dark:bg-amber-950/30',
      label: 'MEDIUM',
    },
    low: {
      dotColor: 'bg-gray-400',
      textColor: 'text-gray-600 dark:text-gray-400',
      bgColor: 'bg-gray-100 dark:bg-gray-800/50',
      label: 'LOW',
    },
  };

  const { dotColor, textColor, bgColor, label } = config[band];

  return (
    <div 
      className={cn(
        'inline-flex items-center gap-1.5 px-2 py-0.5 rounded font-mono text-xs',
        bgColor,
        textColor,
        className
      )}
      data-testid={`badge-demand-${band}`}
    >
      <span className={cn('w-1.5 h-1.5 rounded-full', dotColor)} />
      {showLabel && <span>{label}</span>}
    </div>
  );
}
