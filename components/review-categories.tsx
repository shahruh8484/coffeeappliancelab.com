"use client"

const photos = [
  {
    title: "Freshly Roasted Beans",
    description: "Golden-brown coffee beans at their peak freshness",
    image: "/coffee-photo-1.jpg",
  },
  {
    title: "Latte Art Perfection",
    description: "Beautifully crafted latte with intricate foam design",
    image: "/coffee-photo-2.jpg",
  },
  {
    title: "Coffee Harvest",
    description: "Fresh coffee cherries ready for processing",
    image: "/coffee-photo-3.jpg",
  },
]

export function ReviewCategories() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#2a1810] to-[#3d2817]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-amber-50 mb-12 text-center font-serif">Photo of a Day</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="bg-amber-950 rounded-lg border border-amber-800 overflow-hidden hover:border-orange-500 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={photo.image || "/placeholder.svg"}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{photo.title}</h3>
                <p className="text-amber-100">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
