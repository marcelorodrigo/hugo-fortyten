---
title: "YouTube Shortcode"
description: "Embed YouTube videos with Hugo's native shortcode"
slug: "youtube"
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

## Basic Usage

### Simple Embed

Embed a video using just the video ID:

```
{{ youtube 0RKpf3rK57I }}
```

### Named Parameter

Use explicit parameter name:

```
{{ youtube id="0RKpf3rK57I" }}
```

### With Title (Accessible)

Always include a meaningful title:

```
{{ youtube id="0RKpf3rK57I" title="Music Video" }}
```

### Responsive Embed

Make the video adapt to screen size:

```
{{ youtube id="0RKpf3rK57I" class="responsive-video" }}
```

## Advanced Examples

### Video with Specific Start Time

Start playback at a specific timestamp (in seconds):

```
{{ youtube id="0RKpf3rK57I" start="45" }}
```

### Play Specific Segment

Play only a portion of the video (start to end in seconds):

```
{{ youtube id="0RKpf3rK57I" start="30" end="120" }}
```

### Autoplay with Mute

Auto-play requires muting for user experience:

```
{{ youtube id="0RKpf3rK57I" autoplay="true" mute="true" }}
```

### Without Controls

Embedded background video without player controls:

```
{{ youtube id="0RKpf3rK57I" controls="false" autoplay="true" mute="true" loop="true" }}
```

### Lazy Loading for Performance

Load video only when user scrolls into view:

```
{{ youtube id="0RKpf3rK57I" loading="lazy" }}
```

## Special Features

### Lazy Loading

Set `loading="lazy"` to defer video loading until the video is visible. Great for pages with many videos or when users might not scroll to all content.

```
{{ youtube id="0RKpf3rK57I" loading="lazy" }}
```

### Segment Playback

Combine `start` and `end` to highlight a specific portion:

```
{{ youtube id="0RKpf3rK57I" start="10" end="60" title="Tutorial Intro" }}
```

### Privacy Mode

By default, YouTube embeds load minimal data. Hugo's default implementation respects privacy preferences—the iframe uses the no-cookie YouTube domain.

## Accessibility Considerations

### Always Include a Title

Provide context for screen readers and users previewing the page:

```
{{ youtube id="0RKpf3rK57I" title="Product Launch Announcement" }}
```

### Use Meaningful Labels

Describe what the video shows:

```
✓ {{ youtube id="0RKpf3rK57I" title="How to Use the Dashboard" }}
✗ {{ youtube id="0RKpf3rK57I" title="Video" }}
```

### Keyboard Navigation

YouTube embeds are fully keyboard accessible. Users can:
- Tab to focus the video
- Space/Enter to play/pause
- Arrow keys to seek
- F for fullscreen

## Best Practices

1. **Always include a title** — Helps screen readers and improves accessibility
2. **Use lazy loading for long pages** — Improves performance when videos aren't immediately visible
3. **Provide context** — Add surrounding text explaining the video content
4. **Test responsive behavior** — Ensure videos look good on mobile
5. **Use timestamps for tutorials** — Help users jump to relevant sections with `start` and `end`
6. **Consider autoplay carefully** — Can be jarring; disable unless essential

## Common Patterns

### Tutorial Series

```
## Video Tutorial

Learn how to set up your account in this quick walkthrough:

{{ youtube id="0RKpf3rK57I" title="Account Setup Guide" }}

This 5-minute video covers:
- Creating your account
- Verifying your email
- Configuring preferences
```

### Documentation Section

```
## Getting Started

Watch this overview before diving into the docs:

{{ youtube id="0RKpf3rK57I" title="Platform Overview" loading="lazy" }}
```

### Multiple Videos in Sequence

```
## Training Series

### Part 1: Fundamentals
{{ youtube id="0RKpf3rK57I" title="Part 1: Fundamentals" }}

### Part 2: Advanced Techniques
{{ youtube id="video-id-2" title="Part 2: Advanced Techniques" }}

### Part 3: Best Practices
{{ youtube id="video-id-3" title="Part 3: Best Practices" }}
```

### Background Video (Muted Autoplay)

```
{{ youtube id="0RKpf3rK57I" autoplay="true" mute="true" controls="false" loop="true" }}
```

### Embedding with Custom Styling

```
{{ youtube id="0RKpf3rK57I" title="Video" class="border-4 border-blue-500" }}
```

## Finding YouTube Video IDs

### From the URL

1. Open the video on YouTube
2. Look at the URL: `https://www.youtube.com/watch?v=0RKpf3rK57I`
3. The ID is the value after `v=` — in this case: `0RKpf3rK57I`

### From Share Button

1. Click "Share" on the YouTube video
2. Copy the short link (e.g., `https://youtu.be/0RKpf3rK57I`)
3. Extract the ID after the last slash: `0RKpf3rK57I`

### From Embed Code

1. Click "Share" → "Embed"
2. Find the `src` attribute: `https://www.youtube.com/embed/0RKpf3rK57I`
3. Extract the ID: `0RKpf3rK57I`

## Troubleshooting

### Video doesn't load

Verify the video ID is correct and the video is publicly available.

```
✓ {{ youtube id="0RKpf3rK57I" }}
✗ {{ youtube id="0RKpf3rK57I!" }}  (typo)
```

### Video is too small on mobile

The video should automatically be responsive. If it's not scaling, check your theme's CSS. Hugo's native shortcode handles responsive sizing by default.

### Autoplay isn't working

Browsers require videos to be muted to autoplay. Use:

```
{{ youtube id="0RKpf3rK57I" autoplay="true" mute="true" }}
```

### Start/end times not working

Ensure times are in seconds and end time is greater than start time:

```
✓ {{ youtube id="0RKpf3rK57I" start="10" end="60" }}
✗ {{ youtube id="0RKpf3rK57I" start="1m10s" end="2m" }}  (must be seconds)
```

## Comparing Embedding Methods

| Method | Best For | Pros | Cons |
|--------|----------|------|------|
| **Hugo YouTube Shortcode** | Standard embeds | Native, simple, responsive, lazy-loadable | Limited customization |
| **iframe Shortcode** | Custom URLs | Full control, works with non-YouTube sources | Requires iframe src URL |
| **Direct HTML** | Advanced needs | Maximum control | Not recommended for docs |

## Next Steps

- [iframe Shortcode](/shortcodes/iframe/) — Embed other content
- [Icon Shortcode](/shortcodes/icon/) — Add icons to pages
- [Strava Shortcode](/shortcodes/strava/) — Embed fitness activities
