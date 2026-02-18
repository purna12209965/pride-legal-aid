import { useState } from "react";
import { MessageSquare, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const SuggestionsSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.subject.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    if (form.message.trim().length < 10) {
      toast({ title: "Message must be at least 10 characters.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("suggestions").insert({
      name: form.name.trim().slice(0, 100),
      email: form.email.trim().slice(0, 255) || null,
      subject: form.subject.trim().slice(0, 200),
      message: form.message.trim().slice(0, 2000),
    });
    setSubmitting(false);
    if (error) {
      toast({ title: "Failed to submit. Please try again.", variant: "destructive" });
    } else {
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <section id="suggestions" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Your Voice Matters</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Share Your <span className="gradient-text">Suggestions & Feedback</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Help us improve PrideJustice AI. Your thoughts, ideas, and experiences shape how we serve the community.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-16 rounded-2xl border border-primary/20 bg-primary/5">
              <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Thank you!</h3>
              <p className="text-muted-foreground mb-6">
                Your feedback has been received. We read every submission and appreciate you taking the time to share.
              </p>
              <Button variant="outline" onClick={() => setSubmitted(false)}>
                Submit Another
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-muted/30 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 text-sm text-foreground placeholder:text-muted-foreground transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Email <span className="text-muted-foreground text-xs">(optional)</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    maxLength={255}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-muted/30 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 text-sm text-foreground placeholder:text-muted-foreground transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Subject <span className="text-primary">*</span>
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-muted/30 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 text-sm text-foreground transition-all"
                >
                  <option value="" disabled className="bg-card">Select a subject…</option>
                  <option value="General Feedback" className="bg-card">General Feedback</option>
                  <option value="Feature Suggestion" className="bg-card">Feature Suggestion</option>
                  <option value="Legal Information Gap" className="bg-card">Legal Information Gap</option>
                  <option value="AI Response Quality" className="bg-card">AI Response Quality</option>
                  <option value="Bug Report" className="bg-card">Bug Report</option>
                  <option value="Collaboration / Partnership" className="bg-card">Collaboration / Partnership</option>
                  <option value="Other" className="bg-card">Other</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  maxLength={2000}
                  rows={5}
                  placeholder="Share your thoughts, ideas, or experiences…"
                  className="w-full px-4 py-2.5 rounded-xl bg-muted/30 border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 text-sm text-foreground placeholder:text-muted-foreground transition-all resize-none"
                />
                <p className="text-xs text-muted-foreground text-right">{form.message.length}/2000</p>
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full"
                size="lg"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">Sending…</span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Submit Feedback
                  </span>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Your feedback is private and sent directly to the PrideJustice AI team in Proddatur, Kadapa.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default SuggestionsSection;
