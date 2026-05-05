/**
 * Comprehensive LGBTQ+ Rights Data
 * Sourced from legal databases, government websites, and advocacy organizations
 */

import { Shield, Home, Heart, Briefcase, Users, Vote, GraduationCap, Hospital } from "lucide-react";
import { RightDetail } from "@/types";

export const rightsData: RightDetail[] = [
  {
    icon: Shield,
    title: "Anti-Discrimination",
    description: "Protection against discrimination in employment, housing, and public accommodations based on sexual orientation and gender identity.",
    colorBg: "bg-pride-red/10",
    colorText: "text-pride-red",
    category: "Employment & Public Services",
    detailedInfo: {
      overview: "Anti-discrimination laws protect LGBTQ+ individuals from unfair treatment in various aspects of life. These protections ensure equal access to opportunities and services regardless of sexual orientation or gender identity. In the United States, the landmark Bostock v. Clayton County (2020) decision extended Title VII protections to LGBTQ+ employees. In India, the Navtej Singh Johar v. Union of India (2018) judgment decriminalized homosexuality and affirmed constitutional rights to equality and dignity.",
      protections: [
        "Protection from workplace discrimination in hiring, promotion, and termination",
        "Equal access to housing without discrimination from landlords or real estate agents",
        "Non-discriminatory treatment in public accommodations (restaurants, hotels, shops)",
        "Protection from harassment and hostile environments",
        "Right to reasonable accommodations for gender identity expression",
        "Protection in educational institutions",
        "Equal access to credit and financial services",
        "Protection from discrimination in jury service"
      ],
      applicableLaws: [
        "Title VII of the Civil Rights Act (US) - Bostock v. Clayton County (2020)",
        "Equality Act 2010 (UK) - Comprehensive protection for sexual orientation and gender reassignment",
        "Article 14 & 15 of Indian Constitution - Right to Equality",
        "Article 21 of Indian Constitution - Right to Life and Personal Liberty",
        "Transgender Persons (Protection of Rights) Act, 2019 (India)",
        "Fair Housing Act (US) - HUD interpretation includes LGBTQ+ protections",
        "Americans with Disabilities Act (US) - Some protections for transgender individuals",
        "State and local anti-discrimination ordinances (varies by location)",
        "Employment Equality Directive (EU)",
        "Yogyakarta Principles - International human rights framework"
      ],
      whatToDo: "If you face discrimination: 1) Document all incidents with dates, times, witnesses, and any written evidence (emails, texts, etc.). 2) Report to HR or management if workplace-related, following your company's complaint procedures. 3) File a complaint with your local Equal Employment Opportunity Commission (EEOC) within 180-300 days for employment discrimination. 4) For housing discrimination, file with HUD within one year. 5) Consult with an employment or civil rights lawyer specializing in LGBTQ+ rights. 6) Reach out to LGBTQ+ advocacy organizations like Lambda Legal, ACLU, or local legal aid for support and guidance. 7) Preserve all evidence and communications. 8) Consider filing a police report if the discrimination involves threats or violence.",
      resources: [
        "Lambda Legal - Employment Rights (lambdalegal.org)",
        "ACLU LGBTQ Rights Project (aclu.org/issues/lgbtq-rights)",
        "National Center for Transgender Equality (transequality.org)",
        "EEOC - LGBTQ+ Rights (eeoc.gov)",
        "HUD Fair Housing (hud.gov/fairhousing)",
        "Lawyers Collective (India) (lawyerscollective.org)",
        "Humsafar Trust (India) (humsafar.org)",
        "Stonewall UK (stonewall.org.uk)"
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
      overview: "Marriage equality grants same-sex couples the same legal rights, benefits, and responsibilities as opposite-sex couples. In the United States, Obergefell v. Hodges (2015) legalized same-sex marriage nationwide. The UK legalized same-sex marriage in 2013 (England and Wales) and 2014 (Scotland). In India, while same-sex marriage is not yet legal, the Supriyo v. Union of India (2023) case affirmed rights to cohabitation and directed the government to address discrimination against queer couples. Over 30 countries worldwide have legalized same-sex marriage.",
      protections: [
        "Legal recognition of same-sex marriages performed in jurisdictions where it's legal",
        "Federal tax benefits and joint filing status (in countries where legal)",
        "Social Security survivor benefits and spousal benefits",
        "Immigration sponsorship for spouses (in countries where legal)",
        "Hospital visitation and medical decision-making rights",
        "Inheritance rights without estate taxes between spouses",
        "Family and medical leave to care for spouse",
        "Health insurance coverage for spouse",
        "Pension and retirement benefits for surviving spouse",
        "Joint adoption rights",
        "Property rights and community property protections",
        "Spousal privilege in legal proceedings"
      ],
      applicableLaws: [
        "Obergefell v. Hodges (2015) - US Supreme Court legalized same-sex marriage nationwide",
        "Marriage Act 2013 (UK) - England and Wales",
        "Marriage and Civil Partnership (Scotland) Act 2014",
        "Civil Partnership Act 2004 (UK) - Civil unions",
        "Same-sex marriage legal in 30+ countries including Canada, Australia, New Zealand, most of Western Europe",
        "Supriyo v. Union of India (2023) - India: Affirmed right to cohabitation, directed government action",
        "Defense of Marriage Act (DOMA) - Struck down by United States v. Windsor (2013)",
        "Respect for Marriage Act (2022) - US federal protection for same-sex marriages"
      ],
      whatToDo: "To get married (where legal): 1) Check your jurisdiction's marriage laws and requirements. 2) Obtain a marriage license from your local government office (county clerk, city hall). 3) Have a ceremony officiated by an authorized person (judge, clergy, civil celebrant). 4) File your marriage certificate with the appropriate government office. 5) Update legal documents including wills, power of attorney, healthcare directives, and beneficiary designations. 6) Notify employers for benefits updates. 7) Update names on identification documents if desired. 8) Consult a family law attorney for estate planning and to understand your rights. 9) If moving between jurisdictions, verify your marriage will be recognized. 10) For international couples, consult immigration attorneys about spousal visas.",
      resources: [
        "Freedom to Marry (freedomtomarry.org)",
        "Human Rights Campaign - Marriage Center (hrc.org/resources/marriage)",
        "Lambda Legal - Marriage Resources (lambdalegal.org)",
        "ILGA World - Marriage Equality Map (ilga.org)",
        "Marriage Equality USA (marriageequality.org)",
        "Family Equality Council (familyequality.org)",
        "Local LGBTQ+ legal services organizations",
        "Immigration Equality (for international couples)"
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
      overview: "Fair housing laws protect LGBTQ+ individuals from discrimination when renting, buying, or financing a home. In the US, HUD interprets the Fair Housing Act to prohibit discrimination based on sexual orientation and gender identity. The UK's Equality Act 2010 explicitly protects against housing discrimination. These protections ensure equal treatment in all housing-related transactions including rentals, sales, mortgages, and housing assistance programs.",
      protections: [
        "Protection from rental discrimination based on sexual orientation or gender identity",
        "Equal access to mortgage lending and financing without discriminatory practices",
        "Protection from discriminatory advertising or screening criteria",
        "Right to live with your partner regardless of marital status",
        "Protection from eviction based on LGBTQ+ status",
        "Equal access to housing assistance programs and public housing",
        "Protection from harassment by landlords or neighbors",
        "Right to have same-sex partners listed on leases",
        "Protection from discriminatory terms and conditions",
        "Equal access to homeowners insurance",
        "Protection in housing cooperatives and condominiums",
        "Right to reasonable accommodations for transgender tenants"
      ],
      applicableLaws: [
        "Fair Housing Act (US) - HUD interpretation includes LGBTQ+ protections since 2021",
        "Equality Act 2010 (UK) - Explicit protection for sexual orientation and gender reassignment",
        "Article 21 (Right to Shelter) - Indian Constitution",
        "State and local fair housing ordinances (many explicitly include LGBTQ+ protections)",
        "Housing and Urban Development Act",
        "Equal Credit Opportunity Act (US) - Protects against lending discrimination",
        "Various municipal non-discrimination policies",
        "Bostock v. Clayton County implications for housing",
        "State human rights laws"
      ],
      whatToDo: "If you face housing discrimination: 1) Document the discriminatory action or statement (save emails, texts, take notes of conversations with dates and times). 2) File a complaint with HUD (US) within one year at hud.gov/fairhousing or call 1-800-669-9777. 3) File with your state or local fair housing agency. 4) Contact a housing rights attorney or legal aid organization. 5) Reach out to local LGBTQ+ housing advocacy groups. 6) Consider filing a lawsuit in federal or state court if administrative remedies are insufficient. 7) Report to local human rights commission. 8) Gather evidence including rental applications, correspondence, witness statements. 9) Do not sign any agreements waiving your rights. 10) Seek emergency housing assistance if needed through local LGBTQ+ organizations.",
      resources: [
        "HUD Office of Fair Housing and Equal Opportunity (hud.gov/fairhousing)",
        "National Fair Housing Alliance (nationalfairhousing.org)",
        "Local fair housing centers (find at fairhousing.com)",
        "LGBTQ+ housing advocacy organizations",
        "Lambda Legal - Housing Rights",
        "National Center for Lesbian Rights - Housing",
        "Legal aid societies in your area",
        "Local LGBTQ+ community centers"
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
      overview: "Employment protections ensure LGBTQ+ individuals can work in environments free from discrimination and harassment. The landmark Bostock v. Clayton County (2020) Supreme Court decision ruled that Title VII of the Civil Rights Act protects employees from discrimination based on sexual orientation and gender identity. This applies to all employers with 15 or more employees across all 50 US states. The UK's Equality Act 2010 provides comprehensive workplace protections. India's Transgender Persons Act 2019 prohibits employment discrimination against transgender individuals.",
      protections: [
        "Protection from discriminatory hiring practices and job advertisements",
        "Equal pay and benefits for LGBTQ+ employees",
        "Protection from harassment and hostile work environments",
        "Right to use facilities (restrooms, locker rooms) consistent with gender identity",
        "Protection from wrongful termination based on sexual orientation or gender identity",
        "Access to partner benefits including health insurance and family leave",
        "Protection from discriminatory dress codes",
        "Right to be addressed by correct name and pronouns",
        "Protection during performance reviews and promotions",
        "Equal access to training and professional development",
        "Protection from retaliation for reporting discrimination",
        "Reasonable accommodations for gender transition"
      ],
      applicableLaws: [
        "Title VII of the Civil Rights Act - Bostock v. Clayton County (2020) - US",
        "Equality Act 2010 (UK) - Comprehensive workplace protections",
        "State employment non-discrimination laws (21 US states + DC have explicit protections)",
        "Transgender Persons (Protection of Rights) Act 2019 (India)",
        "Executive Order 11246 - Federal contractors (US)",
        "Americans with Disabilities Act - Some protections for gender dysphoria",
        "Family and Medical Leave Act - Covers care for same-sex spouses",
        "Occupational Safety and Health Act - Safe workplace requirements",
        "Company diversity and inclusion policies",
        "Union contracts and collective bargaining agreements"
      ],
      whatToDo: "If you experience workplace discrimination: 1) Review your company's anti-discrimination policy and employee handbook. 2) Report to HR or your supervisor following company procedures. 3) Document all incidents thoroughly including dates, times, witnesses, and what was said/done. 4) Save all relevant emails, texts, and documents. 5) File a charge with EEOC within 180-300 days (deadline varies by state) at eeoc.gov or call 1-800-669-4000. 6) File with your state employment agency if applicable. 7) Consult an employment attorney specializing in LGBTQ+ rights. 8) Contact LGBTQ+ workplace advocacy groups like Out & Equal. 9) Consider filing a lawsuit if EEOC issues a right-to-sue letter. 10) Seek support from employee resource groups or unions. 11) Do not resign without legal advice as it may affect your claims.",
      resources: [
        "EEOC - LGBTQ+ Rights (eeoc.gov/laws/guidance/protections-lgbtq)",
        "Out & Equal Workplace Advocates (outandequal.org)",
        "Transgender Law Center - Employment (transgenderlawcenter.org)",
        "Lambda Legal - Employment Rights",
        "National Center for Transgender Equality - Employment",
        "Local employment law clinics",
        "State labor departments",
        "Workplace Fairness (workplacefairness.org)"
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
      overview: "Family rights ensure LGBTQ+ individuals and couples can form families through adoption, foster care, surrogacy, and assisted reproduction with full legal recognition and protection. Following Obergefell v. Hodges (2015), same-sex couples have equal adoption rights in the US. However, some states still have religious exemption laws. The UK allows same-sex couples to adopt jointly. India's Supriyo v. Union of India (2023) clarified that queer couples can adopt under existing laws.",
      protections: [
        "Right to adopt children as individuals or couples (where same-sex marriage is legal)",
        "Equal consideration in foster care placements",
        "Legal recognition of both parents in same-sex couples",
        "Access to assisted reproductive technologies (IVF, IUI, surrogacy where legal)",
        "Protection of parental rights in custody disputes",
        "Right to make medical and educational decisions for children",
        "Second-parent adoption rights",
        "Protection from discrimination by adoption agencies",
        "Equal access to parental leave and benefits",
        "Recognition of non-biological parent's rights",
        "Protection in surrogacy arrangements",
        "Rights in co-parenting agreements"
      ],
      applicableLaws: [
        "Obergefell v. Hodges (2015) - Implications for parental rights (US)",
        "Adoption and Safe Families Act (US)",
        "Children Act 1989 (UK)",
        "Adoption and Children Act 2002 (UK)",
        "Surrogacy laws (vary significantly by jurisdiction)",
        "Uniform Parentage Act (some US states)",
        "State adoption laws (vary by state)",
        "Supriyo v. Union of India (2023) - India: Queer couples can adopt",
        "Juvenile Justice Act (India) - Adoption provisions",
        "Family law codes (jurisdiction-specific)"
      ],
      whatToDo: "To establish parental rights: 1) Research adoption/foster care requirements in your jurisdiction. 2) Complete home study and background checks through licensed agencies. 3) Work with LGBTQ+-friendly adoption agencies (find through Family Equality Council). 4) Consider second-parent adoption for non-biological parents to establish legal rights. 5) Establish legal documents including wills, guardianship designations, and powers of attorney. 6) Consult a family law attorney specializing in LGBTQ+ families before starting the process. 7) For surrogacy, work with experienced reproductive lawyers. 8) Ensure both parents are listed on birth certificates where possible. 9) Update all legal documents after adoption/birth. 10) Consider interstate/international recognition issues if you travel or move.",
      resources: [
        "Family Equality Council (familyequality.org)",
        "Human Rights Campaign - Parenting (hrc.org/resources/parenting)",
        "LGBTQ+ adoption agencies directory",
        "National Center for Lesbian Rights - Family Law (nclrights.org)",
        "Modern Family Law (modernfamilylaw.com)",
        "Resolve: The National Infertility Association",
        "Men Having Babies (surrogacy resources)",
        "Local family law attorneys specializing in LGBTQ+ families"
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
      overview: "Healthcare rights ensure LGBTQ+ individuals receive competent, non-discriminatory medical care, including specialized services like gender-affirming care and LGBTQ+-competent mental health support. Section 1557 of the Affordable Care Act prohibits discrimination in healthcare. The NALSA v. Union of India (2014) judgment directed the Indian government to provide healthcare facilities for transgender persons. However, access varies significantly by location and insurance coverage.",
      protections: [
        "Non-discriminatory access to healthcare services",
        "Right to gender-affirming medical care (hormones, surgery) where legal",
        "Access to PrEP and HIV treatment without stigma or discrimination",
        "Mental health services from LGBTQ+-competent providers",
        "Insurance coverage for transition-related care (varies by plan and location)",
        "Respectful treatment using correct names and pronouns",
        "Privacy and confidentiality of medical information",
        "Equal access to emergency medical care",
        "Protection from conversion therapy (banned in many jurisdictions)",
        "Access to fertility preservation before transition",
        "Inclusive sexual health education and services",
        "Protection from medical gatekeeping"
      ],
      applicableLaws: [
        "Section 1557 of the Affordable Care Act (US) - Healthcare non-discrimination",
        "Equality Act 2010 (UK) - Healthcare provisions",
        "NALSA v. Union of India (2014) - Healthcare directives for transgender persons",
        "Transgender Persons Act 2019 (India) - Healthcare provisions",
        "State healthcare non-discrimination laws",
        "HIPAA Privacy Rule - Medical information protection",
        "Emergency Medical Treatment and Labor Act (EMTALA)",
        "Mental Health Parity Act",
        "State laws banning conversion therapy (20+ US states)",
        "World Professional Association for Transgender Health (WPATH) Standards of Care"
      ],
      whatToDo: "To access healthcare: 1) Find LGBTQ+-friendly healthcare providers through community resources like GLMA provider directory. 2) Understand your insurance coverage for LGBTQ+-specific care by reviewing your policy. 3) If denied care, file complaints with hospital administration and state health departments. 4) Document discriminatory treatment including provider names, dates, and what occurred. 5) Seek legal assistance if rights are violated through Lambda Legal or NCLR. 6) Connect with LGBTQ+ health advocacy organizations for support. 7) For gender-affirming care, work with providers experienced in transgender health. 8) Get referrals from LGBTQ+ community centers. 9) Consider telehealth options for specialized care. 10) Appeal insurance denials with help from patient advocates.",
      resources: [
        "GLMA: Health Professionals Advancing LGBTQ Equality (glma.org)",
        "World Professional Association for Transgender Health - WPATH (wpath.org)",
        "National LGBT Health Education Center (lgbtqiahealtheducation.org)",
        "Local LGBTQ+ health clinics",
        "Fenway Health (fenwayhealth.org)",
        "Callen-Lorde Community Health Center",
        "Planned Parenthood - LGBTQ+ services",
        "Trans Lifeline (translifeline.org)"
      ]
    }
  },
  {
    icon: GraduationCap,
    title: "Education Rights",
    description: "Protection from discrimination in schools, colleges, and universities, including access to facilities and activities.",
    colorBg: "bg-pride-pink/10",
    colorText: "text-pride-pink",
    category: "Education",
    detailedInfo: {
      overview: "Education rights protect LGBTQ+ students from discrimination and harassment in educational settings. Title IX of the Education Amendments Act prohibits sex discrimination in federally funded education programs, which courts have interpreted to include sexual orientation and gender identity. Students have the right to a safe learning environment, access to facilities matching their gender identity, and protection from bullying.",
      protections: [
        "Protection from discrimination in admissions and enrollment",
        "Right to use facilities (restrooms, locker rooms) matching gender identity",
        "Protection from bullying and harassment by students and staff",
        "Right to form and participate in Gay-Straight Alliances (GSAs)",
        "Protection from discriminatory dress codes",
        "Right to be addressed by chosen name and pronouns",
        "Equal access to sports and extracurricular activities",
        "Protection from exclusion from school events (prom, etc.)",
        "Privacy of gender identity and sexual orientation",
        "Access to LGBTQ+-inclusive curriculum and resources",
        "Protection from conversion therapy referrals",
        "Equal disciplinary treatment"
      ],
      applicableLaws: [
        "Title IX of the Education Amendments Act (US)",
        "Equal Protection Clause of the 14th Amendment (US)",
        "Equality Act 2010 (UK) - Education provisions",
        "State education non-discrimination laws",
        "Safe Schools laws (various states)",
        "Anti-bullying legislation",
        "First Amendment rights (US) - Freedom of expression and association",
        "Family Educational Rights and Privacy Act (FERPA)",
        "Article 21A of Indian Constitution - Right to Education"
      ],
      whatToDo: "If you face discrimination in school: 1) Report to school administration following school policies. 2) Document all incidents with dates, times, and witnesses. 3) File a complaint with your school district's Title IX coordinator. 4) File with the Office for Civil Rights (US) at ed.gov/ocr. 5) Contact LGBTQ+ student organizations like GLSEN. 6) Seek support from school counselors or GSA advisors. 7) Consult education law attorneys. 8) Report bullying to school officials and document their response. 9) Request accommodations in writing. 10) Connect with local LGBTQ+ youth organizations for support.",
      resources: [
        "GLSEN - Gay, Lesbian & Straight Education Network (glsen.org)",
        "ACLU - Know Your Rights: Students (aclu.org)",
        "Lambda Legal - Youth & Schools",
        "The Trevor Project (thetrevorproject.org)",
        "Gender Spectrum (genderspectrum.org)",
        "National Center for Transgender Equality - Schools",
        "Local LGBTQ+ youth centers",
        "School-based GSAs and support groups"
      ]
    }
  },
  {
    icon: Hospital,
    title: "Medical Decision-Making",
    description: "Rights regarding healthcare decisions, advance directives, and end-of-life care for LGBTQ+ individuals and couples.",
    colorBg: "bg-pride-green/10",
    colorText: "text-pride-green",
    category: "Healthcare & Legal",
    detailedInfo: {
      overview: "Medical decision-making rights ensure LGBTQ+ individuals and their partners can make healthcare decisions for each other and have their wishes respected. This includes hospital visitation, medical power of attorney, and advance directives. While marriage equality has improved these rights for married couples, unmarried partners and chosen family still face challenges.",
      protections: [
        "Hospital visitation rights for same-sex partners and chosen family",
        "Right to designate anyone as healthcare proxy",
        "Medical power of attorney recognition",
        "Advance directive and living will rights",
        "Right to make end-of-life decisions for partner",
        "Access to partner's medical information (with consent)",
        "Protection from family override of partner's wishes",
        "Right to be present during medical procedures",
        "Emergency contact designation rights",
        "Organ donation decision-making",
        "Funeral and burial arrangement rights",
        "Protection of chosen family relationships"
      ],
      applicableLaws: [
        "Patient Self-Determination Act (US)",
        "Hospital Visitation Rights regulations (US)",
        "State healthcare proxy and power of attorney laws",
        "Advance Directive laws (all US states)",
        "Mental Capacity Act 2005 (UK)",
        "Obergefell v. Hodges implications for married couples",
        "HIPAA - Medical information sharing with designated persons",
        "State probate and estate laws",
        "Uniform Health-Care Decisions Act (some states)"
      ],
      whatToDo: "To protect your rights: 1) Complete advance directives including living will and healthcare proxy. 2) Designate your partner or chosen family as healthcare decision-maker in writing. 3) Carry copies of legal documents when traveling or hospitalized. 4) Register documents with your healthcare providers. 5) Consult an estate planning attorney to ensure documents are valid in your state. 6) Update documents after major life changes. 7) Discuss wishes with family and partners. 8) Consider HIPAA authorization forms for information sharing. 9) Keep originals in safe place and give copies to designated persons. 10) Review and update documents every few years.",
      resources: [
        "National Healthcare Decisions Day (nhdd.org)",
        "Caring Connections - Advance Directives (caringinfo.org)",
        "SAGE - Services & Advocacy for GLBT Elders (sageusa.org)",
        "National Center for Lesbian Rights - Healthcare",
        "Local estate planning attorneys",
        "LGBTQ+ elder services organizations",
        "Hospital patient advocates",
        "State bar association referrals"
      ]
    }
  }
];
