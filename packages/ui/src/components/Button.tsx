import type { ButtonHTMLAttributes } from "react";
import { cn } from "../utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export const Button = ({ variant = "primary", className, ...props }: ButtonProps) => (
  <button
    {...props}
    className={cn(
      "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      variant === "primary"
        ? "bg-accent text-background hover:opacity-90 focus-visible:ring-accent/50"
        : "border border-foreground/20 bg-transparent text-foreground hover:border-accent hover:text-accent focus-visible:ring-accent/30",
      className
    )}
  />
);
