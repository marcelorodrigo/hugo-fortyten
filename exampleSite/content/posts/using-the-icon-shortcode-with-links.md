---
title: "Using the Icon Shortcode with Links"
description: "Learn how to use the icon shortcode to add Ionicons with link functionality to your posts."
date: 2026-01-09
tags: ["features", "shortcodes", "icons"]
---

The Hugo FortyTen theme includes a convenient `icon` shortcode that makes it easy to insert [Ionicons](https://ionic.io/ionicons) anywhere in your content. This shortcode supports linking, sizing, and accessibility attributes.

## Basic Usage

To insert an icon, use the shortcode with the `name` parameter:

```markdown
{{< icon name="heart" >}}
```

This will render a heart icon in your post.

## Icon with Link

You can make an icon clickable by adding the `link` parameter:

```markdown
{{< icon name="external" link="https://example.com" >}}
```

By default, links open in the current window. No additional configuration needed.

## Opening Links in a New Window

To open a link in a new tab or window, use the `target` parameter:

```markdown
{{< icon name="external" link="https://example.com" target="_blank" >}}
```

## Sizing Icons

Control the icon size with the `size` parameter. Available sizes are `small`, `large`, and `default`:

```markdown
{{< icon name="star" size="large" >}}
{{< icon name="heart" size="small" >}}
```

## Accessibility

Add descriptive labels for screen readers with the `aria-label` parameter:

```markdown
{{< icon name="heart" aria-label="Favorite this post" >}}
```

Hide icons from screen readers when they're purely decorative using `aria-hidden`:

```markdown
{{< icon name="dot" aria-hidden="true" >}}
```

## Complete Example

Combining multiple parameters:

```markdown
{{< icon name="star" size="large" link="https://github.com" target="_blank" aria-label="Star on GitHub" >}}
```

## Available Icons

Browse all available Ionicons at [https://ionic.io/ionicons](https://ionic.io/ionicons). You can search by name and preview each icon's appearance.

## Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `name` | Yes | The name of the icon (e.g., `heart`, `star`, `menu`) |
| `size` | No | Icon size: `small`, `large`, or omit for default |
| `link` | No | URL to link to |
| `target` | No | Link target: `_blank`, `_self`, etc. (defaults to current window) |
| `aria-label` | No | Accessible label for screen readers |
| `aria-hidden` | No | Set to `true` to hide from screen readers |
