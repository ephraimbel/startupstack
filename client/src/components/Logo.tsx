import { Link } from 'wouter';

interface LogoProps {
  className?: string;
  linkTo?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className, linkTo = '/', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const logoElement = (
    <span 
      className={`font-serif font-medium tracking-tight text-foreground ${sizeClasses[size]} ${className || ''}`}
      data-testid="logo"
    >
      StartupStack
    </span>
  );

  if (linkTo) {
    return (
      <Link href={linkTo}>
        <span className="cursor-pointer inline-block">
          {logoElement}
        </span>
      </Link>
    );
  }

  return logoElement;
}
