# Developer Guide - PrideJustice AI

## Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git
- Code editor (VS Code recommended)

### Setup
```bash
# Clone repository
git clone <repository-url>
cd pride-legal-aid

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your Supabase credentials

# Start development server
npm run dev
```

## Project Overview

PrideJustice AI is a web platform providing LGBTQ+ legal information and AI-powered assistance.

**Tech Stack:**
- Frontend: React + TypeScript + Vite + Tailwind CSS
- Backend: Supabase Edge Functions (Deno)
- UI: shadcn/ui components
- Routing: React Router
- State: React hooks + TanStack Query

## Architecture Layers

### 1. Presentation Layer (Components)
**Location:** `src/components/`, `src/pages/`

**Responsibility:** UI rendering and user interaction

**Example:**
```typescript
// src/pages/ChatAssistant.tsx
import { useChat } from '@/hooks/useChat';

const ChatAssistant = () => {
  const { messages, sendMessage } = useChat();
  // Render UI
};
```

### 2. Business Logic Layer (Services)
**Location:** `src/services/`

**Responsibility:** API calls and data processing

**Example:**
```typescript
// src/services/chat.service.ts
export class ChatService {
  static async streamChat(messages, onContent, onError) {
    // Handle API communication
  }
}
```

### 3. State Management Layer (Hooks)
**Location:** `src/hooks/`

**Responsibility:** Reusable stateful logic

**Example:**
```typescript
// src/hooks/useChat.ts
export const useChat = () => {
  const [messages, setMessages] = useState([]);
  const sendMessage = useCallback(async (content) => {
    // Manage chat state
  }, []);
  return { messages, sendMessage };
};
```

### 4. Type Safety Layer (Types)
**Location:** `src/types/`

**Responsibility:** TypeScript definitions

**Example:**
```typescript
// src/types/chat.types.ts
export interface Message {
  role: "user" | "assistant";
  content: string;
}
```

### 5. Data Layer (Backend)
**Location:** `supabase/functions/`

**Responsibility:** Server-side logic

**Example:**
```typescript
// supabase/functions/lgbtq-legal-chat/index.ts
serve(async (req) => {
  // Handle chat requests
});
```

## Common Tasks

### Adding a New Page

1. Create page component:
```typescript
// src/pages/NewPage.tsx
const NewPage = () => {
  return <div>New Page</div>;
};
export default NewPage;
```

2. Add route:
```typescript
// src/App.tsx
<Route path="/new" element={<NewPage />} />
```

### Adding a New Service

1. Create service file:
```typescript
// src/services/new.service.ts
export class NewService {
  static async fetchData() {
    // Implementation
  }
}
```

2. Export from index:
```typescript
// src/services/index.ts
export * from './new.service';
```

### Adding a New Hook

1. Create hook file:
```typescript
// src/hooks/useNewFeature.ts
export const useNewFeature = () => {
  const [state, setState] = useState();
  // Logic
  return { state };
};
```

### Adding Types

1. Create type file:
```typescript
// src/types/new.types.ts
export interface NewType {
  id: string;
  name: string;
}
```

2. Export from index:
```typescript
// src/types/index.ts
export * from './new.types';
```

## Best Practices

### Component Design
```typescript
// ✅ Good: Small, focused component
const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

// ❌ Bad: Component doing too much
const MegaComponent = () => {
  // 500 lines of code
};
```

### State Management
```typescript
// ✅ Good: Use custom hooks
const { messages, sendMessage } = useChat();

// ❌ Bad: Duplicate logic in components
const [messages, setMessages] = useState([]);
// Repeated in multiple components
```

### Type Safety
```typescript
// ✅ Good: Strongly typed
interface Props {
  name: string;
  age: number;
}
const Component = ({ name, age }: Props) => {};

// ❌ Bad: Using 'any'
const Component = ({ name, age }: any) => {};
```

### Error Handling
```typescript
// ✅ Good: Proper error handling
try {
  await service.call();
} catch (error) {
  toast({ title: "Error", description: error.message });
}

// ❌ Bad: Silent failures
await service.call(); // No error handling
```

## Debugging

### Frontend Debugging
```typescript
// Use React DevTools
// Add console logs
console.log('State:', messages);

// Use debugger
debugger;
```

### Backend Debugging
```typescript
// Check Supabase logs
// Add console.error
console.error('Error:', error);
```

## Testing

### Unit Tests
```typescript
// src/services/__tests__/chat.service.test.ts
describe('ChatService', () => {
  it('should stream messages', async () => {
    // Test implementation
  });
});
```

### Component Tests
```typescript
// src/components/__tests__/Button.test.tsx
describe('Button', () => {
  it('should render', () => {
    render(<Button>Click</Button>);
  });
});
```

## Performance Optimization

### Code Splitting
```typescript
// Lazy load pages
const ChatAssistant = lazy(() => import('./pages/ChatAssistant'));
```

### Memoization
```typescript
// Memoize expensive calculations
const result = useMemo(() => expensiveCalc(), [deps]);

// Memoize callbacks
const callback = useCallback(() => {}, [deps]);
```

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy Frontend
```bash
# Deploy dist/ folder to hosting service
# (Vercel, Netlify, etc.)
```

### Deploy Backend
```bash
# Deploy Supabase functions
supabase functions deploy lgbtq-legal-chat
```

## Troubleshooting

### Common Issues

**Issue:** Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue:** Types not found
```bash
# Restart TypeScript server in VS Code
Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

**Issue:** Supabase function errors
```bash
# Check environment variables
# Check Supabase logs in dashboard
```

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

## Getting Help

1. Check documentation files
2. Review code comments
3. Check GitHub issues
4. Contact: purnamarthala09@gmail.com
