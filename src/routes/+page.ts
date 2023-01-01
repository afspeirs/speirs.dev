import { getAllContentFromGlob, getAllContentFromGlobAsObject } from '$lib/utils';

export async function load({ fetch }) {
  const pageFiles = import.meta.glob('/src/content/pages/*.md');
  const pageContents = await getAllContentFromGlobAsObject(pageFiles);

  const projectFiles = import.meta.glob('/src/content/projects/*.md');
  const projectContents = await getAllContentFromGlob(projectFiles);

  // console.log(pageContents);
  // console.log(projectContents);

  return {
    page: {
      home: pageContents.home,
      about: pageContents.about,
    },
    projects: projectContents,
  }
}
