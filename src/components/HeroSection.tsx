import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Scale } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Justice and Equality" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Bias-Aware • Jurisdiction-Sensitive • Inclusive</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Empowering </span>
            <span className="gradient-text">LGBTQ+</span>
            <br />
            <span className="text-foreground">Legal Rights</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Your AI-powered legal assistant that understands your unique challenges. 
            Get jurisdiction-sensitive guidance on rights, laws, and legal protections 
            tailored for the LGBTQ+ community.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="group">
              <Scale className="w-5 h-5" />
              Explore Legal Resources
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg">
              Learn Your Rights
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-display font-bold gradient-text">195+</div>
              <div className="text-sm text-muted-foreground mt-1">Countries Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold gradient-text">1000+</div>
              <div className="text-sm text-muted-foreground mt-1">Legal Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold gradient-text">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">AI Assistance</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
