"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  
  // Scroll animations for each section
  const aboutSection = useScrollAnimation<HTMLElement>({ threshold: 0.2 })
  const divisionsSection = useScrollAnimation<HTMLElement>({ threshold: 0.1 })
  const valuesSection = useScrollAnimation<HTMLElement>({ threshold: 0.1 })
  const contactSection = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Acker Group SA (Pty) Ltd",
    "alternateName": "Acker Group",
    "url": "https://acker-group.com",
    "logo": "https://acker-group.com/logo.png",
    "description": "Private holding company based in South Africa, managing a diversified portfolio across technology, real estate & construction, and hospitality.",
    "email": "contact@acker-group.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ZA"
    },
    "sameAs": [
      "https://www.facebook.com/ackergroup",
      "https://www.instagram.com/ackergroup"
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "Acker Group SA (Pty) Ltd"
    },
    "subOrganization": [
      {
        "@type": "Organization",
        "name": "Acker Technologies",
        "description": "Technology & Innovation division"
      },
      {
        "@type": "Organization",
        "name": "Acker Properties",
        "description": "Real Estate & Construction division"
      },
      {
        "@type": "Organization",
        "name": "Acker Hospitality",
        "description": "Food & Leisure division"
      }
    ]
  }

  const divisions = [
    {
      name: 'Acker Technologies',
      description: 'Building scalable, intelligent, and user-focused technology that powers innovation and digital transformation.',
      industry: 'Technology & Innovation',
      icon: '💻',
      link: '/subsidiaries#technologies'
    },
    {
      name: 'Acker Properties',
      description: 'Designing, building, and maintaining exceptional spaces through property development, construction, and landscaping.',
      industry: 'Real Estate & Construction',
      icon: '🏗️',
      link: '/subsidiaries#properties'
    },
    {
      name: 'Acker Hospitality',
      description: 'Delivering memorable dining and leisure experiences through quality restaurants, catering, and lifestyle cafés.',
      industry: 'Food & Leisure',
      icon: '🍴',
      link: '/subsidiaries#hospitality'
    },
  ]

  const values = [
    {
      title: 'Integrity',
      description: 'Ethical decision-making at all levels',
      icon: '⚖️'
    },
    {
      title: 'Innovation',
      description: 'Continuous improvement and modernization',
      icon: '💡'
    },
    {
      title: 'Unity',
      description: 'Strong collaboration across subsidiaries',
      icon: '🤝'
    },
    {
      title: 'Sustainability',
      description: 'Long-term, responsible growth',
      icon: '🌱'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0D0D]">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Header />
      
      <main className="flex-1 bg-[#2A2A2A]">
        {/* Hero Section */}
        <section className="w-full relative overflow-hidden bg-[#2A2A2A] py-32 md:py-40">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#D4AF37] rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          
          <div className={`container mx-auto px-4 text-center relative z-10 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight font-montserrat">
              <span className="text-[#D4AF37]">Acker Group</span>
            </h1>
            <div className="w-32 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-[#E0E0E0] max-w-3xl mx-auto mb-12 font-light">
              An emerging innovation-driven holding company built on integrity, sustainability, and excellence.
            </p>
            <Link
              href="/subsidiaries"
              className="inline-block px-10 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg gold-glow transition uppercase tracking-wide"
            >
              Explore Our Divisions
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section 
          ref={aboutSection.ref}
          className={`w-full bg-[#2A2A2A] py-20 border-t border-[#D4AF37]/10 transition-all duration-700 ${
            aboutSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-bold text-white mb-6 font-montserrat">About Acker Group</h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
              <p className="text-lg text-[#E0E0E0] leading-relaxed">
                Acker Group is a private holding company based in South Africa, managing and growing a diversified portfolio 
                of subsidiaries through strategic leadership, financial stability, and cohesive branding. With investments across 
                <span className="font-semibold text-[#D4AF37]"> technology</span>, 
                <span className="font-semibold text-[#D4AF37]"> real estate & construction</span>, and 
                <span className="font-semibold text-[#D4AF37]"> hospitality</span>, 
                we build exceptional businesses that create lasting value for stakeholders, communities, and the economy.
              </p>
            </div>
          </div>
        </section>
        
        {/* Divisions Section */}
        <section 
          ref={divisionsSection.ref}
          className="w-full bg-[#2A2A2A] py-20 border-t border-[#D4AF37]/10"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className={`transition-all duration-700 ${
                divisionsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <h2 className="text-5xl font-bold text-center mb-4 text-white font-montserrat">Our Divisions</h2>
                <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-12"></div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {divisions.map((division, index) => (
                  <div
                    key={division.name}
                    className={`bg-[#1C1C1C] rounded-lg p-8 border-2 border-[#1C1C1C] gold-glow transition-all duration-700 group ${
                      divisionsSection.isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}
                    style={{ 
                      transitionDelay: divisionsSection.isVisible ? `${index * 150}ms` : '0ms'
                    }}
                  >
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{division.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-montserrat">{division.name}</h3>
                    <p className="text-[#E0E0E0] mb-4 leading-relaxed">{division.description}</p>
                    <span className="inline-block px-4 py-1 text-sm font-medium bg-[#D4AF37]/20 text-[#D4AF37] rounded-full border border-[#D4AF37]/30">
                      {division.industry}
                    </span>
                    <Link
                      href={division.link}
                      className="block mt-6 text-[#D4AF37] hover:text-white transition font-semibold"
                    >
                      Learn More →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Values Section */}
        <section 
          ref={valuesSection.ref}
          className="w-full bg-[#2A2A2A] py-20 border-t border-[#D4AF37]/10"
        >
          <div className="container mx-auto px-4">
            <div className={`transition-all duration-700 ${
              valuesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h2 className="text-5xl font-bold text-center mb-4 text-white font-montserrat">Vision & Values</h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-12"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`text-center p-8 bg-[#1C1C1C] rounded-lg border-2 border-[#1C1C1C] gold-glow transition-all duration-700 group ${
                    valuesSection.isVisible 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-90'
                  }`}
                  style={{ 
                    transitionDelay: valuesSection.isVisible ? `${index * 100}ms` : '0ms'
                  }}
                >
                  <div className="text-5xl mb-4 text-[#D4AF37] group-hover:scale-110 transition-transform">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-montserrat">{value.title}</h3>
                  <p className="text-[#E0E0E0] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          ref={contactSection.ref}
          className={`w-full bg-[#2A2A2A] py-20 border-t border-[#D4AF37]/20 transition-all duration-700 ${
            contactSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-bold text-white mb-6 font-montserrat">Partner With Acker Group</h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
              <p className="text-xl text-[#E0E0E0] mb-10 leading-relaxed">
                Join forces with a diversified holding company committed to excellence, 
                innovation, and sustainable growth across multiple industries.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link
                  href="/contact"
                  className="px-10 py-4 bg-[#D4AF37] text-[#1C1C1C] font-bold rounded-lg hover:bg-[#F5D45E] transition shadow-lg hover:shadow-2xl uppercase tracking-wide"
                >
                  Get In Touch
                </Link>
                <Link
                  href="/about"
                  className="px-10 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg gold-glow transition uppercase tracking-wide"
                >
                  Learn More
                </Link>
              </div>
              
              <div className="pt-8 border-t border-[#E0E0E0]/10">
                <p className="text-[#E0E0E0] mb-4">
                  <a href="mailto:contact@acker-group.com" className="text-[#D4AF37] hover:text-white transition font-semibold">
                    contact@acker-group.com
                  </a>
                </p>
                <div className="flex gap-6 justify-center text-[#E0E0E0]">
                  <a href="https://www.facebook.com/ackergroup" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition">
                    Facebook
                  </a>
                  <span className="text-[#E0E0E0]/30">|</span>
                  <a href="https://www.instagram.com/ackergroup" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
