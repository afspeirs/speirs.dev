import { formatDate } from '$lib/utils';

/** @type {import('./$types').PageLoad} */
export async function load() {
  return {
    date: formatDate({ options: { year: 'numeric' }}),
  };
}

export const prerender = true;
export const ssr = false;
