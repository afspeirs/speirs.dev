<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import ProjectList from '$lib/components/ProjectList.svelte';
  import Section from '$lib/components/Section.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>AFSpeirs</title>
</svelte:head>

<Section id="home">
  <Card title={data.page.home.metadata.title}>
    <svelte:component this={data.page.home.content} />
  </Card>
</Section>

<Section id="projects" title="Projects">
  <Card>
    <ProjectList posts={data.projects} />
  </Card>
</Section>

<Section id="about" title={data.page.about.metadata.title}>
  <Card>
    <svelte:component this={data.page.about.content} />
  </Card>
</Section>
