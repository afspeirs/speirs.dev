import type { PostInterface, TagInterface } from '$lib/types/post';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const responsePosts = await fetch(`/api/projects`);
  const allPosts: PostInterface[] = await responsePosts.json();

  const responseTags = await fetch(`/api/tags`);
  const allTags: TagInterface[] = await responseTags.json();

  const currentTag = allTags.find((tag) => tag.slug === params.slug);
  console.log(currentTag);

  const projects = allPosts.filter((post) => post.metadata.tags?.includes(currentTag?.metadata.title ?? ''));

  return {
    projects,
    tag: currentTag,
  }
}
