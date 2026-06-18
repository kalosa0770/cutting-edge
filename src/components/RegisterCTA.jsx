import { motion } from "framer-motion";
import { Scissors } from "lucide-react";

export default function RegisterCTA({ onRegisterClick }) {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="register-cta" className="relative bg-neutral-950 text-white py-28 px-6 md:px-16 overflow-hidden min-h-[450px] flex items-center justify-center">
      
      {/* 🏙️ BACKGROUND IMAGE LAYER WITH HIGH-CONTRAST EDITORIAL OVERLAYS */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/cutting-edge-photo-2.svg" 
          alt="Cuttingedge Barbershop Arena" 
          className="w-full h-full object-cover object-top"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        {/* Deep gradient fade to merge cleanly into adjacent dark components */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
      </div>

      {/* ⏳ MULTIPLIED LARGE SANDY TEXTURE LAYER (Maintains brand continuity) */}
      <div className="absolute inset-0 opacity-[0.2] mix-blend-multiply pointer-events-none z-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="ctaSandyNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.13" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.15   0 0 0 0 0.15   0 0 0 0 0.12  0 0 0 1 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#ctaSandyNoise)" />
        </svg>
      </div>

      {/* CONTENT WORKSPACE */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
        className="max-w-3xl w-full text-center space-y-6 relative z-20 flex flex-col items-center"
      >
        {/* Animated Accent Flourish */}
        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-xs border border-white/20 text-white/90 shadow-lg">
          <Scissors size={20} className="rotate-90 animate-pulse" />
        </div>

        {/* Brand Headline & Copy Stack */}
        <div className="space-y-3">
          <h2 className="font-display text-5xl sm:text-4xl md:text-7xl tracking-normal text-white uppercase">
            Are You Ready <br />
            To Compete?
          </h2>
          <div className="w-16 h-[1px] bg-white/30 mx-auto my-4" />
          <p className="font-body text-sm sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            Fill in your details below to secure your spot. Spaces are limited — early registration is highly encouraged.
          </p>
        </div>

        {/* Main Action Trigger Link Button */}
        <div className="pt-4">
          <button
            onClick={onRegisterClick}
            className="px-10 py-4 bg-[#faf6e4] text-[#183634] font-body font-black tracking-widest text-xs uppercase hover:bg-white active:scale-[0.97] transition-all duration-200 shadow-2xl cursor-pointer select-none border border-transparent"
          >
            Register Here &rarr;
          </button>
        </div>
      </motion.div>
    </section>
  );
}