import type { PostInterface } from '$lib/types/post';
import { sortFunction } from '$lib/utils';

const getAllContentFromGlob = async (glob: object) => {
  const allContent = await Promise.all(Object.values(glob).map(async (value) => {
    const { default: post } = await value();
    const pageName = post.filename.replace(/\.md$/, '');

    const page = {
      ...post,
      date: post.metadata.date ? new Date(post.metadata.date) : null,
      slug: pageName,
      path: post.path.split('content').pop().replace(/\.md$/, ''),
    };

    // console.log(page);

    return page;
  }));

  return allContent
    .filter((item: PostInterface) => !item.metadata.hidden)
    .sort(sortFunction['date-created-dsc']);
};

export default getAllContentFromGlob;
