---
title: "Gist Shortcode"
description: "Embed GitHub Gists with a custom shortcode"
slug: "gist"
image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80"
tags:
  - "shortcode"
  - "github"
  - "gist"
date: 2026-01-19T12:00:00Z
---

## Overview

The `gist` shortcode allows you to embed GitHub Gists directly into your Hugo content. This is a custom replacement for Hugo's deprecated gist shortcode (removed in v0.143.0).

FortyTen provides a flexible, accessible gist shortcode that supports both positional and named parameters.

## Example

{{< gist "marcelorodrigo" "047b6d0657d8fdc8cf1aba0f4aa0bf75" >}}

## Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `username` | string | Yes (positional[0] or named) | — | GitHub username that owns the gist |
| `id` | string | Yes (positional[1] or named) | — | Gist ID (the hash in the gist URL) |
| `file` | string | No (positional[2] or named) | — | Optional filename to display only that file from the gist |

## Basic Usage

### Simple Embed with Positional Arguments

Embed an entire gist using just the username and gist ID:

```html
{{</* gist "marcelorodrigo" "047b6d0657d8fdc8cf1aba0f4aa0bf75" */>}}
```

### Named Parameters

Use explicit parameter names for clarity:

```html
{{</* gist username="marcelorodrigo" id="047b6d0657d8fdc8cf1aba0f4aa0bf75" */>}}
```

## Advanced Usage

### Show Specific File Only

If a gist contains multiple files, you can display just one:

```html
{{</* gist "marcelorodrigo" "047b6d0657d8fdc8cf1aba0f4aa0bf75" "example.ts" */>}}
```

Or using named parameters:

```html
{{</* gist username="marcelorodrigo" id="047b6d0657d8fdc8cf1aba0f4aa0bf75" file="example.ts" */>}}
```

## How to Find Your Gist Details

### Get Your GitHub Username

Your username appears in your GitHub profile URL: `https://github.com/your-username`

### Get the Gist ID

The gist ID is the hash in the gist URL:
- Gist URL: `https://gist.github.com/marcelorodrigo/047b6d0657d8fdc8cf1aba0f4aa0bf75`
- Gist ID: `047b6d0657d8fdc8cf1aba0f4aa0bf75`

### Get Filename (Optional)

If you want to embed a specific file from a multi-file gist:
1. Open the gist on GitHub
2. Note the filename you want to display (e.g., `example.ts`, `script.js`)
3. Pass it as the third parameter or use `file="filename"`

## Migration from Deprecated Hugo Gist Shortcode

If you're upgrading from Hugo's built-in gist shortcode, the syntax has been improved:

**Old syntax (deprecated):**
```html
{{</* gist marcelorodrigo 047b6d0657d8fdc8cf1aba0f4aa0bf75 */>}}
```

**New syntax (recommended):**
```html
{{</* gist "marcelorodrigo" "047b6d0657d8fdc8cf1aba0f4aa0bf75" */>}}
```

The new syntax is more explicit and includes parameter validation.

## Tips

- **Quoted parameters** are recommended for clarity and to avoid parsing issues
- **GitHub rate limiting**: Gist embeds load from GitHub, so be mindful of rate limits on pages with many gists
- **File-specific embeds** are useful for highlighting specific code examples from larger gists
- **Syntax highlighting** is automatically applied by GitHub's gist embedding
