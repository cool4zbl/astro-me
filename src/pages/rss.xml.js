import rss from "@astrojs/rss"
import { getCollection } from "astro:content"

export async function GET(context) {
  const posts = await getCollection("blog")
  const publishedPosts = posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())

  return rss({
    title: "My Blog",
    description: "A personal blog sharing frontend technologies, programming experiences, and life insights",
    site: context.site,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      content: post.body,
      categories: post.data.tags,
    })),
    customData: `<language>en-US</language>`,
  })
}
