<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import Section from '$lib/components/Section.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>About | AFSpeirs</title>
</svelte:head>

<Section>
  <Card title={data.page.metadata.title}>
    <svelte:component this={data.page.content} />
  </Card>
</Section>
