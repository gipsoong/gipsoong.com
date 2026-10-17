import { defineConfig } from 'astro/config';

// Plain static output: Cloudflare serves the built files from ./dist, no server code runs.
export default defineConfig({
  site: 'https://gipsoong.com',
  trailingSlash: 'never',
  build: { format: 'file' },
});
