import { Shield, Home, Heart, Briefcase, Users, Vote, ArrowRight, ChevronRight } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface RightDetail {
  icon: any;
  title: string;
  description: string;
  colorBg: string;
  colorText: string;
  category: string;
  detailedInfo: {
    overview: string;
    protections: string[];
    applicableLaws: string[];
    whatToDo: string;
    resources: string[];
  };
}

const rights: RightDetail[] = [
  {
    icon: Shield,
    title: "Anti-Discrimination",
    description: "Protection against discrimination in employment, housing, and public accommodations based on sexual orientation and gender identity.",
    colorBg: "bg-pride-red/10",
    colorText: "text-pride-red",
    category: "Employment & Public Services",
    detailedInfo: {
      overview: "Anti-discrimination laws protect LGBTQ+ individuals from unfair treatment in various aspects of life. These protections ensure equal access to opportunities and services regardless of sexual orientation or gender identity.",
      protections: [
        "Protection from workplace discrimination in hiring, promotion, and termination",
        "Equal access to housing without discrimination from landlords or real estate agents",
        "Non-discriminatory treatment in public accommodations (restaurants, hotels, shops)",
        "Protection from harassment and hostile environments",
        "Right to reasonable accommodations for gender identity expression"
      ],
      applicableLaws: [
        "Title VII of the Civil Rights Act (US) - Bostock v. Clayton County",
        "Equality Act 2010 (UK)",
        "Article 14 & 15 of Indian Constitution",
        "Transgender Persons (Protection of Rights) Act, 2019 (India)",
        "Various state and local anti-discrimination ordinances"
      ],
      whatToDo: "If you face discrimination: 1) Document all incidents with dates, times, and witnesses. 2) Report to HR or management if workplace-related. 3) File a complaint with your local Equal Employment Opportunity Commission or human rights commission. 4) Consult with an employment lawyer specializing in LGBTQ+ rights. 5) Reach out to LGBTQ+ advocacy organizations for support.",
      resources: [
        "Lambda Legal - Employment Rights",
        "ACLU LGBTQ Rights Project",
        "National Center for Transgender Equality",
        "Local LGBTQ+ community centers"
      ]
    }
  },
  {
    icon: Heart,
    title: "Marriage Equality",
    description: "The right to marry and have your marriage legally recognized, with all associated benefits and protections.",
    colorBg: "bg-pride-orange/10",
    colorText: "text-pride-orange",
    category: "Family & Relationships",
    detailedInfo: {
      overview: "Marriage equality grants same-sex couples the same legal rights, benefits, and responsibilities as opposite-sex couples. This includes federal and state benefits, tax advantages, and legal protections.",
      protections: [
        "Legal recognition of same-sex marriages",
        "Federal tax benefits and joint filing status",
        "Social Security survivor benefits",
        "Immigration sponsorship for spouses",
        "Hospital visitation and medical decision-making rights",
        "Inheritance rights without estate taxes between spouses"
      ],
      applicableLaws: [
        "Obergefell v. Hodges (2015) - US Supreme Court",
        "Marriage Act 2013 (UK)",
        "Civil Partnership Act 2004 (UK)",
        "Same-sex marriage laws in 30+ countries",
        "Note: Not yet legal in India (pending Supriyo v. Union of India)"
      ],
      whatToDo: "To get married: 1) Check your jurisdiction's marriage laws and requirements. 2) Obtain a marriage license from your local government office. 3) Have a ceremony officiated by an authorized person. 4) File your marriage certificate. 5) Update legal documents (wills, insurance, beneficiaries). 6) Consult a family law attorney for estate planning.",
      resources: [
        "Freedom to Marry",
        "Human Rights Campaign - Marriage Center",
        "Local LGBTQ+ legal services",
        "Family law attorneys specializing in LGBTQ+ issues"
      ]
    }
  },
  {
    icon: Home,
    title: "Housing Rights",
    description: "Equal access to housing without discrimination from landlords, real estate agents, or mortgage lenders.",
    colorBg: "bg-pride-yellow/10",
    colorText: "text-pride-yellow",
    category: "Housing",
    detailedInfo: {
      overview: "Fair housing laws protect LGBTQ+ individuals from discrimination when renting, buying, or financing a home. These protections ensure equal treatment in all housing-related transactions.",
      protections: [
        "Protection from rental discrimination based on sexual orientation or gender identity",
        "Equal access to mortgage lending and financing",
        "Protection from discriminatory advertising or screening",
        "Right to live with your partner regardless of marital status",
        "Protection from eviction based on LGBTQ+ status",
        "Equal access to housing assistance programs"
      ],
      applicableLaws: [
        "Fair Housing Act (US) - HUD interpretation includes LGBTQ+ protections",
        "Equality Act 2010 (UK)",
        "State and local fair housing ordinances",
        "Article 21 (Right to Shelter) - Indian Constitution",
        "Various municipal non-discrimination policies"
      ],
      whatToDo: "If you face housing discrimination: 1) Document the discriminatory action or statement. 2) File a complaint with HUD (US) or local fair housing agency within one year. 3) Contact a housing rights attorney. 4) Reach out to local LGBTQ+ housing advocacy groups. 5) Consider filing a lawsuit if administrative remedies are insufficient.",
      resources: [
        "HUD Office of Fair Housing and Equal Opportunity",
        "National Fair Housing Alliance",
        "Local fair housing centers",
        "LGBTQ+ housing advocacy organizations"
      ]
    }
  },
  {
    icon: Briefcase,
    title: "Employment Protection",
    description: "Protection from workplace discrimination, harassment, and unfair termination based on identity.",
    colorBg: "bg-pride-green/10",
    colorText: "text-pride-green",
    category: "Employment",
    detailedInfo: {
      overview: "Employment protections ensure LGBTQ+ individuals can work in environments free from discrimination and harassment. These rights cover all aspects of employment from hiring to termination.",
      protections: [
        "Protection from discriminatory hiring practices",
        "Equal pay and benefits for LGBTQ+ employees",
        "Protection from harassment and hostile work environments",
        "Right to use facilities consistent with gender identity",
        "Protection from wrongful termination",
        "Access to partner benefits and family leave"
      ],
      applicableLaws: [
        "Title VII of the Civil Rights Act - Bostock v. Clayton County (2020)",
        "Equality Act 2010 (UK)",
        "State employment non-discrimination laws",
        "Transgender Persons Act 2019 (India)",
        "Company diversity and inclusion policies"
      ],
      whatToDo: "If you experience workplace discrimination: 1) Review your company's anti-discrimination policy. 2) Report to HR or your supervisor. 3) Document all incidents thoroughly. 4) File a charge with EEOC within 180-300 days. 5) Consult an employment attorney. 6) Contact LGBTQ+ workplace advocacy groups.",
      resources: [
        "EEOC - LGBTQ+ Rights",
        "Out & Equal Workplace Advocates",
        "Transgender Law Center - Employment",
        "Local employment law clinics"
      ]
    }
  },
  {
    icon: Users,
    title: "Family Rights",
    description: "Rights related to adoption, foster care, parental recognition, and family formation.",
    colorBg: "bg-pride-blue/10",
    colorText: "text-pride-blue",
    category: "Family & Parenting",
    detailedInfo: {
      overview: "Family rights ensure LGBTQ+ individuals and couples can form families through adoption, foster care, surrogacy, and assisted reproduction with full legal recognition and protection.",
      protections: [
        "Right to adopt children as individuals or couples",
        "Equal consideration in foster care placements",
        "Legal recognition of both parents in same-sex couples",
        "Access to assisted reproductive technologies",
        "Protection of parental rights in custody disputes",
        "Right to make medical and educational decisions for children"
      ],
      applicableLaws: [
        "Adoption and Safe Families Act (US)",
        "Obergefell v. Hodges implications for parental rights",
        "Children Act 1989 (UK)",
        "Adoption laws vary by state/country",
        "Surrogacy laws (jurisdiction-specific)"
      ],
      whatToDo: "To establish parental rights: 1) Research adoption/foster care requirements in your jurisdiction. 2) Complete home study and background checks. 3) Work with LGBTQ+-friendly adoption agencies. 4) Consider second-parent adoption for non-biological parents. 5) Establish legal documents (wills, guardianship). 6) Consult a family law attorney specializing in LGBTQ+ families.",
      resources: [
        "Family Equality Council",
        "Human Rights Campaign - Parenting",
        "LGBTQ+ adoption agencies",
        "National Center for Lesbian Rights - Family Law"
      ]
    }
  },
  {
    icon: Vote,
    title: "Healthcare Access",
    description: "Right to healthcare without discrimination, including gender-affirming care and mental health services.",
    colorBg: "bg-pride-purple/10",
    colorText: "text-pride-purple",
    category: "Healthcare",
    detailedInfo: {
      overview: "Healthcare rights ensure LGBTQ+ individuals receive competent, non-discriminatory medical care, including specialized services like gender-affirming care and LGBTQ+-competent mental health support.",
      protections: [
        "Non-discriminatory access to healthcare services",
        "Right to gender-affirming medical care (hormones, surgery)",
        "Access to PrEP and HIV treatment without stigma",
        "Mental health services from LGBTQ+-competent providers",
        "Insurance coverage for transition-related care",
        "Respectful treatment using correct names and pronouns"
      ],
      applicableLaws: [
        "Section 1557 of the Affordable Care Act (US)",
        "Equality Act 2010 (UK) - Healthcare provisions",
        "NALSA v. Union of India - Healthcare directives",
        "Transgender Persons Act 2019 (India) - Healthcare provisions",
        "State healthcare non-discrimination laws"
      ],
      whatToDo: "To access healthcare: 1) Find LGBTQ+-friendly healthcare providers through community resources. 2) Understand your insurance coverage for LGBTQ+-specific care. 3) If denied care, file complaints with hospital administration and state health departments. 4) Document discriminatory treatment. 5) Seek legal assistance if rights are violated. 6) Connect with LGBTQ+ health advocacy organizations.",
      resources: [
        "GLMA: Health Professionals Advancing LGBTQ Equality",
        "World Professional Association for Transgender Health (WPATH)",
        "National LGBT Health Education Center",
        "Local LGBTQ+ health clinics"
      ]
    }
  }
];

const RightsSection = () => {
  const [selectedRight, setSelectedRight] = useState<RightDetail | null>(null);

  return (
    <section id="rights" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pride-purple/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Explore Your Rights</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Understanding your legal protections is the first step toward empowerment.
            Click on any right to learn more about protections, applicable laws, and what to do if your rights are violated.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rights.map((right, index) => (
            <div
              key={index}
              onClick={() => setSelectedRight(right)}
              className="gradient-border card-hover p-6 group flex flex-col cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${right.colorBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <right.icon className={`w-6 h-6 ${right.colorText}`} />
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                  {right.category}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                {right.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                {right.description}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-pride-purple group-hover:text-pride-pink transition-colors">
                <span>Learn More</span>
                <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Rights Modal */}
      <Dialog open={!!selectedRight} onOpenChange={(open) => !open && setSelectedRight(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] bg-card border-border p-0">
          <ScrollArea className="max-h-[85vh] p-6">
            {selectedRight && (
              <>
                <DialogHeader className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-xl ${selectedRight.colorBg} flex items-center justify-center`}>
                      <selectedRight.icon className={`w-8 h-8 ${selectedRight.colorText}`} />
                    </div>
                    <div>
                      <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                        {selectedRight.category}
                      </span>
                      <DialogTitle className="font-display text-3xl gradient-text mt-2">
                        {selectedRight.title}
                      </DialogTitle>
                    </div>
                  </div>
                  <DialogDescription className="text-muted-foreground text-base">
                    {selectedRight.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Overview */}
                  <div className="p-4 rounded-xl bg-muted/50 border border-border">
                    <h4 className="font-display text-lg font-semibold mb-2 text-foreground">Overview</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {selectedRight.detailedInfo.overview}
                    </p>
                  </div>

                  {/* Protections */}
                  <div>
                    <h4 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-pride-purple" />
                      Your Protections
                    </h4>
                    <ul className="space-y-2">
                      {selectedRight.detailedInfo.protections.map((protection, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-pride-green mt-0.5 flex-shrink-0" />
                          {protection}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applicable Laws */}
                  <div className="p-4 rounded-xl bg-pride-purple/5 border border-pride-purple/20">
                    <h4 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
                      <Vote className="w-5 h-5 text-pride-purple" />
                      Applicable Laws & Precedents
                    </h4>
                    <ul className="space-y-2">
                      {selectedRight.detailedInfo.applicableLaws.map((law, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="w-4 h-4 text-pride-purple mt-0.5 flex-shrink-0" />
                          {law}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What To Do */}
                  <div className="p-4 rounded-xl bg-pride-orange/5 border border-pride-orange/20">
                    <h4 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-pride-orange" />
                      What To Do If Your Rights Are Violated
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {selectedRight.detailedInfo.whatToDo}
                    </p>
                  </div>

                  {/* Resources */}
                  <div>
                    <h4 className="font-display text-lg font-semibold mb-3">Helpful Resources</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {selectedRight.detailedInfo.resources.map((resource, i) => (
                        <div key={i} className="p-3 rounded-lg bg-muted/50 border border-border text-sm text-muted-foreground">
                          {resource}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default RightsSection;
