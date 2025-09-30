# Astro Personal Blog Starter

A fully featured Astro blog template that requires no backend services and can be deployed to platforms like Vercel with ease.

## ✨ Features

- 📝 **Content Collections** – Write posts in Markdown/MDX with full type-safety
- 🏷️ **Tag System** – Categorize posts with tag pages and tag cloud support
- 🔍 **Search** – MiniSearch-powered, client-side search with zero backend dependencies
- 💬 **Comments** – Built-in Giscus integration backed by GitHub Discussions
- 📡 **RSS Feed** – Automatic RSS feed generation
- 🗺️ **Sitemap** – Automatic XML sitemap generation
- 🎨 **Dark Mode** – Light/dark theme toggle with preference persistence
- 📱 **Responsive** – Fully responsive layout across devices
- ⚡ **Performance** – Static site generation via Astro for blazing fast load times
- 🔧 **SEO Friendly** – Comprehensive meta tags and structured data

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd astro-blog
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/            # UI components
│   ├── Header.astro       # Header navigation
│   ├── Footer.astro       # Footer
│   ├── ThemeToggle.astro  # Theme switcher
│   ├── Comments.astro     # Giscus comments
│   └── SEO.astro          # SEO helpers
├── content/
│   └── blog/              # Markdown posts
├── layouts/
│   └── BaseLayout.astro   # Base layout
├── pages/
│   ├── index.astro        # Home page
│   ├── blog/              # Blog listing & post pages
│   ├── tags/              # Tag listing & tag cloud
│   ├── search.astro       # Search page
│   └── rss.xml.js         # RSS feed endpoint
├── styles/
│   └── global.css         # Global styles
└── utils/                 # Utility helpers
```

## ⚙️ Configuration

### Site metadata

Update `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://your-domain.com', // Replace with your domain
  // ...
});
```

### Giscus comments

1. Enable Discussions on your GitHub repository.
2. Visit [giscus.app](https://giscus.app) to generate configuration values.
3. Update the settings inside `src/components/Comments.astro`.

See [GISCUS_SETUP.md](./GISCUS_SETUP.md) for a detailed walk-through.

### Styling

- Global styles: `src/styles/global.css`
- Theme configuration: `tailwind.config.mjs`
- Component-level styles: individual component `<style>` blocks

## 📝 Writing Posts

### Create a new post

Create a Markdown file inside `src/content/blog/`:

```markdown
---
title: 'Post title'
description: 'Post description'
pubDate: 2024-01-01
tags: ['tag1', 'tag2']
draft: false
heroImage: '/images/hero.jpg' # Optional
---

# Article content

Write your post here...
```

### Frontmatter fields

- `title`: Post title (required)
- `description`: Post description (required)
- `pubDate`: Publication date (required)
- `updatedDate`: Last updated date (optional)
- `tags`: Array of tags (optional)
- `draft`: Marks the post as draft (optional, defaults to false)
- `heroImage`: Hero image path (optional)

## 🎨 Theme Customization

### Color system

Colors are defined via CSS variables to support light and dark themes:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... */
}
```

### Fonts

Configure fonts inside `src/layouts/BaseLayout.astro`:

```astro
<!-- Add Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

## 🚀 Deployment

### Vercel (recommended)

1. Push your repository to GitHub.
2. Import the project in Vercel.
3. Deploy automatically.

### Netlify

1. Push your repository to GitHub.
2. Connect the repo in Netlify.
3. Build command: `npm run build`
4. Publish directory: `dist`

### Other platforms

Any static hosting provider will work, including GitHub Pages, Cloudflare Pages, etc.

## 🔧 Development

### Available scripts

- `npm run dev` – Start the dev server
- `npm run build` – Build for production
- `npm run preview` – Preview the production build
- `npm run astro` – Run the Astro CLI

### Adding new features

1. Components live in `src/components/`
2. Pages live in `src/pages/`
3. Utility helpers live in `src/utils/`
4. Styles live in `src/styles/`

## 📄 License

MIT License – see [LICENSE](./LICENSE) for details.

## 🤝 Contributing

Issues and pull requests are welcome!

## 📞 Support

If you run into issues:

1. Review the documentation and examples
2. Search existing GitHub issues
3. Open a new issue

---

**Happy blogging!** ✨
