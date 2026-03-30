# -*- coding: utf-8 -*-
import json

# Read site data
with open('assets/data/site-data.json', 'r', encoding='utf-8-sig') as f:
    data = json.load(f)

prompts = data['promptTemplates']
print(f'Current prompts: {len(prompts)}')

# Bilingual mappings for existing 12 prompts
bilingual_data = {
    'proof-outline': {
        'kind_en': 'Mathematical Proof',
        'title_en': 'Proof Structure Breakdown',
        'summary_en': 'Break down propositions into assumptions, goals, key lemmas, and proof outline.',
        'prompt_en': 'You are a mathematical research assistant. Please organize the following proposition into a proof draft with five sections: 1) Given conditions, 2) Goal, 3) Key tools, 4) Proof outline, 5) Potential difficulties. Preserve all original mathematical symbols unchanged.'
    },
    'latex-cleanup': {
        'kind_en': 'LaTeX',
        'title_en': 'LaTeX Cleanup',
        'summary_en': 'Clean up preamble, environments, labels, and formula formatting.',
        'prompt_en': 'Please review the following LaTeX snippet and provide suggestions in four categories: 1) Syntax errors, 2) Environment issues, 3) Readability, 4) Maintainability. If possible, return a cleaned-up version.'
    },
}

# Add bilingual fields to existing prompts
for p in prompts:
    if p['id'] in bilingual_data:
        p.update(bilingual_data[p['id']])
        p['prompt_zh'] = p['prompt']

print('Added bilingual fields to existing prompts')

# Write back
with open('assets/data/site-data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False)

print('Updated site-data.json')
