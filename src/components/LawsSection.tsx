import { ExternalLink, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const laws = [
  {
    title: "Bostock v. Clayton County (2020)",
    jurisdiction: "United States",
    type: "Supreme Court Decision",
    summary: "Landmark ruling that Title VII of the Civil Rights Act of 1964 protects employees from discrimination based on sexual orientation and gender identity.",
    impact: "Established federal employment protections for LGBTQ+ workers nationwide.",
    year: "2020"
  },
  {
    title: "Marriage (Same Sex Couples) Act 2013",
    jurisdiction: "United Kingdom",
    type: "Legislation",
    summary: "Legalized same-sex marriage in England and Wales, allowing same-sex couples to marry in civil ceremonies and religious settings where permitted.",
    impact: "Extended full marriage rights and protections to same-sex couples.",
    year: "2013"
  },
  {
    title: "Yogyakarta Principles",
    jurisdiction: "International",
    type: "Human Rights Framework",
    summary: "A set of principles on the application of international human rights law in relation to sexual orientation and gender identity.",
    impact: "Influential framework used by courts and human rights bodies worldwide.",
    year: "2006"
  },
  {
    title: "Gender Recognition Act 2004",
    jurisdiction: "United Kingdom",
    type: "Legislation",
    summary: "Allows transgender people to apply for a Gender Recognition Certificate, enabling them to obtain a new birth certificate reflecting their acquired gender.",
    impact: "First comprehensive legal recognition of gender transition in the UK.",
    year: "2004"
  },
  {
    title: "Obergefell v. Hodges (2015)",
    jurisdiction: "United States",
    type: "Supreme Court Decision",
    summary: "The Supreme Court ruled that the fundamental right to marry is guaranteed to same-sex couples under the Constitution.",
    impact: "Legalized same-sex marriage across all 50 states.",
    year: "2015"
  },
  {
    title: "Equality Act 2010",
    jurisdiction: "United Kingdom",
    type: "Legislation",
    summary: "Consolidated and strengthened anti-discrimination law, explicitly protecting sexual orientation and gender reassignment as protected characteristics.",
    impact: "Comprehensive protection against discrimination in employment, services, and public functions.",
    year: "2010"
  }
];

const LawsSection = () => {
  return (
    <section id="laws" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pride-blue/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Laws & Legal Precedents</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Key legislation and court decisions that have shaped LGBTQ+ rights 
            around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {laws.map((law, index) => (
            <div 
              key={index}
              className="gradient-border card-hover p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-pride-blue" />
                  <span className="text-pride-blue">{law.jurisdiction}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{law.year}</span>
                </div>
              </div>
              
              <span className="text-xs px-2 py-1 rounded-full bg-pride-purple/10 text-pride-purple w-fit mb-3">
                {law.type}
              </span>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {law.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {law.summary}
              </p>
              
              <div className="p-3 rounded-lg bg-pride-green/10 border border-pride-green/20 mb-4">
                <span className="text-xs font-medium text-pride-green">Impact:</span>
                <p className="text-sm text-muted-foreground mt-1">{law.impact}</p>
              </div>
              
              <Button variant="glass" size="sm" className="w-fit">
                <ExternalLink className="w-4 h-4" />
                Read Full Text
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LawsSection;
