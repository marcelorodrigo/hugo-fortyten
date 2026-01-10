+++
title = "Configuring Posts Per Page"
date = 2024-01-08T10:00:00-07:00
draft = false
tags = ["configuration", "pagination"]
summary = "Customize how many posts appear on your blog's list page with a simple configuration option."
+++

Hugo FortyTen makes it easy to control how many posts display on your blog's main posts page. Adjust pagination to fit your design and content strategy!

## Default Behavior

By default, Hugo FortyTen displays **9 posts per page** in a responsive 3-column grid:
- **1 column** on mobile devices
- **3 columns** on tablets and desktops
- Posts are sorted by title with pagination controls

## How to Customize

To change the number of posts per page, edit your site's `hugo.yaml`:

```yaml
params:
  postsPerPage: 12  # Change this to your preferred number
```

### Examples

Show fewer posts (e.g., for feature-rich designs):
```yaml
postsPerPage: 6
```

Show more posts (e.g., for content-heavy sites):
```yaml
postsPerPage: 20
```

## How It Works

- The theme reads the `postsPerPage` parameter from your config
- If not specified, it defaults to 9
- Hugo automatically generates pagination controls for navigation
- Each page displays the configured number of posts in the 3-column grid

## Tips

- Choose numbers divisible by 3 for perfect grid alignment (3, 6, 9, 12, 15, etc.)
- Lower numbers (6-9) work well for detailed post summaries
- Higher numbers (12-20) work better for short post previews
- Test different values to find what works best for your content and design!

Happy customizing! 🎨
