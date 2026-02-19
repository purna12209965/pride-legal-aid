import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RightsSection from "@/components/RightsSection";
import TerminologySection from "@/components/TerminologySection";
import LawsSection from "@/components/LawsSection";
import AISection from "@/components/AISection";
import InlineChatSection from "@/components/InlineChatSection";
import CommunitySection from "@/components/CommunitySection";
import CounselorSection from "@/components/CounselorSection";
import SuggestionsSection from "@/components/SuggestionsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <RightsSection />
      <TerminologySection />
      <LawsSection />
      <AISection />
      <InlineChatSection />
      <CommunitySection />
      <CounselorSection />
      <SuggestionsSection />
      <Footer />
    </div>
  );
};

export default Index;
