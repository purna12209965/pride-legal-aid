import { Link, useNavigate } from "react-router-dom";
import { Scale, Bot, Heart, Globe } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

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
            <Link to="/resources" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Resources
            </Link>
            <Link to="/counseling" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Counseling
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/chat')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-pride-purple/10 border border-pride-purple/20 hover:bg-pride-purple/20 transition-colors cursor-pointer"
            >
              <Bot className="w-5 h-5 text-pride-purple" />
              <span className="text-sm font-medium text-pride-purple hidden sm:inline">AI Assistant</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
