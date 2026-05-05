import { forwardRef } from "react";
import { Heart, Users } from "lucide-react";
import communityImg from "@/assets/community.jpg";

const CommunitySection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-24 relative overflow-hidden" {...props}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Floating stickers */}
      <div className="absolute top-8 left-8 text-4xl opacity-20 select-none animate-float">💜</div>
      <div className="absolute bottom-8 right-12 text-4xl opacity-20 select-none animate-float" style={{animationDelay:"1.5s"}}>🌈</div>
      
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden" style={{border:"1px solid hsl(280 65% 60%/0.2)",boxShadow:"0 0 60px hsl(280 65% 60%/0.08)"}}>
          <img 
            src={communityImg} 
            alt="LGBTQ+ Community" 
            className="w-full h-[400px] md:h-[500px] object-cover object-top"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="p-6 md:p-12 max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">❤️</span>
                <span className="text-2xl">🤝</span>
                <span className="text-2xl">🏳️‍🌈</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">Standing Together</span>
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                Our mission is to empower the LGBTQ+ community with accessible, accurate legal information. 
                Knowledge is power, and understanding your rights is the first step toward equality.
              </p>
              
              <div className="flex items-center gap-4 md:gap-6">
                <div>
                  <div className="text-2xl font-display font-bold text-pride-pink">50K+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">People Helped</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <div className="text-2xl font-display font-bold text-pride-purple">100+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Partner Organizations</div>
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
