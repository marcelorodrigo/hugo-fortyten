# Hugo FortyTen

A free and open-source Hugo theme. Great for blogs and easy to customize. The theme is based on Tailwind CSS.

It features responsive design and localization l10n support.

## Features

- Responsive Design
- Localization l10n

## Installation

Given you already have git and hugo installed, run in your hugo project

```shell
cd themes
git clone https://github.com/marcelorodrigo/hugo-fortyten.git
```

A folder `hugo-fortyten` should be available inside the `themes` directory .

## Configuration

The basic configuration is done on your `hugo.yaml` file

```yaml
theme: "hugo-fortyten"
```

## Development

### Project Structure

This repository contains both the theme and an example site:

```
hugo-fortyten/
├── layouts/              # Theme templates
├── assets/               # Theme styles and scripts
├── static/fonts/         # Theme fonts
├── tailwind.config.js    # Tailwind CSS configuration
├── theme.yaml            # Theme metadata
├── exampleSite/          # Example site (demo content)
│   ├── content/          # Demo posts and pages
│   ├── static/           # Demo images
│   └── hugo.yaml         # Example site configuration
└── ...
```

### Local Development

To preview the theme during development:

```shell
cd exampleSite
hugo server
```

This starts a development server at `http://localhost:1313` with the example site.

### Building

To build the example site for production:

```shell
hugo --minify --source exampleSite
```

The output will be in the `public/` directory.
