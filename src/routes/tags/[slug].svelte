<script lang="ts">
  import type { PostInterface } from '$lib/types/post';
  import BackButton from '$lib/components/BackButton.svelte';
  import Card from '$lib/components/Card.svelte';
  import ProjectList from '$lib/components/ProjectList.svelte';
  import Section from '$lib/components/Section.svelte';

  export let post: PostInterface;
  export let projects: PostInterface[];
</script>

<svelte:head>
  <title>{post.metadata.title} | Tags | AFSpeirs</title>
</svelte:head>

<BackButton page="Tags" />

<Section>
  <Card title={post.metadata.title}>
    <ProjectList posts={projects} />
  </Card>
</Section>
