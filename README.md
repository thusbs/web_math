# web_math

`web_math` 是一个纯静态、数据驱动的数学工作站。页面渲染逻辑在前端，内容主要来自 JSON 数据文件。

这个仓库现在明确拆成两条线：

- 站点维护：维护数学站点本身，核心是 `assets/data/site-data-formatted.json`
- 优化工具：保留中的性能优化骨架，目前只有类型和配置，还不是完整可运行工具

## 站点维护

### 数据文件约定

- 可编辑源文件：`assets/data/site-data-formatted.json`
- 构建产物：`assets/data/site-data.json`
- 前端实际读取：`assets/js/site-core.js` 中的 `./assets/data/site-data.json`

以后只改 `site-data-formatted.json`，不要手改 `site-data.json`。部署前先构建，让产物和源文件保持同步。

### 本地预览

不要直接用 `file://` 打开 HTML。站点会通过 `fetch("./assets/data/site-data.json")` 读取数据，直接双击文件会触发加载失败。

可用任一静态服务器：

```bash
python -m http.server 8000
```

或

```bash
npx http-server -p 8000
```

然后访问 `http://127.0.0.1:8000`。

### 日常维护流程

1. 编辑 `assets/data/site-data-formatted.json`
2. 运行 `npm run build`
3. 启动本地静态服务器检查页面
4. 提交并部署

`npm run build` 会先从格式化源文件生成 `site-data.json`，再执行校验。

### 校验规则

`check_json.js` 已接入构建流程，并可用于 `pre-commit`。当前会检查：

- JSON 语法是否合法
- 顶层各数据集合中的 `id` 是否重复
- `promptTemplates` 的双语字段是否缺失
- `site-data.json` 是否与 `site-data-formatted.json` 同步

可单独运行：

```bash
npm run validate:data
```

### 启用 pre-commit

仓库内已提供 `.githooks/pre-commit`，首次启用执行：

```bash
npm run setup:hooks
```

启用后，每次 `git commit` 前都会运行 `node check_json.js`。如果源文件非法、双语字段缺失，或者构建产物未同步，提交会被拦下。

### 站点内容入口

当前主要内容都在 `assets/data/site-data-formatted.json`：

- `meta`：作者、更新时间、仓库地址
- `cards`：研究入口、期刊、LaTeX、博客、AI 等卡片
- `journalCompare`：期刊对比表
- `quickSearchEngines`：快捷检索引擎
- `submissionGuide`：投稿核验步骤
- `subjects`：数学方向与教材书架
- `promptTemplates`：提示词模板

只有在修改交互、布局、筛选、主题或渲染逻辑时，才需要改 JS / CSS。

## 优化工具

仓库里确实还有一条“网站优化工具”线，但目前只是骨架，不是当前站点的生产流程。

现状如下：

- `src/types/config.ts`：优化配置类型
- `config/optimization.config.ts`：默认优化配置
- 缺少真正的 CLI 入口和构建实现，`src/cli.ts` 当前并不存在

所以现在不要把这部分当成站点部署流程的一部分。当前可运行、可维护的主流程仍然是静态页面 + JSON 数据。

如果后面继续做这条线，建议把它独立成真正的工具目录，再补上 CLI、输入输出目录和测试，而不是继续和站点维护流程混在同一个 README 里。

## 项目结构

```text
web_math/
├── assets/
│   ├── css/
│   ├── data/
│   │   ├── site-data-formatted.json
│   │   └── site-data.json
│   └── js/
│       └── site-core.js
├── config/
│   └── optimization.config.ts
├── scripts/
│   └── build-site-data.js
├── src/
│   └── types/
│       └── config.ts
├── .githooks/
│   └── pre-commit
├── check_json.js
├── README.md
└── Readme-en.md
```

## 常用命令

```bash
# 从格式化源文件生成部署用 JSON，并执行校验
npm run build

# 只执行校验
npm run validate:data

# 启用仓库内 pre-commit hook
npm run setup:hooks
```
