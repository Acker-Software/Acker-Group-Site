export const siteConfig = {
  name: "Acker Group",
  description: "South Africa's most trusted, innovation-driven holding company built on integrity, sustainability, and excellence",
  url: "https://acker-group.com",
  email: "contact@acker-group.com",
  location: "South Africa",
  links: {
    facebook: "https://www.facebook.com/ackergroup",
    instagram: "https://www.instagram.com/ackergroup",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Subsidiaries", href: "/subsidiaries" },
    { label: "Contact", href: "/contact" },
  ],
  subsidiaries: [
    { 
      name: "Acker Technologies", 
      href: "/subsidiaries#technologies",
      description: "Technology & Innovation",
    },
    { 
      name: "Acker Properties", 
      href: "/subsidiaries#properties",
      description: "Real Estate & Construction",
    },
    { 
      name: "Acker Hospitality", 
      href: "/subsidiaries#hospitality",
      description: "Food & Leisure",
    },
  ],
}

export type SiteConfig = typeof siteConfig
