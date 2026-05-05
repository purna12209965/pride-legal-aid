import { useState } from "react";
import { ChevronRight, Scale } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { legalCasesData, LegalCase } from "@/data/casesData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const DashboardCases = () => {
  const [selectedCase, setSelectedCase] = useState<LegalCase | null>(null);

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-4xl font-bold mb-2">
            <span className="gradient-text">Landmark Legal Cases</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Historic court decisions that shaped LGBTQ+ rights worldwide
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {legalCasesData.map((legalCase, index) => (
            <div
              key={index}
              onClick={() => setSelectedCase(legalCase)}
              className="gradient-border card-hover p-6 group flex flex-col cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${legalCase.colorBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <legalCase.icon className={`w-6 h-6 ${legalCase.colorText}`} />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <Badge variant="secondary" className="text-xs">
                    {legalCase.year}
                  </Badge>
                  <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {legalCase.category}
                  </span>
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                {legalCase.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {legalCase.court} • {legalCase.jurisdiction}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                {legalCase.summary}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-pride-purple group-hover:text-pride-pink transition-colors">
                <span>Read Full Case</span>
                <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Case Modal */}
        <Dialog open={!!selectedCase} onOpenChange={(open) => !open && setSelectedCase(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] bg-card border-border p-0">
            <ScrollArea className="max-h-[85vh] p-6">
              {selectedCase && (
                <>
                  <DialogHeader className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-xl ${selectedCase.colorBg} flex items-center justify-center`}>
                        <selectedCase.icon className={`w-8 h-8 ${selectedCase.colorText}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{selectedCase.year}</Badge>
                          <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                            {selectedCase.category}
                          </span>
                        </div>
                        <DialogTitle className="font-display text-3xl gradient-text">
                          {selectedCase.title}
                        </DialogTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {selectedCase.court} • {selectedCase.jurisdiction}
                        </p>
                      </div>
                    </div>
                    <DialogDescription className="text-muted-foreground text-base">
                      {selectedCase.summary}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div className="p-4 rounded-xl bg-muted/50 border border-border">
                      <h4 className="font-display text-lg font-semibold mb-2 text-foreground">Background</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {selectedCase.detailedInfo.background}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
                        <Scale className="w-5 h-5 text-pride-purple" />
                        Legal Question
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed p-4 rounded-xl bg-pride-purple/10 border border-pride-purple/20">
                        {selectedCase.detailedInfo.legalQuestion}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-display text-lg font-semibold mb-3 text-foreground">Decision</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {selectedCase.detailedInfo.decision}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-display text-lg font-semibold mb-3 text-foreground">Impact</h4>
                      <ul className="space-y-2">
                        {selectedCase.detailedInfo.impact.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="w-4 h-4 text-pride-green mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {selectedCase.detailedInfo.keyQuotes.length > 0 && (
                      <div>
                        <h4 className="font-display text-lg font-semibold mb-3 text-foreground">Key Quotes</h4>
                        <div className="space-y-3">
                          {selectedCase.detailedInfo.keyQuotes.map((quote, i) => (
                            <div key={i} className="p-4 rounded-xl bg-muted/50 border-l-4 border-pride-purple">
                              <p className="text-muted-foreground text-sm italic leading-relaxed">
                                "{quote}"
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="p-4 rounded-xl bg-pride-blue/10 border border-pride-blue/20">
                      <h4 className="font-display text-lg font-semibold mb-2 text-foreground">Significance</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {selectedCase.detailedInfo.significance}
                      </p>
                    </div>

                    {selectedCase.detailedInfo.relatedCases.length > 0 && (
                      <div>
                        <h4 className="font-display text-lg font-semibold mb-3 text-foreground">Related Cases</h4>
                        <ul className="space-y-2">
                          {selectedCase.detailedInfo.relatedCases.map((relatedCase, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-pride-purple hover:text-pride-pink transition-colors">
                              <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              {relatedCase}
                            </li>
                          ))}
                        </ul>
                      </div>
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

export default DashboardCases;
