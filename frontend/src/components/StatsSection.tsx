import { TrendingUp, Users, Globe, Heart } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "People Helped",
    description: "Individuals empowered with legal knowledge",
    color: "pride-purple"
  },
  {
    icon: Globe,
    value: "195+",
    label: "Countries Covered",
    description: "Legal information across jurisdictions",
    color: "pride-blue"
  },
  {
    icon: TrendingUp,
    value: "1000+",
    label: "Legal Resources",
    description: "Cases, laws, and articles documented",
    color: "pride-green"
  },
  {
    icon: Heart,
    value: "24/7",
    label: "AI Assistance",
    description: "Always available when you need help",
    color: "pride-pink"
  }
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-pride-purple/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pride-pink/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Making an Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Together, we're building a more informed and empowered LGBTQ+ community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-pride-purple/30 transition-all hover:shadow-xl text-center"
            >
              <div className={`w-16 h-16 rounded-full bg-${stat.color}/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className={`w-8 h-8 text-${stat.color}`} />
              </div>
              <div className={`text-4xl font-display font-bold mb-2 text-${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
