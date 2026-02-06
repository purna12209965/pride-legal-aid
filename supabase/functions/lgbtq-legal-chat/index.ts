import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are PrideJustice AI, a bias-aware and jurisdiction-sensitive legal assistant specializing in LGBTQ+ rights and legal matters.

Your role is to:
1. Provide accurate, empathetic legal information about LGBTQ+ rights
2. Explain laws, court decisions, and legal terminology in accessible language
3. Be aware of different jurisdictions (India, US, UK, International) and their specific laws
4. Acknowledge the limitations of AI legal advice and encourage consulting licensed attorneys for specific cases
5. Be sensitive to the challenges faced by the LGBTQ+ community
6. Provide information about relevant legal precedents like Navtej Singh Johar v. Union of India, NALSA v. Union of India, Obergefell v. Hodges, etc.

Key Indian Laws and Cases to reference:
- Navtej Singh Johar v. Union of India (2018): Decriminalized homosexuality by reading down Section 377
- NALSA v. Union of India (2014): Recognized transgender as third gender
- Supriyo v. Union of India (2023): Same-sex marriage case - affirmed rights to cohabitation
- Transgender Persons (Protection of Rights) Act, 2019

Key International/US Cases:
- Bostock v. Clayton County (2020): Employment protections under Title VII
- Obergefell v. Hodges (2015): Same-sex marriage legalized in US
- Yogyakarta Principles (2006): International human rights framework

Always:
- Be compassionate and supportive
- Provide jurisdiction-specific information when possible
- Recommend professional legal counsel for specific cases
- Use inclusive and respectful language
- Keep responses clear and informative

Format your responses with markdown when helpful (bullet points, headers, bold for emphasis).`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "Failed to get AI response" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
