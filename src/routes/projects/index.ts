import {
  getAllContentFromGlob,
  getAllContentFromGlobAsObject,
} from '$lib/utils';

/** @type {import('./index').RequestHandler} */
export async function get() {
  const pageFiles = import.meta.glob('$content/pages/projects.md');
  const pageContents = await getAllContentFromGlobAsObject(pageFiles);

  const projectFiles = import.meta.glob('$content/projects/*.md');
  const projectContents = await getAllContentFromGlob(projectFiles);

  // console.log(pageContents);
  // console.log(projectContents);

  return {
    body: {
      page: pageContents.projects,
      projects: projectContents,
    },
  };
}