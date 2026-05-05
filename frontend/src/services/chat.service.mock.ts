/**
 * Mock Chat Service
 * Simulates AI chat responses using knowledge base
 * Use this until Supabase backend is deployed
 */

import { Message } from '@/types';
import { findBestResponse } from '@/data/chatbotKnowledge';

export class ChatService {
  /**
   * Stream chat messages with simulated typing effect
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
      // Get the last user message
      const lastUserMessage = messages[messages.length - 1];
      if (!lastUserMessage || lastUserMessage.role !== 'user') {
        throw new Error('No user message found');
      }

      // Find best response from knowledge base
      const response = findBestResponse(lastUserMessage.content);

      // Simulate typing effect
      await this.simulateTyping(response, onContent);
    } catch (error) {
      onError(error instanceof Error ? error : new Error('Unknown error'));
    }
  }

  /**
   * Simulate typing effect for more natural feel
   * @param text - Full response text
   * @param onContent - Callback for content updates
   */
  private static async simulateTyping(
    text: string,
    onContent: (content: string) => void
  ): Promise<void> {
    let currentText = '';
    const words = text.split(' ');
    
    for (let i = 0; i < words.length; i++) {
      currentText += (i > 0 ? ' ' : '') + words[i];
      onContent(currentText);
      
      // Variable delay for more natural typing
      // Faster for short words, slower for long words
      const delay = Math.min(words[i].length * 8, 50);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}
