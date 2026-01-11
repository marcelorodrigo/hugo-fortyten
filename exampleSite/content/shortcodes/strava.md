---
title: "Strava Shortcode"
description: "Embed Strava activity cards to showcase fitness activities"
slug: "strava"
date: 2026-01-11T12:00:00Z
tags:
  - shortcode
  - strava
---

## Overview

The `strava` shortcode embeds Strava activity cards directly into your blog posts. Share running routes, cycling tracks, or other athletic activities with embedded maps, statistics, and activity details.

Perfect for fitness bloggers, athletes, and anyone sharing their Strava accomplishments.

## Example
{{< strava id="182316148" >}}

## Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| Positional arg / `id` | string | Yes | — | Strava activity ID (numeric) or full Strava activity URL. Auto-extracts ID from URL |
| `style` | string | No | "standard" | Embed style (currently "standard" is primary option) |

## Basic Usage

### With Activity ID

Embed using the numeric activity ID:

```html
{{</* strava "182316148" */>}}
```

### With Strava URL

Paste the full Strava activity URL (ID is auto-extracted):

```html
{{</* strava "https://www.strava.com/activities/182316148" */>}}
```

### Named Parameter

Use the `id` parameter explicitly:

```html
{{</* strava id="182316148" */>}}
```

### With Style

Specify embed style:

```html
{{</* strava id="182316148" style="standard" */>}}
```

## Finding Your Activity ID

### From the URL

1. Open your activity on Strava
2. Look at the URL: `https://www.strava.com/activities/182316148`
3. The number at the end is your activity ID

### Copy Full URL

1. Open your activity on Strava
2. Copy the URL from the address bar
3. Paste it in the shortcode (the ID is auto-extracted)

## Special Features

### Automatic URL Processing

All of these work the same way:

```html
{{</* strava "182316148" */>}}
{{</* strava "https://www.strava.com/activities/182316148" */>}}
{{</* strava "https://www.strava.com/activities/182316148/" */>}}
```

All extract the numeric ID and produce identical output.

### Lazy Script Loading

The Strava embed script is only loaded when needed:

- Strava script loads only once per page
- Improves page performance by preventing unnecessary loading

## Privacy Considerations

### Public Activities Only

Only public Strava activities can be embedded. Private activities will not render.

**To make an activity public:**
1. Open your activity on Strava
2. Click the privacy icon
3. Change visibility to "Public"