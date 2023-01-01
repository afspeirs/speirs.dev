import { json } from '@sveltejs/kit'
import { getAllContentFromGlob } from '$lib/utils'

export const GET = async () => {
  const projectFiles = import.meta.glob('/src/content/projects/*.md');
  const projectContents = await getAllContentFromGlob(projectFiles);

  return json(projectContents);
}
