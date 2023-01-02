import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const { default: content, metadata } = await import('/src/content/pages/about.md');

  return {
    page: {
      content,
      metadata,
    }
  }
}
