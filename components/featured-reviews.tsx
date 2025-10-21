"use client"

import Link from "next/link"
import { Star } from "lucide-react"

const featuredReviews = [
  {
    id: 1,
    title: "Keurig K-Express Single Serve K-Cup Pod Coffee Maker",
    slug: "keurig-k",
    category: "Machine",
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/611S4FYZhsL._AC_SX679_.jpg",
    excerpt: "Enjoy a richer, more intense coffee flavor with the strong brew option.",
  },
  {
    id: 2,
    title: "BLACK+DECKER 12-Cup Digital Coffee Maker",
    slug: "black-decker",
    category: "Machine",
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/61Rdl5C2AHL._AC_SY879_.jpg",
    excerpt: "Begin your mornings with the perfect cup.",
  },
  {
    id: 3,
    title: "Lavazza Super Crema Whole Bean Coffee",
    slug: "lavazza-super-crema",
    category: "Coffee",
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/61dSjp-nZvL._SX679_.jpg",
    excerpt: "Lavazza’s most popular blend.",
  },
  {
    id: 4,
    title: "Hamilton Beach FlexBrew Trio 2-Way Coffee Maker",
    slug: "hamilton-beach-flexbre",
    category: "Machine",
    rating: 4.9,
    image: "https://m.media-amazon.com/images/I/716tyaBxAwL._SX522_.jpg",
    excerpt: "Perfect for both home kitchens and office coffee stations.",
  },
  {
    id: 5,
    title: "Hot & Iced Coffee Maker with Bold Setting",
    slug: "hot-iced-coffee-maker",
    category: "Machine",
    rating: 4.7,
    image: "https://m.media-amazon.com/images/I/8150coh3TDL._AC_SX679_.jpg",
    excerpt: "Brew the perfect cup every time with this Hot & Iced Single Serve Coffee Maker.",
  },
  {
    id: 6,
    title: "CASABREWS CM5418 Espresso Machine 20 Bar",
    slug: "casabrews-cm5418-espresso",
    category: "Machine",
    rating: 4.4,
    image: "https://m.media-amazon.com/images/I/71KZfudGi1L._AC_SX679_.jpg",
    excerpt: "Café-quality espresso drinks to your home with the CASABREWS.",
  },
  {
    id: 7,
    title: "Bloom Nutrition Milk Frother",
    slug: "bloom-nutrition-milk-frother",
    category: "Machine",
    rating: 4.6,
    image: "https://m.media-amazon.com/images/I/51vX3eeHR5L._AC_SX679_.jpg",
    excerpt: "Experience café-style drinks at home with the Bloom Nutrition Electric Milk Frother.",
  },
  {
    id: 8,
    title: "Keurig K-Duo Hot & Iced Single Serve & Carafe Coffee Maker",
    slug: "keurig-k-duo-hot-iced-single-serve",
    category: "Machine",
    rating: 4.2,
    image: "https://m.media-amazon.com/images/I/71lXNChJJPL._AC_SX679_.jpg",
    excerpt: "Versatile brewer designed for every coffee moment.",
  },
  {
    id: 9,
    title: "Ninja Luxe Café 3-in-1 Espresso, Drip Coffee and Cold Brew Machine",
    slug: "ninja-luxe-cafe-3-in-1-espresso",
    category: "Machine",
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/71hQjwGKVrL._AC_SX679_.jpg",
    excerpt: "Experience espresso made simple with the Ninja Luxe Café Premier Series.",
  },
]

export function FeaturedReviews() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#2a1810] to-[#3d2817]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-amber-50 mb-12 text-center font-serif">Featured Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredReviews.map((review) => (
            <Link
              key={review.id}
              href={`/reviews/${review.slug}`}
              className="bg-amber-950 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-amber-800 block"
            >
              <img src={review.image || "/placeholder.svg"} alt={review.title} className="w-full h-48 object-contain" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold bg-orange-500 text-white px-3 py-1 rounded-full">
                    {review.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{review.title}</h3>
                <p className="text-amber-100 text-sm mb-4">{review.excerpt}</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(review.rating) ? "fill-orange-500 text-orange-500" : "text-amber-700"}`}
                    />
                  ))}
                  <span className="text-sm text-amber-200 ml-2">{review.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/reviews">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
              View More
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
