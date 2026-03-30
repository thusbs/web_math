# Implementation Plan: AI Prompt Bilingual Expansion

## Overview

本实现计划将 AI 导航页的提示词功能从 12 个单语模板扩展到 20+ 个双语模板，并添加中英文切换功能。实现策略采用最小化改动原则，复用现有的 `resolveText` 函数和语言切换机制，确保向后兼容性。

## Tasks

- [x] 1. 扩展数据结构以支持双语字段
  - 为现有 12 个提示词添加 `title_en`, `summary_en`, `prompt_zh`, `prompt_en`, `kind_en` 字段
  - 保留原有 `prompt` 字段用于向后兼容（值与 `prompt_zh` 相同）
  - 确保所有字段遵循现有命名约定（中文字段无后缀，英文字段 `_en` 后缀）
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6_

- [ ]* 1.1 编写数据结构验证函数
  - 创建验证函数检查必需字段的完整性
  - 实现 ID 唯一性检测
  - 在控制台记录缺失字段的警告
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [ ] 2. 新增 9 个提示词模板以达到 20+ 总数
  - [ ] 2.1 添加"反例构造"提示词
    - 创建 `counterexample-construction` 提示词
    - 包含中英文完整内容（title, summary, prompt）
    - 提示词内容应引导 AI 寻找反例的方法
    - _Requirements: 2.2, 8.3_

  - [ ] 2.2 添加"定义形式化"提示词
    - 创建 `definition-formalization` 提示词
    - 包含中英文完整内容
    - 要求使用标准数学语言
    - _Requirements: 2.3, 8.4_

  - [ ] 2.3 添加"推广分析"提示词
    - 创建 `generalization-analysis` 提示词
    - 包含中英文完整内容
    - 引导分析推广的可能方向
    - _Requirements: 2.4, 8.5_

  - [ ] 2.4 添加"计算验证"提示词
    - 创建 `computation-verification` 提示词
    - 包含中英文完整内容
    - 包含数值精度和误差处理要求
    - _Requirements: 2.5, 8.6_

  - [ ] 2.5 添加"参考文献格式化"提示词
    - 创建 `reference-formatting` 提示词
    - 包含中英文完整内容
    - 支持 BibTeX、APA、MLA 格式
    - _Requirements: 2.6, 8.7_

  - [ ] 2.6 添加"研究问题提炼"提示词
    - 创建 `research-question-refinement` 提示词
    - 包含中英文完整内容
    - 引导从现象到问题的转化
    - _Requirements: 2.7, 8.8_

  - [ ] 2.7 添加"报告大纲生成"提示词
    - 创建 `report-outline` 提示词
    - 包含中英文完整内容
    - 包含学术报告的标准结构
    - _Requirements: 2.8, 8.9_

  - [ ] 2.8 添加"图表说明撰写"提示词
    - 创建 `figure-caption` 提示词
    - 包含中英文完整内容
    - 要求准确描述图表内容和意义
    - _Requirements: 2.9, 8.10_

  - [ ] 2.9 添加"误差分析"提示词
    - 创建 `error-analysis` 提示词
    - 包含中英文完整内容
    - 包含误差来源识别和量化方法
    - _Requirements: 2.10, 8.11_

- [ ] 3. Checkpoint - 验证数据完整性
  - 运行数据验证函数确保所有提示词包含必需字段
  - 检查 ID 唯一性
  - 确认至少有 20 个提示词
  - 如有问题请询问用户

- [ ]* 4. 编写属性测试验证数据结构
  - [ ]* 4.1 编写 Property 1 测试：数据结构完整性
    - **Property 1: Data Structure Completeness**
    - **Validates: Requirements 1.1, 1.2, 1.3, 1.4, 2.11, 5.1**
    - 使用 fast-check 生成随机提示词模板
    - 验证所有必需字段存在且非空
    - 至少运行 100 次迭代

  - [ ]* 4.2 编写 Property 6 测试：ID 唯一性
    - **Property 6: ID Uniqueness**
    - **Validates: Requirements 7.4**
    - 生成提示词数组并检测重复 ID
    - 验证系统能正确识别重复项

- [ ] 5. 实现语言切换 UI 控件
  - 在 ai.html 页面添加语言切换按钮或下拉菜单
  - 按钮应显示当前选中的语言状态（中文/English）
  - 使用现有的 CSS 样式保持视觉一致性
  - _Requirements: 3.1, 3.5_

- [ ] 6. 实现语言切换逻辑
  - [ ] 6.1 添加语言切换事件处理器
    - 监听语言切换控件的点击事件
    - 更新全局 `state.locale` 值（"zh" 或 "en"）
    - 触发页面重新渲染
    - _Requirements: 3.2_

  - [ ] 6.2 实现语言偏好持久化
    - 使用 localStorage 保存用户的语言选择
    - 页面加载时读取并恢复语言设置
    - 处理 localStorage 不可用的降级情况
    - _Requirements: 3.6_

  - [ ] 6.3 实现滚动位置保持
    - 在语言切换前记录当前滚动位置
    - 切换后恢复到相同位置
    - _Requirements: 3.4_

- [ ]* 6.4 编写 Property 2 测试：语言解析正确性
  - **Property 2: Language Resolution Correctness**
  - **Validates: Requirements 3.3**
  - 测试 `resolveText` 函数在不同语言设置下返回正确内容
  - 验证降级逻辑（英文字段缺失时使用中文）

- [ ]* 6.5 编写 Property 5 测试：语言偏好持久化往返
  - **Property 5: Language Preference Round Trip**
  - **Validates: Requirements 3.6**
  - 测试保存和恢复语言偏好的完整流程
  - 模拟页面重载场景

- [ ] 7. 更新复制功能以支持双语
  - 修改复制按钮的事件处理器
  - 确保复制当前语言版本的 `prompt` 内容（使用 `resolveText(item, 'prompt')`）
  - 保持现有的复制成功提示和错误处理
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [ ]* 7.1 编写 Property 4 测试：复制功能语言正确性
  - **Property 4: Copy Function Language Correctness**
  - **Validates: Requirements 6.1, 6.4**
  - 测试在不同语言设置下复制正确的内容
  - 验证复制功能与当前语言状态一致

- [ ] 8. 验证 UI 渲染的语言一致性
  - 确认 `renderPromptCard` 函数通过 `resolveText` 正确获取文本
  - 验证所有提示词卡片显示当前语言的 title、summary 和 kind
  - 测试语言切换后所有卡片同步更新
  - _Requirements: 3.3, 5.2_

- [ ]* 8.1 编写 Property 3 测试：UI 语言切换一致性
  - **Property 3: UI Language Switch Consistency**
  - **Validates: Requirements 3.2**
  - 测试语言切换后所有字段都使用选定语言
  - 验证 UI 渲染的一致性

- [ ]* 8.2 编写 Property 8 测试：语言切换器状态一致性
  - **Property 8: Language Switcher State Consistency**
  - **Validates: Requirements 3.5**
  - 测试语言切换器 UI 与全局状态的一致性

- [ ]* 8.3 编写 Property 10 测试：提示词渲染包含类别
  - **Property 10: Prompt Rendering Includes Category**
  - **Validates: Requirements 5.2**
  - 测试渲染的卡片包含类别标签

- [ ] 9. 添加错误处理和数据验证
  - 在数据加载时调用验证函数
  - 处理缺失字段的降级逻辑
  - 在控制台记录警告但不中断应用
  - 处理 localStorage 访问错误
  - _Requirements: 7.1, 7.2, 7.3, 7.5_

- [ ] 10. 确保提示词内容质量
  - 检查所有提示词包含清晰的角色定义
  - 验证包含具体的输出格式要求
  - 确认涉及数学符号的提示词明确要求保持符号不变
  - 检查英文提示词使用标准学术英语
  - 检查中文提示词使用准确的数学术语
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_

- [ ]* 10.1 编写 Property 11 测试：数学符号保持提示
  - **Property 11: Mathematical Symbol Preservation Prompt**
  - **Validates: Requirements 4.4**
  - 测试包含数学符号的提示词是否包含保持符号的指令

- [ ] 11. Final checkpoint - 完整功能测试
  - 在浏览器中测试完整的语言切换流程
  - 验证所有 20+ 提示词正确显示
  - 测试复制功能在两种语言下都正常工作
  - 确认语言偏好在页面刷新后保持
  - 测试所有类别标签正确显示
  - 如有问题请询问用户

- [ ]* 12. 运行完整的测试套件
  - 运行所有属性测试（Property 1-11）
  - 运行单元测试验证特定场景
  - 确保测试覆盖率达到 80% 以上
  - 修复所有失败的测试

## Notes

- 任务标记 `*` 的为可选测试任务，可以跳过以加快 MVP 开发
- 每个任务都引用了具体的需求编号以便追溯
- 属性测试使用 fast-check 库，每个测试至少运行 100 次迭代
- 实现过程中复用现有的 `resolveText` 函数，无需修改核心语言解析逻辑
- 数据结构扩展采用向后兼容策略，保留原有 `prompt` 字段
- 语言切换功能复用现有的全局状态管理机制
- 所有新增提示词遵循现有的内容规范和数据结构
