import Link from "next/link"

export function Footer() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/reviews", label: "Reviews" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/disclaimer", label: "Disclaimer" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="border-t border-primary-foreground/20 pt-4 text-center text-xs text-primary-foreground/70">
          <p>&copy; 2025 CoffeeApplianceLab. All rights reserved.</p>
          <p className="mt-2">
            This site is a participant in the Amazon Services LLC Associates Program. As an Amazon Associate, we earn
            from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}
