import Link from "next/link"
import { Coffee, Droplets, Thermometer, Clock, Zap, Heart } from "lucide-react"

const articles = [
  {
    id: "perfect-espresso-guide",
    title: "The Ultimate Guide to Pulling the Perfect Espresso Shot",
    excerpt:
      "Master the art of espresso with our comprehensive guide covering grind size, tamping pressure, extraction time, and temperature control for café-quality shots at home.",
    image: "/articles/espresso-shot-extraction.jpg",
    category: "Brewing Techniques",
    date: "October 15, 2025", // Updated date to October 2025
    readTime: "8 min read",
    icon: Coffee,
  },
  {
    id: "coffee-machine-maintenance",
    title: "Essential Coffee Machine Maintenance: Keep Your Equipment Running Smoothly",
    excerpt:
      "Learn the critical maintenance tasks that will extend your coffee machine's lifespan, prevent costly repairs, and ensure consistently delicious coffee every time.",
    image: "/articles/coffee-machine-cleaning.jpg",
    category: "Maintenance",
    date: "October 12, 2025", // Updated date to October 2025
    readTime: "6 min read",
    icon: Zap,
  },
  {
    id: "water-quality-matters",
    title: "Why Water Quality Matters: The Secret Ingredient in Great Coffee",
    excerpt:
      "Discover how water composition affects coffee flavor, which minerals enhance extraction, and how to optimize your water for the best-tasting brew.",
    image: "/articles/water-quality-coffee.jpg",
    category: "Coffee Science",
    date: "October 10, 2025", // Updated date to October 2025
    readTime: "5 min read",
    icon: Droplets,
  },
  {
    id: "temperature-control",
    title: "Temperature Control: The Key to Unlocking Coffee's Full Potential",
    excerpt:
      "Explore the science of brewing temperature and learn how precise temperature control can dramatically improve your coffee's flavor profile and consistency.",
    image: "/articles/temperature-control-brewing.jpg",
    category: "Brewing Science",
    date: "October 8, 2025", // Updated date to October 2025
    readTime: "7 min read",
    icon: Thermometer,
  },
  {
    id: "coffee-grinder-comparison",
    title: "Burr vs Blade Grinders: Which One Should You Choose?",
    excerpt:
      "A detailed comparison of burr and blade grinders, examining grind consistency, particle size distribution, and how each affects your coffee's taste.",
    image: "/articles/coffee-grinder-comparison.jpg",
    category: "Equipment Guide",
    date: "October 5, 2025", // Updated date to October 2025
    readTime: "6 min read",
    icon: Coffee,
  },
  {
    id: "extraction-timing",
    title: "Mastering Extraction Time: From Under to Over-Extracted",
    excerpt:
      "Learn to identify the signs of under and over-extraction, understand the ideal extraction windows for different brewing methods, and troubleshoot common issues.",
    image: "/articles/extraction-timing.jpg",
    category: "Brewing Techniques",
    date: "October 3, 2025", // Updated date to October 2025
    readTime: "9 min read",
    icon: Clock,
  },
  {
    id: "coffee-bean-storage",
    title: "The Science of Coffee Bean Storage: Preserving Freshness and Flavor",
    excerpt:
      "Understand how oxygen, light, moisture, and temperature affect coffee beans, and discover the best storage methods to keep your beans fresh longer.",
    image: "/articles/coffee-bean-storage.jpg",
    category: "Coffee Care",
    date: "October 1, 2025", // Updated date to October 2025
    readTime: "5 min read",
    icon: Heart,
  },
  {
    id: "espresso-machine-buying-guide",
    title: "2024 Espresso Machine Buying Guide: Find Your Perfect Match",
    excerpt:
      "Navigate the world of espresso machines with our comprehensive buying guide covering features, price points, and recommendations for every skill level.",
    image: "/articles/espresso-machine-buying-guide.jpg",
    category: "Buying Guides",
    date: "October 28, 2025", // Updated date to October 2025
    readTime: "10 min read",
    icon: Coffee,
  },
  {
    id: "milk-frothing-techniques",
    title: "Professional Milk Frothing Techniques for Barista-Quality Lattes",
    excerpt:
      "Master the art of milk frothing with step-by-step techniques for creating silky microfoam, perfect for latte art and delicious cappuccinos.",
    image: "/articles/milk-frothing-techniques.jpg",
    category: "Barista Skills",
    date: "October 25, 2025", // Updated date to October 2025
    readTime: "7 min read",
    icon: Coffee,
  },
]

export function CoffeeArticles() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#24150D] via-[#3b2417] to-[#24150D]">
      <div className="max-w-7xl mx-auto">
        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => {
            const IconComponent = article.icon
            return (
              <Link
                key={article.id}
                href={`/articles/${article.id}`}
                className="group bg-gradient-to-br from-[#3b2417] to-[#24150D] rounded-2xl overflow-hidden border border-amber-900/20 hover:border-[#ff7b00]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#ff7b00]/10 hover:-translate-y-1"
              >
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden bg-white">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#ff7b00] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <IconComponent className="w-3 h-3" />
                    {article.category}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-amber-50 mb-3 group-hover:text-[#ff7b00] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-amber-100/70 text-sm mb-4 line-clamp-3">{article.excerpt}</p>

                  {/* Article Meta */}
                  <div className="flex items-center justify-between text-xs text-amber-100/60">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-4 pt-4 border-t border-amber-900/20">
                    <span className="text-[#ff7b00] text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                      Read Article
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
