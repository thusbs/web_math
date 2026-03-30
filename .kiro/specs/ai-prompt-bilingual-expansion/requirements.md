# Requirements Document

## Introduction

本需求文档定义了 AI 导航页提示词功能的双语扩展需求。该功能将现有的 12 个提示词模板扩展到 20+ 个，并为每个提示词添加中英文双语支持，允许用户在界面上切换语言。

## Glossary

- **Prompt_System**: 提示词模板管理系统，负责存储、检索和展示提示词
- **Data_Layer**: 数据层，指 site-data.json 文件中的 promptTemplates 数组
- **UI_Layer**: 用户界面层，指 ai.html 页面中的提示词展示区域
- **Language_Switcher**: 语言切换器，允许用户在中英文之间切换
- **Prompt_Template**: 提示词模板，包含 id、kind、title、summary 和 prompt 字段的数据对象

## Requirements

### Requirement 1: 数据结构双语化

**User Story:** 作为开发者，我希望提示词数据结构支持中英文双语，以便用户可以选择不同语言查看提示词。

#### Acceptance Criteria

1. THE Data_Layer SHALL 包含 promptZh 和 promptEn 字段替代原有的 prompt 字段
2. THE Data_Layer SHALL 包含 titleEn 字段用于存储英文标题
3. THE Data_Layer SHALL 包含 summaryEn 字段用于存储英文摘要
4. THE Data_Layer SHALL 保留 title 和 summary 字段作为中文版本
5. WHEN 数据结构更新后，THE Prompt_System SHALL 保持向后兼容性
6. FOR ALL 现有的 12 个提示词，THE Data_Layer SHALL 包含完整的中英文版本

### Requirement 2: 提示词数量扩展

**User Story:** 作为数学研究者，我希望有更多场景的提示词模板，以便覆盖更多研究工作流程。

#### Acceptance Criteria

1. THE Prompt_System SHALL 包含至少 20 个提示词模板
2. THE Prompt_System SHALL 包含"反例构造"类别的提示词
3. THE Prompt_System SHALL 包含"定义形式化"类别的提示词
4. THE Prompt_System SHALL 包含"推广分析"类别的提示词
5. THE Prompt_System SHALL 包含"计算验证"类别的提示词
6. THE Prompt_System SHALL 包含"参考文献格式化"类别的提示词
7. THE Prompt_System SHALL 包含"研究问题提炼"类别的提示词
8. THE Prompt_System SHALL 包含"报告大纲生成"类别的提示词
9. THE Prompt_System SHALL 包含"图表说明撰写"类别的提示词
10. THE Prompt_System SHALL 包含"误差分析"类别的提示词
11. WHEN 添加新提示词时，THE Prompt_System SHALL 为每个提示词提供中英文双语版本

### Requirement 3: 语言切换功能

**User Story:** 作为用户，我希望能够在中英文之间切换提示词显示语言，以便根据使用场景选择合适的语言。

#### Acceptance Criteria

1. THE UI_Layer SHALL 提供语言切换控件
2. WHEN 用户点击语言切换控件时，THE UI_Layer SHALL 切换所有提示词的显示语言
3. THE UI_Layer SHALL 根据当前语言设置显示对应的 title、summary 和 prompt 内容
4. WHEN 语言切换时，THE UI_Layer SHALL 保持用户的滚动位置
5. THE Language_Switcher SHALL 显示当前选中的语言状态
6. THE Prompt_System SHALL 记住用户的语言偏好设置

### Requirement 4: 提示词内容质量

**User Story:** 作为用户，我希望提示词内容准确且实用，以便直接应用到实际工作中。

#### Acceptance Criteria

1. FOR ALL 提示词，THE Prompt_Template SHALL 包含清晰的角色定义
2. FOR ALL 提示词，THE Prompt_Template SHALL 包含具体的输出格式要求
3. FOR ALL 提示词，THE Prompt_Template SHALL 包含相关的数学或学术背景说明
4. WHEN 提示词涉及数学符号时，THE Prompt_Template SHALL 明确要求保持符号不变
5. FOR ALL 英文提示词，THE Prompt_Template SHALL 使用标准学术英语表达
6. FOR ALL 中文提示词，THE Prompt_Template SHALL 使用准确的数学术语

### Requirement 5: 提示词分类组织

**User Story:** 作为用户，我希望提示词按类别组织，以便快速找到需要的模板。

#### Acceptance Criteria

1. THE Prompt_System SHALL 支持按 kind 字段对提示词进行分类
2. THE UI_Layer SHALL 显示每个提示词的类别标签
3. THE Prompt_System SHALL 支持以下类别：数学证明、LaTeX、文献综述、概念解释、论文润色、代码调试
4. WHEN 添加新提示词时，THE Prompt_System SHALL 为其分配合适的类别
5. THE UI_Layer SHALL 保持类别标签的视觉一致性

### Requirement 6: 复制功能增强

**User Story:** 作为用户，我希望复制提示词时能够获得正确语言版本的内容，以便直接粘贴到 AI 对话中使用。

#### Acceptance Criteria

1. WHEN 用户点击复制按钮时，THE Prompt_System SHALL 复制当前语言版本的 prompt 内容
2. WHEN 复制成功后，THE UI_Layer SHALL 显示确认提示
3. THE UI_Layer SHALL 在复制按钮上显示临时的"已复制"状态
4. WHEN 语言切换后，THE Prompt_System SHALL 确保复制功能使用新语言的内容
5. IF 复制失败，THEN THE UI_Layer SHALL 显示错误提示

### Requirement 7: 数据完整性验证

**User Story:** 作为开发者，我希望系统能够验证提示词数据的完整性，以便及早发现数据错误。

#### Acceptance Criteria

1. WHEN 加载数据时，THE Prompt_System SHALL 验证每个提示词包含必需的字段
2. IF 提示词缺少 promptZh 或 promptEn 字段，THEN THE Prompt_System SHALL 记录警告
3. IF 提示词缺少 titleEn 或 summaryEn 字段，THEN THE Prompt_System SHALL 记录警告
4. THE Prompt_System SHALL 验证所有 id 字段的唯一性
5. WHEN 数据验证失败时，THE Prompt_System SHALL 提供清晰的错误信息

### Requirement 8: 新增提示词内容规范

**User Story:** 作为内容维护者，我希望新增的提示词遵循统一的内容规范，以便保持整体质量一致性。

#### Acceptance Criteria

1. FOR ALL 新增提示词，THE Prompt_Template SHALL 包含明确的任务描述
2. FOR ALL 新增提示词，THE Prompt_Template SHALL 包含结构化的输出要求
3. FOR ALL "反例构造"提示词，THE Prompt_Template SHALL 指导 AI 寻找反例的方法
4. FOR ALL "定义形式化"提示词，THE Prompt_Template SHALL 要求使用标准数学语言
5. FOR ALL "推广分析"提示词，THE Prompt_Template SHALL 引导分析推广的可能方向
6. FOR ALL "计算验证"提示词，THE Prompt_Template SHALL 包含数值精度和误差处理要求
7. FOR ALL "参考文献格式化"提示词，THE Prompt_Template SHALL 支持常见引用格式（BibTeX、APA、MLA）
8. FOR ALL "研究问题提炼"提示词，THE Prompt_Template SHALL 引导从现象到问题的转化
9. FOR ALL "报告大纲生成"提示词，THE Prompt_Template SHALL 包含学术报告的标准结构
10. FOR ALL "图表说明撰写"提示词，THE Prompt_Template SHALL 要求准确描述图表内容和意义
11. FOR ALL "误差分析"提示词，THE Prompt_Template SHALL 包含误差来源识别和量化方法
