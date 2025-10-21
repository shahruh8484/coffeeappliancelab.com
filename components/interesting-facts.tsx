"use client"

import { Coffee } from "lucide-react"
import Image from "next/image"

export function InterestingFacts() {
  const facts = [
    {
      title: "Coffee is the World's Second Most Traded Commodity",
      description:
        "After crude oil, coffee is the most traded commodity globally. Over 2 billion cups of coffee are consumed every day worldwide.",
      image: "/coffee-global-trade-shipping.jpg",
    },
    {
      title: "Coffee Beans Are Actually Seeds",
      description:
        "What we call 'coffee beans' are actually the seeds of berries from the Coffea plant. Each berry typically contains two seeds that are dried and roasted to create the coffee we know and love.",
      image: "/coffee-berries-seeds-plant.jpg",
    },
    {
      title: "The Espresso Shot Was Invented in Italy",
      description:
        "The espresso machine was invented in Italy in the early 1900s. The word 'espresso' comes from the Italian word meaning 'pressed out,' referring to the method of forcing hot water through ground coffee.",
      image: "/italian-espresso-machine-vintage.jpg",
    },
    {
      title: "Coffee Can Improve Your Physical Performance",
      description:
        "Caffeine is a natural stimulant that can increase adrenaline levels and improve physical performance by up to 11-12%. This is why many athletes consume coffee before workouts.",
      image: "/athlete-drinking-coffee-workout.jpg",
    },
    {
      title: "Ethiopia is the Birthplace of Coffee",
      description:
        "Coffee originated in Ethiopia, where it was discovered in the 9th century. According to legend, a goat herder noticed his goats becoming energetic after eating coffee berries.",
      image: "/ethiopian-coffee-ceremony-traditional.jpg",
    },
    {
      title: "Coffee Has More Antioxidants Than Most Foods",
      description:
        "Coffee is rich in antioxidants and polyphenols, which help fight inflammation and oxidative stress. Studies suggest that coffee drinkers have a lower risk of certain diseases.",
      image: "/healthy-coffee-antioxidants-cup.jpg",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#2a1810] to-[#3d2817]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Coffee className="w-8 h-8 text-orange-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-amber-50 text-center font-serif">
            Interesting Facts About Coffee
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="relative bg-amber-100 rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full h-40">
                <Image src={fact.image || "/placeholder.svg"} alt={fact.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-amber-900 mb-3">{fact.title}</h3>
                <p className="text-sm text-amber-800 leading-relaxed">{fact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
