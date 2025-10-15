<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import PostList from '$lib/components/PostList.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>Tags | AFSpeirs</title>
</svelte:head>

<Card class="space-y-4">
  <h2>Tags</h2>
  <p>Looking for a specific skill? The tags below represent the key technologies used across my portfolio. Select a tag to explore the projects where it was implemented.</p>
</Card>

<Card>
  <PostList posts={data.tags} />
</Card>
