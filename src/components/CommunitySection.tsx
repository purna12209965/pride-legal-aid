import { Heart, Users } from "lucide-react";
import communityImg from "@/assets/community.jpg";

const CommunitySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pride-orange/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <img 
            src={communityImg} 
            alt="LGBTQ+ Community" 
            className="w-full h-[400px] object-cover object-top"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="p-12 max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-pride-pink" />
                <Users className="w-6 h-6 text-pride-purple" />
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
                  <div className="text-2xl font-display font-bold text-pride-pink">50K+</div>
                  <div className="text-sm text-muted-foreground">People Helped</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <div className="text-2xl font-display font-bold text-pride-purple">100+</div>
                  <div className="text-sm text-muted-foreground">Partner Organizations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
