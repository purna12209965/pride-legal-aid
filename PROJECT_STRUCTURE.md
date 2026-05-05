# Project Structure

## Overview

PrideJustice AI is organized into a clear frontend/backend separation for better maintainability, scalability, and development workflow.

## Directory Structure

```
pride-legal-aid/
│
├── frontend/                          # Frontend Application
│   ├── src/                          # Source code
│   │   ├── assets/                   # Images and static assets
│   │   │   ├── ai-assistant.jpg
│   │   │   ├── community.jpg
│   │   │   └── hero-bg.jpg
│   │   │
│   │   ├── components/               # React components
│   │   │   ├── ui/                  # shadcn/ui components (50+ files)
│   │   │   ├── AISection.tsx
│   │   │   ├── ChatBot.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── CommunitySection.tsx
│   │   │   ├── DashboardLayout.tsx
│   │   │   ├── DashboardSidebar.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── LawsSection.tsx
│   │   │   ├── NavLink.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── QuickAccessSection.tsx
│   │   │   ├── RightsSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   └── TerminologySection.tsx
│   │   │
│   │   ├── constants/                # Application constants
│   │   │   ├── chat.constants.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── data/                     # Static data and content
│   │   │   ├── casesData.ts         # 6 landmark legal cases
│   │   │   ├── communityData.ts     # 16+ organizations
│   │   │   ├── index.ts             # Data exports
│   │   │   ├── rightsData.ts        # 8 rights categories
│   │   │   ├── suggestedQuestions.ts
│   │   │   └── terminologyData.ts   # 20+ legal terms
│   │   │
│   │   ├── hooks/                    # Custom React hooks
│   │   │   ├── use-mobile.tsx
│   │   │   ├── use-toast.ts
│   │   │   └── useChat.ts
│   │   │
│   │   ├── integrations/             # Third-party integrations
│   │   │   └── supabase/
│   │   │       ├── client.ts        # Supabase client
│   │   │       └── types.ts         # Supabase types
│   │   │
│   │   ├── lib/                      # Utility functions
│   │   │   └── utils.ts
│   │   │
│   │   ├── pages/                    # Page components
│   │   │   ├── dashboard/           # Dashboard pages
│   │   │   │   ├── DashboardCases.tsx
│   │   │   │   ├── DashboardCommunity.tsx
│   │   │   │   ├── DashboardRights.tsx
│   │   │   │   └── DashboardTerminology.tsx
│   │   │   ├── ChatAssistant.tsx
│   │   │   ├── Index.tsx
│   │   │   ├── NotFound.tsx
│   │   │   └── Resources.tsx
│   │   │
│   │   ├── services/                 # API services
│   │   │   └── chat.service.ts
│   │   │
│   │   ├── test/                     # Test utilities
│   │   │   └── setup.ts
│   │   │
│   │   ├── types/                    # TypeScript types
│   │   │   ├── chat.types.ts
│   │   │   ├── index.ts
│   │   │   └── rights.types.ts
│   │   │
│   │   ├── App.css                   # App-specific styles
│   │   ├── App.tsx                   # Main app component
│   │   ├── index.css                 # Global styles
│   │   ├── main.tsx                  # Entry point
│   │   └── vite-env.d.ts            # Vite type definitions
│   │
│   ├── public/                       # Public assets
│   │   ├── favicon.ico
│   │   ├── placeholder.svg
│   │   └── robots.txt
│   │
│   ├── .env                          # Environment variables
│   ├── components.json               # shadcn/ui config
│   ├── eslint.config.js             # ESLint configuration
│   ├── index.html                    # HTML template
│   ├── package.json                  # Frontend dependencies
│   ├── postcss.config.js            # PostCSS configuration
│   ├── README.md                     # Frontend documentation
│   ├── tailwind.config.ts           # Tailwind configuration
│   ├── tsconfig.app.json            # TypeScript app config
│   ├── tsconfig.json                # TypeScript config
│   ├── tsconfig.node.json           # TypeScript node config
│   ├── vite.config.ts               # Vite configuration
│   └── vitest.config.ts             # Vitest configuration
│
├── backend/                          # Backend Infrastructure
│   ├── supabase/                    # Supabase configuration
│   │   ├── functions/               # Edge Functions
│   │   │   └── lgbtq-legal-chat/   # AI chat function
│   │   │       ├── index.ts        # Function handler
│   │   │       └── README.md       # Function docs
│   │   ├── config.toml             # Supabase config
│   │   └── README.md               # Supabase setup
│   │
│   ├── package.json                 # Backend scripts
│   └── README.md                    # Backend documentation
│
├── node_modules/                    # Dependencies (shared)
├── dist/                            # Build output (generated)
│
├── .env                             # Root environment variables
├── .gitignore                       # Git ignore rules
├── bun.lockb                        # Bun lock file
├── package-lock.json                # npm lock file
├── package.json                     # Root package.json
│
├── ARCHITECTURE.md                  # System architecture
├── CODEBASE_STRUCTURE.md           # Code organization
├── DASHBOARD_GUIDE.md              # Dashboard documentation
├── DEVELOPER_GUIDE.md              # Development guide
├── IMPLEMENTATION_SUMMARY.md       # Implementation details
├── PROJECT_STRUCTURE.md            # This file
├── README.md                        # Main README
└── SUPABASE_INTEGRATION.md         # Backend integration
```

## Key Directories Explained

### Frontend (`/frontend`)

The complete React application with all UI components, pages, and client-side logic.

**Key Subdirectories:**
- `src/components/` - Reusable React components
- `src/pages/` - Page-level components (routes)
- `src/data/` - Static data files with comprehensive legal information
- `src/services/` - API communication layer
- `src/hooks/` - Custom React hooks
- `src/types/` - TypeScript type definitions

### Backend (`/backend`)

Supabase infrastructure including database, authentication, and serverless functions.

**Key Subdirectories:**
- `supabase/functions/` - Deno Edge Functions
- `supabase/config.toml` - Supabase configuration

### Root Level

Configuration files and documentation that apply to the entire project.

## File Count Summary

### Frontend
- **Components:** 70+ files (including ui components)
- **Pages:** 8 files
- **Data Files:** 5 files
- **Hooks:** 3 files
- **Services:** 1 file
- **Types:** 3 files
- **Config Files:** 10+ files

### Backend
- **Functions:** 1 function (lgbtq-legal-chat)
- **Config Files:** 2 files

### Documentation
- **Root Docs:** 7 markdown files
- **Frontend Docs:** 1 README
- **Backend Docs:** 2 READMEs

## Data Files Detail

### `frontend/src/data/`

1. **rightsData.ts** (~1,200 lines)
   - 8 comprehensive rights categories
   - 50+ protections
   - 80+ applicable laws
   - Detailed guidance
   - 60+ resources

2. **casesData.ts** (~500 lines)
   - 6 landmark legal cases
   - Full case analysis
   - Background, decisions, impact
   - Key quotes
   - Related cases

3. **terminologyData.ts** (~600 lines)
   - 20+ legal terms
   - Definitions
   - Legal context
   - Examples
   - Related terms

4. **communityData.ts** (~400 lines)
   - 16+ organizations
   - Services offered
   - Contact information
   - Coverage areas

5. **suggestedQuestions.ts**
   - Chat suggestions
   - Common queries

## Component Organization

### Layout Components
- `DashboardLayout` - Dashboard wrapper
- `DashboardSidebar` - Navigation sidebar
- `Navbar` - Main navigation
- `Footer` - Site footer

### Section Components
- `HeroSection` - Landing hero
- `QuickAccessSection` - Navigation cards
- `FeaturesSection` - Platform features
- `StatsSection` - Impact statistics
- `FAQSection` - FAQ accordion
- `CTASection` - Call-to-action
- `AISection` - AI assistant info
- `RightsSection` - Rights overview
- `LawsSection` - Laws overview
- `TerminologySection` - Terms overview
- `CommunitySection` - Community info

### Page Components
- `Index` - Home page
- `ChatAssistant` - AI chat interface
- `Resources` - Resources directory
- `DashboardRights` - Rights dashboard
- `DashboardCases` - Cases dashboard
- `DashboardTerminology` - Terms dashboard
- `DashboardCommunity` - Community dashboard
- `NotFound` - 404 page

### UI Components (shadcn/ui)
50+ reusable UI components in `src/components/ui/`

## Configuration Files

### Frontend Configuration
- `vite.config.ts` - Vite build configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules
- `postcss.config.js` - PostCSS configuration
- `vitest.config.ts` - Test configuration
- `components.json` - shadcn/ui configuration

### Backend Configuration
- `supabase/config.toml` - Supabase project configuration

### Root Configuration
- `package.json` - Root scripts and dependencies
- `.gitignore` - Git ignore rules
- `.env` - Environment variables

## Build Output

### Development
- Frontend runs on `http://localhost:5173` (Vite dev server)
- Backend runs on `http://localhost:54321` (Supabase local)

### Production
- Frontend builds to `frontend/dist/`
- Backend deploys to Supabase cloud

## Dependencies

### Frontend Dependencies (50+)
- React ecosystem
- UI libraries (Radix UI, shadcn/ui)
- Routing (React Router)
- State management (TanStack Query)
- Styling (Tailwind CSS)
- Forms (React Hook Form, Zod)
- Icons (Lucide React)
- Backend client (Supabase JS)

### Backend Dependencies
- Supabase JS SDK
- Deno runtime (for functions)

## Development Workflow

### Frontend Development
1. Navigate to `frontend/`
2. Run `npm run dev`
3. Edit files in `src/`
4. Changes hot-reload automatically

### Backend Development
1. Navigate to `backend/`
2. Run `npm run start` (starts Supabase locally)
3. Edit functions in `supabase/functions/`
4. Test with `supabase functions serve`

### Full Stack Development
1. Start backend: `npm run supabase:start` (from root)
2. Start frontend: `npm run dev` (from root)
3. Both services run simultaneously

## Deployment Structure

### Frontend Deployment
- Build: `npm run build` (from frontend/)
- Output: `frontend/dist/`
- Deploy to: Vercel, Netlify, etc.

### Backend Deployment
- Deploy: `supabase functions deploy` (from backend/)
- Hosted on: Supabase cloud
- Automatic scaling

## Best Practices

### File Organization
- Group by feature/domain
- Keep related files together
- Use index files for exports
- Consistent naming conventions

### Code Structure
- Components in `components/`
- Pages in `pages/`
- Utilities in `lib/`
- Types in `types/`
- Data in `data/`

### Documentation
- README in each major directory
- Inline code comments
- Type definitions
- API documentation

## Migration Notes

### From Old Structure
The project was reorganized from a flat structure to frontend/backend separation:

**Moved to `frontend/`:**
- `src/` → `frontend/src/`
- `public/` → `frontend/public/`
- `index.html` → `frontend/index.html`
- All config files → `frontend/`

**Moved to `backend/`:**
- `supabase/` → `backend/supabase/`

**Benefits:**
- Clear separation of concerns
- Independent deployment
- Better scalability
- Easier maintenance
- Cleaner git history

---

**Last Updated:** February 2026
**Version:** 1.0.0
