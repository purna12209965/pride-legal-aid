# Supabase Integration Guide

## Overview

PrideJustice AI uses Supabase as its backend-as-a-service platform, specifically leveraging Edge Functions for serverless API endpoints.

## Project Details

- **Project ID:** `zdplvjtbbfrzudwbekhj`
- **Region:** Auto-selected by Supabase
- **Plan:** Free tier (upgradable)

## Architecture

```
┌─────────────────┐
│  React Frontend │
│   (Vite + TS)   │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│ Supabase Client │
│  (Auth + API)   │
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│  Edge Functions │
│   (Deno Runtime)│
└────────┬────────┘
         │
         ↓
┌─────────────────┐
│   AI Gateway    │
│  (LLM Service)  │
└─────────────────┘
```

## Setup Instructions

### 1. Environment Variables

Create a `.env` file in the project root:

```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://zdplvjtbbfrzudwbekhj.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_anon_key_here
```

**Where to find these values:**
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Navigate to Settings → API
4. Copy the URL and anon/public key

### 2. Supabase CLI Setup

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref zdplvjtbbfrzudwbekhj
```

### 3. Edge Function Configuration

Set environment variables in Supabase Dashboard:

1. Go to Edge Functions → Settings
2. Add the following secrets:
   - `LOVABLE_API_KEY` - Your AI gateway API key

## Frontend Integration

### Client Setup

**File:** `src/integrations/supabase/client.ts`

```typescript
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      storage: localStorage,
      persistSession: true,
      autoRefreshToken: true,
    }
  }
);
```

### Service Layer

**File:** `src/services/chat.service.ts`

The service layer handles all API communication:

```typescript
export class ChatService {
  static async streamChat(messages, onContent, onError) {
    const response = await fetch(
      `${SUPABASE_URL}/functions/v1/lgbtq-legal-chat`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
        body: JSON.stringify({ messages }),
      }
    );
    // Handle streaming response
  }
}
```

## Edge Functions

### lgbtq-legal-chat Function

**Purpose:** AI-powered chat endpoint with streaming responses

**Location:** `supabase/functions/lgbtq-legal-chat/index.ts`

**Key Features:**
- Server-Sent Events (SSE) streaming
- Rate limiting handling
- Error handling with proper status codes
- CORS support
- Comprehensive system prompt

**Request Format:**
```typescript
POST /functions/v1/lgbtq-legal-chat
Content-Type: application/json
Authorization: Bearer YOUR_SUPABASE_KEY

{
  "messages": [
    { "role": "user", "content": "What are my rights?" }
  ]
}
```

**Response Format:**
```
data: {"choices":[{"delta":{"content":"Your"}}]}
data: {"choices":[{"delta":{"content":" rights"}}]}
data: [DONE]
```

## Development Workflow

### Local Development

```bash
# Start Supabase locally (optional)
supabase start

# Serve edge functions locally
supabase functions serve lgbtq-legal-chat

# Test the function
curl -X POST http://localhost:54321/functions/v1/lgbtq-legal-chat \
  -H "Authorization: Bearer YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Hello"}]}'
```

### Deployment

```bash
# Deploy a single function
supabase functions deploy lgbtq-legal-chat

# Deploy all functions
supabase functions deploy

# View function logs
supabase functions logs lgbtq-legal-chat --tail
```

## Monitoring & Debugging

### Dashboard Access

Access your project dashboard:
```
https://supabase.com/dashboard/project/zdplvjtbbfrzudwbekhj
```

### Key Metrics

Monitor these metrics in the dashboard:

1. **Function Invocations**
   - Total calls per day/week/month
   - Success vs error rate
   - Average response time

2. **Error Tracking**
   - Error types and frequencies
   - Stack traces
   - Request/response logs

3. **Resource Usage**
   - CPU utilization
   - Memory consumption
   - Bandwidth usage

### Viewing Logs

```bash
# Real-time logs
supabase functions logs lgbtq-legal-chat --tail

# Logs from last hour
supabase functions logs lgbtq-legal-chat --since 1h

# Logs with specific filter
supabase functions logs lgbtq-legal-chat --filter "error"
```

## Error Handling

### Common Error Codes

| Code | Meaning | Frontend Action |
|------|---------|----------------|
| 200 | Success | Process stream |
| 402 | Service Unavailable | Show retry message |
| 429 | Rate Limited | Show wait message |
| 500 | Server Error | Show error toast |

### Error Response Format

```json
{
  "error": "Descriptive error message"
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

## Security Best Practices

### API Keys

- ✅ Use environment variables
- ✅ Never commit keys to Git
- ✅ Use different keys for dev/prod
- ✅ Rotate keys periodically

### CORS Configuration

```typescript
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};
```

### Rate Limiting

- Implemented at AI Gateway level
- Returns 429 status when exceeded
- Frontend shows user-friendly message

## Performance Optimization

### Cold Start Mitigation

```typescript
// Keep function warm with periodic pings
setInterval(() => {
  fetch(`${SUPABASE_URL}/functions/v1/lgbtq-legal-chat`, {
    method: 'HEAD'
  });
}, 5 * 60 * 1000); // Every 5 minutes
```

### Caching Strategy

```typescript
// Cache responses for common questions
const cache = new Map();

if (cache.has(question)) {
  return cache.get(question);
}
```

## Costs & Limits

### Free Tier Limits

- 500,000 function invocations/month
- 2GB function size limit
- 10 concurrent executions
- 1GB database storage
- 2GB bandwidth

### Monitoring Usage

Check usage in Dashboard → Settings → Usage

### Upgrading

When you need more:
1. Go to Settings → Billing
2. Choose Pro plan ($25/month)
3. Get increased limits

## Troubleshooting

### Function Not Responding

```bash
# Check function status
supabase functions list

# View recent logs
supabase functions logs lgbtq-legal-chat

# Redeploy function
supabase functions deploy lgbtq-legal-chat
```

### CORS Errors

- Verify CORS headers in function code
- Check request origin
- Ensure proper headers from frontend

### Authentication Errors

- Verify environment variables
- Check key validity in dashboard
- Ensure Bearer token format

### Rate Limiting

- Monitor usage in dashboard
- Implement request throttling
- Consider upgrading plan

## Backup & Recovery

### Function Versioning

All functions are version controlled in Git:

```bash
# View function history
git log supabase/functions/lgbtq-legal-chat/

# Rollback to previous version
git checkout <commit-hash> supabase/functions/lgbtq-legal-chat/
supabase functions deploy lgbtq-legal-chat
```

### Database Backups

(Not currently used, but available)

```bash
# Create backup
supabase db dump > backup.sql

# Restore backup
supabase db reset
psql -h db.zdplvjtbbfrzudwbekhj.supabase.co -U postgres < backup.sql
```

## Testing

### Unit Tests

```typescript
// Test service layer
describe('ChatService', () => {
  it('should stream messages', async () => {
    const messages = [{ role: 'user', content: 'test' }];
    await ChatService.streamChat(messages, onContent, onError);
    expect(onContent).toHaveBeenCalled();
  });
});
```

### Integration Tests

```bash
# Test edge function
npm run test:integration
```

## Resources

### Official Documentation
- [Supabase Docs](https://supabase.com/docs)
- [Edge Functions Guide](https://supabase.com/docs/guides/functions)
- [Deno Runtime](https://deno.land/manual)

### Community
- [Supabase Discord](https://discord.supabase.com)
- [GitHub Discussions](https://github.com/supabase/supabase/discussions)

### Support
- Email: support@supabase.com
- Dashboard: Settings → Support

## Migration Guide

### From Other Platforms

If migrating from another platform:

1. Export existing data
2. Set up Supabase project
3. Deploy edge functions
4. Update environment variables
5. Test thoroughly
6. Switch DNS/routing

## Future Enhancements

- [ ] Add database tables for user data
- [ ] Implement authentication
- [ ] Add conversation history
- [ ] Implement caching layer
- [ ] Add analytics tracking
- [ ] Multi-region deployment
