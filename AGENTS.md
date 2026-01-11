# AGENTS.md

Purpose: concise instructions and discoverable patterns for AI coding agents working on this repo.

What this project is
- Hugo theme: Hugo FortyTen (theme + demo in repository root).
- Tailwind-based blog theme using Hugo templating, shortcodes and optional search index generation.

Quick start (commands)
- Dev server: `hugo server` (serves at `http://localhost:1313`).
- Production build: `hugo --minify` (output → `public/`).
- Install node deps: `npm ci --frozen-lockfile` (used by CI; do not run `npx tailwindcss` manually).

Key files to inspect
- `layouts/_default/baseof.html:1` — base template and block structure.
- `layouts/partials/head.html:1` — critical inline scripts (theme detection) and CSS/JS includes.
- `assets/css/main.css:1` — Tailwind imports and theme-level CSS (place to centralize variables).
- `layouts/_default/single.html:1` — post rendering; uses `prose` class from typography plugin.
- `layouts/shortcodes/icon.html:1` — example shortcode pattern and accessibility handling.
- `layouts/_default/index.json:1` — search index template (used when search enabled).

Architecture notes (big picture)
- Hugo drives rendering: templates in `layouts/` produce static HTML from `content/` Markdown.
- Assets (Tailwind CSS, JS) live in `assets/` and are processed by Hugo’s pipeline; avoid running Tailwind separately.
- Shortcodes implement reusable HTML snippets (see `layouts/shortcodes/`).
- Menu rendering and nested menus live in `layouts/partials/menu.html` and follow Hugo's `menus` config rules.

Project conventions important for agents
- Use Hugo idioms: prefer partials and blocks over duplicating markup.
- Styling: prefer adding Tailwind classes or dark: variants in templates instead of adding bespoke CSS unless necessary.
- Typography: keep `prose` on post content (`layouts/_default/single.html`) to preserve typographic styling.
- Icons: Ionicons via CDN — use `layouts/shortcodes/icon.html` or `<ion-icon>` for consistency and accessibility.
- Theme switching: inline script in `layouts/partials/head.html` applies `dark` class synchronously — keep it inline to prevent FOUC.

Editing rules for AI agents
- Read files before editing. When touching a file, follow existing conventions in nearby files/partials.
- NEVER run `npx tailwindcss` manually; Hugo handles Tailwind build.
- Do not change `hugo.yaml` or theme activation without user instruction unless fixing a bug.
- When updating templates, prefer minimal diffs: add classes/partials rather than reshuffling entire layouts.
- Accessibility: all interactive elements should include `aria-*` attributes and visible focus states (see AGENTS.md accessibility checklist in repo).

Workflows & validation
- Local dev verification: run `hugo server`, then inspect pages in browser or `curl http://localhost:1313`.
- Search: to validate search, add `outputs.home` JSON in user site config and confirm `public/index.json` exists after build.
- CSS changes: edit `assets/css/main.css` and reload Hugo; check that Tailwind classes appear in output CSS.

Patterns & examples
- Shortcode with validation: `layouts/shortcodes/icon.html` enforces required `name` param and optional `link` wrapping.
- Menu rules: parent items must have `identifier`, children reference `parent: 'identifier'` (see `hugo.yaml` menus example in repository).
- Dark-mode: `layouts/partials/head.html` includes synchronous theme detection which writes/reads `localStorage.theme` and toggles `document.documentElement.classList`.

Integration points
- External CDNs: Ionicons and Alpine.js are loaded from CDNs in base templates — tests should account for web access or use offline fallbacks in CI.
- Optional Strava embed is loaded only when shortcodes request it (`layouts/shortcodes/strava.html`).
- CI builds: `.github/workflows/compile.yml` runs `npm ci` and Hugo build — inspect for exact versions if needed.

Commit & PR guidance for agents
- Do not create git commits or push changes unless explicitly requested by the user.
- If asked to prepare a commit, stage only related files and draft a concise 1–2 sentence commit message describing the "why".

If anything here is unclear or you want the doc expanded (examples, troubleshooting steps, or a developer checklist), tell me which sections to expand and I will iterate.