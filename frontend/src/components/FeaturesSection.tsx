import { Shield, Zap, Heart, Globe, Lock, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Comprehensive Legal Coverage",
    description: "Access information on employment rights, housing discrimination, marriage equality, healthcare access, and more.",
    color: "pride-red"
  },
  {
    icon: Zap,
    title: "Instant AI Responses",
    description: "Get immediate answers to your legal questions with our advanced AI assistant trained on LGBTQ+ legal matters.",
    color: "pride-orange"
  },
  {
    icon: Heart,
    title: "Compassionate Support",
    description: "Our platform is built with empathy and understanding of the unique challenges faced by the LGBTQ+ community.",
    color: "pride-pink"
  },
  {
    icon: Globe,
    title: "Multi-Jurisdiction Coverage",
    description: "Legal information covering India, United States, United Kingdom, and international human rights frameworks.",
    color: "pride-blue"
  },
  {
    icon: Lock,
    title: "Privacy & Confidentiality",
    description: "Your conversations are private and secure. We never store or share your personal information.",
    color: "pride-purple"
  },
  {
    icon: Users,
    title: "Community Resources",
    description: "Connect with support organizations, legal aid services, and advocacy groups in your area.",
    color: "pride-green"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pride-blue/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Why Choose PrideJustice AI</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive platform designed specifically for the LGBTQ+ community,
            combining cutting-edge AI technology with deep legal expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-pride-purple/30 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 text-${feature.color}`} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
