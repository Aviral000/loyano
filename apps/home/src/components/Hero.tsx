import HeroBackground from "./hero/HeroBackground";
import HeroContent from "./hero/HeroContent";
import FabricTutorial from "./hero/FabricTutorial";
import Chatbot from "./chatbot/Chatbot";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <HeroBackground />
      <HeroContent />
      <FabricTutorial />
      <Chatbot />
    </section>
  );
} 