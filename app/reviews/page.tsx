"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star } from "lucide-react"
import Link from "next/link"

const reviews = [
  {
    id: 1,
    title: "Keurig K-Express Single Serve K-Cup Pod Coffee Maker",
    category: "Machine",
    rating: 4.5,
    description: "Enjoy a richer, more intense coffee flavor with the strong brew option.",
    images: ["https://m.media-amazon.com/images/I/611S4FYZhsL._AC_SL1500_.jpg"],
    slug: "keurig-k",
  },
  {
    id: 2,
    title: "BLACK+DECKER 12-Cup Digital Coffee Maker",
    category: "Machine",
    rating: 4.8,
    description: "Begin your mornings with the perfect cup.",
    images: ["https://m.media-amazon.com/images/I/61Rdl5C2AHL._AC_SY879_.jpg"],
    slug: "black-decker",
  },
  {
    id: 3,
    title: "Lavazza Super Crema Whole Bean Coffee",
    category: "Coffee",
    rating: 4.3,
    description: "Lavazza's most popular blend.",
    images: ["https://m.media-amazon.com/images/I/61dSjp-nZvL._SX679_.jpg"],
    slug: "lavazza-super-crema",
  },
  {
    id: 4,
    title: "Hamilton Beach FlexBrew Trio 2-Way Coffee Maker",
    category: "Machine",
    rating: 4.9,
    description: "Perfect for both home kitchens and office coffee stations.",
    images: [      "https://m.media-amazon.com/images/I/716tyaBxAwL._SX522_.jpg",
    ],
    slug: "hamilton-beach-flexbre",
  },
  {
    id: 5,
    title: "Hot & Iced Coffee Maker with Bold Setting",
    category: "Machine",
    rating: 4.7,
    description: "Brew the perfect cup every time with this Hot & Iced Single Serve Coffee Maker.",
    images: [
      "https://m.media-amazon.com/images/I/8150coh3TDL._AC_SX679_.jpg",
    ],
    slug: "hot-iced-coffee-maker",
  },
  {
    id: 6,
    title: "CASABREWS CM5418 Espresso Machine 20 Bar",
    category: "Machine",
    rating: 4.4,
    description: "Bring café-quality espresso drinks to your home with the CASABREWS Espresso Machine.",
    images: [
      "https://m.media-amazon.com/images/I/617U+hSCJEL._AC_SL1500_.jpg",
    ],
    slug: "casabrews-cm5418-espresso",
  },
  {
    id: 7,
    title: "Bloom Nutrition Milk Frother",
    category: "Machine",
    rating: 4.6,
    description: "Experience café-style drinks at home with the Bloom Nutrition Electric Milk Frother.",
    images: ["https://m.media-amazon.com/images/I/51vX3eeHR5L._AC_SX679_.jpg"],
    slug: "bloom-nutrition-milk-frother",
  },
  {
    id: 8,
    title: "Keurig K-Duo Hot & Iced Single Serve & Carafe Coffee Maker",
    category: "Machine",
    rating: 4.2,
    description: "Versatile brewer designed for every coffee moment.",
    images: ["https://m.media-amazon.com/images/I/71lXNChJJPL._AC_SX679_.jpg"],
    slug: "keurig-k-duo-hot-iced-single-serve",
  },
  {
    id: 9,
    title: "Ninja Luxe Café 3-in-1 Espresso, Drip Coffee and Cold Brew Machine",
    category: "Machine",
    rating: 4.5,
    description: "Experience espresso made simple with the Ninja Luxe Café Premier Series.",
    images: ["https://m.media-amazon.com/images/I/71hQjwGKVrL._AC_SX679_.jpg"],
    slug: "ninja-luxe-cafe-3-in-1-espresso",
  },
]

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="relative h-64 w-full overflow-hidden">
        <img
          src="/coffee-reviews-collection-machines.jpg"
          alt="Coffee Appliance Lab Reviews"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-amber-50 mb-4">All Reviews</h1>
          <p className="text-lg text-amber-50/90 max-w-2xl">
            Explore our comprehensive collection of coffee machine and coffee bean reviews.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-8 pb-4 flex justify-center">
        <Link
          href="/"
          className="bg-[#ff9500] hover:bg-[#e68600] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Home
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Link key={review.id} href={`/reviews/${review.slug}`}>
              <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className="relative w-full h-48 bg-white">
                  <img
                    src={review.images[0] || "/placeholder.svg"}
                    alt={review.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {review.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{review.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{review.description}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(review.rating) ? "fill-primary text-primary" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm font-semibold text-foreground">{review.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
