import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://saveroom.org',
  trailingSlash: 'never',
  integrations: [sitemap()],
});
