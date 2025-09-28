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
      // TODO: rewrite
      hero: {
          label: 'software engineering · personal notes',
          title: "Hey, I'm Binliu!",
          description: [
              'Senior Software Engineer at Just Eat Takeaway, where I design event-driven automation so customer issues are resolved without human intervention.',
              'Across 8+ years at Just Eat Takeaway, Grab, Ant Group, and Douban I have scaled backend platforms that support food delivery, mobility, fintech, and consumer communities.',
              'I love end-to-end ownership—pairing resilient architecture with data-informed operations to help cross-functional teams ship measurable impact.',
          ],
          primary: { label: 'View Projects', href: '/projects' },
          secondary: { label: 'Read the Blog', href: '/blog' },
      },
      about: {
          title: 'What I Do',
          paragraphs: [
              'I partner with product, operations, and support teams to turn messy service workflows into reliable automation. Recent work includes the orchestration layer behind JET’s customer help chatbot and the operational tools that keep millions of orders moving.',
              'Before JET I worked at Grab and Ant Group, building geospatial pipelines, experimentation frameworks, and developer tooling that power real-world experiences for riders, drivers, and merchants.',
              'I mentor engineers, document trade-offs, and lean on observability to keep systems stable. Outside of work I volunteer with Women in Tech and recharge by curating playlists or exploring new training plans.',
          ],
          experienceLinkLabel: 'View My Experience',
      },
      projects: {
          title: 'Featured Work',
          description:
              'Selected engagements that show how I approach complex operational platforms, automation, and data pipelines in high-scale environments.',
          items: [
              {
                  title: 'Help Experience Orchestration Layer',
                  description:
                      'Event-driven coordination for Just Eat Takeaway’s customer chatbot. Automated order issue resolution and cut manual interventions by 60% while improving stability for millions of users.',
                  tags: ['Java', 'Spring Boot', 'Kafka', 'AWS SQS', 'Redis'],
                  image: { src: '/placeholder.svg?height=200&width=350', alt: 'Architecture diagram for orchestration layer' },
              },
              {
                  title: 'JETMS Operational Platform',
                  description:
                      'Unified multi-tenant tooling that consolidates 20+ internal services into a single workspace with CQRS-based routing and a shared data model, reducing SLA for issue resolution by a third.',
                  tags: ['Java', 'TypeScript', 'MySQL', 'CQRS'],
                  image: { src: '/placeholder.svg?height=200&width=350', alt: 'Operational platform interface mockup' },
              },
              {
                  title: 'Jarvis Geospatial Crowdsourcing Platform',
                  description:
                      'Crowdsourced task management engine at Grab scaling to 300K tasks and 400K+ geospatial points, boosting the accuracy of maps and on-trip experiences across Southeast Asia.',
                  tags: ['Go', 'PostgreSQL', 'Kafka', 'ElasticSearch'],
                  image: { src: '/placeholder.svg?height=200&width=350', alt: 'Geospatial data workflow visualization' },
              },
          ],
          viewAllLabel: 'View All Projects',
      },
      latestPosts: {
          title: 'Latest Posts',
          description:
              'Notes on scaling distributed systems, capturing operational metrics, and the lessons learned while keeping platforms dependable.',
          viewAllLabel: 'View All Posts',
          emptyLabel: 'No posts published yet',
          totalLabel: (count: number) => `${count} posts in total`,
      },
  },
};

export function getHomeCopy(lang: Language): HomeCopy {
  return homeCopy[lang] ?? homeCopy[defaultLang];
}
