import { motion } from "framer-motion";
import { Scissors, Sparkles, Paintbrush, Timer } from "lucide-react";
import { toast } from "react-toastify";

export default function CompetitionCategories() {
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

  const battleClasses = [
    {
      id: "01",
      title: "The Classic Cut",
      icon: <Scissors className="w-5 h-5" />
    },
    {
      id: "02",
      title: "Beard Sculpt & Trim",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      id: "03",
      title: "Creative Design Cut",
      icon: <Paintbrush className="w-5 h-5" />
    },
    {
      id: "04",
      title: "Speed & Precision",
      icon: <Timer className="w-5 h-5" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="categories" className="relative bg-black text-white py-24 px-6 md:px-16 overflow-hidden">
      
      {/* ⏳ MULTIPLIED LARGE SANDY TEXTURE LAYER */}
      <div className="absolute inset-0 opacity-[0.9] mix-blend-multiply pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="categoriesSandyNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.14" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.15   0 0 0 0 0.15   0 0 0 0 0.12  0 0 0 1 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#categoriesSandyNoise)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16 md:space-y-24">
        
        {/* ========================================================= */}
        {/* UPPER COLUMN: STATEMENT COPY                              */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-2">
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
              What Are You <br />
              Competing In?
            </h2>
          </div>
          
          <div className="lg:col-span-7 font-body text-sm md:text-lg text-white/70 pt-2">
            <p className="leading-relaxed">
              Each competitor registers for one or more categories. Judges will score on precision, creativity, finish, and overall presentation.
            </p>
            
            {/* Elegant Vintage Flourish Line */}
            <div className="flex items-center gap-4 max-w-xs text-white select-none mt-6">
              <span className="text-sm font-serif">❧</span>
              <div className="h-[1px] bg-gradient-to-r from-white to-transparent flex-1" />
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* LOWER COLUMN: RESPONSIVE CATEGORY CARDS                   */}
        {/* ========================================================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {battleClasses.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-neutral-900/30 p-6 md:p-8 rounded-xs border border-vintage-green flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl group min-h-[220px]"
            >
              {/* Upper Section: Metadata and Title */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-white/30">
                  <span className="font-display font-bold text-xs tracking-widest">{item.id}</span>
                  <div className="p-2 bg-white/5 rounded-xs text-white/70 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="font-display text-sm font-bold tracking-widest text-vintage-screem group-hover:text-white/90">
                  {item.title}
                </h3>
              </div>

              {/* Lower Section: Action Button */}
              <div className="pt-6 mt-6 border-t border-white/5">
                <button
                  onClick={triggerNotification}
                  className="w-full py-2.5 bg-vintage-green border border-white/30 hover:border-white hover:bg-white hover:text-black text-white font-bold tracking-widest text-xs uppercase transition-all duration-300 cursor-pointer text-center"
                >
                  Select Category
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}