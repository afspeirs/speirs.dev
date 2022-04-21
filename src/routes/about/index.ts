import { getAllContentFromGlobAsObject } from '$lib/utils';

/** @type {import('./index').RequestHandler} */
export async function get() {
  const pageFiles = import.meta.glob('$content/pages/about.md');
  const pageContents = await getAllContentFromGlobAsObject(pageFiles);

  // console.log(pageContents);

  return {
    body: {
      about: pageContents.about,
    },
  };
}
