function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/hero.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 text-center px-6 max-w-5xl text-white">
        <p className="uppercase tracking-[0.4em] text-sm text-[#c8a66a] mb-6">
          Private Property Stewardship
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight">
          Come home to perfection.
        </h1>

        <p className="mt-8 text-lg md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Discreet stewardship for exceptional homes across Devon & Cornwall.
        </p>

        <a
          href="#stewardship"
          className="inline-block mt-10 border border-[#c8a66a] px-10 py-4 uppercase tracking-[0.2em] text-sm text-[#d5b67c]"
        >
          Discover Salt House
        </a>
      </div>
    </section>
  );
}

export default Hero;