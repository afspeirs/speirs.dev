import type { PostInterface } from '$lib/types/post';
import {
  getAllContentFromGlob,
  sortFunction,
  toKebabCase,
} from '$lib/utils';

const getAllTags = async () => {
  const projectFiles = import.meta.glob('$content/projects/*.md');
  const projectContents = await getAllContentFromGlob(projectFiles);

  const arrayOfTags = projectContents
    .map((post) => post.metadata.tags)
    .flat();

  const allTags: PostInterface[] = [...new Set(arrayOfTags)]
    .map((tag: string) => ({
      metadata: {
        title: tag,
      },
      slug: toKebabCase(tag),
      path: `tags/${toKebabCase(tag)}`,
    }))
    .sort(sortFunction['slug-asc']);

  return allTags;
};

export default getAllTags;
