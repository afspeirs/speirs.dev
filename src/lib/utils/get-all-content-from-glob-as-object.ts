import type { PostInterface } from '$lib/types/post';
import { getAllContentFromGlob } from '$lib/utils';

interface AllContentInterface {
  [key: string]: PostInterface,
}

const getAllContentFromGlobAsObject = async (glob: object) => {
  const allContentAsArray = await getAllContentFromGlob(glob);
  const allContentAsObject: AllContentInterface = {};

  allContentAsArray.forEach((content: PostInterface) => {
    allContentAsObject[content.slug as keyof AllContentInterface] = content;
  });

  // console.log(allContentAsArray);

  return allContentAsObject;
};

export default getAllContentFromGlobAsObject;
