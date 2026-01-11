# AGENTS.md

Purpose: concise instructions and discoverable patterns for AI coding agents working on this repo.

## What this project is
- **Hugo theme repository**: contains both the theme (`layouts/`, `assets/`) and a demo site (`exampleSite/`).
- Tailwind CSS v4 with typography plugin, Alpine.js for interactivity, Ionicons for icons.
- Requires Hugo Extended (min v0.140.2) — Hugo handles Tailwind builds via `css.TailwindCSS`.

## Repository structure
```
/                     ← Theme root (layouts/, assets/, static/, theme.yaml)
├── exampleSite/      ← Demo site with content, config, and theme symlink
│   ├── hugo.yaml     ← Site config (baseURL, menus, params)
│   ├── content/      ← Demo content (Markdown)
│   └── themes/fortyten -> ../../  ← Symlink to theme root
└── .github/workflows/compile.yml  ← CI workflow
```

## Quick start commands
| Task | Command | Directory |
|------|---------|-----------|
| Dev server | `hugo server` | `exampleSite/` |
| Production build | `hugo --minify` | `exampleSite/` |
| Install deps (CI only) | `npm ci` | repo root |

**Important**: Always run Hugo commands from `exampleSite/`, not the repo root.

## CI/CD & Deployment
- **GitHub Actions** (`.github/workflows/compile.yml`): runs `hugo --minify` with `working-directory: exampleSite`.
- **Cloudflare Pages**: set Root Directory to `exampleSite`, build command `hugo --minify`, output `public`.
- The symlink `exampleSite/themes/fortyten -> ../../` allows Hugo to find the theme in both local and CI environments.
- Use `-b <url>` flag to override `baseURL` for preview deployments.

## Key files
| File | Purpose |
|------|---------|
| `layouts/_default/baseof.html` | Base template with block structure |
| `layouts/partials/head.html` | Inline theme detection script (prevents FOUC) |
| `layouts/partials/head/css.html` | Tailwind CSS processing via Hugo pipes |
| `assets/css/main.css` | Tailwind imports, theme variables, base styles |
| `layouts/_default/single.html` | Post rendering with `prose` typography |
| `layouts/shortcodes/*.html` | Reusable components (icon, iframe, strava) |
| `exampleSite/hugo.yaml` | Demo site config with menu examples |

## Architecture notes
- **Hugo drives rendering**: templates produce static HTML from Markdown content.
- **Tailwind via Hugo**: `css.TailwindCSS` in `head/css.html` — never run `npx tailwindcss` manually.
- **Dark mode**: class-based (`dark` on `<html>`), detected synchronously in `head.html` inline script.
- **Search**: client-side fuzzy search; enable with `params.enableSiteSearch: true` and `outputs.home: [HTML, RSS, JSON]`.

## Conventions
- **Prefer partials/blocks** over duplicating markup.
- **Tailwind classes** in templates; avoid custom CSS unless necessary.
- **Typography**: keep `prose` class on content for consistent styling.
- **Icons**: use `{{< icon name="..." >}}` shortcode or `<ion-icon>` with `aria-hidden="true"`.
- **Menus**: parent items need `identifier`; children reference via `parent: 'identifier'`.

## Editing rules
- Read files before editing; follow conventions in nearby files.
- Prefer minimal diffs: add classes/partials rather than restructuring layouts.
- Do not modify `hugo.yaml` or `theme.yaml` without user instruction.
- All interactive elements need `aria-*` attributes and visible focus states.

## Validation
- Run `hugo server` from `exampleSite/`, check `http://localhost:1313`.
- Search: confirm `public/index.json` exists after build when search is enabled.
- CSS: edit `assets/css/main.css`, reload Hugo, verify classes in output.

## Commit guidance
- Do not create commits unless explicitly requested.
- Stage only related files; write concise 1-2 sentence messages describing "why".
