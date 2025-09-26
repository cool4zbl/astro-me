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
          title: 'Hey, I\'m Binliu!',
          description: [
              "Senior Software Engineer specializing in Java backend development.",
              " Living in the Netherlands, I enjoy building large-scale systems and love sharing my technical practice.",
              "Currently working on microservices architecture and distributed systems that handle millions of requests daily.",
          ],
          primary: { label: 'View Projects', href: '/projects' },
          secondary: { label: 'Read the Blog', href: '/blog' },
      },
      about: {
          title: 'What I Do',
          paragraphs: [
              'I work across the stack with a soft spot for clean backend architecture. Most days you will find me fine-tuning Spring services, designing APIs, and adjusting the front-end details until they feel intuitive.',
              'Teams lean on me for calm execution: I document decisions, automate checks, and keep an eye on maintainability so we can move quickly without the hangover.',
              'Away from the keyboard, I am usually annotating a book, curating a playlist, or experimenting with a new workout plan—all habits that keep my curiosity running.',
          ],
          experienceLinkLabel: 'View My Experience',
      },
      projects: {
          title: 'Featured Projects',
          description:
              'Highlights from recent client work and personal experiments—lean services, pragmatic integrations, and interfaces that feel comfortable.',
          items: [
              {
                  title: 'E-commerce Platform',
                  description:
                      'Full-stack e-commerce solution built with Spring Boot, React, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
                  tags: ['Java', 'Spring Boot', 'React'],
                  image: { src: '/placeholder.svg?height=200&width=350', alt: 'E-commerce Platform' },
              },
              {
                  title: 'Microservices API',
                  description:
                      'Scalable microservices architecture with Spring Cloud, Docker, and Kubernetes. Implements service discovery, load balancing, and distributed tracing.',
                  tags: ['Spring Cloud', 'Docker', 'Kubernetes'],
                  image: { src: '/placeholder.svg?height=200&width=350', alt: 'Microservices architecture mockup' },
              },
              {
                  title: 'Analytics Dashboard',
                  description:
                      'Real-time analytics platform with data visualization, built using Spring WebFlux, Redis, and Chart.js for interactive reporting.',
                  tags: ['WebFlux', 'Redis', 'Chart.js'],
                  image: { src: '/placeholder.svg?height=200&width=350', alt: 'Analytics dashboard charts' },
              },
          ],
          viewAllLabel: 'View All Projects',
      },
      latestPosts: {
          title: 'Latest Posts',
          description:
              'Recent notes on architecture decisions, experiments that worked, and the mindset shifts that helped along the way.',
          viewAllLabel: 'View All Posts',
          emptyLabel: 'No posts published yet',
          totalLabel: (count: number) => `${count} posts in total`,
      },
  },
};

export function getHomeCopy(lang: Language): HomeCopy {
  return homeCopy[lang] ?? homeCopy[defaultLang];
}
