<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import PostList from '$lib/components/PostList.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.metadata.title} | Tags | AFSpeirs</title>
</svelte:head>

<Card>
  <h2 class="mb-4">{data.metadata.title}</h2>
  <PostList posts={data.projects} />
</Card>
