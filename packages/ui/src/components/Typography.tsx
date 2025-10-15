import type { PropsWithChildren } from "react"
import { cn } from "../utils/cn"

interface TypographyProps extends PropsWithChildren {
  variant?: "h1" | "h2" | "h3" | "h4" | "p" | "small"
  className?: string
}

export const Typography = ({ variant = "p", children, className }: TypographyProps) => {
  const classes = {
    h1: "text-4xl md:text-5xl font-bold text-white",
    h2: "text-3xl md:text-4xl font-bold text-white",
    h3: "text-2xl md:text-3xl font-semibold text-white",
    h4: "text-xl md:text-2xl font-semibold text-white",
    p: "text-base text-slate-300",
    small: "text-sm text-slate-400",
  }

  const Component = variant === "p" || variant === "small" ? "p" : variant

  return (
    <Component className={cn(classes[variant], className)}>
      {children}
    </Component>
  )
}
