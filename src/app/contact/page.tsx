"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { useState, FormEvent } from "react"
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const autoResponseTemplateId = process.env.NEXT_PUBLIC_EMAILJS_AUTORESPONSE_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey || 
          serviceId === 'YOUR_SERVICE_ID' || 
          templateId === 'YOUR_TEMPLATE_ID' || 
          publicKey === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS is not configured. Please check the EMAILJS_SETUP.md file for setup instructions.')
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'New Contact Form Submission',
        message: formData.message,
        to_email: 'contact@acker-group.com'
      }

      // Send email to you (admin notification)
      const adminResponse = await emailjs.send(serviceId, templateId, templateParams, publicKey)
      console.log('Admin notification sent:', adminResponse)

      // Send auto-response to the user (if template is configured)
      if (autoResponseTemplateId && autoResponseTemplateId !== 'your_autoresponse_template_id_here') {
        try {
          const userResponse = await emailjs.send(serviceId, autoResponseTemplateId, templateParams, publicKey)
          console.log('Auto-response sent:', userResponse)
        } catch (autoResponseError) {
          // Don't fail the whole form if auto-response fails
          console.warn('Auto-response failed (but main email sent):', autoResponseError)
        }
      }
      
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error: any) {
      setStatus('error')
      
      // Better error messages
      let errorMsg = 'Failed to send message. Please try again.'
      
      if (error.text) {
        errorMsg = `EmailJS Error: ${error.text}`
      } else if (error.message) {
        errorMsg = error.message
      }
      
      setErrorMessage(errorMsg)
      console.error('EmailJS error details:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <div className="flex flex-col min-h-screen bg-[#0D0D0D]">
      <Header />
      
      <main className="flex-1 bg-[#2A2A2A]">
        <div className="container mx-auto px-4 py-24">
          <h1 className="text-5xl font-bold text-white mb-6 text-center font-montserrat">Contact Us</h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          <p className="text-xl text-[#E0E0E0] text-center max-w-2xl mx-auto mb-16">
            Get in touch with Acker Group. We're here to discuss partnerships, investments, and opportunities.
          </p>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-[#1C1C1C] p-8 rounded-lg border border-[#D4AF37]/10">
              <h2 className="text-2xl font-bold text-white mb-6 font-montserrat">Get In Touch</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">Email</h3>
                  <a href="mailto:contact@acker-group.com" className="text-[#E0E0E0] hover:text-[#D4AF37] transition text-lg">
                    contact@acker-group.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">Location</h3>
                  <p className="text-[#E0E0E0] text-lg">South Africa</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">Website</h3>
                  <a href="https://acker-group.com" className="text-[#E0E0E0] hover:text-[#D4AF37] transition text-lg">
                    acker-group.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#1C1C1C] p-8 rounded-lg border border-[#D4AF37]/10">
              <h2 className="text-2xl font-bold text-white mb-4 font-montserrat">Business Hours</h2>
              <div className="space-y-2 text-[#E0E0E0]">
                <p><span className="text-[#D4AF37] font-semibold">Monday - Friday:</span> 9:00 AM - 5:00 PM SAST</p>
                <p><span className="text-[#D4AF37] font-semibold">Saturday - Sunday:</span> Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#1C1C1C] rounded-lg p-8 border border-[#D4AF37]/10">
            <h2 className="text-2xl font-bold text-white mb-6 font-montserrat">Send a Message</h2>
            
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}
            
            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
                {errorMessage || 'Failed to send message. Please try again.'}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#E0E0E0] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 bg-[#2A2A2A] border border-[#D4AF37]/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition disabled:opacity-50"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#E0E0E0] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 bg-[#2A2A2A] border border-[#D4AF37]/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#E0E0E0] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 bg-[#2A2A2A] border border-[#D4AF37]/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition disabled:opacity-50"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#E0E0E0] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 bg-[#2A2A2A] border border-[#D4AF37]/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition resize-none disabled:opacity-50"
                  placeholder="Tell us about your inquiry..."
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-6 py-4 bg-[#D4AF37] text-[#1C1C1C] font-bold rounded-lg hover:bg-[#F5D45E] transition shadow-lg hover:shadow-2xl uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
