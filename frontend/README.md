# PrideJustice AI - Frontend

## Overview

This is the frontend application for PrideJustice AI, an LGBTQ+ legal aid platform built with React, TypeScript, and Vite.

## Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Routing:** React Router v6
- **State Management:** TanStack Query
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod

## Project Structure

```
frontend/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   └── ...         # Custom components
│   ├── constants/       # Application constants
│   ├── data/           # Static data and content
│   │   ├── rightsData.ts
│   │   ├── casesData.ts
│   │   ├── terminologyData.ts
│   │   └── communityData.ts
│   ├── hooks/          # Custom React hooks
│   ├── integrations/   # Third-party integrations
│   │   └── supabase/   # Supabase client
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   │   └── dashboard/  # Dashboard pages
│   ├── services/       # API services
│   ├── types/          # TypeScript types
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Public assets
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun

### Installation

```bash
# Install dependencies
npm install
# or
bun install
```

### Environment Variables

Create a `.env` file in the frontend directory:

```env
VITE_SUPABASE_PROJECT_ID=your_project_id
VITE_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
VITE_SUPABASE_URL=your_supabase_url
```

### Development

```bash
# Start development server
npm run dev
# or
bun dev

# The app will be available at http://localhost:5173
```

### Build

```bash
# Build for production
npm run build
# or
bun run build

# Preview production build
npm run preview
# or
bun preview
```

### Testing

```bash
# Run tests
npm run test
# or
bun test

# Run tests in watch mode
npm run test:watch
# or
bun test:watch
```

### Linting

```bash
# Run ESLint
npm run lint
# or
bun lint
```

## Features

### Pages

1. **Home** (`/`) - Landing page with hero, features, stats, FAQ
2. **Chat Assistant** (`/chat`) - AI-powered legal chat interface
3. **Resources** (`/resources`) - Crisis support and legal aid organizations
4. **Dashboard**
   - Your Rights (`/dashboard/rights`) - LGBTQ+ rights information
   - Legal Cases (`/dashboard/cases`) - Landmark legal cases
   - Terminology (`/dashboard/terminology`) - Legal terms glossary
   - Community (`/dashboard/community`) - Community resources

### Key Components

- **DashboardLayout** - Consistent layout with sidebar
- **DashboardSidebar** - Collapsible navigation
- **ChatBot** - Floating chat button
- **HeroSection** - Landing page hero
- **QuickAccessSection** - Navigation cards
- **FeaturesSection** - Platform features
- **StatsSection** - Impact statistics
- **FAQSection** - Frequently asked questions

### Data Files

All comprehensive data is located in `src/data/`:
- `rightsData.ts` - 8 rights categories with detailed information
- `casesData.ts` - 6 landmark legal cases
- `terminologyData.ts` - 20+ legal terms
- `communityData.ts` - 16+ organizations

## Styling

### Tailwind CSS

Custom theme configuration in `tailwind.config.ts`:
- Pride color palette (red, orange, yellow, green, blue, purple, pink)
- Custom animations
- Typography plugin
- Dark mode support

### CSS Variables

Global CSS variables in `src/index.css`:
- Color scheme
- Border radius
- Spacing
- Animations

## API Integration

### Supabase

Client configuration in `src/integrations/supabase/client.ts`:
- Authentication
- Database queries
- Edge Functions

### Services

API services in `src/services/`:
- `chat.service.ts` - Chat API calls

## Routing

Routes configured in `src/App.tsx`:
- Home route
- Chat route
- Resources route
- Dashboard routes (rights, cases, terminology, community)
- 404 Not Found

## Type Safety

TypeScript types in `src/types/`:
- `chat.types.ts` - Chat-related types
- `rights.types.ts` - Rights, cases, terminology types

## Performance

- Code splitting by route
- Lazy loading of components
- Optimized bundle size
- Image optimization
- CSS purging in production

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management
- Screen reader support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Build Output

Production build creates optimized files in `dist/`:
- Minified JavaScript
- Optimized CSS
- Compressed assets

### Deployment Platforms

Compatible with:
- Vercel
- Netlify
- Cloudflare Pages
- AWS Amplify
- Any static hosting

## Documentation

See parent directory for comprehensive documentation:
- `../ARCHITECTURE.md` - System architecture
- `../CODEBASE_STRUCTURE.md` - Code organization
- `../DEVELOPER_GUIDE.md` - Development guide
- `../DASHBOARD_GUIDE.md` - Dashboard features
- `../IMPLEMENTATION_SUMMARY.md` - Implementation details

## Contributing

1. Follow the existing code style
2. Write TypeScript with proper types
3. Add tests for new features
4. Update documentation
5. Ensure no linting errors

## License

Private - All rights reserved

---

**Version:** 1.0.0
**Last Updated:** February 2026
