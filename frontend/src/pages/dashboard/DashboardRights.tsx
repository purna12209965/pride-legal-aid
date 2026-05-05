import { useState } from "react";
import { ChevronRight, Shield } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { RightDetail } from "@/types";
import { rightsData } from "@/data/rightsData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const DashboardRights = () => {
  const [selectedRight, setSelectedRight] = useState<RightDetail | null>(null);

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-4xl font-bold mb-2">
            <span className="gradient-text">Your Rights</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Comprehensive information about LGBTQ+ legal rights and protections
          </p>
        </div>

        {/* Rights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rightsData.map((right, index) => (
            <div
              key={index}
              onClick={() => setSelectedRight(right)}
              className="gradient-border card-hover p-6 group flex flex-col cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${right.colorBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <right.icon className={`w-6 h-6 ${right.colorText}`} />
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                  {right.category}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                {right.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                {right.description}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-pride-purple group-hover:text-pride-pink transition-colors">
                <span>Learn More</span>
                <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Rights Modal */}
        <Dialog open={!!selectedRight} onOpenChange={(open) => !open && setSelectedRight(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] bg-card border-border p-0">
            <ScrollArea className="max-h-[85vh] p-6">
              {selectedRight && (
                <>
                  <DialogHeader className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-xl ${selectedRight.colorBg} flex items-center justify-center`}>
                        <selectedRight.icon className={`w-8 h-8 ${selectedRight.colorText}`} />
                      </div>
                      <div>
                        <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                          {selectedRight.category}
                        </span>
                        <DialogTitle className="font-display text-3xl gradient-text mt-2">
                          {selectedRight.title}
                        </DialogTitle>
                      </div>
                    </div>
                    <DialogDescription className="text-muted-foreground text-base">
                      {selectedRight.description}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div className="p-4 rounded-xl bg-muted/50 border border-border">
                      <h4 className="font-display text-lg font-semibold mb-2 text-foreground">Overview</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {selectedRight.detailedInfo.overview}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-pride-purple" />
                        Your Protections
                      </h4>
                      <ul className="space-y-2">
                        {selectedRight.detailedInfo.protections.map((protection, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="w-4 h-4 text-pride-green mt-0.5 flex-shrink-0" />
                            {protection}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-display text-lg font-semibold mb-3 text-foreground">Applicable Laws</h4>
                      <ul className="space-y-2">
                        {selectedRight.detailedInfo.applicableLaws.map((law, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="w-4 h-4 text-pride-blue mt-0.5 flex-shrink-0" />
                            {law}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-pride-purple/10 border border-pride-purple/20">
                      <h4 className="font-display text-lg font-semibold mb-2 text-foreground">What To Do</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {selectedRight.detailedInfo.whatToDo}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-display text-lg font-semibold mb-3 text-foreground">Resources</h4>
                      <ul className="space-y-2">
                        {selectedRight.detailedInfo.resources.map((resource, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-pride-purple hover:text-pride-pink transition-colors">
                            <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            {resource}
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default DashboardRights;
