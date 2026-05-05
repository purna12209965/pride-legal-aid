import { useState } from "react";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Is PrideJustice AI really free to use?",
    answer: "Yes! PrideJustice AI is completely free to use. We believe everyone deserves access to legal information regardless of their financial situation. Our AI assistant, resources, and all content are available at no cost. There are no hidden fees, premium tiers, or subscription charges. You can access our AI chatbot, browse legal case studies, read about your rights, connect with community resources, and explore our comprehensive legal database without paying anything. We're committed to making legal information accessible to all members of the LGBTQ+ community, especially those who may not have the financial means to hire a lawyer for initial consultations."
  },
  {
    question: "Can the AI assistant replace a lawyer?",
    answer: "No. While our AI provides helpful legal information and guidance, it cannot replace professional legal advice from a licensed attorney. Our AI assistant is designed to help you understand your rights, learn about relevant laws, and get general guidance on LGBTQ+ legal issues. However, it cannot represent you in court, file legal documents on your behalf, or provide advice tailored to the specific nuances of your individual case. For specific legal matters, court cases, binding legal advice, or representation, please consult with a qualified lawyer. Think of our AI as a starting point for understanding your rights and determining whether you need professional legal help. We also provide links to legal aid organizations and pro bono lawyers who can assist with your specific situation."
  },
  {
    question: "Is my conversation with the AI private?",
    answer: "Absolutely. Your conversations are private and secure. We take your privacy very seriously and have implemented multiple safeguards to protect your information. We do not store your chat history on our servers, and your messages are not used to train our AI models or shared with any third parties. All communications between you and the AI are encrypted using industry-standard security protocols. You can discuss sensitive topics without fear of your information being exposed or tracked. We don't require you to create an account or provide personal information to use the AI assistant. However, please remember that no online system is 100% secure, so avoid sharing highly sensitive personal details like your full legal name, address, or identification numbers in the chat."
  },
  {
    question: "Which countries and jurisdictions are covered?",
    answer: "We provide comprehensive information on LGBTQ+ rights in India, the United States, the United Kingdom, and international human rights frameworks. Our AI is trained on laws and precedents from these jurisdictions and can provide jurisdiction-specific guidance based on your location. For India, we cover landmark cases like Navtej Singh Johar v. Union of India (Section 377), NALSA v. Union of India (transgender rights), and the Transgender Persons Act 2019. For the United States, we include federal protections like Bostock v. Clayton County (employment discrimination) and Obergefell v. Hodges (marriage equality). For the UK, we cover the Equality Act 2010 and related protections. We also reference international frameworks like the Yogyakarta Principles. If you're in a different country, our AI can still provide general guidance based on international human rights standards, though specific local laws may vary."
  },
  {
    question: "How accurate is the legal information provided?",
    answer: "Our AI is trained on verified legal sources, court decisions, and current laws from official government websites, legal databases, and reputable human rights organizations. We work hard to ensure accuracy and update our knowledge base regularly to reflect new legislation and court rulings. However, laws change frequently, and interpretations can vary based on specific circumstances, local jurisdictions, and how courts apply them. Different judges may interpret the same law differently, and new precedents are constantly being set. Therefore, while we strive for accuracy, you should always verify important information with official sources or legal professionals before making significant decisions. Use our platform as an educational tool and starting point, but consult with a licensed attorney for advice specific to your situation. If you notice any incorrect or outdated information, please let us know so we can update it."
  },
  {
    question: "What if I face discrimination or need immediate help?",
    answer: "If you're facing immediate danger or a life-threatening situation, call emergency services right away (911 in the US, 100 in India, 999 in the UK). Your safety is the top priority. For crisis support and mental health emergencies, visit our Resources page where we list 24/7 hotlines like The Trevor Project (1-866-488-7386) and Trans Lifeline (877-565-8860) in the US, or iCall (9152987821) in India. For legal assistance with discrimination, harassment, or rights violations, we provide links to legal aid organizations that offer free or low-cost services, including Lambda Legal, ACLU, Lawyers Collective, and Naz Foundation. You can also visit our Counseling page to connect with real activists and advocates who can provide guidance. Document any incidents of discrimination (save emails, take photos, keep records) as this evidence will be crucial if you decide to file a complaint or lawsuit."
  },
  {
    question: "Can I use this if I'm not part of the LGBTQ+ community?",
    answer: "Yes! While our platform is designed specifically for LGBTQ+ individuals, anyone can use it to learn about LGBTQ+ rights, understand legal protections, or support friends and family members. Education and awareness benefit everyone. You might be a parent wanting to understand your child's rights, a teacher looking to create a more inclusive classroom, an employer ensuring workplace equality, or an ally wanting to be better informed. Our resources can help you understand the legal landscape, learn proper terminology, and discover how to support LGBTQ+ people in your life. We welcome everyone who comes with genuine curiosity and a desire to learn. Creating a more just and equal society requires understanding from all members of the community, regardless of their own identity."
  },
  {
    question: "How do I report incorrect information?",
    answer: "If you notice any incorrect or outdated information on our platform, please contact us at purnamarthala09@gmail.com. We take accuracy seriously and will investigate and update our content promptly. When reporting an issue, please include: (1) the specific page or section where you found the error, (2) what information appears to be incorrect, (3) the correct information with sources if possible, and (4) any relevant links to official legal sources, court documents, or government websites. We review all reports within 48 hours and make corrections as needed. Your feedback helps us maintain the quality and reliability of our platform for the entire community. We're committed to providing accurate, up-to-date legal information, and we appreciate users who help us achieve this goal."
  }
];

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pride-green/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pride-green/10 border border-pride-green/20 mb-6">
            <HelpCircle className="w-4 h-4 text-pride-green" />
            <span className="text-sm text-pride-green font-medium">Frequently Asked Questions</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Got Questions?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about PrideJustice AI, our services, and how we can help you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="gradient-border overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/30 transition-colors cursor-pointer"
                aria-expanded={expandedIndex === index}
              >
                <span className="font-display text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedIndex === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:purnamarthala09@gmail.com"
              className="px-6 py-3 rounded-full bg-pride-purple/10 border border-pride-purple/20 hover:bg-pride-purple/20 transition-colors text-sm font-medium text-pride-purple"
            >
              Email Us
            </a>
            <a
              href="/resources"
              className="px-6 py-3 rounded-full bg-pride-blue/10 border border-pride-blue/20 hover:bg-pride-blue/20 transition-colors text-sm font-medium text-pride-blue"
            >
              View Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
