+++
title = "SEO Best Practices and Meta Tags"
date = 2024-01-08T13:00:00-07:00
draft = false
tags = ["seo", "metadata", "optimization"]
summary = "Optimize your Hugo FortyTen blog for search engines with proper meta tags and SEO best practices."
+++

Hugo FortyTen is built with SEO in mind. Learn how to optimize your blog for search engine visibility and ensure your content reaches the right audience.

## Meta Tags in FortyTen

The theme includes essential meta tags for search engines and social media. Check `layouts/partials/head.html` to see all configured tags.

### Key Meta Tags

**Character Encoding**
```html
<meta charset="UTF-8" />
```
Ensures proper text rendering in all browsers and search engines.

**Viewport Meta Tag**
```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```
Tells mobile browsers how to render your site - crucial for mobile SEO.

**Description Meta Tag**
```html
<meta name="description" content="Your site description" />
```
Appears in search results. Keep it between 150-160 characters for best display.

**Open Graph Tags** (for social sharing)
```html
<meta property="og:title" content="Page Title" />
<meta property="og:description" content="Page description" />
<meta property="og:url" content="Page URL" />
```
Controls how your content appears when shared on Facebook, LinkedIn, etc.

## Optimizing Your Posts

### Title Tags

Create compelling titles that include keywords:

```yaml
title = "How to Optimize Your Blog for SEO: A Complete Guide"
```

**Best practices:**
- Include main keyword naturally
- Keep under 60 characters
- Make it descriptive and compelling
- Avoid keyword stuffing

### Post Summaries

Write clear summaries for your posts:

```yaml
summary = "Learn essential SEO strategies to improve your blog's search visibility and drive more traffic."
```

**Guidelines:**
- 150-160 characters ideal
- Include target keywords naturally
- Summarize the post content
- Make readers want to click

### Dates and Content

Hugo FortyTen automatically includes:
- Publication date (for search engines)
- Last modified date (when you update posts)
- Word count (shown in post headers)
- Reading time estimate

These signals help search engines understand your content's freshness and value.

### Internal Linking

Link to your other posts naturally:

```markdown
[See our post on Responsive Design](/posts/responsive-design-and-grid-system/)
```

**Benefits:**
- Helps search engines crawl your site
- Improves user engagement (readers stay longer)
- Distributes page authority throughout your site

## Tags and Categories

Use tags strategically to organize content:

```yaml
tags = ["seo", "optimization", "content"]
```

**Tag best practices:**
- Use 2-4 tags per post
- Be specific (avoid vague tags)
- Use consistent tag names
- Create dedicated tag pages

Each tag automatically generates a page listing all posts with that tag - great for SEO!

## Site Structure for SEO

FortyTen's clean structure helps search engines:

```
/                    - Homepage
/posts/              - Posts list page (paginated)
/posts/my-article/   - Individual posts
/tags/               - All tags page
/tags/seo/           - Posts tagged with "seo"
```

This logical hierarchy makes crawling and indexing efficient.

## Configuration Tips

### In Your `hugo.yaml`

```yaml
baseURL: 'https://yourdomain.com/'
languageCode: 'en-US'
title: 'Your Blog Title'

params:
  author:
    name: "Your Name"
    email: "your-email@example.com"
    bio: "Your author bio - appears on posts"
```

The baseURL is critical - it tells search engines your canonical domain.

## Image SEO

When adding images to posts:

1. **Use descriptive alt text**
   ```markdown
   ![A person typing on a laptop while reviewing SEO metrics](/image.jpg)
   ```

2. **Optimize file names**
   ```
   Good: seo-optimization-guide.jpg
   Bad:  IMG_1234.jpg
   ```

3. **Compress images**
   - Faster loading = better SEO
   - Use WebP format when possible
   - Aim for < 200KB per image

## Performance SEO

Search engines consider page speed. FortyTen excels here:

- **Lightweight CSS** - Tailwind CSS is minimal
- **No external dependencies** - Jost fonts are self-hosted
- **Optimized assets** - Images in static folder are served efficiently
- **Mobile-friendly** - Responsive design is built in

## Sitemap and Robots

Hugo automatically generates:
- **Sitemap** (`/sitemap.xml`) - Lists all pages for search engines
- **Robots.txt** - Can be customized to control crawler access

These are essential for SEO and usually work without configuration.

## Monitoring Your SEO

Use free tools to monitor your blog's SEO:

- **Google Search Console** - Track search visibility
- **Google Analytics** - Monitor traffic and user behavior
- **Lighthouse** - Check page speed and SEO scores
- **Ubersuggest** - Find keyword opportunities

## Final SEO Checklist

Before publishing each post:

- ✅ Title includes main keyword (under 60 chars)
- ✅ Summary is compelling (150-160 chars)
- ✅ Post has 2-4 relevant tags
- ✅ Internal links point to related posts
- ✅ Images have descriptive alt text
- ✅ Images are optimized (< 200KB)
- ✅ Content is well-structured with headings
- ✅ No spelling or grammar errors
- ✅ Post is not marked as draft

FortyTen gives you the tools for SEO success - now write great content! 🚀
