<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import PostList from '$lib/components/PostList.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>Tags | AFSpeirs</title>
</svelte:head>

<Card>
  <h2 class="mb-4">Tags</h2>
  <p>Below are the tags used across of the projects I have created.</p>
</Card>

<Card>
  <PostList posts={data.tags} />
</Card>
