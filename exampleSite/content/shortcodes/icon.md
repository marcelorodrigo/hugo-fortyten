---
title: "Icon Shortcode"
description: "Embed SVG icons from Ionicons with linking and accessibility support"
slug: "icon"
tags:
    - shortcode
    - icon
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

## Basic Usage

### Simple Icon

Display a single icon by name:

```
{{ icon name="search" }}
```

### Icon with Size

Adjust icon size to "small" or "large":

```
{{ icon name="menu" size="large" }}
```

### Icon as a Link

Make an icon clickable with a URL:

```
{{ icon name="github" link="https://github.com/yourprofile" }}
```

### Icon Link with Target

Open link in new tab:

```
{{ icon name="external-link" link="https://example.com" target="_blank" }}
```

## Advanced Examples

### Social Media Link Bar

Create a row of social icons:

```
{{ icon name="github" link="https://github.com" aria-label="GitHub" }}
{{ icon name="twitter" link="https://twitter.com" aria-label="Twitter" }}
{{ icon name="linkedin" link="https://linkedin.com" aria-label="LinkedIn" }}
```

### Accessible Icon with Label

Provide context for assistive technologies:

```
{{ icon name="download" link="/resume.pdf" aria-label="Download my resume" }}
```

### Decorative Icon

Hide from screen readers when text provides context:

```
Search {{ icon name="search" aria-hidden="true" }}
```

## Available Icons

Browse the complete list at [ionicons.com](https://ionicons.com).

Common icon names: `menu`, `close`, `github`, `twitter`, `linkedin`, `search`, `download`, `heart`, `star`, `settings`, `home`, and many more.

## Accessibility Considerations

### Screen Reader Support

1. **Semantic Icons** — Provide an `aria-label`:
   ```
   {{ icon name="download" aria-label="Download" }}
   ```

2. **Decorative Icons** — Hide with `aria-hidden="true"` when text provides context:
   ```
   {{ icon name="star" aria-hidden="true" }} Favorite
   ```

3. **Icon Links** — Always include an accessible label:
   ```
   {{ icon name="github" link="..." aria-label="Visit GitHub" }}
   ```

### WCAG Compliance

This shortcode follows WCAG 2.1 Level AA standards with keyboard navigation and screen reader support.

## Best Practices

1. Always add `aria-label` to linked icons
2. Use `aria-hidden="true"` for purely decorative icons
3. Keep icon purposes clear and consistent
4. Test with screen readers to verify accessibility

## Common Patterns

### Social Links Footer

```
Follow us:
{{ icon name="github" link="https://github.com" aria-label="GitHub" }}
{{ icon name="twitter" link="https://twitter.com" aria-label="Twitter" }}
{{ icon name="linkedin" link="https://linkedin.com" aria-label="LinkedIn" }}
```

### Download Link

```
{{ icon name="download" link="/app.zip" aria-label="Download application" }}
```