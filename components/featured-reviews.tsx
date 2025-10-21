"use client"

import type React from "react"

import Link from "next/link"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const featuredReviews = [
  {
    id: 1,
    title: "Keurig K-Express Single Serve K-Cup Pod Coffee Maker",
    slug: "keurig-k",
    category: "Machine",
    rating: 4.8,
    images: [
      "https://m.media-amazon.com/images/I/611S4FYZhsL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71A3hJvFj7L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61rBGd54G-L._AC_SX679_.jpg",
    ],
    excerpt: "Enjoy a richer, more intense coffee flavor with the strong brew option.",
  },
  {
    id: 2,
    title: "BLACK+DECKER 12-Cup Digital Coffee Maker",
    slug: "black-decker",
    category: "Machine",
    rating: 4.8,
    images: [
      "https://m.media-amazon.com/images/I/61Rdl5C2AHL._AC_SY879_.jpg",
      "https://m.media-amazon.com/images/I/71PQZj8LwWL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61UN248J2zL._AC_SX679_.jpg",
    ],
    excerpt: "Begin your mornings with the perfect cup.",
  },
  {
    id: 3,
    title: "Lavazza Super Crema Whole Bean Coffee",
    slug: "lavazza-super-crema",
    category: "Coffee",
    rating: 4.5,
    images: [
      "https://m.media-amazon.com/images/I/61dSjp-nZvL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71+n-Ma5o-L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71TWRy-qNCL._SX679_.jpg",
    ],
    excerpt: "Lavazza's most popular blend.",
  },
  {
    id: 4,
    title: "Hamilton Beach FlexBrew Trio 2-Way Coffee Maker",
    slug: "hamilton-beach-flexbre",
    category: "Machine",
    rating: 4.9,
    images: [
      "https://m.media-amazon.com/images/I/716tyaBxAwL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71eaWBtLvkL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/71ZRWGKRFbL._SX522_.jpg",
    ],
    excerpt: "Perfect for both home kitchens and office coffee stations.",
  },
  {
    id: 5,
    title: "Hot & Iced Coffee Maker with Bold Setting",
    slug: "hot-iced-coffee-maker",
    category: "Machine",
    rating: 4.7,
    images: [
      "https://m.media-amazon.com/images/I/8150coh3TDL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71bUya9rrTL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61-cPVDjTnL._AC_SX679_.jpg",
    ],
    excerpt: "Brew the perfect cup every time with this Hot & Iced Single Serve Coffee Maker.",
  },
  {
    id: 6,
    title: "CASABREWS CM5418 Espresso Machine 20 Bar",
    slug: "casabrews-cm5418-espresso",
    category: "Machine",
    rating: 4.4,
    images: [
      "https://m.media-amazon.com/images/I/71KZfudGi1L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61wHwN6fEQL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71+XKIzr7GL._AC_SX679_.jpg",
    ],
    excerpt: "Café-quality espresso drinks to your home with the CASABREWS.",
  },
  {
    id: 7,
    title: "Bloom Nutrition Milk Frother",
    slug: "bloom-nutrition-milk-frother",
    category: "Machine",
    rating: 4.6,
    images: [
      "https://m.media-amazon.com/images/I/51vX3eeHR5L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/615aMdgvs9L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/6162NaV67rL._AC_SX679_.jpg",
    ],
    excerpt: "Experience café-style drinks at home with the Bloom Nutrition Electric Milk Frother.",
  },
  {
    id: 8,
    title: "Keurig K-Duo Hot & Iced Single Serve & Carafe Coffee Maker",
    slug: "keurig-k-duo-hot-iced-single-serve",
    category: "Machine",
    rating: 4.2,
    images: [
      "https://m.media-amazon.com/images/I/71lXNChJJPL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/714P2D+-gkL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71DZ8xXrxrL._AC_SX679_.jpg",
    ],
    excerpt: "Versatile brewer designed for every coffee moment.",
  },
  {
    id: 9,
    title: "Ninja Luxe Café 3-in-1 Espresso, Drip Coffee and Cold Brew Machine",
    slug: "ninja-luxe-cafe-3-in-1-espresso",
    category: "Machine",
    rating: 4.5,
    images: [
      "https://m.media-amazon.com/images/I/71hQjwGKVrL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81Ixy09NgzL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/811Q-ojaVZL._AC_SX679_.jpg",
    ],
    excerpt: "Experience espresso made simple with the Ninja Luxe Café Premier Series.",
  },
]

function ImageSlider({ images, alt }: { images: string[]; alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative w-full h-48 bg-white group">
      <img
        src={images[currentIndex] || "/placeholder.svg"}
        alt={alt}
        className="w-full h-48 object-contain transition-opacity duration-300"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  setCurrentIndex(index)
                }}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-orange-500 w-8 h-3"
                    : "bg-amber-300/70 hover:bg-amber-200 w-3 h-3 hover:scale-125"
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

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
              <ImageSlider images={review.images} alt={review.title} />
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
