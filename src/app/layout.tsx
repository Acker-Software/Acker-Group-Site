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
  title: 'Acker Group - South Africa\'s Innovation-Driven Holding Company',
  description: 'Private holding company based in South Africa, managing a diversified portfolio across technology, real estate & construction, and hospitality. Built on integrity, sustainability, and excellence.',
  keywords: ['Acker Group', 'Acker Group SA', 'holding company', 'South Africa', 'technology', 'real estate', 'hospitality', 'innovation'],
  authors: [{ name: 'Acker Group' }],
  openGraph: {
    title: 'Acker Group',
    description: 'South Africa\'s most trusted, innovation-driven holding company',
    url: 'https://acker-group.com',
    siteName: 'Acker Group',
    type: 'website',
  },
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
