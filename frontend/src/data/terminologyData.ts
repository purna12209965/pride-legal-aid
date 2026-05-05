/**
 * Legal Terminology Data
 * Comprehensive LGBTQ+ legal terms and definitions
 */

import { BookOpen } from "lucide-react";

export interface TerminologyItem {
  term: string;
  full?: string;
  definition: string;
  example: string;
  legalContext: string;
  relatedTerms: string[];
}

export const terminologyData: TerminologyItem[] = [
  {
    term: "Sexual Orientation",
    definition: "A person's enduring physical, romantic, and/or emotional attraction to another person. Common sexual orientations include heterosexual, homosexual (gay/lesbian), bisexual, pansexual, and asexual.",
    example: "Employment discrimination based on sexual orientation is prohibited under Title VII of the Civil Rights Act following the Bostock v. Clayton County decision.",
    legalContext: "Sexual orientation is a protected characteristic under various anti-discrimination laws. In the US, the Bostock decision (2020) established that Title VII protects against discrimination based on sexual orientation. Many states and localities have explicit protections in their civil rights laws. Internationally, the Yogyakarta Principles recognize sexual orientation as a protected ground.",
    relatedTerms: ["Gender Identity", "LGBTQ+", "Protected Class", "Title VII"]
  },
  {
    term: "Gender Identity",
    definition: "A person's internal, deeply felt sense of being male, female, both, neither, or anywhere along the gender spectrum. Gender identity may or may not correspond to the sex assigned at birth.",
    example: "The Transgender Persons (Protection of Rights) Act, 2019 in India recognizes the right of individuals to self-identify their gender identity.",
    legalContext: "Gender identity is increasingly recognized as a protected characteristic in anti-discrimination laws. The Bostock decision extended Title VII protections to transgender individuals. The NALSA judgment in India (2014) affirmed the right to self-identify gender. Many jurisdictions allow individuals to change gender markers on official documents without requiring medical procedures.",
    relatedTerms: ["Transgender", "Gender Expression", "Sex Assigned at Birth", "Gender Dysphoria"]
  },
  {
    term: "Transgender",
    definition: "An umbrella term for people whose gender identity differs from the sex they were assigned at birth. This includes trans men, trans women, non-binary individuals, and others who do not identify with their assigned sex.",
    example: "In NALSA v. Union of India (2014), the Supreme Court recognized transgender persons as a third gender and directed the government to provide them with reservations in education and employment.",
    legalContext: "Transgender individuals have gained significant legal recognition and protections in recent years. The NALSA judgment in India provided comprehensive rights. The Bostock decision in the US extended employment protections. Many jurisdictions have laws specifically protecting transgender individuals from discrimination in employment, housing, healthcare, and public accommodations. Legal recognition of gender identity varies by jurisdiction.",
    relatedTerms: ["Gender Identity", "Gender Dysphoria", "Gender-Affirming Care", "Legal Gender Recognition"]
  },
  {
    term: "Gender Expression",
    definition: "The external manifestation of one's gender identity, typically through clothing, hairstyle, voice, body characteristics, and behavior. Gender expression may or may not conform to socially defined behaviors and characteristics associated with being male or female.",
    example: "In Price Waterhouse v. Hopkins (1989), the Supreme Court held that discrimination based on gender stereotypes (a form of gender expression) violates Title VII.",
    legalContext: "Gender expression is protected under sex discrimination laws in many jurisdictions. The Price Waterhouse decision established that discrimination based on failure to conform to gender stereotypes is sex discrimination. This principle has been extended to protect LGBTQ+ individuals. Some jurisdictions explicitly include gender expression in their anti-discrimination laws.",
    relatedTerms: ["Gender Identity", "Gender Stereotypes", "Sex Discrimination", "Title VII"]
  },
  {
    term: "Marriage Equality",
    definition: "The legal recognition of marriage between two people regardless of their sex or gender. Also known as same-sex marriage or equal marriage.",
    example: "Obergefell v. Hodges (2015) established marriage equality nationwide in the United States, requiring all states to license and recognize same-sex marriages.",
    legalContext: "Marriage equality has been achieved in over 30 countries worldwide. In the US, Obergefell v. Hodges (2015) legalized same-sex marriage nationwide. The UK legalized same-sex marriage in 2013-2014. However, many countries still do not recognize same-sex marriages. In India, the Supriyo case (2023) did not grant marriage equality but affirmed rights to cohabitation and directed the government to address discrimination.",
    relatedTerms: ["Civil Union", "Domestic Partnership", "Obergefell v. Hodges", "Fundamental Right"]
  },
  {
    term: "Civil Union / Domestic Partnership",
    definition: "A legally recognized relationship that provides some or all of the rights and responsibilities of marriage. Civil unions and domestic partnerships were often created as alternatives to marriage before marriage equality was achieved.",
    example: "The UK's Civil Partnership Act 2004 created civil partnerships for same-sex couples, providing many of the same rights as marriage before same-sex marriage was legalized in 2013.",
    legalContext: "Civil unions and domestic partnerships vary significantly by jurisdiction in terms of rights and recognition. Some provide nearly identical rights to marriage, while others offer limited protections. Following marriage equality in many jurisdictions, civil unions have become less common, though some remain available. They may still be relevant for couples who prefer not to marry or in jurisdictions without marriage equality.",
    relatedTerms: ["Marriage Equality", "Spousal Rights", "Legal Recognition", "Partnership Rights"]
  },
  {
    term: "Protected Class / Protected Characteristic",
    definition: "A group of people with a common characteristic who are legally protected from discrimination. In the context of LGBTQ+ rights, this typically refers to sexual orientation and gender identity.",
    example: "Following Bostock v. Clayton County, sexual orientation and gender identity are protected classes under Title VII's prohibition on sex discrimination in employment.",
    legalContext: "Protected class status provides legal recourse against discrimination. Federal laws in the US protect against discrimination based on race, color, religion, sex, national origin, age, and disability. The Bostock decision extended sex discrimination protections to include sexual orientation and gender identity. Many states and localities have explicit protections for LGBTQ+ individuals. The scope of protections varies by jurisdiction and context (employment, housing, public accommodations, etc.).",
    relatedTerms: ["Anti-Discrimination Law", "Title VII", "Equal Protection", "Civil Rights"]
  },
  {
    term: "Title VII",
    definition: "Title VII of the Civil Rights Act of 1964 is a federal law that prohibits employment discrimination based on race, color, religion, sex, and national origin. Following Bostock v. Clayton County (2020), it also protects against discrimination based on sexual orientation and gender identity.",
    example: "An employer who fires an employee for being gay or transgender violates Title VII of the Civil Rights Act, as established in Bostock v. Clayton County.",
    legalContext: "Title VII applies to employers with 15 or more employees and covers all aspects of employment including hiring, firing, promotions, harassment, training, wages, and benefits. The EEOC enforces Title VII. Employees must file charges with the EEOC within 180-300 days of the discriminatory act. Title VII has been interpreted to prohibit various forms of discrimination including hostile work environment and retaliation.",
    relatedTerms: ["Bostock v. Clayton County", "EEOC", "Employment Discrimination", "Sex Discrimination"]
  },
  {
    term: "Section 377 IPC",
    definition: "Section 377 of the Indian Penal Code was a colonial-era law that criminalized 'carnal intercourse against the order of nature.' It was used to prosecute LGBTQ+ individuals until it was struck down by the Supreme Court in Navtej Singh Johar v. Union of India (2018).",
    example: "The Supreme Court in Navtej Singh Johar v. Union of India held that Section 377, insofar as it criminalized consensual same-sex conduct, was unconstitutional and violated fundamental rights.",
    legalContext: "Section 377 was enacted in 1861 during British colonial rule. It criminalized same-sex intimacy and was used to harass and prosecute LGBTQ+ individuals. The Delhi High Court decriminalized it in 2009 (Naz Foundation), but the Supreme Court reversed this in 2013 (Suresh Kumar Koushal). Finally, in 2018, a five-judge bench in Navtej Singh Johar unanimously struck down Section 377 insofar as it applied to consensual adult conduct, marking a historic victory for LGBTQ+ rights in India.",
    relatedTerms: ["Navtej Singh Johar", "Decriminalization", "Sodomy Laws", "Colonial Laws"]
  },
  {
    term: "Gender-Affirming Care",
    definition: "Medical care that supports an individual's gender identity, including hormone therapy, surgeries, mental health support, and other treatments. Also called gender-confirming care or transition-related care.",
    example: "Many insurance plans now cover gender-affirming care following guidance from medical organizations and legal interpretations of anti-discrimination laws.",
    legalContext: "Access to gender-affirming care is recognized as medically necessary by major medical organizations including the American Medical Association and World Professional Association for Transgender Health (WPATH). Legal protections vary by jurisdiction. Section 1557 of the Affordable Care Act prohibits discrimination in healthcare. Some states have laws protecting access to gender-affirming care, while others have attempted to restrict it. The NALSA judgment directed the Indian government to provide healthcare facilities for transgender persons.",
    relatedTerms: ["Transgender", "Healthcare Rights", "WPATH Standards", "Medical Necessity"]
  },
  {
    term: "Conversion Therapy",
    definition: "Discredited practices that attempt to change an individual's sexual orientation or gender identity. Also called reparative therapy or sexual orientation change efforts (SOCE). These practices are condemned by major medical and mental health organizations.",
    example: "Over 20 U.S. states and several countries have banned conversion therapy for minors, recognizing it as harmful and ineffective.",
    legalContext: "Conversion therapy is widely condemned as harmful, unethical, and ineffective by organizations including the American Psychological Association, American Medical Association, and American Academy of Pediatrics. Many jurisdictions have banned the practice for minors. Legal challenges to these bans have generally been unsuccessful, with courts upholding them as protecting public health. Some jurisdictions also restrict public funding for such practices.",
    relatedTerms: ["Mental Health", "LGBTQ+ Youth", "Medical Ethics", "Harmful Practices"]
  },
  {
    term: "Hate Crime",
    definition: "A criminal offense motivated by bias against a person's actual or perceived race, religion, disability, sexual orientation, ethnicity, gender, or gender identity. Hate crimes often carry enhanced penalties.",
    example: "The Matthew Shepard and James Byrd Jr. Hate Crimes Prevention Act (2009) expanded federal hate crime law to include crimes motivated by sexual orientation and gender identity.",
    legalContext: "Hate crime laws provide enhanced penalties for crimes motivated by bias. In the US, federal hate crime law covers crimes motivated by sexual orientation and gender identity. Many states have similar laws, though coverage varies. Hate crime laws serve both punitive and symbolic purposes, recognizing the broader harm such crimes cause to communities. Prosecution requires proving both the underlying crime and the bias motivation.",
    relatedTerms: ["Bias Crime", "Enhanced Penalties", "Violence Prevention", "Criminal Law"]
  },
  {
    term: "Deadnaming",
    definition: "The act of referring to a transgender person by their birth name (the name they used before transitioning) rather than their chosen name. This is considered disrespectful and harmful.",
    example: "Some jurisdictions have policies prohibiting deadnaming in official documents and requiring the use of a person's chosen name and pronouns.",
    legalContext: "While not always explicitly illegal, deadnaming can constitute harassment or discrimination in certain contexts, particularly in employment, education, and healthcare settings. Some jurisdictions have policies requiring the use of chosen names and pronouns. Courts have recognized that persistent deadnaming can contribute to hostile environment claims. Many institutions have adopted policies protecting individuals' right to be addressed by their chosen name.",
    relatedTerms: ["Transgender Rights", "Chosen Name", "Harassment", "Dignity"]
  },
  {
    term: "Legal Gender Recognition",
    definition: "The process by which a person's gender identity is officially recognized by the government, typically involving changing gender markers on identity documents such as birth certificates, driver's licenses, and passports.",
    example: "The NALSA judgment affirmed the right of transgender persons to self-identify their gender without requiring medical procedures or certifications.",
    legalContext: "Requirements for legal gender recognition vary widely by jurisdiction. Some allow self-identification without medical requirements (following the Yogyakarta Principles), while others require medical procedures, diagnoses, or court orders. The NALSA judgment in India established the right to self-identify gender. Many jurisdictions now allow a third gender option or non-binary markers on documents. The process typically involves updating birth certificates, identity cards, passports, and other official documents.",
    relatedTerms: ["Gender Identity", "Self-Identification", "Identity Documents", "NALSA"]
  },
  {
    term: "Parental Rights",
    definition: "Legal rights and responsibilities of parents regarding their children, including custody, visitation, decision-making, and support. For LGBTQ+ individuals, this includes adoption rights, second-parent adoption, and recognition of non-biological parents.",
    example: "Following Obergefell v. Hodges, same-sex couples have equal adoption rights, though some states have religious exemption laws that allow adoption agencies to discriminate.",
    legalContext: "Parental rights for LGBTQ+ individuals have expanded significantly. Same-sex couples can adopt jointly in jurisdictions with marriage equality. Second-parent adoption allows non-biological parents to establish legal rights. However, challenges remain, particularly for unmarried couples and in jurisdictions without comprehensive protections. The Supriyo judgment clarified that queer couples can adopt under existing Indian laws. Surrogacy laws vary widely and may present challenges for LGBTQ+ individuals.",
    relatedTerms: ["Adoption", "Second-Parent Adoption", "Family Rights", "Custody"]
  },
  {
    term: "Hostile Work Environment",
    definition: "A form of workplace harassment where unwelcome conduct based on a protected characteristic creates an intimidating, hostile, or offensive work environment. This can include anti-LGBTQ+ slurs, jokes, or other discriminatory behavior.",
    example: "Persistent use of wrong pronouns, anti-LGBTQ+ jokes, and exclusion from workplace activities can create a hostile work environment that violates Title VII.",
    legalContext: "Hostile work environment is a form of harassment prohibited under Title VII and similar laws. To establish a claim, the conduct must be severe or pervasive enough to create an abusive working environment. It must be based on a protected characteristic (including sexual orientation and gender identity post-Bostock). Employers can be held liable for hostile environments created by supervisors, coworkers, or even customers if they knew or should have known about the harassment and failed to take corrective action.",
    relatedTerms: ["Workplace Harassment", "Title VII", "Discrimination", "Employer Liability"]
  },
  {
    term: "Reasonable Accommodation",
    definition: "Modifications or adjustments to a job, work environment, or policies that enable an individual to perform their job or access services. For transgender individuals, this may include using facilities consistent with gender identity or transitioning on the job.",
    example: "Allowing a transgender employee to use restrooms and facilities consistent with their gender identity is a reasonable accommodation required under anti-discrimination laws.",
    legalContext: "Reasonable accommodation is required under various anti-discrimination laws. For transgender individuals, accommodations may include using appropriate facilities, dress code flexibility, name and pronoun usage, and privacy during transition. Employers must provide accommodations unless they cause undue hardship. The EEOC has issued guidance on accommodations for transgender employees. Similar principles apply in education and public accommodations contexts.",
    relatedTerms: ["Transgender Rights", "Workplace Rights", "Undue Hardship", "Facilities Access"]
  },
  {
    term: "Public Accommodation",
    definition: "Businesses and facilities that are open to the public, such as restaurants, hotels, theaters, stores, and healthcare facilities. Anti-discrimination laws often prohibit discrimination in public accommodations.",
    example: "The Equality Act 2010 in the UK prohibits discrimination based on sexual orientation and gender reassignment in public accommodations.",
    legalContext: "Public accommodation laws vary by jurisdiction. Federal law in the US prohibits discrimination based on race, color, religion, and national origin, but not explicitly sexual orientation or gender identity (though some courts have interpreted sex discrimination to include these). Many states and localities have explicit protections for LGBTQ+ individuals in public accommodations. The UK's Equality Act provides comprehensive protections. These laws ensure equal access to goods, services, and facilities.",
    relatedTerms: ["Anti-Discrimination", "Equal Access", "Civil Rights", "Service Denial"]
  },
  {
    term: "Intersectionality",
    definition: "The interconnected nature of social categorizations such as race, class, gender, sexual orientation, and disability, which can create overlapping systems of discrimination or disadvantage.",
    example: "LGBTQ+ people of color may face discrimination based on both their sexual orientation/gender identity and their race, requiring legal strategies that address multiple forms of discrimination.",
    legalContext: "Intersectionality is increasingly recognized in legal analysis and advocacy. Courts and policymakers are beginning to acknowledge that individuals may face multiple, compounding forms of discrimination. This concept is important in understanding the experiences of LGBTQ+ people of color, transgender women of color, LGBTQ+ people with disabilities, and others with multiple marginalized identities. Legal remedies must address the full scope of discrimination experienced.",
    relatedTerms: ["Multiple Discrimination", "Compounding Bias", "Identity", "Social Justice"]
  },
  {
    term: "Yogyakarta Principles",
    definition: "A set of international principles relating to sexual orientation, gender identity, and human rights, developed by human rights experts in 2006 and expanded in 2017. They provide a framework for applying international human rights law to LGBTQ+ issues.",
    example: "The Yogyakarta Principles affirm that everyone has the right to legal recognition of their gender identity without requirements for medical procedures or diagnoses.",
    legalContext: "While not legally binding, the Yogyakarta Principles are influential in international human rights law and have been cited by courts, human rights bodies, and advocates worldwide. They address issues including non-discrimination, legal recognition, bodily integrity, freedom from violence, and access to justice. The principles have influenced legal reforms in many countries and are referenced in UN reports and resolutions. They represent international consensus on LGBTQ+ human rights standards.",
    relatedTerms: ["International Human Rights", "Gender Identity", "Sexual Orientation", "Human Rights Framework"]
  }
];
