import type { PostInterface } from '$lib/types/post';
import { toKebabCase } from '$lib/utils'
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const response = await fetch(`/api/projects`);
  const allPosts = await response.json();

  const projects = allPosts.filter((post: PostInterface) => post.metadata.tags?.map((tag: string) => toKebabCase(tag)).includes(params.slug));

  return {
    projects,
    tag: {
      metadata: {
        title: params.slug,
      },
      slug: toKebabCase(params.slug),
      path: `tags/${toKebabCase(params.slug)}`,
    },
  }
}
