"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/subsidiaries", label: "Subsidiaries" },
  { href: "/contact", label: "Contact" },
]

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 z-30 backdrop-blur bg-slate-900/90 border-b border-slate-700"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link 
          href="/" 
          className="flex items-center hover:opacity-80 transition"
        >
          <Image
            src="/logo.png"
            alt="Acker Group"
            width={120}
            height={40}
            priority
            className="object-contain"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-slate-300 hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-700 bg-slate-900 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  )
}
