# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## v2.0.0 - 2026-02-06

### What's Changed

* feat: Changelog added by @marcelorodrigo in https://github.com/marcelorodrigo/hugo-fortyten/pull/17
* feat!: switch to Hugo-native Tailwind v4 processing by @marcelorodrigo in https://github.com/marcelorodrigo/hugo-fortyten/pull/16

**Full Changelog**: https://github.com/marcelorodrigo/hugo-fortyten/compare/v1.0.0...v2.0.0

## [1.0.0] - 2026-01-01

### Added

- **Dark mode**: Automatic or manual theme switching with persistent user preference
- **Full-text search**: Client-side fuzzy search with keyboard navigation
- **Responsive design**: Mobile-first approach that works on all devices
- **Localization (l10n)**: Multi-language support ready
- **Shortcodes**: Custom components for icons, iframes, and Strava embeds
- **Related posts**: Intelligent post recommendations based on tags
- **Tag taxonomy**: Organize and filter content by tags
- **SEO optimized**: Meta tags, structured metadata, and sitemap support
- **Alpine.js integration**: Lightweight interactivity without heavy dependencies
- **Typography plugin**: Beautiful prose styling with Tailwind typography
- **GitHub Gist embedding**: Custom Gist shortcode for code snippets
- **Author configuration**: Enhanced author support with bio and social links
- **Example site**: Complete demo content with setup and configuration guides
- **CI/CD workflows**: GitHub Actions for compilation and deployment
- **GitHub Actions for releases**: Automatic CHANGELOG updates on release

### Changed

- **Tailwind CSS v4**: Migrated to Hugo-native Tailwind CSS v4 processing
- **Build pipeline**: Simplified asset compilation with Hugo's built-in CSS processing
- **hugo_stats.json**: Automatic class detection via Hugo build stats
- **Documentation**: Comprehensive setup, configuration, and development guides

### Fixed

- **FOUC prevention**: Inline theme detection script to prevent flash of unstyled content
- **Mobile menu**: Alpine.js-powered responsive navigation
- **Image optimization**: Dark mode aware image styling

### Technical

- Requires Hugo Extended v0.140.2+
- Requires Node.js with Tailwind CSS CLI (v4.x) for builds
- Uses `hugo_stats.json` for Tailwind class detection
- Git submodule support for theme installation
