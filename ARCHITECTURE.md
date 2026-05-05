# PrideJustice AI - Architecture Documentation

## Project Structure

This document outlines the complete architecture and organization of the PrideJustice AI codebase.

## Directory Structure

```
pride-legal-aid/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
│
├── src/                    # Source code
│   ├── assets/            # Images and media files
│   ├── components/        # React components
│   ├── constants/         # Application constants
│   ├── data/             # Static data files
│   ├── hooks/            # Custom React hooks
│   ├── integrations/     # Third-party integrations
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── services/         # API and business logic
│   ├── types/            # TypeScript type definitions
│   └── test/             # Test files
│
├── supabase/              # Backend (Supabase Edge Functions)
│   └── functions/
│       └── lgbtq-legal-chat/
│
└── Configuration files
```

## Frontend Architecture

### 1. Components (`src/components/`)
Reusable UI components organized by feature:

- **Layout Components**: Navbar, Footer
- **Section Components**: HeroSection, RightsSection, TerminologySection, LawsSection, AISection, CommunitySection
- **Feature Components**: ChatBot
- **UI Components** (`ui/`): Reusable shadcn/ui components

### 2. Pages (`src/pages/`)
Top-level route components:
- `Index.tsx` - Home page with all sections
- `ChatAssistant.tsx` - Full-page chat interface
- `NotFound.tsx` - 404 error page

### 3. Services (`src/services/`)
Business logic and API communication:
- `chat.service.ts` - Handles chat API requests and streaming

### 4. Hooks (`src/hooks/`)
Custom React hooks for reusable logic:
- `useChat.ts` - Chat state management
- `use-toast.ts` - Toast notifications
- `use-mobile.tsx` - Mobile detection

### 5. Types (`src/types/`)
TypeScript type definitions:
- `chat.types.ts` - Chat-related interfaces
- `rights.types.ts` - Rights and laws interfaces
- `index.ts` - Central export

### 6. Constants (`src/constants/`)
Application-wide constants:
- `chat.constants.ts` - Chat configuration and messages

### 7. Data (`src/data/`)
Static data files:
- `suggestedQuestions.ts` - Pre-defined chat questions

### 8. Integrations (`src/integrations/`)
Third-party service integrations:
- `supabase/` - Supabase client and types

### 9. Lib (`src/lib/`)
Utility functions:
- `utils.ts` - Helper functions (cn, etc.)

## Backend Architecture

### Supabase Edge Functions (`supabase/functions/`)

#### lgbtq-legal-chat
AI chat endpoint that:
- Receives user messages
- Streams responses from AI gateway
- Handles rate limiting and errors
- Implements CORS headers

**Environment Variables:**
- `LOVABLE_API_KEY` - API key for AI gateway

## Data Flow

### Chat Flow
```
User Input → ChatAssistant Page → useChat Hook → ChatService → Supabase Function → AI Gateway → Stream Response
```

### Component Communication
```
App.tsx (Router)
  ├── Index.tsx (Home)
  │   ├── Navbar
  │   ├── HeroSection
  │   ├── RightsSection
  │   ├── TerminologySection
  │   ├── LawsSection
  │   ├── AISection
  │   ├── CommunitySection
  │   ├── Footer
  │   └── ChatBot (Floating Button)
  │
  └── ChatAssistant.tsx (Chat Page)
      └── useChat Hook → ChatService
```

## Key Technologies

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **React Router** - Routing
- **TanStack Query** - Data fetching

### Backend
- **Supabase** - Backend platform
- **Deno** - Edge function runtime
- **AI Gateway** - LLM integration

## Design Patterns

### 1. Service Layer Pattern
Separates business logic from UI components
- Services handle API calls
- Components focus on presentation

### 2. Custom Hooks Pattern
Encapsulates reusable stateful logic
- `useChat` - Chat state management
- Promotes code reuse

### 3. Component Composition
Small, focused components
- Single responsibility
- Easy to test and maintain

### 4. Type Safety
Strong TypeScript typing throughout
- Interfaces for all data structures
- Type-safe API calls

## Environment Variables

### Required
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
```

## Build & Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Testing
```bash
npm test
```

## Code Organization Principles

1. **Separation of Concerns**: Frontend and backend clearly separated
2. **DRY (Don't Repeat Yourself)**: Reusable components and hooks
3. **Type Safety**: TypeScript for all code
4. **Modularity**: Small, focused modules
5. **Scalability**: Easy to add new features
6. **Maintainability**: Clear structure and documentation

## Future Enhancements

- Add unit tests for services
- Implement error boundaries
- Add analytics tracking
- Implement caching strategy
- Add internationalization (i18n)
- Progressive Web App (PWA) support
