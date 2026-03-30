const fs = require('fs');

// Read the JSON file
const data = JSON.parse(fs.readFileSync('assets/data/site-data.json', 'utf8'));

const prompts = data.promptTemplates || [];

console.log(`Total number of prompt templates: ${prompts.length}\n`);

console.log('Prompt IDs:');
prompts.forEach((prompt, i) => {
    console.log(`${i + 1}. ${prompt.id}`);
});

// Verify bilingual fields
console.log('\n=== Bilingual Field Verification ===');
const requiredFields = ['id', 'kind', 'title', 'title_en', 'summary', 'summary_en', 'prompt', 'prompt_zh', 'prompt_en'];
const missingFields = [];

prompts.forEach(prompt => {
    const promptId = prompt.id || 'UNKNOWN';
    requiredFields.forEach(field => {
        if (!prompt[field] || prompt[field] === '') {
            missingFields.push(`${promptId}: missing '${field}'`);
        }
    });
});

if (missingFields.length > 0) {
    console.log('Missing fields found:');
    missingFields.forEach(msg => console.log(`  - ${msg}`));
} else {
    console.log('✓ All prompts have complete bilingual fields');
}

// Check for duplicate IDs
const ids = prompts.map(p => p.id);
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicates.length > 0) {
    console.log(`\n⚠ Duplicate IDs found: ${[...new Set(duplicates)].join(', ')}`);
} else {
    console.log('\n✓ All IDs are unique');
}

// Check if we have at least 20 prompts
if (prompts.length >= 20) {
    console.log(`\n✓ Target met: ${prompts.length} prompts (requirement: 20+)`);
} else {
    console.log(`\n⚠ Target not met: ${prompts.length} prompts (requirement: 20+)`);
}
