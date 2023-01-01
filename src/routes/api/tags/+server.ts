import { json } from '@sveltejs/kit';
import type { PostInterface, TagInterface } from '$lib/types/post';
import { getAllContentFromGlob, sortFunction, toKebabCase } from '$lib/utils'

export const GET = async () => {
  const projectFiles = import.meta.glob('/src/content/projects/*.md');
  const projectContents = await getAllContentFromGlob(projectFiles);

  const arrayOfTags = projectContents
    .map((post: PostInterface) => post.metadata.tags)
    .flat();

  const allTags: TagInterface[] = [...new Set(arrayOfTags)]
    .map((tag: string) => ({
      metadata: {
        title: tag,
      },
      slug: toKebabCase(tag),
      path: `tags/${toKebabCase(tag)}`,
    }))
    .sort(sortFunction['slug-asc']);

  return json(allTags);
}
