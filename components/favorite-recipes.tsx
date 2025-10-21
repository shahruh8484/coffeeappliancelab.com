"use client"

import { Coffee } from "lucide-react"
import Image from "next/image"

export function FavoriteRecipes() {
  const recipes = [
    {
      id: 1,
      title: "Classic Espresso Martini",
      image: "/espresso-martini-cocktail-in-glass.jpg",
      description:
        "A sophisticated cocktail combining fresh espresso, vodka, and coffee liqueur. Shaken with ice and topped with a coffee bean garnish for an elegant finish.",
      ingredients: ["2 oz Vodka", "1 oz Coffee Liqueur", "1 oz Fresh Espresso", "Ice", "Coffee Beans"],
      instructions:
        "Shake vodka, coffee liqueur, and espresso with ice. Strain into a chilled martini glass. Garnish with 3 coffee beans.",
    },
    {
      id: 2,
      title: "Homemade Cold Brew",
      image: "/cold-brew-coffee-in-glass-with-ice.jpg",
      description:
        "A smooth and refreshing cold brew concentrate that can be stored for up to 2 weeks. Perfect for hot summer days or as a base for iced coffee drinks.",
      ingredients: ["1 cup Coarse Ground Coffee", "4 cups Cold Water", "Glass Jar", "Fine Mesh Strainer"],
      instructions:
        "Combine coffee and water in a jar. Stir well. Cover and let steep for 12-24 hours at room temperature. Strain through mesh. Dilute with water or milk to taste.",
    },
    {
      id: 3,
      title: "Creamy Dalgona Coffee",
      image: "/dalgona-whipped-coffee-drink-layered.jpg",
      description:
        "A trendy whipped coffee drink with a luxurious foam topping. This viral recipe creates a beautiful layered effect with instant coffee, sugar, and milk.",
      ingredients: ["2 tbsp Instant Coffee", "2 tbsp Sugar", "2 tbsp Hot Water", "1 cup Milk", "Ice"],
      instructions:
        "Whip instant coffee, sugar, and hot water until fluffy (3-5 minutes). Pour milk into a glass with ice. Top with whipped coffee mixture. Stir before drinking.",
    },
  ]

  return (
    <section className="w-full bg-gradient-to-b from-[#2a1810] to-[#3d2817] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Coffee className="w-8 h-8 text-orange-500" />
          <h2 className="text-4xl font-bold text-amber-50 font-serif">Our Favorite Recipes</h2>
        </div>
        <p className="text-center text-amber-100 mb-12 text-lg">
          Discover delicious coffee recipes to elevate your coffee experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="relative bg-amber-100 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="relative w-full h-84">
                <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-3">{recipe.title}</h3>
                <p className="text-amber-800 text-sm mb-4">{recipe.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-amber-900 mb-2">Ingredients:</h4>
                  <ul className="text-sm text-amber-700 space-y-1">
                    {recipe.ingredients.map((ingredient, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Instructions:</h4>
                  <p className="text-sm text-amber-700">{recipe.instructions}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
