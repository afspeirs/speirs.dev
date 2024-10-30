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

<Card>
  <h2 class="mb-2">{data.metadata.title}</h2>
  <ProjectDetails post={data.metadata} />
</Card>

<Card class="space-y-4 [&_a]:underline [&_a]:text-primary">
  <Content />
</Card>
