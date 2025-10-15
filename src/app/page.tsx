"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const divisions = [
    {
      name: 'Acker Software',
      description: 'Cutting-edge software solutions and digital innovation for enterprise clients worldwide.',
      industry: 'Technology',
      icon: '💻',
      link: '/subsidiaries#software'
    },
    {
      name: 'Acker Properties',
      description: 'Strategic real estate development and property management across premier markets.',
      industry: 'Real Estate',
      icon: '�',
      link: '/subsidiaries#properties'
    },
    {
      name: 'Acker Apparel',
      description: 'Premium fashion and lifestyle brands with a commitment to quality and sustainability.',
      industry: 'Apparel',
      icon: '👔',
      link: '/subsidiaries#apparel'
    },
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'Pioneering new solutions and embracing technological advancement',
      icon: '�'
    },
    {
      title: 'Integrity',
      description: 'Upholding the highest standards of ethics and transparency',
      icon: '⚖️'
    },
    {
      title: 'Growth',
      description: 'Building sustainable value for all stakeholders',
      icon: '📈'
    },
    {
      title: 'Sustainability',
      description: 'Committed to environmental and social responsibility',
      icon: '�'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0D0D]">
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
              The <span className="text-[#D4AF37]">Acker Group</span>
            </h1>
            <div className="w-32 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-[#E0E0E0] max-w-3xl mx-auto mb-12 font-light">
              Building a future across industries.
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
        <section className="w-full bg-[#2A2A2A] py-20 border-t border-[#D4AF37]/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-bold text-white mb-6 font-montserrat">About The Acker Group</h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
              <p className="text-lg text-[#E0E0E0] leading-relaxed">
                The Acker Group is a diversified holding company with strategic investments across 
                <span className="font-semibold text-[#D4AF37]"> technology</span>, 
                <span className="font-semibold text-[#D4AF37]"> real estate</span>, and 
                <span className="font-semibold text-[#D4AF37]"> apparel</span>. 
                We build, manage, and grow exceptional businesses that create lasting value for stakeholders, 
                communities, and the global economy. Our commitment to excellence drives every decision we make.
              </p>
            </div>
          </div>
        </section>
        
        {/* Divisions Section */}
        <section className="w-full bg-[#2A2A2A] py-20 border-t border-[#D4AF37]/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-bold text-center mb-4 text-white font-montserrat">Our Divisions</h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-12"></div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {divisions.map((division, index) => (
                  <div
                    key={division.name}
                    className="bg-[#1C1C1C] rounded-lg p-8 border-2 border-[#1C1C1C] gold-glow transition-all group"
                    style={{ animationDelay: `${index * 0.2}s` }}
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
        <section className="w-full bg-[#2A2A2A] py-20 border-t border-[#D4AF37]/10">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-4 text-white font-montserrat">Vision & Values</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="text-center p-8 bg-[#1C1C1C] rounded-lg border-2 border-[#1C1C1C] gold-glow transition-all group"
                  style={{ animationDelay: `${index * 0.15}s` }}
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
        <section className="w-full bg-[#2A2A2A] py-20 border-t border-[#D4AF37]/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-bold text-white mb-6 font-montserrat">Partner With Us</h2>
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
                  <a href="https://www.linkedin.com/company/acker-group" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition">
                    LinkedIn
                  </a>
                  <span className="text-[#E0E0E0]/30">|</span>
                  <a href="https://www.twitter.com/acker-group" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition">
                    Twitter
                  </a>
                  <span className="text-[#E0E0E0]/30">|</span>
                  <a href="https://www.instagram.com/acker-group" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition">
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
