import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Coffee, Droplet, Thermometer, Clock, Wrench, Sparkles } from "lucide-react"
import Image from "next/image"

export default function TipsPage() {
  const tips = [
    {
      icon: Coffee,
      title: "Use Fresh Coffee Beans",
      description:
        "Always use freshly roasted coffee beans and grind them just before brewing. Coffee beans start losing flavor within days of roasting, and ground coffee loses flavor even faster. Store beans in an airtight container away from light and heat.",
      image: "/fresh-coffee-beans-in-container.jpg",
    },
    {
      icon: Droplet,
      title: "Water Quality Matters",
      description:
        "Use filtered or bottled water for the best taste. Tap water with high mineral content or chlorine can negatively affect your coffee's flavor. The water should be clean and fresh, as coffee is 98% water.",
      image: "/filtered-water-pouring-into-coffee-maker.jpg",
    },
    {
      icon: Thermometer,
      title: "Optimal Brewing Temperature",
      description:
        "The ideal water temperature for brewing coffee is between 195°F and 205°F (90°C-96°C). Water that's too hot can over-extract and make coffee bitter, while water that's too cool will under-extract and make it weak and sour.",
      image: "/thermometer-measuring-coffee-brewing-temperature.jpg",
    },
    {
      icon: Clock,
      title: "Proper Brew Time",
      description:
        "Different brewing methods require different brew times. Espresso takes 25-30 seconds, drip coffee 5-6 minutes, French press 4 minutes, and cold brew 12-24 hours. Following the correct timing ensures optimal extraction.",
      image: "/coffee-brewing-with-timer.jpg",
    },
    {
      icon: Wrench,
      title: "Regular Cleaning & Maintenance",
      description:
        "Clean your coffee maker regularly to prevent oil buildup and mineral deposits. Descale your machine every 3-6 months depending on water hardness. Clean removable parts after each use and run a cleaning cycle weekly for optimal performance.",
      image: "/cleaning-coffee-machine-maintenance.jpg",
    },
    {
      icon: Sparkles,
      title: "Correct Coffee-to-Water Ratio",
      description:
        "Use the golden ratio of 1:15 to 1:18 (coffee to water). For example, use 1 gram of coffee for every 15-18 grams of water. This typically translates to 2 tablespoons of ground coffee per 6 ounces of water. Adjust to your taste preference.",
      image: "/measuring-coffee-grounds-and-water-ratio.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2a1810] to-[#3d2817]">
      <Header />

      <div className="relative h-[400px] w-full">
        <Image src="/professional-coffee-machines-espresso-maker-setup.jpg" alt="Coffee machines" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#2a1810]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold text-amber-50 mb-4 font-serif">Tips for Using Coffee Machines</h1>
            <p className="text-amber-100 text-lg max-w-3xl mx-auto">
              Master the art of brewing perfect coffee with these expert tips. Whether you're using an espresso machine,
              drip coffee maker, or French press, these guidelines will help you achieve the best results.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {tips.map((tip, index) => {
              const Icon = tip.icon
              return (
                <div
                  key={index}
                  className="bg-amber-950 rounded-lg overflow-hidden border border-amber-800 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="relative h-48 w-full">
                    <Image src={tip.image || "/placeholder.svg"} alt={tip.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-500 rounded-full p-3 flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-amber-50 mb-3">{tip.title}</h3>
                        <p className="text-amber-100 leading-relaxed">{tip.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 bg-amber-950 rounded-lg p-8 border border-amber-800">
            <h2 className="text-2xl font-bold text-amber-50 mb-4 font-serif">Additional Tips</h2>
            <ul className="space-y-3 text-amber-100">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span>Preheat your coffee maker and cups for better temperature stability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span>Avoid reheating coffee as it degrades the flavor compounds</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span>Experiment with different grind sizes to find your perfect brew</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span>Replace paper filters regularly and rinse reusable filters thoroughly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span>Keep your grinder clean to prevent rancid oil buildup</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
