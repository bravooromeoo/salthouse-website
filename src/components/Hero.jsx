function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 min-h-screen flex items-end px-8 md:px-16 lg:px-20 pb-24">
        <div className="max-w-3xl text-white">

          <p className="uppercase tracking-[0.35em] text-sm text-[#d4b06a] mb-7">
            Private Property Stewardship
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-light">
            Inspired by luxury
            <br />
            hospitality.
          </h1>

          <div className="w-40 h-px bg-[#d4b06a] my-8"></div>

          <p className="text-lg md:text-xl leading-relaxed text-white/85 max-w-2xl">
            Discreet. Thorough. Trusted. We care for exceptional homes in Devon
            and Cornwall with the standards of the world&apos;s finest.
          </p>

          <a
            href="#services"
            className="inline-block mt-10 border border-[#d4b06a] px-8 py-4 uppercase tracking-[0.22em] text-sm text-[#d4b06a] hover:bg-[#d4b06a] hover:text-black transition duration-300"
          >
            Discover Our Services
          </a>

        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-center text-[#d4b06a]">
        <p className="uppercase tracking-[0.3em] text-xs mb-2">
          Scroll
        </p>
        <div className="text-2xl">↓</div>
      </div>
    </section>
  );
}

export default Hero;