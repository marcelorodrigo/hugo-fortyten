# Asset Generation

This theme uses a dual-mode asset pipeline:

## Development Mode (`hugo server`)

When running Hugo in development mode, the theme uses **Tailwind CSS CLI** for real-time compilation:

- CSS is processed on-the-fly with `css.TailwindCSS`
- JavaScript is built with `js.Build`
- Hot-reload enabled for instant style changes
- Requires Node.js and `npm install` to be run first

```bash
npm install
hugo server
```

## Production Mode (`hugo --minify` or `hugo`)

When building for production, the theme uses **pre-built assets** shipped with the theme:

- CSS loads from `assets/dist/css/main.css` (minified, fingerprinted, with SRI)
- JavaScript loads from `assets/dist/js/utilities.js` (minified, fingerprinted, with SRI)
- **No Node.js or Tailwind CLI required**
- Fast builds (~50ms)

## For Theme Consumers

You don't need to do anything special. Just add the theme and build:

```bash
hugo  # Works! Pre-built assets are included
```

## For Theme Developers

When you modify `assets/css/main.css` or `assets/js/utilities.js`:

1. **Local development**: Run `hugo server` — changes are reflected instantly
2. **Before committing**: Run `npm run build` to update pre-built assets
3. **Or**: Push to main branch — GitHub Actions automatically rebuilds and commits updated assets

```bash
# One-time setup
npm install

# Development
hugo server

# Build assets for commit
npm run build

# Or let CI do it automatically
git push
```

## Build Scripts

- `npm run build` — Build both CSS and JS
- `npm run build:css` — Build Tailwind CSS to `assets/dist/css/main.css`
- `npm run build:js` — Minify utilities to `assets/dist/js/utilities.js`

## Asset Files

- `assets/css/main.css` — Source Tailwind CSS (compiled in dev mode)
- `assets/js/utilities.js` — Source utilities (minified in dev mode)
- `assets/dist/css/main.css` — Pre-built, minified CSS (used in production)
- `assets/dist/js/utilities.js` — Pre-built, minified JS (used in production)

All pre-built assets are committed to git and included in releases.
