---
title: "Icon Shortcode"
description: "Embed SVG icons from Ionicons with linking and accessibility support"
slug: "icon"
tags:
    - shortcode
    - icon
date: 2026-01-11T12:00:00Z
image: "https://images.unsplash.com/photo-1615031465602-20f3ff3ca279?q=80"
---

## Overview

The `icon` shortcode embeds scalable SVG icons from the [Ionicons](https://ionicons.com) library. It provides optional link wrapping, sizing controls, and full accessibility support with ARIA attributes.

FortyTen loads Ionicons via CDN, so icons render instantly without requiring any additional setup.

## Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `name` | string | Yes | — | The Ionicon name (e.g., "search", "menu", "heart", "star") |
| `size` | string | No | — | Icon size: "small" or "large". Omit for default size |
| `link` | string | No | — | URL to wrap the icon in an anchor tag, making it clickable |
| `target` | string | No | — | Link target attribute ("_blank", "_self", etc.). Only used when `link` is provided |
| `aria-hidden` | string | No | — | Set to "true" to hide icon from screen readers (for decorative icons) |
| `aria-label` | string | No | — | Descriptive text for screen readers. Required when icon has semantic meaning |

## Available Icons

Browse the complete list at [ionicons.com](https://ionicons.com).


## Basic Usage

### Simple Icon

Display a single icon by name:

```html
{{</* icon name="search" */>}}
```

### Icon with Size

Adjust icon size to "small" or "large":

```html
{{</* icon name="menu" size="large" */>}}
```

### Icon as a Link

Make an icon clickable with a URL:

```html
{{</* icon name="github" link="https://fortyten.marcelorodrigo.com" */>}}
```

### Icon Link with Target

Open link in new tab:

```html
{{</* icon name="external-link" target="_blank" link="https://marcelorodrigo.com" */>}}
```

## Advanced Examples

### Social Media Link Bar

Create a row of social icons:

```html
{{</* icon name="github" link="https://github.com" aria-label="GitHub" */>}}
{{</* icon name="twitter" link="https://twitter.com" aria-label="Twitter" */>}}
{{</* icon name="linkedin" link="https://linkedin.com" aria-label="LinkedIn" */>}}
```

### Accessible Icon with Label

Provide context for assistive technologies:

```html
{{</* icon name="download" link="/resume.pdf" aria-label="Download my resume" */>}}
```

### Decorative Icon

Hide from screen readers when text provides context:

```html
Search {{</* icon name="search" aria-hidden="true" */>}}
```

## Accessibility Considerations

### Screen Reader Support

1. **Semantic Icons** — Provide an `aria-label`:
   ```html
   {{</* icon name="download" aria-label="Download" */>}}
   ```

2. **Decorative Icons** — Hide with `aria-hidden="true"` when text provides context:
   ```html
   {{</* icon name="star" aria-hidden="true" */>}} Favorite
   ```

3. **Icon Links** — Always include an accessible label:
   ```html
   {{</* icon name="github" link="https://fortyten.marcelorodrigo.com" aria-label="Visit FortyTen" */>}}
   ```

### WCAG Compliance

This shortcode follows WCAG 2.1 Level AA standards with keyboard navigation and screen reader support.

## Best Practices

1. Always add `aria-label` to linked icons
2. Use `aria-hidden="true"` for purely decorative icons