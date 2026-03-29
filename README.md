# web_math

[English](./Readme-en.md)

`web_math` 是一个纯静态、数据驱动的数学学术工作台。站点把期刊工具、数学分类、LaTeX 资源、博客聚合和 AI 导航拆成独立页面，再通过首页的收藏、最近使用、拖拽工作台和全站搜索把常用入口收束回来。

当前版本的核心内容来自 [assets/data/site-data.json](/D:/Git/web_math/assets/data/site-data.json)，页面逻辑集中在 [assets/js/site-core.js](/D:/Git/web_math/assets/js/site-core.js)，样式集中在 [assets/css/math-academic.css](/D:/Git/web_math/assets/css/math-academic.css)。

## 当前功能

- 纯静态部署，无需数据库或后端
- 数据驱动渲染，优先改 JSON 而不是手改 HTML
- 首页工作台，支持收藏、最近使用和拖拽排序
- 全站搜索、标签筛选、批量打开
- 期刊对比、快捷检索、BibTeX 辅助
- LaTeX、数学博客、AI 工具独立页面
- 亮色 / 暗色和中英双语切换

## 页面结构

- [index.html](/D:/Git/web_math/index.html)：首页工作台
- [journals.html](/D:/Git/web_math/journals.html)：期刊与投稿工具
- [subjects.html](/D:/Git/web_math/subjects.html)：数学分类与教材书架
- [latex.html](/D:/Git/web_math/latex.html)：LaTeX 工具箱
- [blogs.html](/D:/Git/web_math/blogs.html)：博客聚合
- [ai.html](/D:/Git/web_math/ai.html)：AI 导航
- [404.html](/D:/Git/web_math/404.html)：静态 404 页
- [assets/data/site-data.json](/D:/Git/web_math/assets/data/site-data.json)：站点数据源
- [assets/js/site-core.js](/D:/Git/web_math/assets/js/site-core.js)：站点脚本入口
- [assets/css/math-academic.css](/D:/Git/web_math/assets/css/math-academic.css)：主样式

## 本地预览

### 1. 克隆仓库

```bash
git clone https://github.com/thusbs/web_math.git
cd web_math
```

### 2. 启动本地静态服务器

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server -p 8000
```

### 3. 打开浏览器

访问 [http://127.0.0.1:8000](http://127.0.0.1:8000) 或 [http://localhost:8000](http://localhost:8000)。

### 4. 注意事项

- 不要直接用 `file://` 打开页面。站点会通过 `fetch()` 读取 `./assets/data/site-data.json`，直接双击 HTML 会触发数据加载失败。
- 如果你看见“缺少数据文件”，先确认 [assets/data/site-data.json](/D:/Git/web_math/assets/data/site-data.json) 是否存在。
- 主要内容请优先修改 JSON；只有交互和视觉样式才需要改 JS / CSS。

## 内容维护

### 修改站点内容

优先编辑 [assets/data/site-data.json](/D:/Git/web_math/assets/data/site-data.json)：

- `meta`：作者、更新时间、仓库地址
- `cards`：站点卡片数据
- `journalCompare`：期刊对比表
- `quickSearchEngines`：快捷检索引擎
- `submissionGuide`：投稿核验步骤
- `subjects`：数学分类与教材
- `promptTemplates`：AI 提示词模板

### 修改交互

- 站点渲染与交互： [assets/js/site-core.js](/D:/Git/web_math/assets/js/site-core.js)
- 页面视觉与响应式： [assets/css/math-academic.css](/D:/Git/web_math/assets/css/math-academic.css)

### 更新站点时间

同步更新 [assets/data/site-data.json](/D:/Git/web_math/assets/data/site-data.json) 中的 `meta.updated`，例如：

```json
{
  "meta": {
    "updated": "2026-03-29"
  }
}
```

## 部署概览

| 方案 | 适合场景 | 是否需要构建 | 推荐程度 |
| --- | --- | --- | --- |
| Cloudflare Pages | 直接托管静态站点，自动连 Git | 否 | 高 |
| Cloudflare Workers | 想用 Cloudflare 边缘能力，后续可加 API | 否 | 高 |
| Vercel | Git 驱动部署简单，预览环境方便 | 否 | 高 |
| 自用服务器 + Nginx | 自己掌控机器、域名、证书和缓存 | 否 | 高 |
| GitHub Pages | 纯公开仓库、小型静态托管 | 否 | 可选 |

## Cloudflare Pages 部署

Cloudflare 官方文档：

- [Pages 静态 HTML 指南](https://developers.cloudflare.com/pages/framework-guides/deploy-a-static-html-site/)
- [Pages Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/)
- [Pages 自定义域名](https://developers.cloudflare.com/pages/configuration/custom-domains/)

### 方案 A：连接 Git 仓库

适合长期维护，后续 `git push` 就自动部署。

1. 登录 Cloudflare Dashboard。
2. 进入 `Workers & Pages`。
3. 选择 `Create application`。
4. 选择 `Pages`。
5. 连接 GitHub 仓库 `thusbs/web_math`。
6. 在构建设置中：
   - `Production branch` 选 `main`
   - `Framework preset` 选 `None` 或 `No framework`
   - `Build command` 填 `exit 0`，因为当前项目没有构建步骤
   - `Build output directory` 设为站点静态文件所在目录；当前仓库可直接使用仓库根目录
7. 点击部署，等待生成 `*.pages.dev` 域名。

补充说明：

- 当前仓库本身就是可发布静态目录，所以可以直接从根目录发布。
- 如果你不想把 `README.md` 这类说明文件一并暴露在站点根目录，可以先整理一个 `dist/` 目录，再把 `dist/` 设为输出目录。

### 方案 B：Direct Upload / Wrangler CLI

适合不连 Git，或者想直接从本地目录发布。

```bash
npm install -g wrangler
wrangler login
wrangler pages project create web-math
wrangler pages deploy . --project-name web-math
```

说明：

- `.` 表示直接把当前仓库根目录当作静态发布目录。
- 如果你改成 `dist/`，命令就改成 `wrangler pages deploy dist --project-name web-math`。
- 你也可以加 `--branch preview` 做预览部署。

### 绑定自定义域名

1. 打开 Pages 项目。
2. 进入 `Custom domains`。
3. 添加你的域名，例如 `math.example.com`。
4. 按 Cloudflare 提示完成 DNS 和证书绑定。

## Cloudflare Workers 部署

Cloudflare 官方文档：

- [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/)
- [Wrangler 配置](https://developers.cloudflare.com/workers/wrangler/configuration/)
- [Workers Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)

如果你希望后续在同一套部署里追加边缘逻辑、轻量 API、鉴权或缓存控制，Workers 比 Pages 更灵活。

### 1. 安装并登录 Wrangler

```bash
npm install -g wrangler
wrangler login
```

### 2. 在仓库根目录创建 `wrangler.toml`

```toml
name = "web-math"
compatibility_date = "2026-03-29"

[assets]
directory = "."
not_found_handling = "404-page"
```

说明：

- `directory = "."` 表示直接发布当前仓库根目录里的静态文件。
- `not_found_handling = "404-page"` 会优先使用 [404.html](/D:/Git/web_math/404.html)。
- 如果你后面整理了单独的发布目录，把 `directory` 改成对应目录即可，例如 `dist`。

### 3. 执行部署

```bash
wrangler deploy
```

部署完成后，Cloudflare 会给你一个 `*.workers.dev` 地址。

### 4. 绑定自定义域名

最简单的做法是在 Dashboard 中打开这个 Worker，然后添加 `Custom Domains`。如果你已经把域名托管在 Cloudflare，平台会自动帮你配置 DNS 和证书。

## Vercel 部署

Vercel 官方文档：

- [Deployments](https://vercel.com/docs/deployments/overview)
- [Vercel CLI](https://vercel.com/docs/cli)
- [Project Configuration](https://vercel.com/docs/project-configuration)
- [Domains](https://vercel.com/docs/domains)

### 方案 A：Dashboard 导入 GitHub

1. 登录 [Vercel](https://vercel.com/)。
2. 点击 `Add New...` -> `Project`。
3. 导入 `thusbs/web_math`。
4. 项目设置里：
   - `Framework Preset` 选择 `Other`
   - `Root Directory` 使用仓库根目录
   - `Build Command` 留空
   - `Output Directory` 使用静态文件所在目录；当前仓库直接用根目录即可
5. 点击 `Deploy`。

### 方案 B：Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

常见交互：

- `Set up and deploy`: `Y`
- `Link to existing project`: 首次通常选 `N`
- `In which directory is your code located`: `./`

### 可选：`vercel.json`

如果你想显式声明这是一个无构建的静态项目，可以加一个简单配置：

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "cleanUrls": false,
  "trailingSlash": false
}
```

当前项目不强依赖这个文件，不加也能部署。

### 自定义域名

1. 打开 Vercel 项目。
2. 进入 `Settings` -> `Domains`。
3. 添加你的域名。
4. 按 Vercel 提示配置 A 记录或 CNAME。

## 自用服务器部署

如果你有自己的云主机、轻量服务器、NAS 或内网 Linux 机器，最稳妥的方式仍然是 `Nginx + 静态文件`。

### 1. 安装 Nginx

```bash
# Ubuntu / Debian
sudo apt update
sudo apt install nginx

# CentOS / Rocky / AlmaLinux
sudo yum install nginx
```

### 2. 上传项目

```bash
sudo mkdir -p /var/www/web_math
sudo chown -R $USER:$USER /var/www/web_math

rsync -av --delete ./ /var/www/web_math/
```

或者：

```bash
cd /var/www
git clone https://github.com/thusbs/web_math.git
```

### 3. 配置 Nginx

创建配置文件 `/etc/nginx/conf.d/web_math.conf`：

```nginx
server {
    listen 80;
    server_name math.example.com;

    root /var/www/web_math;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~* \.(css|js|json|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$ {
        expires 7d;
        add_header Cache-Control "public, max-age=604800";
    }

    error_page 404 /404.html;
    location = /404.html {
        internal;
    }
}
```

这里用的是多页面静态站配置，不是 SPA。不要把所有 404 都回退到 `index.html`，否则像 [journals.html](/D:/Git/web_math/journals.html) 这类独立页面和真实 404 会混在一起。

### 4. 检查并重载 Nginx

```bash
sudo nginx -t
sudo systemctl enable nginx
sudo systemctl reload nginx
```

### 5. 配置 HTTPS

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d math.example.com
```

如果只是内网自用，不暴露公网，也可以直接在局域网里用：

```bash
python -m http.server 8000
```

但这种方式不适合长期生产使用。

## GitHub Pages（可选）

GitHub 官方文档：

- [Configuring a publishing source for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

适合公开仓库和简单静态托管。

1. 打开 GitHub 仓库 `Settings`。
2. 进入 `Pages`。
3. `Source` 选择 `Deploy from a branch`。
4. 分支选择 `main`，目录选仓库根目录。
5. 保存后等待 GitHub 分配 `github.io` 域名。

## 常见问题

### 1. 页面提示“数据加载失败”

优先检查这三件事：

- 你是不是直接双击打开了 HTML，而不是通过 HTTP 服务访问
- [assets/data/site-data.json](/D:/Git/web_math/assets/data/site-data.json) 是否存在
- 站点是否确实从根目录发布，而不是漏传了 `assets/` 或 `assets/data/`

### 2. Cloudflare Pages / Vercel 部署后页面空白

通常是静态目录配错了。当前项目没有构建产物目录，直接发布仓库根目录即可。如果你自己整理了 `dist/`，那就必须把平台配置改成 `dist/`。

### 3. 为什么不能直接用 `file://`

因为 [assets/js/site-core.js](/D:/Git/web_math/assets/js/site-core.js) 会通过 `fetch()` 读取 JSON。浏览器对本地文件协议的模块和数据读取限制更严格，最稳妥的方式就是起一个静态服务器。

### 4. 修改内容时应该改哪里

优先改 [assets/data/site-data.json](/D:/Git/web_math/assets/data/site-data.json)。只有在新增交互、筛选逻辑、批量打开、排序、主题或布局时，才需要改 JS / CSS。

## 项目结构

```text
web_math/
├── index.html
├── journals.html
├── subjects.html
├── latex.html
├── blogs.html
├── ai.html
├── 404.html
├── README.md
├── Readme-en.md
├── about/                  # 旧页面，按需保留
├── commit.html             # 旧页面，按需保留
└── assets/
    ├── data/
    │   └── site-data.json
    ├── css/
    │   └── math-academic.css
    ├── js/
    │   └── site-core.js
    ├── images/
    └── fontawesome-5.15.4/
```

## 技术栈

- HTML5
- CSS3
- Vanilla JavaScript（ES Modules）
- Font Awesome 5
- 纯静态 JSON 数据驱动

## 参考文档

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Vercel Docs](https://vercel.com/docs)
- [Nginx Docs](https://nginx.org/en/docs/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

## 许可证

MIT
