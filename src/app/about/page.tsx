import type { Metadata } from 'next'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: 'About Us - Acker Group',
  description: 'Learn more about Acker Group and our mission',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-24">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">About Acker Group</h1>
        
        <div className="max-w-3xl mx-auto space-y-6 text-slate-300">
          <p className="text-lg">
            Acker Group is a leading conglomerate of innovative companies, each dedicated to 
            excellence in their respective industries.
          </p>
          
          <p>
            Founded with a vision to create lasting value through strategic investments and 
            operational excellence, we have grown into a diverse portfolio of businesses that 
            share our commitment to innovation, quality, and sustainable growth.
          </p>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-slate-800/50">
              <h3 className="text-2xl font-bold text-white mb-2">Mission</h3>
              <p className="text-sm text-slate-400">
                To build and nurture exceptional businesses that create value for all stakeholders
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-slate-800/50">
              <h3 className="text-2xl font-bold text-white mb-2">Vision</h3>
              <p className="text-sm text-slate-400">
                To be a premier holding company recognized for operational excellence
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-slate-800/50">
              <h3 className="text-2xl font-bold text-white mb-2">Values</h3>
              <p className="text-sm text-slate-400">
                Innovation, integrity, excellence, and sustainable growth
              </p>
            </div>
          </div>
        </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
