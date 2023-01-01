<script lang="ts">
  import BackButton from '$lib/components/BackButton.svelte';
  import Card from '$lib/components/Card.svelte';
  import ProjectList from '$lib/components/ProjectList.svelte';
  import Section from '$lib/components/Section.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>{data.tag.metadata.title} | Tags | AFSpeirs</title>
</svelte:head>

<BackButton />

<Section>
  <Card title={data.tag.metadata.title}>
    <ProjectList posts={data.projects} />
  </Card>
</Section>
