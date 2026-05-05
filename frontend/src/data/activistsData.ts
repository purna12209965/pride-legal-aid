/**
 * LGBTQ+ Activists & Counselors Data
 * Information about prominent LGBTQ+ activists and organizations
 * 
 * IMPORTANT DISCLAIMER:
 * - Contact information provided is for informational purposes
 * - Users should verify current contact details before reaching out
 * - Some contacts may be organizational rather than personal
 * - Always respect privacy and availability
 */

import { User, Phone, MapPin, Mail, Star } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Activist {
  id: string;
  name: string;
  title: string;
  role: string;
  image?: string;
  bio: string;
  specializations: string[];
  location: string;
  contact: {
    phone?: string;
    whatsapp?: string;
    email?: string;
    website?: string;
    organization?: string;
  };
  availability: string;
  languages: string[];
  rating: number;
  verified: boolean;
  experience: string;
  note?: string;
}

export const activistsData: Activist[] = [
  {
    id: "boyapati-vishnu-teja",
    name: "Boyapati Vishnu Teja",
    title: "Cisgay Man & Gay Rights Activist",
    role: "Founder, Astitvam Foundation",
    bio: "Boyapati Vishnu Teja is a prominent gay rights activist from the Telugu states (Telangana & Andhra Pradesh), working tirelessly to destigmatize homosexuality in society. He is the founder of Astitvam Foundation in Hyderabad and has been working for LGBTQ+ rights for over a decade. He advocates for LGBTQ+ visibility, mental health, and legal rights across Hyderabad and beyond.",
    specializations: [
      "Gay Rights",
      "Mental Health",
      "Legal Guidance",
      "Telugu States",
      "Community Support"
    ],
    location: "Hyderabad, Telangana",
    contact: {
      phone: "+91 8008702753",
      whatsapp: "+91 8008702753",
      organization: "Astitvam Foundation"
    },
    availability: "Contact via phone or WhatsApp for consultation",
    languages: ["Telugu", "English", "Hindi"],
    rating: 5,
    verified: true,
    experience: "10+ years in LGBTQ+ advocacy",
    note: "Please verify contact availability before reaching out"
  },
  {
    id: "harish-iyer",
    name: "Harish Iyer",
    title: "LGBTQ+ Rights Activist & DEI Leader",
    role: "Head of Diversity, Equity and Inclusion - Axis Bank",
    bio: "Harish Iyer is one of India's most prominent LGBTQ+ activists, known for his work on equal rights, anti-discrimination, and mental health support. He has been featured in numerous media outlets including Aamir Khan's Satyameva Jayate and is a powerful voice for the community. He currently serves as Head of DEI at Axis Bank.",
    specializations: [
      "Equal Rights",
      "Coming Out Support",
      "Family Counseling",
      "Anti-Discrimination",
      "Public Advocacy",
      "Corporate DEI"
    ],
    location: "Mumbai, Maharashtra",
    contact: {
      email: "Contact through professional networks",
      website: "about.me/hiyer"
    },
    availability: "Available through professional channels and speaking engagements",
    languages: ["English", "Hindi", "Marathi"],
    rating: 5,
    verified: true,
    experience: "15+ years in activism",
    note: "Contact through official channels or speaking bureau"
  },
  {
    id: "laxmi-narayan-tripathi",
    name: "Laxmi Narayan Tripathi",
    title: "Transgender Rights Activist & Bharatanatyam Dancer",
    role: "Transgender Counselor & Advocate",
    bio: "Laxmi Narayan Tripathi is a renowned transgender rights activist, Bharatanatyam dancer, and the first transgender person to represent Asia Pacific at the UN. She works extensively on transgender rights, HIV/AIDS awareness, and cultural acceptance through her organization Astitva.",
    specializations: [
      "Transgender Rights",
      "Gender Identity",
      "Transition Support",
      "HIV/AIDS Awareness",
      "Cultural Advocacy"
    ],
    location: "Mumbai, Maharashtra",
    contact: {
      organization: "Astitva",
      website: "Contact through social media or organization"
    },
    availability: "Available through organization and public events",
    languages: ["English", "Hindi", "Marathi"],
    rating: 5,
    verified: true,
    experience: "20+ years in activism",
    note: "Reach out through official organization channels"
  },
  {
    id: "qt-center-hyderabad",
    name: "QT Center Hyderabad",
    title: "Queer-Trans Wellness & Support Center",
    role: "Resource Center & Counseling Services",
    bio: "The Queer-Trans Wellness & Support Center (QT Center) is a first-of-its-kind resource centre in Hyderabad, providing an open and freeing space for the LGBTQIA+ community. Opened in April 2023 in Habsiguda, it offers mental health support, legal counsel, and crisis intervention services.",
    specializations: [
      "Mental Health Support",
      "Legal Counsel",
      "Crisis Intervention",
      "Community Support",
      "Safe Space"
    ],
    location: "Habsiguda, Hyderabad, Telangana",
    contact: {
      phone: "Contact through center",
      email: "Visit center for information"
    },
    availability: "Walk-in center - check operating hours",
    languages: ["Telugu", "English", "Hindi"],
    rating: 5,
    verified: true,
    experience: "Established 2023",
    note: "Visit the center in Habsiguda for support services"
  },
  {
    id: "humsafar-trust",
    name: "Humsafar Trust",
    title: "LGBTQ+ Health & Support Organization",
    role: "Comprehensive LGBTQ+ Services",
    bio: "Humsafar Trust is India's pioneering LGBTQ+ organization providing health services, community support, and advocacy since 1994. Based in Mumbai, they offer HIV/AIDS prevention and care, mental health counseling, legal aid, and community support groups.",
    specializations: [
      "HIV/AIDS Prevention",
      "Mental Health Counseling",
      "Legal Aid",
      "Community Support",
      "Healthcare Access"
    ],
    location: "Vakola, Mumbai, Maharashtra",
    contact: {
      phone: "+91-22-26673800",
      email: "info@humsafar.org",
      website: "humsafar.org"
    },
    availability: "Contact during office hours",
    languages: ["English", "Hindi", "Marathi"],
    rating: 5,
    verified: true,
    experience: "30+ years of service (Since 1994)"
  },
  {
    id: "lawyers-collective",
    name: "Lawyers Collective",
    title: "Public Interest Legal Organization",
    role: "LGBTQ+ Legal Support",
    bio: "Lawyers Collective is a public interest legal organization that has been at the forefront of LGBTQ+ rights litigation in India. They provide legal representation, public interest litigation, legal awareness programs, and pro bono legal services.",
    specializations: [
      "Legal Representation",
      "Public Interest Litigation",
      "Legal Awareness",
      "Policy Advocacy",
      "Pro Bono Services"
    ],
    location: "National (India)",
    contact: {
      email: "info@lawyerscollective.org",
      website: "lawyerscollective.org"
    },
    availability: "Contact for legal assistance",
    languages: ["English", "Hindi"],
    rating: 5,
    verified: true,
    experience: "Decades of legal advocacy"
  },
  {
    id: "naz-foundation",
    name: "Naz Foundation India",
    title: "HIV/AIDS & Sexual Health NGO",
    role: "Health Services & Rights Advocacy",
    bio: "Naz Foundation is an NGO working on HIV/AIDS and sexual health, instrumental in the legal battle to decriminalize homosexuality in India. They provide HIV/AIDS prevention and care, sexual health services, legal advocacy, and community outreach.",
    specializations: [
      "HIV/AIDS Services",
      "Sexual Health",
      "Legal Advocacy",
      "Community Outreach",
      "Rights Awareness"
    ],
    location: "Safdarjung, New Delhi",
    contact: {
      email: "info@nazindia.org",
      website: "nazindia.org"
    },
    availability: "Contact for services and support",
    languages: ["English", "Hindi"],
    rating: 5,
    verified: true,
    experience: "Decades of service"
  },
  {
    id: "raahi-bangalore",
    name: "Raahi",
    title: "Karnataka LGBTQIA+ Rights Organization",
    role: "Trans & Queer Support Services",
    bio: "Raahi is a Karnataka-based organisation that works on the rights of the LGBTQIA+ community, with a special focus on trans men, partners of trans men, queer, lesbian and bisexual women, gender non-conforming and non-binary persons, and persons with intersex variations.",
    specializations: [
      "Trans Men Support",
      "Queer Women Support",
      "Gender Non-Conforming",
      "Intersex Support",
      "Community Services"
    ],
    location: "Bangalore, Karnataka",
    contact: {
      website: "raahithejourney.org",
      email: "Contact through website"
    },
    availability: "Contact through website",
    languages: ["English", "Hindi", "Kannada"],
    rating: 5,
    verified: true,
    experience: "Years of community service"
  }
];

export const counselingCategories = [
  {
    title: "Personal Counseling",
    description: "One-on-one support for personal issues, coming out, and identity",
    icon: User
  },
  {
    title: "Legal Guidance",
    description: "Legal advice on rights, discrimination, and workplace issues",
    icon: Phone
  },
  {
    title: "Mental Health Support",
    description: "Professional support for mental health, anxiety, and depression",
    icon: Star
  },
  {
    title: "Family Counseling",
    description: "Support for family acceptance and relationship issues",
    icon: MapPin
  }
];
