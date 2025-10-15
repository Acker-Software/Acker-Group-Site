import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/subsidiaries", label: "Subsidiaries" },
  { href: "/contact", label: "Contact" },
]

const subsidiaries = [
  { name: "Acker Software", href: "/subsidiaries#software" },
  { name: "Acker Properties", href: "/subsidiaries#properties" },
  { name: "Acker Apparel", href: "/subsidiaries#apparel" },
]

export function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/20 bg-[#0D0D0D] mt-auto">
      <div className="container mx-auto w-full max-w-6xl px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white font-montserrat">
                The <span className="text-[#D4AF37]">Acker Group</span>
              </span>
            </Link>
            <p className="text-[#E0E0E0] leading-relaxed max-w-md opacity-70 mt-4">
              A diversified holding company building excellence across technology, real estate, and apparel. 
              Creating sustainable value for the future.
            </p>
          </div>

          {/* Subsidiaries */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-4">
              Our Divisions
            </h4>
            <ul className="space-y-3">
              {subsidiaries.map((subsidiary) => (
                <li key={subsidiary.name}>
                  <Link 
                    href={subsidiary.href} 
                    className="text-[#E0E0E0] hover:text-[#D4AF37] transition-colors duration-200 text-sm"
                  >
                    {subsidiary.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-[#E0E0E0] hover:text-[#D4AF37] transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D4AF37]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#E0E0E0] opacity-50">
              © {new Date().getFullYear()} The Acker Group. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-[#E0E0E0] opacity-50">
              <Link href="/privacy" className="hover:text-[#D4AF37] hover:opacity-100 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#D4AF37] hover:opacity-100 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
