# Chatbot Testing Guide - Improved Keyword Matching

## What Was Fixed

### Problem:
- Chatbot was returning the same default "Hello" response for every question
- Keyword matching was hitting the default response first

### Solution:
1. **Improved Matching Algorithm:**
   - Now scores all knowledge entries based on keyword matches
   - Longer, more specific keywords get higher scores
   - Skips default response during scoring
   - Returns highest scoring match

2. **Expanded Keywords:**
   - Added many more keyword variations for each topic
   - More natural language patterns
   - Better coverage of user questions

## Test These Questions

### Police Refusal (Should work now):
- "Police refuse to file my case"
- "Police station not taking my complaint"
- "How to file FIR when police refuse"
- "Police rejected my complaint"
- "What is Zero FIR"
- "Section 156(3) CrPC"

**Expected**: Detailed response about police refusal remedies, Section 156(3), Section 200, legal aid contacts

### Section 377:
- "Is homosexuality illegal in India"
- "What is Section 377"
- "Navtej Singh Johar case"
- "Can I be arrested for being gay"

**Expected**: Information about Section 377 decriminalization, Navtej Singh Johar judgment

### Transgender Rights:
- "What are transgender rights"
- "How to get gender identity certificate"
- "NALSA judgment"
- "Transgender Act 2019"
- "Third gender recognition"

**Expected**: Comprehensive transgender rights information, NALSA judgment details

### Same-Sex Marriage:
- "Can I marry my same-sex partner"
- "Is gay marriage legal in India"
- "Supriyo case"
- "Marriage equality"

**Expected**: Current status of same-sex marriage, Supriyo judgment, rights as queer couple

### Workplace Discrimination:
- "I was fired for being gay"
- "Workplace discrimination"
- "Boss is harassing me"
- "Employment rights for LGBTQ"

**Expected**: Employment rights, how to file complaints, legal protections

### Housing:
- "Landlord refused to rent to me"
- "Housing discrimination"
- "Can landlord evict me for being gay"

**Expected**: Housing rights, landlord discrimination remedies

### Healthcare:
- "Doctor refused to treat me"
- "Hospital discrimination"
- "Healthcare rights for transgender"

**Expected**: Healthcare rights, how to file complaints against doctors

### Family Issues:
- "My parents don't accept me"
- "Family is forcing me to marry"
- "Coming out to family"
- "Family violence"

**Expected**: Legal rights, safety planning, crisis helplines

### General Rights:
- "What are my LGBTQ rights"
- "My rights in India"
- "Constitutional protections"

**Expected**: Overview of fundamental rights, constitutional protections

### Default Response (for unmatched questions):
- "Hello"
- "Hi"
- "Help"
- "What can you do"

**Expected**: Welcome message with capabilities overview

## How the Scoring Works

Example: User asks "Police refuse to file my FIR"

1. **Keyword Matching:**
   - "police refuse" (13 chars) = 13 points
   - "fir" (3 chars) = 3 points
   - Total score: 16 points

2. **Comparison:**
   - Police refusal entry: 16 points ✅ (Winner)
   - Other entries: 0 points
   - Default entry: Skipped during scoring

3. **Result:**
   - Returns police refusal response

## Testing Steps

1. **Start dev server:**
```bash
cd pride-legal-aid/frontend
npm run dev
```

2. **Open browser:** `http://localhost:8080/chat`

3. **Test each category** with the questions above

4. **Verify:**
   - Each question gets the correct category response
   - No more default responses for specific questions
   - Typing effect works smoothly

## Expected Behavior

✅ **Correct:**
- Different questions get different responses
- Responses match the topic asked
- Specific legal guidance provided

❌ **Incorrect (Old Behavior):**
- All questions get same "Hello" response
- No topic-specific information

## If Still Having Issues

1. **Clear browser cache:**
   - Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

2. **Check console for errors:**
   - Open browser DevTools (F12)
   - Look for JavaScript errors

3. **Verify build:**
```bash
cd pride-legal-aid/frontend
npm run build
```

4. **Restart dev server:**
```bash
npm run dev
```

## Adding New Topics

To add new topics, edit `frontend/src/data/chatbotKnowledge.ts`:

```typescript
{
  keywords: ['keyword1', 'keyword2', 'longer specific keyword'],
  category: 'unique_category_name',
  response: `Your detailed response...`
}
```

**Tips:**
- Add many keyword variations
- Include common misspellings
- Use longer, specific keywords for better matching
- Don't use category 'general' (reserved for default)

---

**Your chatbot should now understand different questions and provide appropriate responses!** 🎉
