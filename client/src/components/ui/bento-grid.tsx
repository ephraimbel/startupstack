import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./button";

type BentoGridProps = {
  children: ReactNode;
  className?: string;
};

type BentoCardProps = {
  name: string;
  className?: string;
  background: ReactNode;
  Icon: LucideIcon;
  description: string;
  href: string;
  cta: string;
};

const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[18rem] grid-cols-1 gap-4 md:grid-cols-2 lg:auto-rows-[20rem] lg:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[hsl(var(--startup-border-default))] bg-white/90 shadow-sm backdrop-blur-sm transition-all duration-300",
      "hover:-translate-y-1 hover:shadow-md hover:shadow-[hsl(var(--startup-ink))/0.06]",
      "dark:bg-background/60",
      className,
    )}
  >
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {background}
    </div>

    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-2 p-6 transition-all duration-300 group-hover:-translate-y-8">
      <Icon className="h-10 w-10 text-[hsl(var(--startup-accent))] transition-transform duration-300 ease-in-out group-hover:scale-90" />
      <h3 className="text-xl font-semibold text-[hsl(var(--startup-ink))]">
        {name}
      </h3>
      <p className="max-w-lg text-[hsl(var(--startup-text-secondary))]">
        {description}
      </p>
    </div>

    <div className="pointer-events-none z-10 flex w-full items-center p-4 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:translate-y-6 md:opacity-0">
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>

    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[hsl(var(--startup-accent))/0.0] via-transparent to-black/0 transition-all duration-300 group-hover:from-[hsl(var(--startup-accent))/0.05] group-hover:to-black/5" />
  </div>
);

export { BentoCard, BentoGrid };

