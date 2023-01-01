import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const post = await import(`../../../content/projects/${params.slug}.md`);
  const { default: content, metadata } = post;

  return {
    page: {
      content,
      metadata,
    },
  }
}
