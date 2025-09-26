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
  zh: {
    hero: {
      label: 'calm engineering · 日常记录',
      title: '你好，我是喜欢稳步前进的全栈开发者。',
      description:
        '每天和 Java / Spring 打交道，整理接口、补全文档，也把小小的 UX 细节调到顺手。偶尔写点文字，让经验有出处。',
      primary: { label: '阅读博客', href: '/blog' },
      secondary: { label: '查看项目', href: '/projects' },
    },
    about: {
      title: '关于我',
      paragraphs: [
        '主攻后端架构与 API 设计，习惯把复杂需求拆解成小节奏可执行的任务。喜欢把监控、文档和自动化流程提前铺好，让团队更安心。',
        '面对问题先写出假设，再验证，再沉淀。写出来的东西就是团队的共同语言，也能帮未来的自己少踩坑。',
        '不写代码时，我在读书做摘录、整理歌单或拍照记录光线——这些都是让我保持好奇的方式。',
      ],
      experienceLinkLabel: '查看我的经历',
    },
    projects: {
      title: '精选项目',
      description: '最近的工作与个人实验：服务要轻、集成要稳、交互要让人安心。',
      items: [
        {
          title: '电商平台',
          description:
            '基于 Spring Boot、React 和 PostgreSQL 的全栈电商解决方案，支持用户登录、支付、后台管理等核心功能。',
          tags: ['Java', 'Spring Boot', 'React'],
          image: { src: '/placeholder.svg?height=200&width=350', alt: '电商平台界面' },
        },
        {
          title: '微服务 API 网关',
          description:
            '使用 Spring Cloud、Docker、Kubernetes 构建的可扩展微服务架构，实现服务发现、负载均衡与链路追踪。',
          tags: ['Spring Cloud', 'Docker', 'Kubernetes'],
          image: { src: '/placeholder.svg?height=200&width=350', alt: '微服务架构示意图' },
        },
        {
          title: '实时分析看板',
          description:
            '结合 Spring WebFlux、Redis 与 Chart.js 的实时分析平台，支持数据可视化与多维度监控。',
          tags: ['WebFlux', 'Redis', 'Chart.js'],
          image: { src: '/placeholder.svg?height=200&width=350', alt: '数据分析图表界面' },
        },
      ],
      viewAllLabel: '查看所有项目',
    },
    latestPosts: {
      title: '最新文章',
      description: '最近关于工程实践、架构思考与学习方法的记录。',
      viewAllLabel: '查看所有文章',
      emptyLabel: '暂时还没有发布文章',
      totalLabel: (count: number) => `共 ${count} 篇文章`,
    },
  },
};

export function getHomeCopy(lang: Language): HomeCopy {
  return homeCopy[lang] ?? homeCopy[defaultLang];
}
