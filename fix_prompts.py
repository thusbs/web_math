#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fix the promptTemplates in site-data.json"""

import json

# Read the correct 21 prompts
with open('prompts_21.json', 'r', encoding='utf-8') as f:
    correct_prompts = json.load(f)

# Read the current site-data.json
with open('assets/data/site-data.json', 'r', encoding='utf-8') as f:
    site_data = json.load(f)

# Replace the promptTemplates array
site_data['promptTemplates'] = correct_prompts

# Write back to site-data.json (single line format to match original)
with open('assets/data/site-data.json', 'w', encoding='utf-8') as f:
    json.dump(site_data, f, ensure_ascii=False, separators=(',', ': '))

print(f"✓ Updated promptTemplates with {len(correct_prompts)} prompts")
print("✓ File saved in single-line format")
