import { defaultLang, type Language } from '../config';

type CTA = {
  label: string;
  href: string;
};

type HomeCopy = {
  hero: {
    label: string;
    title: string;
    subtitle?: string;
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
      impact?: string;
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
      label: "SOFTWARE ENGINEERING · PERSONAL NOTES",
      title: "I turn caffeine into code that scales",
      subtitle:
        "Builder. Solver. Collaborator.",
      description: [
        "I’m a Senior Software Engineer with 9+ years across Just Eat Takeaway, Grab, Ant Group, and Douban. I obsess over end-to-end ownership: from architecture and data models to on-call runbooks and post-incident learning. When I’m not reducing MTTR, I’m over-optimizing pour-over coffee and taking long walks with questionable ideas.",
        // "Senior Software Engineer at Just Eat Takeaway, where I design event-driven automation so customer issues are resolved without human intervention.",
        // "Across 9+ years at Just Eat Takeaway, Grab, Ant Group, and Douban I have scaled platforms that support food delivery, mobility, fintech, and consumer communities.",
        // "I love end-to-end ownership—pairing resilient architecture with data-informed operations to help cross-functional teams ship measurable impact.",
      ],
      primary: { label: "View Projects", href: "/projects" },
      secondary: { label: "Read the Blog", href: "/blog" },
    },
    about: {
      title: "What I Do",
      paragraphs: [
        "I partner with product, operations, and support teams to turn messy service workflows into reliable automation. Recent work includes the orchestration layer behind JET’s customer help chatbot and the operational tools that keep millions of orders moving.",
        "Before JET I worked at Grab and Ant Group, building geospatial pipelines, experimentation frameworks, and developer tooling that power real-world experiences for riders, drivers, and merchants.",
        "I mentor engineers, document trade-offs, and lean on observability to keep systems stable. Outside of work I volunteer with Women in Tech and recharge by curating playlists or exploring new training plans.",
      ],
      experienceLinkLabel: "View My Experience",
    },
    projects: {
      title: "Featured Work",
      description:
        "Selected engagements that show how I approach complex operational platforms, automation, and data pipelines in high-scale environments.",
      items: [
        {
          title: "Help Experience Orchestration Layer",
          description:
            "Automated issue triage for the customer chatbot using event-driven coordination. ",
          tags: ["Java", "Spring Boot", "Kafka", "AWS SQS", "Redis"],
          impact: "Impact: 60% fewer manual interventions, faster resolutions for millions of users. ",
          image: {
            src: "/help-orchestration.png?height=200&width=350",
            alt: "Architecture diagram for orchestration layer",
          },
        },
        {
          title: "JETMS Operational Platform",
          description:
            "Unified 20+ internal tools behind one workspace with CORS-aware routing and a shared data model",
          impact: "Reduced SLA for issue resolution by ~33%, consolidated ops workflows.",
          tags: ["TypeScript", "Java", "MySQL", "CQRS"],
          image: {
            src: "/jetms-feature.png?height=650&width=650",
            alt: "Operational platform interface mockup",
          },
        },
        {
          title: "MapYourCity Crowdsourcing Platform",
          description:
          "Task engine handling 300K+ jobs and 400K+ geo points to improve on-trip map accuracy.",
          impact: "Higher map precision across SEA markets; better rider & driver outcomes.",
          tags: ["Go", "PostgreSQL", "Kafka", "ElasticSearch"],
          image: {
            src: "/jarvis-feature-1.png?height=200&width=350",
            alt: "Geospatial data workflow visualization",
          },
        },
      ],
      viewAllLabel: "View All Projects",
    },
    latestPosts: {
      title: "Latest Notes from the Debugging Zone",
      description:
        "Short write-ups on scaling, incident deep-dives, and the human side of reliability.",
      viewAllLabel: "View All Posts",
      emptyLabel: "No posts published yet",
      totalLabel: (count: number) => `${count} posts in total`,
    },
  },
};

export function getHomeCopy(lang: Language): HomeCopy {
  return homeCopy[lang] ?? homeCopy[defaultLang];
}
