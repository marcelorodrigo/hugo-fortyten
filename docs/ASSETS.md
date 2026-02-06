# Asset Generation

This theme uses Hugo's built-in Tailwind CSS processing for both development and production builds:

## Development Mode (`hugo server`)

When running Hugo in development mode:

- CSS is processed on-the-fly with `css.TailwindCSS`
- JavaScript is built with `js.Build`
- Hot-reload enabled for instant style changes
- **No Node.js or npm required**

```bash
hugo server
```

## Production Mode (`hugo --minify`)

When building for production:

- CSS is processed with Tailwind CSS and minified
- Assets are fingerprinted with SRI for security
- **No Node.js or npm required**
- Fast builds with proper caching

```bash
hugo --minify
```

## For Theme Consumers

You don't need to do anything special. Just add the theme and build:

```bash
hugo  # Works! Hugo handles all Tailwind processing
```

## For Theme Developers

When you modify `assets/css/main.css`:

1. **Local development**: Run `hugo server` — changes are reflected instantly
2. **Before committing**: Run `hugo --minify` to verify production build

```bash
# Development
hugo server

# Production build verification
hugo --minify
```

## Asset Files

- `assets/css/main.css` — Source Tailwind CSS (processed by Hugo)
- `assets/js/utilities.js` — Source utilities (minified by Hugo)

Hugo handles all asset processing automatically. No pre-built assets are committed to git.
