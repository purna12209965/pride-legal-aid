/**
 * Chat Constants
 * Configuration and constant values for chat functionality
 */

export const SUGGESTED_QUESTIONS = [
  "What are my rights as an LGBTQ+ person?",
  "How can I legally change my gender identity?",
  "What protections exist against workplace discrimination?",
  "Can I adopt a child as an LGBTQ+ person?",
  "What should I do if I face discrimination?",
  "Explain marriage equality laws in my region",
  "What is Section 377 and its current status?",
  "Tell me about the NALSA judgment",
];

export const CHAT_CONFIG = {
  maxMessageLength: 2000,
  streamingEnabled: true,
  retryAttempts: 3,
  retryDelay: 1000,
} as const;

export const ERROR_MESSAGES = {
  RATE_LIMIT: "Rate limit exceeded. Please try again in a moment.",
  SERVICE_UNAVAILABLE: "Service temporarily unavailable.",
  NETWORK_ERROR: "Network error. Please check your connection.",
  GENERIC_ERROR: "Failed to send message. Please try again.",
} as const;
