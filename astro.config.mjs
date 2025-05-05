// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  server: {
      allowedHosts: ['.gitpod.io'] // Allow all Gitpod subdomains
    },

  integrations: [react()],
});