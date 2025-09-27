import { defaultLang, type Language } from '../config';

type CTA = {
  label: string;
  href: string;
};

type HomeCopy = {
  hero: {
    label: string;
    title: string;
    description: string[];
    primary: CTA;
    secondary: CTA;
  };
  about: {
    title: string;
    paragraphs: string[];
    experienceLinkLabel: string;
  };
  projects: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
      tags: string[];
      image: { src: string; alt: string };
    }[];
    viewAllLabel: string;
  };
  latestPosts: {
    title: string;
    description: string;
    viewAllLabel: string;
    emptyLabel: string;
    totalLabel: (count: number) => string;
  };
};

const homeCopy: Record<Language, HomeCopy> = {
  en: {
      hero: {
          label: 'marketplaces · large-scale platforms',
          title: "Hi, I'm Binliu—Senior backend engineer building resilient marketplaces.",
          description: [
              'Senior Software Engineer with 8+ years shipping event-driven, data-heavy systems across food delivery, mobility, and fintech.',
              'Based in the Netherlands, I lead Java and Go services at Just Eat Takeaway to automate customer support workflows and improve operational efficiency.',
              'I partner with product, ops, and data teams to make platforms observable, dependable, and easier for humans to operate.',
          ],
          primary: { label: 'View Projects', href: '/projects' },
          secondary: { label: 'Read the Blog', href: '/blog' },
      },
      about: {
          title: 'What I Do',
          paragraphs: [
              'I architect and scale backend platforms that blend clean design with pragmatic operations. My toolkit centers on Java, Go, Kafka, and distributed data stores.',
              'From chatbot orchestration to crowdsourced mapping and experimentation platforms, I thrive on aligning cross-functional teams and delivering systems people trust.',
              'Outside work you can find me mentoring engineers, annotating books, or logging miles on a running trail to keep curiosity and focus sharp.',
          ],
          experienceLinkLabel: 'View My Experience',
      },
      projects: {
          title: 'Featured Work',
          description:
              'Select platform builds and system rewrites that shaped how millions of users order food, book rides, and interact with financial products.',
          items: [
              {
                  title: 'JETMS Operational Platform',
                  description:
                      'Unified 20+ Just Eat Takeaway tools behind a multi-tenant Java/Spring Boot platform with CQRS routing, cutting operational complexity and incident resolution time by ~33%.',
                  tags: ['Java', 'Spring Boot', 'CQRS', 'MySQL', 'TypeScript'],
                  image: { src: '/placeholder.svg?height=200&width=350', alt: 'JETMS operational interface mockup' },
              },
              {
                  title: 'Jarvis Map Collection System',
                  description:
                      'Designed a Go and PostgreSQL-based crowdsourcing engine processing 300k+ mapping tasks and 400k geospatial assets to fuel Grab’s mobility and delivery accuracy.',
                  tags: ['Go', 'PostgreSQL', 'Kafka', 'ElasticSearch'],
                  image: { src: '/placeholder.svg?height=200&width=350', alt: 'Jarvis task management interface mockup' },
              },
              {
                  title: 'Darwin Experimentation Platform',
                  description:
                      'Re-architected Ant Group’s experimentation SDKs and Java APIs to support 15M+ DAUs and 1,000+ annual experiments, delivering a 2% conversion lift and $10M+ savings.',
                  tags: ['Java', 'SDKs', 'Experimentation', 'Traffic Splitting'],
                  image: { src: '/placeholder.svg?height=200&width=350', alt: 'Experimentation analytics mockup' },
              },
          ],
          viewAllLabel: 'View All Projects',
      },
      latestPosts: {
          title: 'Latest Posts',
          description:
              'Recent notes on platform architecture, scaling lessons, and the little process tweaks that keep teams calm in production.',
          viewAllLabel: 'View All Posts',
          emptyLabel: 'No posts published yet',
          totalLabel: (count: number) => `${count} posts in total`,
      },
  },
};

export function getHomeCopy(lang: Language): HomeCopy {
  return homeCopy[lang] ?? homeCopy[defaultLang];
}
