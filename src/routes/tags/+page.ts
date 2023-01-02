import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const { default: content, metadata } = await import('/src/content/pages/tags.md');

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
