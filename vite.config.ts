import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

import { version } from './package.json';

export default defineConfig({
  define: {
    'import.meta.env.APP_VERSION': JSON.stringify(version),
  },
  plugins: [
    tailwindcss(),
    sveltekit(),
  ],
});
