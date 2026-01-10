# AGENTS.md

## Referencing Hugo Documentation
For any ambiguity, uncertainty, or inconsistency encountered in this theme, ALWAYS consult and adhere to the official Hugo documentation at https://gohugo.io/documentation/ unless this file (or related project documentation) explicitly specifies otherwise. Hugo’s official theme, layout, and config conventions should take precedence for all decisions around file structure, templating, asset organization, partials, and content practices.

## Overview
This project is a free and open-source theme for the Hugo static site generator, called **Hugo FortyTen**. It is designed for easy blog customization and responsive design, and is based on Tailwind CSS. The main focus is on simplicity and compatibility for Hugo users, not implementing custom application logic.

## Key Architecture
- **Hugo Theme Structure:**
  - All theme files reside in the `themes/hugo-fortyten/` subdirectory when included in a parent Hugo site.
  - Content is rendered using Hugo's templating in the `layouts/` folder.
  - The entry point for the template structure is `layouts/_default/baseof.html`, which defines the skeleton (HTML, `<head>`, header/footer).
  - Actual pages (home, list, single post) use blocks and partials that inherit from this base template.
- **Styling:**
  - Styling leverages Tailwind CSS (see `tailwind.config.js`).
  - Stylesheets and JavaScript assets are found in `assets/` and compiled to `static/` if needed.
  - Custom fonts are provided in `static/fonts/`.
- **Static assets:**
  - All site-wide assets (images, fonts, JS, favicon) are in `static/`. Images referenced from posts/content should be placed here.
- **Site configuration:**
  - The theme is activated by setting `theme: "hugo-fortyten"` in your root `hugo.yaml`.
  - Navigation menus and other global settings are also defined there.
- **Localization:**
  - The theme is localization-ready using Hugo's built-in i18n.

## Build & Development Workflow
- **Requirements:** `git`, `hugo` (v0.140.2+, extended mode), `npm`
- **Install in any Hugo site:**
  - Clone this repo to your `themes/` directory:
    ```sh
    git clone https://github.com/marcelorodrigo/hugo-fortyten.git themes/hugo-fortyten
    ```
  - Activate via `hugo.yaml`: `theme: "hugo-fortyten"`
- **Development server (this repository):**
  - From project root: `hugo server`
  - Server runs at `http://localhost:1313`
  - Hugo automatically rebuilds on layout/content changes
  - Content is at `/content/posts` and configuration in `/hugo.yaml`
- **Production build:**
  - From project root: `hugo --minify`
  - Output written to `public/`
- **Styling workflow:**
  - Update Tailwind classes in templates or extend `tailwind.config.js`
  - **IMPORTANT:** Do NOT manually call `npx tailwindcss`. Hugo's build system handles Tailwind compilation automatically via `@tailwindcss/cli` integration
  - Tailwind config includes build cache busters (see `theme.yaml` buildStats config) that trigger CSS regeneration on layout/JS/CSS changes
  - Tailwind 4 with `@tailwindcss/typography` plugin for prose styling
- **NPM dependencies:**
  - Run `npm ci --frozen-lockfile` before development to ensure reproducible builds
  - CI/CD uses this approach (see `.github/workflows/compile.yml`)
- **No custom test runner or lint scripts** – project focuses on theme simplicity

## Coding & Best Practices
- Use Hugo templating idioms – see `/layouts/_default/baseof.html` and related blocks/partials for structure.
- Add new UI/structure using Hugo's partials system. Example: nav/header/footer are under `/layouts/partials/`.
- For drastic CSS changes, modify `tailwind.config.js` or swap fonts in `static/fonts/`.
- Store new JS/CSS in `assets/`, referencing from templates.
- **Typography Styling:** The theme uses `@tailwindcss/typography` plugin for beautiful prose styling on all blog posts. The `prose` class is applied to post content in `layouts/_default/single.html`. Do not remove or modify this class without understanding the impact on post readability.
- **Icons:** Always use **Ionicons** for any icons needed in this project. Ionicons is loaded via CDN at the end of `baseof.html`. Search available icons at https://ionic.io/ionicons. Icons support variants (e.g., `ios`, `md`), sizes, colors, stroke width, and accessibility attributes—explore these options as needed for your use case. Example: `<ion-icon name="heart" size="large" color="red" aria-label="Favorite"></ion-icon>`

## Available Shortcodes

The theme includes reusable shortcodes for blog content:

### Icon Shortcode (`icon`)
- **Purpose:** Embed Ionicons with optional links and accessibility labels
- **Syntax:** `{{< icon name="heart" size="large" link="https://example.com" aria-label="Favorite" >}}`
- **File:** `layouts/shortcodes/icon.html` (19 lines)
- **Key features:**
  - Named parameters only (supports `name`, `size`, `link`, `target`, `aria-label`, `aria-hidden`)
  - Validates required `name` parameter
  - Wraps in `<a>` tag when `link` is provided
  - Supports accessibility attributes for screen readers

### Iframe Shortcode (`iframe`)
- **Purpose:** Embed external content (YouTube, Vimeo, Google Maps) with responsive support
- **Syntax:** 
  - Positional: `{{< iframe "https://www.youtube.com/embed/VIDEO_ID" "560" "315" >}}` (backward compatible)
  - Named: `{{< iframe src="URL" width="560" height="315" title="Description" >}}`
  - Responsive: `{{< iframe src="URL" responsive="true" title="Description" >}}`
- **File:** `layouts/shortcodes/iframe.html` (51 lines)
- **Key features:**
  - Supports both positional args (for backward compatibility) and named parameters
  - Requires `title` OR `aria-label` when using named parameters (accessibility requirement)
  - Responsive mode uses 56.25% padding (16:9 aspect ratio) for video content
  - Includes modern `allow` attribute for permissions (accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture)
  - Validates src is provided; clear error messages for missing accessibility attributes

### Strava Shortcode (`strava`)
- **Purpose:** Embed Strava activity cards (runs, rides, swims) using Strava's official embed API
- **Syntax:**
  - Positional: `{{< strava "16998446947" >}}`
  - Named: `{{< strava id="16998446947" >}}`
  - With style: `{{< strava id="16998446947" style="standard" >}}`
- **File:** `layouts/shortcodes/strava.html` (14 lines)
- **Key features:**
  - Accepts activity ID as positional or named parameter
  - Loads Strava embed script only when shortcode is used (performance optimized)
  - Script loads via `https://strava-embeds.com/embed.js` and renders interactive activity card
  - Optional `style` parameter (defaults to "standard")
  - No validation of IDs—lets Strava handle invalid activities gracefully
  - Activity must be public for embed to display

## Accessibility, SEO & Readability Standards
Every navigation element, link, and interactive component must follow these best practices:

### Accessibility (WCAG 2.1 AA compliance)
- **ARIA Labels & Roles:** Use `aria-label`, `aria-labelledby`, and `role` attributes to provide context for screen readers
  - Example: `<a href="..." aria-label="View all posts tagged with design">design</a>`
  - Example: `<div role="navigation" aria-label="Post tags">...</div>`
- **Semantic HTML:** Prefer semantic elements (`<nav>`, `<button>`, `<a>`) over generic divs
- **Color Contrast:** Ensure text contrast meets WCAG AA standards (minimum 4.5:1 for normal text, 3:1 for large text)
- **Focus States:** Interactive elements must have visible focus indicators for keyboard navigation
- **Skip Links:** Consider skip-to-content links for improved keyboard navigation
- **Alt Text:** All images must have descriptive alt text using Hugo's `alt=""` in markdown or template attributes

### SEO Optimization
- **Semantic HTML & Microdata:** Use proper heading hierarchy (h1, h2, h3...), `<time>` for dates, and structured data where appropriate
- **Link Relationships:** Use `rel` attributes to define relationships:
  - `rel="tag"` for tag/taxonomy links
  - `rel="prev"` / `rel="next"` for pagination (if applicable)
  - `rel="canonical"` for duplicate content (handled by Hugo)
- **Meta Information:** Ensure page titles, descriptions, and keywords are properly set
- **Internal Linking:** Use descriptive link text (avoid "click here") for better SEO and accessibility

### Readability Standards
- **Font Size & Line Height:** Use Tailwind's typography scales; maintain readable line-height (1.5-1.75)
- **Contrast & Colors:** Text must be legible against its background; avoid relying on color alone to convey information
- **White Space:** Proper margins and padding improve scannability
- **List Structure:** Use semantic `<ul>` and `<ol>` elements for lists, not plain text or divs
- **Heading Hierarchy:** Maintain logical heading structure; no skipped levels (h1→h3 is bad)

### Implementation Checklist
When adding new UI elements (links, buttons, navigation, tags, etc.):
- [ ] Does it have appropriate ARIA labels/roles for screen readers?
- [ ] Does it use semantic HTML (`<a>`, `<button>`, `<nav>`, etc.)?
- [ ] Does it have a visible focus state for keyboard users?
- [ ] Does it use proper `rel` attributes for semantic link types?
- [ ] Does link text clearly describe the destination/action?
- [ ] Does it maintain WCAG AA color contrast standards?
- [ ] Is the visual hierarchy clear for readability?

## Notable Patterns/Conventions
- **Posts:** Stored as Markdown in `/content/posts/`, optionally as bundles for assets
- **Menus:** Configured in `hugo.yaml#menus` and referenced in layouts via `menu.html` partial
- **Theme structure:** This repo contains both the theme and demo content in the root:
  - Theme files: `layouts/`, `assets/`, `static/`, `tailwind.config.js`, `theme.yaml`
  - Demo content: `content/` posts and `hugo.yaml` configuration in root
  - Development: Run `hugo server` from the root directory
- **Tailwind integration:** Uses Tailwind 4 with `@tailwindcss/typography` for prose styling
- **Brand color:** Custom accent color defined in `tailwind.config.js` as `brand-accent` (orange palette)
- **Typography plugin:** Applied via `prose` class in `layouts/_default/single.html`; provides semantic typography for blog posts
- **Dynamic site generation:** Theme expects all Hugo content mechanisms to be supported (posts, taxonomies, pages, lists)

## Menu Configuration

The theme supports nested (multi-level) menus through Hugo's standard menu system. Menus are defined in `hugo.yaml` and rendered using the `menu.html` partial.

### Key Rules for Nested Menus

1. **Parent items MUST have an `identifier`** (e.g., `identifier: 'about'`)
2. **Child items reference parents by the parent's identifier**, NOT the name (e.g., `parent: 'about'` for a child of identifier `about`)
3. **Child items should NOT have identifiers** – they inherit from their parents
4. **Deep nesting is supported** – grandchildren reference their parent's NAME (not identifier) since they don't have one

### Example Configuration

```yaml
menus:
  main:
    # Top-level items (must have identifier)
    - identifier: 'about'
      name: 'About'
      pageRef: '/about'
      weight: 40
      params:
        icon: 'person'
    
    # Children of 'about' – reference parent by its identifier
    - name: 'Our Story'
      pageRef: '/about/our-story'
      parent: 'about'        # References parent identifier (not name!)
      weight: 41
    
    - name: 'Our Team'
      pageRef: '/about/team'
      parent: 'about'        # References parent identifier
      weight: 42
    
    # Grandchildren of 'about' – reference parent by its name
    - name: 'Marcelo Rodrigo'
      url: 'https://marcelorodrigo.com'
      parent: 'Our Team'     # References parent NAME (since 'Our Team' has no identifier)
      weight: 43
      params:
        icon: 'link'
```

### Rendering

The theme automatically renders nested menus with:
- **Chevron-down icon** on parent items (appears on parent hover)
- **Chevron-right icon** on items with children (in dropdown menus)
- **Hover-based dropdowns** – submenus appear/disappear on parent hover
- **Accessibility support** – proper ARIA labels and semantic HTML

The menu template is at `layouts/partials/menu.html` and uses inline partials for recursive rendering.

## Integration Points
- Minimal, but expects:
  - Hugo CLI & config as orchestrator
  - Tailwind CLI for CSS if not using Hugo Pipes

## Site Search

The theme includes an optional site-wide search feature with a modal UI.

### Enabling Search

To enable search, add the following to your site's `hugo.yaml`:

```yaml
params:
  enable_site_search: true

# Required: Enable JSON output for the search index
outputs:
  home:
    - HTML
    - RSS
    - JSON
```

**Important:** The `outputs` configuration cannot be inherited from themes (Hugo limitation). Users must add this to their site config for search to work.

### How It Works

1. **Search Index:** Hugo generates `/index.json` containing all pages (title, URL, summary, date)
2. **Search Button:** Appears in the menu bar (rightmost) when search is enabled
3. **Modal UI:** Click the search icon or press `Ctrl+K` / `Cmd+K` to open
4. **Features:**
   - Instant search with fuzzy matching on title and summary
   - Shows 10 most recent posts when modal opens (before typing)
   - Keyboard navigation (arrow keys, Enter to select, Esc to close)
   - Click outside or X button to close

### Excluding Content from Search

Add `search_hidden: true` to any page's front matter to exclude it from the search index:

```yaml
---
title: "Private Page"
search_hidden: true
---
```

### Files

| Purpose | File |
|---------|------|
| Search index template | `layouts/_default/index.json` |
| Modal HTML | `layouts/partials/search-modal.html` |
| JavaScript | `assets/js/main.js` |
| Menu button | `layouts/partials/menu.html` (conditional) |


---
*If you have project-specific scripts, tests, or contribution rules not covered here, please add them to this file for AI readiness.*
