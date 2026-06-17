import { useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import CompetitionCategories from "./components/CompetitionCategories";
import ContestRules from "./components/ContestRules";
import ContestPrizes from "./components/ContestPrizes";
import RegisterCTA from "./components/RegisterCTA"; // Added import statement
import Footer from "./components/Footer";
import RegisterModal from "./components/RegisterModal";
import { ToastContainer } from "react-toastify";

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);

  return (
    <div className="min-h-screen bg-[#faf6e4]">
      <HeroSection onRegisterClick={openRegister} />
      <AboutUs onRegisterClick={openRegister} />
      <CompetitionCategories onRegisterClick={openRegister} />
      <ContestRules />
      <ContestPrizes />
      
      {/* Standalone Register CTA Section positioned beautifully right before Footer */}
      <RegisterCTA onRegisterClick={openRegister} /> 
      
      <Footer />
      
      <RegisterModal isOpen={isRegisterOpen} onClose={closeRegister} />
      
      <ToastContainer 
        toastClassName={() => "relative flex p-1 min-h-10 rounded-none justify-between overflow-hidden bg-[#faf6e4] text-[#183634] font-serif border-2 border-[#183634] shadow-lg cursor-pointer"}
        bodyClassName={() => "text-sm font-medium p-3 block flex items-center"}
      />
    </div>
  );
}