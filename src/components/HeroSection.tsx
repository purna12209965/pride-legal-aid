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

      {/* Colorful glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full blur-3xl animate-pulse-slow" style={{background: "hsl(200 70% 50% / 0.12)"}} />

      {/* Floating stickers */}
      <div className="absolute top-32 left-8 text-4xl animate-float opacity-80 select-none">🏳️‍🌈</div>
      <div className="absolute top-48 right-10 text-3xl animate-float opacity-70 select-none" style={{animationDelay:"1s"}}>⚖️</div>
      <div className="absolute bottom-40 left-16 text-3xl animate-float opacity-70 select-none" style={{animationDelay:"2s"}}>💜</div>
      <div className="absolute bottom-32 right-12 text-4xl animate-float opacity-75 select-none" style={{animationDelay:"0.5s"}}>✨</div>
      <div className="absolute top-1/2 left-4 text-2xl animate-float opacity-60 select-none" style={{animationDelay:"1.5s"}}>🌟</div>
      <div className="absolute top-40 left-1/2 text-2xl animate-float opacity-50 select-none" style={{animationDelay:"3s"}}>🕊️</div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border" style={{background:"linear-gradient(135deg,hsl(280 65% 60%/0.15),hsl(330 60% 55%/0.15),hsl(200 70% 50%/0.1))", borderColor:"hsl(280 65% 60%/0.3)"}}>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium" style={{background:"linear-gradient(90deg,hsl(280 65% 75%),hsl(200 70% 65%))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Bias-Aware • Jurisdiction-Sensitive • Inclusive</span>
          </div>

          {/* Pride rainbow bar */}
          <div className="w-48 h-1.5 mx-auto rounded-full mb-6" style={{background:"linear-gradient(90deg,#e40303,#ff8c00,#ffed00,#008026,#004dff,#750787)"}} />

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
            <div className="text-center p-4 rounded-2xl" style={{background:"hsl(280 65% 60%/0.08)",border:"1px solid hsl(280 65% 60%/0.2)"}}>
              <div className="text-3xl mb-1">🌍</div>
              <div className="text-3xl font-display font-bold gradient-text">195+</div>
              <div className="text-sm text-muted-foreground mt-1">Countries Covered</div>
            </div>
            <div className="text-center p-4 rounded-2xl" style={{background:"hsl(330 60% 55%/0.08)",border:"1px solid hsl(330 60% 55%/0.2)"}}>
              <div className="text-3xl mb-1">📚</div>
              <div className="text-3xl font-display font-bold gradient-text">1000+</div>
              <div className="text-sm text-muted-foreground mt-1">Legal Articles</div>
            </div>
            <div className="text-center p-4 rounded-2xl" style={{background:"hsl(200 70% 50%/0.08)",border:"1px solid hsl(200 70% 50%/0.2)"}}>
              <div className="text-3xl mb-1">🤖</div>
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
