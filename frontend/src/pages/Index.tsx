import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickAccessSection from "@/components/QuickAccessSection";
import FeaturesSection from "@/components/FeaturesSection";
import RightsSection from "@/components/RightsSection";
import TerminologySection from "@/components/TerminologySection";
import LawsSection from "@/components/LawsSection";
import AISection from "@/components/AISection";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";
import CommunitySection from "@/components/CommunitySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <QuickAccessSection />
      <FeaturesSection />
      <RightsSection />
      <TerminologySection />
      <LawsSection />
      <AISection />
      <StatsSection />
      <FAQSection />
      <CommunitySection />
      <CTASection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
