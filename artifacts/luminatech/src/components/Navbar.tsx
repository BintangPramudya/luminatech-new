import { useState, useEffect } from "react"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { Zap, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Tentang Kami", href: "#tentang" },
  { name: "Layanan", href: "#layanan" },
  { name: "Portofolio", href: "#portofolio" },
  { name: "Testimoni", href: "#testimoni" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-4 glass-panel border-b" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-xl text-white group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                Lumina<span className="text-primary">Tech</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button onClick={() => scrollTo('#kontak')} className="rounded-full">
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-b animate-in slide-in-from-top-2">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-left px-4 py-2 text-sm font-medium hover:bg-primary/5 rounded-lg text-foreground"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-2 pb-4 px-4">
              <Button onClick={() => scrollTo('#kontak')} className="w-full rounded-full">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
