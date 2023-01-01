<script lang="ts">
  import type { PostInterface } from '$lib/types/post';
  import GithubCorner from '$lib/components/GithubCorner.svelte';
  import { formatDate, toKebabCase } from '$lib/utils';

  export let post: PostInterface;
</script>

{#if post.metadata.github}
  <GithubCorner project={post.metadata.github} />
{/if}

<small>Project Started: <time datetime={post.metadata.date?.toString()}>{formatDate({ date: post.metadata.date, format: 'DD/MM/YYYY' })}</time></small>
{#if post.metadata.tags}
  <small class="tags">
    {#each post.metadata.tags as tag}
      <a href="/tags/{toKebabCase(tag)}">{tag}</a>
    {/each}
  </small>
{/if}

<p>{post.metadata.description}</p>

{#if post.metadata.link}
  <p>To view the app, visit <a href="https://{post.metadata.link}" target="_blank" rel="noopener noreferrer">{post.metadata.link}</a>.</p>
{/if}

<style>
  .tags {
    display: block;
    margin-top: 12px;
  }
  .tags a {
    margin-right: 8px;
    padding: 4px 12px;
    background: var(--clr-secondary);
    color: var(--clr-background);
    border-radius: 16px;
    text-decoration: none;
  }
  .tags a:hover {
    opacity: 0.8;
  }
  .tags a:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px var(--clr-background),
                0 0 0 6px var(--clr-secondary);
  }
</style>
