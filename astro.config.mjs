import { defineConfig } from 'astro/config';

export default defineConfig({
  server: { host: true },
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
