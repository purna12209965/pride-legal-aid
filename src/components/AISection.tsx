import { MessageCircle, Shield, Globe, Sparkles, Brain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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
    <section id="ai" className="py-24 relative overflow-hidden" style={{background:"linear-gradient(180deg, hsl(270 20% 6%), hsl(280 25% 8%), hsl(270 20% 6%))"}}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/8 rounded-full blur-3xl -translate-y-1/2" />

      {/* Decorative stickers */}
      <div className="absolute top-12 right-20 text-4xl opacity-25 select-none rotate-6">🤖</div>
      <div className="absolute bottom-12 left-16 text-3xl opacity-20 select-none -rotate-12">⚡</div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{background:"hsl(280 65% 60%/0.12)",borderColor:"hsl(280 65% 60%/0.3)"}}>
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">🧠 Agentic AI Framework</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Meet Your </span>
              <span className="gradient-text">AI Legal</span>
              <br />
              <span className="gradient-text">Assistant</span>
            </h2>

            {/* Pride rainbow bar */}
            <div className="w-24 h-1 rounded-full mb-6" style={{background:"linear-gradient(90deg,#e40303,#ff8c00,#ffed00,#008026,#004dff,#750787)"}} />
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Powered by an agentic AI framework designed specifically for LGBTQ+ legal assistance. 
              Our AI understands the nuances of identity-related legal issues and provides 
              jurisdiction-aware guidance while actively working to eliminate bias.
            </p>

            <Link
              to="/chat"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all hover:shadow-xl hover:-translate-y-0.5 mb-8"
              style={{background:"linear-gradient(135deg,hsl(280 65% 60%),hsl(330 60% 55%))",color:"white",boxShadow:"0 4px 20px hsl(280 65% 60%/0.3)"}}
            >
              ✨ Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const colors = [
                  {bg:"hsl(280 65% 60%/0.12)",border:"hsl(280 65% 60%/0.25)",icon:"hsl(280 65% 70%)"},
                  {bg:"hsl(200 70% 50%/0.12)",border:"hsl(200 70% 50%/0.25)",icon:"hsl(200 70% 60%)"},
                  {bg:"hsl(330 60% 55%/0.12)",border:"hsl(330 60% 55%/0.25)",icon:"hsl(330 60% 65%)"},
                  {bg:"hsl(45 90% 55%/0.12)",border:"hsl(45 90% 55%/0.25)",icon:"hsl(45 90% 60%)"},
                ];
                const c = colors[index % colors.length];
                return (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl" style={{background:c.bg,border:`1px solid ${c.border}`}}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:c.bg}}>
                      <feature.icon className="w-5 h-5" style={{color:c.icon}} />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden" style={{boxShadow:"0 0 60px hsl(280 65% 60%/0.2)"}}>
              <img 
                src={aiAssistant} 
                alt="AI Legal Assistant" 
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              {/* Colorful overlay tint */}
              <div className="absolute inset-0 rounded-2xl" style={{background:"linear-gradient(135deg,hsl(280 65% 60%/0.1),hsl(330 60% 55%/0.08))"}} />
            </div>
            
            <div className="absolute -bottom-6 -left-6 p-4 rounded-xl backdrop-blur-md border shadow-lg animate-float" style={{background:"hsl(270 15% 10%/0.95)",borderColor:"hsl(280 65% 60%/0.3)"}}>
              <div className="flex items-center gap-3">
                <div className="text-2xl">🛡️</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Bias-Free</div>
                  <div className="text-xs text-muted-foreground">Responses verified</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 p-4 rounded-xl backdrop-blur-md border shadow-lg animate-float delay-500" style={{background:"hsl(270 15% 10%/0.95)",borderColor:"hsl(330 60% 55%/0.3)"}}>
              <div className="flex items-center gap-3">
                <div className="text-2xl">🌍</div>
                <div>
                  <div className="text-sm font-medium text-foreground">195+ Countries</div>
                  <div className="text-xs text-muted-foreground">Legal coverage</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-6 p-3 rounded-xl backdrop-blur-md border shadow-lg animate-float" style={{background:"hsl(270 15% 10%/0.95)",borderColor:"hsl(200 70% 50%/0.3)",animationDelay:"1s"}}>
              <div className="text-center">
                <div className="text-xl">⚡</div>
                <div className="text-xs text-muted-foreground mt-0.5">24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
