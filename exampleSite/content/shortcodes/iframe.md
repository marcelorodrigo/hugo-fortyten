---
title: "iframe Shortcode"
description: "Embed external content with responsive sizing and security controls"
slug: "iframe"
date: 2026-01-11T12:00:00Z
image: "https://images.unsplash.com/photo-1508004680771-708b02aabdc0?q=80"
tags:
    - shortcode
    - iframe
---

## Overview

The `iframe` shortcode embeds external content (dashboards, documentation, maps, etc.) with automatic accessibility compliance, responsive sizing options, and security sandbox controls.

It's perfect for embedding third-party content while maintaining security and ensuring screen reader users understand the embedded material.

## Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `src` | string | Yes | — | URL of the iframe source |
| `width` | string | No | "800" | Width in pixels (ignored when `responsive="true"`) |
| `height` | string | No | "600" | Height in pixels (ignored when `responsive="true"`) |
| `title` | string | Semi-required | — | Accessibility title (required unless `aria-label` provided) |
| `aria-label` | string | Semi-required | — | Accessibility label (required unless `title` provided) |
| `responsive` | string | No | — | Set to "true" for responsive 16:9 aspect ratio |
| `sandbox` | string | No | — | Space-separated sandbox restrictions |

## Example
This iframe renders the page at example.org with a height of 240 pixels.

{{< iframe src="https://example.org" title="Example.org" height="240" >}}

## Basic Usage

### Simple Embed with Fixed Dimensions

```html
{{</* iframe "https://example.org" "800" "600" "Example Site" */>}}
```

### Named Parameters (Recommended)

```html
{{</* iframe src="https://example.org" title="Example Site" */>}}
```

### Responsive Embed

Perfect for videos and flexible content:

```html
{{</* iframe src="https://example.org" title="Content" responsive="true" */>}}
```

### With Security Sandbox

```html
{{</* iframe src="https://example.org" title="Safe" sandbox="allow-scripts" */>}}
```

## Special Features

### Responsive Mode

When `responsive="true"`, maintains 16:9 aspect ratio for videos and flexible content.

### Sandbox Security

Restrict permissions with values like:
- `allow-scripts` — Enable JavaScript
- `allow-same-origin` — Allow same-origin access
- `allow-forms` — Enable form submission
- `allow-popups` — Allow popup windows

## Accessibility Considerations

### Mandatory Title or Label

Every iframe requires either `title` or `aria-label`. The build will fail if neither is provided.

### Title vs aria-label

Use `title` for:
- Visible browser tooltip
- Simple, straightforward naming

Use `aria-label` for:
- Screen-reader-only descriptions
- More detailed explanations

You can provide both for comprehensive accessibility.

### Screen Reader Announcement

Screen readers announce: "iframe: Dashboard" — telling users the embedded content purpose.

## Best Practices

1. **Always provide meaningful titles** — Describe the content clearly
2. **Apply sandbox restrictions** — Use minimum permissions needed
3. **Use fixed dimensions for dashboards** — Dashboards often need specific sizes
4 **Test cross-origin content** — Verify loading and CORS permissions