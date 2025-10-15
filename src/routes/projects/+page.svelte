<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import PostList from '$lib/components/PostList.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>Projects | AFSpeirs</title>
</svelte:head>

<Card class="space-y-4">
  <h2>Projects</h2>
  <p>This collection of projects showcases my journey as a frontend developer, from creative experiments to practical, user-focused utilities. Each project represents a unique challenge I was excited to solve, with a focus on creating a clean and intuitive user experience.</p>
</Card>

<Card>
  <PostList posts={data.projects} />
</Card>
