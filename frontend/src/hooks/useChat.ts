/**
 * useChat Hook
 * Custom React hook for managing chat state and interactions
 */

import { useState, useCallback } from 'react';
import { Message } from '@/types';
import { ChatService } from '@/services';
import { toast } from '@/hooks/use-toast';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Send a message to the AI assistant
   */
  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    await ChatService.streamChat(
      [...messages, userMessage],
      (assistantContent) => {
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          if (last?.role === "assistant") {
            return prev.map((m, i) =>
              i === prev.length - 1
                ? { ...m, content: assistantContent }
                : m
            );
          }
          return [
            ...prev,
            {
              role: "assistant",
              content: assistantContent,
              timestamp: new Date(),
            },
          ];
        });
      },
      (error) => {
        console.error("Chat error:", error);
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
        setIsLoading(false);
      }
    );

    setIsLoading(false);
  }, [messages, isLoading]);

  /**
   * Reset the chat conversation
   */
  const resetChat = useCallback(() => {
    setMessages([]);
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
    resetChat,
  };
};
