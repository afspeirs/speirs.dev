import { getTags } from '#lib/content.js';

/** @type {import('./$types').PageLoad} */
export async function load() {
  const tags = await getTags();

  return {
    tags,
  };
}
