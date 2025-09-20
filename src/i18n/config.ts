export const languages = {
  zh: "中文",
  en: "English",
} as const

export const defaultLang = "en" as const

export type Language = keyof typeof languages

export const ui = {
  zh: {
    "nav.home": "首页",
    "nav.blog": "博客",
    "nav.tags": "标签",
    "nav.search": "搜索",
    "nav.about": "关于",
    "blog.readMore": "阅读更多",
    "blog.publishedOn": "发布于",
    "blog.tags": "标签",
    "blog.backToBlog": "返回博客",
    "search.title": "搜索文章",
    "search.placeholder": "输入关键词搜索...",
    "search.noResults": "没有找到相关文章",
    "search.results": "搜索结果",
    "tags.title": "所有标签",
    "tags.postsWithTag": "标签下的文章",
    "footer.poweredBy": "由 Astro 强力驱动",
    "theme.toggle": "切换主题",
    "theme.light": "浅色模式",
    "theme.dark": "深色模式",
  },
  en: {
    "nav.home": "Home",
    "nav.blog": "Blog",
    "nav.tags": "Tags",
    "nav.search": "Search",
    "nav.about": "About",
    "blog.readMore": "Read more",
    "blog.publishedOn": "Published on",
    "blog.tags": "Tags",
    "blog.backToBlog": "Back to blog",
    "search.title": "Search Articles",
    "search.placeholder": "Enter keywords to search...",
    "search.noResults": "No articles found",
    "search.results": "Search Results",
    "tags.title": "All Tags",
    "tags.postsWithTag": "Posts with tag",
    "footer.poweredBy": "Powered by Astro",
    "theme.toggle": "Toggle theme",
    "theme.light": "Light mode",
    "theme.dark": "Dark mode",
  },
} as const

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/")
  if (lang in languages) return lang as Language
  return defaultLang
}

export function getTranslations(lang: Language) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}

export function getLocalizedPath(path: string, lang: Language) {
  if (lang === defaultLang) return path
  return `/${lang}${path}`
}
