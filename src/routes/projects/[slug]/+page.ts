import { getProjects } from '$lib/content';
import type { Project } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { Snippet } from 'svelte';

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
  const projects = await getProjects();
  return projects;
}

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  try {
    const post = await import(`../../../content/projects/${params.slug}.md`);

    return {
      content: post.default as Snippet,
      metadata: post.metadata as Project,
    };
  } catch (e) {
    throw error(404, `Could not find ${params.slug}, ${e}`);
  }
}
