/**
 * Chat Service
 * Handles all API communication for chat functionality
 */

import { Message, ChatError } from '@/types';

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/lgbtq-legal-chat`;

export class ChatService {
  /**
   * Stream chat messages from the AI assistant
   * @param messages - Array of conversation messages
   * @param onContent - Callback for streaming content
   * @param onError - Callback for errors
   */
  static async streamChat(
    messages: Message[],
    onContent: (content: string) => void,
    onError: (error: Error) => void
  ): Promise<void> {
    try {
      const response = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({})) as ChatError;
        
        if (response.status === 429) {
          throw new Error(errorData.error || "Rate limit exceeded. Please try again in a moment.");
        }
        if (response.status === 402) {
          throw new Error(errorData.error || "Service temporarily unavailable.");
        }
        throw new Error(errorData.error || "Failed to get response");
      }

      if (!response.body) {
        throw new Error("No response body");
      }

      await this.processStream(response.body, onContent);
    } catch (error) {
      onError(error instanceof Error ? error : new Error("Unknown error"));
    }
  }

  /**
   * Process the streaming response from the API
   * @param body - Response body stream
   * @param onContent - Callback for content updates
   */
  private static async processStream(
    body: ReadableStream<Uint8Array>,
    onContent: (content: string) => void
  ): Promise<void> {
    const reader = body.getReader();
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
            onContent(assistantContent);
          }
        } catch {
          textBuffer = line + "\n" + textBuffer;
          break;
        }
      }
    }
  }
}
