# Giscus 评论系统配置指南

本博客集成了 Giscus 评论系统，基于 GitHub Discussions 提供评论功能。

## 配置步骤

### 1. 启用 GitHub Discussions

1. 进入你的 GitHub 仓库
2. 点击 **Settings** 标签
3. 向下滚动到 **Features** 部分
4. 勾选 **Discussions** 复选框

### 2. 获取 Giscus 配置

1. 访问 [giscus.app](https://giscus.app)
2. 输入你的仓库信息（格式：`username/repository`）
3. 选择页面 ↔️ discussions 映射关系（推荐使用 `pathname`）
4. 选择 Discussion 分类（推荐使用 `General`）
5. 选择功能选项（推荐启用反应）

### 3. 更新配置

在 `src/components/Comments.astro` 文件中，更新 `GISCUS_CONFIG` 对象：

\`\`\`javascript
const GISCUS_CONFIG = {
  repo: 'your-username/your-repo', // 替换为你的仓库
  repoId: 'R_kgDOH...', // 从 giscus.app 复制
  category: 'General', // 讨论分类
  categoryId: 'DIC_kwDOH...', // 从 giscus.app 复制
  mapping: 'pathname',
  strict: '0',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'bottom',
  lang: 'zh-CN',
  loading: 'lazy'
};
\`\`\`

### 4. 部署并测试

1. 提交并推送代码到 GitHub
2. 部署到 Vercel 或其他平台
3. 访问任意文章页面测试评论功能

## 功能特性

- ✅ 自动适配明暗主题
- ✅ 支持 GitHub 登录
- ✅ 支持 Markdown 语法
- ✅ 支持表情反应
- ✅ 响应式设计
- ✅ 懒加载优化

## 注意事项

- 评论数据存储在 GitHub Discussions 中
- 用户需要 GitHub 账号才能评论
- 仓库必须是公开的才能使用 Giscus
- 首次加载可能需要几秒钟时间

## 自定义样式

如需自定义评论区样式，可以修改 `Comments.astro` 中的 CSS 部分。

## 故障排除

如果评论无法加载，请检查：

1. GitHub 仓库是否为公开状态
2. Discussions 功能是否已启用
3. 配置参数是否正确
4. 网络连接是否正常

更多帮助请参考 [Giscus 官方文档](https://github.com/giscus/giscus)。
