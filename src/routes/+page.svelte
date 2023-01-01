<script lang="ts">
  import type { PostInterface } from '$lib/types/post';
  import Card from '$lib/components/Card.svelte';
  import ProjectList from '$lib/components/ProjectList.svelte';
  import Section from '$lib/components/Section.svelte';

  export let data: PostInterface[];

  // console.log(data);
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
