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

- **Hugo Extended** (v0.140.2+)
- **Node.js**
- **Tailwind CSS v4 CLI** - Processed by Hugo via `npx tailwindcss` or locally installed

**About Tailwind CLI:**
The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js.

Verify:
```shell
hugo version              # Should show "extended"
npx tailwindcss --help    # Verify Tailwind CLI is installed
```

**Optional:** Install Tailwind CLI locally for faster builds:
```shell
npm install tailwindcss @tailwindcss/cli @tailwindcss/typography
```

## Configuration

The theme is configured via your `hugo.yaml` file. Customize author information, site metadata, menu structure, and search settings through standard Hugo configuration.

## License

Open source and free to use.
