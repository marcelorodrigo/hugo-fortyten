# Hugo FortyTen

<img src="https://raw.githubusercontent.com/marcelorodrigo/hugo-fortyten/refs/heads/master/images/screenshot.jpg" alt="Hugo FortyTen Theme Preview" />

A minimalist, responsive blog theme for Hugo built with Tailwind CSS.

## Features

- **Dark mode**: automatic or manual theme switching with persistent preference
- **Full-text search**: client-side fuzzy search with keyboard navigation
- **Responsive design**: mobile-first approach that works on all devices
- **Dark mode aware**: optimize images and prose styling for light and dark themes
- **Localization (l10n)**: multi-language support ready
- **Shortcodes**: custom components for icons, iframes, and Strava embeds
- **Related posts**: intelligent post recommendations based on tags
- **Tag taxonomy**: organize and filter content by tags
- **SEO optimized**: meta tags, structured metadata, and sitemap support
- **Alpine.js integration**: lightweight interactivity without heavy dependencies
- **Typography plugin**: beautiful prose styling with Tailwind typography

## Quick Start

### Installation

```shell
cd themes
git clone https://github.com/marcelorodrigo/hugo-fortyten.git
```

### Usage

Add to your `hugo.yaml`:

```yaml
theme: "hugo-fortyten"
```

### Development

Start the dev server:

```shell
hugo server
```

Build for production:

```shell
hugo --minify
```

## Requirements

- **Hugo Extended** (v0.161.0+) — required for `css.TailwindCSS` processing
- **Node.js** (v20+) — required for Tailwind CSS and npm dependencies

As of v0.161.0, Hugo no longer supports the Tailwind standalone binary. You must install the Tailwind CSS CLI via npm.

Verify:
```shell
hugo version    # Should show "extended"
node --version  # Should be v20+
```

Install dependencies:
```shell
npm install --save-dev tailwindcss @tailwindcss/cli @tailwindcss/typography
```

## Configuration

The theme is configured via your `hugo.yaml` file. Customize author information, site metadata, menu structure, and search settings through standard Hugo configuration.

## License

Open source and free to use.
