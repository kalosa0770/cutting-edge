import { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { ListChecks, AlertCircle, Scale, ShieldCheck } from "lucide-react";

export default function ContestRules() {
  const containerRef = useRef(null);
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

  // Monitor total vertical scrolling distance to map slide intervals seamlessly
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      const count = rules.length;
      // Map scroll bounds smoothly to our 7 independent slides
      const currentSection = Math.min(Math.floor(latest * count), count - 1);
      setActiveIndex(currentSection);
    });
  }, [scrollYProgress, rules.length]);

  return (
    /* h-[500vh] provides premium, comfortable scrolling pacing to comfortably cycle through each view */
    <div ref={containerRef} className="relative h-[500vh] bg-[#faf6e4]">
      
      {/* ⏳ MULTIPLIED LARGE SANDY TEXTURE LAYER */}
      <div className="sticky top-0 h-screen w-full opacity-[0.25] mix-blend-multiply pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="rulesVerticalSandyNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.12" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.25   0 0 0 0 0.22   0 0 0 0 0.18  0 0 0 1 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#rulesVerticalSandyNoise)" />
        </svg>
      </div>

      {/* ========================================================= */}
      {/* LOCKED VIEWPORT BOX FOR CARD CYCLING                     */}
      {/* ========================================================= */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 md:px-16 z-10 overflow-hidden">
        <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Layout Information Block */}
          <div className="lg:col-span-5 space-y-4 md:space-y-6">
            <div className="space-y-1 md:space-y-2">
              <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-[#183634] leading-none">
                Know Before <br />
                You Register
              </h2>
            </div>
            <p className="font-body text-base md:text-lg text-[#000000]/60 leading-relaxed text-justify">
              Please review the official operational ledger thoroughly. Infractions against event procedures run the immediate penalty of performance disqualification.
            </p>

            {/* Progressive Slide Indicators HUD */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#183634]/10 max-w-xs">
              <span className="font-display font-black text-sm text-[#183634]">
                {rules[activeIndex].num}
              </span>
              <div className="flex items-center gap-1.5 flex-1 justify-center">
                {rules.map((_, dotIdx) => (
                  <div 
                    key={dotIdx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      dotIdx === activeIndex ? "w-6 bg-[#183634]" : "w-1.5 bg-[#183634]/10"
                    }`}
                  />
                ))}
              </div>
              <span className="font-body font-bold text-xs text-[#000000]/40">
                / 07
              </span>
            </div>
          </div>

          {/* Right Layout: Rigid Single Card Stage Window Container */}
          <div className="lg:col-span-7 relative h-[280px] sm:h-[220px] md:h-[200px] w-full flex items-center justify-center">
            {rules.map((rule, idx) => {
              const isCurrent = idx === activeIndex;
              const isPast = idx < activeIndex;

              return (
                <motion.div
                  key={idx}
                  initial={idx === 0 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100 }}
                  animate={{ 
                    opacity: isCurrent ? 1 : 0,
                    y: isCurrent ? 0 : isPast ? -150 : 150,
                    scale: isCurrent ? 1 : 0.95
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute w-full bg-white p-6 md:p-8 rounded-xs border border-[#183634]/10 shadow-[0_20px_40px_rgba(24,54,52,0.05)] flex gap-4 md:gap-6 items-start select-none"
                  style={{ 
                    zIndex: isCurrent ? 20 : 10,
                    pointerEvents: isCurrent ? "auto" : "none"
                  }}
                >
                  {/* Visual Category Identification Marker Stack */}
                  <div className="flex flex-col items-center gap-2">
                    <span className="font-display text-xl md:text-2xl font-black text-[#183634]/30">
                      {rule.num}
                    </span>
                    <div className="p-2 bg-[#183634] rounded-full text-white shadow-xs">
                      {rule.icon}
                    </div>
                  </div>

                  {/* Narrative Body Elements */}
                  <div className="space-y-1.5 flex-1">
                    <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-tight text-[#183634]">
                      {rule.title}
                    </h3>
                    <p className="font-body text-base md:text-lg text-[#000000]/80 leading-relaxed text-justify">
                      {rule.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}