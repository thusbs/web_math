# Requirements Document

## Introduction

本需求文档定义数学学术导航网站内容资源的全面扩充功能。当前网站已有基础内容框架，包括部分期刊、研究工具、AI 工具、LaTeX 资源和博客等。本功能旨在系统性地扩充五大内容类别，提升网站的学术价值和用户覆盖面。

数据存储在 `assets/data/site-data.json` 文件中，包含以下主要数据结构：
- `cards`: 卡片资源（期刊、工具、博客等）
- `journalCompare`: 期刊对比数据
- `subjects`: 学科分支（书籍和课程链接）
- `latexFormulas`: LaTeX 公式示例
- `tikzGallery`: TikZ 图形示例
- `promptTemplates`: AI 提示词模板

## Glossary

- **Content_Expansion_System**: 内容扩充系统，负责向 site-data.json 添加新的学术资源条目
- **Journal_Entry**: 期刊条目，包含期刊名称、缩写、出版商、URL、标签和学科领域
- **Blog_Entry**: 博客条目，包含博客名称、作者、URL、类型和学科领域
- **Subject_Entry**: 学科分支条目，包含学科名称、推荐书籍和课程链接
- **LaTeX_Resource**: LaTeX 资源条目，包含公式示例、TikZ 图形或模板
- **AI_Tool_Entry**: AI 工具条目，包含工具名称、提供商、URL 和使用场景
- **Data_Quality_Standard**: 数据质量标准，确保所有新增条目的准确性、完整性和一致性
- **Validation_Rule**: 验证规则，用于检查新增条目是否符合现有数据结构和格式要求

## Requirements

### Requirement 1: 扩充期刊列表

**User Story:** 作为数学研究者，我希望网站提供更全面的数学期刊列表，以便我能够找到适合投稿的期刊。

#### Acceptance Criteria

1. THE Content_Expansion_System SHALL 在 cards 数组中添加至少 30 个新的数学期刊条目
2. THE Content_Expansion_System SHALL 覆盖以下数学方向：代数（至少 5 个期刊）、几何（至少 5 个期刊）、概率论（至少 4 个期刊）、拓扑学（至少 4 个期刊）、数论（至少 4 个期刊）、组合数学（至少 3 个期刊）、数理逻辑（至少 2 个期刊）、应用数学（至少 3 个期刊）
3. WHEN 添加期刊条目时，THE Content_Expansion_System SHALL 包含以下必填字段：id、group、kind、title、summary、url、abbreviation、publisher、official、tags、fields
4. THE Content_Expansion_System SHALL 为每个新增期刊在 journalCompare 数组中添加对应的对比数据条目
5. THE Content_Expansion_System SHALL 确保所有期刊 URL 指向官方网站或权威数据库
6. THE Content_Expansion_System SHALL 使用与现有条目一致的命名规范和数据格式

### Requirement 2: 扩充博客资源

**User Story:** 作为数学学习者，我希望发现更多高质量的数学博客和研究笔记，以便我能够学习前沿知识和研究方法。

#### Acceptance Criteria

1. THE Content_Expansion_System SHALL 在 cards 数组中添加至少 20 个新的博客相关条目
2. THE Content_Expansion_System SHALL 包含以下三种类型：数学博客（至少 10 个）、研究笔记（至少 6 个）、个人站点（至少 4 个）
3. WHEN 添加博客条目时，THE Content_Expansion_System SHALL 包含以下必填字段：id、group、kind、title、summary、url、official、tags、fields
4. THE Content_Expansion_System SHALL 覆盖多个数学领域，包括但不限于：代数、几何、分析、拓扑、数论、组合、概率、数理逻辑
5. THE Content_Expansion_System SHALL 优先选择活跃更新（近两年内有更新）的博客和笔记站点
6. THE Content_Expansion_System SHALL 在 summary 字段中简要说明博客的特色和适用人群

### Requirement 3: 扩充学科分支资源

**User Story:** 作为数学专业学生，我希望找到各个数学分支的经典教材和优质课程，以便我能够系统学习特定领域。

#### Acceptance Criteria

1. THE Content_Expansion_System SHALL 在 subjects 数组中添加至少 8 个新的学科分支条目
2. THE Content_Expansion_System SHALL 包含以下学科方向：拓扑学、数论、微分几何、代数几何、组合数学、数理逻辑、泛函分析、数值分析
3. WHEN 添加学科分支条目时，THE Content_Expansion_System SHALL 包含以下必填字段：id、kind、title、summary、books（至少 3 本）、links（至少 2 个）
4. THE Content_Expansion_System SHALL 为每个学科分支的 books 数组提供书名、作者和简短说明
5. THE Content_Expansion_System SHALL 为每个学科分支的 links 数组提供课程或讲义的标题、摘要和 URL
6. THE Content_Expansion_System SHALL 优先选择被学术界广泛认可的经典教材和知名大学的公开课程

### Requirement 4: 扩充 LaTeX 资源

**User Story:** 作为论文写作者，我希望获得更多 LaTeX 公式示例和 TikZ 图形模板，以便我能够高效地排版数学内容。

#### Acceptance Criteria

1. THE Content_Expansion_System SHALL 在 latexFormulas 数组中添加至少 5 个新的公式类别
2. THE Content_Expansion_System SHALL 包含以下公式类别：积分与求和符号、矩阵与行列式、定理环境、交换图、特殊数学符号
3. WHEN 添加公式类别时，THE Content_Expansion_System SHALL 为每个类别提供至少 4 个具体示例
4. THE Content_Expansion_System SHALL 在 tikzGallery 数组中添加至少 5 个新的 TikZ 资源条目
5. THE Content_Expansion_System SHALL 包含以下 TikZ 资源类型：几何图形、函数图像、树状图、网络图、3D 图形
6. WHEN 添加 LaTeX 资源时，THE Content_Expansion_System SHALL 确保所有命令和代码片段的语法正确性
7. THE Content_Expansion_System SHALL 在 note 字段中说明每个命令或资源的适用场景和依赖包

### Requirement 5: 扩充 AI 工具和提示词模板

**User Story:** 作为数学研究者，我希望了解更多 AI 工具和专用提示词模板，以便我能够利用 AI 辅助研究和写作。

#### Acceptance Criteria

1. THE Content_Expansion_System SHALL 在 cards 数组中添加至少 8 个新的 AI 工具条目
2. THE Content_Expansion_System SHALL 包含以下 AI 工具类型：数学计算工具（至少 2 个）、文献管理工具（至少 2 个）、写作辅助工具（至少 2 个）、代码生成工具（至少 2 个）
3. WHEN 添加 AI 工具条目时，THE Content_Expansion_System SHALL 包含以下必填字段：id、group、kind、title、summary、url、publisher、official、tags、useCases
4. THE Content_Expansion_System SHALL 在 promptTemplates 数组中添加至少 10 个新的提示词模板
5. THE Content_Expansion_System SHALL 包含以下提示词类型：文献综述（至少 2 个）、定理证明（至少 2 个）、代码调试（至少 2 个）、论文润色（至少 2 个）、概念解释（至少 2 个）
6. WHEN 添加提示词模板时，THE Content_Expansion_System SHALL 包含以下必填字段：id、kind、title、summary、prompt
7. THE Content_Expansion_System SHALL 确保提示词模板具有明确的使用场景说明和预期输出描述

### Requirement 6: 数据质量验证

**User Story:** 作为网站维护者，我希望所有新增内容都符合数据质量标准，以便保持网站的专业性和可维护性。

#### Acceptance Criteria

1. WHEN 添加任何新条目时，THE Content_Expansion_System SHALL 验证所有必填字段是否完整
2. THE Content_Expansion_System SHALL 验证所有 URL 字段的格式正确性（以 http:// 或 https:// 开头）
3. THE Content_Expansion_System SHALL 验证所有 id 字段的唯一性（不与现有条目重复）
4. THE Content_Expansion_System SHALL 验证所有 id 字段使用 kebab-case 命名规范
5. THE Content_Expansion_System SHALL 确保所有新增条目的 JSON 格式正确且可解析
6. THE Content_Expansion_System SHALL 保持与现有条目一致的字段命名和数据类型
7. WHEN 添加期刊条目时，THE Content_Expansion_System SHALL 验证 abbreviation 字段符合学术期刊缩写规范
8. THE Content_Expansion_System SHALL 确保所有中文文本使用简体中文且表述专业准确

### Requirement 7: 内容组织和可发现性

**User Story:** 作为网站用户，我希望新增内容能够被合理组织和分类，以便我能够快速找到所需资源。

#### Acceptance Criteria

1. THE Content_Expansion_System SHALL 为所有新增条目分配适当的 group 分类
2. THE Content_Expansion_System SHALL 为所有新增条目添加至少 2 个相关的 tags 标签
3. THE Content_Expansion_System SHALL 为所有新增条目指定至少 1 个 fields 学科领域
4. WHEN 添加工具类条目时，THE Content_Expansion_System SHALL 在 useCases 字段中列出至少 2 个使用场景
5. THE Content_Expansion_System SHALL 确保 tags、fields 和 useCases 使用与现有条目一致的术语
6. THE Content_Expansion_System SHALL 按照现有数据结构的逻辑顺序插入新条目（同类条目聚集）

### Requirement 8: 数据完整性和一致性

**User Story:** 作为开发者，我希望扩充后的数据文件保持结构完整性，以便前端代码能够正常解析和展示。

#### Acceptance Criteria

1. WHEN 修改 site-data.json 文件时，THE Content_Expansion_System SHALL 保持原有数据结构不变
2. THE Content_Expansion_System SHALL 保留所有现有条目和字段
3. THE Content_Expansion_System SHALL 确保修改后的 JSON 文件格式正确且可被标准 JSON 解析器解析
4. THE Content_Expansion_System SHALL 保持适当的缩进格式（2 个空格）以提高可读性
5. WHEN 添加引用其他条目的字段（如 cardId、linkIds）时，THE Content_Expansion_System SHALL 验证被引用条目的存在性
6. THE Content_Expansion_System SHALL 确保 meta 对象中的 updated 字段更新为当前日期（YYYY-MM-DD 格式）
