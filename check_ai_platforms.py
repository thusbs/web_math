# -*- coding: utf-8 -*-
import json
import codecs

with codecs.open('assets/data/site-data.json', 'r', 'utf-8-sig') as f:
    data = json.load(f)

ai_platforms = [c for c in data['cards'] if c['group'] == 'ai-platform']
print(f"当前 ai-platform 分组有 {len(ai_platforms)} 个卡片：")
for card in ai_platforms:
    print(f"  - {card['id']}: {card['title']}")
