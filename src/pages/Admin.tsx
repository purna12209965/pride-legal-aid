import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { Scale, Mail, Clock, Tag, ArrowLeft, RefreshCw, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

type Suggestion = {
  id: string;
  name: string;
  email: string | null;
  subject: string;
  message: string;
  created_at: string;
};

const Admin = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Suggestion | null>(null);

  const fetchSuggestions = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("suggestions")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setSuggestions(data as Suggestion[]);
    setLoading(false);
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  const formatDate = (iso: string) => {
    return new Date(iso).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/50 bg-card/50 backdrop-blur-xl sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <div className="w-px h-5 bg-border" />
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" />
              <span className="font-display font-bold gradient-text">Admin — Suggestions</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
              {suggestions.length} submission{suggestions.length !== 1 ? "s" : ""}
            </span>
            <Button variant="outline" size="sm" onClick={fetchSuggestions} disabled={loading}>
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {loading ? (
          <div className="flex items-center justify-center py-32 text-muted-foreground">
            <RefreshCw className="w-5 h-5 animate-spin mr-2" />
            Loading submissions…
          </div>
        ) : suggestions.length === 0 ? (
          <div className="text-center py-32">
            <MessageSquare className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground">No suggestions yet. Check back later.</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-5 gap-6">
            {/* List */}
            <div className="lg:col-span-2 space-y-3">
              {suggestions.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelected(s)}
                  className={`w-full text-left rounded-xl border p-4 transition-all ${
                    selected?.id === s.id
                      ? "border-primary/50 bg-primary/5"
                      : "border-border/50 bg-card/40 hover:border-primary/30 hover:bg-card/60"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="font-medium text-foreground text-sm truncate">{s.name}</span>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {new Date(s.created_at).toLocaleDateString("en-IN")}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs mb-2">
                    <Tag className="w-3 h-3" />
                    {s.subject}
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">{s.message}</p>
                </button>
              ))}
            </div>

            {/* Detail */}
            <div className="lg:col-span-3">
              {selected ? (
                <div className="rounded-2xl border border-border/50 bg-card/50 p-8 sticky top-24">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="font-display text-xl font-bold text-foreground mb-1">{selected.name}</h2>
                      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        <Tag className="w-3.5 h-3.5" />
                        {selected.subject}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6 text-sm">
                    {selected.email && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="w-4 h-4 text-primary" />
                        <a href={`mailto:${selected.email}`} className="hover:text-primary transition-colors">
                          {selected.email}
                        </a>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      {formatDate(selected.created_at)}
                    </div>
                  </div>

                  <div className="rounded-xl bg-muted/30 border border-border/30 p-5">
                    <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">{selected.message}</p>
                  </div>

                  {selected.email && (
                    <div className="mt-4">
                      <a href={`mailto:${selected.email}?subject=Re: ${encodeURIComponent(selected.subject)}`}>
                        <Button variant="outline" size="sm">
                          <Mail className="w-4 h-4" />
                          Reply via Email
                        </Button>
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 rounded-2xl border border-dashed border-border/30 text-muted-foreground text-sm">
                  Select a submission to read it
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
