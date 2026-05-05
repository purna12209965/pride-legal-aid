import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, User, Loader2, Scale, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactMarkdown from "react-markdown";
import { useChat } from "@/hooks/useChat";
import { suggestedQuestions } from "@/data";
import DashboardLayout from "@/components/DashboardLayout";

const ChatAssistant = () => {
  const { messages, isLoading, sendMessage, resetChat } = useChat();
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  const handleQuestionClick = (question: string) => {
    sendMessage(question);
  };

  const handleReset = () => {
    resetChat();
    setInput("");
  };

  return (
    <DashboardLayout>
      <div className="h-screen flex flex-col">
        {/* Header */}
        <div className="border-b border-border bg-card/50 backdrop-blur-xl">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-gradient-to-r from-pride-purple to-pride-pink">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="font-display text-xl font-bold gradient-text">
                    AI Legal Assistant
                  </h1>
                  <p className="text-xs text-muted-foreground">
                    Bias-aware • Jurisdiction-sensitive • Always here to help
                  </p>
                </div>
              </div>
              {messages.length > 0 && (
                <Button variant="outline" size="sm" onClick={handleReset}>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  New Chat
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full p-6" ref={scrollRef}>
            {messages.length === 0 ? (
              <div className="space-y-8 max-w-4xl mx-auto">
                {/* Welcome Section */}
                <div className="text-center py-8">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-pride-purple/20 to-pride-pink/20 mb-6">
                    <Sparkles className="w-16 h-16 text-pride-purple" />
                  </div>
                  <h2 className="font-display text-3xl font-bold mb-4">
                    <span className="gradient-text">Get Legal Help Now</span>
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                    I'm your AI legal assistant, here to help you understand LGBTQ+ rights, laws, and legal protections. 
                    Ask me anything about your rights, legal precedents, or how to handle discrimination.
                  </p>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-pride-purple/5 border border-pride-purple/20">
                    <div className="w-10 h-10 rounded-lg bg-pride-purple/10 flex items-center justify-center mb-3">
                      <Scale className="w-5 h-5 text-pride-purple" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">Bias-Aware</h3>
                    <p className="text-xs text-muted-foreground">
                      Trained to recognize and avoid biased interpretations
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-pride-blue/5 border border-pride-blue/20">
                    <div className="w-10 h-10 rounded-lg bg-pride-blue/10 flex items-center justify-center mb-3">
                      <Sparkles className="w-5 h-5 text-pride-blue" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">Jurisdiction-Sensitive</h3>
                    <p className="text-xs text-muted-foreground">
                      Adapts advice based on your location and laws
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-pride-pink/5 border border-pride-pink/20">
                    <div className="w-10 h-10 rounded-lg bg-pride-pink/10 flex items-center justify-center mb-3">
                      <User className="w-5 h-5 text-pride-pink" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">Privacy-First</h3>
                    <p className="text-xs text-muted-foreground">
                      Your conversations are private and secure
                    </p>
                  </div>
                </div>

                {/* Suggested Questions */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-pride-purple" />
                    Quick Start - Try asking:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {suggestedQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleQuestionClick(q)}
                        className="text-left p-4 rounded-xl bg-muted/50 hover:bg-muted text-sm transition-all border border-transparent hover:border-pride-purple/30 hover:shadow-lg group"
                      >
                        <div className="flex items-start gap-3">
                          <Sparkles className="w-4 h-4 text-pride-purple mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-foreground">{q}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="p-4 rounded-xl bg-pride-orange/5 border border-pride-orange/20">
                  <p className="text-xs text-muted-foreground text-center">
                    <strong className="text-pride-orange">Important:</strong> AI responses are for informational purposes only. 
                    For specific legal advice, please consult a licensed attorney.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6 max-w-4xl mx-auto">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role === "assistant" && (
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pride-purple to-pride-pink flex items-center justify-center flex-shrink-0">
                        <Scale className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl ${
                        msg.role === "user"
                          ? "bg-gradient-to-r from-pride-purple to-pride-pink text-white"
                          : "bg-muted border border-border"
                      }`}
                    >
                      {msg.role === "assistant" ? (
                        <div className="prose prose-sm max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-a:text-pride-purple">
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>
                      ) : (
                        <p className="text-sm leading-relaxed">{msg.content}</p>
                      )}
                    </div>
                    {msg.role === "user" && (
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && messages[messages.length - 1]?.role === "user" && (
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pride-purple to-pride-pink flex items-center justify-center flex-shrink-0">
                      <Scale className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-muted border border-border p-4 rounded-2xl">
                      <Loader2 className="w-5 h-5 animate-spin text-pride-purple" />
                    </div>
                  </div>
                )}
              </div>
            )}
          </ScrollArea>
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-border bg-card/50">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about LGBTQ+ rights, laws, or legal protections..."
                className="flex-1 px-6 py-4 rounded-full bg-background border border-border focus:border-pride-purple focus:outline-none focus:ring-2 focus:ring-pride-purple/20 text-sm"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="lg"
                disabled={isLoading || !input.trim()}
                className="rounded-full px-8 bg-gradient-to-r from-pride-purple to-pride-pink hover:opacity-90"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send
                  </>
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              AI responses are for information only. Consult a lawyer for legal advice.
            </p>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ChatAssistant;
