import { resolve } from 'path';
import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import packageVersion from 'vite-plugin-package-version';
import markdown from '@jackfranklin/rollup-plugin-markdown';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    vite: {
      plugins: [
        markdown(),
        packageVersion.default(),
      ],
      resolve: {
        alias: {
          $content: resolve('./src/content'),
        },
      },
    },
  },
};

export default config;
