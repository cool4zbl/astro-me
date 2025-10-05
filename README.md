# Astro 个人博客起步包

一套功能完整的 Astro 个人博客模板，零后端依赖，可直接部署到 Vercel 等平台。

## ✨ 功能特色

- 📝 **内容集合** - 使用 Markdown/MDX 编写文章，支持类型安全
- 🏷️ **标签系统** - 文章标签分类，支持标签页和标签云
- 🔍 **站内搜索** - 基于 MiniSearch 的纯前端搜索，无需后端
- 💬 **评论系统** - 集成 Giscus，基于 GitHub Discussions
- 📡 **RSS 订阅** - 自动生成 RSS feed
- 🗺️ **站点地图** - 自动生成 XML sitemap
- 🎨 **暗黑模式** - 支持明暗主题切换，记住用户偏好
- 📱 **响应式设计** - 适配各种设备屏幕
- ⚡ **性能优化** - 基于 Astro 的静态生成，加载速度极快
- 🔧 **SEO 友好** - 完整的 meta 标签和结构化数据

## 🚀 快速开始

### 1. 克隆项目

\`\`\`bash
git clone <your-repo-url>
cd astro-blog
\`\`\`

### 2. 安装依赖

\`\`\`bash
npm install
\`\`\`

### 3. 开发模式

\`\`\`bash
npm run dev
\`\`\`

### 4. 构建部署

\`\`\`bash
npm run build
\`\`\`

## 📁 项目结构

\`\`\`
src/
├── components/          # 组件
│   ├── Header.astro    # 头部导航
│   ├── Footer.astro    # 页脚
│   ├── ThemeToggle.astro # 主题切换
│   ├── Comments.astro  # 评论组件
│   └── SEO.astro       # SEO 组件
├── content/
│   └── blog/           # 博客文章 (Markdown)
├── layouts/
│   └── BaseLayout.astro # 基础布局
├── pages/
│   ├── index.astro     # 首页
│   ├── blog/           # 博客页面
│   ├── tags/           # 标签页面
│   ├── search.astro    # 搜索页面
│   └── rss.xml.js      # RSS feed
├── styles/
│   └── global.css      # 全局样式
└── utils/              # 工具函数
\`\`\`

## ⚙️ 配置

### 站点信息

编辑 \`astro.config.mjs\`：

\`\`\`javascript
export default defineConfig({
  site: 'https://your-domain.com', // 替换为你的域名
  // ...
});
\`\`\`

### Giscus 评论

1. 在 GitHub 仓库中启用 Discussions
2. 访问 [giscus.app](https://giscus.app) 获取配置
3. 更新 \`src/components/Comments.astro\` 中的配置

详细步骤请参考 [GISCUS_SETUP.md](./GISCUS_SETUP.md)

### 自定义样式

- 全局样式：\`src/styles/global.css\`
- 主题配置：\`tailwind.config.mjs\`
- 组件样式：各组件文件中的 \`<style>\` 标签

## 📝 写作指南

### 创建新文章

在 \`src/content/blog/\` 目录下创建新的 Markdown 文件：

\`\`\`markdown
---
title: '文章标题'
description: '文章描述'
publishedAt: 2024-01-01
tags: ['标签1', '标签2']
draft: false
heroImage: '/images/hero.jpg' # 可选
---

# 文章内容

这里是文章正文...
\`\`\`

### 支持的字段

- \`title\`: 文章标题 (必需)
- \`description\`: 文章描述 (必需)
- \`publishedAt\`: 发布日期 (必需)
- \`updatedAt\`: 更新日期 (可选)
- \`tags\`: 标签数组 (可选)
- \`draft\`: 是否为草稿 (可选，默认 false)
- \`heroImage\`: 头图 (可选)

## 🎨 主题定制

### 颜色系统

项目使用 CSS 变量定义颜色，支持明暗主题：

\`\`\`css
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
\`\`\`

### 字体配置

在 \`src/layouts/BaseLayout.astro\` 中配置字体：

\`\`\`astro
<!-- 添加 Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
\`\`\`

## 🚀 部署

### Vercel (推荐)

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成

### Netlify

1. 将代码推送到 GitHub
2. 在 Netlify 中连接仓库
3. 构建命令：\`npm run build\`
4. 发布目录：\`dist\`

### 其他平台

支持任何静态站点托管平台，如 GitHub Pages、Cloudflare Pages 等。

## 🔧 开发

### 可用命令

- \`npm run dev\` - 启动开发服务器
- \`npm run build\` - 构建生产版本
- \`npm run preview\` - 预览构建结果
- \`npm run astro\` - 运行 Astro CLI

### 添加新功能

1. 组件放在 \`src/components/\`
2. 页面放在 \`src/pages/\`
3. 工具函数放在 \`src/utils/\`
4. 样式放在 \`src/styles/\`

## 📄 许可证

MIT License - 详见 [LICENSE](./LICENSE) 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 支持

如有问题，请：

1. 查看文档和示例
2. 搜索已有 Issues
3. 创建新 Issue

---

**享受写作的乐趣！** ✨
\`\`\`
