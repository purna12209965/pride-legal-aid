import { Button } from "@/components/ui/button";
import { Bot, ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Pride and Justice"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Animated Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pride-purple/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pride-pink/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pride-blue/10 rounded-full blur-3xl animate-pulse-slow delay-500" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-8 backdrop-blur-sm animate-in fade-in slide-in-from-top duration-700">
            <Sparkles className="w-4 h-4 text-pride-yellow animate-pulse" />
            <span className="text-sm text-muted-foreground">Bias-Aware • Jurisdiction-Sensitive • Inclusive</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            <span className="text-foreground">Empowering </span>
            <span className="gradient-text">LGBTQ+</span>
            <br />
            <span className="text-foreground">Legal Rights</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            Your AI-powered legal assistant that understands your unique challenges.
            Get jurisdiction-sensitive guidance on rights, laws, and legal protections
            tailored for the LGBTQ+ community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <Button
              variant="hero"
              size="xl"
              className="group"
              onClick={() => navigate('/chat')}
            >
              <Bot className="w-5 h-5" />
              Chat with AI Legal Assistant
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={() => document.getElementById('rights')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Your Rights
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 animate-in fade-in duration-700 delay-500">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50">
              <Shield className="w-4 h-4 text-pride-green" />
              <span className="text-sm text-muted-foreground">100% Free</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50">
              <Zap className="w-4 h-4 text-pride-blue" />
              <span className="text-sm text-muted-foreground">Instant Answers</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50">
              <Sparkles className="w-4 h-4 text-pride-purple" />
              <span className="text-sm text-muted-foreground">AI-Powered</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto animate-in fade-in duration-700 delay-700">
            <div className="text-center group cursor-default">
              <div className="text-3xl font-display font-bold gradient-text group-hover:scale-110 transition-transform">195+</div>
              <div className="text-sm text-muted-foreground mt-1">Countries Covered</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl font-display font-bold gradient-text group-hover:scale-110 transition-transform">1000+</div>
              <div className="text-sm text-muted-foreground mt-1">Legal Articles</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl font-display font-bold gradient-text group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">AI Assistance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
