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
  - Update Tailwind classes in HTML or add config in `tailwind.config.js`, then rebuild Tailwind if not using Hugo Pipes.
- **Tailwind CSS:**
  - Add or change Tailwind classes directly in templates or content.
  - Run Tailwind CLI manually for production CSS if needed:
    ```sh
    npx tailwindcss -c tailwind.config.js -o assets/css/main.css --minify
    ```
- **No custom tests, lints, or scripts** exist by default.

## Coding & Best Practices
- Use Hugo templating idioms – see `/layouts/_default/baseof.html` and related blocks/partials for structure.
- Add new UI/structure using Hugo’s partials system. Example: nav/header/footer are under `/layouts/partials/`.
- For drastic CSS changes, modify `tailwind.config.js` or swap fonts in `static/fonts/`.
- Store new JS/CSS in `assets/`, referencing from templates.

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
