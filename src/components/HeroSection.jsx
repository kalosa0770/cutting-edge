import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Award, Scissors } from "lucide-react";
import { toast } from "react-toastify";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const triggerNotification = () => {
    toast.info("📜 The competitor ledger is accepting entries.", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      className: "bg-[#faf6e4] text-[#183634] font-serif border border-[#183634]",
    });
  };

  return (
    <div 
      className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col justify-between bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/cutting-edge-bg.svg')" }}
    >
      {/* Background darken overlays */}
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 z-0" />
      
      {/* ⏳ ENHANCED MULTIPLIED LARGE SANDY TEXTURE LAYER */}
      <div className="absolute inset-0 opacity-75 mix-blend-multiply pointer-events-none z-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="largeSandyNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.15" numOctaves="5" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.2   0 0 0 0 0.18   0 0 0 0 0.15  0 0 0 1 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#largeSandyNoise)" />
        </svg>
      </div>

      {/* ========================================================= */}
      {/* NAVIGATION BAR                                            */}
      {/* ========================================================= */}
      <nav className="w-full z-40 px-6 md:px-16 py-6 grid grid-cols-2 md:grid-cols-3 items-center bg-transparent sticky top-0">
        
        {/* Left Side: Navigation Menu Links */}
        <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium tracking-widest uppercase text-white/90">
          <a href="#about" className="hover:text-white/70 transition-colors">About</a>
          <a href="#categories" className="hover:text-white/70 transition-colors">Categories</a>
          <a href="#schedule" className="hover:text-white/70 transition-colors">Schedule</a>
        </div>

        {/* Center Side: Logo Placement with Forced Native CSS Inversion */}
        <div className="flex justify-start md:justify-center items-center z-10">
          <img 
            src="/cutting-edge-logo.png" 
            alt="Cuttingedge Man Logo" 
            style={{ filter: 'invert(1) brightness(2)' }}
            className="h-16 md:h-22 w-auto object-contain drop-shadow-[0_4px_8px_rgba(255,255,255,0.15)]"
          />
        </div>

        {/* Right Side: Explicit Action Trigger */}
        <div className="hidden md:flex justify-end items-center">
          <button 
            onClick={triggerNotification}
            className="px-6 py-2.5 bg-white text-black hover:bg-white/90 font-bold tracking-widest text-xs uppercase transition-all duration-300 cursor-pointer shadow-md"
          >
            Register to Battle
          </button>
        </div>

        {/* Mobile Hamburger Toggle (Animates cleanly into an X) */}
        <div className="flex md:hidden justify-end items-center z-50">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none bg-black/40 backdrop-blur-md rounded-sm p-2"
            aria-label="Toggle Menu"
          >
            <motion.div 
              animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-[2px] bg-white rounded-full origin-center"
            />
            <motion.div 
              animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-[2px] bg-white rounded-full"
            />
            <motion.div 
              animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-[2px] bg-white rounded-full origin-center"
            />
          </button>
        </div>

        {/* Mobile Bottom-Up Drawer Interface */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Darkened Backdrop Tap Dismissal Mask */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 md:hidden"
              />

              {/* Bottom Drawer Element */}
              <motion.div 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed bottom-0 left-0 w-full bg-neutral-950/95 border-t border-white/10 p-8 pb-12 flex flex-col gap-5 font-body text-lg tracking-widest text-center uppercase text-white shadow-2xl rounded-t-2xl z-45 md:hidden overflow-hidden"
              >
                {/* Independent Sandy Texture Overlay baked specifically inside the drawer wrapper background */}
                <div className="absolute inset-0 opacity-100 mix-blend-multiply pointer-events-none z-0">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <filter id="drawerSandyNoise">
                      <feTurbulence type="fractalNoise" baseFrequency="0.2" numOctaves="4" stitchTiles="stitch" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.2   0 0 0 0 0.18   0 0 0 0 0.15  0 0 0 1 0" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#drawerSandyNoise)" />
                  </svg>
                </div>

                {/* Drawer Pull Indicator Line */}
                <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-2 z-10" />

                <a href="#about" onClick={() => setIsMenuOpen(false)} className="py-2.5 hover:text-white/70 transition-colors z-10">About</a>
                <a href="#categories" onClick={() => setIsMenuOpen(false)} className="py-2.5 hover:text-white/70 transition-colors z-10">Categories</a>
                <a href="#schedule" onClick={() => setIsMenuOpen(false)} className="py-2.5 hover:text-white/70 transition-colors z-10">Schedule</a>
                
                <button 
                  onClick={() => { setIsMenuOpen(false); triggerNotification(); }}
                  className="w-full py-4 bg-white text-black font-bold tracking-widest text-xs uppercase mt-4 shadow-xl active:scale-[0.98] transition-transform z-10"
                >
                  Register to Battle
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* ========================================================= */}
      {/* MAIN HERO CONTENT DISPLAY                                 */}
      {/* ========================================================= */}
      <main className="flex-1 flex items-center justify-center px-6 py-16 md:py-24 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          
          {/* Emblem Badge Banner */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mx-auto"
          >
            <div className="px-5 py-2 bg-black/40 backdrop-blur-sm text-white/90 tracking-widest text-xs font-bold uppercase flex items-center gap-3 rounded-sm">
              <Scissors size={12} className="rotate-90 text-white" />
              Cuttingedge Barbershop Presents
            </div>
          </motion.div>

          {/* Core Typography Headers */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-white leading-none drop-shadow-lg"
            >
              Edge Cutting <br />
              <span className="font-black">Contest</span>
            </motion.h1>
            
            {/* Elegant Vintage Flourish Element */}
            <div className="flex items-center justify-center gap-4 max-w-xs mx-auto my-6 text-white select-none">
              <span className="text-xl font-serif">❧</span>
              <div className="h-[1px] bg-gradient-to-r from-transparent via-white to-transparent flex-1" />
              <span className="text-2xl font-serif">🙞 ✨ 🙜</span>
              <div className="h-[1px] bg-gradient-to-r from-transparent via-white to-transparent flex-1" />
              <span className="text-xl font-serif">☙</span>
            </div>
          </div>

          {/* Descriptive Copy Block */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-body text-white/60 text-sm md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            A grand stage showcasing hair craft and facial grooming. Where skill meets steel. Zambia's premier barber competition.
          </motion.p>

          {/* Action Interface Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2 z-20"
          >
            <button 
              onClick={triggerNotification}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold tracking-widest text-xs uppercase hover:bg-white/90 transition-all duration-300 shadow-xl cursor-pointer"
            >
              Enter the Competition
            </button>
            
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-bold tracking-widest text-xs uppercase border border-white/30 hover:border-white/80 transition-all duration-300 cursor-pointer">
              View the Rules
            </button>
          </motion.div>

        </div>
      </main>

      {/* Symmetrical Layout Counter balance element */}
      <div className="h-4 w-full opacity-0 pointer-events-none" />
    </div>
  );
}