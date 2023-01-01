import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const page = await import('/src/content/pages/about.md');
  const { default: content, metadata } = page;

  return {
    page: {
      content,
      metadata,
    }
  }
}
