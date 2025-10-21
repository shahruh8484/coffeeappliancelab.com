import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Coffee } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src="/coffee-team-barista-workspace.jpg"
          alt="Coffee team workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-serif text-amber-50 text-center px-4">About Us</h1>
        </div>
      </div>
      {/* </CHANGE> */}

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8">
          <section className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-start gap-4 mb-4">
              <Coffee className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  CoffeeApplianceLab is dedicated to helping coffee enthusiasts find the perfect machines and beans for
                  their
                  {/* </CHANGE> */}
                  personal brewing journey. We provide honest, detailed reviews based on real-world testing and personal
                  experience.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">What We Review</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Espresso Machines:</strong> From entry-level to premium models
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Coffee Grinders:</strong> Burr grinders and blade grinders
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Coffee Beans:</strong> Single-origin and blended varieties
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong>Brewing Equipment:</strong> Pour-overs, French presses, and more
                </span>
              </li>
            </ul>
          </section>

          <section className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Approach</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every review is based on extensive personal testing and real-world usage. We evaluate products on quality,
              performance, value for money, and durability. Our ratings are honest and unbiased, helping you make
              informed decisions for your coffee setup.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're a casual coffee drinker or a dedicated enthusiast, we're here to guide you through the
              world of coffee equipment and beans.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
