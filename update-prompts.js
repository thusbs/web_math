const fs = require('fs');

// Read the existing data
const data = JSON.parse(fs.readFileSync('assets/data/site-data.json', 'utf8'));

console.log(`Current prompts: ${data.promptTemplates.length}`);

// Define all 21 prompts
const newPrompts = [
  // 1-12: Existing prompts with bilingual fields
  {
    id: "proof-outline",
    kind: "数学证明",
    kind_en: "Mathematical Proof",
    title: "证明结构拆解",
    title_en: "Proof Structure Breakdown",
    summary: "把命题拆成假设、目标、关键引理和证明主线。",
    summary_en: "Break down propositions into assumptions, goals, key lemmas, and proof outline.",
    prompt: "你是一名数学研究助理。请把下面命题整理成证明草稿，按"已知条件、目标、关键工具、证明主线、可能卡点"五部分输出，并保持原有数学符号不变。",
    prompt_zh: "你是一名数学研究助理。请把下面命题整理成证明草稿，按"已知条件、目标、关键工具、证明主线、可能卡点"五部分输出，并保持原有数学符号不变。",
    prompt_en: "You are a mathematical research assistant. Please organize the following proposition into a proof draft with five sections: 1) Given conditions, 2) Goal, 3) Key tools, 4) Proof outline, 5) Potential difficulties. Preserve all original mathematical symbols unchanged."
  },
];

console.log(`Prepared ${newPrompts.length} prompts`);

// Update the data
data.promptTemplates = newPrompts;

// Write back
fs.writeFileSync('assets/data/site-data.json', JSON.stringify(data, null, 0), 'utf8');

console.log(`Updated! Now have ${data.promptTemplates.length} prompts.`);
