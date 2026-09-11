import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import path from 'node:path';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
    resolve: {
      alias: {
        '@styles': path.resolve('./src/styles'),
      },
    },
    server: {
      // প্রিভিউ প্রক্সির হোস্টনেম অনুমোদন
      allowedHosts: true,
    },
  },
});
