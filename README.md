# Astro Personal Blog Starter

A fully featured Astro starter kit for personal blogs. It has no backend dependencies and can be deployed to Vercel, Netlify, Cloudflare Pages, and any other static hosting provider.

## ✨ Features

- 📝 **Content Collections** – Write posts in Markdown or MDX with full type-safety.
- 🏷️ **Tag System** – Categorise articles with tags, including tag listing and tag cloud pages.
- 🔍 **On-site Search** – MiniSearch powered, client-only search with no server required.
- 💬 **Comments** – Built-in [Giscus](https://giscus.app/) integration based on GitHub Discussions.
- 📡 **RSS Feed** – Automatic RSS feed generation for your readers.
- 🗺️ **Sitemap** – Automatic XML sitemap generation.
- 🎨 **Dark Mode** – Light and dark themes with persisted user preference.
- 📱 **Responsive Layout** – Optimised for every device size.
- ⚡ **Performance Optimised** – Astro-powered static generation for super-fast loading.
- 🔧 **SEO Ready** – Complete meta tags and structured data helpers.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd astro-blog
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

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
├── components/           # Reusable UI components
│   ├── Header.astro      # Site header and navigation
│   ├── Footer.astro      # Footer
│   ├── ThemeToggle.astro # Theme switcher
│   ├── Comments.astro    # Giscus comments wrapper
│   └── SEO.astro         # SEO helpers
├── content/
│   └── blog/             # Blog posts written in Markdown / MDX
├── layouts/
│   └── BaseLayout.astro  # Base page layout
├── pages/
│   ├── index.astro       # Home page
│   ├── blog/             # Blog index & detail pages
│   ├── tags/             # Tag list and tag cloud
│   ├── search.astro      # Search page
│   └── rss.xml.js        # RSS feed endpoint
├── styles/
│   └── global.css        # Global styles
└── utils/                # Utility helpers
```

## ⚙️ Configuration

### Site metadata

Update `astro.config.mjs` with your site information:

```javascript
export default defineConfig({
  site: 'https://your-domain.com',
  // ...
});
```

### Giscus comments

1. Enable Discussions in your GitHub repository.
2. Generate configuration values at [giscus.app](https://giscus.app).
3. Update `src/components/Comments.astro` with the generated settings.

Detailed setup instructions can be found in [GISCUS_SETUP.md](./GISCUS_SETUP.md).

### Custom styles

- Global styles: `src/styles/global.css`
- Theme configuration: `tailwind.config.mjs`
- Component styles: `<style>` blocks in each component

## 📝 Writing Posts

Create a new Markdown file under `src/content/blog/`:

```markdown
---
title: 'Post title'
description: 'Post description'
pubDate: 2024-01-01
tags: ['tag-1', 'tag-2']
draft: false
heroImage: '/images/hero.jpg' # optional
---

# Article body

Write your content here...
```

### Frontmatter fields

- `title`: Post title (required)
- `description`: Post description (required)
- `pubDate`: Publication date (required)
- `updatedDate`: Last updated date (optional)
- `tags`: Array of tags (optional)
- `draft`: Draft status (optional, defaults to `false`)
- `heroImage`: Header image path (optional)

## 🎨 Theming

### Colour system

The project uses CSS variables to define colour palettes for both light and dark themes:

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

Configure custom fonts in `src/layouts/BaseLayout.astro`:

```astro
<!-- Add Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

## 🚢 Deployment

### Vercel (recommended)

1. Push the code to GitHub.
2. Import the repository in Vercel.
3. Trigger the automatic deployment.

### Netlify

1. Push the code to GitHub.
2. Connect the repository in Netlify.
3. Build command: `npm run build`
4. Publish directory: `dist`

### Other platforms

Any static hosting provider works, including GitHub Pages and Cloudflare Pages.

## 🔧 Development scripts

- `npm run dev` – Start the development server
- `npm run build` – Build the production bundle
- `npm run preview` – Preview the production build locally
- `npm run astro` – Run the Astro CLI

## 📄 License

Released under the MIT License. See [LICENSE](./LICENSE) for details.

## 🤝 Contributing

Issues and pull requests are welcome!

## 📞 Support

1. Review the project documentation and examples.
2. Search existing issues.
3. Open a new issue if you cannot find an answer.

---

**Happy writing!** ✨
