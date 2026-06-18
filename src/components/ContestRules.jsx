import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ListChecks, AlertCircle, Scale, ShieldCheck } from "lucide-react";

export default function ContestRules() {
  const [activeIndex, setActiveIndex] = useState(0);

  const rules = [
    {
      num: "01",
      title: "Eligibility Requirements",
      body: "All entrants must be practising barbers or barbering students. Open to Zambian nationals and residents.",
      icon: <ListChecks className="w-5 h-5 text-[#faf6e4]" />
    },
    {
      num: "02",
      title: "Equipment & Models",
      body: "Each competitor must bring their own tools, clippers, razors, and products. Models (clients) are to be arranged by the competitor.",
      icon: <AlertCircle className="w-5 h-5 text-[#faf6e4]" />
    },
    {
      num: "03",
      title: "Multiple Registrations",
      body: "Competitors may enter one or more categories. Each category entry requires a separate registration.",
      icon: <Scale className="w-5 h-5 text-[#faf6e4]" />
    },
    {
      num: "04",
      title: "Live Execution Standards",
      body: "All cuts must be performed live on the day of the competition. No pre-prepared or pre-styled models will be accepted.",
      icon: <ShieldCheck className="w-5 h-5 text-[#faf6e4]" />
    },
    {
      num: "05",
      title: "The Judging Rubric",
      body: "Judging will be scored on precision (30%), creativity (25%), technique (25%), and overall finish (20%).",
      icon: <Scale className="w-5 h-5 text-[#faf6e4]" />
    },
    {
      num: "06",
      title: "Sanitation & Hygiene",
      body: "Competitors must adhere to health and safety standards throughout the competition. Disregarding hygiene protocols will result in disqualification.",
      icon: <ShieldCheck className="w-5 h-5 text-[#faf6e4]" />
    },
    {
      num: "07",
      title: "Final Verdict",
      body: "The judges' decision is final. Results will be announced at the close of the event.",
      icon: <AlertCircle className="w-5 h-5 text-[#faf6e4]" />
    }
  ];

  return (
    <section id="rules" className="relative bg-[#faf6e4] text-[#183634] py-24 px-6 md:px-16 overflow-hidden">
      
      {/* ⏳ MULTIPLIED LARGE SANDY TEXTURE LAYER */}
      <div className="absolute inset-0 opacity-[0.25] mix-blend-multiply pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="rulesVerticalSandyNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.12" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.25   0 0 0 0 0.22   0 0 0 0 0.18  0 0 0 1 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#rulesVerticalSandyNoise)" />
        </svg>
      </div>

      {/* ========================================================= */}
      {/* STANDARD GRID WORKSPACE (NO SCROLL BRAKES OR MOVING PARTS) */}
      {/* ========================================================= */}
      <div className="max-w-5xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        {/* Left Side: Completely Stationary Typography */}
        <div className="lg:col-span-5 space-y-4 md:space-y-6 lg:sticky lg:top-24">
          <div className="space-y-1 md:space-y-2">
            <h2 className="font-display text-5xl sm:text-4xl md:text-7xl tracking-normal text-[#183634] uppercase">
              Know Before <br />
              You Register
            </h2>
          </div>
          <p className="font-body text-base md:text-lg text-[#000000]/60 leading-relaxed text-justify">
            Please review the official operational ledger thoroughly. Infractions against event procedures run the immediate penalty of performance disqualification.
          </p>

          {/* Static Progressive Indicators Hud (Clickable tabs to quickly flip through if users prefer manual interaction) */}
          <div className="flex items-center gap-3 pt-4 border-t border-[#183634]/10 max-w-xs">
            <span className="font-body font-black text-sm text-[#183634]">
              {rules[activeIndex].num}
            </span>
            <div className="flex items-center gap-1.5 flex-1 justify-center">
              {rules.map((_, dotIdx) => (
                <button 
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    dotIdx === activeIndex ? "w-6 bg-[#183634]" : "w-1.5 bg-[#183634]/10 hover:bg-[#183634]/30"
                  }`}
                  aria-label={`View Rule ${dotIdx + 1}`}
                />
              ))}
            </div>
            <span className="font-body font-bold text-xs text-[#000000]/40">
              / 07
            </span>
          </div>
        </div>

        {/* Right Side: Clean Workspace Container with Instant Tab Selection Layout */}
        <div className="lg:col-span-7 w-full space-y-4">
          <div className="relative min-h-[220px] sm:min-h-[180px] w-full flex items-center justify-center bg-white rounded-xs border border-[#183634]/10 shadow-[0_20px_40px_rgba(24,54,52,0.03)] p-6 md:p-8">
            <AnimatePresence mode="wait">
              {rules.map((rule, idx) => {
                if (idx !== activeIndex) return null;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="w-full flex gap-4 md:gap-6 items-start select-none"
                  >
                    {/* Visual Category Identification Marker Stack */}
                    <div className="flex flex-col items-center gap-2 flex-shrink-0">
                      <span className="font-display text-xl md:text-2xl font-black text-[#183634]/30">
                        {rule.num}
                      </span>
                      <div className="p-2 bg-[#183634] rounded-full text-white shadow-xs">
                        {rule.icon}
                      </div>
                    </div>

                    {/* Narrative Body Elements */}
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <h3 className="font-body text-lg md:text-xl font-bold  tracking-tight text-[#183634]">
                        {rule.title}
                      </h3>
                      <p className="font-body text-sm sm:text-base md:text-lg text-[#000000]/80 leading-relaxed text-justify">
                        {rule.body}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Secondary manual slide trigger layout buttons */}
          <div className="flex justify-between items-center px-1">
            <button 
              disabled={activeIndex === 0}
              onClick={() => setActiveIndex(prev => prev - 1)}
              className="text-xs font-bold tracking-wider uppercase text-[#183634]/50 hover:text-[#183634] disabled:opacity-20 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              &larr; Prev Rule
            </button>
            <button 
              disabled={activeIndex === rules.length - 1}
              onClick={() => setActiveIndex(prev => prev + 1)}
              className="text-xs font-bold tracking-wider uppercase text-[#183634] hover:text-[#183634]/70 disabled:opacity-20 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              Next Rule &rarr;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}