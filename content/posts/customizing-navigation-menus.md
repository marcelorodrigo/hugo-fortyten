---
title: "Customizing Navigation Menus"
description: "Learn how to create and customize navigation menus with icons in Hugo FortyTen."
date: 2026-01-09
tags: ["features", "menus", "configuration"]
---

Hugo FortyTen uses Hugo's built-in menu system to make it easy to create and customize navigation menus. You can define menus in your `hugo.yaml` configuration file and they'll automatically appear in your site's header.

## Basic Menu Configuration

Menus are configured in the `menus` section of your `hugo.yaml` file. Here's the default setup:

```yaml
menus:
  main:
    - name: 'Home'
      pageRef: '/'
      weight: 10
    - name: 'Posts'
      pageRef: '/posts'
      weight: 20
    - name: 'Tags'
      pageRef: '/tags'
      weight: 30
```

The "main" menu appears in the header. Menu items are sorted by their `weight` in ascending order (lower weights appear first).

## Menu Item Parameters

Each menu item supports the following parameters:

| Parameter | Required | Description |
|-----------|----------|-------------|
| `name` | Yes | The text displayed for the menu item |
| `pageRef` | No | Reference to a Hugo page by path (e.g., `/posts`) |
| `url` | No | Direct URL to link to (use `pageRef` for internal pages) |
| `weight` | No | Sort order (lower values appear first) |
| `params` | No | Additional parameters (see below) |

**Note:** Use `pageRef` for internal links to Hugo pages and `url` for external URLs or custom paths.

## Adding Icons to Menu Items

Menu items can display optional icons using [Ionicons](https://ionic.io/ionicons). Add an `icon` parameter under `params`:

```yaml
menus:
  main:
    - name: 'Home'
      pageRef: '/'
      weight: 10
      params:
        icon: 'home'
    - name: 'Posts'
      pageRef: '/posts'
      weight: 20
      params:
        icon: 'document-text'
    - name: 'Tags'
      pageRef: '/tags'
      weight: 30
      params:
        icon: 'pricetag'
```

The icon will appear before the menu text, with a small gap between them.

## Controlling Icon Size

Make icons larger or smaller with the optional `iconSize` parameter:

```yaml
menus:
  main:
    - name: 'Home'
      pageRef: '/'
      weight: 10
      params:
        icon: 'home'
        iconSize: 'large'
    - name: 'Posts'
      pageRef: '/posts'
      weight: 20
      params:
        icon: 'document-text'
        iconSize: 'small'
```

Supported sizes: `small`, `large`, or omit for the default size.

## Complete Example

Here's a more complete example with mixed menu items (some with icons, some without):

```yaml
menus:
  main:
    - name: 'Home'
      pageRef: '/'
      weight: 10
      params:
        icon: 'home'
    - name: 'Blog'
      pageRef: '/posts'
      weight: 20
      params:
        icon: 'document-text'
        iconSize: 'large'
    - name: 'Categories'
      pageRef: '/tags'
      weight: 30
    - name: 'About'
      url: '/about'
      weight: 40
      params:
        icon: 'information-circle'
```

## Text Casing

Menu text is displayed exactly as you write it in your configuration. Hugo FortyTen does not force any text transformation, so:

```yaml
- name: 'HOME'  # Displays as "HOME"
- name: 'Posts' # Displays as "Posts"
- name: 'tags'  # Displays as "tags"
```

## Finding Icons

Browse all available Ionicons at [https://ionic.io/ionicons](https://ionic.io/ionicons). Search by name or category to find the perfect icon for your menu items.

## Pro Tips

1. **Icon + Text Combination** - Icons help users quickly scan navigation. Combine them with clear, descriptive text.
2. **Consistent Sizing** - Use the same icon size across your main menu for a polished look. Reserve different sizes for secondary menus if needed.
3. **External Links** - Use `url` for external links (e.g., social profiles) and `pageRef` for internal Hugo pages.
4. **Menu Organization** - Use weights to organize items logically (e.g., higher weight for less important items).

## Nested Menus (Advanced)

Hugo supports nested menu items through `parent` references, though the default theme styling renders all items at the top level. This is a feature for advanced customization if you extend the theme.

---

For more information on Hugo menus, see the [official Hugo menu documentation](https://gohugo.io/content-management/menus/).
