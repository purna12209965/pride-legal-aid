import { Link } from "react-router-dom";
import { Scale, Globe } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <Scale className="w-7 h-7 text-primary" />
            <span className="font-display text-xl font-bold gradient-text">
              PrideJustice AI
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#rights" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Your Rights
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terminology
            </a>
            <a href="#laws" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Laws & Articles
            </a>
            <a href="#ai" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              AI Assistant
            </a>
            <a href="#counseling" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Counseling
            </a>
            <a href="#suggestions" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Feedback
            </a>
            <Link to="/chat" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              Ask AI
            </Link>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground">Global</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
