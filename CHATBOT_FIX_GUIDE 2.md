# Chatbot "Failed to Fetch" Error - Fix Guide

## Problem
The AI chatbot shows "failed to fetch" error because the Supabase Edge Function is not deployed yet.

## Solution Options

### Option 1: Deploy to Supabase (Production - Recommended)

**Prerequisites:**
- Supabase CLI installed
- Supabase account with project created

**Steps:**

1. **Install Supabase CLI** (if not installed):
```bash
npm install -g supabase
```

2. **Login to Supabase**:
```bash
supabase login
```

3. **Link your project**:
```bash
cd pride-legal-aid/backend
supabase link --project-ref zdplvjtbbfrzudwbekhj
```

4. **Set the LOVABLE_API_KEY secret**:
```bash
supabase secrets set LOVABLE_API_KEY=your_api_key_here
```

5. **Deploy the function**:
```bash
supabase functions deploy lgbtq-legal-chat
```

6. **Verify deployment**:
```bash
supabase functions list
```

### Option 2: Use Mock/Demo Mode (Quick Test)

If you want to test the UI without deploying, you can create a mock service:

**Create file**: `pride-legal-aid/frontend/src/services/chat.service.mock.ts`

```typescript
import { Message } from '@/types';

export class ChatService {
  static async streamChat(
    messages: Message[],
    onContent: (content: string) => void,
    onError: (error: Error) => void
  ): Promise<void> {
    try {
      // Simulate typing delay
      const response = "Hello! I'm PrideJustice AI. I'm currently in demo mode. To enable full AI functionality, please deploy the Supabase Edge Function. I can help you with LGBTQ+ legal questions, rights information, and connect you with resources.";
      
      let currentText = "";
      for (let i = 0; i < response.length; i++) {
        currentText += response[i];
        onContent(currentText);
        await new Promise(resolve => setTimeout(resolve, 20));
      }
    } catch (error) {
      onError(error instanceof Error ? error : new Error("Unknown error"));
    }
  }
}
```

Then update `pride-legal-aid/frontend/src/services/index.ts`:
```typescript
// Use mock service for testing
export * from './chat.service.mock';

// Use real service for production
// export * from './chat.service';
```

### Option 3: Get LOVABLE_API_KEY

The backend function requires a `LOVABLE_API_KEY` environment variable. 

**Where to get it:**
1. Go to your Lovable.dev account
2. Navigate to Settings > API Keys
3. Generate a new API key
4. Set it as a Supabase secret (see Option 1, step 4)

## Checking if Function is Deployed

Run this command to check:
```bash
curl https://zdplvjtbbfrzudwbekhj.supabase.co/functions/v1/lgbtq-legal-chat \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkcGx2anRiYmZyenVkd2Jla2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzNTk5NTIsImV4cCI6MjA4NTkzNTk1Mn0.xwDX-0gSyU_jP4VjFTGJpxO8ZvkDD7V-1tBzMPC6SyQ" \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Hello"}]}'
```

If you get a 404 error, the function is not deployed.
If you get a 500 error about missing API key, the function is deployed but needs the API key.

## Quick Test Without Deployment

If you just want to see the UI working, use Option 2 (Mock Mode) above.

## Need Help?

- Supabase CLI docs: https://supabase.com/docs/guides/cli
- Supabase Functions docs: https://supabase.com/docs/guides/functions
- Contact: purnamarthala09@gmail.com

## Current Status

✅ Frontend is working
✅ Backend function code is ready
❌ Backend function needs deployment
❌ LOVABLE_API_KEY needs to be set

Once you deploy the function and set the API key, the chatbot will work perfectly!
