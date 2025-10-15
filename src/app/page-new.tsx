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
      name: 'Acker Technologies',
      description: 'Pioneering software solutions and digital transformation services for the modern enterprise.',
      industry: 'Technology',
      icon: '⚡',
      link: '/subsidiaries#technologies'
    },
    {
      name: 'Acker Properties',
      description: 'Strategic real estate development and property management across key markets.',
      industry: 'Real Estate',
      icon: '🏛️',
      link: '/subsidiaries#properties'
    },
    {
      name: 'Acker Hospitality',
      description: 'Premium hospitality experiences and venue management services.',
      industry: 'Hospitality',
      icon: '✨',
      link: '/subsidiaries#hospitality'
    },
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'Driving progress through cutting-edge solutions and forward thinking',
      icon: '🚀'
    },
    {
      title: 'Integrity',
      description: 'Building trust through transparency and ethical business practices',
      icon: '🛡️'
    },
    {
      title: 'Growth',
      description: 'Creating sustainable value for stakeholders and communities',
      icon: '📈'
    },
    {
      title: 'Sustainability',
      description: 'Committed to responsible business and environmental stewardship',
      icon: '🌱'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-navy">
      <Header />
      
      <main className="flex-1">
        {/* HERO SECTION - with subtle animation */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A1D37] via-[#0d2442] to-[#0A1D37]">
          {/* Animated background particles */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-turquoise rounded-full animate-pulse" style={{animationDelay: '0s'}}></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gold rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-turquoise rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-gold rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          <div className={`container mx-auto px-4 text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-['Montserrat'] text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              The <span className="text-turquoise">Acker</span> Group
            </h1>
            <p className="text-2xl md:text-3xl text-silver mb-12 font-light">
              Building a future across industries
            </p>
            <Link
              href="/subsidiaries"
              className="inline-block px-10 py-4 bg-turquoise text-navy font-semibold text-lg rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,196,179,0.4)] hover:scale-105"
            >
              Explore Our Divisions
            </Link>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="w-full py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-['Montserrat'] text-5xl font-bold text-navy mb-8">
                A Diversified Holding Company
              </h2>
              <div className="w-24 h-1 bg-turquoise mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                The Acker Group is a global holding company strategically invested across multiple industries. 
                We build and nurture businesses that drive innovation, create value, and shape the future.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With a focus on <span className="text-turquoise font-semibold">technology</span>, 
                <span className="text-turquoise font-semibold"> real estate</span>, and 
                <span className="text-turquoise font-semibold"> hospitality</span>, 
                we combine deep industry expertise with a commitment to operational excellence and sustainable growth.
              </p>
            </div>
          </div>
        </section>

        {/* DIVISIONS SECTION */}
        <section className="w-full py-24 bg-gradient-to-b from-[#0A1D37] to-[#0d2442]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-['Montserrat'] text-5xl font-bold text-white mb-4">
                Our Divisions
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {divisions.map((division, index) => (
                <div
                  key={division.name}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-silver/20 hover:border-turquoise/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,196,179,0.2)] hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{transitionDelay: `${index * 150}ms`}}
                >
                  <div className="text-6xl mb-6">{division.icon}</div>
                  <h3 className="font-['Montserrat'] text-2xl font-bold text-white mb-3">
                    {division.name}
                  </h3>
                  <p className="text-sm text-turquoise font-semibold mb-4 uppercase tracking-wider">
                    {division.industry}
                  </p>
                  <p className="text-silver leading-relaxed mb-6">
                    {division.description}
                  </p>
                  <Link
                    href={division.link}
                    className="inline-block text-turquoise font-semibold hover:text-gold transition-colors duration-300"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VISION & VALUES SECTION */}
        <section className="w-full py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-['Montserrat'] text-5xl font-bold text-navy mb-4">
                Vision & Values
              </h2>
              <div className="w-24 h-1 bg-turquoise mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our core principles guide every decision and drive our commitment to excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="text-center p-8 rounded-xl bg-gray-50 border border-gray-200 hover:border-turquoise/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="font-['Montserrat'] text-2xl font-bold text-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT/CTA SECTION */}
        <section className="w-full py-24 bg-gradient-to-br from-[#0A1D37] via-[#0d2442] to-[#0A1D37]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-['Montserrat'] text-5xl font-bold text-white mb-6">
                Partner With Us
              </h2>
              <p className="text-xl text-silver mb-10 max-w-2xl mx-auto">
                Join us in building the future. Whether you're an investor, partner, or prospective team member, 
                we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-10 py-4 bg-turquoise text-navy font-semibold text-lg rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,196,179,0.4)]"
                >
                  Get In Touch
                </Link>
                <Link
                  href="/about"
                  className="px-10 py-4 bg-transparent border-2 border-silver text-white font-semibold text-lg rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
