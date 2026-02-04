import { ExternalLink, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const laws = [
  {
    title: "Navtej Singh Johar v. Union of India",
    jurisdiction: "India",
    type: "Supreme Court Decision",
    summary: "Historic judgment that decriminalized homosexuality by striking down Section 377 of the Indian Penal Code, ruling it unconstitutional insofar as it criminalized consensual sexual conduct between adults.",
    impact: "Ended 157 years of criminalization of LGBTQ+ individuals in India, recognizing their fundamental rights to equality and dignity.",
    year: "2018"
  },
  {
    title: "NALSA v. Union of India",
    jurisdiction: "India",
    type: "Supreme Court Decision",
    summary: "Landmark judgment recognizing transgender persons as a 'third gender' and affirming their constitutional rights including the right to self-identification of gender.",
    impact: "Directed governments to provide reservations in education and employment, and ensure access to healthcare for transgender individuals.",
    year: "2014"
  },
  {
    title: "Supriyo v. Union of India",
    jurisdiction: "India",
    type: "Supreme Court Decision",
    summary: "Petitions seeking legal recognition of same-sex marriages under the Special Marriage Act. While marriage equality wasn't granted, the court affirmed LGBTQ+ rights to cohabitation and non-discrimination.",
    impact: "Directed government to form a committee to address discrimination and ensure equal rights for queer couples in matters like ration cards and medical decisions.",
    year: "2023"
  },
  {
    title: "Transgender Persons (Protection of Rights) Act",
    jurisdiction: "India",
    type: "Legislation",
    summary: "An Act to provide for protection of rights of transgender persons and their welfare, including provisions for identity certificates and prohibition of discrimination.",
    impact: "First comprehensive legislation for transgender rights in India, though criticized by activists for certain provisions.",
    year: "2019"
  },
  {
    title: "Bostock v. Clayton County (2020)",
    jurisdiction: "United States",
    type: "Supreme Court Decision",
    summary: "Landmark ruling that Title VII of the Civil Rights Act of 1964 protects employees from discrimination based on sexual orientation and gender identity.",
    impact: "Established federal employment protections for LGBTQ+ workers nationwide.",
    year: "2020"
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
    title: "Yogyakarta Principles",
    jurisdiction: "International",
    type: "Human Rights Framework",
    summary: "A set of principles on the application of international human rights law in relation to sexual orientation and gender identity.",
    impact: "Influential framework used by courts and human rights bodies worldwide.",
    year: "2006"
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
