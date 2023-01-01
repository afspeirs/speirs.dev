import { sveltekit } from '@sveltejs/kit/vite';
import packageVersion from 'vite-plugin-package-version';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    packageVersion.default(),
  ],
  test: {
    include: [
      'src/**/*.{test,spec}.{js,ts}',
    ],
  },
};

export default config;
