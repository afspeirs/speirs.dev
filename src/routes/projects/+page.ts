import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const page = await import('/src/content/pages/projects.md');
  const { default: content, metadata } = page;

  const response = await fetch(`/api/projects`);
  const projects = await response.json();

  return {
    page: {
      content,
      metadata,
    },
    projects,
  }
}
