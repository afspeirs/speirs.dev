import {
  getAllContentFromGlobAsObject,
  getAllTags,
} from '$lib/utils';

/** @type {import('./index').RequestHandler} */
export async function get() {
  const pageFile = import.meta.glob('$content/pages/tags.md');
  const pageContent = await getAllContentFromGlobAsObject(pageFile);
  const allTags = await getAllTags();

  return {
    body: {
      page: pageContent.tags,
      tags: allTags,
    },
  };
}
