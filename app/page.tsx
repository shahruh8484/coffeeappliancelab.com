import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedReviews } from "@/components/featured-reviews"
import { TipsForUse } from "@/components/tips-for-use"
import { ReviewCategories } from "@/components/review-categories"
import { InterestingFacts } from "@/components/interesting-facts"
import { Footer } from "@/components/footer"
import { FavoriteRecipes } from "@/components/favorite-recipes"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedReviews />
      <TipsForUse />
      <ReviewCategories />
      <InterestingFacts />
      <FavoriteRecipes />
      <Footer />
    </main>
  )
}
