<script lang="ts">
  import type { PostInterface } from '$lib/types/post';
  import { sortFunction } from '$lib/utils';

  const sortPostsItems = [
    { text: 'Date Created (Newest First)', value: 'date-created-asc' },
    { text: 'Date Created (Oldest First)', value: 'date-created-dsc' },
    { text: 'Title (A-Z)', value: 'slug-asc' },
    { text: 'Title (Z-A)', value: 'slug-dsc' },
  ];

  export let filterBy = sortPostsItems[0].value;
  export let posts: PostInterface[];

  $: posts = posts.sort(sortFunction[filterBy]);
</script>

<div class="filter-posts no-js--hidden">
  <label for="id_select">Filter by:</label>
  <select id="id_select" bind:value={filterBy}>
    {#each sortPostsItems as item}
      <option value={item.value}>{item.text}</option>
    {/each}
  </select>
</div>

<style>
  .filter-posts {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    margin-bottom: 16px;
  }
</style>
