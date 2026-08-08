function Footer() {
  return (
    <footer className="bg-[#111111] text-white border-t border-white/10 py-12 px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="uppercase tracking-[0.3em] text-[#d4b06a] text-lg">
            Salt House
          </h2>

          <p className="mt-3 text-white/60 text-sm">
            Private Property Stewardship
          </p>

          <p className="text-white/40 text-sm">
            Devon & Cornwall
          </p>
        </div>

        {/* Instagram */}
        <a
          href="https://instagram.com/salthousecollection"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-[#d4b06a] transition duration-300"
          aria-label="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>

        {/* Copyright */}
        <div className="text-white/40 text-sm text-center md:text-right">
          © 2026 Salt House Collection Ltd
        </div>

      </div>
    </footer>
  );
}

export default Footer;