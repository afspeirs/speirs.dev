import { getProjects } from '$lib/content';

const projectSlugsToInclude = [
  'speirs-dev',
  'note-me',
  'entity-me',
];

/** @type {import('./$types').PageLoad} */
export async function load() {
  const projects = await getProjects({
    customFilter: (project) => projectSlugsToInclude.includes(project.slug),
    sortBy: '+date',
  });

  return {
    projects,
  };
}
