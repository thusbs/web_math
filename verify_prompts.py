# -*- coding: utf-8 -*-
import json
import codecs

# Read the JSON file
with codecs.open('assets/data/site-data.json', 'r', 'utf-8-sig') as f:
    data = json.load(f)

# Get prompt templates
prompts = data.get('promptTemplates', [])

print(f"Total number of prompt templates: {len(prompts)}")
print("\nPrompt IDs:")
for i, prompt in enumerate(prompts, 1):
    print(f"{i}. {prompt.get('id', 'NO_ID')}")

# Verify bilingual fields
print("\n=== Bilingual Field Verification ===")
required_fields = ['id', 'kind', 'title', 'title_en', 'summary', 'summary_en', 'prompt', 'prompt_zh', 'prompt_en']
missing_fields = []

for prompt in prompts:
    prompt_id = prompt.get('id', 'UNKNOWN')
    for field in required_fields:
        if field not in prompt or not prompt[field]:
            missing_fields.append(f"{prompt_id}: missing '{field}'")

if missing_fields:
    print("Missing fields found:")
    for msg in missing_fields:
        print(f"  - {msg}")
else:
    print("✓ All prompts have complete bilingual fields")

# Check for duplicate IDs
ids = [p.get('id') for p in prompts]
duplicates = [id for id in ids if ids.count(id) > 1]
if duplicates:
    print(f"\n⚠ Duplicate IDs found: {set(duplicates)}")
else:
    print("\n✓ All IDs are unique")
