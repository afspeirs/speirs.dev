import {
  getAllContentFromGlob,
  getAllTags,
  toKebabCase,
} from '$lib/utils';

/** @type {import('./[slug]').RequestHandler} */
export async function get({ params }) {
  const { slug } = params;

  const projectFiles = import.meta.glob('$content/projects/*.md');
  const projectContents = await getAllContentFromGlob(projectFiles);

  const projects = projectContents.filter((post) => {
    const array = post.metadata.tags.map((tag: string) => toKebabCase(tag));
    return array.includes(slug);
  });

  // console.log(projects);

  const allTags = await getAllTags();

  const currentTag = allTags.find((tag) => tag.slug === slug);
  // const projects = getProjectByTag(slug);

  // console.log(currentTag);

  return {
    body: {
      post: currentTag,
      projects,
    },
  };
}
