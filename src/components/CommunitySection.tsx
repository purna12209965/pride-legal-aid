import { forwardRef } from "react";
import { Heart, Users } from "lucide-react";
import communityImg from "@/assets/community.jpg";

const CommunitySection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-24 relative overflow-hidden" {...props}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          <img 
            src={communityImg} 
            alt="LGBTQ+ Community" 
            className="w-full h-[400px] object-cover object-top"
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="p-12 max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-primary" />
                <Users className="w-6 h-6 text-accent" />
              </div>
              
              <h2 className="font-display text-4xl font-bold mb-4">
                <span className="gradient-text">Standing Together</span>
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our mission is to empower the LGBTQ+ community with accessible, accurate legal information. 
                Knowledge is power, and understanding your rights is the first step toward equality.
              </p>
              
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-2xl font-display font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">People Helped</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <div className="text-2xl font-display font-bold text-accent">100+</div>
                  <div className="text-sm text-muted-foreground">Partner Organizations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

CommunitySection.displayName = "CommunitySection";

export default CommunitySection;
