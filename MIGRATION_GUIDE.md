# Migration Guide: Frontend/Backend Separation

## Overview

This guide documents the restructuring of PrideJustice AI from a monolithic structure to a clear frontend/backend separation.

## What Changed

### Before (Old Structure)
```
pride-legal-aid/
├── src/              # Frontend code
├── public/           # Static assets
├── supabase/         # Backend code
├── index.html
├── vite.config.ts
└── ...config files
```

### After (New Structure)
```
pride-legal-aid/
├── frontend/         # All frontend code
│   ├── src/
│   ├── public/
│   ├── index.html
│   └── ...config files
├── backend/          # All backend code
│   └── supabase/
└── ...docs
```

## Files Moved

### To `frontend/`
- `src/` → `frontend/src/`
- `public/` → `frontend/public/`
- `index.html` → `frontend/index.html`
- `vite.config.ts` → `frontend/vite.config.ts`
- `tsconfig*.json` → `frontend/tsconfig*.json`
- `components.json` → `frontend/components.json`
- `postcss.config.js` → `frontend/postcss.config.js`
- `tailwind.config.ts` → `frontend/tailwind.config.ts`
- `.env` → `frontend/.env`

### To `backend/`
- `supabase/` → `backend/supabase/`

### Stayed in Root
- Documentation files (*.md)
- `package.json` (updated with new scripts)
- `package-lock.json`
- `bun.lockb`
- `.gitignore`
- `node_modules/` (shared)

## Updated Scripts

### Root `package.json`

**Before:**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

**After:**
```json
{
  "scripts": {
    "dev": "cd frontend && vite",
    "build": "cd frontend && vite build",
    "lint": "cd frontend && eslint .",
    "preview": "cd frontend && vite preview",
    "test": "cd frontend && vitest run",
    "test:watch": "cd frontend && vitest",
    "supabase:start": "cd backend && supabase start",
    "supabase:stop": "cd backend && supabase stop",
    "supabase:status": "cd backend && supabase status"
  }
}
```

## New Files Created

### Frontend
- `frontend/package.json` - Frontend-specific dependencies and scripts
- `frontend/README.md` - Frontend documentation

### Backend
- `backend/package.json` - Backend-specific scripts
- `backend/README.md` - Backend documentation

### Root
- `PROJECT_STRUCTURE.md` - Comprehensive structure documentation
- `MIGRATION_GUIDE.md` - This file

## How to Use the New Structure

### Development

#### Option 1: From Root Directory
```bash
# Start frontend
npm run dev

# Start backend
npm run supabase:start

# Run both in separate terminals
```

#### Option 2: From Subdirectories
```bash
# Terminal 1: Frontend
cd frontend
npm run dev

# Terminal 2: Backend
cd backend
npm run start
```

### Building

#### From Root
```bash
npm run build
```

#### From Frontend Directory
```bash
cd frontend
npm run build
```

### Testing

#### From Root
```bash
npm run test
```

#### From Frontend Directory
```bash
cd frontend
npm run test
```

## Environment Variables

### Before
Single `.env` file in root:
```env
VITE_SUPABASE_PROJECT_ID=...
VITE_SUPABASE_PUBLISHABLE_KEY=...
VITE_SUPABASE_URL=...
```

### After
`.env` file in `frontend/`:
```env
VITE_SUPABASE_PROJECT_ID=...
VITE_SUPABASE_PUBLISHABLE_KEY=...
VITE_SUPABASE_URL=...
```

**Note:** The root `.env` is kept for backward compatibility but frontend uses `frontend/.env`

## Import Paths

### No Changes Required!
All import paths remain the same because the internal structure of `src/` hasn't changed:

```typescript
// Still works exactly the same
import { Button } from '@/components/ui/button';
import { rightsData } from '@/data/rightsData';
import { supabase } from '@/integrations/supabase/client';
```

## Git Workflow

### Committing Changes

**Frontend changes:**
```bash
git add frontend/
git commit -m "feat: add new component"
```

**Backend changes:**
```bash
git add backend/
git commit -m "feat: add new function"
```

**Full stack changes:**
```bash
git add frontend/ backend/
git commit -m "feat: add new feature"
```

## Deployment

### Frontend Deployment

**Before:**
```bash
npm run build
# Deploy dist/ folder
```

**After:**
```bash
cd frontend
npm run build
# Deploy frontend/dist/ folder
```

Or from root:
```bash
npm run build
# Deploy frontend/dist/ folder
```

### Backend Deployment

**Before:**
```bash
supabase functions deploy
```

**After:**
```bash
cd backend
supabase functions deploy
```

Or from root:
```bash
npm run supabase:deploy  # If added to scripts
```

## CI/CD Updates

### GitHub Actions Example

**Before:**
```yaml
- name: Build
  run: npm run build
```

**After:**
```yaml
- name: Build Frontend
  run: |
    cd frontend
    npm install
    npm run build

- name: Deploy Backend
  run: |
    cd backend
    supabase functions deploy
```

## Benefits of New Structure

### 1. Clear Separation of Concerns
- Frontend code is isolated in `frontend/`
- Backend code is isolated in `backend/`
- No confusion about what belongs where

### 2. Independent Deployment
- Deploy frontend without touching backend
- Deploy backend without rebuilding frontend
- Different deployment strategies for each

### 3. Better Scalability
- Can add multiple frontends (web, mobile)
- Can add multiple backend services
- Easier to split into microservices later

### 4. Improved Developer Experience
- Clear mental model
- Easier onboarding
- Better IDE support
- Cleaner git history

### 5. Team Collaboration
- Frontend team works in `frontend/`
- Backend team works in `backend/`
- Less merge conflicts
- Clear ownership

## Troubleshooting

### Issue: "Cannot find module"

**Solution:** Make sure you're in the correct directory
```bash
# If running from root
npm run dev  # Automatically goes to frontend

# If running from frontend
cd frontend
npm run dev
```

### Issue: "Supabase not found"

**Solution:** Install Supabase CLI or run from backend
```bash
cd backend
npm run start
```

### Issue: "Environment variables not loaded"

**Solution:** Check `.env` location
```bash
# Should be in frontend/.env
ls frontend/.env
```

### Issue: "Build fails"

**Solution:** Install dependencies in frontend
```bash
cd frontend
npm install
npm run build
```

## Rollback Plan

If you need to rollback to the old structure:

```bash
# Move files back
mv frontend/src ./
mv frontend/public ./
mv frontend/index.html ./
mv frontend/vite.config.ts ./
mv frontend/tsconfig*.json ./
mv backend/supabase ./

# Restore old package.json scripts
# (Keep a backup of the old package.json)

# Remove new directories
rm -rf frontend backend
```

## Migration Checklist

- [x] Move frontend files to `frontend/`
- [x] Move backend files to `backend/`
- [x] Update root `package.json` scripts
- [x] Create `frontend/package.json`
- [x] Create `backend/package.json`
- [x] Copy `.env` to `frontend/.env`
- [x] Create `frontend/README.md`
- [x] Create `backend/README.md`
- [x] Update root `README.md`
- [x] Create `PROJECT_STRUCTURE.md`
- [x] Create `MIGRATION_GUIDE.md`
- [x] Test build process
- [x] Test development workflow
- [x] Update documentation

## Next Steps

1. **Update CI/CD pipelines** to use new structure
2. **Update deployment scripts** to reference new paths
3. **Inform team members** about the new structure
4. **Update any external documentation** or wikis
5. **Consider adding** workspace configuration (npm workspaces, yarn workspaces, or pnpm workspaces)

## Future Enhancements

### Potential Improvements

1. **Monorepo Tools**
   - Use npm workspaces
   - Use Turborepo for build caching
   - Use Nx for advanced monorepo features

2. **Shared Packages**
   - Create `packages/shared` for common code
   - Share types between frontend and backend
   - Share utilities and constants

3. **Multiple Frontends**
   - Add `frontend-mobile/` for React Native
   - Add `frontend-admin/` for admin panel
   - Share backend across all frontends

4. **Microservices**
   - Split backend into multiple services
   - Add `backend-auth/`, `backend-chat/`, etc.
   - Independent scaling and deployment

## Support

If you encounter issues with the new structure:

1. Check this migration guide
2. Review `PROJECT_STRUCTURE.md`
3. Check directory-specific READMEs
4. Create an issue with details

## Conclusion

The frontend/backend separation provides a solid foundation for future growth while maintaining all existing functionality. All features work exactly as before, just with better organization.

---

**Migration Date:** February 2026
**Version:** 1.0.0
**Status:** ✅ Complete
