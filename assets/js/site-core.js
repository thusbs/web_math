const DATA_URL = "./assets/data/site-data.json";

const STORAGE_KEYS = {
    favorites: "web_math_favorites",
    recents: "web_math_recents",
    workspaceOrder: "web_math_workspace_order",
    theme: "web_math_theme",
    locale: "web_math_locale"
};

const UI_TEXT = {
    zh: {
        brand: "web_math",
        brandSub: "Mathematics Gateway",
        pageHome: "工作台",
        pageJournals: "期刊工具",
        pageSubjects: "数学分类",
        pageLatex: "LaTeX",
        pageBlogs: "博客聚合",
        pageAi: "AI 导航",
        themeLight: "浅色",
        themeDark: "深色",
        locale: "EN",
        github: "GitHub",
        favorite: "收藏",
        favorited: "已收藏",
        copy: "复制",
        copied: "已复制",
        noFavorites: "还没有收藏。你可以在任意卡片右上角点亮星标。",
        noRecents: "最近使用为空。点击外部资源后会自动记录到这里。",
        searchPlaceholder: "搜索期刊名、缩写、方向、出版社、是否官方、邮箱、AI 模型",
        searchResult: "全站搜索结果",
        searchEmpty: "没有匹配结果。试试缩写、出版社、方向、标签或 official。",
        workspace: "个人工作台",
        dragHint: "拖动面板可以重排首页顺序，顺序会保存在本地浏览器。",
        favoritesPanel: "收藏夹",
        recentsPanel: "最近使用",
        topPanel: "顶刊速达",
        pdePanel: "PDE 速达",
        mailPanel: "邮箱入口",
        aiPanel: "AI 入口",
        latexPanel: "LaTeX 入口",
        resourceCount: "资源入口",
        shelfCount: "专题书架",
        favoriteCount: "本地收藏",
        pageSections: "页面分区",
        quickTags: "快速标签",
        featuredPortals: "专题入口",
        featuredPortalsSummary: "把期刊、分类、LaTeX、博客和 AI 分成独立页，减少主页拥挤。",
        featuredResearch: "研究与检索",
        featuredResearchSummary: "预印本、评论数据库、期刊平台和参考库是数学检索的第一层入口。",
        featuredUtility: "邮件与博客",
        featuredUtilitySummary: "把学术工作流中高频但不属于期刊本体的入口单独收纳。",
        featuredAiLatex: "LaTeX 与 AI",
        featuredAiLatexSummary: "写作、绘图、排版和智能助手统一归档，便于切换工作流。",
        openAll: "全部打开",
        opened: "已打开",
        nothingToOpen: "没有可打开的链接",
        popupBlocked: "浏览器拦截了批量打开",
        sortDefault: "默认",
        sortFavorites: "收藏优先",
        sortRecents: "最近优先",
        sortTitle: "标题",
        quickSearch: "快捷检索",
        quickSearchSummary: "输入关键词后同时生成 arXiv、zbMATH、Scholar、MathSciNet 和 OEIS 的快捷入口。",
        openLinks: "生成检索入口",
        openBibtex: "获取 BibTeX",
        sciGuide: "SCI 收录核验步骤",
        sciGuideSummary: "投稿前优先按官方索引、评价指标和实际投稿经验三层核查。",
        compareTable: "期刊对比表",
        compareSummary: "这张表不直接给出硬编码的年度分区结论，而是给出定位和查询建议，避免过时信息误导。",
        subjectsSummary: "按八个常用方向组织教材与讲义入口。教材书架用于建立长期结构，讲义入口用于快速进入。",
        textbooks: "经典教材书架",
        lectureLinks: "讲义与课程入口",
        latexSummary: "把 LaTeX 的官网、发行版、模板、编辑器、符号速查、BibTeX 和 TikZ 统一到同一页。",
        toolbox: "LaTeX 工具箱",
        formulas: "公式与符号速查",
        bibtex: "BibTeX 工具",
        tikz: "TikZ 作品库",
        bibtexPlaceholder: "输入 DOI，例如 10.1007/s00222-010-0263-6",
        bibtexHelp: "优先尝试 Crossref 的 BibTeX 转换；如果失败，也会给出 DOI 和查询入口。",
        templates: "模板与编辑器",
        blogsSummary: "聚合数学博客、讲义站、研究笔记和个人博客，适合作为订阅清单和长期阅读入口。",
        aiSummary: "按用途分类展示常用模型、开发平台、模型对比、提示词模板，以及 AI + 数学辅助工具。",
        useCase: "用途分类",
        compareModels: "模型对比卡",
        prompts: "提示词模板",
        aiMath: "AI + 数学工具",
        promptCopied: "模板已复制到剪贴板。",
        dataLoadFailed: "数据加载失败。请通过本地静态服务器或线上部署访问，例如在仓库根目录运行 python -m http.server 8000。",
        backTop: "返回顶部",
        footerNote: "站点已经切换成数据驱动结构。后续新增链接优先修改 JSON 数据，而不是手改 HTML。"
    },
    en: {
        brand: "web_math",
        brandSub: "Mathematics Gateway",
        pageHome: "Workspace",
        pageJournals: "Journals",
        pageSubjects: "Subjects",
        pageLatex: "LaTeX",
        pageBlogs: "Blogs",
        pageAi: "AI Atlas",
        themeLight: "Light",
        themeDark: "Dark",
        locale: "中文",
        github: "GitHub",
        favorite: "Favorite",
        favorited: "Favorited",
        copy: "Copy",
        copied: "Copied",
        noFavorites: "No favorites yet. Use the star button on any card to save it.",
        noRecents: "No recent items yet. External resources appear here after you open them.",
        searchPlaceholder: "Search by journal, abbreviation, field, publisher, official, mail, or AI model",
        searchResult: "Global Search Results",
        searchEmpty: "No matches found. Try abbreviations, publishers, fields, tags, or official.",
        workspace: "Personal Workspace",
        dragHint: "Drag panels to reorder your workspace. The order is stored in localStorage.",
        favoritesPanel: "Favorites",
        recentsPanel: "Recent",
        topPanel: "Top Journals",
        pdePanel: "PDE Picks",
        mailPanel: "Mail",
        aiPanel: "AI",
        latexPanel: "LaTeX",
        resourceCount: "Resources",
        shelfCount: "Shelves",
        favoriteCount: "Favorites",
        pageSections: "Page Sections",
        quickTags: "Quick Tags",
        featuredPortals: "Portals",
        featuredPortalsSummary: "Split journals, subjects, LaTeX, blogs, and AI into focused pages.",
        featuredResearch: "Research and Search",
        featuredResearchSummary: "Preprints, reviews, journals, and references are the first layer of math navigation.",
        featuredUtility: "Mail and Blogs",
        featuredUtilitySummary: "High-frequency workflow entries that do not belong to journal browsing itself.",
        featuredAiLatex: "LaTeX and AI",
        featuredAiLatexSummary: "Writing, drawing, typesetting, and assistants collected in one place.",
        openAll: "Open All",
        opened: "Opened",
        nothingToOpen: "Nothing to open",
        popupBlocked: "Pop-up blocker stopped it",
        sortDefault: "Default",
        sortFavorites: "Favorites",
        sortRecents: "Recent",
        sortTitle: "Title",
        quickSearch: "Quick Search",
        quickSearchSummary: "Enter a keyword to generate shortcuts for arXiv, zbMATH, Scholar, MathSciNet, and OEIS.",
        openLinks: "Generate Links",
        openBibtex: "Get BibTeX",
        sciGuide: "SCI Verification Workflow",
        sciGuideSummary: "Check official indexing, ranking systems, and recent submission experience before sending a paper.",
        compareTable: "Journal Comparison Table",
        compareSummary: "The table avoids hard-coding yearly ranking claims. It focuses on positioning and where to verify current rankings.",
        subjectsSummary: "Eight common math directions, each with a five-book shelf and lecture entry points.",
        textbooks: "Classic Textbooks",
        lectureLinks: "Lecture and Notes Entry Points",
        latexSummary: "Collect official sites, templates, editors, symbols, BibTeX helpers, and TikZ examples on one page.",
        toolbox: "LaTeX Toolbox",
        formulas: "Formula and Symbol Reference",
        bibtex: "BibTeX Utility",
        tikz: "TikZ Gallery",
        bibtexPlaceholder: "Enter a DOI, for example 10.1007/s00222-010-0263-6",
        bibtexHelp: "Try the Crossref BibTeX transform first. Fallback links are also provided.",
        templates: "Templates and Editors",
        blogsSummary: "A curated aggregation of mathematics blogs, notes sites, lecture pages, and personal journals.",
        aiSummary: "Organize global models, Chinese models, developer platforms, prompt templates, comparisons, and AI+math tools.",
        useCase: "Use Cases",
        compareModels: "Model Comparison",
        prompts: "Prompt Templates",
        aiMath: "AI + Math Tools",
        promptCopied: "Template copied to clipboard.",
        dataLoadFailed: "Failed to load JSON data. Serve the site over HTTP, for example with python -m http.server 8000 in the repo root.",
        backTop: "Back to Top",
        footerNote: "The site is now data-driven. Add future links in JSON instead of editing raw HTML."
    }
};

const SITE_NAV = [
    { page: "home", href: "./index.html" },
    { page: "journals", href: "./journals.html" },
    { page: "subjects", href: "./subjects.html" },
    { page: "latex", href: "./latex.html" },
    { page: "blogs", href: "./blogs.html" },
    { page: "ai", href: "./ai.html" }
];

const HOME_WORKSPACE_DEFAULT = [
    "favorites",
    "recents",
    "top-journals",
    "pde-journals",
    "mail",
    "ai",
    "latex"
];

// Cap batch-open actions so a single click does not flood the browser with tabs.
const OPEN_ALL_LIMIT = 8;

const WORKSPACE_PANELS = {
    favorites: { icon: "fas fa-star", titleKey: "favoritesPanel", kind: "Local Storage" },
    recents: { icon: "fas fa-history", titleKey: "recentsPanel", kind: "Local Storage" },
    "top-journals": { icon: "fas fa-crown", titleKey: "topPanel", kind: "Pinned Group", ids: ["annals", "inventiones", "jams", "acta"] },
    "pde-journals": { icon: "fas fa-wave-square", titleKey: "pdePanel", kind: "Pinned Group", ids: ["jde", "cpde", "calcvar", "apde"] },
    mail: { icon: "fas fa-envelope", titleKey: "mailPanel", kind: "Pinned Group", ids: ["gmail", "icloud-mail", "topmkter-mail", "qq-mail"] },
    ai: { icon: "fas fa-robot", titleKey: "aiPanel", kind: "Pinned Group", ids: ["chatgpt", "claude", "qwen", "deepseek"] },
    latex: { icon: "fas fa-square-root-alt", titleKey: "latexPanel", kind: "Pinned Group", ids: ["latex-project", "ctan", "overleaf", "texstudio"] }
};

const PAGE_CONFIG = {
    home: {
        titleZh: "数学与 AI 工作台",
        titleEn: "Math and AI Workspace",
        eyebrow: "Pure Static / JSON Driven / Research Workflow",
        summaryZh: "把期刊、投稿工具、数学分类、LaTeX、博客和 AI 拆成独立页，再把收藏、最近使用和拖拽工作台放回首页。这样首页更像你的长期工作台，而不是一次性链接堆栈。",
        summaryEn: "Turn journals, submission tools, subjects, LaTeX, blogs, and AI into dedicated pages, then bring favorites, recents, and a drag-and-drop workspace back to the homepage.",
        actions: [
            { href: "./journals.html", labelZh: "打开期刊工具页", labelEn: "Open Journal Tools", primary: true },
            { href: "./ai.html", labelZh: "打开 AI 导航", labelEn: "Open AI Atlas", primary: false }
        ],
        sections: [
            { id: "workspace", labelZh: "工作台", labelEn: "Workspace" },
            { id: "search-lab", labelZh: "全站搜索", labelEn: "Search" },
            { id: "portals", labelZh: "专题入口", labelEn: "Portals" },
            { id: "featured-research", labelZh: "研究检索", labelEn: "Research" },
            { id: "featured-utility", labelZh: "邮件与博客", labelEn: "Mail & Blogs" },
            { id: "featured-ai", labelZh: "LaTeX 与 AI", labelEn: "LaTeX & AI" }
        ]
    },
    journals: {
        titleZh: "期刊与投稿工具",
        titleEn: "Journal and Submission Tools",
        eyebrow: "Top Journals / PDE / Ranking / Submission",
        summaryZh: "把四大顶刊、核心数学期刊、PDE 期刊、投稿查询站和 SCI 收录核验步骤放到同一页，形成真正能用于投稿前检查的工作台。",
        summaryEn: "Keep top journals, PDE journals, ranking resources, and SCI verification steps on a dedicated page for submission workflow.",
        sections: [
            { id: "quick-search", labelZh: "快捷检索", labelEn: "Quick Search" },
            { id: "journal-compare", labelZh: "期刊对比", labelEn: "Compare" },
            { id: "submission-lab", labelZh: "投稿辅助", labelEn: "Submission" },
            { id: "top-journals", labelZh: "顶刊", labelEn: "Top Journals" },
            { id: "general-journals", labelZh: "数学期刊", labelEn: "Core Journals" },
            { id: "pde-journals", labelZh: "PDE", labelEn: "PDE" }
        ]
    },
    subjects: {
        titleZh: "数学分类与经典教材",
        titleEn: "Math Subjects and Core Textbooks",
        eyebrow: "Algebra / Geometry / Analysis / PDE / Probability",
        summaryZh: "把常见方向拆成独立专题，每个方向保留 5 本经典教材和若干课程入口，适合作为长期学习索引。",
        summaryEn: "Eight subjects, each with a five-book shelf and lecture entry points.",
        sections: [
            { id: "subject-index", labelZh: "分类索引", labelEn: "Index" },
            { id: "subject-shelves", labelZh: "教材书架", labelEn: "Shelves" }
        ]
    },
    latex: {
        titleZh: "LaTeX 工具箱",
        titleEn: "LaTeX Toolbox",
        eyebrow: "Official / Templates / Symbols / BibTeX / TikZ",
        summaryZh: "把 LaTeX 的安装、模板、编辑器、符号速查、BibTeX 和 TikZ 统一到同一页，减少写作时来回跳转。",
        summaryEn: "Collect official sites, templates, editors, symbols, BibTeX helpers, and TikZ examples on one page.",
        sections: [
            { id: "latex-tools", labelZh: "工具箱", labelEn: "Tools" },
            { id: "latex-templates", labelZh: "模板", labelEn: "Templates" },
            { id: "latex-formulas", labelZh: "符号速查", labelEn: "Formula Reference" },
            { id: "latex-bibtex", labelZh: "BibTeX", labelEn: "BibTeX" },
            { id: "latex-tikz", labelZh: "TikZ", labelEn: "TikZ" }
        ]
    },
    blogs: {
        titleZh: "学术博客聚合",
        titleEn: "Academic Blog Aggregation",
        eyebrow: "Math Blogs / Research Notes / Personal Sites",
        summaryZh: "把数学博客、讲义站、研究笔记和个人站点按主题聚合，适合作为订阅清单和长期阅读入口。",
        summaryEn: "Aggregate mathematics blogs, notes sites, lecture pages, and personal pages in one place.",
        sections: [
            { id: "blog-index", labelZh: "博客入口", labelEn: "Blogs" }
        ]
    },
    ai: {
        titleZh: "AI 导航与工作流",
        titleEn: "AI Navigation and Workflow",
        eyebrow: "Models / Platforms / Prompts / AI + Math",
        summaryZh: "把国际模型、国内模型、开发平台、模型对比、提示词模板和 AI + 数学工具拆开整理，避免 AI 页只是简单的链接清单。",
        summaryEn: "Organize global models, Chinese models, developer platforms, prompt templates, comparisons, and AI+math tools.",
        sections: [
            { id: "ai-models", labelZh: "模型入口", labelEn: "Models" },
            { id: "ai-compare", labelZh: "模型对比", labelEn: "Comparison" },
            { id: "ai-prompts", labelZh: "提示词模板", labelEn: "Prompts" },
            { id: "ai-math-tools", labelZh: "AI+数学", labelEn: "AI + Math" }
        ]
    }
};

let siteData = null;
let cardMap = new Map();
let state = null;
let currentPage = "home";
let loadError = null;
let uiState = {
    homeSearch: "",
    homeSort: "default",
    activeTags: {
        home: [],
        journals: [],
        blogs: [],
        ai: [],
        latex: []
    }
};

init();

async function init() {
    currentPage = document.body.dataset.page || "home";
    const root = document.getElementById("site-root");
    root.innerHTML = `<div class="loading-shell">Loading site data...</div>`;
    loadError = null;

    try {
        siteData = await fetchSiteData();
    } catch (error) {
        loadError = error;
        root.innerHTML = renderLoadError(error);
        return;
    }

    cardMap = new Map(siteData.cards.map((card) => [card.id, card]));
    state = loadState();
    applyTheme(state.theme);
    renderApp();
}

async function fetchSiteData() {
    let response;

    try {
        response = await fetch(DATA_URL, { cache: "no-store" });
    } catch (error) {
        const wrapped = new Error(`Unable to fetch ${DATA_URL}`);
        wrapped.kind = window.location.protocol === "file:" ? "file-protocol" : "network";
        wrapped.url = DATA_URL;
        wrapped.cause = error;
        throw wrapped;
    }

    if (!response.ok) {
        const error = new Error(`Failed to load ${DATA_URL} (${response.status})`);
        error.kind = "http";
        error.status = response.status;
        error.url = DATA_URL;
        throw error;
    }

    try {
        return await response.json();
    } catch (error) {
        const wrapped = new Error(`Invalid JSON in ${DATA_URL}`);
        wrapped.kind = "parse";
        wrapped.url = DATA_URL;
        wrapped.cause = error;
        throw wrapped;
    }
}

function loadState() {
    return {
        favorites: readArray(STORAGE_KEYS.favorites),
        recents: readArray(STORAGE_KEYS.recents),
        workspaceOrder: readArray(STORAGE_KEYS.workspaceOrder),
        theme: localStorage.getItem(STORAGE_KEYS.theme) || "light",
        locale: localStorage.getItem(STORAGE_KEYS.locale) || "zh"
    };
}

function readArray(key) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) {
            return [];
        }
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        return [];
    }
}

function saveArray(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getText(key) {
    const locale = state?.locale || "zh";
    const dict = UI_TEXT[locale] || UI_TEXT.zh;
    return dict[key] || UI_TEXT.zh[key] || key;
}

function resolveText(item, field) {
    if (!item) {
        return "";
    }
    const locale = state?.locale || "zh";
    if (locale === "en" && item[`${field}_en`]) {
        return item[`${field}_en`];
    }
    return item[field] || item[`${field}_en`] || "";
}

function resolveSummary(item) {
    return resolveText(item, "summary");
}

function renderApp() {
    const root = document.getElementById("site-root");
    const pageConfig = PAGE_CONFIG[currentPage] || PAGE_CONFIG.home;

    root.innerHTML = `
        <div class="site-shell">
            ${renderHeader()}
            ${renderHero(pageConfig)}
            ${renderPageNav(pageConfig)}
            ${renderCurrentPage(pageConfig)}
            ${renderFooter()}
        </div>
        <button class="floating-top" id="back-to-top" type="button" aria-label="${escapeHtml(getText("backTop"))}">
            <i class="fas fa-arrow-up"></i>
        </button>
    `;

    bindCommonEvents(root);
    initSectionSpy(root);
    initBackToTop();
    initWorkspaceDnD(root);
    initHomeSearch(root);
    initQuickSearch(root);
    initScopedFilters(root);
    initBibtexTool(root);
}

function renderHeader() {
    const navHtml = SITE_NAV.map((item) => {
        const keyMap = {
            home: "pageHome",
            journals: "pageJournals",
            subjects: "pageSubjects",
            latex: "pageLatex",
            blogs: "pageBlogs",
            ai: "pageAi"
        };

        return `
            <a href="${item.href}" class="${item.page === currentPage ? "is-page-active" : ""}">
                ${escapeHtml(getText(keyMap[item.page]))}
            </a>
        `;
    }).join("");

    return `
        <header class="site-header">
            <a class="brand" href="./index.html">
                <span class="brand-mark">${currentPage === "ai" ? "AI" : "∫"}</span>
                <span class="brand-text">
                    <strong>${escapeHtml(getText("brand"))}</strong>
                    <small>${escapeHtml(getText("brandSub"))}</small>
                </span>
            </a>
            <nav class="header-nav" aria-label="Primary navigation">
                ${navHtml}
            </nav>
            <div class="header-actions">
                <button class="utility-button ${state.theme === "dark" ? "is-on" : ""}" id="theme-toggle" type="button">
                    <i class="fas fa-moon"></i>
                    <span>${escapeHtml(state.theme === "dark" ? getText("themeDark") : getText("themeLight"))}</span>
                </button>
                <button class="utility-button" id="locale-toggle" type="button">
                    <i class="fas fa-language"></i>
                    <span>${escapeHtml(getText("locale"))}</span>
                </button>
                <a class="repo-link" href="${escapeHtml(siteData.meta.repo)}" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i>
                    <span>${escapeHtml(getText("github"))}</span>
                </a>
            </div>
        </header>
    `;
}

function renderHero(pageConfig) {
    const metrics = getHeroMetrics();

    return `
        <section class="page-hero">
            <div class="hero-grid">
                <div class="hero-copy">
                    <p class="eyebrow">${escapeHtml(pageConfig.eyebrow)}</p>
                    <h1>${escapeHtml(resolveText(pageConfig, state.locale === "en" ? "titleEn" : "titleZh"))}</h1>
                    <p class="hero-summary">${escapeHtml(state.locale === "en" ? pageConfig.summaryEn : pageConfig.summaryZh)}</p>
                    ${renderHeroActions(pageConfig.actions || [])}
                    <div class="metric-grid">
                        ${metrics.map((metric) => `
                            <article class="metric-card">
                                <strong>${escapeHtml(String(metric.value))}</strong>
                                <span>${escapeHtml(metric.label)}</span>
                            </article>
                        `).join("")}
                    </div>
                </div>
                <div class="hero-panel">
                    ${renderHeroPanel()}
                </div>
            </div>
        </section>
    `;
}

function renderHeroActions(actions) {
    if (!actions.length) {
        return "";
    }

    return `
        <div class="hero-actions">
            ${actions.map((action) => `
                <a class="${action.primary ? "primary-button" : "secondary-button"}" href="${action.href}">
                    ${escapeHtml(state.locale === "en" ? action.labelEn : action.labelZh)}
                </a>
            `).join("")}
        </div>
    `;
}

function getHeroMetrics() {
    if (currentPage === "home") {
        return [
            { value: siteData.cards.length, label: getText("resourceCount") },
            { value: PAGE_CONFIG.home.sections.length, label: getText("pageSections") },
            { value: state.favorites.length, label: getText("favoriteCount") }
        ];
    }

    if (currentPage === "journals") {
        return [
            { value: countByGroups(["top-journals", "general-journals", "pde-journals", "ranking"]), label: getText("resourceCount") },
            { value: siteData.journalCompare.length, label: getText("compareTable") },
            { value: siteData.quickSearchEngines.length, label: getText("quickSearch") }
        ];
    }

    if (currentPage === "subjects") {
        return [
            { value: siteData.subjects.length, label: getText("shelfCount") },
            { value: siteData.subjects.reduce((sum, subject) => sum + subject.books.length, 0), label: getText("textbooks") },
            { value: siteData.subjects.reduce((sum, subject) => sum + subject.links.length, 0), label: getText("lectureLinks") }
        ];
    }

    if (currentPage === "latex") {
        return [
            { value: countByGroups(["latex-tools", "latex-templates"]), label: getText("resourceCount") },
            { value: siteData.latexFormulas.length, label: getText("formulas") },
            { value: siteData.tikzGallery.length, label: getText("tikz") }
        ];
    }

    if (currentPage === "blogs") {
        return [
            { value: countByGroups(["blog-math", "blog-notes", "blog-personal"]), label: getText("resourceCount") },
            { value: 3, label: getText("quickTags") },
            { value: state.recents.length, label: getText("recentsPanel") }
        ];
    }

    return [
        { value: countByGroups(["ai-global", "ai-china", "ai-platform", "ai-math"]), label: getText("resourceCount") },
        { value: siteData.aiComparison.length, label: getText("compareModels") },
        { value: siteData.promptTemplates.length, label: getText("prompts") }
    ];
}

function countByGroups(groups) {
    return siteData.cards.filter((card) => groups.includes(card.group)).length;
}

function renderHeroPanel() {
    if (currentPage === "home") {
        return `
            <div class="panel-heading">
                <p class="eyebrow">${escapeHtml(getText("quickTags"))}</p>
                <strong>${escapeHtml(getText("searchResult"))}</strong>
            </div>
            <div class="filter-row">
                ${["顶刊", "PDE", "LaTeX", "中文社区", "邮箱", "AI", "官方"].map((tag) => renderTagChip(tag, "home")).join("")}
            </div>
            <p class="panel-note">${escapeHtml(getText("dragHint"))}</p>
            <div class="panel-actions">
                <a class="secondary-button" href="./journals.html">${escapeHtml(getText("pageJournals"))}</a>
                <a class="secondary-button" href="./latex.html">${escapeHtml(getText("pageLatex"))}</a>
            </div>
        `;
    }

    if (currentPage === "journals") {
        return `
            <div class="panel-heading">
                <p class="eyebrow">${escapeHtml(getText("quickSearch"))}</p>
                <strong>${escapeHtml(getText("quickSearchSummary"))}</strong>
            </div>
            <p class="panel-note">${escapeHtml(getText("sciGuideSummary"))}</p>
            <div class="panel-actions">
                <a class="secondary-button" href="#journal-compare">${escapeHtml(getText("compareTable"))}</a>
                <a class="secondary-button" href="#submission-lab">${escapeHtml(getText("sciGuide"))}</a>
            </div>
        `;
    }

    if (currentPage === "subjects") {
        return `
            <div class="panel-heading">
                <p class="eyebrow">${escapeHtml(getText("textbooks"))}</p>
                <strong>${escapeHtml(getText("subjectsSummary"))}</strong>
            </div>
            <div class="filter-row">
                ${siteData.subjects.map((subject) => `<a class="page-nav-link" href="#subject-${subject.id}">${escapeHtml(resolveText(subject, "title"))}</a>`).join("")}
            </div>
        `;
    }

    if (currentPage === "latex") {
        return `
            <div class="panel-heading">
                <p class="eyebrow">${escapeHtml(getText("templates"))}</p>
                <strong>${escapeHtml(getText("latexSummary"))}</strong>
            </div>
            <div class="panel-actions">
                <a class="secondary-button" href="#latex-formulas">${escapeHtml(getText("formulas"))}</a>
                <a class="secondary-button" href="#latex-bibtex">${escapeHtml(getText("bibtex"))}</a>
            </div>
        `;
    }

    if (currentPage === "blogs") {
        return `
            <div class="panel-heading">
                <p class="eyebrow">${escapeHtml(getText("featuredPortals"))}</p>
                <strong>${escapeHtml(getText("blogsSummary"))}</strong>
            </div>
            <div class="filter-row">
                ${["数学博客", "研究笔记", "个人站点"].map((tag) => renderTagChip(tag, "blogs")).join("")}
            </div>
        `;
    }

    return `
        <div class="panel-heading">
            <p class="eyebrow">${escapeHtml(getText("useCase"))}</p>
            <strong>${escapeHtml(getText("aiSummary"))}</strong>
        </div>
        <div class="filter-row">
            ${["写作", "编程", "搜索", "长文档", "中文", "API", "数学"].map((tag) => renderTagChip(tag, "ai")).join("")}
        </div>
        <p class="panel-note">${escapeHtml(getText("promptCopied"))}</p>
    `;
}

function renderPageNav(pageConfig) {
    if (!pageConfig.sections?.length) {
        return "";
    }

    return `
        <nav class="page-nav" aria-label="${escapeHtml(getText("pageSections"))}">
            ${pageConfig.sections.map((section) => `
                <a class="page-nav-link" href="#${section.id}" data-target="${section.id}">
                    ${escapeHtml(state.locale === "en" ? section.labelEn : section.labelZh)}
                </a>
            `).join("")}
        </nav>
    `;
}

function renderCurrentPage() {
    switch (currentPage) {
        case "journals":
            return renderJournalsPage();
        case "subjects":
            return renderSubjectsPage();
        case "latex":
            return renderLatexPage();
        case "blogs":
            return renderBlogsPage();
        case "ai":
            return renderAiPage();
        default:
            return renderHomePage();
    }
}

function renderHomePage() {
    return [
        renderWorkspaceSection(),
        renderHomeSearchSection(),
        renderPortalSection(),
        renderCardCollectionSection({
            id: "featured-research",
            title: getText("featuredResearch"),
            summary: getText("featuredResearchSummary"),
            cards: getCardsByGroups(["research", "ranking"]).slice(0, 12)
        }),
        renderCardCollectionSection({
            id: "featured-utility",
            title: getText("featuredUtility"),
            summary: getText("featuredUtilitySummary"),
            cards: getCardsByGroups(["mail", "blog-math", "blog-notes", "blog-personal"]).slice(0, 12)
        }),
        renderCardCollectionSection({
            id: "featured-ai",
            title: getText("featuredAiLatex"),
            summary: getText("featuredAiLatexSummary"),
            cards: getCardsByGroups(["latex-tools", "latex-templates", "ai-global", "ai-china"]).slice(0, 12)
        })
    ].join("");
}

function renderJournalsPage() {
    return [
        renderQuickSearchSection(),
        renderJournalCompareSection(),
        renderSubmissionLabSection(),
        renderCardCollectionSection({
            id: "top-journals",
            title: state.locale === "en" ? "Four Major Journals" : "四大顶刊",
            summary: state.locale === "en"
                ? "The canonical four-title entry shelf for pure mathematics."
                : "按学术声誉最常被并列提到的四大顶刊，作为第一层入口。",
            cards: getCardsByGroup("top-journals"),
            scope: "journals",
            chips: ["顶刊", "官方", "综合", "Springer", "AMS"]
        }),
        renderCardCollectionSection({
            id: "general-journals",
            title: state.locale === "en" ? "Core Mathematics Journals" : "核心数学期刊",
            summary: state.locale === "en"
                ? "A broader working shelf covering strong general mathematics venues."
                : "扩展到常用综合数学期刊，适合作为投稿与日常浏览的第二层书架。",
            cards: getCardsByGroup("general-journals"),
            scope: "journals"
        }),
        renderCardCollectionSection({
            id: "pde-journals",
            title: state.locale === "en" ? "PDE Journals" : "PDE 期刊",
            summary: state.locale === "en"
                ? "Dedicated PDE shelf with theory, analysis, and applied analysis venues."
                : "围绕偏微分方程、分析与相关方向整理的专门期刊书架。",
            cards: getCardsByGroup("pde-journals"),
            scope: "journals",
            chips: ["PDE", "OA", "官方", "Springer", "Elsevier", "SIAM"]
        })
    ].join("");
}

function renderSubjectsPage() {
    return [
        renderSection(
            "subject-index",
            state.locale === "en" ? "Subject Index" : "数学分类索引",
            getText("subjectsSummary"),
            `
                <div class="subject-toolbar">
                    ${siteData.subjects.map((subject) => `
                        <a class="page-nav-link" href="#subject-${subject.id}">
                            ${escapeHtml(resolveText(subject, "title"))}
                        </a>
                    `).join("")}
                </div>
            `
        ),
        renderSection(
            "subject-shelves",
            getText("textbooks"),
            state.locale === "en"
                ? "Each direction keeps a compact shelf of core textbooks and lecture entry points."
                : "每个方向保留一组经典教材和课程入口，兼顾长期学习和快速回查。",
            `
                <div class="subject-grid">
                    ${siteData.subjects.map(renderSubjectBlock).join("")}
                </div>
            `
        )
    ].join("");
}

function renderLatexPage() {
    return [
        renderCardCollectionSection({
            id: "latex-tools",
            title: getText("toolbox"),
            summary: getText("latexSummary"),
            cards: getCardsByGroup("latex-tools"),
            scope: "latex",
            chips: ["官方", "编辑器", "模板", "TikZ", "BibTeX"]
        }),
        renderCardCollectionSection({
            id: "latex-templates",
            title: getText("templates"),
            summary: state.locale === "en"
                ? "Journal, Beamer, CV, and authoring templates gathered into a separate shelf."
                : "期刊模板、Beamer 模板、简历模板与作者说明单独收纳，减少写作时反复搜索。",
            cards: getCardsByGroup("latex-templates"),
            scope: "latex"
        }),
        renderLatexFormulaSection(),
        renderLatexBibtexSection(),
        renderTikzSection()
    ].join("");
}

function renderBlogsPage() {
    return renderCardCollectionSection({
        id: "blog-index",
        title: state.locale === "en" ? "Blog Aggregation" : "博客与研究笔记",
        summary: getText("blogsSummary"),
        cards: getCardsByGroups(["blog-math", "blog-notes", "blog-personal"]),
        scope: "blogs",
        chips: ["数学博客", "研究笔记", "个人站点"]
    });
}

function renderAiPage() {
    return [
        renderCardCollectionSection({
            id: "ai-models",
            title: state.locale === "en" ? "Models and Platforms" : "模型与平台入口",
            summary: getText("aiSummary"),
            cards: getCardsByGroups(["ai-global", "ai-china", "ai-platform"]),
            scope: "ai",
            chips: ["写作", "编程", "搜索", "长文档", "中文", "API"]
        }),
        renderAiCompareSection(),
        renderPromptSection(),
        renderCardCollectionSection({
            id: "ai-math-tools",
            title: getText("aiMath"),
            summary: state.locale === "en"
                ? "Formula OCR, symbolic assistance, paper summarization, and research copilots."
                : "围绕公式 OCR、符号计算、论文检索和长文档阅读的 AI + 数学工具。",
            cards: getCardsByGroup("ai-math"),
            scope: "ai",
            chips: ["数学", "OCR", "搜索", "长文档"]
        })
    ].join("");
}

function renderWorkspaceSection() {
    const panels = getWorkspaceOrder();

    return renderSection(
        "workspace",
        getText("workspace"),
        getText("dragHint"),
        `
            <div class="workspace-grid" data-workspace-grid>
                ${panels.map((panelId) => renderWorkspacePanel(panelId)).join("")}
            </div>
        `
    );
}

function renderWorkspacePanel(panelId) {
    const panel = WORKSPACE_PANELS[panelId];

    if (!panel) {
        return "";
    }

    let content = "";

    if (panelId === "favorites") {
        const favorites = state.favorites.map((id) => cardMap.get(id)).filter(Boolean);
        content = favorites.length ? renderMiniCardGrid(favorites, panelId) : `<p class="empty-hint">${escapeHtml(getText("noFavorites"))}</p>`;
    } else if (panelId === "recents") {
        const recents = state.recents.map((id) => cardMap.get(id)).filter(Boolean);
        content = recents.length ? renderMiniCardGrid(recents, panelId) : `<p class="empty-hint">${escapeHtml(getText("noRecents"))}</p>`;
    } else {
        const cards = (panel.ids || []).map((id) => cardMap.get(id)).filter(Boolean);
        content = renderMiniCardGrid(cards, panelId);
    }

    return `
        <article class="workspace-panel" draggable="true" data-panel-id="${escapeHtml(panelId)}">
            <div class="workspace-head">
                <div>
                    <span class="workspace-kind">
                        <i class="${panel.icon}"></i>
                        ${escapeHtml(panel.kind)}
                    </span>
                    <h3 class="portal-title">${escapeHtml(getText(panel.titleKey))}</h3>
                </div>
                <span class="drag-handle" aria-hidden="true">
                    <i class="fas fa-grip-vertical"></i>
                </span>
            </div>
            ${content}
        </article>
    `;
}

function renderHomeSearchSection() {
    const results = getHomeSearchResults();

    return renderSection(
        "search-lab",
        getText("searchResult"),
        state.locale === "en"
            ? "Search across journals, abbreviations, fields, publishers, official status, mail, and AI tools."
            : "跨期刊名、缩写、方向、出版社、是否官方、邮箱和 AI 工具做全站搜索。",
        `
            <div class="search-toolbar">
                <input
                    class="search-input"
                    type="search"
                    data-home-search
                    value="${escapeHtml(uiState.homeSearch)}"
                    placeholder="${escapeHtml(getText("searchPlaceholder"))}"
                />
                <div class="filter-row">
                    ${["顶刊", "PDE", "LaTeX", "中文社区", "邮箱", "AI", "官方"].map((tag) => renderTagChip(tag, "home")).join("")}
                </div>
                <div class="toolbar-row">
                    <div class="filter-row">
                        ${[
                            ["default", "sortDefault"],
                            ["favorites", "sortFavorites"],
                            ["recents", "sortRecents"],
                            ["title", "sortTitle"]
                        ].map(([mode, labelKey]) => renderSortChip(mode, labelKey)).join("")}
                    </div>
                    ${renderOpenAllButton("search-lab")}
                </div>
            </div>
            <div class="search-results-shell">
                <div class="search-result-head">
                    <strong>${escapeHtml(getText("searchResult"))}</strong>
                    <span class="meta-line">${escapeHtml(String(results.length))}</span>
                </div>
                <div data-home-search-results>
                    ${results.length ? `<div class="card-grid">${results.map((card) => renderCard(card)).join("")}</div>` : renderEmptyState(getText("searchEmpty"))}
                </div>
            </div>
        `
    );
}

function renderPortalSection() {
    const portals = [
        {
            href: "./journals.html",
            icon: "fas fa-book-open",
            kind: state.locale === "en" ? "Journal Lab" : "期刊工具",
            title: getText("pageJournals"),
            summary: state.locale === "en"
                ? "Top journals, PDE journals, ranking lookup, quick search, and submission workflow."
                : "四大顶刊、PDE 期刊、分区查询、快捷检索和投稿流程集中页。"
        },
        {
            href: "./subjects.html",
            icon: "fas fa-sitemap",
            kind: state.locale === "en" ? "Subject Map" : "数学分类",
            title: getText("pageSubjects"),
            summary: state.locale === "en"
                ? "Eight directions with textbook shelves and lecture entry points."
                : "八个常见方向的教材书架和课程入口。"
        },
        {
            href: "./latex.html",
            icon: "fas fa-square-root-alt",
            kind: state.locale === "en" ? "LaTeX Desk" : "LaTeX 工具",
            title: getText("pageLatex"),
            summary: state.locale === "en"
                ? "Official tools, templates, symbols, BibTeX utility, and TikZ gallery."
                : "官网、模板、公式速查、BibTeX 工具和 TikZ 作品库。"
        },
        {
            href: "./blogs.html",
            icon: "fas fa-feather-alt",
            kind: state.locale === "en" ? "Reading Feed" : "博客聚合",
            title: getText("pageBlogs"),
            summary: state.locale === "en"
                ? "Mathematics blogs, lecture-note sites, and personal research journals."
                : "数学博客、讲义站和研究笔记的长期阅读入口。"
        },
        {
            href: "./ai.html",
            icon: "fas fa-robot",
            kind: state.locale === "en" ? "AI Atlas" : "AI 导航",
            title: getText("pageAi"),
            summary: state.locale === "en"
                ? "Use-case classification, model comparison, prompts, and math-centric AI tools."
                : "用途分类、模型对比、提示词模板和 AI + 数学工具。"
        }
    ];

    return renderSection(
        "portals",
        getText("featuredPortals"),
        getText("featuredPortalsSummary"),
        `
            <div class="portal-grid">
                ${portals.map(renderPortalCard).join("")}
            </div>
        `
    );
}

function renderQuickSearchSection() {
    return renderSection(
        "quick-search",
        getText("quickSearch"),
        getText("quickSearchSummary"),
        `
            <div class="hero-panel">
                <input
                    id="quick-search-input"
                    class="panel-input"
                    type="search"
                    placeholder="${escapeHtml(state.locale === "en" ? "Enter a theorem, author, PDE topic, formula, or sequence" : "输入主题、作者、定理、PDE 方向、公式或整数序列")}"
                />
                <div class="panel-actions">
                    <button class="panel-submit" id="quick-search-submit" type="button">${escapeHtml(getText("openLinks"))}</button>
                    ${renderOpenAllButton("quick-search")}
                </div>
                <div id="quick-search-results" class="mini-card-grid"></div>
            </div>
        `
    );
}

function renderJournalCompareSection() {
    return renderSection(
        "journal-compare",
        getText("compareTable"),
        getText("compareSummary"),
        `
            <div class="table-wrap">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>${escapeHtml(state.locale === "en" ? "Journal" : "期刊")}</th>
                            <th>${escapeHtml(state.locale === "en" ? "Abbr." : "缩写")}</th>
                            <th>${escapeHtml(state.locale === "en" ? "Direction" : "方向")}</th>
                            <th>${escapeHtml(state.locale === "en" ? "Publisher" : "出版社")}</th>
                            <th>${escapeHtml(state.locale === "en" ? "OA" : "开放获取")}</th>
                            <th>${escapeHtml(state.locale === "en" ? "Official" : "官网")}</th>
                            <th>${escapeHtml(state.locale === "en" ? "Ranking Check" : "分区核验")}</th>
                            <th>${escapeHtml(state.locale === "en" ? "Site" : "入口")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${siteData.journalCompare.map(renderJournalCompareRow).join("")}
                    </tbody>
                </table>
            </div>
        `
    );
}

function renderSubmissionLabSection() {
    return renderSection(
        "submission-lab",
        getText("sciGuide"),
        getText("sciGuideSummary"),
        `
            <div class="card-grid">
                ${getCardsByGroup("ranking").map((card) => renderCard(card)).join("")}
            </div>
            <div class="step-grid">
                ${siteData.submissionGuide.steps.map(renderStepCard).join("")}
            </div>
        `
    );
}

function renderLatexFormulaSection() {
    return renderSection(
        "latex-formulas",
        getText("formulas"),
        state.locale === "en"
            ? "A quick reference for frequently used commands in algebra, analysis, PDE, and writing."
            : "把数学写作里最常用的命令拆成几个小表，适合写作时快速回看。",
        `
            <div class="formula-grid">
                ${siteData.latexFormulas.map(renderFormulaCard).join("")}
            </div>
        `
    );
}

function renderLatexBibtexSection() {
    const helperCards = ["crossref-search", "openalex", "jabref"].map((id) => cardMap.get(id)).filter(Boolean);

    return renderSection(
        "latex-bibtex",
        getText("bibtex"),
        getText("bibtexHelp"),
        `
            <div class="hero-panel">
                <input
                    id="bibtex-doi"
                    class="panel-input"
                    type="text"
                    placeholder="${escapeHtml(getText("bibtexPlaceholder"))}"
                />
                <div class="panel-actions">
                    <button class="panel-submit" id="bibtex-submit" type="button">${escapeHtml(getText("openBibtex"))}</button>
                    <button class="secondary-button" id="bibtex-copy" type="button">${escapeHtml(getText("copy"))}</button>
                </div>
                <div id="bibtex-output" class="result-box">${escapeHtml(state.locale === "en" ? "BibTeX output will appear here." : "BibTeX 结果会显示在这里。")}</div>
            </div>
            <div class="mini-card-grid">
                ${helperCards.map((card) => renderCard(card, { compact: true })).join("")}
            </div>
        `
    );
}

function renderTikzSection() {
    return renderSection(
        "latex-tikz",
        getText("tikz"),
        state.locale === "en"
            ? "Collect examples by graph theory, geometry, flowchart, and commutative diagram."
            : "按图论、几何、流程图和交换图整理 TikZ 入口，减少反复找示例的成本。",
        `
            <div class="mini-card-grid">
                ${siteData.tikzGallery.map((item) => renderGeneratedLinkCard({
                    title: resolveText(item, "title"),
                    summary: resolveText(item, "summary"),
                    url: item.url,
                    kind: item.kind || "TikZ",
                    tags: item.tags || []
                })).join("")}
            </div>
        `
    );
}

function renderAiCompareSection() {
    return renderSection(
        "ai-compare",
        getText("compareModels"),
        state.locale === "en"
            ? "A workflow-focused comparison, not a benchmark chart."
            : "按中文能力、API、代码、长文档和典型用途对常用模型做工作流向的比较。",
        `
            <div class="table-wrap">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>${escapeHtml(state.locale === "en" ? "Model" : "模型")}</th>
                            <th>${escapeHtml(state.locale === "en" ? "Chinese" : "中文")}</th>
                            <th>${escapeHtml(state.locale === "en" ? "API" : "API")}</th>
                            <th>${escapeHtml(state.locale === "en" ? "Coding" : "代码")}</th>
                            <th>${escapeHtml(state.locale === "en" ? "Long Docs" : "长文档")}</th>
                            <th>${escapeHtml(state.locale === "en" ? "Notes" : "备注")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${siteData.aiComparison.map(renderAiCompareRow).join("")}
                    </tbody>
                </table>
            </div>
        `
    );
}

function renderPromptSection() {
    return renderSection(
        "ai-prompts",
        getText("prompts"),
        state.locale === "en"
            ? "A small prompt library for proof drafting, paper polishing, LaTeX cleanup, and code reading."
            : "给数学证明、论文润色、LaTeX 排版和代码解释准备了可直接复制的提示词模板。",
        `
            <div class="prompt-grid">
                ${siteData.promptTemplates.map(renderPromptCard).join("")}
            </div>
        `
    );
}

function renderCardCollectionSection({ id, title, summary, cards, scope = "", chips = [] }) {
    const toolbar = chips.length
        ? `<div class="filter-row">${chips.map((tag) => renderTagChip(tag, scope)).join("")}</div>`
        : "";

    return renderSection(
        id,
        title,
        summary,
        `
            ${toolbar}
            <div class="card-grid">
                ${cards.map((card) => renderCard(card, { scope })).join("")}
            </div>
        `,
        cards.length ? renderOpenAllButton(id) : ""
    );
}

function renderSection(id, title, summary, body, actions = "") {
    return `
        <section id="${escapeHtml(id)}" class="page-section">
            <div class="section-heading">
                <div>
                    <h2 class="section-title">${escapeHtml(title)}</h2>
                    ${summary ? `<p class="section-summary">${escapeHtml(summary)}</p>` : ""}
                </div>
                ${actions}
            </div>
            ${body}
        </section>
    `;
}

function renderCard(card, options = {}) {
    if (!card) {
        return "";
    }

    const tags = collectCardTags(card);
    const compactClass = options.compact ? " is-compact" : "";
    const scopeAttr = options.scope ? ` data-filter-scope="${escapeHtml(options.scope)}"` : "";
    const tagAttr = ` data-tags="${escapeHtml(tags.join("|"))}"`;
    const favorite = state.favorites.includes(card.id);
    const publisher = card.publisher ? `<span class="meta-pill">${escapeHtml(card.publisher)}</span>` : "";
    const abbreviation = card.abbreviation ? `<span class="meta-pill">${escapeHtml(card.abbreviation)}</span>` : "";
    const official = `<span class="official-pill">${escapeHtml(card.official ? (state.locale === "en" ? "Official" : "官方") : (state.locale === "en" ? "Community" : "社区"))}</span>`;

    return `
        <article class="link-card${compactClass}" data-card-entry${scopeAttr}${tagAttr}>
            <div class="card-head">
                <span class="card-kind">${escapeHtml(resolveText(card, "kind") || card.group)}</span>
                <button class="favorite-toggle ${favorite ? "is-favorite" : ""}" type="button" data-favorite-toggle="${escapeHtml(card.id)}" aria-label="${escapeHtml(getText(favorite ? "favorited" : "favorite"))}">
                    <i class="${favorite ? "fas" : "far"} fa-star"></i>
                </button>
            </div>
            <a class="card-link" href="${escapeHtml(card.url)}" target="_blank" rel="noopener noreferrer" data-track-card="${escapeHtml(card.id)}">
                <h3 class="card-title">${escapeHtml(resolveText(card, "title"))}</h3>
                <p class="card-summary">${escapeHtml(resolveSummary(card))}</p>
            </a>
            <div class="card-meta">
                ${abbreviation}
                ${publisher}
                ${official}
            </div>
            <div class="tag-list">
                ${tags.slice(0, options.compact ? 3 : 5).map((tag) => `<span class="tag-badge">${escapeHtml(tag)}</span>`).join("")}
            </div>
        </article>
    `;
}

function renderMiniCardGrid(cards, scope = "") {
    return `
        <div class="mini-card-grid">
            ${cards.map((card) => renderCard(card, { compact: true, scope })).join("")}
        </div>
    `;
}

function renderPortalCard(portal) {
    return `
        <a class="portal-card" href="${escapeHtml(portal.href)}">
            <span class="portal-kind">
                <i class="${portal.icon}"></i>
                ${escapeHtml(portal.kind)}
            </span>
            <h3 class="portal-title">${escapeHtml(portal.title)}</h3>
            <p>${escapeHtml(portal.summary)}</p>
        </a>
    `;
}

function renderTagChip(tag, scope) {
    const isActive = (uiState.activeTags[scope] || []).includes(tag);

    return `
        <button
            class="filter-chip ${isActive ? "is-active" : ""}"
            type="button"
            data-filter-chip="${escapeHtml(tag)}"
            data-filter-scope="${escapeHtml(scope)}"
        >
            ${escapeHtml(tag)}
        </button>
    `;
}

function renderSortChip(mode, labelKey) {
    return `
        <button
            class="sort-chip ${uiState.homeSort === mode ? "is-active" : ""}"
            type="button"
            data-home-sort="${escapeHtml(mode)}"
        >
            ${escapeHtml(getText(labelKey))}
        </button>
    `;
}

function renderOpenAllButton(sectionId) {
    return `
        <button class="utility-button" type="button" data-open-all-section="${escapeHtml(sectionId)}">
            <i class="fas fa-external-link-alt" aria-hidden="true"></i>
            <span>${escapeHtml(getText("openAll"))}</span>
        </button>
    `;
}

function renderJournalCompareRow(row) {
    const card = cardMap.get(row.cardId);
    const label = card ? resolveText(card, "title") : row.cardId;
    const url = card?.url || row.url || "#";
    const verification = (row.verification || []).join(" / ");

    return `
        <tr>
            <td>${escapeHtml(label)}</td>
            <td>${escapeHtml(row.abbreviation || card?.abbreviation || "")}</td>
            <td><span class="compare-badge">${escapeHtml(resolveText(row, "focus"))}</span></td>
            <td>${escapeHtml(row.publisher || card?.publisher || "")}</td>
            <td>${escapeHtml(resolveText(row, "oa"))}</td>
            <td>${escapeHtml(card?.official ? (state.locale === "en" ? "Yes" : "是") : (state.locale === "en" ? "No" : "否"))}</td>
            <td>${escapeHtml(verification)}</td>
            <td><a class="text-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(state.locale === "en" ? "Open" : "打开")}</a></td>
        </tr>
    `;
}

function renderAiCompareRow(row) {
    const card = cardMap.get(row.cardId);
    const label = card ? resolveText(card, "title") : row.cardId;

    return `
        <tr>
            <td>${escapeHtml(label)}</td>
            <td>${escapeHtml(resolveText(row, "supportsChinese"))}</td>
            <td>${escapeHtml(resolveText(row, "api"))}</td>
            <td>${escapeHtml(resolveText(row, "coding"))}</td>
            <td>${escapeHtml(resolveText(row, "longDocs"))}</td>
            <td>${escapeHtml(resolveText(row, "note"))}</td>
        </tr>
    `;
}

function renderStepCard(step, index) {
    const related = (step.linkIds || []).map((id) => cardMap.get(id)).filter(Boolean);
    const linkLine = related.length
        ? `<p class="meta-line">${escapeHtml((state.locale === "en" ? "Use: " : "可配合：") + related.map((item) => resolveText(item, "title")).join(" / "))}</p>`
        : "";

    return `
        <article class="step-card">
            <span class="step-index">${escapeHtml(`0${index + 1}`)}</span>
            <h3>${escapeHtml(resolveText(step, "title"))}</h3>
            <p class="step-body">${escapeHtml(resolveText(step, "body"))}</p>
            ${linkLine}
        </article>
    `;
}

function renderSubjectBlock(subject) {
    return `
        <article class="subject-block" id="subject-${escapeHtml(subject.id)}">
            <span class="card-kind">${escapeHtml(resolveText(subject, "kind") || "Subject")}</span>
            <h3 class="subject-title">${escapeHtml(resolveText(subject, "title"))}</h3>
            <p class="subject-summary">${escapeHtml(resolveText(subject, "summary"))}</p>
            <div class="subject-bookshelf">
                <strong>${escapeHtml(getText("textbooks"))}</strong>
                <ol class="book-list">
                    ${subject.books.map(renderBookCard).join("")}
                </ol>
            </div>
            <div class="subject-bookshelf">
                <strong>${escapeHtml(getText("lectureLinks"))}</strong>
                <div class="mini-card-grid">
                    ${subject.links.map((item) => renderGeneratedLinkCard({
                        title: resolveText(item, "title"),
                        summary: resolveText(item, "summary"),
                        url: item.url,
                        kind: state.locale === "en" ? "Lecture" : "课程"
                    })).join("")}
                </div>
            </div>
        </article>
    `;
}

function renderBookCard(book) {
    return `
        <li class="book-card">
            <strong>${escapeHtml(resolveText(book, "title"))}</strong>
            <span>${escapeHtml(resolveText(book, "author"))}</span>
            <span>${escapeHtml(resolveText(book, "note"))}</span>
        </li>
    `;
}

function renderFormulaCard(section) {
    return `
        <article class="formula-card">
            <h3>${escapeHtml(resolveText(section, "title"))}</h3>
            <table class="formula-table">
                <tbody>
                    ${section.rows.map((row) => `
                        <tr>
                            <td class="formula-symbol">${escapeHtml(row.symbol)}</td>
                            <td class="formula-command">${escapeHtml(row.command)}</td>
                            <td>${escapeHtml(resolveText(row, "note"))}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </article>
    `;
}

function renderPromptCard(item) {
    const prompt = resolveText(item, "prompt");

    return `
        <article class="prompt-card">
            <div class="prompt-head">
                <div>
                    <span class="prompt-kind">${escapeHtml(resolveText(item, "kind"))}</span>
                    <h3>${escapeHtml(resolveText(item, "title"))}</h3>
                </div>
                <button class="copy-button" type="button" data-copy-prompt="${escapeHtml(item.id)}">
                    <i class="far fa-copy"></i>
                    <span>${escapeHtml(getText("copy"))}</span>
                </button>
            </div>
            <p>${escapeHtml(resolveText(item, "summary"))}</p>
            <pre class="code-snippet">${escapeHtml(prompt)}</pre>
        </article>
    `;
}

function renderGeneratedLinkCard(item) {
    const tags = item.tags || [];

    return `
        <article class="link-card">
            <div class="card-head">
                <span class="card-kind">${escapeHtml(item.kind || "Link")}</span>
            </div>
            <a class="card-link" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">
                <h3 class="card-title">${escapeHtml(item.title)}</h3>
                <p class="card-summary">${escapeHtml(item.summary || "")}</p>
            </a>
            ${tags.length ? `<div class="tag-list">${tags.map((tag) => `<span class="tag-badge">${escapeHtml(tag)}</span>`).join("")}</div>` : ""}
        </article>
    `;
}

function renderEmptyState(message) {
    return `<div class="empty-state">${escapeHtml(message)}</div>`;
}

function renderFooter() {
    return `
        <footer class="footer-shell">
            <p>${escapeHtml(getText("footerNote"))}</p>
            <div class="footer-row">
                <span class="meta-pill">${escapeHtml(siteData.meta.author)}</span>
                <span class="meta-pill">${escapeHtml(siteData.meta.updated)}</span>
                <a class="text-link" href="${escapeHtml(siteData.meta.repo)}" target="_blank" rel="noopener noreferrer">${escapeHtml(siteData.meta.repo)}</a>
            </div>
        </footer>
    `;
}

function renderLoadError(error = loadError) {
    return renderEmptyState(getLoadErrorMessage(error));
}

function getLoadErrorMessage(error) {
    if (error?.kind === "file-protocol") {
        return "数据加载失败：你正在通过 file:// 直接打开页面。请改用本地静态服务器访问，例如 npx http-server -p 8000 或 python -m http.server 8000。";
    }

    if (error?.kind === "http" && error?.status === 404) {
        return `数据加载失败：缺少数据文件 ${DATA_URL}。静态服务器已启动，但当前仓库里没有这个文件。`;
    }

    if (error?.kind === "parse") {
        return `数据加载失败：${DATA_URL} 不是合法 JSON。请检查语法、逗号和引号。`;
    }

    if (error?.kind === "http") {
        return `数据加载失败：请求 ${DATA_URL} 返回 ${error.status}。`;
    }

    return UI_TEXT.zh.dataLoadFailed;
}

function getCardsByGroup(group) {
    return siteData.cards.filter((card) => card.group === group);
}

function getCardsByGroups(groups) {
    return siteData.cards.filter((card) => groups.includes(card.group));
}

function getWorkspaceOrder() {
    const preferred = state.workspaceOrder.filter((id) => HOME_WORKSPACE_DEFAULT.includes(id));
    const remaining = HOME_WORKSPACE_DEFAULT.filter((id) => !preferred.includes(id));
    return [...preferred, ...remaining];
}

function getHomeSearchResults() {
    const query = uiState.homeSearch.trim();
    const tags = uiState.activeTags.home || [];
    let cards = siteData.cards.filter((card) => matchesTags(card, tags));

    if (query) {
        cards = cards.filter((card) => matchCardQuery(card, query));
    } else if (!tags.length) {
        const featuredIds = [
            "annals",
            "jams",
            "jde",
            "zbmath",
            "latex-project",
            "chatgpt",
            "gmail",
            "spaces-ac"
        ];
        cards = featuredIds.map((id) => cardMap.get(id)).filter(Boolean);
    }

    return sortHomeSearchResults(cards);
}

function sortHomeSearchResults(cards) {
    const mode = uiState.homeSort || "default";

    if (mode === "default" || cards.length < 2) {
        return cards;
    }

    return cards
        .map((card, index) => ({ card, index }))
        .sort((left, right) => {
            if (mode === "favorites") {
                const favoriteDiff = Number(state.favorites.includes(right.card.id)) - Number(state.favorites.includes(left.card.id));
                if (favoriteDiff) {
                    return favoriteDiff;
                }
            }

            if (mode === "recents") {
                const recentDiff = getRecentRank(left.card.id) - getRecentRank(right.card.id);
                if (recentDiff) {
                    return recentDiff;
                }
            }

            const titleDiff = compareCardTitle(left.card, right.card);
            return titleDiff || left.index - right.index;
        })
        .map((entry) => entry.card);
}

function compareCardTitle(left, right) {
    const locale = state.locale === "en" ? "en" : "zh-Hans-CN";
    return resolveText(left, "title").localeCompare(resolveText(right, "title"), locale, {
        numeric: true,
        sensitivity: "base"
    });
}

function getRecentRank(cardId) {
    const index = state.recents.indexOf(cardId);
    return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

function collectCardTags(card) {
    const tags = []
        .concat(card.tags || [])
        .concat(card.fields || [])
        .concat(card.useCases || []);

    if (card.official) {
        tags.push("官方");
        tags.push("official");
    }

    if (card.abbreviation) {
        tags.push(card.abbreviation);
    }

    if (card.publisher) {
        tags.push(card.publisher);
    }

    if (card.group.startsWith("ai")) {
        tags.push("AI");
    }

    if (card.group === "mail") {
        tags.push("邮箱");
    }

    return Array.from(new Set(tags));
}

function matchesTags(card, tags) {
    if (!tags.length) {
        return true;
    }

    const haystack = collectCardTags(card).join(" ").toLowerCase();
    return tags.some((tag) => haystack.includes(tag.toLowerCase()));
}

function matchCardQuery(card, query) {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    const haystack = [
        resolveText(card, "title"),
        resolveSummary(card),
        card.abbreviation,
        card.publisher,
        ...(card.tags || []),
        ...(card.fields || []),
        ...(card.useCases || []),
        card.official ? "official 官方" : "community 社区"
    ].join(" ").toLowerCase();

    return terms.every((term) => haystack.includes(term));
}

function collectSectionLinks(section) {
    const seen = new Set();

    return Array.from(section.querySelectorAll("a.card-link"))
        .map((link) => {
            const entry = link.closest("article");

            if (entry?.hidden || !link.href || seen.has(link.href)) {
                return null;
            }

            seen.add(link.href);

            return {
                url: link.href,
                cardId: link.dataset.trackCard || ""
            };
        })
        .filter(Boolean);
}

function openUrlBatch(urls) {
    let opened = 0;

    urls.forEach((url) => {
        const popup = window.open(url, "_blank");
        if (popup) {
            popup.opener = null;
            opened += 1;
        }
    });

    return opened;
}

function rememberRecentIds(cardIds) {
    const nextIds = cardIds.filter(Boolean).reverse();

    if (!nextIds.length) {
        return;
    }

    state.recents = Array.from(new Set([...nextIds, ...state.recents])).slice(0, 18);
    saveArray(STORAGE_KEYS.recents, state.recents);
}

function getOpenedLabel(opened, attempted) {
    return `${getText("opened")} ${opened}/${attempted}`;
}

function openAllInSection(sectionId, button) {
    const section = document.getElementById(sectionId);
    if (!section) {
        bumpButtonLabel(button, getText("nothingToOpen"));
        return;
    }

    const allTargets = collectSectionLinks(section);
    const targets = allTargets.slice(0, OPEN_ALL_LIMIT);

    if (!targets.length) {
        bumpButtonLabel(button, getText("nothingToOpen"));
        return;
    }

    const opened = openUrlBatch(targets.map((item) => item.url));

    if (!opened) {
        bumpButtonLabel(button, getText("popupBlocked"));
        return;
    }

    rememberRecentIds(targets.map((item) => item.cardId));
    bumpButtonLabel(button, getOpenedLabel(opened, targets.length));
}

function bindCommonEvents(root) {
    root.querySelector("#theme-toggle")?.addEventListener("click", toggleTheme);
    root.querySelector("#locale-toggle")?.addEventListener("click", toggleLocale);

    root.addEventListener("click", async (event) => {
        const openAllButton = event.target.closest("[data-open-all-section]");
        if (openAllButton) {
            openAllInSection(openAllButton.dataset.openAllSection, openAllButton);
            return;
        }

        const homeSortButton = event.target.closest("[data-home-sort]");
        if (homeSortButton) {
            uiState.homeSort = homeSortButton.dataset.homeSort || "default";
            root.querySelectorAll("[data-home-sort]").forEach((button) => {
                button.classList.toggle("is-active", button.dataset.homeSort === uiState.homeSort);
            });
            updateHomeSearchResults(root);
            return;
        }

        const favoriteToggle = event.target.closest("[data-favorite-toggle]");
        if (favoriteToggle) {
            toggleFavorite(favoriteToggle.dataset.favoriteToggle);
            return;
        }

        const trackedLink = event.target.closest("[data-track-card]");
        if (trackedLink) {
            recordRecent(trackedLink.dataset.trackCard);
            return;
        }

        const promptButton = event.target.closest("[data-copy-prompt]");
        if (promptButton) {
            const prompt = siteData.promptTemplates.find((item) => item.id === promptButton.dataset.copyPrompt);
            if (prompt) {
                await copyText(resolveText(prompt, "prompt"));
                bumpButtonLabel(promptButton, getText("copied"));
            }
        }
    });
}

function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEYS.theme, state.theme);
    applyTheme(state.theme);
    renderApp();
}

function toggleLocale() {
    state.locale = state.locale === "zh" ? "en" : "zh";
    localStorage.setItem(STORAGE_KEYS.locale, state.locale);
    renderApp();
}

function toggleFavorite(cardId) {
    if (state.favorites.includes(cardId)) {
        state.favorites = state.favorites.filter((id) => id !== cardId);
    } else {
        state.favorites = [cardId, ...state.favorites].slice(0, 24);
    }

    saveArray(STORAGE_KEYS.favorites, state.favorites);
    renderApp();
}

function recordRecent(cardId) {
    state.recents = [cardId, ...state.recents.filter((id) => id !== cardId)].slice(0, 18);
    saveArray(STORAGE_KEYS.recents, state.recents);

    if (currentPage === "home") {
        setTimeout(() => renderApp(), 0);
    }
}

function applyTheme(theme) {
    document.body.classList.toggle("theme-dark", theme === "dark");
}

function initSectionSpy(root) {
    const navLinks = Array.from(root.querySelectorAll(".page-nav-link[data-target]"));
    const sections = navLinks
        .map((link) => document.getElementById(link.dataset.target))
        .filter(Boolean);

    if (!navLinks.length || !sections.length || !("IntersectionObserver" in window)) {
        return;
    }

    const linkMap = new Map(navLinks.map((link) => [link.dataset.target, link]));
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }
            navLinks.forEach((link) => link.classList.remove("is-active"));
            linkMap.get(entry.target.id)?.classList.add("is-active");
        });
    }, {
        rootMargin: "-40% 0px -45% 0px",
        threshold: 0
    });

    sections.forEach((section) => observer.observe(section));
}

function initBackToTop() {
    const button = document.getElementById("back-to-top");

    if (!button) {
        return;
    }

    const updateVisibility = () => {
        button.classList.toggle("is-visible", window.scrollY > 320);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function initWorkspaceDnD(root) {
    const grid = root.querySelector("[data-workspace-grid]");

    if (!grid) {
        return;
    }

    let draggedId = "";

    grid.addEventListener("dragstart", (event) => {
        const panel = event.target.closest("[data-panel-id]");
        if (!panel) {
            return;
        }
        draggedId = panel.dataset.panelId;
        panel.classList.add("is-dragging");
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", draggedId);
    });

    grid.addEventListener("dragend", (event) => {
        event.target.closest("[data-panel-id]")?.classList.remove("is-dragging");
    });

    grid.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    grid.addEventListener("drop", (event) => {
        event.preventDefault();
        const target = event.target.closest("[data-panel-id]");
        if (!target || !draggedId || target.dataset.panelId === draggedId) {
            return;
        }

        const order = getWorkspaceOrder();
        const fromIndex = order.indexOf(draggedId);
        const toIndex = order.indexOf(target.dataset.panelId);
        if (fromIndex === -1 || toIndex === -1) {
            return;
        }

        order.splice(toIndex, 0, order.splice(fromIndex, 1)[0]);
        state.workspaceOrder = order;
        saveArray(STORAGE_KEYS.workspaceOrder, order);
        renderApp();
    });
}

function initHomeSearch(root) {
    const input = root.querySelector("[data-home-search]");

    if (!input) {
        return;
    }

    input.addEventListener("input", (event) => {
        uiState.homeSearch = event.target.value;
        updateHomeSearchResults(root);
    });
}

function updateHomeSearchResults(root) {
    const mount = root.querySelector("[data-home-search-results]");
    const results = getHomeSearchResults();

    if (!mount) {
        return;
    }

    mount.innerHTML = results.length
        ? `<div class="card-grid">${results.map((card) => renderCard(card)).join("")}</div>`
        : renderEmptyState(getText("searchEmpty"));

    const count = root.querySelector("#search-lab .meta-line");
    if (count) {
        count.textContent = String(results.length);
    }
}

function initQuickSearch(root) {
    const input = root.querySelector("#quick-search-input");
    const button = root.querySelector("#quick-search-submit");
    const resultBox = root.querySelector("#quick-search-results");

    if (!input || !button || !resultBox) {
        return;
    }

    const renderResults = () => {
        const query = input.value.trim() || "PDE regularity";
        const results = siteData.quickSearchEngines.map((engine) => ({
            title: resolveText(engine, "name"),
            summary: state.locale === "en" ? `Search ${query}` : `检索 ${query}`,
            url: engine.template.replace("{query}", encodeURIComponent(query)),
            kind: state.locale === "en" ? "Search Engine" : "搜索引擎"
        }));

        resultBox.innerHTML = results.map(renderGeneratedLinkCard).join("");
    };

    renderResults();
    button.addEventListener("click", renderResults);
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            renderResults();
        }
    });
}

function initScopedFilters(root) {
    root.querySelectorAll("[data-filter-chip]").forEach((button) => {
        button.addEventListener("click", () => {
            const scope = button.dataset.filterScope;
            const tag = button.dataset.filterChip;
            const currentTags = new Set(uiState.activeTags[scope] || []);

            if (currentTags.has(tag)) {
                currentTags.delete(tag);
                button.classList.remove("is-active");
            } else {
                currentTags.add(tag);
                button.classList.add("is-active");
            }

            uiState.activeTags[scope] = Array.from(currentTags);

            if (scope === "home") {
                updateHomeSearchResults(root);
            } else {
                applyScopeFilter(scope, root);
            }
        });
    });

    ["journals", "blogs", "ai", "latex"].forEach((scope) => applyScopeFilter(scope, root));
}

function applyScopeFilter(scope, root) {
    const activeTags = (uiState.activeTags[scope] || []).map((tag) => tag.toLowerCase());
    const entries = root.querySelectorAll(`[data-card-entry][data-filter-scope="${scope}"]`);

    entries.forEach((entry) => {
        if (!activeTags.length) {
            entry.hidden = false;
            return;
        }

        const tags = (entry.dataset.tags || "").toLowerCase();
        entry.hidden = !activeTags.some((tag) => tags.includes(tag));
    });
}

function initBibtexTool(root) {
    const input = root.querySelector("#bibtex-doi");
    const submit = root.querySelector("#bibtex-submit");
    const copy = root.querySelector("#bibtex-copy");
    const output = root.querySelector("#bibtex-output");

    if (!input || !submit || !copy || !output) {
        return;
    }

    const fetchBibtex = async () => {
        const doi = input.value.trim();

        if (!doi) {
            output.textContent = state.locale === "en" ? "Enter a DOI first." : "请先输入 DOI。";
            return;
        }

        const endpoint = `https://api.crossref.org/works/${encodeURIComponent(doi)}/transform/application/x-bibtex`;

        try {
            const response = await fetch(endpoint, { headers: { Accept: "application/x-bibtex" } });
            if (!response.ok) {
                throw new Error("Crossref request failed");
            }

            const bibtex = await response.text();
            output.textContent = bibtex.trim();
        } catch (error) {
            output.textContent = state.locale === "en"
                ? `Unable to fetch BibTeX automatically.\nDOI: ${doi}\nCrossref: ${endpoint}\nYou can still open the Crossref or OpenAlex cards below.`
                : `自动获取 BibTeX 失败。\nDOI: ${doi}\nCrossref: ${endpoint}\n你仍然可以使用下方的 Crossref 或 OpenAlex 入口继续查询。`;
        }
    };

    submit.addEventListener("click", fetchBibtex);
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            fetchBibtex();
        }
    });

    copy.addEventListener("click", async () => {
        await copyText(output.textContent);
        bumpButtonLabel(copy, getText("copied"));
    });
}

async function copyText(text) {
    if (!text) {
        return;
    }

    try {
        await navigator.clipboard.writeText(text);
    } catch (error) {
        const helper = document.createElement("textarea");
        helper.value = text;
        document.body.appendChild(helper);
        helper.select();
        document.execCommand("copy");
        helper.remove();
    }
}

function bumpButtonLabel(button, label) {
    const target = button.querySelector("span") || button;
    if (!target) {
        return;
    }

    const original = target.textContent;
    target.textContent = label;
    setTimeout(() => {
        target.textContent = original;
    }, 1200);
}

function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}
