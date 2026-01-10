+++
title = "Responsive Design and Grid System"
date = 2024-01-08T12:00:00-07:00
draft = false
tags = ["responsive", "design", "tailwind", "mobile"]
summary = "Master Hugo FortyTen's responsive grid system built with Tailwind CSS for perfect layouts on any device."
+++

Hugo FortyTen uses Tailwind CSS to create a fully responsive grid system that adapts beautifully to any screen size. Whether your readers are on mobile, tablet, or desktop, your content always looks perfect.

## Responsive Breakpoints

The theme uses standard Tailwind breakpoints:

- **Mobile (base)**: `< 640px` - Single column layouts
- **Tablet (sm-md)**: `640px - 1024px` - Two to three columns  
- **Desktop (lg+)**: `≥ 1024px` - Full multi-column layouts

## Grid System Architecture

### Posts Grid

Posts display in a responsive grid:

```
Mobile:  1 column
Tablet:  3 columns
Desktop: 3 columns
```

Configure the number of posts per page in `hugo.yaml`:

```yaml
params:
  postsPerPage: 9
```

The grid automatically reflows based on screen width.

### Homepage Hero

The hero section (with Treta!) uses a flexible row layout:

```
Mobile:  Stacked (image below text)
Desktop: Side-by-side (image to the right)
```

Uses `flex-col md:flex-row` for seamless adaptation.

### Content Cards

All content cards maintain consistent spacing:

- **Padding**: 1.5rem on all sides
- **Gap**: 1.5rem between cards
- **Border radius**: 8px for softness
- **Shadow**: Subtle drop shadow for depth

## Mobile-First Approach

The theme follows Tailwind's mobile-first philosophy:

1. **Base styles** apply to mobile
2. **`sm:`, `md:`, `lg:` prefixes** add breakpoint-specific overrides
3. **Larger devices** build on mobile styles

For example, header spacing:
```html
<header class="pt-4">           <!-- mobile: 1rem top padding -->
  <div class="container mx-auto py-8">  <!-- all screens: 2rem vertical padding -->
```

## Container and Spacing

### Container
- **Max width**: 1200px (container class)
- **Horizontal padding**: 1rem on all screens
- **Centered**: `mx-auto` for perfect alignment

### Spacing Scale
FortyTen uses consistent Tailwind spacing (4px increments):
- Padding/margins: 4px, 8px, 12px, 16px, 24px, 32px, etc.
- Gaps between grid items: 24px
- Section spacing: 48px

## Typography Scaling

Text sizes scale with screen size:

- **Headings**: Larger on desktop, readable on mobile
- **Body text**: Always 16px base size for readability
- **Line height**: 1.5-1.75 for comfortable reading

## Images in Content

Images are fully responsive:

```html
<img class="max-w-full h-auto" src="..." />
```

- Scales down on mobile
- Maintains aspect ratio
- Never exceeds container width

## Best Practices for Your Content

When creating content for FortyTen:

1. **Use descriptive images** - They scale beautifully
2. **Keep paragraphs readable** - Short lines on mobile
3. **Use headings liberally** - They improve scannability
4. **Test your layouts** - Check mobile, tablet, and desktop views
5. **Optimize images** - Smaller files load faster on mobile

## Testing Responsiveness

To test your site's responsiveness:

1. Run `hugo server`
2. Open your browser's developer tools (F12)
3. Toggle device toolbar (Ctrl+Shift+M or Cmd+Shift+M)
4. Test at mobile, tablet, and desktop sizes

## Customizing Breakpoints

To modify breakpoints, edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  }
}
```

The FortyTen grid system makes creating responsive, beautiful layouts effortless. Your readers will enjoy perfect viewing on any device! 📱💻
