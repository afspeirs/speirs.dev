import type { Post, Project } from '$lib/types';
import { toKebabCase } from '$lib/utils';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const response = await fetch('api/projects');
  const projects: Project[] = await response.json();
  const tags = projects.flatMap((project) => project?.tags);

  const sortedTags: Post[] = [...new Set(tags)]
    .sort()
    .map((tag) => ({
      title: tag,
      slug: toKebabCase(tag),
      url: `tags/${toKebabCase(tag)}`,
    }));

  return {
    tags: sortedTags,
  };
}
