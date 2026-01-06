# 部署指南

本指南将帮助你将 Astro 博客部署到各种平台。

## 🚀 Vercel (推荐)

Vercel 是 Astro 的官方推荐部署平台，提供最佳的性能和开发体验。

### 自动部署

1. 将代码推送到 GitHub 仓库
2. 访问 [vercel.com](https://vercel.com)
3. 点击 "New Project"
4. 选择你的 GitHub 仓库
5. Vercel 会自动检测 Astro 项目并配置构建设置
6. 点击 "Deploy" 完成部署

### 手动配置

如需自定义配置，在项目根目录创建 \`vercel.json\`：

\`\`\`json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro"
}
\`\`\`

### 环境变量配置 ⚠️ 重要

**在 Vercel Dashboard 中配置环境变量：**

1. 进入你的项目 → Settings → Environment Variables
2. 添加以下所有环境变量（参考 `.env.example` 文件）：

```bash
# Analytics
PUBLIC_GA_MEASUREMENT_ID=G-K2609HEZYE
PUBLIC_BAIDU_SITE_ID=f42a71719d9466b0a17dc5b8a1650b38

# Comments (Giscus)
PUBLIC_ENABLE_COMMENTS=true
PUBLIC_GISCUS_REPO=cool4zbl/astro-me
PUBLIC_GISCUS_REPO_ID=R_kgDOPzqEJQ
PUBLIC_GISCUS_CATEGORY=General
PUBLIC_GISCUS_CATEGORY_ID=DIC_kwDOPzqEJc4CwZ_v

# Feature Flags
PUBLIC_ENABLE_SEARCH=true
PUBLIC_ENABLE_RSS=true
PUBLIC_ENABLE_SITEMAP=true

# Site Config
PUBLIC_SITE_URL=https://binliuzhang.com
PUBLIC_API_BASE_URL=https://api.binliuzhang.com

# Social
PUBLIC_GITHUB_URL=https://github.com/cool4zbl
PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/binliu-zhang
PUBLIC_EMAIL=binliu.zhang@gmail.com
```

3. 环境选择：选择 **Production, Preview, Development** 全部勾选
4. 保存后重新部署（Deployments → 最新部署 → Redeploy）

**注意：** 所有以 `PUBLIC_` 开头的变量会在客户端可见，不要放敏感信息！

## 🌐 Netlify

### 自动部署

1. 将代码推送到 GitHub 仓库
2. 访问 [netlify.com](https://netlify.com)
3. 点击 "New site from Git"
4. 选择你的 GitHub 仓库
5. 配置构建设置：
   - Build command: \`npm run build\`
   - Publish directory: \`dist\`
6. 点击 "Deploy site"

### 配置文件

在项目根目录创建 \`netlify.toml\`：

\`\`\`toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404
\`\`\`

## 📄 GitHub Pages

### 使用 GitHub Actions

在 \`.github/workflows/deploy.yml\` 创建工作流：

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
\`\`\`

### 配置 Astro

更新 \`astro.config.mjs\`：

\`\`\`javascript
export default defineConfig({
  site: 'https://username.github.io',
  base: '/repository-name', // 如果不是根域名
  // ...
});
\`\`\`

## ☁️ Cloudflare Pages

### 自动部署

1. 将代码推送到 GitHub 仓库
2. 访问 [Cloudflare Pages](https://pages.cloudflare.com)
3. 点击 "Create a project"
4. 连接你的 GitHub 仓库
5. 配置构建设置：
   - Build command: \`npm run build\`
   - Build output directory: \`dist\`
   - Node.js version: \`18\`
6. 点击 "Save and Deploy"

### 配置文件

在项目根目录创建 \`_headers\`：

\`\`\`
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/assets/*
  Cache-Control: public, max-age=31536000, immutable
\`\`\`

## 🐳 Docker 部署

### Dockerfile

\`\`\`dockerfile
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
\`\`\`

### nginx.conf

\`\`\`nginx
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        location / {
            try_files \$uri \$uri/ /404.html;
        }

        location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}
\`\`\`

### 构建和运行

\`\`\`bash
# 构建镜像
docker build -t astro-blog .

# 运行容器
docker run -p 8080:80 astro-blog
\`\`\`

## 🔧 部署优化

### 性能优化

1. **启用压缩**：确保服务器启用 Gzip/Brotli 压缩
2. **CDN 配置**：使用 CDN 加速静态资源
3. **缓存策略**：为静态资源设置长期缓存

### SEO 配置

1. **自定义域名**：使用自己的域名而非平台子域名
2. **HTTPS**：确保启用 HTTPS
3. **站点地图**：提交站点地图到搜索引擎

### 监控和分析

1. **Google Analytics**：添加网站分析
2. **Google Search Console**：监控搜索表现
3. **性能监控**：使用 Lighthouse 等工具监控性能

## 🚨 常见问题

### 构建失败

- 检查 Node.js 版本是否为 18+
- 确保所有依赖都已安装
- 检查构建日志中的错误信息

### 路由问题

- 确保服务器配置了正确的重写规则
- 检查 \`astro.config.mjs\` 中的 \`base\` 配置

### 静态资源 404

- 检查资源路径是否正确
- 确保资源文件已包含在构建输出中

需要帮助？请查看 [Astro 部署文档](https://docs.astro.build/en/guides/deploy/) 或创建 Issue。
