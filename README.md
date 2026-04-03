# AI Shop Blueprint

A blog about using AI tools (ChatGPT, Claude, Midjourney) to grow Etsy and Print-on-Demand businesses. Built with Astro 6, styled with Tailwind CSS v4, deployed to Cloudflare Pages.

**Live site:** https://cloud-blog-2jk.pages.dev

## Tech Stack

- **Framework:** Astro 6 (static output)
- **Styling:** Tailwind CSS v4 with custom theme
- **Fonts:** DM Sans (body) + Instrument Serif (headlines) via Google Fonts
- **Deployment:** Cloudflare Pages
- **Content:** Markdown files via Astro Content Collections

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server at localhost:4321
npm run dev

# Build for production
npm run build

# Build + deploy to Cloudflare Pages
npm run deploy
```

## Project Structure

```
src/
├── components/
│   ├── layout/          # Navigation, Footer
│   ├── seo/             # Head meta tags, JSON-LD
│   └── ui/              # DarkModeToggle
├── content/
│   └── blog/            # Blog posts (Markdown files)
├── data/                # Schema.org generators
├── layouts/             # BaseLayout
├── pages/
│   ├── blog/
│   │   ├── index.astro  # Blog listing
│   │   ├── [slug].astro # Individual post
│   │   └── tags/        # Tag filtered pages
│   ├── demo/            # 5 design variation demos
│   ├── index.astro      # Homepage
│   └── rss.xml.ts       # RSS feed
└── styles/
    └── global.css       # Tailwind theme + custom styles
```

## Adding a Blog Post

1. Create a new `.md` file in `src/content/blog/`:

```bash
touch src/content/blog/my-new-post.md
```

2. Add the required frontmatter at the top of the file:

```yaml
---
title: 'Your Post Title Here'
publishedAt: 2026-04-15
description: 'A compelling description under 160 characters for SEO.'
tags: ['etsy', 'ai-tools']
---
```

3. Write your post content in Markdown below the frontmatter.

4. The post will appear after the next build/deploy.

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Post title |
| `publishedAt` | Yes | Date in `YYYY-MM-DD` format |
| `description` | Yes | Short description for SEO (under 160 chars) |
| `tags` | Yes | Array of tags for categorization |
| `author` | No | Author name (defaults to "AI Shop Blueprint") |
| `image` | No | URL or path to a hero image |

### YAML Tip

If your title or description contains an apostrophe, use double quotes:

```yaml
# This will break:
description: 'Tips that aren't obvious'

# This works:
description: "Tips that aren't obvious"
```

### File Naming

Use lowercase, hyphenated slugs. The filename becomes the URL:

- `my-great-post.md` → `/blog/my-great-post/`

### Existing Tags

`etsy`, `ai-copywriting`, `listings`, `print-on-demand`, `ai-design`, `midjourney`, `etsy-seo`, `keyword-research`, `ai-tools`, `automation`, `productivity`, `legal`, `etsy-policy`, `ai-ethics`, `product-photography`, `branding`, `customer-service`, `niche-research`

## Scheduling Future Posts

Set `publishedAt` to a future date. The post will be committed to the repo but hidden from the blog listing, individual routes, and RSS feed until that date passes.

```yaml
publishedAt: 2026-06-01  # Won't appear until June 1st
```

**Important:** Since this is a static site, a rebuild must happen after the publish date for the post to go live. Either:
- Run `npm run deploy` manually
- Set up a daily scheduled rebuild (e.g. Cloudflare Pages deploy hook on a cron)

## Deployment

### Environment Variables

Set these in `~/.zshenv` (or your shell config):

```bash
export CLOUDFLARE_API_TOKEN="your-api-token"
export CLOUDFLARE_ACCOUNT_ID="your-account-id"
```

### Deploy

```bash
# Build + deploy (recommended)
npm run deploy

# Or deploy an existing build
npx wrangler pages deploy dist --project-name=cloud-blog
```

## Dark Mode

Toggled via a `.dark` class on `<html>`. Respects `prefers-color-scheme` as the default, with manual override persisted to `localStorage`.

## Design Demos

Five alternative frontend designs are available at `/demo/`:

| Route | Style |
|-------|-------|
| `/demo/v1/` | Brutalist — monospace, black & white, hard grid |
| `/demo/v2/` | Organic — warm serif, cream tones, botanical feel |
| `/demo/v3/` | Magazine — editorial layout, asymmetric grids |
| `/demo/v4/` | Retro Terminal — amber CRT, scanlines, ASCII art |
| `/demo/v5/` | Glassmorphic — aurora blobs, frosted glass, gradients |
