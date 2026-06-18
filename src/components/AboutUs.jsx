import { motion } from "framer-motion";
import { Scissors, Trophy, Award, Sparkles } from "lucide-react";
import { toast } from "react-toastify";

export default function AboutUs() {
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

  const fadeInVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section id="about" className="relative bg-[#faf6e4] text-[#000000] py-16 md:py-24 px-6 md:px-16 overflow-hidden">
      
      {/* ⏳ MULTIPLIED LARGE SANDY TEXTURE LAYER */}
      <div className="absolute inset-0 opacity-[0.25] mix-blend-multiply pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="aboutSandyNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.12" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.25   0 0 0 0 0.22   0 0 0 0 0.18  0 0 0 1 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#aboutSandyNoise)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-12 md:space-y-20">
        
        {/* ========================================================= */}
        {/* UPPER CONTENT: EDITORIAL TEXT & IMAGE ROW                 */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Side: Editorial Text Stack */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            className="lg:col-span-7 space-y-4 md:space-y-6 w-full"
          >
            <div className="space-y-1 md:space-y-2">
              <h2 className="font-display text-5xl sm:text-4xl md:text-7xl tracking-normal text-[#183634] uppercase">
                Are You Worthy of The 
                Prize?
              </h2>
            </div>

            <div className="font-body text-base sm:text-lg md:text-xl text-[#000000]/90 leading-relaxed text-justify">
              <p>
                The Edge Cutting Contest is Cuttingedge Barbershop's official open competition — a platform built to celebrate the craft, skill, and artistry of professional barbering. Whether you are a seasoned master or a rising talent, this is your stage.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Responsive Framed Imagery Block Matching Width of Words */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            className="lg:col-span-5 flex justify-center w-full"
          >
            {/* w-full spreads it to match the text layout boundaries on mobile, while max-w-sm re-engages constraints on desktops */}
            <div className="relative p-2 md:p-3 bg-white border border-[#183634]/10 shadow-xl w-full max-w-none lg:max-w-sm aspect-[4/5] overflow-hidden group rounded-xs transition-all duration-300 hover:shadow-2xl">
              <div className="absolute inset-0 bg-[#183634]/5 flex items-center justify-center font-display uppercase tracking-widest text-[10px] sm:text-xs font-bold text-[#183634]/30">
                [ Cultivating Craftsmanship ]
              </div>
              <img 
                src="/cutting-edge-photo-1.svg" 
                alt="Cuttingedge Barbershop Event Showcase" 
                className="w-full h-full object-cover relative z-10 filter contrast-[1.02] sepia-[0.1] group-hover:scale-102 transition-transform duration-500 ease-out"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </motion.div>

        </div>

        {/* ========================================================= */}
        {/* LOWER CONTENT: RESPONSIVE 4-COLUMN STATS MATRIX          */}
        {/* ========================================================= */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-4 gap-1.5 sm:gap-4 md:gap-6 pt-8 md:pt-12 border-t border-[#183634]/10 items-stretch"
        >
          {/* Stat 1 */}
          <motion.div variants={fadeInVariants} className="bg-white p-2 sm:p-4 md:p-6 rounded-xs text-center border border-[#183634]/5 shadow-xs flex flex-col justify-center items-center transition-all hover:border-[#183634]/20">
            <div className="w-6 h-6 sm:w-8 sm:h-8 text-[#183634] flex items-center justify-center mb-1 bg-[#183634]/5 rounded-full">
              <Scissors className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <p className="font-body text-lg sm:text-3xl md:text-5xl font-black text-[#183634] leading-none">3</p>
            <p className="font-body text-[9px] sm:text-xs md:text-sm uppercase tracking-tight sm:tracking-widest text-[#000000]/60 font-semibold leading-tight mt-1">
              Categories
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div variants={fadeInVariants} className="bg-white p-2 sm:p-4 md:p-6 rounded-xs text-center border border-[#183634]/5 shadow-xs flex flex-col justify-center items-center transition-all hover:border-[#183634]/20">
            <div className="w-6 h-6 sm:w-8 sm:h-8 text-[#183634] flex items-center justify-center mb-1 bg-[#183634]/5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <p className="font-body text-lg sm:text-3xl md:text-5xl font-black text-[#183634] leading-none">3</p>
            <p className="font-body text-[9px] sm:text-xs md:text-sm uppercase tracking-tight sm:tracking-widest text-[#000000]/60 font-semibold leading-tight mt-1">
              Prizes
            </p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div variants={fadeInVariants} className="bg-white p-2 sm:p-4 md:p-6 rounded-xs text-center border border-[#183634]/5 shadow-xs flex flex-col justify-center items-center transition-all hover:border-[#183634]/20">
            <div className="w-6 h-6 sm:w-8 sm:h-8 text-[#183634] flex items-center justify-center mb-1 bg-[#183634]/5 rounded-full">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <p className="font-body text-lg sm:text-3xl md:text-5xl font-black text-[#183634] leading-none">1</p>
            <p className="font-body text-[9px] sm:text-xs md:text-sm uppercase tracking-tight sm:tracking-widest text-[#000000]/60 font-semibold leading-tight mt-1">
              Title
            </p>
          </motion.div>

          {/* Stat 4: Interactive Action Button Trigger */}
          <motion.button 
            variants={fadeInVariants}
            onClick={triggerNotification}
            className="bg-[#183634] p-1.5 sm:p-4 md:p-6 rounded-xs text-center shadow-md text-[#faf6e4] hover:bg-[#1c3f3d] active:scale-[0.97] transition-all duration-200 group cursor-pointer flex flex-col items-center justify-center border border-transparent select-none"
          >
            <div className="w-5 h-5 sm:w-8 sm:h-8 text-[#faf6e4] flex items-center justify-center mb-1 bg-white/10 rounded-full group-hover:scale-105 transition-transform">
              <Trophy className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
            <p className="font-font-body text-sm sm:text-2xl md:text-4xl font-black text-white tracking-tight leading-none">
              ZMW 18k
            </p>
            <p className="font-body text-[8px] sm:text-[10px] md:text-xs uppercase tracking-wider text-[#faf6e4]/90 font-bold mt-1.5 hidden sm:block">
              Claim Pool &rarr;
            </p>
            <p className="font-body text-[8px] uppercase tracking-tighter text-[#faf6e4]/90 font-bold mt-1 block sm:hidden">
              Claim &rarr;
            </p>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}