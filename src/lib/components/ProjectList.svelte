<script lang="ts">
  import type { PostInterface } from '$lib/types/post';
  import { formatDate } from '$lib/utils';

  export let posts: PostInterface[];
</script>

<ul class="project-list">
  {#each posts as post}
    <li>
      <a class="link" href={`${post.path}`}>
        <div class="item">
          <div class="row-1">
            <h3>{post.metadata.title}</h3>
            {#if post.date}
              <time datetime={post.date.toString()}>{formatDate({ date: post.date, format: 'YYYY' })}</time>
            {/if}
          </div>
          {#if post.metadata.description}
            <div>
              {post.metadata.description}
            </div>
          {/if}
        </div>
      </a>
    </li>
  {/each}
</ul>

<style>
  .project-list {
    margin: 0;
    padding: 0;
  }
  li {
    position: relative;
    list-style: none;
  }
  li + li {
    padding-top: 1px;
  }
  li + li:before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background: var(--clr-tertiary);
  }

  h3 {
    margin: 0;
  }

  .item {
    display: flex;
    flex-direction: column;
    padding: 16px;
  }
  .row-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .link {
    display: block;
    color: inherit;
    text-decoration: inherit;
  }
  .link:hover {
    background-color: var(--clr-tertiary);
  }
  .link:focus-visible {
    outline: 4px solid var(--clr-secondary);
    outline-offset: -4px;
  }
</style>
