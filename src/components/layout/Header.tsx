import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/subsidiaries", label: "Subsidiaries" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-[#0D0D0D]/95 border-b border-[#D4AF37]/20">
      <div className="container mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Link 
          href="/" 
          className="flex items-center hover:opacity-80 transition"
        >
          <Image 
            src="/logo.png" 
            alt="Acker Group" 
            width={1920} 
            height={1080}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>
        
        <nav className="flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-[#E0E0E0] hover:text-[#D4AF37] transition hidden sm:block font-medium uppercase tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
