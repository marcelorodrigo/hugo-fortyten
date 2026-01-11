---
title: "Site Settings"
description: "Configure your FortyTen site with essential settings like title, theme, base URL, and favicons"
draft: false
slug: "site-settings"
tags: ["configuration", "settings"]
date: 2026-01-09T12:00:00Z
---

## Overview

Site configuration in FortyTen is managed through the `hugo.yaml` file in your site root. This guide covers the essential settings, with links to Hugo's comprehensive documentation for advanced options.

## Essential Configuration

### Site Title

Set the title of your site, which appears in the browser tab and throughout the theme:

```yaml
title: 'My Awesome Blog'
```

### Theme

Specify which theme to use. For FortyTen:

```yaml
theme: 'fortyten'
```

### Base URL

Set your site's base URL. This is crucial for production builds:

```yaml
baseURL: 'https://myblog.com'
```

For local development, you can omit this or set it to `http://localhost:1313/`.

### Language

Set the default language code:

```yaml
languageCode: 'en-us'
```

## Favicons

FortyTen automatically detects and uses favicons from your `static/` directory. **No configuration is necessary** — simply place your favicon files in `static/` and they will be dynamically referenced.

### Supported Favicon Formats

The following favicon files are automatically detected and included:

| File | Format | Size | Purpose |
|------|--------|------|---------|
| `favicon.ico` | ICO | 16x16, 32x32, 48x48 | Traditional favicon, fallback for older browsers |
| `favicon.svg` | SVG | Scalable | Modern vector favicon, automatically scaled |
| `favicon-96x96.png` | PNG | 96x96 | Standard PNG favicon |
| `apple-touch-icon.png` | PNG | 180x180 | iOS home screen icon for non-PWA apps |
| `site.webmanifest` | JSON | — | Web app manifest for PWA support (optional) |
| `web-app-manifest-192x192.png` | PNG | 192x192 | PWA home screen icon (small) |
| `web-app-manifest-512x512.png` | PNG | 512x512 | PWA home screen icon (large) |

### How It Works

The theme checks for the presence of these files using Hugo's `fileExists` function. If a file exists in `static/`, it is automatically included in the page `<head>`. You don't need to add any configuration to `hugo.yaml`.

**Example:** If you place `favicon.svg` and `apple-touch-icon.png` in `static/`, both will be automatically included:

```
static/
├── favicon.svg
└── apple-touch-icon.png
```

Resulting `<head>` tags (generated automatically):

```html
<link rel="icon" type="image/svg+xml" href="https://myblog.com/favicon.svg" />
<link rel="apple-touch-icon" sizes="180x180" href="https://myblog.com/apple-touch-icon.png" />
```

### Favicon Generator Tools

Generate favicons from a source image:

- [Favicon Generator](https://realfavicongenerator.net/) — generates all formats with a manifest file
- [Icon Kitchen](https://icon.kitchen/) — simple online icon generator
- [GIMP](https://www.gimp.org/) — free image editor

## Additional Configuration

For all other Hugo configuration options, refer to the official documentation:

**[Hugo Configuration Reference](https://gohugo.io/getting-started/configuration/#all-configuration-settings)**

This includes:

- Content, output, and caching settings
- Markup and rendering options
- Menu configuration
- Taxonomy settings
- URL management
- Server configuration
- And much more

## Complete Example

Here's a minimal `hugo.yaml` for a FortyTen site:

```yaml
baseURL: 'https://myblog.com'
languageCode: 'en-us'
title: 'My Blog'
theme: 'fortyten'

params:
  description: "A personal blog built with FortyTen"
  keywords: "Hugo, Blog, Theme"
  enableSiteSearch: true

menus:
  main:
    - identifier: 'home'
      name: 'Home'
      url: '/'
      weight: 1
    - identifier: 'posts'
      name: 'Posts'
      url: '/posts'
      weight: 2
```

## Next Steps

- [Hugo Configuration Reference](https://gohugo.io/getting-started/configuration/#all-configuration-settings) — comprehensive guide
- [Setup Guide](/setup) — installation and deployment instructions
- [Hugo Directory Structure](https://gohugo.io/getting-started/directory-structure/) — understand your site layout
