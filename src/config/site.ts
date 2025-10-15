export const siteConfig = {
  name: "Acker Group",
  description: "Leading group of companies delivering innovative solutions across multiple industries",
  url: "https://acker-group.com",
  links: {
    github: "https://github.com/Acker-Software",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Subsidiaries", href: "/subsidiaries" },
    { label: "Contact", href: "/contact" },
  ],
}

export type SiteConfig = typeof siteConfig
