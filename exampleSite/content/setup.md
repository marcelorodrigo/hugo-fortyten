---
title: "Setup"
description: "Get started with FortyTen theme - installation and configuration guide"
date: 2026-01-09T12:00:00Z
draft: false
tags: ["setup", "configuration"]
image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80"
---

## Quick Start

### Install Hugo Extended

FortyTen requires **Hugo Extended** (v0.161.0+) for Tailwind CSS support. As of v0.161.0, Hugo no longer supports the standalone Tailwind binary — the Tailwind CSS CLI must be installed via npm.
Download it from [hugo.io](https://gohugo.io/installation/).

**macOS (Homebrew):**
```bash
brew install hugo
```

**Windows (Chocolatey):**
```bash
choco install hugo-extended
```

**Linux:**
```bash
snap install hugo --channel=extended
```

Verify installation:
```bash
hugo version
```

### Install Tailwind CSS CLI

FortyTen requires Tailwind CSS v4 with the Tailwind CLI installed locally via npm. As of Hugo v0.161.0, the standalone Tailwind binary is no longer supported — you must install the npm package.

```bash
npm install --save-dev tailwindcss @tailwindcss/cli @tailwindcss/typography
```

> **Note:** Hugo's `css.TailwindCSS` function calls the `tailwindcss` binary directly. A local npm install places it in `node_modules/.bin/tailwindcss`, which Hugo resolves automatically when it's in PATH.

### Create a New Site

```bash
hugo new site my-blog
cd my-blog
```

### Add FortyTen Theme

Add FortyTen as a Git submodule:

```bash
git init
git submodule add https://github.com/marcelorodrigo/hugo-fortyten.git themes/fortyten
```

Or clone directly:

```bash
git clone https://github.com/marcelorodrigo/hugo-fortyten.git themes/fortyten
```

### Start the Hugo Server

```bash
hugo server
```

Visit `http://localhost:1313` to preview your site.

### Build Static Pages

Generate production-ready HTML:

```bash
hugo --minify
```

Output will be in the `public/` directory.

> **Important:** Some deployment environments (e.g., Cloudflare Pages) may not have `node_modules/.bin` in PATH. If you get a "binary not found" error, add it explicitly:
> ```bash
> npm install && PATH="$(npm root)/.bin:$PATH" hugo --minify
> ```

### Deployment

#### Deploy to GitHub Pages

Follow the [GitHub Pages deployment guide](https://gohugo.io/host-and-deploy/host-on-github-pages/#build-hugo-with-github-action) to set up automatic builds with GitHub Actions.

Create `.github/workflows/hugo.yaml`:

```yaml
name: Build and Deploy Hugo Site

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v6
        with:
          submodules: recursive

      - name: Setup Node.js
        uses: actions/setup-node@v6
        with:
          node-version: '26'

      - name: Install npm dependencies
        run: npm ci

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v4
        with:
          hugo-version: 'latest'
          extended: true

      - name: Build
        run: hugo --minify

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

#### Deploy to Cloudflare Pages

Set the following in the Cloudflare Pages dashboard:

- **Build command:**
  ```bash
  npm install && PATH="$(npm root)/.bin:$PATH" hugo --minify
  ```
- **Build output directory:** `public`
- **Root directory (optional):** `exampleSite` (if deploying the demo site)

Cloudflare Pages includes Hugo Extended by default. No additional configuration is needed.

---

## Run the exampleSite

To test FortyTen with the included example site:

```bash
cd exampleSite
hugo server
```

Or from the root directory:

```bash
hugo --themesDir=../.. server --source exampleSite
```

Visit `http://localhost:1313` to see the theme in action!
