<script lang="ts">
  import type { PostInterface } from '$lib/types/post';
  import Card from '$lib/components/Card.svelte';
  import ProjectList from '$lib/components/ProjectList.svelte';
  import Section from '$lib/components/Section.svelte';

  export let page: PostInterface;
  export let tags: PostInterface[];
</script>

<svelte:head>
  <title>{page.metadata.title} | AFSpeirs</title>
</svelte:head>

<Section>
  <Card title={page.metadata.title} content={page.html} />
</Section>

<Section>
  <Card>
    <ProjectList posts={tags} />
  </Card>
</Section>
