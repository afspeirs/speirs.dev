import { getProjects } from '#lib/content.js';

/** @type {import('./$types').PageLoad} */
export async function load() {
  const projects = await getProjects({
    customFilter: (project) => project.featured || false,
    sortBy: '+date',
  });

  return {
    projects,
  };
}
