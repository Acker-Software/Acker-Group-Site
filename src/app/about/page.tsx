import type { Metadata } from 'next'
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: 'About Us - Acker Group',
  description: 'Learn more about Acker Group and our mission',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0D0D0D]">
      <Header />
      
      <main className="flex-1 bg-[#2A2A2A]">
        <div className="container mx-auto px-4 py-24">
          <h1 className="text-5xl font-bold text-white mb-6 text-center font-montserrat">About Acker Group</h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-16"></div>
        
        <div className="max-w-4xl mx-auto space-y-8 text-[#E0E0E0]">
          <div className="bg-[#1C1C1C] p-8 rounded-lg border border-[#D4AF37]/10">
            <h2 className="text-2xl font-bold text-white mb-4 font-montserrat">Who We Are</h2>
            <p className="text-lg leading-relaxed">
              Acker Group is a private holding company headquartered in South Africa, managing and growing 
              a diversified portfolio of subsidiaries through strategic leadership, financial stability, and 
              cohesive branding. We provide equity ownership, centralized finance, HR, marketing, investment, 
              compliance, and governance to ensure long-term strategic management across all our businesses.
            </p>
          </div>

          <div className="bg-[#1C1C1C] p-8 rounded-lg border border-[#D4AF37]/10">
            <h2 className="text-2xl font-bold text-white mb-4 font-montserrat">Our Location</h2>
            <p className="text-lg leading-relaxed">
              <strong className="text-[#D4AF37]">Head Office:</strong> South Africa<br />
              <strong className="text-[#D4AF37]">Email:</strong> <a href="mailto:contact@acker-group.com" className="text-[#D4AF37] hover:text-white transition">contact@acker-group.com</a><br />
              <strong className="text-[#D4AF37]">Website:</strong> <a href="https://acker-group.com" className="text-[#D4AF37] hover:text-white transition">https://acker-group.com</a>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-[#1C1C1C] p-8 rounded-lg border-2 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition">
              <div className="text-4xl mb-4 text-[#D4AF37]">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">Mission</h3>
              <p className="text-[#E0E0E0] leading-relaxed">
                To manage and grow a diversified portfolio of Acker subsidiaries through strategic 
                leadership, financial stability, and cohesive branding.
              </p>
            </div>
            <div className="bg-[#1C1C1C] p-8 rounded-lg border-2 border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition">
              <div className="text-4xl mb-4 text-[#D4AF37]">🔭</div>
              <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">Vision</h3>
              <p className="text-[#E0E0E0] leading-relaxed">
                To become South Africa's most trusted, innovation-driven holding company built on 
                integrity, sustainability, and excellence.
              </p>
            </div>
          </div>

          <div className="bg-[#1C1C1C] p-8 rounded-lg border border-[#D4AF37]/10 mt-8">
            <h2 className="text-2xl font-bold text-white mb-6 font-montserrat">Core Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-[#D4AF37] mb-2">Integrity</h4>
                <p className="text-[#E0E0E0]">Ethical decision-making at all levels</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#D4AF37] mb-2">Innovation</h4>
                <p className="text-[#E0E0E0]">Continuous improvement and modernization</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#D4AF37] mb-2">Unity</h4>
                <p className="text-[#E0E0E0]">Strong collaboration across subsidiaries</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#D4AF37] mb-2">Sustainability</h4>
                <p className="text-[#E0E0E0]">Long-term, responsible growth</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1C1C1C] p-8 rounded-lg border border-[#D4AF37]/10 mt-8">
            <h2 className="text-2xl font-bold text-white mb-4 font-montserrat">Functions</h2>
            <ul className="space-y-3 text-[#E0E0E0]">
              <li className="flex items-start">
                <span className="text-[#D4AF37] mr-3">•</span>
                <span>Equity ownership in all subsidiaries</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D4AF37] mr-3">•</span>
                <span>Centralized finance, HR, and marketing</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D4AF37] mr-3">•</span>
                <span>Investment, compliance, and governance</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D4AF37] mr-3">•</span>
                <span>Long-term strategic management</span>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
