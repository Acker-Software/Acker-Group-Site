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
  title: 'The Acker Group - Building a Future Across Industries',
  description: 'A diversified holding company with strategic investments in technology, real estate, and apparel. Committed to excellence, innovation, and sustainable growth.',
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
