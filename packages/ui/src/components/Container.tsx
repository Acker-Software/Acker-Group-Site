import type { PropsWithChildren } from "react"
import { cn } from "../utils/cn"

interface ContainerProps extends PropsWithChildren {
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => (
  <div className={cn("container mx-auto px-4 max-w-6xl", className)}>
    {children}
  </div>
)
