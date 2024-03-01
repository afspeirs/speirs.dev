<script lang="ts">
  import BackButton from '$lib/components/BackButton.svelte';
  import Card from '$lib/components/Card.svelte';
  import PostList from '$lib/components/PostList.svelte';

  export let data;
</script>

<svelte:head>
  <title>{data.tag.title} | Tags | AFSpeirs</title>
</svelte:head>

<BackButton />

<Card>
  <h2 class="mb-4">{data.tag.title}</h2>
  <PostList posts={data.projects} />
</Card>
