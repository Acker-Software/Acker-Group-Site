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
      id: 'technologies',
      name: 'Acker Technologies',
      tagline: 'Technology & Innovation',
      description: 'Building scalable, intelligent, and user-focused technology that powers innovation and digital transformation across industries.',
      services: ['Website & app development', 'Software tools and SaaS products', 'IT consulting and automation'],
      icon: '💻',
    },
    {
      id: 'properties',
      name: 'Acker Properties',
      tagline: 'Real Estate & Construction',
      description: 'Designing, building, and maintaining exceptional spaces through property development, construction, and landscaping services.',
      services: ['Residential & commercial construction', 'Property development', 'Landscaping and outdoor design'],
      icon: '🏗️',
    },
    {
      id: 'hospitality',
      name: 'Acker Hospitality',
      tagline: 'Food & Leisure',
      description: 'Delivering memorable dining and leisure experiences through quality restaurants, catering, and lifestyle cafés.',
      services: ['Restaurant operations', 'Catering services', 'Café and lifestyle concepts'],
      icon: '🍴',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0D0D]">
      <Header />
      
      <main className="flex-1 bg-[#2A2A2A]">
        <div className="container mx-auto px-4 py-24">
          <h1 className="text-5xl font-bold text-white mb-6 text-center font-montserrat">Our Subsidiaries</h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          <p className="text-xl text-[#E0E0E0] text-center max-w-2xl mx-auto mb-16">
            Discover the diverse portfolio of companies that make up the Acker Group ecosystem
          </p>
        
        <div className="max-w-5xl mx-auto space-y-12">
          {subsidiaries.map((subsidiary) => (
            <div
              key={subsidiary.id}
              id={subsidiary.id}
              className="bg-[#1C1C1C] rounded-lg p-10 border-2 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{subsidiary.icon}</div>
                  <div>
                    <h2 className="text-3xl font-bold text-white font-montserrat">{subsidiary.name}</h2>
                    <span className="text-[#D4AF37] font-semibold">{subsidiary.tagline}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-lg text-[#E0E0E0] leading-relaxed">{subsidiary.description}</p>
              </div>

              {/* Services */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-4 font-montserrat">Services</h3>
                <ul className="space-y-3">
                  {subsidiary.services.map((service, index) => (
                    <li key={index} className="flex items-start text-[#E0E0E0]">
                      <span className="text-[#D4AF37] mr-3 text-xl">→</span>
                      <span className="text-lg">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
