<script lang="ts">
  import type { PostInterface } from '$lib/types/post';
  import BackButton from '$lib/components/BackButton.svelte';
  import Card from '$lib/components/Card.svelte';
  import ProjectDetails from '$lib/components/ProjectDetails.svelte';
  import Section from '$lib/components/Section.svelte';

  export let post: PostInterface;
</script>

<svelte:head>
  <title>{post.metadata.title} | Projects | AFSpeirs</title>
</svelte:head>

<BackButton page="Projects" />

<Section>
  <Card title={post.metadata.title}>
    <ProjectDetails post={post} />
  </Card>
</Section>

<Section>
  <Card content={post.html} />
</Section>
