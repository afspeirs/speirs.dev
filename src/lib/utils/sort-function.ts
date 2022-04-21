import type { PostInterface } from '$lib/types/post';

// eslint-disable-next-line no-unused-vars
type SortFunctionInterface = (a: PostInterface, b: PostInterface) => number;

interface SortFunctionsInterface {
  [key: string]: SortFunctionInterface;
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
