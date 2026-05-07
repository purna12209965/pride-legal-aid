import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are PrideJustice AI, a friendly and bias-aware legal assistant specializing in LGBTQ+ rights.

## HOW TO RESPOND:
- Keep answers SHORT and SIMPLE — 3 to 5 sentences max for most questions
- Use plain, everyday language — avoid legal jargon
- If jargon is needed, explain it in simple words right away
- Use bullet points only when listing steps or options (max 4-5 bullets)
- Do NOT write long essays or cover every possible scenario
- If the user needs more detail, they will ask — wait for follow-up questions
- Always end with one short sentence recommending a lawyer for their specific case

## YOUR KNOWLEDGE:
- LGBTQ+ rights in India, US, UK, and internationally
- Key cases: Navtej Singh Johar (2018), NALSA (2014), Obergefell (2015), Bostock (2020)
- Transgender Persons (Protection of Rights) Act, 2019
- What to do when police refuse to file FIR (India), police report (US/UK)
- Free legal aid resources in India (NALSA: 15100), US (Lambda Legal), UK (Galop: 0800 999 5428)

Always be compassionate, use inclusive language, and keep responses focused and easy to understand.`;


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
