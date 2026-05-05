/**
 * Landmark LGBTQ+ Legal Cases Data
 * Comprehensive information about significant legal cases worldwide
 */

import { Scale, Gavel, Heart, Users, Shield, Globe } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface LegalCase {
  icon: LucideIcon;
  title: string;
  court: string;
  year: string;
  jurisdiction: string;
  category: string;
  summary: string;
  colorBg: string;
  colorText: string;
  detailedInfo: {
    background: string;
    legalQuestion: string;
    decision: string;
    impact: string[];
    keyQuotes: string[];
    significance: string;
    relatedCases: string[];
  };
}

export const legalCasesData: LegalCase[] = [
  {
    icon: Heart,
    title: "Obergefell v. Hodges",
    court: "U.S. Supreme Court",
    year: "2015",
    jurisdiction: "United States",
    category: "Marriage Equality",
    summary: "Landmark decision legalizing same-sex marriage nationwide in the United States.",
    colorBg: "bg-pride-red/10",
    colorText: "text-pride-red",
    detailedInfo: {
      background: "James Obergefell and John Arthur were married in Maryland in 2013, but their home state of Ohio refused to recognize their marriage. When Arthur died, Ohio would not list Obergefell as the surviving spouse on the death certificate. Obergefell sued, and his case was consolidated with similar cases from Michigan, Kentucky, and Tennessee. The plaintiffs argued that state bans on same-sex marriage violated the Due Process and Equal Protection Clauses of the Fourteenth Amendment.",
      legalQuestion: "Does the Fourteenth Amendment require states to license marriages between two people of the same sex? Does the Fourteenth Amendment require states to recognize same-sex marriages lawfully licensed and performed in other states?",
      decision: "In a 5-4 decision, the Supreme Court ruled that the fundamental right to marry is guaranteed to same-sex couples by both the Due Process Clause and the Equal Protection Clause of the Fourteenth Amendment. The Court held that state bans on same-sex marriage and refusals to recognize such marriages performed in other jurisdictions are unconstitutional. Justice Anthony Kennedy wrote the majority opinion.",
      impact: [
        "Legalized same-sex marriage in all 50 U.S. states and territories",
        "Required all states to recognize same-sex marriages performed in other states",
        "Granted same-sex couples access to federal benefits previously denied",
        "Established marriage as a fundamental right for LGBTQ+ individuals",
        "Provided legal protections for thousands of same-sex families",
        "Influenced international marriage equality movements",
        "Strengthened legal arguments for other LGBTQ+ rights cases"
      ],
      keyQuotes: [
        "\"No union is more profound than marriage, for it embodies the highest ideals of love, fidelity, devotion, sacrifice, and family.\" - Justice Kennedy",
        "\"The Constitution promises liberty to all within its reach, a liberty that includes certain specific rights that allow persons, within a lawful realm, to define and express their identity.\"",
        "\"Their hope is not to be condemned to live in loneliness, excluded from one of civilization's oldest institutions. They ask for equal dignity in the eyes of the law. The Constitution grants them that right.\""
      ],
      significance: "Obergefell v. Hodges is considered one of the most significant civil rights decisions of the 21st century. It culminated decades of LGBTQ+ advocacy and legal battles, building on earlier cases like Lawrence v. Texas (2003) and United States v. Windsor (2013). The decision has had profound social, legal, and cultural impacts, affirming the dignity and equality of LGBTQ+ relationships.",
      relatedCases: [
        "United States v. Windsor (2013) - Struck down DOMA",
        "Lawrence v. Texas (2003) - Decriminalized same-sex intimacy",
        "Hollingsworth v. Perry (2013) - California Proposition 8",
        "Baker v. Nelson (1972) - Early marriage case",
        "Goodridge v. Department of Public Health (2003) - Massachusetts marriage equality"
      ]
    }
  },
  {
    icon: Scale,
    title: "Navtej Singh Johar v. Union of India",
    court: "Supreme Court of India",
    year: "2018",
    jurisdiction: "India",
    category: "Decriminalization",
    summary: "Historic judgment decriminalizing homosexuality in India by striking down Section 377 of the Indian Penal Code.",
    colorBg: "bg-pride-orange/10",
    colorText: "text-pride-orange",
    detailedInfo: {
      background: "Section 377 of the Indian Penal Code, a colonial-era law from 1861, criminalized 'carnal intercourse against the order of nature,' which was used to prosecute LGBTQ+ individuals. In 2013, the Supreme Court had upheld Section 377 in Suresh Kumar Koushal v. Naz Foundation, reversing a 2009 Delhi High Court decision. Dancer Navtej Singh Johar and others filed a curative petition challenging this decision.",
      legalQuestion: "Does Section 377 of the Indian Penal Code violate the fundamental rights guaranteed by the Constitution of India, including the rights to equality, non-discrimination, life, liberty, dignity, and privacy?",
      decision: "A five-judge constitutional bench unanimously ruled that Section 377, insofar as it criminalized consensual sexual conduct between adults of the same sex, was unconstitutional. The Court held that it violated Articles 14 (equality), 15 (non-discrimination), 19 (freedom of expression), and 21 (life and personal liberty) of the Indian Constitution. Chief Justice Dipak Misra, Justice Rohinton Nariman, Justice A.M. Khanwilkar, Justice D.Y. Chandrachud, and Justice Indu Malhotra all wrote separate concurring opinions.",
      impact: [
        "Decriminalized consensual same-sex relations in India",
        "Affirmed constitutional rights to dignity, privacy, and autonomy for LGBTQ+ individuals",
        "Overturned the 2013 Suresh Kumar Koushal judgment",
        "Recognized sexual orientation as protected under anti-discrimination provisions",
        "Empowered LGBTQ+ community to live without fear of prosecution",
        "Paved the way for further LGBTQ+ rights advocacy in India",
        "Influenced legal reforms in other South Asian countries"
      ],
      keyQuotes: [
        "\"Criminalising carnal intercourse is irrational, arbitrary and manifestly unconstitutional.\" - Chief Justice Dipak Misra",
        "\"History owes an apology to the members of this community and their families.\" - Justice Indu Malhotra",
        "\"The LGBT persons deserve to live a life unshackled from the shadow of being 'unapprehended felons'.\" - Justice D.Y. Chandrachud",
        "\"Denial of self-expression is inviting death.\" - Chief Justice Dipak Misra"
      ],
      significance: "This judgment is a watershed moment for LGBTQ+ rights in India and South Asia. It recognized that colonial-era laws violated fundamental constitutional principles and affirmed the dignity and autonomy of LGBTQ+ individuals. The decision has inspired continued advocacy for marriage equality, anti-discrimination protections, and transgender rights in India.",
      relatedCases: [
        "Naz Foundation v. Govt. of NCT of Delhi (2009) - Delhi High Court decriminalized Section 377",
        "Suresh Kumar Koushal v. Naz Foundation (2013) - Supreme Court reversed 2009 decision",
        "NALSA v. Union of India (2014) - Transgender rights",
        "Justice K.S. Puttaswamy v. Union of India (2017) - Right to privacy",
        "Supriyo v. Union of India (2023) - Marriage equality petition"
      ]
    }
  },
  {
    icon: Users,
    title: "NALSA v. Union of India",
    court: "Supreme Court of India",
    year: "2014",
    jurisdiction: "India",
    category: "Transgender Rights",
    summary: "Landmark judgment recognizing transgender persons as a third gender and affirming their fundamental rights.",
    colorBg: "bg-pride-yellow/10",
    colorText: "text-pride-yellow",
    detailedInfo: {
      background: "The National Legal Services Authority (NALSA) filed a writ petition seeking recognition and protection of the rights of transgender persons in India. Transgender individuals faced severe discrimination, lack of legal recognition, and denial of basic rights including education, healthcare, and employment. The petition sought legal recognition of gender identity and protection from discrimination.",
      legalQuestion: "Whether transgender persons have a right to self-identify their gender? Whether they are entitled to legal recognition and protection of their fundamental rights under the Constitution?",
      decision: "The Supreme Court unanimously recognized transgender persons as a 'third gender' and affirmed their fundamental rights under Articles 14, 15, 16, 19, and 21 of the Constitution. The Court held that gender identity is integral to personal autonomy and dignity. It directed the government to treat transgender persons as socially and educationally backward classes and provide them reservations in education and employment.",
      impact: [
        "Legal recognition of transgender persons as a third gender",
        "Affirmed right to self-identify gender without medical intervention",
        "Directed government to provide reservations and welfare schemes",
        "Mandated healthcare facilities for transgender persons",
        "Required legal recognition in all official documents",
        "Established framework for anti-discrimination protections",
        "Led to the Transgender Persons (Protection of Rights) Act, 2019"
      ],
      keyQuotes: [
        "\"Recognition of transgenders as a third gender is not a social or medical issue but a human rights issue.\"",
        "\"Seldom, our society realizes or cares to realize the trauma, agony and pain which the members of Transgender community undergo.\"",
        "\"Gender identity is integral to the dignity of an individual and is at the core of personal autonomy and self-determination.\""
      ],
      significance: "NALSA is a groundbreaking judgment that brought transgender rights to the forefront in India. It established that gender identity is a fundamental aspect of human dignity and autonomy. The decision has been cited internationally as a progressive approach to transgender rights and has influenced policy reforms across South Asia.",
      relatedCases: [
        "Navtej Singh Johar v. Union of India (2018) - Decriminalization of Section 377",
        "Arunkumar v. Inspector General of Registration (2019) - Marriage rights",
        "Supriyo v. Union of India (2023) - Marriage equality",
        "Various High Court cases on transgender rights and recognition"
      ]
    }
  },
  {
    icon: Shield,
    title: "Bostock v. Clayton County",
    court: "U.S. Supreme Court",
    year: "2020",
    jurisdiction: "United States",
    category: "Employment Discrimination",
    summary: "Supreme Court ruled that Title VII of the Civil Rights Act protects employees from discrimination based on sexual orientation and gender identity.",
    colorBg: "bg-pride-green/10",
    colorText: "text-pride-green",
    detailedInfo: {
      background: "Three separate cases were consolidated: Gerald Bostock was fired from his job as a child welfare coordinator in Georgia after joining a gay softball league; Donald Zarda, a skydiving instructor, was fired after mentioning he was gay; and Aimee Stephens, a transgender woman, was fired from a funeral home after announcing her intention to transition. All three sued their employers under Title VII of the Civil Rights Act of 1964, which prohibits employment discrimination 'because of sex.'",
      legalQuestion: "Does Title VII of the Civil Rights Act of 1964, which prohibits employment discrimination 'because of sex,' encompass discrimination based on sexual orientation and gender identity?",
      decision: "In a 6-3 decision, the Supreme Court ruled that firing individuals because of their sexual orientation or transgender status violates Title VII's prohibition on sex discrimination. Justice Neil Gorsuch wrote the majority opinion, joined by Chief Justice Roberts and Justices Ginsburg, Breyer, Sotomayor, and Kagan. The Court held that it is impossible to discriminate against a person for being homosexual or transgender without discriminating against that individual based on sex.",
      impact: [
        "Extended Title VII protections to LGBTQ+ employees nationwide",
        "Protected approximately 8.1 million LGBTQ+ workers from employment discrimination",
        "Applied to all employers with 15 or more employees",
        "Covered hiring, firing, promotions, harassment, and other employment terms",
        "Influenced interpretation of other federal laws prohibiting sex discrimination",
        "Strengthened legal arguments for LGBTQ+ protections in other contexts",
        "Provided clear precedent for lower courts"
      ],
      keyQuotes: [
        "\"An employer who fires an individual for being homosexual or transgender fires that person for traits or actions it would not have questioned in members of a different sex.\" - Justice Gorsuch",
        "\"Sex plays a necessary and undisguisable role in the decision, exactly what Title VII forbids.\"",
        "\"It is impossible to discriminate against a person for being homosexual or transgender without discriminating against that individual based on sex.\""
      ],
      significance: "Bostock is one of the most significant LGBTQ+ rights victories in recent history. It provided clear, nationwide employment protections for LGBTQ+ individuals and established important legal precedent for interpreting sex discrimination laws. The decision has implications beyond employment, potentially affecting healthcare, education, and housing discrimination cases.",
      relatedCases: [
        "Price Waterhouse v. Hopkins (1989) - Sex stereotyping",
        "Oncale v. Sundowner Offshore Services (1998) - Same-sex harassment",
        "R.G. & G.R. Harris Funeral Homes v. EEOC (2020) - Consolidated with Bostock",
        "Altitude Express v. Zarda (2020) - Consolidated with Bostock",
        "Various circuit court decisions on LGBTQ+ employment discrimination"
      ]
    }
  },
  {
    icon: Gavel,
    title: "Lawrence v. Texas",
    court: "U.S. Supreme Court",
    year: "2003",
    jurisdiction: "United States",
    category: "Privacy & Decriminalization",
    summary: "Struck down sodomy laws nationwide, establishing the right to private, consensual sexual conduct.",
    colorBg: "bg-pride-blue/10",
    colorText: "text-pride-blue",
    detailedInfo: {
      background: "In 1998, Houston police entered John Lawrence's apartment responding to a false weapons report and found Lawrence and Tyron Garner engaged in consensual sexual activity. Both men were arrested and convicted under Texas's 'Homosexual Conduct' law, which criminalized same-sex intimacy. They challenged the law as unconstitutional, arguing it violated their rights to privacy and equal protection.",
      legalQuestion: "Do state laws criminalizing private, consensual sexual conduct between adults of the same sex violate the Due Process Clause of the Fourteenth Amendment?",
      decision: "In a 6-3 decision, the Supreme Court struck down Texas's sodomy law and invalidated similar laws in 13 other states. Justice Anthony Kennedy wrote the majority opinion, holding that the Due Process Clause protects the liberty of adults to engage in private, consensual sexual conduct. The Court explicitly overruled its 1986 decision in Bowers v. Hardwick, which had upheld Georgia's sodomy law.",
      impact: [
        "Decriminalized same-sex intimacy nationwide",
        "Invalidated sodomy laws in 14 states",
        "Established constitutional protection for private, consensual sexual conduct",
        "Overturned Bowers v. Hardwick (1986)",
        "Recognized dignity and autonomy of LGBTQ+ individuals",
        "Laid groundwork for future LGBTQ+ rights cases including marriage equality",
        "Affirmed that moral disapproval alone cannot justify criminal laws"
      ],
      keyQuotes: [
        "\"The petitioners are entitled to respect for their private lives. The State cannot demean their existence or control their destiny by making their private sexual conduct a crime.\" - Justice Kennedy",
        "\"Bowers was not correct when it was decided, and it is not correct today.\"",
        "\"Their right to liberty under the Due Process Clause gives them the full right to engage in their conduct without intervention of the government.\""
      ],
      significance: "Lawrence v. Texas is a foundational case for LGBTQ+ rights in the United States. It marked a significant shift in the Supreme Court's approach to LGBTQ+ issues, recognizing the dignity and autonomy of LGBTQ+ individuals. The decision paved the way for subsequent victories including marriage equality and employment protections.",
      relatedCases: [
        "Bowers v. Hardwick (1986) - Upheld sodomy laws, overruled by Lawrence",
        "Romer v. Evans (1996) - Struck down Colorado's Amendment 2",
        "United States v. Windsor (2013) - Struck down DOMA",
        "Obergefell v. Hodges (2015) - Marriage equality",
        "Various state court challenges to sodomy laws"
      ]
    }
  },
  {
    icon: Globe,
    title: "Supriyo v. Union of India",
    court: "Supreme Court of India",
    year: "2023",
    jurisdiction: "India",
    category: "Marriage & Civil Unions",
    summary: "Petition seeking marriage equality; Court affirmed right to cohabitation and directed government to address discrimination against queer couples.",
    colorBg: "bg-pride-purple/10",
    colorText: "text-pride-purple",
    detailedInfo: {
      background: "Following the decriminalization of homosexuality in Navtej Singh Johar (2018), multiple petitions were filed seeking legal recognition of same-sex marriages under the Special Marriage Act, 1954, and other personal laws. Petitioners argued that denying marriage rights to same-sex couples violated their fundamental rights to equality, dignity, and freedom of choice. The case was heard by a five-judge Constitution Bench.",
      legalQuestion: "Does the denial of marriage rights to same-sex couples violate fundamental rights under the Indian Constitution? Can courts read gender-neutral interpretations into marriage laws?",
      decision: "The Supreme Court declined to legalize same-sex marriage, holding that it is the legislature's domain to make such changes. However, the Court made several important observations: it affirmed the right of queer couples to cohabitate and form unions; recognized that queer persons have the same rights as heterosexual persons; directed the government to ensure queer couples are not discriminated against; and established a committee to address issues faced by queer couples including joint bank accounts, nominations, and ration cards.",
      impact: [
        "Affirmed right to cohabitation for same-sex couples",
        "Directed government to eliminate discrimination against queer couples",
        "Established committee to address practical issues (bank accounts, nominations, etc.)",
        "Recognized that queer persons have equal rights",
        "Clarified that queer couples can adopt under existing laws",
        "Acknowledged social reality of queer relationships",
        "Set stage for future legislative action on marriage equality"
      ],
      keyQuotes: [
        "\"Queer is a natural phenomenon known for ages. It is neither urban nor elitist.\"",
        "\"The right to union, companionship and intimacy are intrinsic to the liberty and dignity of human beings.\"",
        "\"The Constitution protects the right to choose one's partner.\"",
        "\"Queerness is not urban or elite, it is a fact of life.\""
      ],
      significance: "While the Court did not grant marriage equality, Supriyo represents an important step forward for LGBTQ+ rights in India. The judgment acknowledged the dignity and rights of queer couples and directed concrete measures to address discrimination. It has energized advocacy efforts for legislative reform and continues the trajectory established by Navtej Singh Johar and NALSA.",
      relatedCases: [
        "Navtej Singh Johar v. Union of India (2018) - Decriminalization",
        "NALSA v. Union of India (2014) - Transgender rights",
        "Justice K.S. Puttaswamy v. Union of India (2017) - Right to privacy",
        "Shakti Vahini v. Union of India (2018) - Right to choose partner"
      ]
    }
  }
];
