// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://nano72.com',
  base: '/',
  compressHTML: true,
  build: {
    format: 'directory'
  },
  vite: {
    build: {
      cssMinify: 'lightningcss'
    }
  },
  integrations: [tailwind()],
});
