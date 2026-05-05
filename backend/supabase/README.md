# Backend - Supabase Integration

## Overview

PrideJustice AI uses Supabase as its backend platform, specifically leveraging Edge Functions for serverless API endpoints. The backend handles AI chat functionality through streaming responses.

## Project Configuration

**Project ID:** `zdplvjtbbfrzudwbekhj`

**Supabase URL:** Set in environment variable `VITE_SUPABASE_URL`

**Public Key:** Set in environment variable `VITE_SUPABASE_PUBLISHABLE_KEY`

## Architecture

```
Frontend (React)
    ↓
Supabase Client (src/integrations/supabase/client.ts)
    ↓
Edge Functions (supabase/functions/)
    ↓
AI Gateway API
```

## Directory Structure

```
supabase/
├── functions/                  # Edge Functions
│   └── lgbtq-legal-chat/
│       └── index.ts           # AI chat endpoint
├── config.toml                # Supabase configuration
└── README.md                  # This file
```

## Edge Functions

### lgbtq-legal-chat

AI-powered chat endpoint for LGBTQ+ legal assistance with streaming support.

**Endpoint:** `POST /functions/v1/lgbtq-legal-chat`

**Authentication:** Bearer token (Supabase publishable key)

**Request Body:**
```json
{
  "messages": [
    {
      "role": "user" | "assistant",
      "content": "string"
    }
  ]
}
```

**Response:** Server-Sent Events (SSE) stream

**Response Format:**
```
data: {"choices":[{"delta":{"content":"text"}}]}
data: {"choices":[{"delta":{"content":"more text"}}]}
data: [DONE]
```

**Features:**
- ✅ Real-time streaming responses
- ✅ Rate limiting handling (429)
- ✅ Service availability checks (402)
- ✅ Comprehensive error handling
- ✅ CORS support for web clients
- ✅ Bias-aware system prompt
- ✅ Jurisdiction-sensitive responses
- ✅ References to key legal cases

**System Prompt Includes:**
- LGBTQ+ rights expertise
- Bias awareness and sensitivity
- Jurisdiction-specific information (India, US, UK, International)
- Key legal cases and precedents
- Compassionate and supportive tone
- Clear limitations and disclaimers

## Environment Variables

### Required in Supabase Dashboard

```bash
LOVABLE_API_KEY=your_ai_gateway_api_key
```

**How to Set:**
1. Go to Supabase Dashboard
2. Navigate to Edge Functions → Settings
3. Add environment variable
4. Deploy functions

### Required in Frontend (.env)

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_anon_key
```

## Frontend Integration

### Supabase Client Setup

**Location:** `src/integrations/supabase/client.ts`

```typescript
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      storage: localStorage,
      persistSession: true,
      autoRefreshToken: true,
    }
  }
);
```

**Features:**
- Persistent sessions using localStorage
- Automatic token refresh
- Type-safe with generated types

### Service Layer Integration

**Location:** `src/services/chat.service.ts`

The ChatService handles all communication with the Edge Function:

```typescript
export class ChatService {
  static async streamChat(messages, onContent, onError) {
    const response = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
      body: JSON.stringify({ messages }),
    });
    // Process streaming response
  }
}
```

## Error Handling

### HTTP Status Codes

| Code | Meaning | Action |
|------|---------|--------|
| 200 | Success | Process stream |
| 402 | Service Unavailable | Show retry message |
| 429 | Rate Limited | Show wait message |
| 500 | Server Error | Show error message |

### Error Response Format

```json
{
  "error": "Error message description"
}
```

### Frontend Error Handling

```typescript
try {
  await ChatService.streamChat(messages, onContent, onError);
} catch (error) {
  toast({
    title: "Error",
    description: error.message,
    variant: "destructive",
  });
}
```

## Development

### Local Development

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link to project
supabase link --project-ref zdplvjtbbfrzudwbekhj

# Serve functions locally
supabase functions serve lgbtq-legal-chat

# Test locally
curl -X POST http://localhost:54321/functions/v1/lgbtq-legal-chat \
  -H "Authorization: Bearer YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Hello"}]}'
```

### Deploy Functions

```bash
# Deploy single function
supabase functions deploy lgbtq-legal-chat

# Deploy all functions
supabase functions deploy

# View logs
supabase functions logs lgbtq-legal-chat
```

## Monitoring & Analytics

### Supabase Dashboard

Access monitoring at: `https://supabase.com/dashboard/project/zdplvjtbbfrzudwbekhj`

**Available Metrics:**
- Function invocations count
- Error rate and types
- Average response time
- Resource usage (CPU, Memory)
- Request/response logs

### Key Metrics to Monitor

1. **Invocation Count** - Track usage patterns
2. **Error Rate** - Identify issues quickly
3. **Response Time** - Ensure performance
4. **Rate Limits** - Monitor API usage

## Security

### Authentication
- All requests require Bearer token
- Uses Supabase publishable key
- No user authentication required (public endpoint)

### CORS Configuration
```typescript
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};
```

### Rate Limiting
- Handled by AI Gateway
- Returns 429 status when exceeded
- Frontend shows user-friendly message

### Data Privacy
- No conversation data stored
- Streaming responses only
- No logging of user messages

## Troubleshooting

### Common Issues

**Issue:** Function not responding
```bash
# Check function status
supabase functions list

# View logs
supabase functions logs lgbtq-legal-chat --tail
```

**Issue:** CORS errors
- Verify CORS headers in function
- Check request origin
- Ensure proper headers sent from frontend

**Issue:** Authentication errors
- Verify environment variables
- Check Supabase key validity
- Ensure Bearer token format

**Issue:** Rate limiting
- Monitor usage in dashboard
- Implement request throttling
- Consider upgrading plan

## Performance Optimization

### Streaming Optimization
- Chunked transfer encoding
- Efficient buffer management
- Minimal memory footprint

### Cold Start Mitigation
- Keep functions warm with periodic pings
- Optimize function size
- Minimize dependencies

## Costs & Limits

### Free Tier Limits
- 500,000 function invocations/month
- 2GB function size limit
- 10 concurrent executions

### Monitoring Usage
Check usage at: Dashboard → Settings → Usage

## Resources

### Official Documentation
- [Supabase Edge Functions](https://supabase.com/docs/guides/functions)
- [Deno Runtime](https://deno.land/manual)
- [Supabase CLI](https://supabase.com/docs/reference/cli)

### Support
- [Supabase Discord](https://discord.supabase.com)
- [GitHub Issues](https://github.com/supabase/supabase/issues)
- [Community Forum](https://github.com/supabase/supabase/discussions)

## Backup & Recovery

### Function Backup
Functions are version controlled in Git:
```bash
git log supabase/functions/lgbtq-legal-chat/
```

### Rollback
```bash
# Revert to previous version
git checkout <commit-hash> supabase/functions/lgbtq-legal-chat/
supabase functions deploy lgbtq-legal-chat
```

## Future Enhancements

- [ ] Add function versioning
- [ ] Implement caching layer
- [ ] Add request analytics
- [ ] Implement A/B testing
- [ ] Add conversation history (optional)
- [ ] Multi-language support
- [ ] Enhanced error tracking
