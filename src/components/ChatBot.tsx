import { useState, useRef, useEffect, useCallback } from "react";
import { MessageSquare, Send, X, Sparkles, User, Loader2, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactMarkdown from "react-markdown";
import { toast } from "@/hooks/use-toast";

type Message = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/lgbtq-legal-chat`;

const suggestedQuestions = [
  "What are my rights as an LGBTQ+ person in India?",
  "Explain the Navtej Singh Johar case",
  "What protections exist for transgender individuals?",
  "Is same-sex marriage legal in India?",
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const streamChat = useCallback(async (userMessages: Message[]) => {
    const resp = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages: userMessages }),
    });

    if (!resp.ok) {
      const errorData = await resp.json().catch(() => ({}));
      if (resp.status === 429) {
        throw new Error(errorData.error || "Rate limit exceeded. Please try again in a moment.");
      }
      if (resp.status === 402) {
        throw new Error(errorData.error || "Service temporarily unavailable.");
      }
      throw new Error(errorData.error || "Failed to get response");
    }

    if (!resp.body) throw new Error("No response body");

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let textBuffer = "";
    let assistantContent = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      textBuffer += decoder.decode(value, { stream: true });

      let newlineIndex: number;
      while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
        let line = textBuffer.slice(0, newlineIndex);
        textBuffer = textBuffer.slice(newlineIndex + 1);

        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (line.startsWith(":") || line.trim() === "") continue;
        if (!line.startsWith("data: ")) continue;

        const jsonStr = line.slice(6).trim();
        if (jsonStr === "[DONE]") break;

        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) {
            assistantContent += content;
            setMessages((prev) => {
              const last = prev[prev.length - 1];
              if (last?.role === "assistant") {
                return prev.map((m, i) =>
                  i === prev.length - 1 ? { ...m, content: assistantContent } : m
                );
              }
              return [...prev, { role: "assistant", content: assistantContent }];
            });
          }
        } catch {
          textBuffer = line + "\n" + textBuffer;
          break;
        }
      }
    }
  }, []);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      await streamChat([...messages, userMsg]);
    } catch (error) {
      console.error("Chat error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-pride-purple to-pride-pink text-white shadow-lg hover:scale-110 transition-all duration-300 ${
          isOpen ? "hidden" : "flex"
        } items-center gap-2`}
      >
        <MessageSquare className="w-6 h-6" />
        <span className="hidden sm:inline font-medium">Ask Legal AI</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[95vw] max-w-md h-[600px] max-h-[80vh] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-pride-purple/20 to-pride-pink/20">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-gradient-to-r from-pride-purple to-pride-pink">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">PrideJustice AI</h3>
                <p className="text-xs text-muted-foreground">LGBTQ+ Legal Assistant</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            {messages.length === 0 ? (
              <div className="space-y-4">
                <div className="text-center py-6">
                  <Sparkles className="w-12 h-12 mx-auto text-pride-purple mb-3" />
                  <h4 className="font-display font-semibold text-lg mb-2">
                    Welcome to PrideJustice AI
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Ask me anything about LGBTQ+ rights, laws, and legal protections.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground font-medium">Try asking:</p>
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(q)}
                      className="w-full text-left p-3 rounded-lg bg-muted/50 hover:bg-muted text-sm transition-colors border border-transparent hover:border-pride-purple/30"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role === "assistant" && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pride-purple to-pride-pink flex items-center justify-center flex-shrink-0">
                        <Scale className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        msg.role === "user"
                          ? "bg-gradient-to-r from-pride-purple to-pride-pink text-white"
                          : "bg-muted"
                      }`}
                    >
                      {msg.role === "assistant" ? (
                        <div className="prose prose-sm prose-invert max-w-none text-foreground">
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>
                      ) : (
                        <p className="text-sm">{msg.content}</p>
                      )}
                    </div>
                    {msg.role === "user" && (
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && messages[messages.length - 1]?.role === "user" && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pride-purple to-pride-pink flex items-center justify-center flex-shrink-0">
                      <Scale className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-muted p-3 rounded-2xl">
                      <Loader2 className="w-5 h-5 animate-spin text-pride-purple" />
                    </div>
                  </div>
                )}
              </div>
            )}
          </ScrollArea>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about LGBTQ+ rights..."
                className="flex-1 px-4 py-2 rounded-full bg-muted border border-border focus:border-pride-purple focus:outline-none text-sm"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !input.trim()}
                className="rounded-full bg-gradient-to-r from-pride-purple to-pride-pink hover:opacity-90"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2">
              AI responses are for information only. Consult a lawyer for legal advice.
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
