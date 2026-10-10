import { mdsvex, type MdsvexOptions } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

import packageJson from './package.json' with { type: 'json' };

const mdsvexOptions = {
  extensions: ['.md'],
} satisfies MdsvexOptions;

export default defineConfig({
  define: {
    'import.meta.env.APP_VERSION': JSON.stringify(packageJson.version),
  },
  plugins: [
    tailwindcss(),
    sveltekit({
      extensions: ['.svelte', '.svx', '.md'],
      // Consult https://svelte.dev/docs/kit/integrations
      // for more information about preprocessors
      preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

      // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
      // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
      // See https://svelte.dev/docs/kit/adapters for more information about adapters.
      adapter: adapter(),
    }),
  ],
});
