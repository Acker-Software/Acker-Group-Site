// Mock config to satisfy UI package imports
export type SiteId = string
export type PageSlug = string

export const baseBrand = {
  footer: {
    legal: "© 2025 Acker Group. All rights reserved.",
    ecosystem: "Part of the Acker Group ecosystem",
  },
}

export const coreNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/subsidiaries", label: "Subsidiaries" },
  { href: "/contact", label: "Contact" },
]

export const getSite = (siteId: SiteId) => ({
  id: siteId,
  name: "Acker Group",
  description: "Building innovative solutions across multiple industries",
})

export const getSiteMetadata = (siteId: SiteId) => ({
  title: "Acker Group",
  description: "Building innovative solutions across multiple industries",
})

export const getPageMetadata = (siteId: SiteId, pageSlug: PageSlug) => ({
  title: `${pageSlug} - Acker Group`,
  description: `${pageSlug} page`,
})

export const getSiteRoutes = (siteId: SiteId) => [
  "home",
  "about",
  "subsidiaries",
  "contact",
]
