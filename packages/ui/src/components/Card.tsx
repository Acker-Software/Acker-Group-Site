import type { PropsWithChildren } from "react";
import { cn } from "../utils/cn";

type CardProps = PropsWithChildren<{
  title?: string;
  description?: string;
  className?: string;
}>;

export const Card = ({ title, description, children, className }: CardProps) => (
  <div className={cn("rounded-2xl border border-white/10 bg-surface/80 p-6 backdrop-blur transition hover:border-accent/60", className)}>
    {title && <h3 className="text-lg font-semibold text-foreground">{title}</h3>}
    {description && <p className="mt-2 text-sm text-foreground/70">{description}</p>}
    {children}
  </div>
);
