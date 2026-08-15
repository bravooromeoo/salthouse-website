import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-30 py-8">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="flex items-center gap-12 uppercase tracking-[0.22em] text-[12px] text-white/80">

          <Link
            to="/"
            className="hover:text-[#d4b06a] transition duration-300"
          >
            Home
          </Link>

          <a
            href="#services"
            className="hover:text-[#d4b06a] transition duration-300"
          >
            Services
          </a>

          <a
            href="#journal"
            className="hover:text-[#d4b06a] transition duration-300"
          >
            Journal
          </a>

          <Link
            to="/about"
            className="hover:text-[#d4b06a] transition duration-300"
          >
            About
          </Link>

          <a
            href="#enquire"
            className="hover:text-[#d4b06a] transition duration-300"
          >
            Enquire
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;