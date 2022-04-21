<script lang="ts">
  import type { PostInterface } from '$lib/types/post';
  import Card from '$lib/components/Card.svelte';
  import ProjectList from '$lib/components/ProjectList.svelte';
  import FilterPosts from '$lib/components/FilterPosts.svelte';
  import Section from '$lib/components/Section.svelte';

  export let page: PostInterface;
  export let projects: PostInterface[];
</script>

<svelte:head>
  <title>Projects | AFSpeirs</title>
</svelte:head>

<Section>
  <Card title={page.metadata.title} content={page.html} />
</Section>

<Section>
  <Card>
    <FilterPosts bind:posts={projects} />
    <ProjectList posts={projects} />
  </Card>
</Section>
