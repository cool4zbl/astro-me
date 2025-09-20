import { getCollection } from "astro:content"

export async function getAllTags() {
  const allPosts = await getCollection("blog")
  const publishedPosts = allPosts.filter((post) => !post.data.draft)

  const tagCounts = {}
  publishedPosts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  })

  return Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([tag, count]) => ({ tag, count }))
}

export async function getPostsByTag(tag: string) {
  const allPosts = await getCollection("blog")
  return allPosts
    .filter((post) => !post.data.draft && post.data.tags.includes(tag))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
}
