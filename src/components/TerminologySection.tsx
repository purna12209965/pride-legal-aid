import { useState } from "react";
import { ChevronDown, ChevronUp, Info } from "lucide-react";

const terms = [
  {
    term: "LGBTQ+",
    full: "Lesbian, Gay, Bisexual, Transgender, Queer/Questioning, and more",
    definition: "An umbrella term encompassing people of all gender identities and sexual orientations that differ from heterosexual and cisgender norms. The '+' acknowledges the spectrum of identities not explicitly named.",
    legal: "Many jurisdictions now include LGBTQ+ individuals as a protected class under anti-discrimination laws."
  },
  {
    term: "Gender Identity",
    full: "Internal sense of one's own gender",
    definition: "A person's internal, deeply-felt sense of being male, female, a blend of both, neither, or another gender. This may or may not correspond to the sex assigned at birth.",
    legal: "Recognized as a protected characteristic in employment law in many countries, including under Title VII in the US (per Bostock v. Clayton County, 2020)."
  },
  {
    term: "Sexual Orientation",
    full: "Pattern of emotional, romantic, or sexual attraction",
    definition: "Describes who a person is attracted to emotionally, romantically, or sexually. Common orientations include heterosexual, homosexual (gay/lesbian), bisexual, pansexual, and asexual.",
    legal: "Protected under human rights legislation in numerous jurisdictions worldwide."
  },
  {
    term: "Transgender",
    full: "Gender identity differs from sex assigned at birth",
    definition: "An umbrella term for people whose gender identity differs from the sex they were assigned at birth. Transgender people may transition socially, legally, and/or medically.",
    legal: "Transgender individuals are protected under gender identity laws in many jurisdictions. Legal gender recognition processes vary by country."
  },
  {
    term: "Non-Binary",
    full: "Gender identity outside the male/female binary",
    definition: "A term used by people who experience their gender identity as falling outside the traditional binary of male or female. Some may identify as both, neither, or as another gender entirely.",
    legal: "Several countries and states now legally recognize non-binary gender markers (e.g., 'X' on passports and IDs)."
  },
  {
    term: "Cisgender",
    full: "Gender identity matches sex assigned at birth",
    definition: "A term describing people whose gender identity corresponds to the sex they were assigned at birth. It is the counterpart to transgender.",
    legal: "Used in legal contexts to distinguish from transgender individuals when discussing gender-based protections."
  },
  {
    term: "Intersex",
    full: "Natural variations in sex characteristics",
    definition: "A term for people born with reproductive or sexual anatomy that doesn't fit typical definitions of male or female. This can include variations in chromosomes, hormones, genitalia, or other characteristics.",
    legal: "Some jurisdictions now include intersex as a protected characteristic. Medical interventions on intersex infants are increasingly regulated."
  },
  {
    term: "Gender Expression",
    full: "External presentation of gender",
    definition: "The external manifestation of gender, expressed through clothing, haircut, voice, behavior, and other outward characteristics. May or may not conform to socially defined masculine or feminine norms.",
    legal: "Protected in many workplace discrimination laws as part of gender identity protections."
  }
];

const TerminologySection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="terms" className="py-24 bg-muted/20 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pride-pink/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Understanding Terminology</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Language matters. Understanding these terms helps in legal contexts 
            and fosters inclusive communication.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {terms.map((item, index) => (
            <div 
              key={index}
              className="gradient-border overflow-hidden"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
              >
                <div>
                  <span className="font-display text-lg font-semibold text-foreground">
                    {item.term}
                  </span>
                  <span className="text-muted-foreground text-sm ml-2">
                    — {item.full}
                  </span>
                </div>
                {expandedIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-pride-purple" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              
              {expandedIndex === index && (
                <div className="px-6 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.definition}
                  </p>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-pride-purple/10 border border-pride-purple/20">
                    <Info className="w-5 h-5 text-pride-purple mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-pride-purple">Legal Context:</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.legal}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TerminologySection;
