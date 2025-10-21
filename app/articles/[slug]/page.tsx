import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const articlesData = {
  "perfect-espresso-guide": {
    title: "The Perfect Espresso Shot: A Complete Guide",
    category: "Brewing Techniques",
    date: "October 15, 2025",
    readTime: "8 min read",
    image: "/articles/espresso-shot-extraction.jpg",
    author: "Sarah Mitchell",
    content: `
      <h2>Understanding Espresso Extraction</h2>
      <p>Creating the perfect espresso shot is both an art and a science. The key lies in understanding the extraction process and how various factors influence the final result in your cup.</p>
      
      <h3>The Golden Ratio</h3>
      <p>Start with a 1:2 ratio - for every gram of coffee, aim for 2 grams of liquid espresso. For example, 18g of coffee should yield approximately 36g of espresso in 25-30 seconds.</p>
      
      <h3>Temperature Matters</h3>
      <p>Water temperature should be between 195-205°F (90-96°C). Too hot, and you'll extract bitter compounds; too cold, and you'll under-extract, resulting in sour, weak espresso.</p>
      
      <h3>Grind Size</h3>
      <p>Espresso requires a fine grind, similar to table salt. The grind should be fine enough to create 9 bars of pressure but not so fine that it chokes the machine.</p>
      
      <h3>Tamping Technique</h3>
      <p>Apply 30 pounds of pressure evenly across the coffee bed. The goal is to create a level, compact puck that water can flow through uniformly.</p>
      
      <h3>Signs of a Perfect Shot</h3>
      <ul>
        <li>Rich, golden crema on top</li>
        <li>Extraction time of 25-30 seconds</li>
        <li>Balanced flavor - not too bitter or sour</li>
        <li>Syrupy body and smooth texture</li>
      </ul>
    `,
  },
  "coffee-machine-maintenance": {
    title: "Essential Coffee Machine Maintenance Tips",
    category: "Maintenance",
    date: "October 12, 2025",
    readTime: "6 min read",
    image: "/articles/coffee-machine-cleaning.jpg",
    author: "David Chen",
    content: `
      <h2>Keep Your Machine Running Smoothly</h2>
      <p>Regular maintenance is crucial for ensuring your coffee machine produces great-tasting coffee and lasts for years to come.</p>
      
      <h3>Daily Cleaning Tasks</h3>
      <ul>
        <li>Rinse the portafilter and basket after each use</li>
        <li>Wipe down the steam wand immediately after steaming milk</li>
        <li>Empty and rinse the drip tray</li>
        <li>Backflush the group head (for espresso machines)</li>
      </ul>
      
      <h3>Weekly Maintenance</h3>
      <p>Remove and soak the portafilter basket in hot water with espresso machine cleaner. Clean the shower screen and group head gasket thoroughly.</p>
      
      <h3>Monthly Deep Clean</h3>
      <p>Descale your machine using a commercial descaling solution or a mixture of water and white vinegar. This removes mineral buildup that affects taste and machine performance.</p>
      
      <h3>Signs Your Machine Needs Attention</h3>
      <ul>
        <li>Slower extraction times</li>
        <li>Unusual noises during operation</li>
        <li>Inconsistent water temperature</li>
        <li>Visible scale buildup</li>
      </ul>
    `,
  },
  "water-quality-matters": {
    title: "How Water Quality Affects Your Coffee",
    category: "Coffee Science",
    date: "October 10, 2025",
    readTime: "5 min read",
    image: "/articles/water-quality-coffee.jpg",
    author: "Emma Rodriguez",
    content: `
      <h2>The Hidden Ingredient in Great Coffee</h2>
      <p>Water makes up 98% of your coffee, yet it's often the most overlooked factor in brewing. Understanding water quality can dramatically improve your coffee.</p>
      
      <h3>Mineral Content</h3>
      <p>The ideal water for coffee contains 150-200 ppm of total dissolved solids (TDS). Minerals like calcium and magnesium help extract flavor compounds from coffee grounds.</p>
      
      <h3>pH Levels</h3>
      <p>Water pH should be neutral to slightly alkaline (7.0-7.5). Acidic water can make coffee taste sour, while highly alkaline water can make it taste flat.</p>
      
      <h3>Chlorine and Chloramine</h3>
      <p>These chemicals, commonly found in tap water, can impart unpleasant flavors. Use a carbon filter to remove them before brewing.</p>
      
      <h3>Solutions for Better Water</h3>
      <ul>
        <li>Install a quality water filter</li>
        <li>Use bottled spring water (not distilled)</li>
        <li>Consider a remineralization filter</li>
        <li>Test your water regularly</li>
      </ul>
    `,
  },
  "temperature-control": {
    title: "Mastering Temperature Control in Brewing",
    category: "Brewing Techniques",
    date: "October 8, 2025",
    readTime: "7 min read",
    image: "/articles/temperature-control-brewing.jpg",
    author: "Michael Thompson",
    content: `
      <h2>The Science of Brewing Temperature</h2>
      <p>Temperature control is one of the most critical variables in coffee brewing, affecting extraction rate, flavor balance, and overall quality.</p>
      
      <h3>Optimal Temperature Ranges</h3>
      <ul>
        <li>Espresso: 195-205°F (90-96°C)</li>
        <li>Pour Over: 195-205°F (90-96°C)</li>
        <li>French Press: 195-200°F (90-93°C)</li>
        <li>Cold Brew: Room temperature or refrigerated</li>
      </ul>
      
      <h3>Temperature Stability</h3>
      <p>Consistent temperature throughout the brewing process is crucial. Temperature fluctuations can lead to uneven extraction and inconsistent results.</p>
      
      <h3>Pre-heating Equipment</h3>
      <p>Always pre-heat your brewing equipment. Run hot water through your espresso machine, rinse your pour-over dripper, and warm your French press before brewing.</p>
      
      <h3>Adjusting for Roast Level</h3>
      <p>Lighter roasts benefit from slightly higher temperatures (200-205°F) to fully extract their complex flavors. Darker roasts can use lower temperatures (195-200°F) to avoid over-extraction.</p>
    `,
  },
  "coffee-grinder-comparison": {
    title: "Burr vs Blade Grinders: Which is Right for You?",
    category: "Equipment",
    date: "October 5, 2025",
    readTime: "6 min read",
    image: "/articles/coffee-grinder-comparison.jpg",
    author: "Lisa Anderson",
    content: `
      <h2>Understanding Coffee Grinder Types</h2>
      <p>The grinder you choose has a massive impact on your coffee quality. Let's explore the differences between burr and blade grinders.</p>
      
      <h3>Blade Grinders</h3>
      <p>Blade grinders use spinning blades to chop coffee beans. They're affordable and compact but produce inconsistent particle sizes, leading to uneven extraction.</p>
      
      <h4>Pros:</h4>
      <ul>
        <li>Affordable ($15-$50)</li>
        <li>Compact and portable</li>
        <li>Easy to clean</li>
      </ul>
      
      <h4>Cons:</h4>
      <ul>
        <li>Inconsistent grind size</li>
        <li>Generates heat, affecting flavor</li>
        <li>Limited control over grind settings</li>
      </ul>
      
      <h3>Burr Grinders</h3>
      <p>Burr grinders crush beans between two abrasive surfaces, producing uniform particle sizes. They come in flat and conical burr varieties.</p>
      
      <h4>Pros:</h4>
      <ul>
        <li>Consistent grind size</li>
        <li>Precise grind adjustments</li>
        <li>Better flavor extraction</li>
        <li>Less heat generation</li>
      </ul>
      
      <h4>Cons:</h4>
      <ul>
        <li>More expensive ($50-$500+)</li>
        <li>Larger footprint</li>
        <li>Requires more maintenance</li>
      </ul>
      
      <h3>Our Recommendation</h3>
      <p>For serious coffee enthusiasts, a burr grinder is essential. Start with an entry-level burr grinder around $100-$150 for dramatically better results than any blade grinder.</p>
    `,
  },
  "extraction-timing": {
    title: "Understanding Extraction Time and Its Impact",
    category: "Brewing Techniques",
    date: "October 3, 2025",
    readTime: "5 min read",
    image: "/articles/extraction-timing.jpg",
    author: "James Wilson",
    content: `
      <h2>The Critical Role of Time in Coffee Extraction</h2>
      <p>Extraction time determines how much flavor is pulled from your coffee grounds. Too short, and you'll have sour, under-extracted coffee. Too long, and you'll get bitter, over-extracted coffee.</p>
      
      <h3>Ideal Extraction Times by Method</h3>
      <ul>
        <li>Espresso: 25-30 seconds</li>
        <li>Pour Over: 2.5-4 minutes</li>
        <li>French Press: 4 minutes</li>
        <li>AeroPress: 1-2 minutes</li>
        <li>Cold Brew: 12-24 hours</li>
      </ul>
      
      <h3>Under-Extraction</h3>
      <p>Signs include sour, salty, or grassy flavors. The coffee may taste thin and lack sweetness. Solutions: grind finer, increase water temperature, or extend brew time.</p>
      
      <h3>Over-Extraction</h3>
      <p>Characterized by bitter, harsh, or astringent flavors. The coffee may taste dry and hollow. Solutions: grind coarser, decrease water temperature, or shorten brew time.</p>
      
      <h3>Finding Your Sweet Spot</h3>
      <p>Start with recommended times and adjust based on taste. Keep notes on your brewing parameters to replicate successful results.</p>
    `,
  },
  "coffee-bean-storage": {
    title: "Proper Coffee Bean Storage Techniques",
    category: "Coffee Basics",
    date: "October 1, 2025",
    readTime: "4 min read",
    image: "/articles/coffee-bean-storage.jpg",
    author: "Rachel Green",
    content: `
      <h2>Preserving Coffee Freshness</h2>
      <p>Proper storage is essential for maintaining coffee bean freshness and flavor. Coffee's enemies are oxygen, light, heat, and moisture.</p>
      
      <h3>The Four Enemies of Fresh Coffee</h3>
      <ul>
        <li><strong>Oxygen:</strong> Causes oxidation and staling</li>
        <li><strong>Light:</strong> Degrades coffee oils and compounds</li>
        <li><strong>Heat:</strong> Accelerates staling process</li>
        <li><strong>Moisture:</strong> Promotes mold and degradation</li>
      </ul>
      
      <h3>Best Storage Practices</h3>
      <p>Store beans in an airtight, opaque container at room temperature. Avoid the refrigerator or freezer unless you're storing beans long-term (more than 2 weeks).</p>
      
      <h3>Container Options</h3>
      <ul>
        <li>Vacuum-sealed canisters with one-way valves</li>
        <li>Ceramic containers with rubber gasket seals</li>
        <li>Dark glass jars with tight-fitting lids</li>
      </ul>
      
      <h3>Freshness Timeline</h3>
      <p>Whole beans: 2-4 weeks after roasting. Ground coffee: 1-2 weeks. For best results, buy smaller quantities more frequently and grind just before brewing.</p>
    `,
  },
  "espresso-machine-buying-guide": {
    title: "Choosing Your First Espresso Machine",
    category: "Equipment",
    date: "October 28, 2025",
    readTime: "9 min read",
    image: "/articles/espresso-machine-buying-guide.jpg",
    author: "Tom Martinez",
    content: `
      <h2>Your Guide to Buying an Espresso Machine</h2>
      <p>Investing in an espresso machine is a big decision. This guide will help you understand the different types and what to look for.</p>
      
      <h3>Types of Espresso Machines</h3>
      
      <h4>Manual/Lever Machines</h4>
      <p>Require manual pressure application. Offer maximum control but have a steep learning curve. Price range: $200-$2,000+</p>
      
      <h4>Semi-Automatic Machines</h4>
      <p>Automate water pressure but require manual start/stop. Best balance of control and convenience. Price range: $300-$3,000+</p>
      
      <h4>Automatic Machines</h4>
      <p>Pre-programmed shot volumes with automatic stop. Easy to use with consistent results. Price range: $500-$5,000+</p>
      
      <h4>Super-Automatic Machines</h4>
      <p>Handle everything from grinding to brewing at the push of a button. Most convenient but least control. Price range: $800-$10,000+</p>
      
      <h3>Key Features to Consider</h3>
      <ul>
        <li>Boiler type (single, dual, or heat exchanger)</li>
        <li>Pressure gauge for monitoring extraction</li>
        <li>PID temperature control</li>
        <li>Steam wand quality and power</li>
        <li>Build quality and materials</li>
        <li>Ease of maintenance and cleaning</li>
      </ul>
      
      <h3>Budget Recommendations</h3>
      <ul>
        <li><strong>Entry Level ($300-$600):</strong> Gaggia Classic Pro, Breville Bambino</li>
        <li><strong>Mid Range ($600-$1,500):</strong> Rancilio Silvia, Breville Barista Express</li>
        <li><strong>High End ($1,500+):</strong> Rocket Appartamento, La Marzocco Linea Mini</li>
      </ul>
    `,
  },
  "milk-frothing-techniques": {
    title: "The Art of Milk Frothing and Latte Art",
    category: "Brewing Techniques",
    date: "October 25, 2025",
    readTime: "7 min read",
    image: "/articles/milk-frothing-latte-art.jpg",
    author: "Sophie Laurent",
    content: `
      <h2>Creating Perfect Microfoam</h2>
      <p>Milk frothing is an essential skill for creating café-quality lattes and cappuccinos at home. Let's master the technique.</p>
      
      <h3>Understanding Milk Science</h3>
      <p>When steaming milk, you're creating microfoam - tiny, uniform bubbles that give milk a velvety texture. The ideal temperature is 140-160°F (60-71°C).</p>
      
      <h3>The Frothing Process</h3>
      <ol>
        <li><strong>Purge:</strong> Release any condensation from the steam wand</li>
        <li><strong>Aerate:</strong> Position wand just below surface, creating a "chirping" sound (0-5 seconds)</li>
        <li><strong>Texture:</strong> Submerge wand deeper to create a whirlpool, incorporating air bubbles</li>
        <li><strong>Polish:</strong> Continue until milk reaches 140-160°F</li>
      </ol>
      
      <h3>Milk Types and Results</h3>
      <ul>
        <li><strong>Whole Milk:</strong> Easiest to froth, sweetest flavor, best for beginners</li>
        <li><strong>2% Milk:</strong> Good balance of foam and flavor</li>
        <li><strong>Skim Milk:</strong> More foam but less sweet</li>
        <li><strong>Oat Milk:</strong> Best non-dairy option for frothing</li>
      </ul>
      
      <h3>Basic Latte Art Patterns</h3>
      <p>Start with the heart pattern: pour from high to create a base, then lower your pitcher and move forward to create the heart shape. Practice makes perfect!</p>
    `,
  },
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articlesData[params.slug as keyof typeof articlesData]

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#24150D] via-[#3b2417] to-[#24150D]">
      <Header />

      {/* Hero Image */}
      <div className="relative h-[400px] w-full">
        <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#24150D] via-[#24150D]/50 to-transparent" />
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-200 hover:text-[#ff7b00] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Article Header */}
          <div className="bg-[#3b2417]/80 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-amber-900/20">
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-[#ff7b00] text-white text-sm font-medium rounded-full">
                {article.category}
              </span>
              <div className="flex items-center gap-2 text-amber-200 text-sm">
                <Calendar className="w-4 h-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-2 text-amber-200 text-sm">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </div>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl text-amber-50 mb-4">{article.title}</h1>

            <p className="text-amber-200">By {article.author}</p>
          </div>

          {/* Article Body */}
          <div
            className="bg-[#3b2417]/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-900/20 prose prose-invert prose-amber max-w-none
              prose-headings:font-serif prose-headings:text-amber-50
              prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3
              prose-h4:text-xl prose-h4:mt-4 prose-h4:mb-2
              prose-p:text-amber-100 prose-p:leading-relaxed prose-p:mb-4
              prose-ul:text-amber-100 prose-ul:my-4
              prose-ol:text-amber-100 prose-ol:my-4
              prose-li:my-2
              prose-strong:text-amber-50 prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Related Articles CTA */}
          <div className="mt-16 mb-16 text-center">
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-[#ff7b00] text-white font-semibold rounded-xl hover:bg-[#e66d00] transition-colors"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
