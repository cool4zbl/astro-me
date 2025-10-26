# Site Configuration

This directory contains all site-wide configuration files.

## Usage

Import the configuration in your components or pages:

```typescript
// Import the entire config
import { siteConfig } from '@/config';

// Or import specific parts
import { siteConfig, getApiEndpoint, isFeatureEnabled } from '@/config';
```

## Examples

### Using API endpoints (environment-aware)

```typescript
import { siteConfig, getApiEndpoint } from '@/config';

// Get the comments API endpoint (automatically uses dev or prod URL)
const commentsEndpoint = getApiEndpoint('comments');

// Or access directly
const analyticsUrl = siteConfig.api.analytics;
```

### Checking feature flags

```typescript
import { isFeatureEnabled, siteConfig } from '@/config';

// Check if a feature is enabled
if (isFeatureEnabled('analytics')) {
  // Initialize analytics
}

// Or access directly
if (siteConfig.features.comments) {
  // Show comments section
}
```

### Using in Astro components

```astro
---
import { siteConfig } from '@/config';

const { site, social } = siteConfig;
---

<header>
  <h1>{site.name}</h1>
  <p>{site.description}</p>
  <a href={social.github}>GitHub</a>
</header>
```

### Environment detection

```typescript
import { siteConfig } from '@/config';

if (siteConfig.env.isDev) {
  console.log('Running in development mode');
}

if (siteConfig.env.isProd) {
  // Production-only code
}
```

## Configuration Structure

- `site.config.ts` - Main site configuration with environment-aware settings
- `index.ts` - Barrel export for easy imports

## Environment Variables

The configuration automatically detects the environment using Astro's built-in `import.meta.env`:

- `import.meta.env.DEV` - Development mode
- `import.meta.env.PROD` - Production mode
- `import.meta.env.MODE` - Current mode (development, production, etc.)

You can also add custom environment variables in a `.env` file and access them via `import.meta.env.YOUR_VAR`.

