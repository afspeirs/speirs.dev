import { getAllContentFromGlob } from '$lib/utils';

/** @type {import('./[slug]').RequestHandler} */
export async function get({ params }) {
  const { slug } = params;

  const projectFiles = import.meta.glob('$content/projects/*.md');
  const projectContents = await getAllContentFromGlob(projectFiles);
  const currentPost = projectContents.find((item) => item.slug === slug);

  // console.log(projectContents);
  // console.log(currentPost);

  return {
    body: {
      post: currentPost,
    },
  };
}
