import { formatDate } from '$lib/utils/formatDate.js';

/** @type {import('./$types').PageLoad} */
export async function load() {
  return {
    date: formatDate({ options: { year: 'numeric' }}),
  };
}

export const prerender = true;
