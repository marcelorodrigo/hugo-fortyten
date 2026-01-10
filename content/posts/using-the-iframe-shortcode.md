---
title: "Using the Iframe Shortcode"
description: "Learn how to embed external content like YouTube videos, Vimeo, or custom iframes in your blog posts using the iframe shortcode."
date: 2026-01-10
tags: ["features", "shortcodes", "embeds"]
---

The Hugo FortyTen theme includes a flexible `iframe` shortcode that makes it easy to embed external content—such as YouTube videos, Vimeo clips, or custom web content—in your blog posts. The shortcode supports both fixed and responsive sizing with accessibility features.

## Basic Usage

To embed an iframe, use the shortcode with the source URL:

```markdown
{{< iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube Video" >}}
```

This renders an iframe with a default width of 800px and height of 600px.

## Positional Arguments (Backward Compatible)

For backward compatibility, you can use positional arguments for source, width, and height:

```markdown
{{< iframe "https://www.youtube.com/embed/dQw4w9WgXcQ" "560" "315" >}}
```

This syntax is useful for simple embeds where you don't need to specify a title.

## Named Parameters (Recommended)

Using named parameters provides more control and is more readable:

```markdown
{{< iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" width="560" height="315" title="YouTube Video" >}}
```

## Accessibility Attributes

For better accessibility, always include either a `title` or `aria-label` attribute. When using named parameters, one of these is required.

### Title Attribute

Provides a descriptive title for the iframe:

```markdown
{{< iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Never Gonna Give You Up" >}}
```

### Aria-label Attribute

Alternative to title, useful for describing the iframe content:

```markdown
{{< iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" aria-label="Never Gonna Give You Up" >}}
```

## Responsive Iframes

Make an iframe fully responsive to different screen sizes using the `responsive` parameter:

```markdown
{{< iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" responsive="true" title="YouTube Video" >}}
```

The responsive option uses a `56.25%` aspect ratio (16:9) which is perfect for video content. The iframe will scale to fill its container width while maintaining the correct aspect ratio.

## Complete Examples

### YouTube Video

```markdown
{{< iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" width="560" height="315" title="YouTube: Never Gonna Give You Up" >}}
```

### Vimeo Video (Responsive)

```markdown
{{< iframe src="https://player.vimeo.com/video/76979871" responsive="true" title="Vimeo: Sample Video" >}}
```

### Google Maps (Custom)

```markdown
{{< iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841329099254!2d-74.00676!3d40.71455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1" width="600" height="450" title="Google Maps: New York City" >}}
```

### Responsive Embed (Best Practice)

```markdown
{{< iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" responsive="true" aria-label="Embedded video player" >}}
```

## Parameters Reference

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `src` (or position 0) | String | Yes | — | URL of the page to embed |
| `width` (or position 1) | String | No | `800` | Width in pixels (ignored if `responsive="true"`) |
| `height` (or position 2) | String | No | `600` | Height in pixels (ignored if `responsive="true"`) |
| `title` | String | No* | — | Accessible title for the iframe |
| `aria-label` | String | No* | — | Accessible label for the iframe |
| `responsive` | String | No | `false` | Set to `"true"` for responsive sizing |
| `sandbox` | String | No | — | Optional security restrictions (see below; passes value directly to `sandbox` attribute) |

*When using named parameters, either `title` or `aria-label` is required for accessibility.

## Feature Details

### Accessibility & Security

The shortcode includes security and accessibility features:

- **CORS & Permissions:** The `allow` attribute includes necessary permissions for common embed types (accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture)
- **Sandbox Attribute:** Supports optional `sandbox` parameter, allowing fine-grained control over iframe restrictions and security. See below for usage and best practices.
- **Frameborder:** Uses `frameborder="0"` for legacy visual integration, but this attribute is deprecated. For border styling, use CSS (`border: none;`).
- **Accessible Labels:** Requires descriptive titles or aria-labels for screen reader users.

### Responsive Sizing

When `responsive="true"`:
- The iframe scales to 100% of its container width
- Maintains a 16:9 aspect ratio (perfect for videos)
- Uses absolute positioning with a padding-bottom trick for smooth scaling

### Browser Compatibility

The iframe shortcode works in all modern browsers. Responsive sizing is supported in all current versions of major browsers (Chrome, Firefox, Safari, Edge).

## Tips & Best Practices

1. **Always use `responsive="true"` for videos** – This ensures they look good on mobile devices
2. **Provide descriptive titles** – Help screen reader users understand what the iframe contains
3. **Sandbox for Security:** Use the `sandbox` parameter (e.g., `sandbox="allow-scripts allow-same-origin"` or just `sandbox=""` for strictest mode) to control embedded content permissions. Review [MDN iframe sandbox documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox) for all options.
4. **Frameborder Is Deprecated:** While `frameborder="0"` is set for backward compatibility, control borders using CSS only (`border: none;` for no border).
5. **Use trusted sources** – Only embed content from sources you trust
6. **Test on mobile** – Always preview your posts on mobile devices to ensure iframes display correctly
7. **YouTube embeds** – Use the embed URL format: `https://www.youtube.com/embed/VIDEO_ID`
8. **Vimeo embeds** – Use: `https://player.vimeo.com/video/VIDEO_ID`

## Backward Compatibility

The shortcode maintains full backward compatibility with the original positional argument syntax. Existing posts using the old format will continue to work without changes.

```markdown
{{< iframe "https://example.com/embed" "800" "600" >}}
```

However, for new embeds, we recommend using named parameters with accessibility attributes for better maintainability and accessibility.
