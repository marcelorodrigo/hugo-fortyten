---
title: "YouTube Shortcode"
description: "Embed YouTube videos with Hugo's native shortcode"
slug: "youtube"
image: "https://images.unsplash.com/photo-1637806631554-bcfe2c618058?q=80"
tags:
  - "shortcode"
  - "youtube"
date: 2026-01-09T12:00:00Z
---

## Overview

The `youtube` shortcode is Hugo's native shortcode for embedding YouTube videos. It provides responsive embedding, lazy loading, privacy controls, and playback customization—all without requiring any additional setup.

FortyTen supports the standard Hugo YouTube shortcode with full flexibility for video ID, timing, and playback options.

## Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `id` | string | Yes (positional or named) | — | YouTube video ID (e.g., "0RKpf3rK57I") |
| `autoplay` | string | No | "false" | Auto-play on page load: "true" or "false" |
| `controls` | string | No | "true" | Show playback controls: "true" or "false" |
| `allowFullScreen` | string | No | "true" | Allow fullscreen mode: "true" or "false" |
| `loading` | string | No | "eager" | Loading behavior: "eager" or "lazy" |
| `start` | string | No | — | Start time in seconds |
| `end` | string | No | — | End time in seconds |
| `loop` | string | No | "false" | Loop playback: "true" or "false" |
| `mute` | string | No | "false" | Mute by default: "true" or "false" |
| `title` | string | No | — | Accessible title (recommended) |
| `class` | string | No | — | CSS class for container styling |

## Example
{{< youtube id="dQw4w9WgXcQ" loading="lazy" >}}

## Basic Usage

### Simple Embed

Embed a video using just the video ID:

```html
{{</* youtube dQw4w9WgXcQ */>}}
```

### Named Parameter

Use explicit parameter name:

```html
{{</* youtube id="dQw4w9WgXcQ" */>}}
```

### With Title (Accessible)

Always include a meaningful title:

```html
{{</* youtube id="dQw4w9WgXcQ" title="Music Video" */>}}
```

### Responsive Embed

Make the video adapt to screen size:

```html
{{</* youtube id="dQw4w9WgXcQ" class="responsive-video" */>}}
```

## Advanced Examples

### Video with Specific Start Time

Start playback at a specific timestamp (in seconds):

```html
{{</* youtube id="dQw4w9WgXcQ" start="45" */>}}
```

### Play Specific Segment

Play only a portion of the video (start to end in seconds):

```html
{{</* youtube id="dQw4w9WgXcQ" start="30" end="120" */>}}
```

### Autoplay with Mute

Auto-play requires muting for user experience:

```html
{{</* youtube id="dQw4w9WgXcQ" autoplay="true" mute="true" */>}}
```

### Without Controls

Embedded background video without player controls:

```html
{{</* youtube id="dQw4w9WgXcQ" controls="false" autoplay="true" mute="true" loop="true" */>}}
```

### Lazy Loading for Performance

Load video only when user scrolls into view:

```html
{{</* youtube id="dQw4w9WgXcQ" loading="lazy" */>}}
```

## Special Features

### Lazy Loading

Set `loading="lazy"` to defer video loading until the video is visible. Great for pages with many videos or when users might not scroll to all content.

```html
{{</* youtube id="dQw4w9WgXcQ" loading="lazy" */>}}
```

### Segment Playback

Combine `start` and `end` to highlight a specific portion:

```html
{{</* youtube id="dQw4w9WgXcQ" start="10" end="60" title="Tutorial Intro" */>}}
```

### Privacy Mode

By default, YouTube embeds load minimal data. Hugo's default implementation respects privacy preferences—the iframe uses the no-cookie YouTube domain.

## Accessibility Considerations

### Always Include a Title

Provide context for screen readers and users previewing the page:

```html
{{</* youtube id="dQw4w9WgXcQ" title="You will like it!" */>}}
```


## Finding YouTube Video IDs

### From the URL

1. Open the video on YouTube
2. Look at the URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
3. The ID is the value after `v=` — in this case: `dQw4w9WgXcQ`

### From Share Button

1. Click "Share" on the YouTube video
2. Copy the short link (e.g., `https://youtu.be/dQw4w9WgXcQ`)
3. Extract the ID after the last slash: `dQw4w9WgXcQ`

### From Embed Code

1. Click "Share" → "Embed"
2. Find the `src` attribute: `https://www.youtube.com/embed/dQw4w9WgXcQ`
3. Extract the ID: `dQw4w9WgXcQ`
