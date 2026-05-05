import { Link } from "react-router-dom";
import { Scale, Heart, ArrowLeft, ExternalLink, BookOpen, Users, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const legalResources = [
    {
      name: "Lambda Legal",
      description: "National organization committed to achieving full recognition of civil rights for LGBTQ+ people",
      url: "https://www.lambdalegal.org",
      category: "Legal Aid"
    },
    {
      name: "ACLU LGBTQ Rights Project",
      description: "Works to create a just society for LGBTQ+ people through litigation and advocacy",
      url: "https://www.aclu.org/issues/lgbtq-rights",
      category: "Legal Aid"
    },
    {
      name: "National Center for Transgender Equality",
      description: "Leading advocacy organization for transgender rights in the United States",
      url: "https://transequality.org",
      category: "Advocacy"
    },
    {
      name: "Human Rights Campaign",
      description: "America's largest civil rights organization working for LGBTQ+ equality",
      url: "https://www.hrc.org",
      category: "Advocacy"
    },
  ];

  const indianResources = [
    {
      name: "Humsafar Trust",
      description: "India's leading LGBTQ+ organization providing health and legal services",
      url: "https://humsafar.org",
      category: "Support"
    },
    {
      name: "Naz Foundation India",
      description: "Works on HIV/AIDS and LGBTQ+ rights advocacy in India",
      url: "https://www.nazindia.org",
      category: "Health & Rights"
    },
    {
      name: "Lawyers Collective",
      description: "Provides legal aid and advocacy for marginalized communities including LGBTQ+",
      url: "https://lawyerscollective.org",
      category: "Legal Aid"
    },
  ];

  const internationalResources = [
    {
      name: "ILGA World",
      description: "International Lesbian, Gay, Bisexual, Trans and Intersex Association",
      url: "https://ilga.org",
      category: "International"
    },
    {
      name: "OutRight Action International",
      description: "Works to advance human rights and equality for LGBTQ+ people globally",
      url: "https://outrightinternational.org",
      category: "International"
    },
  ];

  const crisisSupport = [
    {
      name: "The Trevor Project",
      description: "24/7 crisis support for LGBTQ+ youth",
      phone: "1-866-488-7386",
      url: "https://www.thetrevorproject.org",
    },
    {
      name: "Trans Lifeline",
      description: "Peer support hotline for transgender people",
      phone: "1-877-565-8860",
      url: "https://translifeline.org",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-gradient-to-r from-pride-purple to-pride-pink">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-display text-xl font-bold gradient-text">
                  Resources & Support
                </h1>
                <p className="text-xs text-muted-foreground">
                  Organizations, hotlines, and helpful links
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Find Support & Information</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A curated list of trusted organizations, legal aid services, and support resources
            for the LGBTQ+ community.
          </p>
        </div>

        {/* Crisis Support */}
        <div className="mb-12 p-6 rounded-2xl bg-pride-red/5 border border-pride-red/20">
          <div className="flex items-center gap-3 mb-4">
            <Phone className="w-6 h-6 text-pride-red" />
            <h3 className="font-display text-2xl font-bold text-foreground">
              Crisis Support - Available 24/7
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {crisisSupport.map((resource, index) => (
              <div key={index} className="p-4 rounded-xl bg-card border border-border">
                <h4 className="font-semibold text-foreground mb-2">{resource.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                <div className="flex items-center gap-4">
                  <a
                    href={`tel:${resource.phone}`}
                    className="flex items-center gap-2 text-sm font-medium text-pride-red hover:text-pride-orange transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {resource.phone}
                  </a>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-pride-purple hover:text-pride-pink transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Resources */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="w-6 h-6 text-pride-purple" />
            <h3 className="font-display text-2xl font-bold text-foreground">
              Legal Aid & Advocacy (US)
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {legalResources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-card border border-border hover:border-pride-purple/30 transition-all hover:shadow-lg group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-foreground group-hover:text-pride-purple transition-colors">
                    {resource.name}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-pride-purple transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                <span className="text-xs px-2 py-1 rounded-full bg-pride-purple/10 text-pride-purple">
                  {resource.category}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Indian Resources */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-pride-orange" />
            <h3 className="font-display text-2xl font-bold text-foreground">
              Resources in India
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {indianResources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-card border border-border hover:border-pride-orange/30 transition-all hover:shadow-lg group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-foreground group-hover:text-pride-orange transition-colors">
                    {resource.name}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-pride-orange transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                <span className="text-xs px-2 py-1 rounded-full bg-pride-orange/10 text-pride-orange">
                  {resource.category}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* International Resources */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-pride-blue" />
            <h3 className="font-display text-2xl font-bold text-foreground">
              International Organizations
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {internationalResources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-card border border-border hover:border-pride-blue/30 transition-all hover:shadow-lg group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-foreground group-hover:text-pride-blue transition-colors">
                    {resource.name}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-pride-blue transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                <span className="text-xs px-2 py-1 rounded-full bg-pride-blue/10 text-pride-blue">
                  {resource.category}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-pride-purple/10 to-pride-pink/10 border border-pride-purple/20">
          <div className="text-center">
            <Heart className="w-12 h-12 mx-auto text-pride-pink mb-4" />
            <h3 className="font-display text-2xl font-bold mb-3">
              <span className="gradient-text">Need More Help?</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you need additional resources or have questions, feel free to reach out to us.
              We're here to help connect you with the support you need.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:purnamarthala09@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-pride-purple/10 border border-pride-purple/20 hover:bg-pride-purple/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-pride-purple" />
                <span className="text-sm font-medium text-pride-purple">Email Us</span>
              </a>
              <Link to="/chat">
                <Button variant="hero" size="lg">
                  <Scale className="w-5 h-5" />
                  Chat with AI Assistant
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-muted/50 border border-border">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Disclaimer:</strong> This list is provided for informational purposes only.
            PrideJustice AI is not affiliated with these organizations. Please verify information
            and services independently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
