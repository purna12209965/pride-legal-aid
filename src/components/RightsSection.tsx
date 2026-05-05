import { Shield, Home, Heart, Briefcase, Users, Vote } from "lucide-react";

const rights = [
  {
    icon: Shield,
    sticker: "🛡️",
    title: "Anti-Discrimination",
    description: "Protection against discrimination in employment, housing, and public accommodations based on sexual orientation and gender identity.",
    color: "hsl(280 65% 60%)",
    bg: "hsl(280 65% 60% / 0.1)",
    border: "hsl(280 65% 60% / 0.25)",
  },
  {
    icon: Heart,
    sticker: "💍",
    title: "Marriage Equality",
    description: "The right to marry and have your marriage legally recognized, with all associated benefits and protections.",
    color: "hsl(330 60% 55%)",
    bg: "hsl(330 60% 55% / 0.1)",
    border: "hsl(330 60% 55% / 0.25)",
  },
  {
    icon: Home,
    sticker: "🏠",
    title: "Housing Rights",
    description: "Equal access to housing without discrimination from landlords, real estate agents, or mortgage lenders.",
    color: "hsl(200 70% 50%)",
    bg: "hsl(200 70% 50% / 0.1)",
    border: "hsl(200 70% 50% / 0.25)",
  },
  {
    icon: Briefcase,
    sticker: "💼",
    title: "Employment Protection",
    description: "Protection from workplace discrimination, harassment, and unfair termination based on identity.",
    color: "hsl(45 90% 55%)",
    bg: "hsl(45 90% 55% / 0.1)",
    border: "hsl(45 90% 55% / 0.25)",
  },
  {
    icon: Users,
    sticker: "👨‍👩‍👧‍👦",
    title: "Family Rights",
    description: "Rights related to adoption, foster care, parental recognition, and family formation.",
    color: "hsl(160 60% 45%)",
    bg: "hsl(160 60% 45% / 0.1)",
    border: "hsl(160 60% 45% / 0.25)",
  },
  {
    icon: Vote,
    sticker: "🏥",
    title: "Healthcare Access",
    description: "Right to healthcare without discrimination, including gender-affirming care and mental health services.",
    color: "hsl(280 65% 60%)",
    bg: "hsl(280 65% 60% / 0.1)",
    border: "hsl(280 65% 60% / 0.25)",
  }
];

const RightsSection = () => {
  return (
    <section id="rights" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Decorative floating stickers */}
      <div className="absolute top-10 right-16 text-5xl opacity-20 select-none rotate-12">🏳️‍🌈</div>
      <div className="absolute bottom-16 left-10 text-4xl opacity-15 select-none -rotate-6">⚖️</div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-4xl mb-3">🌈</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Know Your Rights</span>
          </h2>
          {/* Pride stripe underline */}
          <div className="w-32 h-1 mx-auto rounded-full mb-4" style={{background:"linear-gradient(90deg,#e40303,#ff8c00,#ffed00,#008026,#004dff,#750787)"}} />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Understanding your legal protections is the first step toward empowerment. 
            Here are the key rights that protect the LGBTQ+ community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rights.map((right, index) => (
            <div 
              key={index}
              className="card-hover p-6 group rounded-2xl relative overflow-hidden"
              style={{background: right.bg, border: `1px solid ${right.border}`}}
            >
              <div className="absolute top-3 right-3 text-2xl opacity-40 group-hover:opacity-70 transition-opacity select-none">
                {right.sticker}
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{background: right.bg, border: `1px solid ${right.border}`}}>
                <right.icon className="w-6 h-6" style={{color: right.color}} />
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
