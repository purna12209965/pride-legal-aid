// Quick test script to verify chatbot keyword matching
// Run with: node test-chatbot.js

const testQuestions = [
  "Police refuse to file my case",
  "What is Section 377",
  "Transgender rights in India",
  "Can I marry my same-sex partner",
  "I was fired for being gay",
  "Landlord refused to rent to me",
  "Doctor refused treatment",
  "My parents don't accept me",
  "What are my LGBTQ rights",
  "Hello"
];

// Simplified version of the matching function
function findBestResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase();
  
  const knowledge = [
    { keywords: ['police refuse', 'fir refuse', 'police not filing'], category: 'police_refusal', title: 'Police Refusal Remedies' },
    { keywords: ['section 377', '377', 'homosexuality illegal'], category: 'section_377', title: 'Section 377 Info' },
    { keywords: ['transgender', 'trans rights', 'third gender'], category: 'transgender_rights', title: 'Transgender Rights' },
    { keywords: ['same sex marriage', 'gay marriage', 'can i marry'], category: 'marriage', title: 'Marriage Status' },
    { keywords: ['workplace discrimination', 'fired for being gay', 'job discrimination'], category: 'employment', title: 'Employment Rights' },
    { keywords: ['housing discrimination', 'landlord refuse', 'rent discrimination'], category: 'housing', title: 'Housing Rights' },
    { keywords: ['healthcare', 'doctor refused', 'hospital discrimination'], category: 'healthcare', title: 'Healthcare Rights' },
    { keywords: ['family rejection', 'parents dont accept', 'parents don\'t accept', 'family pressure'], category: 'family', title: 'Family Issues Support' },
    { keywords: ['my rights', 'lgbtq rights', 'what are my rights'], category: 'general_rights', title: 'General Rights' },
    { keywords: ['hello', 'hi', 'help'], category: 'general', title: 'Welcome Message' }
  ];
  
  const scores = [];
  
  for (const entry of knowledge) {
    if (entry.category === 'general') continue; // Skip default during scoring
    
    let score = 0;
    for (const keyword of entry.keywords) {
      if (lowerMessage.includes(keyword.toLowerCase())) {
        score += keyword.length;
      }
    }
    
    if (score > 0) {
      scores.push({ entry, score });
    }
  }
  
  scores.sort((a, b) => b.score - a.score);
  
  if (scores.length > 0) {
    return scores[0].entry;
  }
  
  return knowledge.find(e => e.category === 'general');
}

console.log('Testing Chatbot Keyword Matching:\n');
console.log('='.repeat(60));

testQuestions.forEach((question, index) => {
  const result = findBestResponse(question);
  console.log(`\n${index + 1}. Question: "${question}"`);
  console.log(`   → Response: ${result.title} (${result.category})`);
});

console.log('\n' + '='.repeat(60));
console.log('\n✅ If you see different responses for different questions, it\'s working!');
console.log('❌ If all show "Welcome Message", there\'s still an issue.\n');
