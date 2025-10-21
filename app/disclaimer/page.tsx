import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src="/coffee-legal-documents-disclaimer.jpg"
          alt="Legal disclaimer and coffee"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center justify-center">
          <h1 className="text-5xl font-serif font-bold text-amber-50">Disclaimer</h1>
        </div>
      </div>
      {/* </CHANGE> */}

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">General Disclaimer</h2>
            <p className="leading-relaxed">
              The information provided on CoffeeApplianceLab is for educational and informational purposes only. While
              we strive to provide accurate and helpful information, we make no representations or warranties of any
              kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of
              the information contained on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Product Reviews</h2>
            <p className="leading-relaxed mb-3">
              All reviews on CoffeeApplianceLab are based on personal testing and experience. Results may vary depending
              on individual preferences, usage patterns, and environmental factors. We recommend:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• Conducting your own research before making purchases</li>
              <li>• Reading multiple reviews from different sources</li>
              <li>• Considering your specific needs and preferences</li>
              <li>• Checking product specifications and manufacturer information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Affiliate Links</h2>
            <p className="leading-relaxed">
              CoffeeApplianceLab may contain affiliate links. When you click on these links and make a purchase, we may
              earn a commission at no additional cost to you. This helps support our website and allows us to continue
              providing quality reviews.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Limitation of Liability</h2>
            <p className="leading-relaxed">
              In no event shall CoffeeApplianceLab, its owners, or contributors be liable for any damages (including,
              without limitation, damages for loss of data or profit, or due to business interruption) arising out of
              the use or inability to use the materials on CoffeeApplianceLab.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Third-Party Links</h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the content, accuracy,
              or practices of these external sites. Your use of third-party websites is at your own risk and subject to
              their terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Changes to This Disclaimer</h2>
            <p className="leading-relaxed">
              We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon
              posting to the website. Your continued use of CoffeeApplianceLab following the posting of revised
              disclaimer means that you accept and agree to the changes.
            </p>
          </section>

          <p className="text-sm text-muted-foreground italic pt-4 border-t border-border">Last updated: October 2025</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
