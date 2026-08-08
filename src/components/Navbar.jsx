function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 px-8 py-6 flex items-center justify-between">
      
      <div className="text-sm tracking-[0.28em] uppercase text-stone-900">
        Salt House Collection
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-stone-700">
        <a href="#services" className="hover:text-stone-900 transition">
          Services
        </a>

        <a href="#about" className="hover:text-stone-900 transition">
          Our Approach
        </a>

        <a href="#locations" className="hover:text-stone-900 transition">
          Devon & Cornwall
        </a>

        <a href="#contact" className="hover:text-stone-900 transition">
          Contact
        </a>
      </div>

      <button className="border border-stone-900 px-5 py-2 text-sm hover:bg-stone-900 hover:text-white transition">
        Enquire
      </button>

    </nav>
  );
}

export default Navbar;