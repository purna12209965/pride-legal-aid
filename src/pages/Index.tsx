import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RightsSection from "@/components/RightsSection";
import TerminologySection from "@/components/TerminologySection";
import LawsSection from "@/components/LawsSection";
import AISection from "@/components/AISection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <RightsSection />
      <TerminologySection />
      <LawsSection />
      <AISection />
      <CommunitySection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
