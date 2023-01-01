import type { PostInterface } from '$lib/types/post';
import { sortFunction } from '$lib/utils';

async function getAllContentFromGlob(glob: object) {
  const allContent: PostInterface[] = await Promise.all(
    Object.entries(glob).map(async ([path, resolver]) => {
      const { default: content, metadata } = await resolver();

      const page = {
        content,
        metadata,
        date: metadata.date ? new Date(metadata.date) : undefined,
        slug: path.replace(/\/(?:[\w-]+\/)*/gm, '').replace(/\.md$/, ''),
        path: path.split('content').pop().replace(/\.md$/, ''),
      };

      // console.log(page);

      return page;
    })
  );

  return allContent
    .filter((item: PostInterface) => !item.metadata.hidden)
    .sort(sortFunction['date-created-asc']);
}

export default getAllContentFromGlob;
