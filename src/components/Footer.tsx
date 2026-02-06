import { forwardRef } from "react";
import { Scale, Heart, Mail, Phone, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = forwardRef<HTMLElement>((props, ref) => {
  return (
    <footer ref={ref} className="py-16 border-t border-border/50 bg-muted/10" {...props}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="relative">
                <Scale className="w-8 h-8 text-pride-purple" />
                <Heart className="w-3 h-3 text-pride-pink absolute -bottom-1 -right-1" />
              </div>
              <span className="font-display text-xl font-bold gradient-text">
                PrideJustice AI
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Bias-aware, jurisdiction-sensitive legal assistance for the LGBTQ+ community.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#rights" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Your Rights</a></li>
              <li><a href="#terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terminology</a></li>
              <li><a href="#laws" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Laws & Articles</a></li>
              <li><a href="#ai" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI Assistant</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Disclaimer</a></li>
            </ul>
          </div>
          
          {/* Contact - Marthala Purna */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Connect</h4>
            <div className="space-y-3 mb-4">
              <p className="text-sm font-medium text-foreground">Marthala Purna</p>
              <a href="mailto:purnamarthala09@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-pride-purple transition-colors">
                <Mail className="w-4 h-4" />
                purnamarthala09@gmail.com
              </a>
              <a href="tel:+916302728567" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-pride-purple transition-colors">
                <Phone className="w-4 h-4" />
                +91 6302728567
              </a>
              <a href="https://instagram.com/hey.purnaaaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-pride-pink transition-colors">
                <Instagram className="w-4 h-4" />
                @hey.purnaaaa
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 PrideJustice AI. All rights reserved.
          </p>
          
          {/* Pride Bar */}
          <div className="flex h-1 w-32 rounded-full overflow-hidden">
            <div className="flex-1 bg-pride-red" />
            <div className="flex-1 bg-pride-orange" />
            <div className="flex-1 bg-pride-yellow" />
            <div className="flex-1 bg-pride-green" />
            <div className="flex-1 bg-pride-blue" />
            <div className="flex-1 bg-pride-purple" />
          </div>
          
          <p className="text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 inline text-pride-pink" /> for equality
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
