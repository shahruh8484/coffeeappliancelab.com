import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src="/coffee-privacy-security-lock.jpg"
          alt="Privacy and Security"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-serif font-bold text-amber-50">Privacy Policy</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Introduction</h2>
            <p className="leading-relaxed">
              CoffeeApplianceLab ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Information We Collect</h2>
            <p className="leading-relaxed mb-3">
              We may collect information about you in a variety of ways. The information we may collect on the Site
              includes:
            </p>
            <ul className="space-y-2 ml-4">
              <li>
                • <strong>Personal Data:</strong> Name, email address, and other information you voluntarily provide
              </li>
              <li>
                • <strong>Usage Data:</strong> Information about how you interact with our website
              </li>
              <li>
                • <strong>Device Information:</strong> Browser type, IP address, and operating system
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Use of Your Information</h2>
            <p className="leading-relaxed mb-3">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized
              experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="space-y-2 ml-4">
              <li>• Respond to your inquiries and fulfill your requests</li>
              <li>• Improve our website and services</li>
              <li>• Send periodic emails regarding your inquiry or product/service</li>
              <li>• Monitor and analyze trends, usage, and activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Security of Your Information</h2>
            <p className="leading-relaxed">
              We use administrative, technical, and physical security measures to protect your personal information.
              However, no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions or comments about this Privacy Policy, please contact us at:
              privacy@coffeeappliancelab.com
            </p>
          </section>

          <p className="text-sm text-muted-foreground italic pt-4 border-t border-border">Last updated: October 2025</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
