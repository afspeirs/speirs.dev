import type { PostInterface } from '$lib/types/post';

interface SortFunctionsInterface {
  [key: string]: (a: PostInterface, b: PostInterface) => number,
}

const sortFunction: SortFunctionsInterface = {
  'date-created-asc': (a: PostInterface, b: PostInterface) => {
    const x = a.date?.toString();
    const y = b.date?.toString();

    if (x && y && x !== y) return (Date.parse(x) < Date.parse(y.toString())) ? 1 : -1;
    return 0;
  },
  'date-created-dsc': (a: PostInterface, b: PostInterface) => {
    const x = a.date?.toString();
    const y = b.date?.toString();
    if (x && y && x !== y) return (Date.parse(x) > Date.parse(y.toString())) ? 1 : -1;
    return 0;
  },
  'slug-asc': (a: PostInterface, b: PostInterface) => a.slug.localeCompare(b.slug),
  'slug-dsc': (a: PostInterface, b: PostInterface) => b.slug.localeCompare(a.slug),
};

export default sortFunction;
