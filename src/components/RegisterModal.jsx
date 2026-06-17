import { motion, AnimatePresence } from "framer-motion";
import { X, Scissors } from "lucide-react";
import { toast } from "react-toastify";

export default function RegisterModal({ isOpen, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    toast.success("📜 Entry logged! We will confirm your ledger via WhatsApp shortly.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      className: "bg-[#183634] text-[#faf6e4] font-serif border border-[#faf6e4]/20",
    });
    
    onClose(); 
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xs z-50 pointer-events-auto"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto pointer-events-none">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="bg-black text-white w-full max-w-2xl border border-white/10 p-6 md:p-8 space-y-6 shadow-2xl relative pointer-events-auto my-auto rounded-xs overflow-hidden"
            >
              {/* Internal Multiplied Sandy Noise Layer */}
              <div className="absolute inset-0 opacity-[0.25] mix-blend-multiply pointer-events-none z-0">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <filter id="modalSandyNoise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.15" numOctaves="4" stitchTiles="stitch" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.2   0 0 0 0 0.18   0 0 0 0 0.15  0 0 0 1 0" />
                  </filter>
                  <rect width="100%" height="100%" filter="url(#modalSandyNoise)" />
                </svg>
              </div>

              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors cursor-pointer z-50"
                aria-label="Dismiss Modal"
              >
                <X size={20} />
              </button>

              <div className="space-y-1 relative z-10 pr-6">
                <h3 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight text-white flex items-center gap-2">
                  <Scissors size={18} className="text-white/60 rotate-90" /> Register Details
                </h3>
                <p className="font-body text-sm text-white/60 leading-relaxed">
                  Fill in your details below to secure your spot. Spaces are limited — early registration is highly encouraged.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 relative z-10 font-body text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-white/70 font-semibold tracking-wide uppercase text-[11px]">First Name *</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 px-3 py-2.5 focus:border-white focus:outline-none transition-all text-white placeholder-white/20 rounded-xs" placeholder="Mwansa" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-white/70 font-semibold tracking-wide uppercase text-[11px]">Last Name *</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 px-3 py-2.5 focus:border-white focus:outline-none transition-all text-white placeholder-white/20 rounded-xs" placeholder="Mulenga" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-white/70 font-semibold tracking-wide uppercase text-[11px]">WhatsApp / Phone Number *</label>
                    <input required type="tel" className="w-full bg-white/5 border border-white/10 px-3 py-2.5 focus:border-white focus:outline-none transition-all text-white placeholder-white/20 rounded-xs" placeholder="+260 970000000" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-white/70 font-semibold tracking-wide uppercase text-[11px]">Email Address *</label>
                    <input required type="email" className="w-full bg-white/5 border border-white/10 px-3 py-2.5 focus:border-white focus:outline-none transition-all text-white placeholder-white/20 rounded-xs" placeholder="mwansa@cuttingedge.com" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-white/70 font-semibold tracking-wide uppercase text-[11px]">Barbershop / Salon Name *</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 px-3 py-2.5 focus:border-white focus:outline-none transition-all text-white placeholder-white/20 rounded-xs" placeholder="Cuttingedge Lounge Studio" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-white/70 font-semibold tracking-wide uppercase text-[11px]">Competition Category *</label>
                    <select required className="w-full bg-neutral-900 border border-white/10 px-3 py-2.5 focus:border-white focus:outline-none transition-all text-white rounded-xs">
                      <option value="">Select a category</option>
                      <option value="classic">The Classic Cut</option>
                      <option value="beard">Beard Sculpt & Trim</option>
                      <option value="creative">Creative Design Cut</option>
                      <option value="speed">Speed & Precision</option>
                      <option value="multiple">Multiple Categories</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-white/70 font-semibold tracking-wide uppercase text-[11px]">Years of Experience *</label>
                    <select required className="w-full bg-neutral-900 border border-white/10 px-3 py-2.5 focus:border-white focus:outline-none transition-all text-white rounded-xs">
                      <option value="">Select range</option>
                      <option value="under1">Less than 1 year</option>
                      <option value="1to3">1 – 3 years</option>
                      <option value="3to5">3 – 5 years</option>
                      <option value="5plus">5+ years</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-white/70 font-semibold tracking-wide uppercase text-[11px] flex items-center gap-1">
                    Anything else you'd like us to know? <span className="text-white/30 italic font-normal">(Optional)</span>
                  </label>
                  <textarea rows={2} className="w-full bg-white/5 border border-white/10 px-3 py-2 focus:border-white focus:outline-none transition-all text-white placeholder-white/20 rounded-xs resize-none" placeholder="Special requirements or tools notes..." />
                </div>

                <p className="text-[11px] text-white/40 leading-normal">
                  By registering, you agree to the competition rules detailed in the directives ledger. We will review and confirm your entry ticket allocation via WhatsApp or verified email channel.
                </p>

                <button 
                  type="submit" 
                  className="w-full py-3.5 bg-white text-black font-bold tracking-widest text-xs uppercase hover:bg-white/90 active:scale-[0.99] transition-all duration-200 shadow-xl cursor-pointer"
                >
                  Submit My Entry
                </button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}