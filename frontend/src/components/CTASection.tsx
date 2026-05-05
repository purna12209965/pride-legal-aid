import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot, ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pride-purple/10 via-pride-pink/10 to-pride-blue/10" />
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pride-purple/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pride-pink/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-card/50 backdrop-blur-xl border border-border shadow-2xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pride-purple/10 border border-pride-purple/20 mb-6">
              <Sparkles className="w-4 h-4 text-pride-purple" />
              <span className="text-sm text-pride-purple font-medium">Get Started Now</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Ready to Understand</span>
              <br />
              <span className="text-foreground">Your Legal Rights?</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Start a conversation with our AI legal assistant or explore our comprehensive
              resources. Knowledge is power, and we're here to empower you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="hero"
                size="xl"
                className="group"
                onClick={() => navigate('/chat')}
              >
                <Bot className="w-5 h-5" />
                Start Chatting Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="glass"
                size="lg"
                onClick={() => navigate('/resources')}
              >
                Browse Resources
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-pride-green" />
                <span>Free Forever</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-pride-blue" />
                <span>Private & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-pride-purple" />
                <span>24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
