# -*- coding: utf-8 -*-
import json

# Read the new prompts
with open('all_prompts.json', 'r', encoding='utf-8') as f:
    new_prompts = json.load(f)

print('Loaded', len(new_prompts), 'prompts from all_prompts.json')

# Read the site data
with open('assets/data/site-data.json', 'r', encoding='utf-8-sig') as f:
    data = json.load(f)

print('Current prompts in site-data.json:', len(data['promptTemplates']))

# Replace the prompts
data['promptTemplates'] = new_prompts

# Write back
with open('assets/data/site-data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False)

print('Successfully updated! Now have', len(data['promptTemplates']), 'prompts.')
print('First 3 IDs:', [p['id'] for p in data['promptTemplates'][:3]])
print('Last 3 IDs:', [p['id'] for p in data['promptTemplates'][-3:]])
