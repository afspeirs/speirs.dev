import type { Post, Project } from '$lib/types';
import { toKebabCase } from '$lib/utils';
import { error } from '@sveltejs/kit'

export async function load({ fetch, params }) {
  const { slug } = params;

  try {
    const response = await fetch('../api/projects');
    const projects: Project[] = await response.json();
    const filteredProjectsByTag = projects.filter((project) => project.tags.find(tag => tag.toLowerCase() === slug));

    const tags = projects.flatMap((project) => project?.tags);

    const currentTag = [...new Set(tags)]
      .sort()
      .map((tag) => ({
        title: tag,
        slug: toKebabCase(tag),
        url: `tags/${toKebabCase(tag)}`,
      }))
      .find((tag) => tag.slug === slug);

    return {
      tag: currentTag as Post,
      projects: filteredProjectsByTag,
    };
  } catch (e) {
    error(404, `Could not find ${slug}`)
  }
}
