import type { Metadata } from 'next'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: 'Our Subsidiaries - Acker Group',
  description: 'Explore the companies within the Acker Group portfolio',
}

export default function SubsidiariesPage() {
  const subsidiaries = [
    {
      name: 'Acker Software',
      description: 'Software development and technology solutions',
      industry: 'Technology',
    },
    {
      name: 'Acker Consulting',
      description: 'Strategic business consulting and advisory services',
      industry: 'Consulting',
    },
    {
      name: 'Acker Ventures',
      description: 'Investment and venture capital arm',
      industry: 'Finance',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-24">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">Our Subsidiaries</h1>
        <p className="text-xl text-slate-300 text-center max-w-2xl mx-auto mb-16">
          Discover the diverse portfolio of companies that make up the Acker Group ecosystem
        </p>
        
        <div className="max-w-4xl mx-auto grid gap-8">
          {subsidiaries.map((subsidiary) => (
            <div
              key={subsidiary.name}
              className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 hover:border-slate-600 transition"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">{subsidiary.name}</h2>
                <span className="px-3 py-1 text-xs font-medium bg-blue-600/20 text-blue-400 rounded-full">
                  {subsidiary.industry}
                </span>
              </div>
              <p className="text-slate-400">{subsidiary.description}</p>
            </div>
          ))}
        </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
