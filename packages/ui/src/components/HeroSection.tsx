import type { PropsWithChildren } from "react"

interface HeroSectionProps extends PropsWithChildren {
  title?: string
  subtitle?: string
  className?: string
}

export const HeroSection = ({ title, subtitle, children, className }: HeroSectionProps) => (
  <section className={`relative py-20 px-4 text-center ${className || ''}`}>
    <div className="container mx-auto max-w-4xl">
      {title && (
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
      )}
      {subtitle && (
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  </section>
)
