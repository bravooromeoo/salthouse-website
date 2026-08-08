function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-30 px-8 md:px-10 py-7 flex items-center justify-between">

      <div className="uppercase tracking-[0.3em] text-[15px] md:text-[17px] text-[#d6b573] font-light">
        Salt House
      </div>

      <div className="hidden lg:flex items-center gap-10 uppercase tracking-[0.22em] text-[12px] text-white/80">

        <a href="#stewardship" className="hover:text-[#d6b573] transition duration-300">
          Stewardship
        </a>

        <a href="#services" className="hover:text-[#d6b573] transition duration-300">
          Services
        </a>

        <a href="#journal" className="hover:text-[#d6b573] transition duration-300">
          Journal
        </a>

        <a href="#about" className="hover:text-[#d6b573] transition duration-300">
          About
        </a>

        <a href="#enquiry" className="hover:text-[#d6b573] transition duration-300">
          Enquire
        </a>

      </div>
    </nav>
  );
}

export default Navbar;