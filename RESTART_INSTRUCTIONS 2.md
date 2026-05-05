# How to Restart Chatbot with New Changes

## The Problem
Your browser is caching the old version of the chatbot code. That's why you're seeing the same responses.

## Solution - Follow These Steps:

### Step 1: Stop Dev Server
If your dev server is running, stop it:
- Press `Ctrl+C` in the terminal

### Step 2: Clear Browser Cache
**Option A - Hard Refresh (Easiest):**
- Mac: `Cmd + Shift + R`
- Windows/Linux: `Ctrl + Shift + R`

**Option B - Clear Cache Completely:**
- Open browser DevTools (F12)
- Right-click the refresh button
- Select "Empty Cache and Hard Reload"

**Option C - Incognito/Private Window:**
- Open a new incognito/private window
- This ensures no cache is used

### Step 3: Restart Dev Server
```bash
cd pride-legal-aid/frontend
npm run dev
```

### Step 4: Test in Browser
1. Go to `http://localhost:8080/chat`
2. Clear any existing chat (click "New Chat" button)
3. Try these test questions:

**Test Questions:**
- "Police refuse to file my case" → Should get police refusal info
- "What is Section 377" → Should get Section 377 info  
- "Transgender rights" → Should get transgender rights info
- "Can I marry my partner" → Should get marriage status info
- "I was fired for being gay" → Should get employment rights info

### Step 5: Verify Different Responses
Each question should give you a DIFFERENT response now!

## If Still Not Working:

### Check Console for Errors:
1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for any red errors
4. Share the errors with me

### Verify File Changes:
```bash
cd pride-legal-aid/frontend/src/data
cat chatbotKnowledge.ts | grep "category:"
```

You should see these categories:
- police_refusal
- section_377
- transgender_rights
- marriage
- employment
- housing
- healthcare
- family
- general_rights
- general

## Quick Test Command:
```bash
cd pride-legal-aid
node test-chatbot.js
```

This will show you if the matching logic is working correctly.

## Expected Behavior:

✅ **Correct:**
- "Police refuse" → Police refusal remedies
- "Section 377" → Section 377 information
- "Transgender" → Transgender rights
- "Marriage" → Marriage status
- "Fired" → Employment rights

❌ **Wrong (Old Behavior):**
- All questions → Same "Hello" response

---

**After following these steps, your chatbot should work correctly with different responses for different questions!**
