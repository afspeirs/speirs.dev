import { json } from '@sveltejs/kit'
import { getAllContentFromGlobAsObject } from '$lib/utils'
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  const pageFiles = import.meta.glob('/src/content/pages/*.md');
  const pageContents = await getAllContentFromGlobAsObject(pageFiles);

  return json(pageContents);
}
