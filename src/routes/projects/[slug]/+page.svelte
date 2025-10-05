<script lang="ts">
  import BackButton from '$lib/components/BackButton.svelte';
  import Card from '$lib/components/Card.svelte';
  import ProjectDetails from '$lib/components/ProjectDetails.svelte';

  let { data } = $props();

  const Content = $derived(data.content);
</script>

<svelte:head>
  <title>{data.metadata.title} | Projects | AFSpeirs</title>
</svelte:head>

<BackButton />

<ProjectDetails post={data.metadata} />

<Card class="space-y-4 [&_a]:text-primary dark:[&_a]:text-tertiary [&_a]:hover:text-dark-1 dark:[&_a]:hover:text-light [&_a]:underline [&_a]:focus-outline">
  <Content />
</Card>
