# Dashboard Guide

## Overview

The PrideJustice AI Dashboard provides comprehensive access to LGBTQ+ legal information, resources, and community support. The dashboard features a collapsible sidebar navigation and multiple specialized pages with detailed, real-world data.

## Dashboard Structure

### Layout Components

#### DashboardLayout (`src/components/DashboardLayout.tsx`)
- Wrapper component that provides consistent layout across all dashboard pages
- Integrates the DashboardSidebar
- Provides main content area with proper spacing and responsive design

#### DashboardSidebar (`src/components/DashboardSidebar.tsx`)
- Collapsible sidebar navigation
- Navigation items:
  - Home (/)
  - AI Assistant (/chat)
  - Your Rights (/dashboard/rights)
  - Legal Cases (/dashboard/cases)
  - Terminology (/dashboard/terminology)
  - Resources (/resources)
  - Community (/dashboard/community)
- Responsive design with mobile support
- Active route highlighting

### Dashboard Pages

#### 1. Your Rights (`/dashboard/rights`)
**File:** `src/pages/dashboard/DashboardRights.tsx`
**Data:** `src/data/rightsData.ts`

Displays comprehensive information about LGBTQ+ rights across 8 categories:
- Anti-Discrimination
- Marriage Equality
- Housing Rights
- Employment Protection
- Family Rights
- Healthcare Access
- Education Rights
- Medical Decision-Making

**Features:**
- Grid layout with color-coded cards
- Click to view detailed modal with:
  - Overview
  - Protections list
  - Applicable laws
  - What to do if rights are violated
  - Resources and organizations
- Fully sourced from legal databases and government websites

#### 2. Legal Cases (`/dashboard/cases`)
**File:** `src/pages/dashboard/DashboardCases.tsx`
**Data:** `src/data/casesData.ts`

Showcases landmark LGBTQ+ legal cases from around the world:
- Obergefell v. Hodges (US, 2015) - Marriage Equality
- Navtej Singh Johar v. Union of India (India, 2018) - Decriminalization
- NALSA v. Union of India (India, 2014) - Transgender Rights
- Bostock v. Clayton County (US, 2020) - Employment Discrimination
- Lawrence v. Texas (US, 2003) - Privacy & Decriminalization
- Supriyo v. Union of India (India, 2023) - Marriage & Civil Unions

**Features:**
- Case cards with year, jurisdiction, and category badges
- Detailed modal view with:
  - Background
  - Legal question
  - Court decision
  - Impact analysis
  - Key quotes from judges
  - Significance
  - Related cases
- Comprehensive legal analysis

#### 3. Legal Terminology (`/dashboard/terminology`)
**File:** `src/pages/dashboard/DashboardTerminology.tsx`
**Data:** `src/data/terminologyData.ts`

Educational resource covering 20+ essential LGBTQ+ legal terms:
- Sexual Orientation
- Gender Identity
- Transgender
- Gender Expression
- Marriage Equality
- Protected Class
- Title VII
- Section 377 IPC
- Gender-Affirming Care
- Conversion Therapy
- Hate Crime
- And more...

**Features:**
- Search functionality to filter terms
- Grid layout for easy browsing
- Detailed modal with:
  - Definition
  - Real-world example
  - Legal context
  - Related terms (clickable to navigate)
- Interconnected terminology navigation

#### 4. Community Resources (`/dashboard/community`)
**File:** `src/pages/dashboard/DashboardCommunity.tsx`
**Data:** `src/data/communityData.ts`

Directory of 16+ LGBTQ+ organizations and support networks:
- Lambda Legal (US)
- Human Rights Campaign (US)
- The Trevor Project (US)
- PFLAG (US)
- National Center for Transgender Equality (US)
- GLSEN (US)
- Humsafar Trust (India)
- Lawyers Collective (India)
- Naz Foundation (India)
- Stonewall UK
- And more...

**Features:**
- Category badges for easy filtering
- Organization cards with coverage area
- Detailed modal with:
  - Services offered
  - Contact information (website, phone, email, address)
  - Direct links to websites
  - Call/email buttons
- International coverage (US, India, UK, International)

## Data Architecture

### Data Files Location
All data files are located in `src/data/`:
- `rightsData.ts` - Rights information
- `casesData.ts` - Legal cases
- `terminologyData.ts` - Legal terminology
- `communityData.ts` - Community resources
- `suggestedQuestions.ts` - Chat suggestions
- `index.ts` - Central export point

### Type Definitions
Type definitions are in `src/types/`:
- `rights.types.ts` - RightDetail, LawDetail, TerminologyItem
- `chat.types.ts` - Chat-related types
- `index.ts` - Central export point

### Data Sources
All data is sourced from:
- Legal databases and court records
- Government websites (EEOC, HUD, etc.)
- LGBTQ+ advocacy organizations
- International human rights frameworks
- Academic legal research
- Official organization websites

## Navigation Flow

### Entry Points to Dashboard
1. **From Home Page:**
   - "Explore Legal Assistant" button → `/chat` (with dashboard sidebar)
   - Quick Access cards → Various dashboard pages

2. **From Navbar:**
   - "Chat Assistant" → `/chat`
   - "Resources" → `/resources`

3. **Within Dashboard:**
   - Sidebar navigation between all dashboard pages
   - Seamless navigation without leaving dashboard context

### Route Structure
```
/                           → Home page
/chat                       → AI Assistant (with dashboard)
/resources                  → Resources page
/dashboard/rights           → Your Rights
/dashboard/cases            → Legal Cases
/dashboard/terminology      → Terminology
/dashboard/community        → Community Resources
```

## Responsive Design

### Desktop (≥1024px)
- Full sidebar visible
- Multi-column grid layouts (2-3 columns)
- Expanded modal views

### Tablet (768px - 1023px)
- Collapsible sidebar
- 2-column grid layouts
- Responsive modals

### Mobile (<768px)
- Hamburger menu for sidebar
- Single column layouts
- Full-screen modals
- Touch-optimized interactions

## UI Components Used

### shadcn/ui Components
- Dialog - Modal overlays
- ScrollArea - Scrollable content
- Badge - Category and status indicators
- Button - Interactive elements
- Input - Search functionality
- Card - Content containers

### Custom Components
- DashboardLayout - Layout wrapper
- DashboardSidebar - Navigation sidebar
- Gradient borders and hover effects
- Color-coded category system

## Color System

### Pride Colors
Each category uses pride flag colors:
- Red (`pride-red`) - Anti-Discrimination, Legal Advocacy
- Orange (`pride-orange`) - Marriage Equality, Advocacy
- Yellow (`pride-yellow`) - Housing Rights, Crisis Support
- Green (`pride-green`) - Employment, Family Support
- Blue (`pride-blue`) - Family Rights, Transgender Rights
- Purple (`pride-purple`) - Healthcare, Education

## Future Enhancements

### Potential Additions
1. **Bookmarking System** - Save favorite resources
2. **Print/Export** - Generate PDF reports
3. **Multi-language Support** - Translations
4. **User Accounts** - Personalized experience
5. **Interactive Timeline** - Legal history visualization
6. **State/Country Filters** - Location-specific information
7. **News Feed** - Latest LGBTQ+ legal developments
8. **Discussion Forums** - Community engagement

### Data Expansion
1. More international cases and laws
2. State-by-state breakdowns (US)
3. Historical legal timeline
4. Video resources and webinars
5. Downloadable guides and templates
6. Legal form templates

## Maintenance

### Updating Data
1. Edit relevant data file in `src/data/`
2. Follow existing data structure
3. Ensure all required fields are populated
4. Test in development environment
5. Verify no TypeScript errors

### Adding New Categories
1. Update data file with new entries
2. Ensure color scheme consistency
3. Update type definitions if needed
4. Test responsive layouts
5. Update documentation

## Accessibility

### Features
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management in modals
- Color contrast compliance
- Screen reader friendly

### Best Practices
- Use descriptive link text
- Provide alt text for icons
- Maintain logical tab order
- Ensure modal focus trapping
- Support keyboard shortcuts

## Performance

### Optimization Strategies
- Lazy loading of modal content
- Efficient search filtering
- Optimized re-renders with React
- Code splitting by route
- Minimal bundle size

### Loading States
- Skeleton loaders for data
- Smooth transitions
- Progressive enhancement
- Error boundaries

## Testing Recommendations

### Manual Testing
1. Navigate through all dashboard pages
2. Test search functionality
3. Verify modal interactions
4. Check responsive layouts
5. Test all external links
6. Verify data accuracy

### Automated Testing
1. Component unit tests
2. Integration tests for navigation
3. E2E tests for user flows
4. Accessibility audits
5. Performance benchmarks

## Support and Resources

### Documentation
- ARCHITECTURE.md - Overall architecture
- CODEBASE_STRUCTURE.md - Code organization
- DEVELOPER_GUIDE.md - Development setup
- SUPABASE_INTEGRATION.md - Backend integration

### External Resources
- React Router documentation
- shadcn/ui component library
- Tailwind CSS documentation
- TypeScript handbook

---

**Last Updated:** February 2026
**Version:** 1.0.0
