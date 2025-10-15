<script lang="ts">
  import { resolve } from '$app/paths';
  import type { Pathname } from '$app/types';
  import type { Project, Tag } from '$lib/types';
  import { formatDate } from '$lib/utils';

  type PostListProps = {
    posts: (Project | Tag)[],
  };

  let { posts }: PostListProps = $props();
</script>

<ul role="list" class="divide-y divide-light-2 dark:divide-dark-2">
  {#each posts as post (post.slug)}
    <li>
      <a class="block hover:bg-light-2 dark:hover:bg-dark-2 focus-outline-inset" href={resolve(`/${post.url}` as Pathname)}>
        <div class="flex flex-col p-4">
          <div class="flex justify-between items-center">
            <h3>{post.title}</h3>
            {#if post.type === 'project' && post.date}
              <time datetime={post.date} class="text-secondary dark:text-tertiary">
                {formatDate({ date: post.date, options: { year: 'numeric' } })}
              </time>
            {/if}
          </div>
          {#if post.type === 'project' && post.description}
            <div>
              {post.description}
            </div>
          {/if}
        </div>
      </a>
    </li>
  {/each}
</ul>
