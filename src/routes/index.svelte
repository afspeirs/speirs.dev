<script lang="ts">
  import type { PostInterface } from '$lib/types/post';
  import Card from '$lib/components/Card.svelte';
  import ProjectList from '$lib/components/ProjectList.svelte';
  import Section from '$lib/components/Section.svelte';

  export let about: PostInterface;
  export let home: PostInterface;
  export let projects: PostInterface[];
</script>

<svelte:head>
  <title>AFSpeirs</title>
</svelte:head>

<Section id="home">
  <Card title={home.metadata.title} content={home.html} />
</Section>

<Section id="projects" title="Projects">
  <Card>
    <ProjectList posts={projects} />
  </Card>
</Section>

<Section id="about" title={about.metadata.title}>
  <Card content={about.html} />
</Section>
