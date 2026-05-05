import { useState } from "react";
import { Search, BookOpen, ChevronRight } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { terminologyData, TerminologyItem } from "@/data/terminologyData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const DashboardTerminology = () => {
  const [selectedTerm, setSelectedTerm] = useState<TerminologyItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTerms = terminologyData.filter(
    (term) =>
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-4xl font-bold mb-2">
            <span className="gradient-text">Legal Terminology</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Essential LGBTQ+ legal terms and definitions
          </p>
        </div>

        {/* Search */}
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search terminology..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 py-6 text-base"
          />
        </div>

        {/* Terms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTerms.map((term, index) => (
            <div
              key={index}
              onClick={() => setSelectedTerm(term)}
              className="gradient-border card-hover p-5 group flex flex-col cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-pride-purple/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5 text-pride-purple" />
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-pride-purple transition-colors" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                {term.term}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                {term.definition}
              </p>
            </div>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground text-lg">No terms found matching your search.</p>
          </div>
        )}

        {/* Detailed Term Modal */}
        <Dialog open={!!selectedTerm} onOpenChange={(open) => !open && setSelectedTerm(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] bg-card border-border p-0">
            <ScrollArea className="max-h-[85vh] p-6">
              {selectedTerm && (
                <>
                  <DialogHeader className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-xl bg-pride-purple/10 flex items-center justify-center">
                        <BookOpen className="w-8 h-8 text-pride-purple" />
                      </div>
                      <div className="flex-1">
                        <DialogTitle className="font-display text-3xl gradient-text">
                          {selectedTerm.term}
                        </DialogTitle>
                        {selectedTerm.full && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {selectedTerm.full}
                          </p>
                        )}
                      </div>
                    </div>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div className="p-4 rounded-xl bg-muted/50 border border-border">
                      <h4 className="font-display text-lg font-semibold mb-2 text-foreground">Definition</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {selectedTerm.definition}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-pride-purple/10 border border-pride-purple/20">
                      <h4 className="font-display text-lg font-semibold mb-2 text-foreground">Example</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {selectedTerm.example}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-display text-lg font-semibold mb-3 text-foreground">Legal Context</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {selectedTerm.legalContext}
                      </p>
                    </div>

                    {selectedTerm.relatedTerms.length > 0 && (
                      <div>
                        <h4 className="font-display text-lg font-semibold mb-3 text-foreground">Related Terms</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedTerm.relatedTerms.map((related, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="cursor-pointer hover:bg-pride-purple/20 transition-colors"
                              onClick={() => {
                                const relatedTerm = terminologyData.find(t => t.term === related);
                                if (relatedTerm) setSelectedTerm(relatedTerm);
                              }}
                            >
                              {related}
                            </Badge>
                          ))}
                        </div>
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

export default DashboardTerminology;
