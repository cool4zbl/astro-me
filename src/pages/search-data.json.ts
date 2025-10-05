import { getCollection } from "astro:content"

export async function GET() {
  const allPosts = await getCollection("blog")
  const publishedPosts = allPosts.filter((post) => !post.data.draft)

  const searchData = await Promise.all(
    publishedPosts.map(async (post) => {
      const { Content } = await post.render()

      // 简单提取文本内容（移除 HTML 标签）
      const content = post.body
        .replace(/---[\s\S]*?---/, "") // 移除 frontmatter
        .replace(/```[\s\S]*?```/g, "") // 移除代码块
        .replace(/`[^`]*`/g, "") // 移除行内代码
        .replace(/[#*_~[\]()]/g, "") // 移除 markdown 标记
        .replace(/\n+/g, " ") // 替换换行为空格
        .trim()
        .substring(0, 500) // 限制内容长度

      return {
        id: post.slug,
        title: post.data.title,
        description: post.data.description,
        content,
        slug: post.slug,
        publishedAt: post.data.publishedAt.toISOString(),
        tags: post.data.tags,
      }
    }),
  )

  return new Response(JSON.stringify(searchData), {
    headers: {
      "Content-Type": "application/json",
    },
  })
}
