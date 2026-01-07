+++
title = "Managing Fonts and Assets"
date = 2023-05-01T10:00:00-07:00
draft = false
tags = ["fonts", "assets"]
summary = "How and why Hugo FortyTen manages assets like self-hosted fonts and images."
+++

Hugo FortyTen ships with local, optimized Open Sans font files. Why?
- Faster loading (no Google CDN delays!)
- Privacy-friendly (no external calls)
- Easy updates (swap for your favorite font any time)

To add your assets:
- Store fonts and images in `/static/`
- Reference assets in content with relative paths
- Update CSS and config—see this demo for how!
