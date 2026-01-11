---
title: "Page Settings"
description: "Configure individual pages with title, images, search behavior, and more"
slug: "page-settings"
tags: ["configuration", "settings"]
date: 2026-01-10T12:00:00Z
---

## Overview

Each page in FortyTen can be customized with settings defined in the page's front matter. This guide covers all available page-level configuration options.

## Basic Page Settings

### Title

The page title appears in the browser tab, as a heading on the page, and in search results:

```yaml
---
title: "My Article Title"
---
```

### Publication Date

Specifies when the page was published. Used for sorting and displaying publication dates:

```yaml
---
date: 2024-01-15T10:00:00Z
---
```

### Description

A short description displayed in list views and meta tags:

```yaml
---
description: "A brief description of this page"
---
```

For pages without a custom description, FortyTen falls back to the page's summary or the first 150 characters of content.

## Images

### Feature Image

Add a hero image to your page. The image will be displayed prominently on single post pages and as a thumbnail in list views:

```yaml
---
image: "https://example.com/images/my-image.jpg"
---
```

#### Image Usage

- **Single post pages** — Displayed as a hero image at the top of the post
- **List pages** — Displayed as a thumbnail with a grayscale hover effect
- **External URLs** — Use full HTTPS URLs (e.g., `https://example.com/image.jpg`)
- **Local images** — Place in `static/` directory and reference with absolute paths (e.g., `/images/my-image.jpg`)
- **Same folder images** — You can also reference images in the same folder as the content file (e.g., `my-image.jpg`)

## Content Organization

### Tags

Organize pages with tags. Tags are used for categorization, related posts, and navigation:

```yaml
---
tags: ["hugo", "web-development", "tutorial"]
---
```

Multiple pages with overlapping tags will appear in a "Related Posts" section automatically.

### Draft

Mark a page as draft to exclude it from published builds:

```yaml
---
draft: true
---
```

Use `hugo server -D` or `hugo -D` to include draft pages during development.

## Search Settings

### Custom Search Summary

Customize what appears in search results. By default, FortyTen uses the page's automatic summary or the first 150 characters:

```yaml
---
summary: "A custom summary that appears in search results"
---
```

This is useful for pages where you want a more specific preview text.

### Hide from Search

Exclude a page from the search index entirely:

```yaml
---
searchHidden: true
---
```

Useful for:
- Draft or unpublished content
- Private or sensitive pages
- Pages you don't want indexed
- Redirect pages

## Hugo Built-in Settings

FortyTen also supports these standard Hugo front matter settings:

### Slug

Override the default URL slug for a page:

```yaml
---
slug: "custom-url-slug"
---
```

Without a custom slug, Hugo derives the URL from the filename.

### Aliases

Create redirect URLs to this page:

```yaml
---
aliases:
  - /old-page-url/
  - /another-old-url/
---
```

Useful when restructuring or renaming pages.

### Weight

Control the sort order when pages are grouped (e.g., in menus or lists):

```yaml
---
weight: 1
---
```

Lower weights appear first. Pages without a weight are sorted by date.

### Outputs

Customize which output formats this page generates:

```yaml
---
outputs:
  - html
  - json
---
```

By default, pages generate HTML and RSS. This setting overrides those defaults for the specific page.

## Complete Example

Here's a comprehensive example with multiple settings:

```yaml
---
title: "Getting Started with Hugo"
date: 2024-01-15T10:00:00Z
draft: false
description: "A beginner's guide to building static sites with Hugo"
summary: "Learn the basics of Hugo and create your first site in 10 minutes"
image: "https://example.com/images/hugo-intro.jpg"
tags: ["hugo", "tutorial", "static-site-generator"]
slug: "hugo-getting-started"
weight: 1
searchHidden: false
---
```

## Best Practices

1. **Always include a title and date** — These are essential for proper display and sorting
2. **Use meaningful descriptions** — Helps with SEO and gives readers context
3. **Add images when possible** — Images improve visual appeal and engagement
4. **Use tags consistently** — Related posts work better with consistent tagging
5. **Keep summaries concise** — Search result summaries should be 1-2 sentences

## Next Steps

- [Site Settings](/configuration/site-settings) — Configure your site globally
- [Enabling Site Search](/configuration/enabling-site-search) — Set up search functionality
- [Hugo Front Matter Documentation](https://gohugo.io/content-management/front-matter/) — Complete Hugo reference
