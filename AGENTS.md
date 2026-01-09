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
- **Requirements:** `git`, `hugo`, `npm` or `pnpm`
- **Install in any Hugo site:**
  - Clone this repo to your `themes/` directory:
    ```sh
    git clone https://github.com/marcelorodrigo/hugo-fortyten.git themes/hugo-fortyten
    ```
  - Activate via `hugo.yaml`: `theme: "hugo-fortyten"`
- **Start development server:**
  - `hugo server` (from site root, not theme directory)
- **Edit styling:**
  - Update Tailwind classes in HTML or add config in `tailwind.config.js`.
  - **IMPORTANT:** Do NOT manually call `npx tailwindcss` or the Tailwind CLI. Changes to `tailwind.config.js` will be automatically picked up by Hugo's development server on next rebuild.
- **No custom tests, lints, or scripts** exist by default.

## Coding & Best Practices
- Use Hugo templating idioms – see `/layouts/_default/baseof.html` and related blocks/partials for structure.
- Add new UI/structure using Hugo's partials system. Example: nav/header/footer are under `/layouts/partials/`.
- For drastic CSS changes, modify `tailwind.config.js` or swap fonts in `static/fonts/`.
- Store new JS/CSS in `assets/`, referencing from templates.
- **Typography Styling:** The theme uses `@tailwindcss/typography` plugin for beautiful prose styling on all blog posts. The `prose` class is applied to post content in `layouts/_default/single.html`. Do not remove or modify this class without understanding the impact on post readability.
- **Icons:** Always use **Ionicons** for any icons needed in this project. Ionicons is loaded via CDN at the end of `baseof.html`. Search available icons at https://ionic.io/ionicons. Icons support variants (e.g., `ios`, `md`), sizes, colors, stroke width, and accessibility attributes—explore these options as needed for your use case. Example: `<ion-icon name="heart" size="large" color="red" aria-label="Favorite"></ion-icon>`

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
- Posts are stored as Markdown in `/content/posts/`, optionally as bundles for assets
- Menus are configured in `hugo.yaml#menus` and referenced in layouts
- The theme expects all Hugo content mechanisms (pages, taxonomies) to be supported

## Integration Points
- Minimal, but expects:
  - Hugo CLI & config as orchestrator
  - Tailwind CLI for CSS if not using Hugo Pipes


---
*If you have project-specific scripts, tests, or contribution rules not covered here, please add them to this file for AI readiness.*
