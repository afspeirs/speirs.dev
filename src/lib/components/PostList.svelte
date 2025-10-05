<script lang="ts">
  import { resolve } from '$app/paths';
  import type { Pathname } from '$app/types';
  import type { Project } from '$lib/types';
  import { formatDate } from '$lib/utils';

  type PostListProps = {
    posts: Project[],
  };

  let { posts }: PostListProps = $props();
</script>

<ul role="list" class="divide-y divide-light dark:divide-dark-1">
  {#each posts as post (post.slug)}
    <li>
      <a class="block hover:bg-light dark:hover:bg-dark-1 focus-outline-inset" href={resolve(`/${post.url}` as Pathname)}>
        <div class="flex flex-col p-4">
          <div class="flex justify-between items-center">
            <h3>{post.title}</h3>
            {#if post.date}
              <time datetime={post.date} class="text-tertiary">
                {formatDate({ date: post.date, options: { year: 'numeric' } })}
              </time>
            {/if}
          </div>
          {#if post.description}
            <div>
              {post.description}
            </div>
          {/if}
        </div>
      </a>
    </li>
  {/each}
</ul>
