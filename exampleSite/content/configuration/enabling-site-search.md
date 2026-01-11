---
title: "Enabling Site Search"
description: "Enable and configure the built-in site search functionality in FortyTen"
slug: "enabling-site-search"
---

## Overview

FortyTen includes a powerful built-in search feature that indexes your site content and provides instant search results. This guide explains how to enable and configure it.

## Enabling Site Search

Site search is controlled by a single parameter in your `hugo.yaml` configuration file.

### Basic Setup

Add the following to your `hugo.yaml`:

```yaml
params:
  enableSiteSearch: true

outputs:
  home:
    - html
    - rss
    - json  # Required for search to work
```

That's it! Once enabled, a search button will appear in your site's header on both desktop and mobile.

## How It Works

When site search is enabled, FortyTen automatically:

1. **Generates a search index** — Hugo creates a `index.json` file containing metadata about all your pages
2. **Adds search UI** — A search button appears in the header (visible on mobile and desktop)
3. **Indexes page content** — Titles, URLs, summaries, dates, and sections are indexed for fast searching
4. **Provides instant results** — The search interface queries the index client-side, with no server required

## Search Index Content

By default, the search index includes:

- **Title** — Page title
- **URL** — Page permalink
- **Summary** — Page summary (custom `summary` param, page summary, or first 150 characters of content)
- **Date** — Publication date (formatted as YYYY-MM-DD)
- **Section** — Content section (e.g., "posts", "pages")

### Customizing Page Summaries

To customize what appears in search results for a specific page, add a `summary` parameter to the page front matter:

```yaml
---
title: "My Post"
date: 2024-01-10
summary: "A custom summary for this post that will appear in search results"
---
```

If no custom `summary` is provided, the theme uses the page's automatic summary, falling back to the first 150 characters of content.

### Hiding Pages from Search

To exclude a specific page from the search index, add `searchHidden: true` to its front matter:

```yaml
---
title: "Draft Post"
searchHidden: true
---
```

This is useful for:
- Draft or unpublished content
- Private pages
- Pages you don't want indexed

## Using the Search Feature

Once enabled:

1. **Desktop** — Click the search icon in the header (or press `Cmd+K`/`Ctrl+K`)
2. **Mobile** — Tap the search icon in the header
3. **Type** — Enter your search query
4. **Browse results** — Results appear instantly as you type
5. **Click** — Select a result to navigate to that page

## Troubleshooting

### Search button isn't appearing

Verify that `enableSiteSearch: true` is set in your `params` section of `hugo.yaml`:

```yaml
params:
  enableSiteSearch: true
```

### Search returns no results

Ensure your site has been built with `hugo` or `hugo server`. The search index is generated during the build process.

### My pages aren't indexed

Check that pages aren't marked with `searchHidden: true` and that they're not in draft mode (`draft: false` or omitted).

The `json` output on the home page generates the search index that enables the search feature. For more details on Hugo's output formats and other configuration options, see the [Hugo Outputs Documentation](https://gohugo.io/configuration/outputs/).

### Search appears but shows an error

If the search button appears but shows an error when you try to use it, the search index file may not be generated. This usually means the `json` output format is not enabled for the home page.

Ensure your `hugo.yaml` includes the correct output configuration under the home page:

```yaml
outputs:
  home:
    - html
    - rss
    - json  # Required for search to work
```

See the [Output Format Configuration](#output-format-configuration) section above for more details on configuring outputs correctly.

## Build Considerations

The search feature requires Hugo to generate the `index.json` file. This happens automatically when you:

- Run `hugo server` for local development
- Run `hugo --minify` for production builds

The generated `public/index.json` contains the complete search index and is served to clients.

## Next Steps

- [Site Settings](/configuration/site-settings) — Configure other site options
- [Setup Guide](/setup) — Installation and deployment instructions
- [Hugo Configuration Reference](https://gohugo.io/getting-started/configuration/#all-configuration-settings) — All Hugo configuration options
