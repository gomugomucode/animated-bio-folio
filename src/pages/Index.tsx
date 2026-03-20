import HeroSection from "@/components/HeroSection";
import TabbedContent from "@/components/TabbedContent";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResourcesSection from "@/components/ResourcesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden font-inter">
      {/* Add the soft spotlights back for the glassmorphism to work */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-emerald-950/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] rounded-full bg-blue-950/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 container py-12 px-4 space-y-20">
        {/* All your sections go here, now with better breathing room (space-y-20) */}
        <HeroSection />
        <TabbedContent />
        <SkillsSection />
        <ResourcesSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
