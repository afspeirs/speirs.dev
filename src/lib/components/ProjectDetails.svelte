<script lang="ts">
  import { resolve } from '$app/paths';
  import Card from '$lib/components/Card.svelte';
  import GithubCorner from '$lib/components/GithubCorner.svelte';
  import type { Project } from '$lib/types';
  import { formatDate, toKebabCase } from '$lib/utils';

  type ProjectDetailsProps = {
    post: Project,
  };

  let { post }: ProjectDetailsProps = $props();
</script>

<Card>
  {#if post.github}
    <GithubCorner project={post.github} />
  {/if}

  <h2 class="mb-2">{post.title}</h2>

  <small>Project Started: <time class="text-primary dark:text-tertiary" datetime={post.date?.toString()}>{formatDate({ date: post.date })}</time></small>

  {#if post.tags}
    <div class="flex flex-wrap gap-2 my-2 text-base">
      {#each post.tags as tag (tag)}
        <a
          class="px-3 py-1 bg-secondary text-white rounded-full hover:opacity-80 focus-outline"
          href={resolve(`/tags/${toKebabCase(tag)}`)}
        >
          {tag}
        </a>
      {/each}
    </div>
  {/if}

  <p>{post.description}</p>

  {#if post.link}
    <p class="mt-4">To view the app, visit <a class="text-primary dark:text-tertiary hover:text-dark-1 dark:hover:text-light underline focus-outline" href="https://{post.link}" target="_blank" rel="noopener noreferrer">{post.link}</a>.</p>
  {/if}
</Card>
