export default function Footer() {
    return (
      <footer className="relative bg-[#faf6e4] text-[#183634] border-t border-[#183634]/10 py-12 px-6 md:px-16 overflow-hidden">
        {/* ⏳ MULTIPLIED LARGE SANDY TEXTURE LAYER */}
        <div className="absolute inset-0 opacity-[0.2] mix-blend-multiply pointer-events-none z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <filter id="footerSandyNoise">
              <feTurbulence type="fractalNoise" baseFrequency="0.12" numOctaves="4" stitchTiles="stitch" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.25   0 0 0 0 0.22   0 0 0 0 0.18  0 0 0 1 0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#footerSandyNoise)" />
          </svg>
        </div>
  
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 font-body text-xs md:text-sm tracking-wider uppercase font-medium">
          {/* Left Side: Branding Info */}
          <div className="text-center sm:text-left space-y-1">
            <p className="font-display font-black text-sm tracking-widest">© 2026 Cuttingedge Contest</p>
            <p className="text-[#000000]/50 normal-case font-normal italic">Where skill meets steel.</p>
          </div>
  
          {/* Center: Vintage Typographic Accent flourish split divider line */}
          <div className="hidden md:flex items-center gap-2 text-[#183634]/30 select-none">
            <span className="text-xs font-serif">❧</span>
            <div className="h-[1px] w-12 bg-[#183634]/20" />
            <span className="text-xs font-serif">☙</span>
          </div>
  
          {/* Right Side: Clean Contact Details (Exactly where the nav links were) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-[#183634]/80 font-semibold text-center sm:text-right">
            <p className="normal-case font-normal italic text-[#000000]/60 block">
              <span className="text-[#183634]/50 not-italic uppercase tracking-wide font-bold text-[10px] mr-1">WhatsApp:</span>
              +260 96 779 9174
            </p>
            
            <p className="normal-case font-normal italic text-[#000000]/60 block">
              <span className="text-[#183634]/50 not-italic uppercase tracking-wide font-bold text-[10px] mr-1">Instagram:</span>
              @cuttingedgebarbershop_zm
            </p>
          </div>
        </div>
      </footer>
    );
  }