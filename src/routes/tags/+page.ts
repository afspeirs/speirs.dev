import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const post = await import('/src/content/pages/tags.md');
  const { default: content, metadata } = post;

  const response = await fetch(`/api/tags`);
  const tags = await response.json();

  return {
    tags,
    page: {
      content,
      metadata,
    }
  }
}
