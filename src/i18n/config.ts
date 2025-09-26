export const languages = {
    zh: "中文",
    en: "English",
} as const

export const defaultLang = "en" as const

export type Language = keyof typeof languages

// TODO: merge with home.ts
export const ui = {
    zh: {
        "nav.home": "首页",
        "nav.blog": "博客",
        "nav.projects": "项目",
        "nav.experience": "经历",
        "nav.interests": "兴趣",
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
        "footer.myBlog": "我的博客",
        "footer.builtWithAstro": "使用 Astro 构建。",
        "footer.theme": "主题色",
        "footer.responsiveDesign": "响应式设计",
        "footer.copyright": "Binliu Zhang",
        "footer.myWebsite": "我的网站",
        "footer.poweredByAstro": "由 Astro 驱动 · 随笔与代码同行",
        "footer.description": "分享技术见解、开发经验和个人思考的地方。专注于全栈开发、后端架构和现代 Web 技术。",
        "footer.navigation": "导航",
        "footer.resources": "资源",
        "footer.inspiringMotto": "今日灵感",
        "home.hero.tagline": "冷静工程 · 个人笔记",
        "home.hero.title": "构建可靠的后端系统，记录背后的故事。",
        "home.hero.description": "我设计以Java为核心的服务，完善细微的用户体验细节，并记录经验教训，让未来的我——也许还有你——能够以更轻松的心态更快地前进。",
        "home.hero.viewProjects": "查看项目",
        "home.hero.downloadCV": "下载简历",
        "home.hero.readBlog": "阅读博客",
        "home.about.title": "关于我",
        "home.about.paragraph1": "我在全栈开发中工作，对干净的后端架构情有独钟。大多数时候，你会发现我在微调Spring服务、设计API，并调整前端细节，直到它们感觉直观为止。",
        "home.about.paragraph2": "团队依靠我进行冷静执行：我记录决策，自动化检查，并关注可维护性，这样我们就能快速行动而不会留下技术债务。",
        "home.about.paragraph3": "远离键盘时，我通常在给书做注释、策划播放列表，或者尝试新的锻炼计划——这些习惯让我的好奇心保持活跃。",
        "home.about.viewExperience": "查看我的经历",
        "home.projects.title": "精选项目",
        "home.projects.description": "来自最近客户工作和个人实验的亮点——精简的服务、务实的集成和舒适的界面。",
        "home.projects.viewAll": "查看所有项目",
        "home.projects.ecommerce.title": "电商平台",
        "home.projects.ecommerce.description": "使用Spring Boot、React和PostgreSQL构建的全栈电商解决方案。功能包括用户认证、支付处理和管理仪表板。",
        "home.projects.microservices.title": "微服务API",
        "home.projects.microservices.description": "使用Spring Cloud、Docker和Kubernetes的可扩展微服务架构。实现服务发现、负载均衡和分布式追踪。",
        "home.projects.analytics.title": "分析仪表板",
        "home.projects.analytics.description": "使用Spring WebFlux、Redis和Chart.js构建的实时分析平台，具有数据可视化功能，用于交互式报告。",
        "home.posts.title": "最新文章",
        "home.posts.description": "关于学习、架构决策和实际投入生产的实验的笔记。",
        "home.posts.viewAll": "查看所有文章",
    },
    en: {
        "site.title": "Binliu Zhang",
        "nav.home": "Home",
        "nav.blog": "Blog",
        "nav.projects": "Projects",
        "nav.experience": "Experience",
        "nav.interests": "Interests",
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
        "footer.myBlog": "Binliu Zhang",
        "footer.myWebsite": "Binliu Zhang",
        "footer.builtWithAstro": "Built with Astro.",
        "footer.theme": "Theme",
        "footer.responsiveDesign": "Responsive Design",
        "footer.copyright": "Binliu Zhang",
        "footer.poweredByAstro": "Built with Astro · Notes & code in balance",
        "footer.description": "A place to share technical insights, development experiences, and personal thoughts. Focused on full-stack development, backend architecture, and modern web technologies.",
        "footer.navigation": "Navigation",
        "footer.resources": "Resources",
        "footer.inspiringMotto": "inspiring motto",
        "home.hero.tagline": "calm engineering · personal notes",
        "home.hero.title": "Building dependable backend systems and telling the stories behind them.",
        "home.hero.description": "I design Java-centric services, polish the tiny UX details, and document lessons so future-me—and maybe you—can move faster with a lighter mind.",
        "home.hero.viewProjects": "View Projects",
        "home.hero.downloadCV": "Download CV",
        "home.hero.readBlog": "Read the Blog",
        "home.about.title": "About Me",
        "home.about.paragraph1": "I work across the stack with a soft spot for clean backend architecture. Most days you will find me fine-tuning Spring services, designing APIs, and adjusting the front-end details until they feel intuitive.",
        "home.about.paragraph2": "Teams lean on me for calm execution: I document decisions, automate checks, and keep an eye on maintainability so we can move quickly without the hangover.",
        "home.about.paragraph3": "Away from the keyboard, I am usually annotating a book, curating a playlist, or experimenting with a new workout plan—all habits that keep my curiosity running.",
        "home.about.viewExperience": "View My Experience",
        "home.projects.title": "Featured Projects",
        "home.projects.description": "Highlights from recent client work and personal experiments—lean services, pragmatic integrations, and interfaces that feel comfortable.",
        "home.projects.viewAll": "View All Projects",
        "home.projects.ecommerce.title": "E-commerce Platform",
        "home.projects.ecommerce.description": "Full-stack e-commerce solution built with Spring Boot, React, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
        "home.projects.microservices.title": "Microservices API",
        "home.projects.microservices.description": "Scalable microservices architecture with Spring Cloud, Docker, and Kubernetes. Implements service discovery, load balancing, and distributed tracing.",
        "home.projects.analytics.title": "Analytics Dashboard",
        "home.projects.analytics.description": "Real-time analytics platform with data visualization, built using Spring WebFlux, Redis, and Chart.js for interactive reporting.",
        "home.posts.title": "Latest Posts",
        "home.posts.description": "Notes on learning, architecture decisions, and experiments that actually made it to production.",
        "home.posts.viewAll": "View All Posts",
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
