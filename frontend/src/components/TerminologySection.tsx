import { useState } from "react";
import { ChevronDown, ChevronUp, Info } from "lucide-react";

const terms = [
  {
    term: "LGBTQ+",
    full: "Lesbian, Gay, Bisexual, Transgender, Queer/Questioning, and more",
    definition: "An umbrella term encompassing people of all gender identities and sexual orientations that differ from heterosexual and cisgender norms. The '+' acknowledges the spectrum of identities not explicitly named, including asexual, pansexual, non-binary, and many others.",
    example: "Example: 'The LGBTQ+ community includes people with diverse identities such as lesbian women, gay men, bisexual individuals, transgender people, and those who identify as queer or questioning their identity.'",
    legal: "Many jurisdictions now include LGBTQ+ individuals as a protected class under anti-discrimination laws. In the US, Title VII protections apply; in the UK, the Equality Act 2010 covers sexual orientation and gender reassignment."
  },
  {
    term: "Gender Identity",
    full: "Internal sense of one's own gender",
    definition: "A person's internal, deeply-felt sense of being male, female, a blend of both, neither, or another gender. This may or may not correspond to the sex assigned at birth. Gender identity is distinct from biological sex and sexual orientation.",
    example: "Example: 'A person assigned female at birth may have a male gender identity (transgender man), or may identify as non-binary, feeling their gender is outside the male/female binary.'",
    legal: "Recognized as a protected characteristic in employment law in many countries, including under Title VII in the US (per Bostock v. Clayton County, 2020). The Transgender Persons Act 2019 in India recognizes the right to self-perceived gender identity."
  },
  {
    term: "Sexual Orientation",
    full: "Pattern of emotional, romantic, or sexual attraction",
    definition: "Describes who a person is attracted to emotionally, romantically, or sexually. Common orientations include heterosexual (attracted to opposite gender), homosexual/gay/lesbian (attracted to same gender), bisexual (attracted to more than one gender), pansexual (attracted to people regardless of gender), and asexual (little to no sexual attraction).",
    example: "Example: 'A bisexual person may be attracted to both men and women. A pansexual person may be attracted to people of any gender identity. An asexual person may experience romantic attraction without sexual attraction.'",
    legal: "Protected under human rights legislation in numerous jurisdictions worldwide. The Navtej Singh Johar v. Union of India (2018) case decriminalized homosexuality in India, recognizing sexual orientation as a fundamental aspect of identity."
  },
  {
    term: "Transgender",
    full: "Gender identity differs from sex assigned at birth",
    definition: "An umbrella term for people whose gender identity differs from the sex they were assigned at birth. Transgender people may transition socially (name, pronouns, presentation), legally (documents), and/or medically (hormones, surgery). Not all transgender people choose to medically transition.",
    example: "Example: 'A transgender woman (trans woman) was assigned male at birth but identifies as female. A transgender man (trans man) was assigned female at birth but identifies as male. Some people transition with hormones and surgery, while others transition socially only.'",
    legal: "Transgender individuals are protected under gender identity laws in many jurisdictions. Legal gender recognition processes vary by country. The NALSA v. Union of India (2014) judgment recognized transgender persons' right to self-identification in India."
  },
  {
    term: "Non-Binary",
    full: "Gender identity outside the male/female binary",
    definition: "A term used by people who experience their gender identity as falling outside the traditional binary of male or female. Some may identify as both, neither, or as another gender entirely. Non-binary is an umbrella term that includes identities like genderqueer, genderfluid, agender, and bigender.",
    example: "Example: 'A non-binary person might use they/them pronouns and may present in ways that blend masculine and feminine characteristics, or in ways that are neither. Some non-binary people identify partially as male or female, while others reject gender categories entirely.'",
    legal: "Several countries and states now legally recognize non-binary gender markers (e.g., 'X' on passports and IDs). Countries like Canada, Australia, New Zealand, and several US states offer non-binary gender options on official documents."
  },
  {
    term: "Cisgender",
    full: "Gender identity matches sex assigned at birth",
    definition: "A term describing people whose gender identity corresponds to the sex they were assigned at birth. It is the counterpart to transgender. The prefix 'cis-' means 'on the same side as,' while 'trans-' means 'across from' or 'on the other side of.'",
    example: "Example: 'A cisgender woman was assigned female at birth and identifies as a woman. A cisgender man was assigned male at birth and identifies as a man. Most people are cisgender, but this doesn't make transgender identities any less valid.'",
    legal: "Used in legal contexts to distinguish from transgender individuals when discussing gender-based protections. The term helps clarify that gender identity is a spectrum and that cisgender is one identity among many, not the default or 'normal' state."
  },
  {
    term: "Intersex",
    full: "Natural variations in sex characteristics",
    definition: "A term for people born with reproductive or sexual anatomy that doesn't fit typical definitions of male or female. This can include variations in chromosomes (e.g., XXY), hormones, genitalia, or other sex characteristics. Intersex is about biological sex characteristics, not gender identity or sexual orientation.",
    example: "Example: 'An intersex person might be born with chromosomes that are XXY instead of XX or XY, or with genitalia that doesn't clearly appear male or female. Some intersex variations are visible at birth, while others aren't discovered until puberty or later.'",
    legal: "Some jurisdictions now include intersex as a protected characteristic. Medical interventions on intersex infants are increasingly regulated, with growing recognition that unnecessary surgeries should be delayed until the individual can consent. Malta and Portugal have banned non-consensual medical interventions on intersex minors."
  },
  {
    term: "Gender Expression",
    full: "External presentation of gender",
    definition: "The external manifestation of gender, expressed through clothing, haircut, voice, behavior, body language, and other outward characteristics. May or may not conform to socially defined masculine or feminine norms. Gender expression is separate from gender identity - a person's outward appearance doesn't always reflect their internal identity.",
    example: "Example: 'A person may have a masculine gender expression (wearing suits, short hair) but identify as female. Another person may have a feminine gender expression (wearing dresses, makeup) but identify as male. Gender expression is about how you present yourself, not who you are inside.'",
    legal: "Protected in many workplace discrimination laws as part of gender identity protections. The Bostock v. Clayton County decision in the US protects gender expression under Title VII. Dress codes that discriminate based on gender expression may be challenged as discriminatory."
  },
  {
    term: "Coming Out",
    full: "Disclosing one's LGBTQ+ identity",
    definition: "The process of acknowledging and sharing one's sexual orientation or gender identity with others. Coming out is a personal decision and ongoing process - LGBTQ+ people may come out multiple times throughout their lives to different people. There is no 'right' time or way to come out.",
    example: "Example: 'Someone might come out to close friends first, then family, then coworkers. Coming out can be a single conversation or a gradual process. Some people are 'out' in all areas of life, while others may be out in some contexts but not others for safety or personal reasons.'",
    legal: "While coming out is a personal choice, legal protections exist in many jurisdictions to prevent discrimination based on disclosed LGBTQ+ identity. However, in some countries, being openly LGBTQ+ can still result in legal penalties, making coming out dangerous."
  },
  {
    term: "Pronouns",
    full: "Words used to refer to someone in third person",
    definition: "Pronouns are the words we use to refer to people when not using their name (e.g., he/him, she/her, they/them). Using someone's correct pronouns is a basic form of respect. Some people use pronouns that don't match assumptions based on their appearance. They/them can be used as singular pronouns for non-binary individuals or anyone who prefers them.",
    example: "Example: 'Alex uses they/them pronouns, so you would say: \"Alex is a lawyer. They specialize in civil rights. I met with them yesterday.\" Some people use multiple sets of pronouns like she/they or he/they, meaning either set is acceptable.'",
    legal: "Deliberately and repeatedly using incorrect pronouns (misgendering) can constitute harassment in workplace and educational settings. Some jurisdictions have policies requiring the use of correct pronouns in official settings. Respecting pronouns is increasingly recognized as a legal obligation in anti-discrimination contexts."
  }
];

const TerminologySection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="terms" className="py-24 bg-muted/20 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pride-pink/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Understanding Terminology</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-6">
            Language matters. Understanding these terms helps in legal contexts, fosters inclusive communication, and empowers you to navigate your rights with confidence.
          </p>
          
          {/* Enhanced Description Section */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4 mt-8 mb-12">
            <div className="p-6 rounded-xl bg-card border border-border text-left">
              <div className="w-12 h-12 rounded-full bg-pride-purple/10 flex items-center justify-center mb-4">
                <Info className="w-6 h-6 text-pride-purple" />
              </div>
              <h3 className="font-semibold mb-2">Why It Matters</h3>
              <p className="text-sm text-muted-foreground">
                Using correct terminology shows respect, prevents misunderstandings, and is essential when discussing legal rights and protections.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border text-left">
              <div className="w-12 h-12 rounded-full bg-pride-pink/10 flex items-center justify-center mb-4">
                <Info className="w-6 h-6 text-pride-pink" />
              </div>
              <h3 className="font-semibold mb-2">Legal Importance</h3>
              <p className="text-sm text-muted-foreground">
                Many legal protections are based on specific terms like "gender identity" and "sexual orientation." Understanding these helps you know your rights.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border text-left">
              <div className="w-12 h-12 rounded-full bg-pride-blue/10 flex items-center justify-center mb-4">
                <Info className="w-6 h-6 text-pride-blue" />
              </div>
              <h3 className="font-semibold mb-2">Evolving Language</h3>
              <p className="text-sm text-muted-foreground">
                LGBTQ+ terminology continues to evolve. These definitions reflect current understanding and legal usage as of 2024-2026.
              </p>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="max-w-3xl mx-auto p-6 rounded-xl bg-gradient-to-br from-pride-purple/10 to-pride-pink/10 border border-pride-purple/20 text-left mb-8">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-pride-purple" />
              Quick Tips for Understanding
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-pride-purple mt-1">•</span>
                <span><strong className="text-foreground">Click any term</strong> to expand and see detailed definitions, real-world examples, and legal context</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pride-purple mt-1">•</span>
                <span><strong className="text-foreground">Gender identity</strong> is who you are inside, while <strong className="text-foreground">sexual orientation</strong> is who you're attracted to</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pride-purple mt-1">•</span>
                <span><strong className="text-foreground">Respect pronouns</strong> - using someone's correct pronouns is a basic form of respect and may be legally required in some contexts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pride-purple mt-1">•</span>
                <span><strong className="text-foreground">Ask if unsure</strong> - it's okay to politely ask someone their pronouns or how they identify</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {terms.map((item, index) => (
            <div
              key={index}
              className="gradient-border overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors cursor-pointer"
                aria-expanded={expandedIndex === index}
              >
                <div className="flex-1 min-w-0">
                  <span className="font-display text-lg font-semibold text-foreground">
                    {item.term}
                  </span>
                  <span className="text-muted-foreground text-sm ml-2">
                    — {item.full}
                  </span>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-6 pb-6 space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <p className="text-sm font-medium text-foreground mb-2">Definition:</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item.definition}
                    </p>
                  </div>
                  
                  {item.example && (
                    <div className="p-4 rounded-lg bg-pride-blue/5 border border-pride-blue/20">
                      <p className="text-sm font-medium text-pride-blue mb-2">Real-World Example:</p>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {item.example}
                      </p>
                    </div>
                  )}
                  
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
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-3xl mx-auto mt-12 text-center p-6 rounded-xl bg-card border border-border">
          <h3 className="font-semibold text-lg mb-2">Want to Learn More?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Explore our comprehensive terminology glossary in the dashboard for 20+ terms with detailed legal context and examples.
          </p>
          <a
            href="/dashboard/terminology"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pride-purple text-white hover:bg-pride-pink transition-colors"
          >
            <span>View Full Glossary</span>
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TerminologySection;
