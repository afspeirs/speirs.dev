<script lang="ts">
  import BackButton from '$lib/components/BackButton.svelte';
  import Card from '$lib/components/Card.svelte';
  import ProjectDetails from '$lib/components/ProjectDetails.svelte';
  import Section from '$lib/components/Section.svelte';

  export let data;
</script>

<svelte:head>
  <title>{data.page.metadata.title} | Projects | AFSpeirs</title>
</svelte:head>

<BackButton />

<Section>
  <Card title={data.page.metadata.title}>
    <ProjectDetails post={data.page} />
  </Card>
</Section>

<Section>
  <Card>
    <svelte:component this={data.page.content} />
  </Card>
</Section>
