---
title: "Using the Strava Shortcode"
description: "Learn how to embed Strava activities in your blog posts using the strava shortcode."
date: 2026-01-10
tags: ["features", "shortcodes", "strava"]
---

The Hugo FortyTen theme includes a convenient `strava` shortcode that makes it easy to embed Strava activities (runs, rides, swims, etc.) in your blog posts. The embed is rendered using Strava's official embed script and dynamically displays the activity card.

## Basic Usage

To embed a Strava activity, use the shortcode with the activity ID:

```markdown
{{< strava "16998446947" >}}
```

This will render an interactive Strava activity card with the activity name, distance, duration, elevation, map, and a link to the full activity on Strava.

## Getting the Activity ID

You can find the activity ID in the URL when viewing an activity on Strava:

- Full URL: `https://www.strava.com/activities/16998446947`
- Activity ID: `16998446947`

## Named Parameter Syntax

Alternatively, you can use the named parameter syntax:

```markdown
{{< strava id="16998446947" >}}
```

Both syntaxes work identically. Choose whichever you prefer.

## Customizing the Style

You can customize the appearance of the embed using the `style` parameter:

```markdown
{{< strava id="16998446947" style="standard" >}}
```

The default style is `"standard"`. You can experiment with other style values if Strava's embed script supports them.

## Complete Examples

### Basic activity embed

```markdown
{{< strava "16998446947" >}}
```

### With explicit style

```markdown
{{< strava id="16998446947" style="standard" >}}
```

### Multiple activities in one post

```markdown
{{< strava "16998446947" >}}

{{< strava "16998446946" >}}

{{< strava "16998446945" >}}
```

## How It Works

The shortcode:

1. Accepts the Strava activity ID (with or without the full URL)
2. Generates the embed placeholder HTML
3. Loads Strava's embed script (`https://strava-embeds.com/embed.js`)
4. The script automatically fetches and renders the activity card

The script is loaded only when the shortcode is used, so it won't slow down pages that don't include Strava activities.

## Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `id` or position arg | Yes | The Strava activity ID (numeric) |
| `style` | No | Embed style (defaults to `"standard"`) |

## Important Notes

- The Strava activity must be public for the embed to display
- Private activities will not render
- If an invalid activity ID is provided, Strava's embed script will display an error message
- The embed is responsive and adapts to different screen sizes

## Browser Compatibility

The Strava embed works in all modern browsers that support iframes and JavaScript. The embed script handles all styling and interactivity automatically.
