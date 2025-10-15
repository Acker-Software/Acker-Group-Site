import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/subsidiaries", label: "Subsidiaries" },
  { href: "/contact", label: "Contact" },
]

export const Footer = () => {
  return (
    <footer className="border-t border-slate-700 bg-slate-900 py-12 text-sm text-slate-400">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 md:flex-row md:justify-between">
        <div>
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/logo.png"
              alt="Acker Group"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>
          <p className="mt-4 max-w-sm text-slate-500">
            Leading group of companies delivering innovative solutions
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Navigation</p>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="text-slate-400 hover:text-white transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-6xl px-6 text-xs text-slate-600">
        <p>© 2025 Acker Group. All rights reserved.</p>
        <p className="mt-1">Part of the Acker Group ecosystem</p>
      </div>
    </footer>
  )
}
