import type { PostInterface } from '$lib/types/post';
import { toKebabCase } from '$lib/utils'

export async function load({ params }) {
  const response = await fetch(`/api/projects`);
  const allPosts = await response.json();

  const projects = allPosts.filter((post: PostInterface) => post.metadata.tags?.map((tag: string) => toKebabCase(tag)).includes(params.slug));

  return {
    projects,
    tag: {
      metadata: {
        title: params.slug,
      },
      slug: toKebabCase(params.slug),
      path: `tags/${toKebabCase(params.slug)}`,
    },
  }
}

// import {
//   getAllContentFromGlob,
//   getAllTags,
//   toKebabCase,
// } from '$lib/utils';

// /** @type {import('./[slug]').RequestHandler} */
// export async function get({ params }) {
//   const { slug } = params;

//   const projectFiles = import.meta.glob('$content/projects/*.md');
//   const projectContents = await getAllContentFromGlob(projectFiles);

//   const projects = projectContents.filter((post) => {
//     const array = post.metadata.tags.map((tag: string) => toKebabCase(tag));
//     return array.includes(slug);
//   });

//   // console.log(projects);

//   const allTags = await getAllTags();

//   const currentTag = allTags.find((tag) => tag.slug === slug);
//   // const projects = getProjectByTag(slug);

//   // console.log(currentTag);

//   return {
//     body: {
//       post: currentTag,
//       projects,
//     },
//   };
// }
