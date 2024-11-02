import { getProjects } from '$lib/content';

/** @type {import('./$types').PageLoad} */
export async function load() {
  const projects = await getProjects();

  return {
    projects,
  };
}
