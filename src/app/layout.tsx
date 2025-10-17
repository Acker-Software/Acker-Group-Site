import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://acker-group.com'),
  title: {
    default: 'Acker Group SA | Holding Company in South Africa - Technology, Real Estate & Hospitality',
    template: '%s | Acker Group SA'
  },
  description: 'Acker Group SA (Pty) Ltd is a private holding company in South Africa managing diversified investments across technology innovation, real estate & construction, and hospitality sectors. Building excellence through strategic leadership.',
  authors: [{ name: 'Acker Group SA (Pty) Ltd' }],
  creator: 'Acker Group SA (Pty) Ltd',
  publisher: 'Acker Group SA (Pty) Ltd',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://acker-group.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://acker-group.com',
    siteName: 'Acker Group SA',
    title: 'Acker Group SA | Holding Company in South Africa',
    description: 'Private holding company managing diversified investments across technology, real estate & construction, and hospitality in South Africa.',
    images: [
      {
        url: '/logo.png',
        width: 1920,
        height: 1080,
        alt: 'Acker Group SA Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acker Group SA | Holding Company in South Africa',
    description: 'Private holding company managing diversified investments across technology, real estate & construction, and hospitality.',
    images: ['/logo.png'],
  },
  category: 'business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
