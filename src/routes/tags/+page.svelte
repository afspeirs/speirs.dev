<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import ProjectList from '$lib/components/ProjectList.svelte';
  import Section from '$lib/components/Section.svelte';

  export let data;
</script>

<svelte:head>
  <title>{data.page.metadata.title} | AFSpeirs</title>
</svelte:head>

<Section>
  <Card title={data.page.metadata.title}>
    <svelte:component this={data.page.content} />
  </Card>
</Section>

<Section>
  <Card>
    <ProjectList posts={data.tags} />
  </Card>
</Section>
