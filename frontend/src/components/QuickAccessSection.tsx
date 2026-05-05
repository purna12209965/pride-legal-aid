import { useNavigate } from "react-router-dom";
import { Bot, BookOpen, Scale, Users, MessageCircle, FileText, UserCheck } from "lucide-react";

const quickLinks = [
  {
    icon: Bot,
    title: "AI Legal Assistant",
    description: "Get instant answers to your legal questions",
    link: "/chat",
    color: "pride-purple",
    gradient: "from-pride-purple to-pride-pink"
  },
  {
    icon: UserCheck,
    title: "Talk to Real Activist",
    description: "Personal counseling with verified activists",
    link: "/counseling",
    color: "pride-pink",
    gradient: "from-pride-pink to-pride-red"
  },
  {
    icon: Scale,
    title: "Know Your Rights",
    description: "Explore comprehensive rights information",
    link: "#rights",
    color: "pride-blue",
    gradient: "from-pride-blue to-pride-purple"
  },
  {
    icon: FileText,
    title: "Legal Precedents",
    description: "Browse landmark cases and judgments",
    link: "#laws",
    color: "pride-green",
    gradient: "from-pride-green to-pride-blue"
  },
  {
    icon: BookOpen,
    title: "Legal Terminology",
    description: "Understand key legal terms",
    link: "#terms",
    color: "pride-orange",
    gradient: "from-pride-orange to-pride-yellow"
  },
  {
    icon: Users,
    title: "Support Resources",
    description: "Find organizations and hotlines",
    link: "/resources",
    color: "pride-yellow",
    gradient: "from-pride-yellow to-pride-orange"
  }
];

const QuickAccessSection = () => {
  const navigate = useNavigate();

  const handleClick = (link: string) => {
    if (link.startsWith('#')) {
      document.getElementById(link.substring(1))?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(link);
    }
  };

  return (
    <section className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pride-purple/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Quick Access</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Jump directly to the information you need. Everything is organized for easy access.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {quickLinks.map((item, index) => (
            <button
              key={index}
              onClick={() => handleClick(item.link)}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-transparent transition-all hover:shadow-2xl hover:-translate-y-2 text-left overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative">
                <div className={`w-14 h-14 rounded-xl bg-${item.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-7 h-7 text-${item.color}`} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-pride-purple transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccessSection;
