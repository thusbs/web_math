# web_math

[中文文档](./README.md)

`web_math` is a fully static, data-driven mathematics workspace. It separates journals, subjects, LaTeX resources, blogs, and AI tools into dedicated pages, then brings favorites, recents, drag-and-drop workspace panels, and global search back to the homepage.

The current site content is driven primarily by [assets/data/site-data.json](/D:/Git/web_math/assets/data/site-data.json). Rendering logic lives in [assets/js/site-core.js](/D:/Git/web_math/assets/js/site-core.js), and styling lives in [assets/css/math-academic.css](/D:/Git/web_math/assets/css/math-academic.css).

## Features

- Fully static deployment, no backend required
- JSON-first content maintenance
- Homepage workspace with favorites, recents, and drag sorting
- Global search, tag filters, and batch open actions
- Journal comparison, quick search, and BibTeX helper
- Dedicated LaTeX, blog, and AI pages
- Light / dark theme and Chinese / English locale toggle

## Main Pages

- [index.html](/D:/Git/web_math/index.html): homepage workspace
- [journals.html](/D:/Git/web_math/journals.html): journal and submission tools
- [subjects.html](/D:/Git/web_math/subjects.html): subject map and textbook shelves
- [latex.html](/D:/Git/web_math/latex.html): LaTeX toolbox
- [blogs.html](/D:/Git/web_math/blogs.html): blog aggregation
- [ai.html](/D:/Git/web_math/ai.html): AI atlas
- [404.html](/D:/Git/web_math/404.html): static 404 page
- [assets/data/site-data.json](/D:/Git/web_math/assets/data/site-data.json): content source

## Local Preview

### 1. Clone the repo

```bash
git clone https://github.com/thusbs/web_math.git
cd web_math
```

### 2. Start a local static server

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server -p 8000
```

### 3. Open the site

Visit [http://127.0.0.1:8000](http://127.0.0.1:8000) or [http://localhost:8000](http://localhost:8000).

### 4. Important note

Do not open the site via `file://`. The app fetches `./assets/data/site-data.json`, so opening HTML files directly from disk will trigger load errors.

## Content Maintenance

Edit [assets/data/site-data.json](/D:/Git/web_math/assets/data/site-data.json) first:

- `meta`: author, updated date, repository URL
- `cards`: site cards
- `journalCompare`: journal comparison table
- `quickSearchEngines`: quick search engines
- `submissionGuide`: submission workflow
- `subjects`: subject shelves and lecture links
- `promptTemplates`: AI prompt templates

Only edit JS / CSS when you are changing interaction, layout, theme, filters, sorting, or rendering behavior.

## Deployment Overview

| Option | Best for | Build step | Recommendation |
| --- | --- | --- | --- |
| Cloudflare Pages | Git-based static hosting | No | High |
| Cloudflare Workers | Static assets now, edge logic later | No | High |
| Vercel | Easy Git deployment and previews | No | High |
| Self-hosted Nginx | Full control over server and domain | No | High |
| GitHub Pages | Public repo static hosting | No | Optional |

## Deploy on Cloudflare Pages

Official docs:

- [Deploy a static HTML site with Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-static-html-site/)
- [Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/)
- [Custom Domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)

### Option A: Connect your Git repository

1. Sign in to Cloudflare Dashboard.
2. Go to `Workers & Pages`.
3. Click `Create application`.
4. Choose `Pages`.
5. Connect the `thusbs/web_math` repository.
6. Configure build settings:
   - `Production branch`: `main`
   - `Framework preset`: `None` or `No framework`
   - `Build command`: `exit 0`
   - `Build output directory`: the directory that contains your static site; this repo can be deployed directly from the repo root
7. Deploy and wait for the generated `*.pages.dev` URL.

If you do not want files like `README.md` to be publicly accessible from the deployment root, create a clean `dist/` directory and publish that instead.

### Option B: Direct Upload with Wrangler

```bash
npm install -g wrangler
wrangler login
wrangler pages project create web-math
wrangler pages deploy . --project-name web-math
```

Use `dist` instead of `.` if you later move the deployable site into a dedicated output folder.

### Custom Domain

Open the Pages project, go to `Custom domains`, add your domain, and follow Cloudflare's DNS instructions.

## Deploy on Cloudflare Workers

Official docs:

- [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/)
- [Wrangler Configuration](https://developers.cloudflare.com/workers/wrangler/configuration/)
- [Workers Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)

Use Workers if you want the static site today and the option to add edge logic or lightweight APIs later.

### 1. Install and log in to Wrangler

```bash
npm install -g wrangler
wrangler login
```

### 2. Create `wrangler.toml` in the repo root

```toml
name = "web-math"
compatibility_date = "2026-03-29"

[assets]
directory = "."
not_found_handling = "404-page"
```

### 3. Deploy

```bash
wrangler deploy
```

Cloudflare will return a `*.workers.dev` URL after deployment.

### 4. Add a custom domain

Use `Custom Domains` in the Cloudflare dashboard after deployment. If your zone is already managed by Cloudflare, DNS and certificates are handled there.

## Deploy on Vercel

Official docs:

- [Deployments Overview](https://vercel.com/docs/deployments/overview)
- [Vercel CLI](https://vercel.com/docs/cli)
- [Project Configuration](https://vercel.com/docs/project-configuration)
- [Domains](https://vercel.com/docs/domains)

### Option A: Import from GitHub

1. Sign in to [Vercel](https://vercel.com/).
2. Click `Add New...` -> `Project`.
3. Import `thusbs/web_math`.
4. Configure the project:
   - `Framework Preset`: `Other`
   - `Root Directory`: repo root
   - `Build Command`: leave empty
   - `Output Directory`: repo root, or your dedicated static output directory if you later add one
5. Click `Deploy`.

### Option B: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

Typical answers:

- `Set up and deploy`: `Y`
- `Link to existing project`: `N` for the first deployment
- `In which directory is your code located`: `./`

### Optional `vercel.json`

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "cleanUrls": false,
  "trailingSlash": false
}
```

The current site does not require this file, but it can be useful if you want explicit project configuration.

### Custom Domain

Open the project in Vercel, go to `Settings` -> `Domains`, add the domain, then follow the DNS instructions provided by Vercel.

## Self-hosted Deployment with Nginx

If you have your own VPS, lightweight cloud server, NAS, or internal Linux machine, the simplest production setup is `Nginx + static files`.

### 1. Install Nginx

```bash
# Ubuntu / Debian
sudo apt update
sudo apt install nginx

# CentOS / Rocky / AlmaLinux
sudo yum install nginx
```

### 2. Upload the project

```bash
sudo mkdir -p /var/www/web_math
sudo chown -R $USER:$USER /var/www/web_math

rsync -av --delete ./ /var/www/web_math/
```

### 3. Configure Nginx

Create `/etc/nginx/conf.d/web_math.conf`:

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

This is a multi-page static site, not an SPA. Do not force every missing route back to `index.html`.

### 4. Reload Nginx

```bash
sudo nginx -t
sudo systemctl enable nginx
sudo systemctl reload nginx
```

### 5. Add HTTPS

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d math.example.com
```

For LAN-only temporary use, you can still run:

```bash
python -m http.server 8000
```

But that is not a production setup.

## GitHub Pages

Official docs:

- [Configuring a publishing source for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

1. Open repository `Settings`.
2. Go to `Pages`.
3. Set `Source` to `Deploy from a branch`.
4. Choose the `main` branch and the repo root.
5. Save and wait for the `github.io` URL.

## FAQ

### Why does the site show “failed to load data”?

Check these first:

- You are serving the site over HTTP instead of opening it with `file://`
- [assets/data/site-data.json](/D:/Git/web_math/assets/data/site-data.json) exists
- You actually deployed the full static directory, including `assets/` and `assets/data/`

### Why is the deployed site blank on Cloudflare or Vercel?

The most common cause is a wrong publish directory. This repo does not have a build step. Publish the repo root directly unless you created a dedicated `dist/` folder yourself.

### Where should I edit content?

Start with [assets/data/site-data.json](/D:/Git/web_math/assets/data/site-data.json). Only change JS / CSS when behavior or presentation needs to change.

## Project Structure

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
├── about/                  # legacy page, kept as needed
├── commit.html             # legacy page, kept as needed
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

## Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES Modules)
- Font Awesome 5
- Static JSON data

## References

- [Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Vercel Docs](https://vercel.com/docs)
- [Nginx Docs](https://nginx.org/en/docs/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

## License

MIT
