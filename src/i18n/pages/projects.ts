import { defaultLang, type Language } from '../config';

type ProjectSection = {
  title: string;
  items: string[];
};

type ProjectAction = {
  label: string;
  variant: 'primary' | 'outline';
  href?: string;
};

type ProjectCardImage = {
  src: string;
  alt: string;
};

type FeaturedProject = {
  image: ProjectCardImage;
  badge: { label: string; class: string };
  title: string;
  subtitle?: string;
  description: string;
  sections: ProjectSection[];
  stack: string[];
  actions?: ProjectAction[];
};

type OtherProjectCard = {
  image: ProjectCardImage;
  title: string;
  description: string;
  tags: string[];
  url?: string;
};

type ProjectsCopy = {
  hero: {
    prefix: string;
    highlight: string;
    suffix: string;
    description: string;
  };
  featured: FeaturedProject[];
  other: {
    title: string;
    description: string;
    cards: OtherProjectCard[];
  };
};

const projectsCopy: Record<Language, ProjectsCopy> = {
  en: {
    hero: {
      prefix: 'My',
      highlight: 'Projects',
      suffix: '',
      description:
        'Case studies from food delivery, mobility, and fintech platforms where I led automation, data, and experimentation initiatives.',
    },
    featured: [
      {
        image: {
          src: '/help-orchestration.png?height=400&width=600',
          alt: 'Workflow diagram for help experience orchestration',
        },
        badge: { label: 'Operational Excellence', class: 'bg-primary/10 text-primary' },
        title: 'Help Experience Orchestration Layer',
        subtitle: 'Just Eat Takeaway',
        description:
          'Event-driven automation powering JET’s help chatbot. The orchestration layer coordinates services, state, and playbooks so order issues resolve without manual intervention.',
        sections: [
          {
            title: 'Impact',
            items: [
              'Automated resolution flows for millions of annual customer contacts, reducing manual interventions by 60%.',
              'Improved stability and MTTR with resilient retries, stateful orchestration, and structured observability.',
            ],
          },
          {
            title: 'What I did',
            items: [
              'Owned architecture, API contracts, and rollout strategy across product, operations, and support teams.',
              'Partnered with ops to codify playbooks into reusable workflows, guardrails, and experimentable policies.',
            ],
          },
        ],
        stack: ['Java', 'Spring Boot', 'Kafka', 'AWS SQS', 'Redis'],
        actions: [{ label: 'Experience Overview', variant: 'outline', href: '/experience' }],
      },
      {
        image: {
          src: '/jetms-feature.png?height=400&width=600',
          alt: 'Screenshot of JETMS operational console',
        },
        badge: { label: 'Platform Engineering', class: 'bg-accent/10 text-accent' },
        title: 'JETMS Operational Platform',
        subtitle: 'Just Eat Takeaway',
        description:
          'Multi-tenant workspace that unifies 20+ internal services for customer support agents. CQRS routing, shared data models, and fine-grained permissions keep teams focused on resolution outcomes.',
        sections: [
          {
            title: 'Impact',
            items: [
              'Reduced issue-resolution SLA by ~33% by consolidating fragmented tooling into a single experience.',
              'Enabled market-specific workflows with tenant-aware routing and flexible schema evolution.',
            ],
          },
          {
            title: 'What I did',
            items: [
              'Design service decomposition, and front-end framework-agnostic architecture.',
              'Leverage CQRS patterns and governance for integrating partner teams.',
            ],
          },
        ],
        stack: ['Java', 'TypeScript', 'Micro Frontends', 'MySQL'],
        actions: [
          // TODO:
          // { label: 'Live Demo', variant: 'primary', href: 'https://jetms.example.com' },
          { label: 'Experience Overview', variant: 'outline', href: '/experience' },
        ],
      },
      {
        image: {
          src: '/jarvis-feature-1.png?height=400&width=600',
          alt: 'Map and geospatial data pipeline illustration',
        },
        badge: { label: 'Geo Platforms', class: 'bg-primary/10 text-primary' },
        title: 'MapYourCity Crowdsourcing Platform',
        subtitle: 'Grab',
        description:
          'Crowdsourced geospatial data engine fueling Grab’s mobility and delivery products. Coordinates contributor tasks, validates submissions, and feeds downstream routing services.',
        sections: [
          {
            title: 'Impact',
            items: [
              'Scaled to 300K tasks and 400K+ geospatial data points that improved map freshness and trip accuracy.',
              'Cut geospatial storage costs by 70% via data simplification and tiered retention policies.',
            ],
          },
          {
            title: 'What I did',
            items: [
              'Designed task lifecycle, task modeling, and auditing capabilities across data, ops, and product teams.',
              'Implemented high-performance services in Go, PostGIS, and Kafka with proactive monitoring and alerting.',
            ],
          },
        ],
        stack: ['Go', 'PostgreSQL', 'PostGIS', 'Kafka', 'ElasticSearch'],
        actions: [
          { label: 'Live Demo', href: 'https://www.grab.com/my/zh/map-your-city/', variant: 'primary' },
          // { label: 'Live Demo', variant: 'primary', href: 'https://grabmaps.grab.com/solutions/mapmaking-tools-and-saas' },
          // TODO: add more details of experience
          { label: 'Experience Overview', variant: 'outline', href: '/experience' },
        ],
      },
    ],
    other: {
      title: 'Other Projects',
      description: 'Additional initiatives that strengthened observability, experimentation, and developer velocity.',
      cards: [
        // {
        //   image: { src: '/placeholder.svg?height=200&width=350', alt: 'Streaming logs visualization' },
        //   title: 'Centralized Logging Pipeline',
        //   description: 'Benthos + Kafka + AWS SQS pipeline processing 50K+ logs/day into OpenSearch, cutting MTTR by 25% and unlocking proactive alerting.',
        //   tags: ['Benthos', 'Kafka', 'AWS SQS', 'OpenSearch'],
        // },
        {
          image: { src: '/darwin-arch.png?height=350&width=350', alt: 'Experiment dashboard mockup' },
          title: 'Darwin Experimentation Platform',
          description:
            'Re-architected experimentation APIs and SDKs at Ant Group to support 1,000+ annual experiments and drive a 2% conversion lift.',
          tags: ['Java', 'SDK', 'Experimentation'],
        },
        // TODO:
        {
          title: 'KartaView Street-View Service',
          image: { src: '/kartaview-collection.jpg?height=200&width=350', alt: 'Street-view map tiles' },
          url: 'https://kartaview.org',
          description:
            'High-performance PostGIS service applying the Douglas–Peucker algorithm to shrink geospatial datasets by 70% for faster queries.',
          tags: ['Go', 'PostGIS', 'Microservices'],
        },
      ],
    },
  },
};

export function getProjectsCopy(lang: Language): ProjectsCopy {
  return projectsCopy[lang] ?? projectsCopy[defaultLang];
}
