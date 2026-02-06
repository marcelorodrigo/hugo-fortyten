---
title: "Site Settings"
description: "Configure your FortyTen site with essential settings like title, theme, base URL, and favicons"
draft: false
slug: "site-settings"
tags: ["configuration", "settings"]
image: "https://images.unsplash.com/photo-1609097828576-3b620e86039e?q=80"
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

## Author Configuration

FortyTen supports optional author information that appears in an author box at the bottom of posts. To enable the author box, configure the `params.author` section in your `hugo.yaml`:

```yaml
params:
  author:
    name: "Your Name"
    email: "your.email@example.com"
    bio: "Brief bio about you"
```

### Author Configuration Details

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | **Required** — Your full name |
| `email` | string | **Required** — Your email address (used to generate Gravatar avatar) |
| `bio` | string | Optional — A short bio that appears below your name |

### Example with Author Configuration

```yaml
baseURL: 'https://myblog.com'
languageCode: 'en-us'
title: 'My Blog'
theme: 'fortyten'

params:
  description: "A personal blog built with FortyTen"
  keywords: "Hugo, Blog, Theme"
  enableSiteSearch: true
  author:
    name: "Jane Doe"
    email: "jane@example.com"
    bio: "Full-stack developer passionate about open source"

menus:
  main:
    - identifier: 'home'
      name: 'Home'
      url: '/'
      weight: 1
```

### Author Box Display

The author box displays:
- **Avatar**: Generated from your email using [Gravatar](https://gravatar.com/)
- **Name**: Your configured author name
- **Bio**: Your short biographical description

The author box only appears when **both** `name` and `email` are configured. If either is missing, the author box will not be displayed.

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

## Tailwind CSS Stats

FortyTen uses Tailwind CSS v4 with automatic class detection via Hugo's build stats. If you want your extra tailwindcss classes to be added, you must enable stats writing in your configuration:

```yaml
build:
  writeStats: true
```

This generates a `hugo_stats.json` file at your project root, which the theme's CSS uses to detect and include only the Tailwind classes actually used in your content.

**Required for:**
- Theme consumers using `@source "hugo_stats.json"` in their CSS
- Automatic purging/optimization of Tailwind utility classes

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
  author:
    name: "Jane Doe"
    email: "jane@example.com"
    bio: "Developer and writer"

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
