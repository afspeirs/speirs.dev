import type { Post, Project } from '$lib/types';
import { toKebabCase } from '$lib/utils';

type File = { metadata: Omit<Project, 'slug' | 'url'> };

type SortKey = 'date' | 'title';
type SortOperator = '+' | '-';
type SortByOption = `${SortOperator}${SortKey}`;

type GetProjectsOptions = {
  customFilter?: (project: Project) => boolean;
  sortBy?: SortByOption;
};

export async function getProjects({
  customFilter = () => true,
  sortBy = '-date',
}: GetProjectsOptions = {}) {
  const paths = import.meta.glob<File>('/src/content/projects/*.md', { eager: true });
  const sortDirection = sortBy.slice(0, 1) as SortOperator;
  const sortKey = sortBy.slice(1) as SortKey;

  const projects: Project[] = Object.entries(paths)
    .flatMap(([path, file]) => {
      const slug = path.split('/').at(-1)?.replace('.md', '');

      if (file?.metadata && slug && !file.metadata.hidden) {
        const project = {
          ...file.metadata,
          slug,
          url: path.replace('/src/content/', '').replace(/\.md$/, ''),
        } satisfies Project;

        return [project];
      }
      return [];
    })
    .filter(customFilter)
    .sort((a, b) => {
      let ascResult = 0;

      switch (sortKey) {
        case 'title':
          ascResult = a.title.localeCompare(b.title);
          break;
        case 'date':
          ascResult = new Date(a.date).getTime() - new Date(b.date).getTime();
          break;
        default:
          throw new Error(`sortBy option not valid: "${sortBy}"`);
      }

      return sortDirection === '-' ? ascResult * -1 : ascResult;
    });

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
