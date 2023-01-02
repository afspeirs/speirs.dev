import { json } from '@sveltejs/kit'
import { getAllContentFromGlob } from '$lib/utils'
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  const projectFiles = import.meta.glob('/src/content/projects/*.md');
  const projectContents = await getAllContentFromGlob(projectFiles);

  return json(projectContents);
}
