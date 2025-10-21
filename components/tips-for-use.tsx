import Link from "next/link"
import { Coffee, Lightbulb } from "lucide-react"

export function TipsForUse() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#3d2817] to-[#2a1810]">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Lightbulb className="w-8 h-8 text-orange-500" />
          <h2 className="text-4xl font-bold text-amber-50 font-serif">Tips for Use</h2>
        </div>
        <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
          Learn how to get the most out of your coffee machines with our expert tips and advice. From brewing techniques
          to maintenance, we've got you covered.
        </p>
        <Link href="/tips">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center gap-2">
            <Coffee className="w-5 h-5" />
            View All Tips
          </button>
        </Link>
      </div>
    </section>
  )
}
