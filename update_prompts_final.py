# -*- coding: utf-8 -*-
import json
import codecs

# Read the JSON file with UTF-8-SIG encoding
with codecs.open('assets/data/site-data.json', 'r', 'utf-8-sig') as f:
    data = json.load(f)

# Complete bilingual prompt templates (12 existing + 9 new = 21 total)
new_prompts = [
    {
        "id": "proof-outline",
        "kind": "数学证明",
        "kind_en": "Mathematical Proof",
        "title": "证明结构拆解",
        "title_en": "Proof Structure Breakdown",
        "summary": "把命题拆成假设、目标、关键引理和证明主线。",
        "summary_en": "Break down propositions into assumptions, goals, key lemmas, and proof outline.",
        "prompt": "你是一名数学研究助理。请把下面命题整理成证明草稿，按已知条件、目标、关键工具、证明主线、可能卡点五部分输出，并保持原有数学符号不变。",
        "prompt_zh": "你是一名数学研究助理。请把下面命题整理成证明草稿，按已知条件、目标、关键工具、证明主线、可能卡点五部分输出，并保持原有数学符号不变。",
        "prompt_en": "You are a mathematical research assistant. Please organize the following proposition into a proof draft with five sections: 1) Given conditions, 2) Goal, 3) Key tools, 4) Proof outline, 5) Potential difficulties. Preserve all original mathematical symbols unchanged."
    },
    {
        "id": "latex-cleanup",
        "kind": "LaTeX",
        "kind_en": "LaTeX",
        "title": "LaTeX 清理",
        "title_en": "LaTeX Cleanup",
        "summary": "整理导言区、环境、标签与公式排版。",
        "summary_en": "Organize preamble, environments, labels, and formula formatting.",
        "prompt": "请检查下面的 LaTeX 片段，按语法错误、环境问题、可读性、可维护性四类给出修改建议；若能直接修正，请返回一份整理后的版本。",
        "prompt_zh": "请检查下面的 LaTeX 片段，按语法错误、环境问题、可读性、可维护性四类给出修改建议；若能直接修正，请返回一份整理后的版本。",
        "prompt_en": "Please review the following LaTeX snippet and provide suggestions in four categories: 1) Syntax errors, 2) Environment issues, 3) Readability, 4) Maintainability. If possible, return a cleaned-up version."
    },
    {
        "id": "literature-review",
        "kind": "文献综述",
        "kind_en": "Literature Review",
        "title": "文献综述生成",
        "title_en": "Literature Review Generation",
        "summary": "从论文列表生成结构化综述。",
        "summary_en": "Generate structured review from paper list.",
        "prompt": "你是一名数学研究助理。请根据以下论文列表，生成一份结构化的文献综述，包括：1) 研究背景和动机，2) 主要方法和技术，3) 关键结果和贡献，4) 研究趋势和未来方向。保持学术语言的准确性。",
        "prompt_zh": "你是一名数学研究助理。请根据以下论文列表，生成一份结构化的文献综述，包括：1) 研究背景和动机，2) 主要方法和技术，3) 关键结果和贡献，4) 研究趋势和未来方向。保持学术语言的准确性。",
        "prompt_en": "You are a mathematical research assistant. Based on the following paper list, generate a structured literature review including: 1) Research background and motivation, 2) Main methods and techniques, 3) Key results and contributions, 4) Research trends and future directions. Maintain academic language accuracy."
    },
    {
        "id": "theorem-explanation",
        "kind": "概念解释",
        "kind_en": "Concept Explanation",
        "title": "定理通俗解释",
        "title_en": "Theorem Explanation",
        "summary": "用通俗语言解释数学定理。",
        "summary_en": "Explain mathematical theorems in plain language.",
        "prompt": "你是一名数学教育者。请用通俗易懂的语言解释下面的数学定理，包括：1) 定理的直观含义，2) 为什么这个定理重要，3) 一个具体的例子，4) 常见的误解。避免过度简化，保持数学准确性。",
        "prompt_zh": "你是一名数学教育者。请用通俗易懂的语言解释下面的数学定理，包括：1) 定理的直观含义，2) 为什么这个定理重要，3) 一个具体的例子，4) 常见的误解。避免过度简化，保持数学准确性。",
        "prompt_en": "You are a mathematics educator. Please explain the following mathematical theorem in accessible language, including: 1) Intuitive meaning of the theorem, 2) Why this theorem is important, 3) A concrete example, 4) Common misconceptions. Avoid oversimplification while maintaining mathematical accuracy."
    },
    {
        "id": "concept-connection",
        "kind": "概念解释",
        "kind_en": "Concept Explanation",
        "title": "概念关联分析",
        "title_en": "Concept Connection Analysis",
        "summary": "分析数学概念之间的联系。",
        "summary_en": "Analyze connections between mathematical concepts.",
        "prompt": "你是一名数学研究助理。请分析以下数学概念之间的关系，包括：1) 概念的定义和核心特征，2) 概念之间的逻辑关系（包含、等价、推广等），3) 在不同数学分支中的应用，4) 学习顺序建议。",
        "prompt_zh": "你是一名数学研究助理。请分析以下数学概念之间的关系，包括：1) 概念的定义和核心特征，2) 概念之间的逻辑关系（包含、等价、推广等），3) 在不同数学分支中的应用，4) 学习顺序建议。",
        "prompt_en": "You are a mathematical research assistant. Please analyze the relationships between the following mathematical concepts, including: 1) Definitions and core characteristics, 2) Logical relationships (inclusion, equivalence, generalization, etc.), 3) Applications in different mathematical branches, 4) Suggested learning sequence."
    },
    {
        "id": "proof-verification",
        "kind": "数学证明",
        "kind_en": "Mathematical Proof",
        "title": "证明验证",
        "title_en": "Proof Verification",
        "summary": "检查数学证明的逻辑完整性。",
        "summary_en": "Check logical completeness of mathematical proofs.",
        "prompt": "你是一名数学审稿人。请仔细检查下面的数学证明，指出：1) 逻辑跳跃或不清楚的步骤，2) 缺失的假设或条件，3) 可能的错误，4) 改进建议。如果证明正确，请确认其完整性。",
        "prompt_zh": "你是一名数学审稿人。请仔细检查下面的数学证明，指出：1) 逻辑跳跃或不清楚的步骤，2) 缺失的假设或条件，3) 可能的错误，4) 改进建议。如果证明正确，请确认其完整性。",
        "prompt_en": "You are a mathematics reviewer. Please carefully check the following mathematical proof and identify: 1) Logical gaps or unclear steps, 2) Missing assumptions or conditions, 3) Possible errors, 4) Improvement suggestions. If the proof is correct, confirm its completeness."
    },
    {
        "id": "paper-polish",
        "kind": "论文润色",
        "kind_en": "Paper Polishing",
        "title": "学术论文润色",
        "title_en": "Academic Paper Polishing",
        "summary": "改进论文的语言和表达。",
        "summary_en": "Improve paper language and expression.",
        "prompt": "你是一名数学论文编辑。请润色下面的论文段落，改进：1) 语言的流畅性和准确性，2) 逻辑连接和段落结构，3) 专业术语的使用，4) 整体可读性。保持数学内容不变，只改进表达方式。",
        "prompt_zh": "你是一名数学论文编辑。请润色下面的论文段落，改进：1) 语言的流畅性和准确性，2) 逻辑连接和段落结构，3) 专业术语的使用，4) 整体可读性。保持数学内容不变，只改进表达方式。",
        "prompt_en": "You are a mathematics paper editor. Please polish the following paper paragraph, improving: 1) Language fluency and accuracy, 2) Logical connections and paragraph structure, 3) Use of technical terminology, 4) Overall readability. Keep mathematical content unchanged, only improve expression."
    },
    {
        "id": "abstract-writing",
        "kind": "论文润色",
        "kind_en": "Paper Polishing",
        "title": "摘要撰写",
        "title_en": "Abstract Writing",
        "summary": "根据论文内容生成摘要。",
        "summary_en": "Generate abstract from paper content.",
        "prompt": "你是一名数学论文作者。请根据以下论文内容，撰写一份学术摘要（150-250词），包括：1) 研究问题和背景，2) 主要方法，3) 核心结果，4) 意义和影响。使用简洁准确的学术语言。",
        "prompt_zh": "你是一名数学论文作者。请根据以下论文内容，撰写一份学术摘要（150-250词），包括：1) 研究问题和背景，2) 主要方法，3) 核心结果，4) 意义和影响。使用简洁准确的学术语言。",
        "prompt_en": "You are a mathematics paper author. Based on the following paper content, write an academic abstract (150-250 words) including: 1) Research problem and background, 2) Main methods, 3) Core results, 4) Significance and impact. Use concise and accurate academic language."
    },
    {
        "id": "code-debug",
        "kind": "代码调试",
        "kind_en": "Code Debugging",
        "title": "数学代码调试",
        "title_en": "Math Code Debugging",
        "summary": "调试数值计算或符号计算代码。",
        "summary_en": "Debug numerical or symbolic computation code.",
        "prompt": "你是一名科学计算专家。请分析下面的代码，找出：1) 语法错误，2) 逻辑错误，3) 数值稳定性问题，4) 性能优化建议。如果可能，提供修正后的代码。",
        "prompt_zh": "你是一名科学计算专家。请分析下面的代码，找出：1) 语法错误，2) 逻辑错误，3) 数值稳定性问题，4) 性能优化建议。如果可能，提供修正后的代码。",
        "prompt_en": "You are a scientific computing expert. Please analyze the following code and identify: 1) Syntax errors, 2) Logic errors, 3) Numerical stability issues, 4) Performance optimization suggestions. If possible, provide corrected code."
    },
    {
        "id": "algorithm-implementation",
        "kind": "代码调试",
        "kind_en": "Code Debugging",
        "title": "算法实现",
        "title_en": "Algorithm Implementation",
        "summary": "将数学算法转换为代码。",
        "summary_en": "Convert mathematical algorithms to code.",
        "prompt": "你是一名科学计算专家。请将下面的数学算法实现为代码，包括：1) 清晰的函数接口，2) 详细的注释，3) 输入验证，4) 简单的使用示例。选择合适的数据结构和数值方法。",
        "prompt_zh": "你是一名科学计算专家。请将下面的数学算法实现为代码，包括：1) 清晰的函数接口，2) 详细的注释，3) 输入验证，4) 简单的使用示例。选择合适的数据结构和数值方法。",
        "prompt_en": "You are a scientific computing expert. Please implement the following mathematical algorithm as code, including: 1) Clear function interface, 2) Detailed comments, 3) Input validation, 4) Simple usage example. Choose appropriate data structures and numerical methods."
    },
    {
        "id": "notation-explanation",
        "kind": "概念解释",
        "kind_en": "Concept Explanation",
        "title": "符号系统解释",
        "title_en": "Notation System Explanation",
        "summary": "解释数学符号和记号系统。",
        "summary_en": "Explain mathematical symbols and notation systems.",
        "prompt": "你是一名数学教育者。请解释下面的数学符号或记号系统，包括：1) 符号的标准含义，2) 使用场景和约定，3) 相关的符号变体，4) 常见的混淆点。",
        "prompt_zh": "你是一名数学教育者。请解释下面的数学符号或记号系统，包括：1) 符号的标准含义，2) 使用场景和约定，3) 相关的符号变体，4) 常见的混淆点。",
        "prompt_en": "You are a mathematics educator. Please explain the following mathematical symbol or notation system, including: 1) Standard meaning of the symbol, 2) Usage scenarios and conventions, 3) Related symbol variants, 4) Common points of confusion."
    },
    {
        "id": "problem-solving",
        "kind": "数学证明",
        "kind_en": "Mathematical Proof",
        "title": "问题求解策略",
        "title_en": "Problem Solving Strategy",
        "summary": "提供数学问题的求解思路。",
        "summary_en": "Provide solution strategies for math problems.",
        "prompt": "你是一名数学导师。请为下面的数学问题提供求解策略，包括：1) 问题分析和关键点识别，2) 可能的解题方法（至少2种），3) 每种方法的优缺点，4) 推荐的解题步骤。不要直接给出完整解答。",
        "prompt_zh": "你是一名数学导师。请为下面的数学问题提供求解策略，包括：1) 问题分析和关键点识别，2) 可能的解题方法（至少2种），3) 每种方法的优缺点，4) 推荐的解题步骤。不要直接给出完整解答。",
        "prompt_en": "You are a mathematics tutor. Please provide solution strategies for the following mathematical problem, including: 1) Problem analysis and key point identification, 2) Possible solution methods (at least 2), 3) Pros and cons of each method, 4) Recommended solution steps. Do not provide complete solutions directly."
    },
    {
        "id": "counterexample-construction",
        "kind": "数学证明",
        "kind_en": "Mathematical Proof",
        "title": "反例构造",
        "title_en": "Counterexample Construction",
        "summary": "寻找或构造数学命题的反例。",
        "summary_en": "Find or construct counterexamples for mathematical propositions.",
        "prompt": "你是一名数学研究助理。请分析下面的数学命题，尝试构造反例或说明为什么难以找到反例。包括：1) 命题的关键条件分析，2) 可能的反例构造思路，3) 边界情况检查，4) 如果找不到反例，说明原因。",
        "prompt_zh": "你是一名数学研究助理。请分析下面的数学命题，尝试构造反例或说明为什么难以找到反例。包括：1) 命题的关键条件分析，2) 可能的反例构造思路，3) 边界情况检查，4) 如果找不到反例，说明原因。",
        "prompt_en": "You are a mathematical research assistant. Please analyze the following mathematical proposition and attempt to construct a counterexample or explain why it's difficult to find one. Include: 1) Analysis of key conditions, 2) Possible counterexample construction approaches, 3) Boundary case checks, 4) If no counterexample is found, explain why."
    },
    {
        "id": "definition-formalization",
        "kind": "概念解释",
        "kind_en": "Concept Explanation",
        "title": "定义形式化",
        "title_en": "Definition Formalization",
        "summary": "将直观描述转换为严格的数学定义。",
        "summary_en": "Convert intuitive descriptions to rigorous mathematical definitions.",
        "prompt": "你是一名数学研究助理。请将下面的直观描述转换为严格的数学定义，包括：1) 识别关键概念和性质，2) 选择合适的数学语言和符号，3) 给出形式化定义，4) 说明定义的合理性和完备性。",
        "prompt_zh": "你是一名数学研究助理。请将下面的直观描述转换为严格的数学定义，包括：1) 识别关键概念和性质，2) 选择合适的数学语言和符号，3) 给出形式化定义，4) 说明定义的合理性和完备性。",
        "prompt_en": "You are a mathematical research assistant. Please convert the following intuitive description into a rigorous mathematical definition, including: 1) Identify key concepts and properties, 2) Choose appropriate mathematical language and notation, 3) Provide formalized definition, 4) Explain the rationality and completeness of the definition."
    },
    {
        "id": "generalization-analysis",
        "kind": "概念解释",
        "kind_en": "Concept Explanation",
        "title": "推广分析",
        "title_en": "Generalization Analysis",
        "summary": "分析定理或概念的推广可能性。",
        "summary_en": "Analyze generalization possibilities of theorems or concepts.",
        "prompt": "你是一名数学研究助理。请分析下面定理或概念的推广可能性，包括：1) 当前条件的必要性分析，2) 可能的推广方向（维度、空间、条件等），3) 推广后可能遇到的困难，4) 相关的已知推广结果。",
        "prompt_zh": "你是一名数学研究助理。请分析下面定理或概念的推广可能性，包括：1) 当前条件的必要性分析，2) 可能的推广方向（维度、空间、条件等），3) 推广后可能遇到的困难，4) 相关的已知推广结果。",
        "prompt_en": "You are a mathematical research assistant. Please analyze the generalization possibilities of the following theorem or concept, including: 1) Necessity analysis of current conditions, 2) Possible generalization directions (dimension, space, conditions, etc.), 3) Potential difficulties after generalization, 4) Related known generalization results."
    },
    {
        "id": "computation-verification",
        "kind": "代码调试",
        "kind_en": "Code Debugging",
        "title": "计算验证",
        "title_en": "Computation Verification",
        "summary": "验证数学计算的正确性。",
        "summary_en": "Verify correctness of mathematical computations.",
        "prompt": "你是一名科学计算专家。请验证下面的数学计算，包括：1) 检查计算步骤的正确性，2) 识别数值误差来源，3) 提供独立验证方法，4) 给出置信度评估。如果发现错误，请指出并提供正确结果。",
        "prompt_zh": "你是一名科学计算专家。请验证下面的数学计算，包括：1) 检查计算步骤的正确性，2) 识别数值误差来源，3) 提供独立验证方法，4) 给出置信度评估。如果发现错误，请指出并提供正确结果。",
        "prompt_en": "You are a scientific computing expert. Please verify the following mathematical computation, including: 1) Check correctness of computation steps, 2) Identify sources of numerical errors, 3) Provide independent verification methods, 4) Give confidence assessment. If errors are found, point them out and provide correct results."
    },
    {
        "id": "reference-formatting",
        "kind": "论文润色",
        "kind_en": "Paper Polishing",
        "title": "参考文献格式化",
        "title_en": "Reference Formatting",
        "summary": "整理和格式化参考文献。",
        "summary_en": "Organize and format references.",
        "prompt": "你是一名学术编辑。请整理下面的参考文献，包括：1) 统一引用格式（APA/MLA/Chicago等），2) 补全缺失信息，3) 检查作者名、期刊名等的准确性，4) 按字母顺序排序。如果需要，提供 BibTeX 格式。",
        "prompt_zh": "你是一名学术编辑。请整理下面的参考文献，包括：1) 统一引用格式（APA/MLA/Chicago等），2) 补全缺失信息，3) 检查作者名、期刊名等的准确性，4) 按字母顺序排序。如果需要，提供 BibTeX 格式。",
        "prompt_en": "You are an academic editor. Please organize the following references, including: 1) Unify citation format (APA/MLA/Chicago, etc.), 2) Complete missing information, 3) Check accuracy of author names, journal names, etc., 4) Sort alphabetically. If needed, provide BibTeX format."
    },
    {
        "id": "research-question-refinement",
        "kind": "文献综述",
        "kind_en": "Literature Review",
        "title": "研究问题提炼",
        "title_en": "Research Question Refinement",
        "summary": "从文献中提炼研究问题。",
        "summary_en": "Extract research questions from literature.",
        "prompt": "你是一名数学研究助理。请从下面的文献综述中提炼研究问题，包括：1) 识别研究空白和未解决问题，2) 分析问题的重要性和可行性，3) 提出具体的研究问题，4) 建议可能的研究方法。",
        "prompt_zh": "你是一名数学研究助理。请从下面的文献综述中提炼研究问题，包括：1) 识别研究空白和未解决问题，2) 分析问题的重要性和可行性，3) 提出具体的研究问题，4) 建议可能的研究方法。",
        "prompt_en": "You are a mathematical research assistant. Please extract research questions from the following literature review, including: 1) Identify research gaps and unsolved problems, 2) Analyze importance and feasibility of problems, 3) Propose specific research questions, 4) Suggest possible research methods."
    },
    {
        "id": "report-outline",
        "kind": "LaTeX",
        "kind_en": "LaTeX",
        "title": "报告大纲生成",
        "title_en": "Report Outline Generation",
        "summary": "为学术报告生成结构化大纲。",
        "summary_en": "Generate structured outline for academic presentations.",
        "prompt": "你是一名学术报告顾问。请为下面的研究内容生成报告大纲，包括：1) 引言和动机（5-10分钟），2) 主要结果展示（15-20分钟），3) 技术细节（可选），4) 总结和展望（5分钟）。标注每部分的时间分配和关键要点。",
        "prompt_zh": "你是一名学术报告顾问。请为下面的研究内容生成报告大纲，包括：1) 引言和动机（5-10分钟），2) 主要结果展示（15-20分钟），3) 技术细节（可选），4) 总结和展望（5分钟）。标注每部分的时间分配和关键要点。",
        "prompt_en": "You are an academic presentation advisor. Please generate a presentation outline for the following research content, including: 1) Introduction and motivation (5-10 min), 2) Main results presentation (15-20 min), 3) Technical details (optional), 4) Summary and outlook (5 min). Mark time allocation and key points for each section."
    },
    {
        "id": "figure-caption",
        "kind": "论文润色",
        "kind_en": "Paper Polishing",
        "title": "图表说明撰写",
        "title_en": "Figure Caption Writing",
        "summary": "为图表撰写清晰的说明文字。",
        "summary_en": "Write clear captions for figures and tables.",
        "prompt": "你是一名学术编辑。请为下面的图表撰写说明文字，包括：1) 图表的主要内容描述，2) 关键数据或趋势说明，3) 与正文的关联，4) 必要的符号和缩写解释。保持简洁但信息完整。",
        "prompt_zh": "你是一名学术编辑。请为下面的图表撰写说明文字，包括：1) 图表的主要内容描述，2) 关键数据或趋势说明，3) 与正文的关联，4) 必要的符号和缩写解释。保持简洁但信息完整。",
        "prompt_en": "You are an academic editor. Please write captions for the following figures/tables, including: 1) Description of main content, 2) Explanation of key data or trends, 3) Connection to main text, 4) Necessary symbol and abbreviation explanations. Keep concise but informative."
    },
    {
        "id": "error-analysis",
        "kind": "代码调试",
        "kind_en": "Code Debugging",
        "title": "误差分析",
        "title_en": "Error Analysis",
        "summary": "分析数值方法的误差来源和传播。",
        "summary_en": "Analyze error sources and propagation in numerical methods.",
        "prompt": "你是一名数值分析专家。请分析下面数值方法的误差，包括：1) 截断误差分析，2) 舍入误差影响，3) 误差传播机制，4) 误差控制建议。提供理论分析和数值验证方法。",
        "prompt_zh": "你是一名数值分析专家。请分析下面数值方法的误差，包括：1) 截断误差分析，2) 舍入误差影响，3) 误差传播机制，4) 误差控制建议。提供理论分析和数值验证方法。",
        "prompt_en": "You are a numerical analysis expert. Please analyze errors in the following numerical method, including: 1) Truncation error analysis, 2) Rounding error impact, 3) Error propagation mechanism, 4) Error control suggestions. Provide theoretical analysis and numerical verification methods."
    }
]

# Replace the promptTemplates
data['promptTemplates'] = new_prompts

# Write back to file without BOM
with codecs.open('assets/data/site-data.json', 'w', 'utf-8') as f:
    json.dump(data, f, ensure_ascii=False, separators=(',', ':'))

print(f"Successfully updated {len(new_prompts)} prompt templates with bilingual support")
print(f"Total prompts: {len(new_prompts)}")
print("Bilingual fields added: title_en, summary_en, kind_en, prompt_zh, prompt_en")
