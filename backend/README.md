# PrideJustice AI - Backend

## Overview

This is the backend infrastructure for PrideJustice AI, powered by Supabase. It provides database, authentication, and serverless functions for the LGBTQ+ legal aid platform.

## Tech Stack

- **Platform:** Supabase
- **Database:** PostgreSQL
- **Functions:** Deno Edge Functions
- **Authentication:** Supabase Auth
- **Storage:** Supabase Storage (if needed)

## Project Structure

```
backend/
├── supabase/
│   ├── functions/              # Edge Functions
│   │   └── lgbtq-legal-chat/  # AI chat function
│   │       ├── index.ts       # Function handler
│   │       └── README.md      # Function docs
│   ├── config.toml            # Supabase configuration
│   └── README.md              # Supabase setup guide
└── package.json               # Backend scripts
```

## Getting Started

### Prerequisites

- Supabase CLI installed
- Deno runtime (for local function development)
- Supabase account

### Installation

```bash
# Install Supabase CLI (if not already installed)
npm install -g supabase

# Or using Homebrew (macOS)
brew install supabase/tap/supabase
```

### Local Development

```bash
# Start Supabase locally
npm run start
# or
supabase start

# Check status
npm run status
# or
supabase status

# Stop Supabase
npm run stop
# or
supabase stop
```

### Environment Variables

Supabase automatically provides:
- `SUPABASE_URL` - Your project URL
- `SUPABASE_ANON_KEY` - Public anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Service role key (keep secret)

## Edge Functions

### lgbtq-legal-chat

AI-powered chat function for legal assistance.

**Location:** `supabase/functions/lgbtq-legal-chat/`

**Endpoint:** `https://[project-id].supabase.co/functions/v1/lgbtq-legal-chat`

**Method:** POST

**Request Body:**
```json
{
  "message": "What are my rights as an LGBTQ+ person?"
}
```

**Response:**
```json
{
  "response": "AI-generated legal guidance...",
  "timestamp": "2026-02-20T..."
}
```

**Environment Variables Required:**
- `OPENAI_API_KEY` - OpenAI API key for GPT integration

### Local Testing

```bash
# Serve functions locally
npm run functions:serve
# or
supabase functions serve

# Test with curl
curl -i --location --request POST 'http://localhost:54321/functions/v1/lgbtq-legal-chat' \
  --header 'Authorization: Bearer YOUR_ANON_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"message":"What are my rights?"}'
```

### Deployment

```bash
# Deploy all functions
npm run functions:deploy
# or
supabase functions deploy

# Deploy specific function
supabase functions deploy lgbtq-legal-chat

# Set secrets
supabase secrets set OPENAI_API_KEY=your_key_here
```

## Database Schema

### Tables

Currently using Supabase's built-in tables:
- `auth.users` - User authentication
- Custom tables can be added as needed

### Future Schema (Planned)

```sql
-- Chat history
CREATE TABLE chat_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  message TEXT NOT NULL,
  response TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User bookmarks
CREATE TABLE bookmarks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  resource_type TEXT NOT NULL,
  resource_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Feedback
CREATE TABLE feedback (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Authentication

### Setup

Supabase Auth is pre-configured. Enable providers in Supabase Dashboard:
- Email/Password
- OAuth (Google, GitHub, etc.)
- Magic Links

### Usage in Frontend

```typescript
import { supabase } from '@/integrations/supabase/client';

// Sign up
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password'
});

// Sign in
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password'
});

// Sign out
await supabase.auth.signOut();
```

## API Endpoints

### Base URL

- **Production:** `https://zdplvjtbbfrzudwbekhj.supabase.co`
- **Local:** `http://localhost:54321`

### Functions

- `POST /functions/v1/lgbtq-legal-chat` - AI chat endpoint

### Database REST API

Supabase automatically generates REST API for all tables:
- `GET /rest/v1/[table]` - List records
- `POST /rest/v1/[table]` - Create record
- `PATCH /rest/v1/[table]?id=eq.[id]` - Update record
- `DELETE /rest/v1/[table]?id=eq.[id]` - Delete record

## Security

### Row Level Security (RLS)

Enable RLS on all tables:

```sql
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own messages
CREATE POLICY "Users can view own messages"
  ON chat_messages
  FOR SELECT
  USING (auth.uid() = user_id);
```

### API Keys

- **Anon Key:** Safe to use in frontend (public)
- **Service Role Key:** Never expose in frontend (server-only)

### CORS

Configure allowed origins in Supabase Dashboard under API settings.

## Monitoring

### Logs

```bash
# View function logs
supabase functions logs lgbtq-legal-chat

# Follow logs in real-time
supabase functions logs lgbtq-legal-chat --follow
```

### Dashboard

Monitor in Supabase Dashboard:
- API usage
- Database performance
- Function invocations
- Error rates
- User activity

## Backup & Recovery

### Database Backups

Supabase automatically backs up your database:
- Daily backups (retained for 7 days on free tier)
- Point-in-time recovery (paid plans)

### Manual Backup

```bash
# Export database
supabase db dump -f backup.sql

# Restore database
supabase db reset
psql -h localhost -p 54322 -U postgres < backup.sql
```

## Performance

### Database Optimization

- Add indexes on frequently queried columns
- Use connection pooling
- Optimize queries with EXPLAIN ANALYZE
- Enable caching where appropriate

### Function Optimization

- Minimize cold starts
- Use edge caching
- Optimize bundle size
- Implement request batching

## Scaling

### Database

- Upgrade to larger instance (Supabase Dashboard)
- Add read replicas (paid plans)
- Implement connection pooling
- Use database indexes

### Functions

- Functions auto-scale with traffic
- Monitor invocation limits
- Optimize function code
- Use caching strategies

## Troubleshooting

### Common Issues

1. **Function not responding**
   - Check function logs
   - Verify environment variables
   - Test locally first

2. **Database connection errors**
   - Check connection string
   - Verify network access
   - Check RLS policies

3. **Authentication issues**
   - Verify API keys
   - Check auth provider settings
   - Review user permissions

### Debug Mode

```bash
# Run functions with debug output
supabase functions serve --debug
```

## Documentation

See parent directory for comprehensive documentation:
- `../SUPABASE_INTEGRATION.md` - Detailed Supabase setup
- `../ARCHITECTURE.md` - System architecture
- `../DEVELOPER_GUIDE.md` - Development guide

## Migration

### From Development to Production

1. Test all functions locally
2. Deploy functions to production
3. Set production secrets
4. Update frontend environment variables
5. Test end-to-end
6. Monitor logs and metrics

## Contributing

1. Test functions locally before deploying
2. Follow Deno best practices
3. Add error handling
4. Update documentation
5. Monitor performance impact

## Support

- Supabase Documentation: https://supabase.com/docs
- Supabase Discord: https://discord.supabase.com
- Deno Documentation: https://deno.land/manual

## License

Private - All rights reserved

---

**Version:** 1.0.0
**Last Updated:** February 2026
