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

This repository contains the theme and demo content:

```
hugo-fortyten/
├── layouts/              # Theme templates
├── assets/               # Theme styles and scripts
├── static/               # Theme fonts and demo images
├── content/              # Demo posts and pages
├── tailwind.config.js    # Tailwind CSS configuration
├── theme.yaml            # Theme metadata
├── hugo.yaml             # Site configuration
└── ...
```

### Local Development

To preview the theme during development:

```shell
hugo server
```

This starts a development server at `http://localhost:1313`.

### Building

To build the site for production:

```shell
hugo --minify
```

The output will be in the `public/` directory.
