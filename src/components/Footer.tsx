import { forwardRef } from "react";
import { Scale, Mail, Phone, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = forwardRef<HTMLElement>((props, ref) => {
  return (
    <footer ref={ref} className="py-16 border-t border-border/50 relative overflow-hidden" style={{background:"linear-gradient(180deg,hsl(270 20% 6%),hsl(280 25% 5%))"}} {...props}>
      {/* Pride rainbow top bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5" style={{background:"linear-gradient(90deg,#e40303,#ff8c00,#ffed00,#008026,#004dff,#750787)"}} />

      {/* Decorative stickers */}
      <div className="absolute top-8 right-24 text-3xl opacity-10 select-none">🏳️‍🌈</div>
      <div className="absolute bottom-8 left-16 text-3xl opacity-10 select-none">⚖️</div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background:"linear-gradient(135deg,hsl(280 65% 60%),hsl(330 60% 55%))"}}>
                <Scale className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold gradient-text">
                PrideJustice AI
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Bias-aware, jurisdiction-sensitive legal assistance for the LGBTQ+ community.
            </p>
            <div className="flex gap-1">
              {["🔴","🟠","🟡","🟢","🔵","🟣"].map((c, i) => (
                <span key={i} className="text-sm">{c}</span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="text-lg">📚</span> Resources
            </h4>
            <ul className="space-y-3">
              <li><a href="#rights" className="text-sm text-muted-foreground hover:text-primary transition-colors">Your Rights</a></li>
              <li><a href="#terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terminology</a></li>
              <li><a href="#laws" className="text-sm text-muted-foreground hover:text-primary transition-colors">Laws & Articles</a></li>
              <li><a href="#ai" className="text-sm text-muted-foreground hover:text-primary transition-colors">AI Assistant</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="text-lg">⚖️</span> Legal
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Disclaimer</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="text-lg">💌</span> Connect
            </h4>
            <div className="space-y-3 mb-4">
              <p className="text-sm font-medium text-foreground">Marthala Purna</p>
              <a href="mailto:purnamarthala09@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                purnamarthala09@gmail.com
              </a>
              <a href="tel:+916302728567" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +91 6302728567
              </a>
              <a href="https://instagram.com/hey.purnaaaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
                @hey.purnaaaa
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 PrideJustice AI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <span className="text-lg">💜</span> for equality <span className="text-lg">🏳️‍🌈</span>
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;

