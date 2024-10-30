import { json } from '@sveltejs/kit';

import type { Project } from '$lib/types';

async function getProjects() {
  const paths = import.meta.glob('/src/content/projects/*.md', { eager: true });

  const projects = Object.entries(paths)
    .map(([path, file]) => {
      const slug = path.split('/').at(-1)?.replace('.md', '');

      if (file && typeof file === 'object' && 'metadata' in file && slug) {
        const metadata = file.metadata as Omit<Project, 'slug' | 'url'>;
        const project = {
          ...metadata,
          slug,
          url: path.replace('/src/content/', '').replace(/\.md$/, ''),
        } satisfies Project;

        if (!project.hidden) return project;
      }
      return undefined;
    })
    .filter((project) => project !== undefined)
    .sort((first, second) => Date.parse(second.date) - Date.parse(first.date));

  return projects;
}

export async function GET() {
  const projects = await getProjects();
  return json(projects);
}
