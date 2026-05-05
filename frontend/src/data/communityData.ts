/**
 * Community Resources Data
 * LGBTQ+ community organizations, support groups, and resources
 */

import { Users, Heart, Phone, Globe, BookOpen, Shield } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface CommunityResource {
  icon: LucideIcon;
  name: string;
  category: string;
  description: string;
  services: string[];
  contact: {
    website?: string;
    phone?: string;
    email?: string;
    address?: string;
  };
  coverage: string;
  colorBg: string;
  colorText: string;
}

export const communityData: CommunityResource[] = [
  {
    icon: Shield,
    name: "Lambda Legal",
    category: "Legal Advocacy",
    description: "National organization committed to achieving full recognition of the civil rights of LGBTQ+ people and those living with HIV through impact litigation, education, and public policy work.",
    services: [
      "Legal help desk for LGBTQ+ legal questions",
      "Impact litigation on LGBTQ+ rights",
      "Know Your Rights resources",
      "Policy advocacy",
      "Public education programs",
      "Attorney referrals"
    ],
    contact: {
      website: "lambdalegal.org",
      phone: "1-866-542-8336 (Legal Help Desk)",
      email: "legalhelpdesk@lambdalegal.org"
    },
    coverage: "United States (National)",
    colorBg: "bg-pride-red/10",
    colorText: "text-pride-red"
  },
  {
    icon: Users,
    name: "Human Rights Campaign (HRC)",
    category: "Advocacy & Education",
    description: "America's largest civil rights organization working to achieve LGBTQ+ equality through advocacy, education, and outreach programs.",
    services: [
      "Policy advocacy and lobbying",
      "Workplace equality programs",
      "Educational resources",
      "Coming out support",
      "Healthcare equality initiatives",
      "Corporate equality index"
    ],
    contact: {
      website: "hrc.org",
      phone: "1-800-777-4723",
      email: "info@hrc.org",
      address: "1640 Rhode Island Ave NW, Washington, DC 20036"
    },
    coverage: "United States (National)",
    colorBg: "bg-pride-orange/10",
    colorText: "text-pride-orange"
  },
  {
    icon: Phone,
    name: "The Trevor Project",
    category: "Crisis Support",
    description: "Leading national organization providing crisis intervention and suicide prevention services to LGBTQ+ young people under 25.",
    services: [
      "24/7 crisis hotline",
      "Text and chat support",
      "Suicide prevention resources",
      "Coming out support",
      "Mental health resources",
      "Peer support communities"
    ],
    contact: {
      website: "thetrevorproject.org",
      phone: "1-866-488-7386 (TrevorLifeline)",
      email: "Text START to 678-678 (TrevorText)"
    },
    coverage: "United States (National)",
    colorBg: "bg-pride-yellow/10",
    colorText: "text-pride-yellow"
  },
  {
    icon: Heart,
    name: "PFLAG",
    category: "Family Support",
    description: "Nation's first and largest organization uniting parents, families, and allies with LGBTQ+ people through support, education, and advocacy.",
    services: [
      "Support groups for families and allies",
      "Educational programs",
      "Advocacy training",
      "Coming out resources",
      "Transgender support",
      "Local chapter connections"
    ],
    contact: {
      website: "pflag.org",
      phone: "202-467-8180",
      email: "info@pflag.org"
    },
    coverage: "United States (400+ chapters)",
    colorBg: "bg-pride-green/10",
    colorText: "text-pride-green"
  },
  {
    icon: Shield,
    name: "National Center for Transgender Equality",
    category: "Transgender Rights",
    description: "Nation's leading social justice advocacy organization winning life-saving change for transgender people.",
    services: [
      "Policy advocacy",
      "Know Your Rights resources",
      "ID document guidance",
      "Healthcare access support",
      "Employment rights information",
      "Legal resources"
    ],
    contact: {
      website: "transequality.org",
      email: "ncte@transequality.org",
      address: "1133 19th St NW, Suite 302, Washington, DC 20036"
    },
    coverage: "United States (National)",
    colorBg: "bg-pride-blue/10",
    colorText: "text-pride-blue"
  },
  {
    icon: BookOpen,
    name: "GLSEN",
    category: "Education",
    description: "Leading education organization working to create safe and inclusive schools for LGBTQ+ students.",
    services: [
      "Safe schools resources",
      "Gay-Straight Alliance (GSA) support",
      "Educator training",
      "Anti-bullying programs",
      "Student advocacy",
      "Research and policy"
    ],
    contact: {
      website: "glsen.org",
      phone: "212-727-0135",
      email: "glsen@glsen.org",
      address: "110 William St, 30th Floor, New York, NY 10038"
    },
    coverage: "United States (National)",
    colorBg: "bg-pride-purple/10",
    colorText: "text-pride-purple"
  },
  {
    icon: Heart,
    name: "Humsafar Trust",
    category: "Health & Support (India)",
    description: "India's pioneering LGBTQ+ organization providing health services, community support, and advocacy since 1994.",
    services: [
      "HIV/AIDS prevention and care",
      "Mental health counseling",
      "Legal aid",
      "Community support groups",
      "Advocacy and awareness",
      "Healthcare access"
    ],
    contact: {
      website: "humsafar.org",
      phone: "+91-22-26673800",
      email: "info@humsafar.org",
      address: "3rd Floor, Manthan Plaza, Nehru Road, Vakola, Mumbai 400055"
    },
    coverage: "India (Mumbai-based, national reach)",
    colorBg: "bg-pride-pink/10",
    colorText: "text-pride-pink"
  },
  {
    icon: Shield,
    name: "Lawyers Collective",
    category: "Legal Aid (India)",
    description: "Public interest legal organization that has been at the forefront of LGBTQ+ rights litigation in India.",
    services: [
      "Legal representation",
      "Public interest litigation",
      "Legal awareness programs",
      "Policy advocacy",
      "Know Your Rights resources",
      "Pro bono legal services"
    ],
    contact: {
      website: "lawyerscollective.org",
      email: "info@lawyerscollective.org"
    },
    coverage: "India (National)",
    colorBg: "bg-pride-red/10",
    colorText: "text-pride-red"
  },
  {
    icon: Users,
    name: "Naz Foundation",
    category: "Health & Rights (India)",
    description: "NGO working on HIV/AIDS and sexual health, instrumental in the legal battle to decriminalize homosexuality in India.",
    services: [
      "HIV/AIDS prevention and care",
      "Sexual health services",
      "Legal advocacy",
      "Community outreach",
      "Research and documentation",
      "Rights awareness"
    ],
    contact: {
      website: "nazindia.org",
      email: "info@nazindia.org",
      address: "C-1/B, Safdarjung Development Area, New Delhi 110016"
    },
    coverage: "India (Delhi-based, national impact)",
    colorBg: "bg-pride-orange/10",
    colorText: "text-pride-orange"
  },
  {
    icon: Globe,
    name: "Stonewall UK",
    category: "Advocacy (UK)",
    description: "Leading UK charity standing for lesbian, gay, bi, trans, queer, questioning and ace (LGBTQ+) people everywhere.",
    services: [
      "Workplace equality programs",
      "Policy advocacy",
      "Educational resources",
      "Community support",
      "Research and campaigns",
      "Information services"
    ],
    contact: {
      website: "stonewall.org.uk",
      phone: "+44 (0)20 7593 1850",
      email: "info@stonewall.org.uk",
      address: "192 St John Street, London EC1V 4JY"
    },
    coverage: "United Kingdom",
    colorBg: "bg-pride-yellow/10",
    colorText: "text-pride-yellow"
  },
  {
    icon: Heart,
    name: "SAGE",
    category: "Elder Services",
    description: "Country's largest and oldest organization dedicated to improving the lives of LGBTQ+ older adults.",
    services: [
      "Senior services and programs",
      "Housing assistance",
      "Healthcare advocacy",
      "Legal services",
      "Social activities",
      "Caregiver support"
    ],
    contact: {
      website: "sageusa.org",
      phone: "212-741-2247",
      email: "info@sageusa.org",
      address: "305 7th Avenue, 15th Floor, New York, NY 10001"
    },
    coverage: "United States (National network)",
    colorBg: "bg-pride-green/10",
    colorText: "text-pride-green"
  },
  {
    icon: Users,
    name: "Family Equality",
    category: "Family Support",
    description: "Advancing legal and lived equality for LGBTQ+ families through advocacy, support, and education.",
    services: [
      "Family building resources",
      "Adoption support",
      "Parenting programs",
      "Legal information",
      "Community connections",
      "Advocacy training"
    ],
    contact: {
      website: "familyequality.org",
      phone: "617-502-8700",
      email: "info@familyequality.org"
    },
    coverage: "United States (National)",
    colorBg: "bg-pride-blue/10",
    colorText: "text-pride-blue"
  },
  {
    icon: Phone,
    name: "Trans Lifeline",
    category: "Crisis Support",
    description: "Grassroots hotline and microgrants organization offering direct emotional and financial support to trans people in crisis.",
    services: [
      "24/7 crisis hotline (trans-operated)",
      "Peer support",
      "Microgrants for name changes and IDs",
      "Resource referrals",
      "Community support",
      "No non-consensual active rescue"
    ],
    contact: {
      website: "translifeline.org",
      phone: "1-877-565-8860 (US), 1-877-330-6366 (Canada)"
    },
    coverage: "United States & Canada",
    colorBg: "bg-pride-purple/10",
    colorText: "text-pride-purple"
  },
  {
    icon: Shield,
    name: "National Center for Lesbian Rights",
    category: "Legal Advocacy",
    description: "National legal organization committed to advancing the civil and human rights of lesbian, gay, bisexual, and transgender people and their families.",
    services: [
      "Legal representation",
      "Impact litigation",
      "Policy advocacy",
      "Legal resources",
      "Family law assistance",
      "Youth advocacy"
    ],
    contact: {
      website: "nclrights.org",
      phone: "415-392-6257",
      email: "info@nclrights.org",
      address: "870 Market Street, Suite 370, San Francisco, CA 94102"
    },
    coverage: "United States (National)",
    colorBg: "bg-pride-pink/10",
    colorText: "text-pride-pink"
  },
  {
    icon: Globe,
    name: "ILGA World",
    category: "International Advocacy",
    description: "International federation of over 1,900 member organizations from more than 160 countries campaigning for LGBTQ+ rights.",
    services: [
      "International advocacy",
      "Research and documentation",
      "Global networking",
      "Policy development",
      "Regional support",
      "Annual world conference"
    ],
    contact: {
      website: "ilga.org",
      email: "info@ilga.org",
      address: "Rue de la Charité 17, 1210 Brussels, Belgium"
    },
    coverage: "International (160+ countries)",
    colorBg: "bg-pride-red/10",
    colorText: "text-pride-red"
  },
  {
    icon: BookOpen,
    name: "The Audre Lorde Project",
    category: "Community Organizing",
    description: "Community organizing center for lesbian, gay, bisexual, two spirit, trans and gender non-conforming people of color.",
    services: [
      "Community organizing",
      "Leadership development",
      "Safe spaces",
      "Cultural programs",
      "Advocacy campaigns",
      "Mutual aid"
    ],
    contact: {
      website: "alp.org",
      email: "info@alp.org",
      address: "147 W 24th St, 3rd Floor, New York, NY 10011"
    },
    coverage: "New York City",
    colorBg: "bg-pride-orange/10",
    colorText: "text-pride-orange"
  }
];
