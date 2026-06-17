import { motion } from "framer-motion";
import { Trophy, Medal, Award } from "lucide-react";

export default function ContestPrizes() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="prizes" className="relative bg-black text-white py-24 px-6 md:px-16 overflow-hidden">
      
      {/* ⏳ MULTIPLIED LARGE SANDY TEXTURE LAYER */}
      <div className="absolute inset-0 opacity-[0.35] mix-blend-multiply pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="prizesSandyNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.14" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.15   0 0 0 0 0.15   0 0 0 0 0.12  0 0 0 1 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#prizesSandyNoise)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16 md:space-y-24">
        
        {/* ========================================================= */}
        {/* UPPER BLOCK: HEADER INTRO COPY                            */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
            Compete for <br />
            Real Rewards
          </h2>
          <p className="font-body text-sm md:text-lg text-white/70 leading-relaxed">
            The top three competitors walk away with cash prizes and the recognition they've earned. There's no bigger stage for a Zambian barber than this.
          </p>
          <div className="w-16 h-[1px] bg-white/20 mx-auto pt-2" />
        </div>

        {/* ========================================================= */}
        {/* LOWER BLOCK: PODIUM POD ARCHITECTURE GRID                */}
        {/* ========================================================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-end max-w-5xl mx-auto"
        >
          
          {/* 🥈 2nd Place Card (Left side on desktop, stacked appropriately on mobile) */}
          <motion.div 
            variants={cardVariants}
            className="bg-neutral-900/30 border border-white/10 p-8 flex flex-col justify-between order-2 md:order-1 min-h-[340px] rounded-xs group hover:border-white/30 transition-all duration-300 shadow-xl relative"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-body text-xs font-bold tracking-widest text-white/40 uppercase">2nd Place</span>
                <Medal className="w-6 h-6 text-neutral-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="space-y-1 items-center justify-center text-center">
                <p className="font-display text-xl lg:text-2xl font-black tracking-tight text-white">ZMW 5,000</p>
                <p className="font-body italic text-xs uppercase tracking-widest text-neutral-400 font-semibold">Zambian Kwacha</p>
              </div>
              <p className="font-body text-sm lg:text-sm text-center text-white/60 leading-relaxed pt-2">
                Runner-up cash prize + Cuttingedge Runner-Up Certificate
              </p>
            </div>
            <div className="w-full h-[3px] bg-neutral-400/20 group-hover:bg-neutral-400 transition-colors" />
          </motion.div>

          {/* 🏆 1st Place Champion Card (Centered, scaled up, elevated layout depth) */}
          <motion.div 
            variants={cardVariants}
            className="bg-gradient-to-b from-[#183634]/40 to-neutral-900/40 border-2 border-[#183634] p-8 flex flex-col justify-between order-1 md:order-2 min-h-[380px] md:scale-105 z-20 rounded-xs group shadow-2xl relative"
          >
            {/* Visual Callout Crown Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#183634] text-[#faf6e4] font-body font-black text-[10px] tracking-widest uppercase rounded-sm border border-[#faf6e4]/10 shadow-md">
              Grand Champion
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <span className="font-body text-xs font-bold tracking-widest text-white/50 uppercase">1st Place</span>
                <Trophy className="w-7 h-7 text-yellow-500 group-hover:scale-110 transition-transform animate-pulse" />
              </div>
              <div className="space-y-1 items-center justify-center text-center">
                <p className="font-display text-xl lg:text-2xl font-black tracking-tight text-white leading-none">ZMW 10,000</p>
                <p className="font-body italic text-xs uppercase tracking-widest text-yellow-500 font-semibold">Zambian Kwacha</p>
              </div>
              <p className="font-body text-sm text-center text-white/80 leading-relaxed pt-2">
                Grand prize cash + Cuttingedge Champion Trophy + Feature on all official channels
              </p>
            </div>
            <div className="w-full h-[4px] bg-yellow-500/30 mt-6 group-hover:bg-yellow-500 transition-colors" />
          </motion.div>

          {/* 🥉 3rd Place Card (Right side on desktop, stacked on mobile) */}
          <motion.div 
            variants={cardVariants}
            className="bg-neutral-900/30 border border-white/10 p-8 flex flex-col justify-between order-3 min-h-[340px] rounded-xs group hover:border-white/30 transition-all duration-300 shadow-xl relative"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-body text-xs font-bold tracking-widest text-white/40 uppercase">3rd Place</span>
                <Award className="w-6 h-6 text-amber-700 group-hover:scale-110 transition-transform" />
              </div>
              <div className="space-y-1 items-center justify-center text-center">
                <p className="font-display text-xl lg:text-2xl font-black tracking-tight text-white">ZMW 3,000</p>
                <p className="font-body italic text-xs uppercase tracking-widest text-amber-700 font-semibold">Zambian Kwacha</p>
              </div>
              <p className="font-body text-center text-sm lg:lg text-white/60 leading-relaxed pt-2">
                Third place cash prize + Cuttingedge Merit Certificate
              </p>
            </div>
            <div className="w-full h-[3px] bg-amber-700/20 mt-6 group-hover:bg-amber-700 transition-colors" />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}