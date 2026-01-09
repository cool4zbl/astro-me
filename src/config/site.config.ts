/**
 * Site Configuration
 *
 * This file contains all site-wide configuration including:
 * - Environment-specific settings (prod/dev/local)
 * - API endpoints
 * - Feature flags
 * - External service configurations
 *
 * Environment variables can be accessed via import.meta.env
 * - Public variables (client-side): Must be prefixed with PUBLIC_
 * - Private variables (server-side): No prefix needed
 *
 * See .env.example for available environment variables
 */

// Determine the current environment
const isDev = import.meta.env.DEV;
const isProd = import.meta.env.PROD;
const mode = import.meta.env.MODE;

// Helper to get environment variable with fallback
const getEnv = (key: string, fallback: string = ''): string => {
  return (import.meta.env[key] as string) || fallback;
};

// Base configuration
export const siteConfig = {
  // Site metadata
  site: {
    name: 'Binliu Zhang',
    title: 'Binliu Zhang - Software Engineer',
    description: 'Personal website and blog of Binliu Zhang',
    url: isProd ? 'https://binliuzhang.com' : 'http://localhost:4321',
    author: 'Binliu Zhang',
  },

  // API endpoints - environment aware
  api: {
    // Base URL from environment variable or fallback
    baseUrl: getEnv(
      'PUBLIC_API_BASE_URL',
      isDev ? 'http://localhost:8080' : 'https://api.binliuzhang.com'
    ),
      // Likes API
      likes: isDev
          ? 'http://localhost:8080/v1/likes'
          : 'https://api.binliuzhang.com/v1/likes',

    // Example: Comments API
    comments: isDev
      ? 'http://localhost:3000/api/comments'
      : 'https://api.binliuzhang.com/comments',

    // Example: Analytics API
    analytics: isDev
      ? 'http://localhost:3000/api/analytics'
      : 'https://api.binliuzhang.com/analytics',
  },

  // Feature flags
  features: {
    comments: true,
    analytics: isProd, // Only enable analytics in production
    search: true,
    rss: true,
    sitemap: true,
  },

  // External services
  services: {
    // Giscus comments configuration
    giscus: {
      enabled: getEnv('PUBLIC_ENABLE_COMMENTS', 'true') === 'true',
      repo: getEnv('PUBLIC_GISCUS_REPO'),
      repoId: getEnv('PUBLIC_GISCUS_REPO_ID'),
      category: getEnv('PUBLIC_GISCUS_CATEGORY'),
      categoryId: getEnv('PUBLIC_GISCUS_CATEGORY_ID'),
    },

    // Google Analytics
    googleAnalytics: {
      enabled: isProd && !!getEnv('PUBLIC_GA_MEASUREMENT_ID'),
      measurementId: getEnv('PUBLIC_GA_MEASUREMENT_ID'),
    },

    // Baidu Analytics
    baiduAnalytics: {
      enabled: isProd && !!getEnv('PUBLIC_BAIDU_SITE_ID'),
      siteId: getEnv('PUBLIC_BAIDU_SITE_ID'),
    },
  },

  // Social links
  social: {
    github: getEnv('PUBLIC_GITHUB_URL', 'https://github.com/cool4zbl'),
    linkedin: getEnv('PUBLIC_LINKEDIN_URL', 'https://www.linkedin.com/in/binliu-zhang'),
    twitter: getEnv('PUBLIC_TWITTER_URL', ''),
    email: getEnv('PUBLIC_EMAIL', 'binliu.zhang@gmail.com'),
    unsplash: getEnv('PUBLIC_UNSPLASH_URL', 'https://unsplash.com/@binliu'),
  },

  // Blog configuration
  blog: {
    postsPerPage: 10,
    showRelatedPosts: true,
    relatedPostsCount: 3,
  },

  // Environment info (useful for debugging)
  env: {
    isDev,
    isProd,
    mode,
  },
} as const;

// Type exports for better TypeScript support
export type SiteConfig = typeof siteConfig;
export type ApiEndpoints = typeof siteConfig.api;
export type Features = typeof siteConfig.features;
export type Services = typeof siteConfig.services;

// Helper function to get API endpoint
export function getApiEndpoint(endpoint: keyof ApiEndpoints): string {
  return siteConfig.api[endpoint];
}

// Helper function to check if feature is enabled
export function isFeatureEnabled(feature: keyof Features): boolean {
  return siteConfig.features[feature];
}

