import Link from "next/link"
import Image from "next/image"

interface LogoProps {
  className?: string
  height?: number
}

export const Logo = ({ className, height = 40 }: LogoProps) => (
  <Link 
    href="/" 
    className={`flex items-center hover:opacity-80 transition ${className || ''}`}
  >
    <Image
      src="/logo.png"
      alt="Acker Group"
      width={height * 3}
      height={height}
      priority
      className="object-contain"
    />
  </Link>
)
