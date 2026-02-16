import { MessageCircle, Shield, Globe, Sparkles, Brain } from "lucide-react";
import aiAssistant from "@/assets/ai-assistant.jpg";

const features = [
  {
    icon: Brain,
    title: "Bias-Aware Analysis",
    description: "Our AI is trained to recognize and avoid biased interpretations of laws"
  },
  {
    icon: Globe,
    title: "Jurisdiction-Sensitive",
    description: "Automatically adapts advice based on your location and applicable laws"
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description: "Your conversations are encrypted and never shared or used for training"
  },
  {
    icon: MessageCircle,
    title: "Plain Language",
    description: "Complex legal concepts explained in easy-to-understand terms"
  }
];

const AISection = () => {
  return (
    <section id="ai" className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Agentic AI Framework</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Meet Your </span>
              <span className="gradient-text">AI Legal</span>
              <br />
              <span className="gradient-text">Assistant</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Powered by an agentic AI framework designed specifically for LGBTQ+ legal assistance. 
              Our AI understands the nuances of identity-related legal issues and provides 
              jurisdiction-aware guidance while actively working to eliminate bias.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden glow-effect">
              <img 
                src={aiAssistant} 
                alt="AI Legal Assistant" 
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-card/90 backdrop-blur-md border border-border/50 shadow-lg animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Bias-Free</div>
                  <div className="text-xs text-muted-foreground">Responses verified</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 p-4 rounded-xl bg-card/90 backdrop-blur-md border border-border/50 shadow-lg animate-float delay-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">195+ Countries</div>
                  <div className="text-xs text-muted-foreground">Legal coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
