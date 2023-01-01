import { json } from '@sveltejs/kit'
import { getAllContentFromGlobAsObject } from '$lib/utils'

export const GET = async () => {
  const pageFiles = import.meta.glob('/src/content/pages/*.md');
  const pageContents = await getAllContentFromGlobAsObject(pageFiles);

  return json(pageContents);
}
