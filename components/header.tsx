"use client"

import Link from "next/link"
import { Coffee, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/reviews", label: "Reviews" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/disclaimer", label: "Disclaimer" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-amber-950 border-b border-amber-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Coffee className="w-8 h-8 text-orange-500" />
          <span className="text-2xl font-bold text-white">CoffeeApplianceLab</span>
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-orange-500 rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {isMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setIsMenuOpen(false)} />
          <nav className="fixed top-16 right-0 w-64 bg-amber-950 border-l border-amber-800 z-50 shadow-lg">
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-white hover:text-orange-500 hover:bg-amber-900 rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
  )
}

export default Header
