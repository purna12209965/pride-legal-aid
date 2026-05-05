import { useState } from "react";
import { Phone, Mail, MapPin, Star, Shield, ChevronRight, MessageCircle, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { activistsData, counselingCategories, Activist } from "@/data/activistsData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Counseling = () => {
  const [selectedActivist, setSelectedActivist] = useState<Activist | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-pride-purple/10 to-background">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pride-purple/10 border border-pride-purple/20 mb-6">
            <Shield className="w-4 h-4 text-pride-purple" />
            <span className="text-sm font-medium text-pride-purple">Verified Organizations & Activists</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Talk to a <span className="gradient-text">Real Activist</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Connect with verified LGBTQ+ rights activists and organizations for personal guidance, support, and counseling in your journey.
          </p>

          {/* Disclaimer */}
          <div className="max-w-2xl mx-auto mb-8 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Important:</strong> Please verify current contact details and availability before reaching out. Some contacts are organizational. Always respect privacy and professional boundaries.
            </p>
          </div>

          {/* Counseling Categories */}
          <div className="grid md:grid-cols-4 gap-4 mt-12">
            {counselingCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-pride-purple/50 transition-all"
              >
                <category.icon className="w-8 h-8 text-pride-purple mb-3 mx-auto" />
                <h3 className="font-semibold mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activists Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">
              Meet Our <span className="gradient-text">Verified Activists</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Experienced advocates ready to support you
            </p>
          </div>

          {/* Activists Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {activistsData.map((activist) => (
              <div
                key={activist.id}
                onClick={() => setSelectedActivist(activist)}
                className="gradient-border card-hover p-6 group cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pride-purple to-pride-pink flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    {activist.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
                          {activist.name}
                          {activist.verified && (
                            <Shield className="w-5 h-5 text-pride-purple fill-pride-purple/20" />
                          )}
                        </h3>
                        <p className="text-sm text-pride-purple font-medium">{activist.title}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(activist.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {activist.bio}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4" />
                      {activist.location}
                    </div>
                    
                    {/* Specializations */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {activist.specializations.slice(0, 3).map((spec, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                      {activist.specializations.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{activist.specializations.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contact Preview */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    {activist.contact.phone && (
                      <div className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        <span>Call</span>
                      </div>
                    )}
                    {activist.contact.whatsapp && (
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>WhatsApp</span>
                      </div>
                    )}
                    {activist.contact.email && (
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center text-sm font-medium text-pride-purple group-hover:text-pride-pink transition-colors">
                    <span>View Profile</span>
                    <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            How It <span className="gradient-text">Works</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-pride-purple/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pride-purple">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Choose an Activist</h3>
              <p className="text-sm text-muted-foreground">
                Browse verified activists and select one based on your needs
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-pride-purple/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pride-purple">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Reach Out</h3>
              <p className="text-sm text-muted-foreground">
                Contact them via phone, WhatsApp, or email
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-pride-purple/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pride-purple">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Get Support</h3>
              <p className="text-sm text-muted-foreground">
                Receive personalized guidance and support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activist Detail Modal */}
      <Dialog open={!!selectedActivist} onOpenChange={(open) => !open && setSelectedActivist(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] bg-card border-border p-0">
          <ScrollArea className="max-h-[85vh] p-6">
            {selectedActivist && (
              <>
                <DialogHeader className="mb-6">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Avatar */}
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pride-purple to-pride-pink flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                      {selectedActivist.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    
                    <div className="flex-1">
                      <DialogTitle className="font-display text-3xl gradient-text flex items-center gap-2 mb-2">
                        {selectedActivist.name}
                        {selectedActivist.verified && (
                          <Shield className="w-6 h-6 text-pride-purple fill-pride-purple/20" />
                        )}
                      </DialogTitle>
                      <p className="text-lg text-pride-purple font-medium mb-2">
                        {selectedActivist.title}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          {[...Array(selectedActivist.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                        <span>•</span>
                        <span>{selectedActivist.experience}</span>
                      </div>
                    </div>
                  </div>
                  
                  <DialogDescription className="text-base text-muted-foreground">
                    {selectedActivist.bio}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Specializations */}
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedActivist.specializations.map((spec, i) => (
                        <Badge key={i} variant="secondary" className="text-sm py-1.5 px-3">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Location & Languages */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-muted/50 border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-5 h-5 text-pride-purple" />
                        <h4 className="font-semibold">Location</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{selectedActivist.location}</p>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-muted/50 border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="w-5 h-5 text-pride-purple" />
                        <h4 className="font-semibold">Languages</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {selectedActivist.languages.join(', ')}
                      </p>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="p-4 rounded-xl bg-pride-purple/10 border border-pride-purple/20">
                    <h4 className="font-semibold mb-2">Availability</h4>
                    <p className="text-sm text-muted-foreground">{selectedActivist.availability}</p>
                  </div>

                  {/* Note if exists */}
                  {selectedActivist.note && (
                    <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                      <h4 className="font-semibold mb-2 text-yellow-700 dark:text-yellow-400">Please Note</h4>
                      <p className="text-sm text-muted-foreground">{selectedActivist.note}</p>
                    </div>
                  )}

                  {/* Contact Information */}
                  <div className="p-6 rounded-xl bg-gradient-to-br from-pride-purple/10 to-pride-pink/10 border border-pride-purple/20">
                    <h4 className="font-semibold text-lg mb-4">Contact Information</h4>
                    <div className="space-y-3">
                      {selectedActivist.contact.phone && (
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-pride-purple flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-xs text-muted-foreground mb-1">Phone / Call</p>
                            <a
                              href={`tel:${selectedActivist.contact.phone}`}
                              className="text-sm text-pride-purple hover:text-pride-pink transition-colors font-medium"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {selectedActivist.contact.phone}
                            </a>
                          </div>
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.location.href = `tel:${selectedActivist.contact.phone}`;
                            }}
                          >
                            Call Now
                          </Button>
                        </div>
                      )}
                      
                      {selectedActivist.contact.whatsapp && (
                        <div className="flex items-center gap-3">
                          <MessageCircle className="w-5 h-5 text-pride-purple flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-xs text-muted-foreground mb-1">WhatsApp</p>
                            <a
                              href={`https://wa.me/${selectedActivist.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-pride-purple hover:text-pride-pink transition-colors font-medium"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {selectedActivist.contact.whatsapp}
                            </a>
                          </div>
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(`https://wa.me/${selectedActivist.contact.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
                            }}
                          >
                            WhatsApp
                          </Button>
                        </div>
                      )}
                      
                      {selectedActivist.contact.email && (
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-pride-purple flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-xs text-muted-foreground mb-1">Email</p>
                            <a
                              href={`mailto:${selectedActivist.contact.email}`}
                              className="text-sm text-pride-purple hover:text-pride-pink transition-colors font-medium"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {selectedActivist.contact.email}
                            </a>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.location.href = `mailto:${selectedActivist.contact.email}`;
                            }}
                          >
                            Email
                          </Button>
                        </div>
                      )}
                      
                      {selectedActivist.contact.website && (
                        <div className="flex items-center gap-3">
                          <Globe className="w-5 h-5 text-pride-purple flex-shrink-0" />
                          <div className="flex-1">
                            <p className="text-xs text-muted-foreground mb-1">Website</p>
                            <a
                              href={`https://${selectedActivist.contact.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-pride-purple hover:text-pride-pink transition-colors font-medium"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {selectedActivist.contact.website}
                            </a>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(`https://${selectedActivist.contact.website}`, '_blank');
                            }}
                          >
                            Visit
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Counseling;
