/**
 * Chat Types
 * Defines all TypeScript interfaces and types for the chat functionality
 */

export type MessageRole = "user" | "assistant";

export interface Message {
  role: MessageRole;
  content: string;
  timestamp?: Date;
}

export interface ChatResponse {
  choices?: Array<{
    delta?: {
      content?: string;
    };
  }>;
}

export interface ChatError {
  error: string;
  status?: number;
}
