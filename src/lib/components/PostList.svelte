<script lang="ts">
  import type { Project } from '$lib/types';
  import { formatDate } from '$lib/utils';

  type PostListProps = {
    posts: Partial<Project>[],
  };

  let { posts }: PostListProps = $props();
</script>

<ul role="list" class="divide-y divide-tertiary">
  {#each posts as post (post.slug)}
    <li>
      <a class="block hover:bg-tertiary focus-outline-inset" href={`/${post.url}`}>
        <div class="flex flex-col p-4">
          <div class="flex justify-between items-center">
            <h3>{post.title}</h3>
            {#if post.date}
              <time datetime={post.date} class="text-secondary">
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
