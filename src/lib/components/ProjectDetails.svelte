<script lang="ts">
  import type { Project } from '$lib/types';
  import GithubCorner from '$lib/components/GithubCorner.svelte';
  import { formatDate, toKebabCase } from '$lib/utils';

  type ProjectDetailsProps = {
    post: Project,
  };

  let { post }: ProjectDetailsProps = $props();
</script>

{#if post.github}
  <GithubCorner project={post.github} />
{/if}

<small>Project Started: <time class="text-primary" datetime={post.date?.toString()}>{formatDate({ date: post.date })}</time></small>

{#if post.tags}
  <div class="flex flex-wrap gap-2 my-2 text-base">
    {#each post.tags as tag (tag)}
      <a
        class="px-3 py-1 bg-secondary text-white rounded-full hover:opacity-80 focus-outline"
        href="/tags/{toKebabCase(tag)}"
      >
        {tag}
      </a>
    {/each}
  </div>
{/if}

<p>{post.description}</p>

{#if post.link}
  <p class="mt-4">To view the app, visit <a class="text-primary underline focus-outline" href="https://{post.link}" target="_blank" rel="noopener noreferrer">{post.link}</a>.</p>
{/if}
