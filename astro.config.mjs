import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: 'https://binliuzhang.com/',
    integrations: [mdx(), sitemap(), tailwind({
        applyBaseStyles: true,
    }),
    ],
    markdown: {
        shikiConfig: {
            theme: 'github-dark-dimmed',
            wrap: true,
        },
    },
});
