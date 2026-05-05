# PrideJustice AI

An AI-powered legal aid platform providing comprehensive LGBTQ+ rights information, legal resources, and intelligent assistance.

## Project Structure

This project is organized into separate frontend and backend directories:

```
pride-legal-aid/
├── frontend/           # React + TypeScript frontend application
│   ├── src/           # Source code
│   ├── public/        # Static assets
│   └── README.md      # Frontend documentation
├── backend/           # Supabase backend infrastructure
│   ├── supabase/      # Supabase configuration and functions
│   └── README.md      # Backend documentation
├── docs/              # Project documentation
└── README.md          # This file
```

## Quick Start

### Prerequisites

- Node.js 18+ or Bun
- Supabase CLI (for backend development)
- npm, yarn, or bun

### Installation

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend && npm install

# Install backend dependencies (if needed)
cd ../backend && npm install
```

### Development

```bash
# Start frontend development server (from root)
npm run dev

# Or from frontend directory
cd frontend && npm run dev

# Start backend (Supabase) locally (from root)
npm run supabase:start

# Or from backend directory
cd backend && npm run start
```

### Build

```bash
# Build frontend for production (from root)
npm run build

# Or from frontend directory
cd frontend && npm run build
```

## Features

### User-Facing Features
- 🤖 AI-powered legal chat assistant
- 📚 Comprehensive LGBTQ+ rights information
- ⚖️ Landmark legal cases database
- 📖 Legal terminology glossary
- 🌐 Community resources directory
- 🆘 Crisis support information
- 📱 Responsive design for all devices

### Technical Features
- ⚡ Built with React 18 + TypeScript
- 🎨 Styled with Tailwind CSS + shadcn/ui
- 🔐 Supabase backend with authentication
- 🧠 OpenAI integration for AI chat
- 📊 Comprehensive data from legal sources
- ♿ Accessibility compliant
- 🚀 Performance optimized

## Documentation

Comprehensive documentation is available in the root directory:

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - System architecture and design
- **[CODEBASE_STRUCTURE.md](./CODEBASE_STRUCTURE.md)** - Code organization
- **[DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)** - Development setup and guidelines
- **[DASHBOARD_GUIDE.md](./DASHBOARD_GUIDE.md)** - Dashboard features and usage
- **[SUPABASE_INTEGRATION.md](./SUPABASE_INTEGRATION.md)** - Backend integration details
- **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** - Implementation overview

### Directory-Specific Documentation

- **[frontend/README.md](./frontend/README.md)** - Frontend setup and development
- **[backend/README.md](./backend/README.md)** - Backend setup and API documentation

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- TanStack Query
- Lucide React

### Backend
- Supabase (PostgreSQL)
- Deno Edge Functions
- OpenAI API
- Supabase Auth

## Available Scripts

### Root Level

```bash
npm run dev              # Start frontend dev server
npm run build            # Build frontend for production
npm run lint             # Run ESLint on frontend
npm run test             # Run frontend tests
npm run supabase:start   # Start Supabase locally
npm run supabase:stop    # Stop Supabase
npm run supabase:status  # Check Supabase status
```

### Frontend

```bash
cd frontend
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Run ESLint
npm run test             # Run tests
npm run test:watch       # Run tests in watch mode
```

### Backend

```bash
cd backend
npm run start            # Start Supabase locally
npm run stop             # Stop Supabase
npm run status           # Check status
npm run functions:serve  # Serve functions locally
npm run functions:deploy # Deploy functions
```

## Environment Variables

### Frontend (.env in frontend/)

```env
VITE_SUPABASE_PROJECT_ID=your_project_id
VITE_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
VITE_SUPABASE_URL=your_supabase_url
```

### Backend (Supabase Secrets)

```bash
# Set via Supabase CLI
supabase secrets set OPENAI_API_KEY=your_openai_key
```

## Deployment

### Frontend

Deploy to any static hosting platform:
- Vercel (recommended)
- Netlify
- Cloudflare Pages
- AWS Amplify

### Backend

Supabase is already hosted. Deploy functions:

```bash
cd backend
supabase functions deploy
```

## Project Highlights

### Comprehensive Data
- 8 rights categories with detailed legal information
- 6 landmark legal cases from US, India, UK
- 20+ legal terms with definitions and context
- 16+ LGBTQ+ organizations with contact info

### Dashboard System
- Your Rights - Legal protections and laws
- Legal Cases - Historic court decisions
- Terminology - Legal glossary
- Community - Support organizations

### AI Chat Assistant
- Powered by OpenAI
- Legal guidance and information
- Context-aware responses
- Suggested questions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Code Quality

- TypeScript for type safety
- ESLint for code quality
- Vitest for testing
- Consistent code style
- Comprehensive documentation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

For questions or support:
- Email: purnamarthala09@gmail.com
- Phone: +91 6302728567
- Instagram: @hey.purnaaaa

## License

Private - All rights reserved

## Acknowledgments

Built with care for the LGBTQ+ community to promote equality and access to justice.

---

**Version:** 1.0.0  
**Last Updated:** February 2026  
**Status:** Production Ready ✅
