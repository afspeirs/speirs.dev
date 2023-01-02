import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const { default: content, metadata } = await import('/src/content/pages/projects.md');

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
