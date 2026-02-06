import { useState } from "react";
import { ExternalLink, MapPin, Calendar, BookOpen, Scale, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
interface LawDetail {
  title: string;
  jurisdiction: string;
  type: string;
  summary: string;
  impact: string;
  year: string;
  fullExplanation: string;
  keyPoints: string[];
  whatItMeans: string;
  resources?: { name: string; url: string }[];
}

const laws: LawDetail[] = [
  {
    title: "Navtej Singh Johar v. Union of India",
    jurisdiction: "India",
    type: "Supreme Court Decision",
    summary: "Historic judgment that decriminalized homosexuality by striking down Section 377 of the Indian Penal Code, ruling it unconstitutional insofar as it criminalized consensual sexual conduct between adults.",
    impact: "Ended 157 years of criminalization of LGBTQ+ individuals in India, recognizing their fundamental rights to equality and dignity.",
    year: "2018",
    fullExplanation: `Section 377 of the Indian Penal Code was a colonial-era law introduced in 1861 that criminalized "carnal intercourse against the order of nature," which was interpreted to include consensual homosexual acts between adults. This law carried a punishment of up to 10 years imprisonment.

In September 2018, a five-judge Constitution Bench of the Supreme Court of India delivered a landmark verdict. The bench, led by Chief Justice Dipak Misra, unanimously ruled that Section 377 was unconstitutional "insofar as it criminalizes consensual sexual conduct between adults of the same sex."

The court held that the provision violated fundamental rights guaranteed under the Indian Constitution, including:
- Article 14 (Right to Equality)
- Article 15 (Prohibition of Discrimination)  
- Article 19 (Freedom of Speech and Expression)
- Article 21 (Right to Life and Personal Liberty)

Justice Indu Malhotra famously stated: "History owes an apology to the members of this community and their families, for the delay in providing redressal for the ignominy and ostracism that they have suffered through the centuries."`,
    keyPoints: [
      "Decriminalized consensual same-sex relations between adults",
      "Section 377 still applies to non-consensual acts, bestiality, and acts involving minors",
      "Recognized LGBTQ+ individuals as equal citizens with full constitutional rights",
      "Overruled the 2013 Suresh Kumar Koushal judgment that had recriminalized homosexuality",
      "Applied transformative constitutionalism to read down the colonial law"
    ],
    whatItMeans: "For LGBTQ+ individuals in India, this means you cannot be arrested, prosecuted, or imprisoned for being in a consensual same-sex relationship. You have the constitutional right to live openly without fear of criminal prosecution for your sexual orientation. However, this judgment did not legalize same-sex marriage or provide other civil rights protections.",
    resources: [
      { name: "Supreme Court Judgment Full Text", url: "https://main.sci.gov.in/supremecourt/2016/14961/14961_2016_Judgement_06-Sep-2018.pdf" },
      { name: "Lawyers Collective Analysis", url: "https://lawyerscollective.org/section-377/" }
    ]
  },
  {
    title: "NALSA v. Union of India",
    jurisdiction: "India",
    type: "Supreme Court Decision",
    summary: "Landmark judgment recognizing transgender persons as a 'third gender' and affirming their constitutional rights including the right to self-identification of gender.",
    impact: "Directed governments to provide reservations in education and employment, and ensure access to healthcare for transgender individuals.",
    year: "2014",
    fullExplanation: `The National Legal Services Authority (NALSA) v. Union of India case is one of the most progressive judgments on transgender rights globally. The Supreme Court of India recognized transgender persons as a "third gender" and affirmed their fundamental rights under the Constitution.

The two-judge bench comprising Justice K.S. Radhakrishnan and Justice A.K. Sikri delivered this verdict on April 15, 2014. The court acknowledged the historical presence of the transgender community in Indian society and the discrimination they have faced.

Key aspects of the judgment:
1. **Self-Identification**: The court upheld the right of transgender persons to decide their self-identified gender. This means no medical or surgical procedures are required to legally change one's gender.

2. **Third Gender Recognition**: Directed the Centre and States to recognize transgender persons as a third gender, apart from male and female.

3. **Fundamental Rights**: Affirmed that transgender persons are entitled to all fundamental rights including the right to equality, freedom of expression, education, and livelihood.

4. **Affirmative Action**: Directed the government to treat transgender persons as socially and educationally backward classes and extend reservation in education and public employment.`,
    keyPoints: [
      "Recognized transgender as a 'third gender' with full constitutional rights",
      "Upheld the right to self-identification of gender without surgery requirement",
      "Directed reservation for transgender persons in education and jobs",
      "Mandated special healthcare facilities for transgender individuals",
      "Called for awareness campaigns and sensitization programs",
      "Directed formation of state-level expert committees for welfare measures"
    ],
    whatItMeans: "As a transgender person in India, you have the constitutional right to identify your gender based on your self-perception. You can obtain identity documents reflecting your chosen gender. You are entitled to reservation benefits in educational institutions and government jobs as part of Other Backward Classes (OBC). Government hospitals should provide separate facilities and free sex reassignment surgery.",
    resources: [
      { name: "NALSA Judgment Full Text", url: "https://main.sci.gov.in/jonew/judis/41411.pdf" },
      { name: "Transgender Rights in India - UNDP", url: "https://www.undp.org/india/publications/transgender-rights-india" }
    ]
  },
  {
    title: "Supriyo v. Union of India",
    jurisdiction: "India",
    type: "Supreme Court Decision",
    summary: "Petitions seeking legal recognition of same-sex marriages under the Special Marriage Act. While marriage equality wasn't granted, the court affirmed LGBTQ+ rights to cohabitation and non-discrimination.",
    impact: "Directed government to form a committee to address discrimination and ensure equal rights for queer couples in matters like ration cards and medical decisions.",
    year: "2023",
    fullExplanation: `In October 2023, a five-judge Constitution Bench of the Supreme Court delivered its verdict on multiple petitions seeking legal recognition of same-sex marriages in India. While the court did not legalize same-sex marriage, it made several important observations and directions.

The bench comprised Chief Justice D.Y. Chandrachud, Justices S.K. Kaul, S.R. Bhat, Hima Kohli, and P.S. Narasimha. The judgment, though not granting marriage equality, was significant in several ways:

**What the Court Ruled:**
- Marriage is not a fundamental right, but a statutory right regulated by personal laws
- The court cannot direct Parliament to amend the Special Marriage Act to include same-sex couples
- Queer couples have the right to cohabit and be in relationships
- Discrimination against LGBTQ+ individuals is unconstitutional

**Directions Given:**
The court directed the Union Government to constitute a committee to:
- Study and recommend changes to address discrimination
- Ensure queer couples can jointly hold bank accounts
- Allow them to be nominees for insurance and gratuity
- Enable joint ration cards
- Ensure hospital visitation rights for partners

The court also clarified that queer couples can adopt children under existing laws, overturning a previous restrictive interpretation.`,
    keyPoints: [
      "Same-sex marriage not legalized but right to relationship affirmed",
      "Queer couples can legally cohabit without fear of prosecution",
      "Government directed to form committee for LGBTQ+ rights",
      "Queer couples can jointly hold bank accounts and be nominees",
      "Hospital visitation and medical decision-making rights for partners",
      "Queer couples can adopt children jointly under existing laws",
      "States cannot discriminate in providing social welfare benefits"
    ],
    whatItMeans: "While you cannot legally marry your same-sex partner in India yet, you have the right to live together openly. You can make your partner a nominee in your bank accounts, insurance policies, and pension schemes. In medical emergencies, your partner should be allowed to make decisions for you. You can jointly adopt a child. The government is working on policies to reduce discrimination against queer couples.",
    resources: [
      { name: "Supreme Court Judgment", url: "https://main.sci.gov.in/supremecourt/2023/5765/5765_2023_Judgement_17-Oct-2023.pdf" },
      { name: "The Hindu Analysis", url: "https://www.thehindu.com/news/national/same-sex-marriage-verdict/" }
    ]
  },
  {
    title: "Transgender Persons (Protection of Rights) Act",
    jurisdiction: "India",
    type: "Legislation",
    summary: "An Act to provide for protection of rights of transgender persons and their welfare, including provisions for identity certificates and prohibition of discrimination.",
    impact: "First comprehensive legislation for transgender rights in India, though criticized by activists for certain provisions.",
    year: "2019",
    fullExplanation: `The Transgender Persons (Protection of Rights) Act, 2019 is India's first legislation specifically addressing the rights and welfare of transgender persons. It was passed by Parliament in November 2019 and came into force in January 2020.

**Key Provisions of the Act:**

1. **Definition**: Defines a transgender person as one whose gender does not match the gender assigned at birth, including trans-men, trans-women, persons with intersex variations, genderqueer, and those with socio-cultural identities like kinnar and hijra.

2. **Identity Certificate**: Provides for a District Magistrate to issue a certificate of identity as transgender. After sex reassignment surgery, a revised certificate can be obtained.

3. **Prohibition of Discrimination**: Prohibits discrimination against transgender persons in education, employment, healthcare, and access to goods and services.

4. **Right to Residence**: Every transgender person has the right to reside with parents or immediate family.

5. **Welfare Measures**: Government to take steps for rescue, rehabilitation, vocational training, and self-employment.

6. **Healthcare**: Government to provide health facilities including sex reassignment surgery and comprehensive insurance.

**Criticisms:**
The Act has faced significant criticism from the transgender community for:
- Requiring medical examination for identity change (contradicting NALSA judgment)
- Inadequate punishment (only 2 years) for sexual abuse against transgender persons
- Not addressing issues like inheritance rights and marriage`,
    keyPoints: [
      "First comprehensive transgender rights legislation in India",
      "Provides for certificate of identity from District Magistrate",
      "Prohibits discrimination in education, employment, healthcare",
      "Government must provide welfare schemes and healthcare facilities",
      "Penalizes offences against transgender persons (6 months to 2 years)",
      "National Council for Transgender Persons to advise government",
      "Criticized for requiring medical certification for gender change"
    ],
    whatItMeans: "As a transgender person, you have legal protection against discrimination in getting education, jobs, or healthcare. You can apply for an identity certificate from the District Magistrate. If you undergo sex reassignment surgery, you can get a revised certificate. Any harassment or abuse against you is a punishable offence. However, be aware that the certificate process may require appearing before a committee, which some find problematic.",
    resources: [
      { name: "Full Act Text - India Code", url: "https://www.indiacode.nic.in/bitstream/123456789/12089/1/a2019-40.pdf" },
      { name: "Transgender Rules 2020", url: "https://socialjustice.gov.in/writereaddata/UploadFile/TG%20Rules.pdf" }
    ]
  },
  {
    title: "Bostock v. Clayton County (2020)",
    jurisdiction: "United States",
    type: "Supreme Court Decision",
    summary: "Landmark ruling that Title VII of the Civil Rights Act of 1964 protects employees from discrimination based on sexual orientation and gender identity.",
    impact: "Established federal employment protections for LGBTQ+ workers nationwide.",
    year: "2020",
    fullExplanation: `Bostock v. Clayton County is a landmark United States Supreme Court case decided on June 15, 2020. In a 6-3 decision, the Court held that Title VII of the Civil Rights Act of 1964, which prohibits discrimination "because of sex," also prohibits discrimination based on sexual orientation and gender identity.

The case consolidated three lawsuits:
1. **Gerald Bostock** was fired from his job as a child welfare services coordinator in Clayton County, Georgia, after joining a gay recreational softball league.
2. **Donald Zarda** was fired from his job as a skydiving instructor in New York after revealing he was gay.
3. **Aimee Stephens** was fired from a Michigan funeral home after announcing she was transgender and would start presenting as female at work.

Justice Neil Gorsuch, writing for the majority, stated: "An employer who fires an individual for being homosexual or transgender fires that person for traits or actions it would not have questioned in members of a different sex. Sex plays a necessary and undisguisable role in the decision, exactly what Title VII forbids."

The decision was significant because:
- It provided nationwide protection for LGBTQ+ workers
- It was decided by a conservative-majority court
- It interpreted existing civil rights law rather than creating new rights`,
    keyPoints: [
      "Title VII protections extend to LGBTQ+ employees",
      "Employers cannot fire someone for being gay or transgender",
      "Applied to all employers with 15 or more employees",
      "Decided 6-3 with conservative Justice Gorsuch writing majority",
      "Interpreted existing 1964 law rather than creating new rights",
      "Does not address religious exemptions in detail"
    ],
    whatItMeans: "If you work for an employer with 15 or more employees in the United States, you cannot be fired, demoted, or harassed because of your sexual orientation or gender identity. If you face such discrimination, you can file a complaint with the Equal Employment Opportunity Commission (EEOC). This protection applies across all 50 states, even those without state-level LGBTQ+ employment protections.",
    resources: [
      { name: "Supreme Court Opinion", url: "https://www.supremecourt.gov/opinions/19pdf/17-1618_hfci.pdf" },
      { name: "EEOC Guidance on LGBTQ+ Rights", url: "https://www.eeoc.gov/laws/guidance/protections-against-employment-discrimination-based-sexual-orientation-and-gender" }
    ]
  },
  {
    title: "Obergefell v. Hodges (2015)",
    jurisdiction: "United States",
    type: "Supreme Court Decision",
    summary: "The Supreme Court ruled that the fundamental right to marry is guaranteed to same-sex couples under the Constitution.",
    impact: "Legalized same-sex marriage across all 50 states.",
    year: "2015",
    fullExplanation: `Obergefell v. Hodges is the landmark civil rights case in which the Supreme Court of the United States ruled that the fundamental right to marry is guaranteed to same-sex couples under both the Due Process Clause and the Equal Protection Clause of the Fourteenth Amendment.

The case was named after lead plaintiff James Obergefell, who sued the state of Ohio to be recognized as the surviving spouse on his husband John Arthur's death certificate. Arthur, who had ALS, died shortly after they married in Maryland (where same-sex marriage was legal).

In a 5-4 decision delivered on June 26, 2015, Justice Anthony Kennedy wrote:

"No union is more profound than marriage, for it embodies the highest ideals of love, fidelity, devotion, sacrifice, and family. In forming a marital union, two people become something greater than once they were... [The petitioners] ask for equal dignity in the eyes of the law. The Constitution grants them that right."

The ruling:
- Required all 50 states to issue marriage licenses to same-sex couples
- Required all states to recognize same-sex marriages performed in other jurisdictions
- Extended all federal and state marital benefits to same-sex couples`,
    keyPoints: [
      "Same-sex marriage is a fundamental right under the Constitution",
      "All 50 states must issue marriage licenses to same-sex couples",
      "States must recognize same-sex marriages from other states",
      "Same-sex couples entitled to all marital benefits (tax, healthcare, inheritance)",
      "Decided 5-4 with Justice Kennedy writing the majority opinion",
      "Built on previous cases like United States v. Windsor (2013)"
    ],
    whatItMeans: "As an LGBTQ+ person in the United States, you have the constitutional right to marry the person you love, regardless of gender. Your marriage is valid in all 50 states and entitled to all federal benefits including Social Security survivor benefits, tax benefits, immigration sponsorship, and hospital visitation rights. Your marriage certificate and relationship are legally identical to heterosexual marriages.",
    resources: [
      { name: "Supreme Court Opinion", url: "https://www.supremecourt.gov/opinions/14pdf/14-556_3204.pdf" },
      { name: "Lambda Legal - Marriage Resources", url: "https://www.lambdalegal.org/know-your-rights/article/marriage" }
    ]
  },
  {
    title: "Yogyakarta Principles",
    jurisdiction: "International",
    type: "Human Rights Framework",
    summary: "A set of principles on the application of international human rights law in relation to sexual orientation and gender identity.",
    impact: "Influential framework used by courts and human rights bodies worldwide.",
    year: "2006",
    fullExplanation: `The Yogyakarta Principles are a set of 29 principles (expanded to 38 in 2017 with the Yogyakarta Principles Plus 10) that apply international human rights law to issues of sexual orientation and gender identity. They were developed by a distinguished group of international human rights experts in Yogyakarta, Indonesia, in November 2006.

**Background:**
The principles were drafted by 29 experts from 25 countries, including former UN High Commissioner for Human Rights Mary Robinson. They address how existing international human rights law should apply to LGBTQ+ persons and those with diverse gender identities.

**Key Principles Include:**
- Right to the Universal Enjoyment of Human Rights
- Rights to Equality and Non-Discrimination
- Right to Recognition Before the Law
- Right to Life, Freedom from Violence
- Right to Privacy
- Right to Found a Family
- Right to Education, Health, Employment
- Right to Freedom of Expression and Assembly
- Right to Seek Asylum

**Legal Impact:**
While not legally binding, the Yogyakarta Principles have been:
- Cited by national courts in India, Nepal, Pakistan, and more
- Referenced by UN human rights bodies
- Used in advocacy for LGBTQ+ rights legislation worldwide
- Incorporated into national human rights policies`,
    keyPoints: [
      "29 core principles (38 with 2017 additions) on LGBTQ+ human rights",
      "Developed by 29 international human rights experts",
      "Applies existing human rights law to sexual orientation and gender identity",
      "Not legally binding but highly influential globally",
      "Cited by courts in India, Nepal, Kenya, and others",
      "Covers rights from life and security to expression and family",
      "Updated in 2017 to address new issues like data protection"
    ],
    whatItMeans: "The Yogyakarta Principles provide a framework you can reference when advocating for your rights. They establish that all human rights apply equally to you regardless of sexual orientation or gender identity. When facing discrimination, these principles can support legal arguments that international human rights standards protect you. They've been successfully used in courts across Asia, Africa, and Latin America.",
    resources: [
      { name: "Yogyakarta Principles Full Text", url: "https://yogyakartaprinciples.org/principles-en/" },
      { name: "Yogyakarta Principles Plus 10 (2017)", url: "https://yogyakartaprinciples.org/principles-en/yp10/" }
    ]
  },
  {
    title: "Equality Act 2010",
    jurisdiction: "United Kingdom",
    type: "Legislation",
    summary: "Consolidated and strengthened anti-discrimination law, explicitly protecting sexual orientation and gender reassignment as protected characteristics.",
    impact: "Comprehensive protection against discrimination in employment, services, and public functions.",
    year: "2010",
    fullExplanation: `The Equality Act 2010 is a comprehensive piece of UK legislation that consolidated and replaced previous anti-discrimination laws. It provides a legal framework to protect the rights of individuals and advance equality of opportunity for all.

**Protected Characteristics:**
The Act identifies nine protected characteristics, including:
- Sexual Orientation (gay, lesbian, bisexual, heterosexual)
- Gender Reassignment (transgender persons)
- Plus: Age, Disability, Race, Religion, Sex, Marriage/Civil Partnership, Pregnancy

**Types of Discrimination Covered:**
1. **Direct Discrimination**: Treating someone less favorably because of a protected characteristic
2. **Indirect Discrimination**: Policies that disadvantage people with protected characteristics
3. **Harassment**: Unwanted conduct that violates dignity or creates a hostile environment
4. **Victimization**: Treating someone badly because they complained about discrimination

**Areas Covered:**
- Employment (recruitment, terms, dismissal)
- Education (schools, universities)
- Services and public functions
- Premises and housing
- Associations and clubs

**Public Sector Equality Duty:**
Public bodies must have "due regard" to:
- Eliminate discrimination
- Advance equality of opportunity
- Foster good relations between groups`,
    keyPoints: [
      "Sexual orientation and gender reassignment are protected characteristics",
      "Covers employment, education, housing, and services",
      "Prohibits direct and indirect discrimination, harassment, and victimization",
      "Public bodies have duty to promote equality",
      "Employers must make reasonable adjustments",
      "Civil partnerships provide same rights as marriage",
      "Gender Recognition Certificate not required for protection"
    ],
    whatItMeans: "In the UK, you are legally protected from discrimination in nearly all aspects of life because of your sexual orientation or gender identity. Employers cannot reject you, fire you, or treat you unfairly because you are LGBTQ+. Schools and universities must not discriminate. Shops, restaurants, healthcare providers, and government services must serve you equally. If you face discrimination, you can take legal action in employment tribunals or civil courts.",
    resources: [
      { name: "Equality Act 2010 Full Text", url: "https://www.legislation.gov.uk/ukpga/2010/15/contents" },
      { name: "Citizens Advice - Discrimination Guide", url: "https://www.citizensadvice.org.uk/law-and-courts/discrimination/" }
    ]
  }
];

const LawsSection = () => {
  const [selectedLaw, setSelectedLaw] = useState<LawDetail | null>(null);

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
            around the world. Click "Read Full Text" to understand each law in detail.
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
              
              <Button 
                variant="pride" 
                size="sm" 
                className="w-fit"
                onClick={() => setSelectedLaw(law)}
              >
                <BookOpen className="w-4 h-4" />
                Read Full Text & Understand
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Law Modal */}
      <Dialog open={!!selectedLaw} onOpenChange={(open) => !open && setSelectedLaw(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] bg-card border-border p-0">
          <ScrollArea className="max-h-[85vh] p-6">
            {selectedLaw && (
              <>
                <DialogHeader className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-pride-purple/10 text-pride-purple">
                      {selectedLaw.type}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-pride-blue/10 text-pride-blue flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {selectedLaw.jurisdiction}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {selectedLaw.year}
                    </span>
                  </div>
                  <DialogTitle className="font-display text-2xl md:text-3xl gradient-text">
                    {selectedLaw.title}
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground text-sm">
                    Detailed legal information about this law and what it means for LGBTQ+ rights.
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  {/* Full Explanation */}
                  <div className="space-y-3">
                    <h4 className="font-display text-lg font-semibold flex items-center gap-2">
                      <Scale className="w-5 h-5 text-pride-purple" />
                      Full Explanation
                    </h4>
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
                      {selectedLaw.fullExplanation}
                    </div>
                  </div>

                  {/* Key Points */}
                  <div className="p-4 rounded-xl bg-pride-purple/5 border border-pride-purple/20">
                    <h4 className="font-display text-lg font-semibold flex items-center gap-2 mb-3">
                      <BookOpen className="w-5 h-5 text-pride-purple" />
                      Key Points to Remember
                    </h4>
                    <ul className="space-y-2">
                      {selectedLaw.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="w-4 h-4 text-pride-pink mt-0.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What It Means For You */}
                  <div className="p-4 rounded-xl bg-pride-green/5 border border-pride-green/20">
                    <h4 className="font-display text-lg font-semibold flex items-center gap-2 mb-3">
                      <Users className="w-5 h-5 text-pride-green" />
                      What This Means For You
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {selectedLaw.whatItMeans}
                    </p>
                  </div>

                  {/* Resources */}
                  {selectedLaw.resources && selectedLaw.resources.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-display text-lg font-semibold">Official Resources</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedLaw.resources.map((resource, i) => (
                          <a
                            key={i}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-pride-purple/10 border border-border hover:border-pride-purple/30 transition-colors text-sm"
                          >
                            <ExternalLink className="w-4 h-4 text-pride-purple" />
                            {resource.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default LawsSection;
