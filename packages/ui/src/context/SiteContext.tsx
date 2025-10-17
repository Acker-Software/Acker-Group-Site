"use client"

import { createContext, useContext, type PropsWithChildren } from "react"

interface SiteContextValue {
  id: string
  name: string
  description: string
  nav: Array<{ slug: string; label: string }>
}

const SiteContext = createContext<SiteContextValue | null>(null)

export const SiteProvider = ({ 
  siteId, 
  children 
}: PropsWithChildren<{ siteId: string }>) => {
  // Mock site data
  const siteData: SiteContextValue = {
    id: siteId,
    name: "Acker Group",
    description: "Building innovative solutions across multiple industries",
    nav: [
      { slug: "home", label: "Home" },
      { slug: "about", label: "About" },
      { slug: "subsidiaries", label: "Subsidiaries" },
      { slug: "contact", label: "Contact" },
    ],
  }

  return (
    <SiteContext.Provider value={siteData}>
      {children}
    </SiteContext.Provider>
  )
}

export const useSite = () => {
  const context = useContext(SiteContext)
  if (!context) {
    throw new Error("useSite must be used within a SiteProvider")
  }
  return context
}
