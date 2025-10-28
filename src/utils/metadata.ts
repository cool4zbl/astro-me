const SITE_OWNER = 'Binliu';

export interface PageMetadata {
  title: string;
  description: string;
}

const formatTitle = (pageName: string) => `${pageName} - ${SITE_OWNER}`;

export const pageMetadata = {
  home: {
    title: formatTitle('Home'),
    description:
      "Explore Binliu's latest projects, writing, and engineering experience across large-scale platforms and tools."
  },
  about: {
    title: formatTitle('About'),
    description:
      "Get to know Binliu's journey, principles, and interests beyond code while building resilient software systems."
  },
  experience: {
    title: formatTitle('Experience'),
    description:
      'Review multiple years of product engineering, distributed systems design, and platform leadership across global teams.'
  },
  projects: {
    title: formatTitle('Projects'),
    description:
      'Dive into platform, data, and developer tooling projects that blend backend engineering with thoughtful product craft.'
  },
  interests: {
    title: formatTitle('Interests'),
    description:
      'Books, playlists, fitness, and creative hobbies that recharge and inspire Binliu outside of engineering work.'
  },
  blog: {
    title: formatTitle('Blog'),
    description:
      "Browse essays and notes on software engineering, experimentation, and personal growth from Binliu."
  },
  search: {
    title: formatTitle('Search'),
    description: 'Search Binliu\'s writing and projects to quickly surface topics you care about.'
  },
  tags: {
    title: formatTitle('Tags'),
    description: 'Find related writing by browsing all topics covered on Binliu\'s site.'
  }
} as const satisfies Record<string, PageMetadata>;

export type PageKey = keyof typeof pageMetadata;

export const getPageMetadata = (key: PageKey): PageMetadata => pageMetadata[key];

export const buildPageTitle = (pageName: string) => formatTitle(pageName);

export const getTagPageMetadata = (tag: string): PageMetadata => ({
  title: formatTitle(`Tag: ${tag}`),
  description: `Articles, case studies, and notes from Binliu Zhang related to ${tag}.`
});
