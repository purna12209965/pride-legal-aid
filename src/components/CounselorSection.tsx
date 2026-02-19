import { Phone, MapPin, ExternalLink, Heart, Shield, Star } from "lucide-react";

const CounselorSection = () => {
  return (
    <section id="counseling" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Floating stickers */}
      <div className="absolute top-12 right-16 text-4xl opacity-15 select-none animate-float">🏳️‍🌈</div>
      <div className="absolute bottom-16 left-10 text-3xl opacity-15 select-none animate-float" style={{ animationDelay: "1.2s" }}>💜</div>
      <div className="absolute top-1/2 right-6 text-2xl opacity-10 select-none animate-float" style={{ animationDelay: "0.7s" }}>✨</div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: "hsl(330 60% 55%/0.12)", border: "1px solid hsl(330 60% 55%/0.25)" }}>
            <Heart className="w-4 h-4" style={{ color: "hsl(330 60% 65%)" }} />
            <span className="text-sm font-medium" style={{ color: "hsl(330 60% 65%)" }}>Personal Counseling</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Talk to a <span className="gradient-text">Real Activist</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with a verified LGBTQ+ rights activist for personal guidance, support, and counseling in your journey.
          </p>
        </div>

        {/* Profile Card */}
        <div className="max-w-3xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden p-8 md:p-10"
            style={{
              background: "linear-gradient(135deg, hsl(280 65% 8%), hsl(330 50% 8%))",
              border: "1px solid hsl(280 65% 60%/0.25)",
              boxShadow: "0 0 60px hsl(280 65% 60%/0.1), 0 0 120px hsl(330 60% 55%/0.05)",
            }}
          >
            {/* Rainbow top bar */}
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg,#e40303,#ff8c00,#ffed00,#008026,#004dff,#750787)" }} />

            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 blur-3xl" style={{ background: "hsl(330 60% 55%)" }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-5 blur-3xl" style={{ background: "hsl(280 65% 60%)" }} />

            <div className="relative flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div
                  className="w-28 h-28 rounded-2xl flex items-center justify-center text-5xl relative"
                  style={{
                    background: "linear-gradient(135deg, hsl(280 65% 60%/0.2), hsl(330 60% 55%/0.2))",
                    border: "2px solid hsl(280 65% 60%/0.4)",
                  }}
                >
                  🏳️‍🌈
                  {/* Verified badge */}
                  <div
                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm"
                    style={{ background: "linear-gradient(135deg, hsl(280 65% 60%), hsl(330 60% 55%))" }}
                    title="Verified Activist"
                  >
                    ✓
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Boyapati Vishnu Teja
                  </h3>
                  <div className="flex justify-center md:justify-start gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: "#ffed00" }} />
                    ))}
                  </div>
                </div>

                <p className="text-sm font-medium mb-3" style={{ color: "hsl(280 65% 70%)" }}>
                  🏳️‍🌈 Cisgay Man &amp; Gay Rights Activist
                </p>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  Boyapati Vishnu Teja is a prominent gay rights activist from the Telugu states (Telangana &amp; Andhra Pradesh), 
                  working tirelessly to destigmatize homosexuality in society, even after it was decriminalized under Section 377. 
                  He advocates for LGBTQ+ visibility, mental health, and legal rights across Hyderabad and beyond. 
                  Reach out for personal counseling, support, and guidance on LGBTQ+ legal matters.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                  {["Gay Rights", "Mental Health", "Legal Guidance", "Telugu States", "Community Support"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ background: "hsl(280 65% 60%/0.12)", border: "1px solid hsl(280 65% 60%/0.2)", color: "hsl(280 65% 70%)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Contact Details */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <a
                    href="tel:+918008702753"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all group"
                    style={{
                      background: "hsl(280 65% 60%/0.1)",
                      border: "1px solid hsl(280 65% 60%/0.2)",
                    }}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "hsl(280 65% 60%/0.2)" }}>
                      <Phone className="w-4 h-4" style={{ color: "hsl(280 65% 70%)" }} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Call / WhatsApp</p>
                      <p className="text-sm font-medium text-foreground">+91 8008702753</p>
                    </div>
                  </a>

                  <div
                    className="flex items-center gap-3 px-4 py-3 rounded-xl"
                    style={{
                      background: "hsl(330 60% 55%/0.1)",
                      border: "1px solid hsl(330 60% 55%/0.2)",
                    }}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "hsl(330 60% 55%/0.2)" }}>
                      <MapPin className="w-4 h-4" style={{ color: "hsl(330 60% 65%)" }} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="text-sm font-medium text-foreground">Hyderabad, Telangana</p>
                    </div>
                  </div>
                </div>

                {/* Bio Link */}
                <div className="mt-4">
                  <a
                    href="https://www.newindianexpress.com/cities/hyderabad/2020/Sep/08/homosexuality-no-longer-criminal-but-who-will-tell-the-society-2193853.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, hsl(280 65% 60%), hsl(330 60% 55%))",
                      color: "white",
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Read Full Bio / Interview
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom note */}
            <div
              className="relative mt-8 pt-6 flex items-start gap-3"
              style={{ borderTop: "1px solid hsl(280 65% 60%/0.15)" }}
            >
              <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "hsl(280 65% 65%)" }} />
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Confidential &amp; Safe Space.</span> All conversations are private. 
                Boyapati Vishnu Teja offers personal counseling for LGBTQ+ individuals seeking guidance on rights, identity, family issues, and legal matters in the Telugu states.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounselorSection;
