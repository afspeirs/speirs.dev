<script type="ts">
  import type { PostInterface } from '$lib/types/post';
  import Card from '$lib/components/Card.svelte';
  import Section from '$lib/components/Section.svelte';

  export let about: PostInterface;
</script>

<svelte:head>
  <title>About | AFSpeirs</title>
</svelte:head>

<Section>
  <Card title={about.metadata.title} content={about.html} />
</Section>
