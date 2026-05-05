# PrideJustice AI - Complete Codebase Structure

## 📁 Project Organization

### Frontend Structure

```
src/
├── assets/                     # Static media files
│   ├── ai-assistant.jpg       # AI section image
│   ├── community.jpg          # Community section image
│   └── hero-bg.jpg            # Hero background image
│
├── components/                 # React Components
│   ├── ui/                    # shadcn/ui components (50+ components)
│   │   ├── button.tsx
│   │   ├── dialog.tsx
│   │   ├── scroll-area.tsx
│   │   └── ... (other UI components)
│   │
│   ├── AISection.tsx          # AI Assistant showcase section
│   ├── ChatBot.tsx            # Floating chat button
│   ├── CommunitySection.tsx   # Community information section
│   ├── Footer.tsx             # Site footer with links
│   ├── HeroSection.tsx        # Landing page hero
│   ├── LawsSection.tsx        # Legal precedents section
│   ├── Navbar.tsx             # Navigation bar
│   ├── NavLink.tsx            # Navigation link component
│   ├── RightsSection.tsx      # LGBTQ+ rights information
│   └── TerminologySection.tsx # Legal terminology guide
│
├── constants/                  # Application Constants
│   ├── chat.constants.ts      # Chat configuration
│   └── index.ts               # Constants barrel export
│
├── data/                       # Static Data
│   ├── suggestedQuestions.ts  # Pre-defined chat prompts
│   └── index.ts               # Data barrel export
│
├── hooks/                      # Custom React Hooks
│   ├── useChat.ts             # Chat state management
│   ├── use-mobile.tsx         # Mobile detection
│   └── use-toast.ts           # Toast notifications
│
├── integrations/               # Third-party Integrations
│   └── supabase/
│       ├── client.ts          # Supabase client setup
│       └── types.ts           # Supabase type definitions
│
├── lib/                        # Utility Functions
│   └── utils.ts               # Helper functions (cn, etc.)
│
├── pages/                      # Page Components (Routes)
│   ├── ChatAssistant.tsx      # Full-page chat interface
│   ├── Index.tsx              # Home page
│   └── NotFound.tsx           # 404 page
│
├── services/                   # Business Logic Layer
│   ├── chat.service.ts        # Chat API communication
│   └── index.ts               # Services barrel export
│
├── test/                       # Test Files
│   ├── example.test.ts        # Example test
│   └── setup.ts               # Test configuration
│
├── types/                      # TypeScript Definitions
│   ├── chat.types.ts          # Chat interfaces
│   ├── rights.types.ts        # Rights/laws interfaces
│   └── index.ts               # Types barrel export
│
├── App.css                     # App-specific styles
├── App.tsx                     # Main app component with routing
├── index.css                   # Global styles & Tailwind
├── main.tsx                    # React entry point
└── vite-env.d.ts              # Vite type definitions
```

### Backend Structure

```
supabase/
├── functions/                  # Edge Functions
│   └── lgbtq-legal-chat/
│       └── index.ts           # AI chat endpoint
│
├── config.toml                # Supabase configuration
└── README.md                  # Backend documentation
```

### Configuration Files

```
pride-legal-aid/
├── .env                       # Environment variables
├── .gitignore                 # Git ignore rules
├── components.json            # shadcn/ui config
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML entry point
├── package.json               # Dependencies & scripts
├── package-lock.json          # Dependency lock file
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.ts         # Tailwind CSS config
├── tsconfig.json              # TypeScript config
├── tsconfig.app.json          # App TypeScript config
├── tsconfig.node.json         # Node TypeScript config
├── vite.config.ts             # Vite configuration
├── vitest.config.ts           # Vitest test config
├── README.md                  # Project documentation
├── ARCHITECTURE.md            # Architecture guide
└── CODEBASE_STRUCTURE.md      # This file
```

## 🔄 Data Flow

### Chat Interaction Flow
```
User Types Message
    ↓
ChatAssistant.tsx (UI)
    ↓
useChat Hook (State Management)
    ↓
ChatService.streamChat() (API Layer)
    ↓
Supabase Edge Function
    ↓
AI Gateway API
    ↓
Stream Response Back
    ↓
Update UI in Real-time
```

### Navigation Flow
```
App.tsx (Router)
    ├── / → Index.tsx (Home)
    ├── /chat → ChatAssistant.tsx
    └── * → NotFound.tsx
```

## 🎯 Key Features by Module

### Frontend Modules

#### 1. Components
- **Purpose**: Reusable UI building blocks
- **Pattern**: Composition and single responsibility
- **Examples**: Navbar, Footer, HeroSection

#### 2. Pages
- **Purpose**: Route-level components
- **Pattern**: Container components
- **Examples**: Index, ChatAssistant, NotFound

#### 3. Services
- **Purpose**: API communication and business logic
- **Pattern**: Service layer pattern
- **Key**: Separates data fetching from UI

#### 4. Hooks
- **Purpose**: Reusable stateful logic
- **Pattern**: Custom React hooks
- **Examples**: useChat, use-toast

#### 5. Types
- **Purpose**: TypeScript type safety
- **Pattern**: Interface-based typing
- **Coverage**: All data structures

#### 6. Constants
- **Purpose**: Configuration values
- **Pattern**: Centralized constants
- **Examples**: Error messages, config

#### 7. Data
- **Purpose**: Static application data
- **Pattern**: Exported constants
- **Examples**: Suggested questions

### Backend Modules

#### Edge Functions
- **Purpose**: Serverless API endpoints
- **Runtime**: Deno
- **Features**: Streaming, error handling, CORS

## 📦 Dependencies

### Core Dependencies
- `react` - UI library
- `react-dom` - React DOM rendering
- `react-router-dom` - Routing
- `typescript` - Type safety

### UI & Styling
- `tailwindcss` - Utility-first CSS
- `@radix-ui/*` - Headless UI components
- `lucide-react` - Icon library
- `class-variance-authority` - Component variants

### Data & State
- `@tanstack/react-query` - Data fetching
- `react-markdown` - Markdown rendering

### Backend
- `@supabase/supabase-js` - Supabase client

### Development
- `vite` - Build tool
- `vitest` - Testing framework
- `eslint` - Linting
- `typescript` - Type checking

## 🔐 Environment Variables

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

## 🚀 Scripts

```json
{
  "dev": "vite",                    // Start dev server
  "build": "tsc && vite build",     // Production build
  "preview": "vite preview",        // Preview build
  "lint": "eslint .",               // Run linter
  "test": "vitest"                  // Run tests
}
```

## 📝 Coding Standards

### File Naming
- Components: PascalCase (e.g., `ChatBot.tsx`)
- Hooks: camelCase with 'use' prefix (e.g., `useChat.ts`)
- Services: camelCase with '.service' suffix (e.g., `chat.service.ts`)
- Types: camelCase with '.types' suffix (e.g., `chat.types.ts`)

### Import Organization
1. External libraries
2. Internal modules (services, hooks, types)
3. Components
4. Assets
5. Styles

### Component Structure
```typescript
// 1. Imports
// 2. Types/Interfaces
// 3. Constants
// 4. Component
// 5. Export
```

## 🧪 Testing Strategy

- Unit tests for services
- Component tests for UI
- Integration tests for flows
- E2E tests for critical paths

## 📚 Documentation

- `README.md` - Getting started guide
- `ARCHITECTURE.md` - System architecture
- `CODEBASE_STRUCTURE.md` - This file
- `supabase/README.md` - Backend documentation
- Inline code comments for complex logic

## 🔧 Maintenance

### Adding New Features
1. Create types in `src/types/`
2. Add service in `src/services/`
3. Create hook if needed in `src/hooks/`
4. Build component in `src/components/`
5. Add page if needed in `src/pages/`
6. Update routing in `App.tsx`

### Code Review Checklist
- [ ] TypeScript types defined
- [ ] Error handling implemented
- [ ] Responsive design verified
- [ ] Accessibility checked
- [ ] Performance optimized
- [ ] Documentation updated
