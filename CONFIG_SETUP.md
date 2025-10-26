# Site Configuration Setup - Complete! ✅

I've created a comprehensive configuration system for your Astro website. Here's what was added:

## 📁 File Structure

```
src/config/
├── index.ts              # Barrel export for easy imports
├── site.config.ts        # Main configuration file (environment-aware)
├── example.astro         # Usage examples
└── README.md             # Documentation

.env.example              # Environment variables template
```

## 🎯 Key Features

### 1. **Environment-Aware Configuration**
   - Automatically detects `dev` vs `prod` environments
   - Different API endpoints for local development and production
   - Conditional feature enablement based on environment

### 2. **Centralized Settings**
   - Site metadata (name, description, URL)
   - API endpoints
   - Feature flags
   - External service configurations (Analytics, Comments)
   - Social links
   - Blog settings

### 3. **Environment Variables Support**
   - Uses `.env` files for sensitive data
   - Public variables (client-side): Prefixed with `PUBLIC_`
   - Private variables (server-side): No prefix
   - See `.env.example` for all available variables

### 4. **TypeScript Support**
   - Full type safety with exported types
   - Helper functions for common operations
   - Autocomplete in your IDE

## 🚀 How to Use

### Basic Import

```typescript
// Import everything
import { siteConfig } from '@/config';

// Import specific parts
import { siteConfig, getApiEndpoint, isFeatureEnabled } from '@/config';
```

### In Astro Components

```astro
---
import { siteConfig } from '@/config';

const { site, social } = siteConfig;
---

<header>
  <h1>{site.name}</h1>
  <a href={social.github}>GitHub</a>
</header>
```

### Environment-Aware API Calls

```typescript
import { getApiEndpoint } from '@/config';

// Automatically uses the right endpoint based on environment
const endpoint = getApiEndpoint('comments');
// Dev:  http://localhost:3000/api/comments
// Prod: https://api.binliuzhang.com/comments

const data = await fetch(endpoint);
```

### Feature Flags

```astro
---
import { isFeatureEnabled } from '@/config';

const showComments = isFeatureEnabled('comments');
---

{showComments && (
  <section id="comments">
    <!-- Comments component -->
  </section>
)}
```

## ⚙️ Setup Instructions

### 1. Copy Environment Variables (Optional)

```bash
cp .env.example .env
```

Then edit `.env` with your actual values.

### 2. Update Configuration

Edit `src/config/site.config.ts` to customize:
- Your site name and description
- API endpoints
- Social media links
- Service IDs (Analytics, Comments, etc.)

### 3. Start Using

Import the config in any `.astro`, `.ts`, or `.tsx` file:

```typescript
import { siteConfig } from '@/config';
```

## 📝 Example Scenarios

### Scenario 1: Add a New API Endpoint

```typescript
// In src/config/site.config.ts
api: {
  // ...existing endpoints...
  newsletter: isDev 
    ? 'http://localhost:3000/api/newsletter'
    : 'https://api.binliuzhang.com/newsletter',
}
```

### Scenario 2: Add a Feature Flag

```typescript
// In src/config/site.config.ts
features: {
  // ...existing features...
  darkMode: true,
  newsletter: isProd, // Only in production
}
```

### Scenario 3: Add Environment Variable

```bash
# In .env
PUBLIC_CUSTOM_API_KEY=your-key-here
```

```typescript
// In src/config/site.config.ts
const apiKey = getEnv('PUBLIC_CUSTOM_API_KEY');
```

## 🎨 Path Aliases

Updated `tsconfig.json` with convenient path aliases:

- `@/config` → `src/config`
- `@/components/*` → `src/components/*`
- `@/layouts/*` → `src/layouts/*`
- `@/utils/*` → `src/utils/*`
- `@/*` → `src/*`

## 📚 Resources

- Check `src/config/README.md` for detailed documentation
- Check `src/config/example.astro` for code examples
- Check `.env.example` for all available environment variables

## ✨ Benefits

1. **Single Source of Truth**: All configuration in one place
2. **Type Safety**: Full TypeScript support with autocomplete
3. **Environment Flexibility**: Easy switching between dev/prod
4. **Maintainability**: Easy to update and extend
5. **Best Practices**: Follows Astro and TypeScript conventions

---

**Next Steps**: 
1. Update the configuration values in `src/config/site.config.ts`
2. Create a `.env` file for sensitive data (optional)
3. Start using `import { siteConfig } from '@/config'` in your components!

