import { json } from '@sveltejs/kit';
import { getAllTags } from '$lib/utils'
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  const allTags = await getAllTags();

  return json(allTags);
}
