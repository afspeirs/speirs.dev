import { getProjects, getTags } from '$lib/content';
import { toKebabCase } from '$lib/utils';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
  const tags = await getTags();
  return tags;
}

export async function load({ params }) {
  const { slug } = params;

  try {
    const projects = await getProjects();
    const filteredProjectsByTag = projects.filter((project) => project.tags.find((tag) => toKebabCase(tag) === toKebabCase(slug)));
    const tags = await getTags();
    const currentTag = tags.find((tag) => tag.slug === slug);

    if (!currentTag) throw new Error(`No tag found with a name of "${slug}"`);

    return {
      metadata: currentTag,
      projects: filteredProjectsByTag,
    };
  } catch (e) {
    return error(404, `Could not find ${slug}, ${e}`);
  }
}
