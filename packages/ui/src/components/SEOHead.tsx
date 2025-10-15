import type { Metadata } from "next"

interface SEOHeadProps {
  title: string
  description: string
  url?: string
  image?: string
}

export function generateSEOMetadata({
  title,
  description,
  url,
  image,
}: SEOHeadProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: image ? [{ url: image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
    },
  }
}

// Legacy export for backward compatibility
export const SEOHead = generateSEOMetadata
