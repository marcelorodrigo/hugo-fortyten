---
title: "Shortcodes"
description: "Reusable content snippets for embedding media, icons, and interactive elements"
---

## Overview

Shortcodes are convenient snippets for adding interactive elements, embedded media, and reusable components to your content. FortyTen includes several powerful shortcodes built-in, plus support for Hugo's native shortcodes.

## Available Shortcodes

### Custom Shortcodes

These shortcodes are built specifically for FortyTen:

#### [Icon](/shortcodes/icon/)
Embed SVG icons from the Ionicons library with optional linking and accessibility features.

Usage: `{{&lt; icon name="search" &gt;}}` or `{{&lt; icon name="github" link="https://github.com" aria-label="Visit GitHub" &gt;}}`

**Use cases:** Navigation elements, buttons, decorative icons, social links

---

#### [iframe](/shortcodes/iframe/)
Embed external content with responsive sizing, security controls, and accessibility compliance.

Usage: `{{&lt; iframe src="https://example.com" title="Example Site" responsive="true" &gt;}}`

**Use cases:** Embedded dashboards, documentation, maps, responsive videos

---

#### [Strava](/shortcodes/strava/)
Embed Strava activity cards to showcase running routes, cycling tracks, and fitness activities.

Usage: `{{&lt; strava "https://www.strava.com/activities/182316148" &gt;}}`

**Use cases:** Fitness blog posts, activity sharing, athletic achievements

---

### Hugo Native Shortcodes

FortyTen also supports Hugo's built-in shortcodes:

#### [YouTube](/shortcodes/youtube/)
Embed YouTube videos with playback controls, privacy options, and lazy loading.

Usage: `{{&lt; youtube 0RKpf3rK57I &gt;}}`

**Use cases:** Video tutorials, demonstrations, embedded media

---

## Best Practices

1. **Always include accessibility attributes** — Use `aria-label`, `title`, or `aria-hidden` as appropriate
2. **Use meaningful titles** — Help screen readers understand embedded content
3. **Test responsiveness** — Verify embeds look good on mobile and desktop
4. **Lazy load when possible** — Use `loading="lazy"` for performance
5. **Validate URLs** — Ensure links and embed sources are correct

## Common Patterns

### Creating a Social Link Bar

```html
{{</* icon name="github" link="https://github.com/yourprofile" aria-label="GitHub" */>}}
{{</* icon name="twitter" link="https://twitter.com/yourprofile" aria-label="Twitter" */>}}
{{</* icon name="linkedin" link="https://linkedin.com/in/yourprofile" aria-label="LinkedIn" */>}}
```

### Embedding a Responsive Video

```html
{{</* youtube id="0RKpf3rK57I" responsive="true" */>}}
```

### Showcasing a Fitness Activity

```html
Check out my recent run:

{{</* strava id="182316148" */>}}
```

### Embedding External Content

```html
{{</* iframe src="https://dashboard.example.com" title="Analytics Dashboard" responsive="true" sandbox="allow-scripts allow-same-origin" */>}}
```

---

## Shortcode Parameters Reference

Quick reference for all parameters across shortcodes:

| Shortcode | Main Parameters | Key Feature |
|-----------|-----------------|-------------|
| **Icon** | `name`, `link`, `aria-label`, `aria-hidden` | Optional link wrapping |
| **iframe** | `src`, `title`, `responsive`, `sandbox` | Responsive + security |
| **Strava** | `id` | URL auto-extraction |
| **YouTube** | `id`, `autoplay`, `start`, `end`, `loading` | Lazy loading support |

---

## Accessibility

All shortcodes in FortyTen are designed with accessibility in mind:

- **Screen Reader Support** — Meaningful titles and labels for assistive technologies
- **Keyboard Navigation** — All interactive elements are keyboard accessible
- **WCAG Compliance** — Shortcodes follow Web Content Accessibility Guidelines 2.1
- **Semantic HTML** — Proper element structure for assistive technologies

See individual shortcode documentation for specific accessibility features.

---

## Next Steps

- [Icon Shortcode](/shortcodes/icon/) — Learn about icon embedding
- [iframe Shortcode](/shortcodes/iframe/) — Embed external content
- [Strava Shortcode](/shortcodes/strava/) — Share fitness activities
- [YouTube Shortcode](/shortcodes/youtube/) — Embed videos
- [Page Settings](/configuration/page-settings/) — Configure individual pages
