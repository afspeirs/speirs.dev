<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import ProjectList from '$lib/components/ProjectList.svelte';
  import FilterPosts from '$lib/components/FilterPosts.svelte';
  import Section from '$lib/components/Section.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>Projects | AFSpeirs</title>
</svelte:head>

<Section>
  <Card title={data.page.metadata.title}>
    <svelte:component this={data.page.content} />
  </Card>
</Section>

<Section>
  <Card>
    <FilterPosts bind:posts={data.projects} />
    <ProjectList posts={data.projects} />
  </Card>
</Section>
