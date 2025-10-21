import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="relative w-full h-64 overflow-hidden">
        <Image src="/coffee-contact-communication-phone.jpg" alt="Contact Us" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-serif text-amber-50 text-center px-4">Contact Us</h1>
        </div>
      </div>
      {/* </CHANGE> */}

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12">
          <p className="text-lg text-muted-foreground">Have questions or suggestions? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold text-foreground">Email</h2>
            </div>
            <p className="text-muted-foreground mb-2">For general inquiries and review requests:</p>
            <a href="mailto:hello@coffeeappliancelab.com" className="text-primary hover:underline font-semibold">
              hello@coffeeappliancelab.com
            </a>
            {/* </CHANGE> */}
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold text-foreground">Feedback</h2>
            </div>
            <p className="text-muted-foreground mb-2">Share your thoughts and suggestions:</p>
            <a href="mailto:feedback@coffeeappliancelab.com" className="text-primary hover:underline font-semibold">
              feedback@coffeeappliancelab.com
            </a>
            {/* </CHANGE> */}
          </div>
        </div>

        <div className="mt-12 bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
              <textarea
                placeholder="Your message..."
                rows={5}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  )
}
