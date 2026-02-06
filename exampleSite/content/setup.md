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

FortyTen requires **Hugo Extended** (v0.140.2+) for Tailwind CSS support.
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

**About Tailwind CLI:**
The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js.

**Using npx (no installation required):**
```bash
npx @tailwindcss/cli --help
```

**For faster builds (install locally):**
```bash
npm install -D tailwindcss @tailwindcss/cli @tailwindcss/typography
npx tailwindcss --help
```

> **Note:** Hugo's `css.TailwindCSS` function requires the Tailwind CLI binary. Using `npx` downloads it on first run.

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
