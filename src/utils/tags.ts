import { getCollection } from "astro:content"

// Tags: 'Tech Deep Dives', 'Project Case Studies', 'General', 'Career',
// TODO: clenan up tags and posts
export enum Tag {
    Tech = 'Tech Deep Dives',
    Projects = 'Project Case Studies',
    General = 'General',
    Career = 'Career',
    System = 'System Design',

}

export async function getAllTags(): Promise<Array<{ tag: Tag; count: number }>> {
  const allPosts = await getCollection("blog")
  const publishedPosts = allPosts.filter((post) => !post.data.draft)

  const tagCounts = {} as Record<string, number>
  publishedPosts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  })

  return Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([tag, count]) => ({ tag: tag as Tag, count }))
}

export async function getPostsByTag(tag: Tag) {
  const allPosts = await getCollection("blog")
  return allPosts
    .filter((post) => !post.data.draft && post.data.tags.includes(tag))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
}
