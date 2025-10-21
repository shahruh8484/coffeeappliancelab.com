export function Hero() {
  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{
        backgroundImage: "url(/coffee-cup-hero-dark-background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-radial from-black/40 via-black/60 to-black/85"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-amber-100 mb-6 text-balance font-serif">
          Your Personal Coffee Journey
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-balance">
          Honest, detailed reviews of coffee machines and beans. Discover what works best for your perfect cup.
        </p>
      </div>
    </section>
  )
}
