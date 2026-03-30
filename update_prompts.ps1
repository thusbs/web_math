# Read JSON file
$jsonContent = Get-Content -Path "assets/data/site-data.json" -Raw -Encoding UTF8
$jsonContent = $jsonContent -replace '^\xEF\xBB\xBF', ''
$data = $jsonContent | ConvertFrom-Json

# Create new prompt templates array
$newPrompts = @(
    @{
        id = "proof-outline"
        kind = "数学证明"
        title = "证明结构拆解"
        titleEn = "Proof Structure Breakdown"
        summary = "把命题拆成假设、目标、关键引理和证明主线。"
        summaryEn = "Break down propositions into assumptions, goals, key lemmas, and proof outline."
        promptZh = "你是一名数学研究助理。请把下面命题整理成证明草稿，按已知条件、目标、关键工具、证明主线、可能卡点五部分输出，并保持原有数学符号不变。"
        promptEn = "You are a mathematics research assistant. Please organize the following proposition into a proof draft, structured in five parts: Given Conditions, Goal, Key Tools, Proof Outline, and Potential Difficulties. Preserve all original mathematical notation."
    },
    @{
        id = "latex-cleanup"
        kind = "LaTeX"
        title = "LaTeX 清理"
        titleEn = "LaTeX Cleanup"
        summary = "整理导言区、环境、标签与公式排版。"
        summaryEn = "Organize preamble, environments, labels, and formula formatting."
        promptZh = "请检查下面的 LaTeX 片段，按语法错误、环境问题、可读性、可维护性四类给出修改建议；若能直接修正，请返回一份整理后的版本。"
        promptEn = "Please review the following LaTeX snippet and provide suggestions in four categories: Syntax Errors, Environment Issues, Readability, and Maintainability. If possible, return a cleaned-up version."
    }
)

# Convert to JSON and save
$data.promptTemplates = $newPrompts
$jsonOutput = $data | ConvertTo-Json -Depth 10 -Compress
[System.IO.File]::WriteAllText("assets/data/site-data.json", $jsonOutput, [System.Text.UTF8Encoding]::new($false))

Write-Host "Updated prompt templates"
