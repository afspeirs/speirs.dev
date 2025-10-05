import type { Post, Project } from '$lib/types';
import { toKebabCase } from '$lib/utils';

type File = { metadata: Omit<Project, 'slug' | 'url'> };

export async function getProjects() {
  const paths = import.meta.glob<File>('/src/content/projects/*.md', { eager: true });

  const projects: Project[] = Object.entries(paths)
    .map(([path, file]) => {
      const slug = path.split('/').at(-1)?.replace('.md', '');

      if (file?.metadata && slug && !file.metadata.hidden) {
        const project = {
          ...file.metadata,
          slug,
          url: path.replace('/src/content/', '').replace(/\.md$/, ''),
        } satisfies Project;

        return project;
      }
      return undefined;
    })
    .filter((project) => project !== undefined)
    .sort((first, second) => Date.parse(second.date) - Date.parse(first.date));

  return projects;
}

export async function getTags() {
  const projects = await getProjects();
  const tags = projects.flatMap((project) => project.tags);
  const sortedTags = [...new Set(tags)]
    .sort()
    .map((tag) => ({
      title: tag,
      slug: toKebabCase(tag),
      url: `tags/${toKebabCase(tag)}`,
    })) satisfies Post[];

  return sortedTags;
}
