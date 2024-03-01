<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import PostList from '$lib/components/PostList.svelte';

  export let data;
</script>

<svelte:head>
  <title>Projects | AFSpeirs</title>
</svelte:head>

<Card>
  <h2 class="mb-4">Projects</h2>
  <p>Below are several web projects I have created</p>
</Card>

<Card>
  <PostList posts={data.projects} />
</Card>
