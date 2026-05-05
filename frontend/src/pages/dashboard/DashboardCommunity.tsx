import { useState } from "react";
import { ChevronRight, ExternalLink, Phone, Mail, Globe, MapPin } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { communityData, CommunityResource } from "@/data/communityData";
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

const DashboardCommunity = () => {
  const [selectedResource, setSelectedResource] = useState<CommunityResource | null>(null);

  const categories = Array.from(new Set(communityData.map(r => r.category)));

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-4xl font-bold mb-2">
            <span className="gradient-text">Community Resources</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Organizations and support networks for the LGBTQ+ community
          </p>
        </div>

        {/* Categories */}
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <Badge key={index} variant="secondary" className="text-sm py-1.5 px-3">
              {category}
            </Badge>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {communityData.map((resource, index) => (
            <div
              key={index}
              onClick={() => setSelectedResource(resource)}
              className="gradient-border card-hover p-6 group flex flex-col cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${resource.colorBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <resource.icon className={`w-6 h-6 ${resource.colorText}`} />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {resource.category}
                </Badge>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                {resource.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {resource.coverage}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                {resource.description}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-pride-purple group-hover:text-pride-pink transition-colors">
                <span>View Details</span>
                <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Resource Modal */}
        <Dialog open={!!selectedResource} onOpenChange={(open) => !open && setSelectedResource(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] bg-card border-border p-0">
            <ScrollArea className="max-h-[85vh] p-6">
              {selectedResource && (
                <>
                  <DialogHeader className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-xl ${selectedResource.colorBg} flex items-center justify-center`}>
                        <selectedResource.icon className={`w-8 h-8 ${selectedResource.colorText}`} />
                      </div>
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-2">
                          {selectedResource.category}
                        </Badge>
                        <DialogTitle className="font-display text-3xl gradient-text">
                          {selectedResource.name}
                        </DialogTitle>
                        <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {selectedResource.coverage}
                        </p>
                      </div>
                    </div>
                    <DialogDescription className="text-muted-foreground text-base">
                      {selectedResource.description}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-display text-lg font-semibold mb-3 text-foreground">Services Offered</h4>
                      <ul className="space-y-2">
                        {selectedResource.services.map((service, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="w-4 h-4 text-pride-green mt-0.5 flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-pride-purple/10 border border-pride-purple/20">
                      <h4 className="font-display text-lg font-semibold mb-4 text-foreground">Contact Information</h4>
                      <div className="space-y-3">
                        {selectedResource.contact.website && (
                          <div className="flex items-start gap-3">
                            <Globe className="w-5 h-5 text-pride-purple mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                              <p className="text-xs text-muted-foreground mb-1">Website</p>
                              <a
                                href={`https://${selectedResource.contact.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-pride-purple hover:text-pride-pink transition-colors flex items-center gap-1"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {selectedResource.contact.website}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        )}
                        {selectedResource.contact.phone && (
                          <div className="flex items-start gap-3">
                            <Phone className="w-5 h-5 text-pride-purple mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                              <p className="text-xs text-muted-foreground mb-1">Phone</p>
                              <a
                                href={`tel:${selectedResource.contact.phone}`}
                                className="text-sm text-pride-purple hover:text-pride-pink transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {selectedResource.contact.phone}
                              </a>
                            </div>
                          </div>
                        )}
                        {selectedResource.contact.email && (
                          <div className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-pride-purple mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                              <p className="text-xs text-muted-foreground mb-1">Email</p>
                              <a
                                href={`mailto:${selectedResource.contact.email}`}
                                className="text-sm text-pride-purple hover:text-pride-pink transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {selectedResource.contact.email}
                              </a>
                            </div>
                          </div>
                        )}
                        {selectedResource.contact.address && (
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-pride-purple mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                              <p className="text-xs text-muted-foreground mb-1">Address</p>
                              <p className="text-sm text-muted-foreground">
                                {selectedResource.contact.address}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {selectedResource.contact.website && (
                      <Button
                        className="w-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(`https://${selectedResource.contact.website}`, '_blank');
                        }}
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </>
              )}
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default DashboardCommunity;
