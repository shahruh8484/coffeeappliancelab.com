"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

const reviewsData: Record<string, any> = {
  "keurig-k": {
    title: "Keurig K-Express Single Serve K-Cup Pod Coffee Maker",
    category: "Machine",
    rating: 4.5,
    images: ["https://m.media-amazon.com/images/I/611S4FYZhsL._AC_SL1500_.jpg"],
    amazonUrl: "https://amzn.to/4nxD8We",
    aboutThisItem: [
      {
        title: "BOLD FLAVOR OPTION",
        description:
          "Intensify your coffee experience with a concentrated brewing mode that delivers deeper, more robust taste profiles.",
      },
      {
        title: "FLEXIBLE SERVING SIZES",
        description:
          "Customize your beverage volume by selecting from three convenient options: 8, 10, or 12 ounce portions at the touch of a button.",
      },
      {
        title: "GENEROUS WATER CAPACITY",
        description:
          "Features a detachable 42-ounce reservoir that accommodates approximately four 8-ounce servings between refills, minimizing interruptions to your coffee routine.",
      },
      {
        title: "RAPID PREPARATION",
        description: "Produces steaming, aromatic coffee beverages in a matter of minutes for busy mornings.",
      },
      {
        title: "ACCOMMODATES TRAVEL CONTAINERS",
        description:
          "Adjustable drip platform accepts tall travel mugs measuring up to 7.4 inches, perfect for coffee on the move.",
      },
      {
        title: "POWER CONSERVATION MODE",
        description:
          "Automatically powers down five minutes following the final brew cycle, helping reduce energy consumption when not in use.",
      },
      {
        title: "COMPATIBLE WITH GROUND COFFEE",
        description:
          "Works seamlessly with the My K-Cup Universal Reusable Filter accessory, allowing you to brew using your preferred ground coffee varieties.",
      },
    ],
    productInfo: {
      Manufacturer: "Keurig",
      Finish: "Black",
      Dimensions: '12.8" Deep x 5.1" Wide x 12.1" High',
      "Key Feature": "Detachable Water Tank",
      "Brewing System": "Single Cup",
      Design: "Contemporary",
      "Primary Use": "Espresso Beverages",
      "Package Contents": "Coffee Brewing Unit",
      "Control Type": "Manual Operation",
      "Power Rating": "120 Volts",
      "Product Series": "K-Express",
      Quantity: "1 Unit",
      "Interface Type": "Push Button",
      Count: "1.0 Unit",
      GTIN: "10611247389116",
      "Compatible Coffee Types": "K-Cup Pods, Ground Coffee",
      Brand: "Keurig",
      "Net Weight": "4.1 pounds",
    },
    content: `Experience the trusted quality at an unbeatable value with the K-Express Single Serve Coffee Maker. Brew rich, full-bodied coffee with every cup, and press the STRONG button whenever you crave a bolder, more intense flavor. Designed with sleek, modern lines, this compact brewer looks great in any kitchen. Choose from 8, 10, or 12 oz cup sizes and enjoy fresh coffee, tea, or cocoa in just minutes—all at the touch of a button. The 42 oz removable water reservoir allows you to brew up to four cups before refilling, while the back-to-back brewing feature means no waiting for reheating between cups. Compatible with hundreds of K-Cup pod varieties from leading brands—or use your own favorite grounds with the My K-Cup Reusable Filter (sold separately)—the K-Express brings the convenience and flavor of America's #1 single-serve coffee maker brand to your countertop at an affordable price.`,
  },
  "black-decker": {
    title: "BLACK+DECKER 12-Cup Digital Coffee Maker",
    category: "Machine",
    rating: 4.8,
    images: ["https://m.media-amazon.com/images/I/61Rdl5C2AHL._AC_SY879_.jpg"],
    amazonUrl: "https://amzn.to/3X4Tqer",
    aboutThisItem: [
      {
        title: "DURABLE 12-CUP GLASS CARAFE",
        description:
          "Robust glass pitcher with clear volume indicators and comfortable grip handle for effortless serving. Each cup measures roughly 5 ounces depending on brewing technique.",
      },
      {
        title: "MID-BREW PAUSE FUNCTION",
        description:
          "Temporarily halt the brewing process to pour an early cup without creating spills or messes—ideal when you need that first sip immediately.",
      },
      {
        title: "TRANSPARENT WATER GAUGE",
        description:
          "Front-mounted viewing window displays current water level clearly, ensuring precise measurements for consistent brewing results every time.",
      },
      {
        title: "INTUITIVE DIGITAL INTERFACE",
        description:
          "Large, soft-touch control buttons simplify operation, while the backlit screen displays time, brew status, and programmable timer settings.",
      },
      {
        title: "PROGRAMMABLE TIMER & SAFETY SHUTOFF",
        description:
          "Schedule your morning brew up to 24 hours ahead using the auto-start feature. Built-in 2-hour automatic shutoff provides added safety and energy efficiency.",
      },
    ],
    productInfo: {
      Manufacturer: "BLACK+DECKER",
      Finish: "Black",
      Dimensions: '11.8" Deep x 8.9" Wide x 13.5" High',
      "Key Features": "Timer Function, Auto Shutoff",
      "Brewing System": "Drip Style Coffee Maker",
      Design: "Contemporary",
      "Primary Use": "Coffee Preparation",
      "Package Contents": "Coffee Maker Unit, Glass Pitcher",
      "Control Type": "Automatic Operation",
      "Power Rating": "120 Volts",
      "Product Series": "CM1160B",
      Quantity: "1 Unit",
      "Interface Type": "Push Button",
      "Brew Capacity": "12 Cups",
      Brand: "BLACK+DECKER",
      "Net Weight": "3.5 pounds",
    },
    content: `Begin your mornings with the perfect cup using this 12-Cup Digital Coffee Maker. Built for both convenience and reliability, this programmable brewer includes a durable 12-cup Duralife™ glass carafe with easy-to-read markings and a comfortable ergonomic handle for effortless pouring. With QuickTouch™ programming, you can schedule the 24-hour auto brew feature so your coffee is ready exactly when you want it. The Sneak-A-Cup™ function allows you to pour a cup mid-brew without creating drips or messes, while the easy-view water window helps ensure accurate filling every time. The digital control panel with soft-touch rubberized buttons offers simple operation, and the 2-hour auto shutoff provides extra safety and energy efficiency. The removable, reusable filter basket minimizes the need for paper filters, making cleanup quick and easy. Finished in sleek black, this coffee maker combines modern design with dependable performance—an ideal choice for any home kitchen.`,
  },
  "lavazza-super-crema": {
    title: "Lavazza Super Crema Whole Bean Coffee",
    category: "Coffee",
    rating: 4.3,
    images: ["https://m.media-amazon.com/images/I/61dSjp-nZvL._SX679_.jpg"],
    amazonUrl: "https://amzn.to/4qIjRoa",
    aboutThisItem: [
      {
        title: "PREMIUM WHOLE BEAN BLEND",
        description:
          "Packaged in a 2.2-pound bag, these whole beans are specifically crafted for espresso brewing applications.",
      },
      {
        title: "FLAVOR PROFILE & ROAST LEVEL",
        description:
          "This medium-roasted blend delivers full-bodied richness with a smooth, creamy finish that lingers pleasantly.",
      },
      {
        title: "BEAN COMPOSITION",
        description:
          "Combines premium Arabica and Robusta varieties sourced from 15 distinct coffee-producing regions worldwide. Naturally caffeinated for authentic espresso preparation.",
      },
      {
        title: "ESPRESSO PREPARATION GUIDE",
        description:
          "Use approximately 0.28 ounces of freshly ground coffee to produce a standard 1-ounce espresso shot.",
      },
      {
        title: "PURE COFFEE PRODUCT",
        description:
          "Contains exclusively coffee beans with no additives. Manufactured in dedicated coffee-only production facilities to ensure purity.",
      },
    ],
    productInfo: {
      Manufacturer: "Lavazza",
      "Product Type": "Whole Bean",
      "Caffeine Level": "Caffeinated",
      "Roast Type": "Medium",
      "Package Weight": "2.2 Pounds",
      "Container Type": "Bag",
      "Taste Notes": "Hazelnut, Brown Sugar",
      Quantity: "1 Package",
      "Best For": "Espresso Brewing",
      "Dietary Info": "Kosher Certified",
      "Unit Measurement": "2.2 Pound",
      Brand: "Lavazza",
      "Bean Origin": "Multi-Origin (15 countries)",
      "Bean Varieties": "Arabica and Robusta Blend",
    },
    content: `Enjoy Lavazza's most popular blend — Super Crema, a smooth, full-bodied medium roast
crafted for true coffee lovers. With fragrant notes of hazelnut and brown sugar, this
blend delivers a rich, bold flavor and a velvety, creamy texture in every cup.
Made from a carefully balanced combination of Arabica and Robusta beans sourced
from 15 coffee-growing regions worldwide, Super Crema is expertly roasted to perfection.
Ideal for espresso preparation, it offers a consistently smooth and satisfying experience
from the first sip to the last.`,
  },
  "hamilton-beach-flexbre": {
    title: "Hamilton Beach FlexBrew Trio 2-Way Coffee Maker",
    category: "Machine",
    rating: 4.9,
    images: [
      "https://m.media-amazon.com/images/I/716tyaBxAwL._SX522_.jpg",
    ],
    amazonUrl: "https://amzn.to/49wEvBf",
    aboutThisItem: [
      {
        title: "TRIPLE BREWING VERSATILITY",
        description:
          "This 12-cup system offers three distinct brewing methods: single-serve with pods, single-serve with grounds, or full carafe brewing with your favorite ground coffee.",
      },
      {
        title: "ULTRA-FAST SINGLE CUP BREWING",
        description:
          "Prepare individual servings in approximately 90 seconds—significantly faster than traditional two-way brewers, giving you more time to savor your coffee.",
      },
      {
        title: "EXTENDED BREWING CAPACITY",
        description:
          "The substantial 56-ounce water reservoir enables up to seven consecutive single-serve brews without refilling, combining speed with convenience.",
      },
      {
        title: "PROGRAMMABLE CARAFE BREWING",
        description:
          "Set the timer the evening before using simple touch controls, and wake up to freshly brewed coffee. The illuminated display clearly shows time and brewing settings.",
      },
      {
        title: "ADJUSTABLE SINGLE-SERVE VOLUMES",
        description:
          "Select from five serving sizes—6, 8, 10, 12, or 14 ounces with ground coffee, or 6, 8, or 10 ounces with pods—ensuring the perfect amount for any cup.",
      },
      {
        title: "ADAPTABLE CUP PLATFORM",
        description:
          "The removable cup rest securely holds standard mugs and accommodates travel mugs up to 7 inches tall. Internal storage compartment keeps pod holder or brew basket organized.",
      },
      {
        title: "CUSTOMIZABLE BREW STRENGTH",
        description:
          "Control flavor intensity with regular and bold settings. The Auto Pause & Pour feature allows mid-brew serving without waiting for the full pot to complete.",
      },
    ],
    productInfo: {
      Manufacturer: "Hamilton Beach",
      Finish: "Black",
      Dimensions: '13.8" Deep x 15.6" Wide x 14" High',
      "Key Features": "Timer Function, Detachable Tank, Programmable",
      "Brewing System": "Drip Style Coffee Maker",
      Design: "Contemporary",
      "Primary Use": "Coffee Preparation",
      "Package Contents": "Coffee Maker Unit, Glass Carafe, Single Serve Basket",
      "Control Type": "Automatic Operation",
      "Power Rating": "120 Volts",
      "Product Series": "FlexBrew Trio",
      Brand: "Hamilton Beach",
      "Net Weight": "6.5 pounds",
    },
    content: `Product Description
The Hamilton Beach® FlexBrew® Trio Coffee Maker offers the ultimate versatility with three 
convenient brewing options—perfect for both home kitchens and office coffee stations.
Brew a single cup in just 90 seconds using your favorite coffee pod or ground coffee 
directly into a cup or travel mug, or prepare a full 12-cup pot with ground coffee in 
the included glass carafe.
Designed for flexibility and precision, this dual coffee maker allows every coffee 
lover to enjoy their perfect brew, whether it's a quick morning cup or a full pot to share.`,
  },
  "hot-iced-coffee-maker": {
    title: "Hot & Iced Coffee Maker with Bold Setting",
    category: "Machine",
    rating: 4.7,
    images: [
      "https://m.media-amazon.com/images/I/8150coh3TDL._AC_SX679_.jpg",
    ],
    amazonUrl: "https://amzn.to/3JGa1SO",
    aboutThisItem: [
      {
        title: "ADJUSTABLE FLAVOR INTENSITY",
        description:
          "Choose between two strength levels—standard or extra-bold—for both hot and iced coffee preparations, tailoring each cup to your taste preferences.",
      },
      {
        title: "FIVE SERVING SIZE OPTIONS",
        description:
          "Precisely control portion sizes with selections ranging from 6 to 14 ounces, accommodating everything from small cups to large mugs or shared servings.",
      },
      {
        title: "LARGE DETACHABLE RESERVOIR",
        description:
          "The 50-ounce removable water tank supports multiple brewing cycles without constant refilling, streamlining your coffee-making routine.",
      },
      {
        title: "RAPID BREWING TECHNOLOGY",
        description: "Produces both hot and iced coffee beverages quickly, delivering fresh-brewed flavor in minutes.",
      },
      {
        title: "SELF-CLEANING CYCLE",
        description:
          "Activate the automatic cleaning function by pressing Size and Bold buttons simultaneously. This feature reduces mineral deposits and maintains optimal flavor without manual scrubbing.",
      },
    ],
    productInfo: {
      Manufacturer: "KIDISLE",
      Finish: "Black",
      Dimensions: '10" Deep x 6.3" Wide x 11.3" High',
      "Key Features": "Auto Shut-Off, Permanent Filter",
      "Brewing System": "Drip Style Coffee Maker",
    },
    content: `Product Description
Brew the perfect cup every time with this Hot & Iced Single Serve Coffee Maker. 
Designed for versatility and convenience, it allows you to make both hot and iced 
coffee using either K-Cups or ground coffee.
Choose from brew sizes between 6 and 14 ounces, and easily adjust the flavor 
intensity with the Bold setting for a stronger, richer taste. The 50 oz removable 
water tank lets you brew multiple cups before refilling, while the reusable filter 
provides an eco-friendly option for your favorite grounds.
Compact yet powerful, this one-cup coffee machine fits seamlessly into any 
kitchen or office space. Whether you prefer a steaming mug in the morning or a 
refreshing iced coffee in the afternoon, it delivers great flavor fast—every time.`,
  },
  "casabrews-cm5418-espresso": {
    title: "CASABREWS CM5418 Espresso Machine 20 Bar",
    category: "Machine",
    rating: 4.4,
    images: [
      "https://m.media-amazon.com/images/I/617U+hSCJEL._AC_SL1500_.jpg",
    ],
    amazonUrl: "https://amzn.to/4qEldjC",
    aboutThisItem: [
      {
        title: "TIMELESS ITALIAN STYLING",
        description:
          "Features the iconic eight-sided design that has remained unchanged since its introduction in 1933.",
      },
      {
        title: "VERSATILE STOVETOP COMPATIBILITY",
        description: "Functions on gas, electric, and induction cooktops (induction requires adapter plate).",
      },
      {
        title: "CONCENTRATED COFFEE EXTRACTION",
        description: "Creates robust, espresso-style coffee with intense flavor and full body.",
      },
      {
        title: "LIGHTWEIGHT ALUMINUM BUILD",
        description: "Combines durability with portability for reliable, long-lasting performance.",
      },
      {
        title: "STRAIGHTFORWARD OPERATION",
        description: "Three-chamber design requires no electrical power and offers simple, intuitive brewing.",
      },
      {
        title: "VARIOUS CAPACITY OPTIONS",
        description: "Available in 1, 3, 6, 9, and 12 cup sizes to suit different household needs.",
      },
      {
        title: "BUDGET-FRIENDLY QUALITY",
        description: "Delivers premium coffee brewing experience at an accessible price point.",
      },
    ],
    productInfo: {
      Manufacturer: "CASABREWS",
      Finish: "A-Silver",
      Dimensions: '12.28" Deep x 5.47" Wide x 11.97" High',
      "Key Features":
        "Cappuccino Preparation, Milk Frothing Steam Wand, Brushed Stainless Steel Construction, Suitable for Home or Office Use, Instructional Videos Available at CASABREWS Store",
      "Brewing System": "Espresso Machine",
      Design: "Button Control",
      Brand: "CASABREWS",
      "Net Weight": "8.59 pounds",
    },
    content: `
Bring café-quality espresso drinks to your home with the CASABREWS Espresso Machine 
with Milk Frother. This stylish stainless steel coffee maker lets you prepare all your 
favorite espresso-based beverages—latte, cappuccino, macchiato, and more—right in your 
kitchen or office. Compact and durable, it fits beautifully in any space.

Powered by a professional 20-bar Italian pump and a 1350W heating system, 
this semi-automatic 2-in-1 espresso machine ensures optimal extraction for a rich, 
full-bodied flavor and enticing aroma. The built-in pressure gauge allows you to monitor 
and fine-tune brewing pressure to match your personal taste.

The powerful steam wand produces velvety microfoam milk, perfect for latte art and enhancing 
the texture and flavor of your drinks. Create barista-level beverages and unleash your creativity 
with every cup.

With its compact and practical design, the CASABREWS coffee maker brews single or double espresso 
shots in minutes. The 34 oz removable water tank provides enough capacity for multiple servings 
and is easy to refill and clean. Included accessories: espresso machine, 34 oz water tank, 
single and double shot filters, portafilter, tamper with spoon, and user manual.

Note: After frothing milk, allow the machine to cool down before brewing again to prevent 
overheating. If the 1-cup or 2-cup lights flash, follow the cooling steps in the included guide. 
For more details, visit the CASABREWS Store for instructional videos.`,
  },
  "bloom-nutrition-milk-frother": {
    title: "Bloom Nutrition Milk Frother",
    category: "Machine",
    rating: 4.6,
    images: ["https://m.media-amazon.com/images/I/51vX3eeHR5L._AC_SX679_.jpg"],
    amazonUrl: "https://amzn.to/438oFcc",
    aboutThisItem: [
      {
        title: "POWERFUL HANDHELD FROTHER",
        description:
          "Our high-performance electric whisk instantly blends Bloom supplements to smooth perfection without clumps. Perfect for greens, collagens, proteins, and other nutritional powders that support your wellness goals.",
      },
      {
        title: "MULTI-PURPOSE BLENDING TOOL",
        description:
          "This versatile electric mixer works with various liquids to create smooth, frothy textures. Use it for supplement mixing, coffee frothing, matcha whisking, egg beating, or salad dressing preparation.",
      },
      {
        title: "SIMPLE ONE-BUTTON DESIGN",
        description:
          "Single on/off switch provides instant blending power. Includes ergonomic plastic handle for comfortable grip and elegant stand for organized storage and easy access.",
      },
      {
        title: "PORTABLE AND MAINTENANCE-FREE",
        description:
          "Battery-powered operation (2 AA batteries) eliminates cords and outlets, offering complete portability. Rust-resistant stainless steel construction ensures durability. Clean effortlessly by running under hot water while activated.",
      },
      {
        title: "WOMAN-OWNED BRAND",
        description:
          "Co-founder Mari Llewellyn created Bloom after struggling to find supplements with quality ingredients and great taste. Bloom offers approachable, delicious health products designed to support your wellness journey.",
      },
    ],
    productInfo: {
      Manufacturer: "Bloom Nutrition",
      Finish: "Mixer",
      Dimensions: '3" Wide x 10" High',
      "Key Features": "Battery Powered",

      Style: "Electric",

      "Included Components": "Mixers",

      Material: "Stainless Steel",

      Manufacturer: "Bloom Nutrition",
      "Item Weight": "5.3 ounces",
    },
    content: `Experience café-style drinks at home with the Bloom Nutrition Electric Milk Frother. This compact handheld mixer quickly transforms milk into a rich, creamy foam—perfect for coffee, matcha, protein shakes, and other beverages.

Key Features:

Powerful & Efficient: High-speed motor whips milk in seconds, creating smooth foam for lattes, cappuccinos, or hot chocolate.

Ergonomic Design: The lightweight handle provides a comfortable grip for effortless frothing.

Premium Build: Made with durable stainless steel and a sturdy whisk for long-lasting use.

Battery Operated: Cord-free design for portability and convenience anywhere.

Complete Set: Comes with a sleek stand for easy storage.

Elegant Look: Modern green finish with Bloom branding—perfect for any kitchen.

Why You'll Love It:
Whether you're blending matcha, whipping protein drinks, or enhancing your morning latte, this frother combines performance and style. With over 3,000 positive ratings and Amazon's Choice badge, it's a proven favorite among home baristas.`,
  },
  "keurig-k-duo-hot-iced-single-serve": {
    title: "Keurig K-Duo Hot & Iced Single Serve & Carafe Coffee Maker",
    category: "Machine",
    rating: 4.2,
    images: ["https://m.media-amazon.com/images/I/71lXNChJJPL._AC_SX679_.jpg"],
    amazonUrl: "https://amzn.to/4hBnWX3",
    aboutThisItem: [
      {
        title: "ICED BEVERAGE MODE",
        description:
          "Optimizes brewing temperature specifically for iced drinks, maximizing flavor extraction while minimizing ice dilution for single-cup iced coffees and teas.",
      },
      {
        title: "ENHANCED STRENGTH & TEMPERATURE",
        description:
          "Brew more concentrated, intensely flavored cups with the strong setting, or select extra hot mode for hotter single-serve beverages.",
      },
      {
        title: "VERSATILE SERVING SIZES",
        description:
          "Prepare single cups in 6, 8, 10, or 12-ounce sizes, or brew full carafes in 6, 8, 10, or 12-cup capacities. Specially designed glass carafe minimizes dripping.",
      },
      {
        title: "SHARED 72-OUNCE RESERVOIR",
        description:
          "Extra-large removable water tank serves both brewing sides, enabling quick, convenient preparation with minimal refilling required.",
      },
      {
        title: "FRONT-MOUNTED CONTROLS",
        description:
          "User-friendly interface positioned at the front for easy access to all brewing preferences and settings.",
      },
      {
        title: "SCHEDULED CARAFE BREWING",
        description:
          "Program the coffee maker to automatically prepare a full carafe up to 24 hours in advance for wake-up-ready coffee.",
      },
      {
        title: "SPACE-EFFICIENT DESIGN",
        description: "Combines dual brewing capabilities in a single compact unit that saves valuable counter space.",
      },
    ],
    productInfo: {
      Manufacturer: "Keurig",
      Finish: "Black",
      Dimensions: '12.9" Deep x 11.1" Wide x 12.7" High',
      "Key Features": "Removable Tank",
      "Brewing System": "Espresso Machine",
      Design: "K-Duo Gen-2",
      "Primary Use": "Iced Coffee,Hot Coffee",
      "Included Components": "Carafe",
      "Operation Mode": "Fully Automatic",
      Voltage: "110",
      "Model Name": "Keurig K-Duo Gen 2",
      Manufacturer: "Keurig",
      "Item Weight": "1 pounds",
    },
    content: `Introducing the Keurig K-Duo Single Serve & Carafe Coffee Maker — a versatile brewer designed for 
every coffee moment. Enjoy the flexibility to brew a single cup using K-Cup pods or a full carafe
with your favorite ground coffee, all in one compact and stylish machine.

The upgraded design includes a 72oz removable water reservoir that supplies both sides of the brewer, reducing refill frequency and simplifying daily use. Its front-facing digital control panel provides quick, intuitive access to all brewing settings.

On the single-serve side, you can choose from 6, 8, 10, or 12oz cup sizes. The K-Duo features MultiStream Technology, ensuring even saturation of the grounds for optimal flavor extraction. With multiple brew options such as Brew Over Ice, Strong Brew, and Extra Hot, you can craft your perfect drink — from refreshing iced coffee to rich, steaming espresso-style cups.

The carafe side offers brewing capacities of 6, 8, 10, or 12 cups, and its Auto Brew function lets you schedule your coffee up to 24 hours in advance. The redesigned glass carafe prevents drips and sits on a heated plate to keep your coffee hot and flavorful for hours.

Whether it's a quiet morning for one or a lively gathering with friends, the Keurig K-Duo delivers premium coffee experiences — consistently, conveniently, and your way.`,
  },
  "ninja-luxe-cafe-3-in-1-espresso": {
    title: "Ninja Luxe Café 3-in-1 Espresso, Drip Coffee and Cold Brew Machine",
    category: "Machine",
    rating: 4.5,
    images: ["https://m.media-amazon.com/images/I/71hQjwGKVrL._AC_SX679_.jpg"],
    amazonUrl: "https://amzn.to/4hDSNSM",
    aboutThisItem: [
      {
        title: "TRIPLE BREWING SYSTEM",
        description:
          "Seamlessly prepare precision espresso, balanced drip coffee, and quick cold brew without guesswork. Offers 2 espresso styles (double or quad shot), 3 drip styles (classic, rich, or over ice), and 2 cold brew options (cold-pressed espresso or cold brew coffee) in sizes from 6 to 18 ounces.",
      },
      {
        title: "INTELLIGENT BREWING GUIDANCE",
        description:
          "Advanced Barista Assist Technology provides personalized grind recommendations, weight-based dosing, and real-time brewing adjustments for temperature and pressure, ensuring perfectly balanced, café-quality results without trial and error.",
      },
      {
        title: "BUILT-IN BURR GRINDER",
        description:
          "Conical burr grinder features 25 precision settings, delivering consistently fresh, accurately ground coffee optimized for any bean variety and brewing method.",
      },
      {
        title: "PRECISION SCALE DOSING",
        description:
          "Integrated scale automatically measures the exact amount of grounds needed for each drink type. Unlike time-based grinders, this weight-based system eliminates manual weighing and ensures consistent results.",
      },
      {
        title: "AUTOMATED MILK FROTHING",
        description:
          "Dual Froth System simultaneously steams and whisks dairy or plant-based milk to create perfect microfoam texture. Four preset programs (steamed milk, thin froth, thick froth, cold foam) eliminate manual frothing guesswork.",
      },
      {
        title: "COLD-PRESSED EXTRACTION",
        description:
          "Espresso brewed at reduced temperature and pressure extracts smoother, more flavorful coffee at a slower pace—ideal for creating sophisticated cold beverages like espresso martinis.",
      },
      {
        title: "OPTIMAL PUCK FORMATION",
        description:
          "Assisted tamper creates uniformly distributed, properly compacted coffee pucks, ensuring even water distribution for bold, high-quality espresso shots every time.",
      },
    ],
    productInfo: {
      Manufacturer: "Ninja",
      Finish: "Stainless Steel",
      Dimensions: '12.99" Deep x 13.39" Wide x 14.57" High',
      "Key Features": "Auto Shut-Off, Dishwasher Safe Parts, Milk Frother, Programmable, Timer",
      "Coffee Maker Type": "Espresso Machine",
      Style: "Luxe Cafe",
      "Specific Uses For Product": "Cappuccino, Espresso, Iced Coffee, Latte, Mocha",
      "Included Components":
        "Assisted Tamper, Cleaning Brush, Cleaning Disc, Funnel, Descaling Powder, Cleaning tablets, Hard Water Testing Kit, Double Basket, Esspresso Machine, Portafilter, Luxe Basket, Milk Jug",
      "Operation Mode": "Fully Automatic",
      "Model Name": "Ninja ES601",
      Manufacturer: "Ninja",
      "Item Weight": "31.9 pounds",
    },
    content: `Product Description

Experience espresso made simple with the Ninja Luxe Café Premier Series — a smart, all-in-one espresso and coffee system that delivers café-quality results at home. Its advanced 3-in-1 functionality lets you enjoy perfectly balanced espresso, rich drip coffee, or refreshing cold brew — all with no guesswork required.

Powered by Barista Assist Technology, the machine automatically guides you through every step — from grind size suggestions to precise brewing adjustments — ensuring consistent, delicious results every time. The built-in Dual Froth System creates silky, hands-free microfoam for lattes, cappuccinos, and specialty drinks in seconds.

Redefine your coffee routine with the intuitive design, professional performance, and effortless control of the Ninja Luxe Café Premier Series.`,
  },
}

export default function ReviewDetailPage({ params }: { params: { slug: string } }) {
  const review = reviewsData[params.slug]

  if (!review) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-foreground">Review not found</h1>
          <Link href="/reviews" className="text-primary hover:underline mt-4 inline-block">
            Back to reviews
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/reviews" className="flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to reviews
        </Link>

        <article className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="relative bg-white">
            <img
              src={review.images?.[0] || review.image || "/placeholder.svg"}
              alt={review.title}
              className="w-full h-96 object-contain"
            />
          </div>

          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {review.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-foreground mb-4">{review.title}</h1>

            <div className="flex items-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(review.rating) ? "fill-primary text-primary" : "text-muted-foreground"
                  }`}
                />
              ))}
              <span className="ml-2 text-lg font-semibold text-foreground">{review.rating}/5</span>
            </div>

            {/* Affiliate Disclosure */}
            <div className="mb-4 p-4 bg-amber-900/20 border border-amber-800 rounded-lg">
              <p className="text-sm text-amber-200">
                <strong>Affiliate Disclosure:</strong> As an Associate, we earn from qualifying purchases made through
                links on this page. This helps support our site at no extra cost to you.
              </p>
            </div>

            <a
              href={review.amazonUrl}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="inline-block bg-[#ff9500] hover:bg-[#e68600] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 mb-8"
            >
              Check Price on Retailer
            </a>

            {review.aboutThisItem && review.aboutThisItem.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-amber-50 mb-4">About this item</h2>
                <ul className="space-y-3">
                  {review.aboutThisItem.map((item: any, index: number) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-amber-50">•</span>
                      <p className="text-amber-100">
                        <span className="font-bold">{item.title}:</span> {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {review.productInfo && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-amber-50 mb-6">Product information</h2>
                <div className="space-y-0">
                  {Object.entries(review.productInfo).map(([key, value], index, array) => (
                    <div
                      key={key}
                      className={`grid grid-cols-2 gap-4 py-3 ${index < array.length - 1 ? "border-b border-amber-800" : ""}`}
                    >
                      <span className="text-amber-200 font-semibold">{key}</span>
                      <span className="text-amber-100">{String(value)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="prose prose-invert max-w-none mb-8">
              {review.content.split("\n\n").map((paragraph: string, index: number) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {review.specs && (
              <div className="bg-background rounded-lg p-6 mt-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(review.specs).map(([key, value]) => (
                    <div key={key} className="border-b border-border pb-2">
                      <p className="text-sm text-muted-foreground">{key}</p>
                      <p className="text-foreground font-semibold">{String(value)}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
      <Footer />
    </main>
  )
}
