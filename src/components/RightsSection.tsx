import { Shield, Home, Heart, Briefcase, Users, Vote } from "lucide-react";

const rights = [
  {
    icon: Shield,
    title: "Anti-Discrimination",
    description: "Protection against discrimination in employment, housing, and public accommodations based on sexual orientation and gender identity.",
    color: "pride-red"
  },
  {
    icon: Heart,
    title: "Marriage Equality",
    description: "The right to marry and have your marriage legally recognized, with all associated benefits and protections.",
    color: "pride-orange"
  },
  {
    icon: Home,
    title: "Housing Rights",
    description: "Equal access to housing without discrimination from landlords, real estate agents, or mortgage lenders.",
    color: "pride-yellow"
  },
  {
    icon: Briefcase,
    title: "Employment Protection",
    description: "Protection from workplace discrimination, harassment, and unfair termination based on identity.",
    color: "pride-green"
  },
  {
    icon: Users,
    title: "Family Rights",
    description: "Rights related to adoption, foster care, parental recognition, and family formation.",
    color: "pride-blue"
  },
  {
    icon: Vote,
    title: "Healthcare Access",
    description: "Right to healthcare without discrimination, including gender-affirming care and mental health services.",
    color: "pride-purple"
  }
];

const RightsSection = () => {
  return (
    <section id="rights" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pride-purple/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Know Your Rights</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Understanding your legal protections is the first step toward empowerment. 
            Here are the key rights that protect the LGBTQ+ community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rights.map((right, index) => (
            <div 
              key={index}
              className="gradient-border card-hover p-6 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-${right.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <right.icon className={`w-6 h-6 text-${right.color}`} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                {right.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {right.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightsSection;
