import type { Project } from '$lib/types.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  try {
    const post = await import(`../../../content/projects/${params.slug}.md`);

    return {
      content: post.default,
      metadata: post.metadata as Project,
    };
  } catch (e) {
    throw error(404, `Could not find ${params.slug}, ${e}`);
  }
}
