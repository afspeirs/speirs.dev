<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import PostList from '$lib/components/PostList.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>AFSpeirs</title>
</svelte:head>

<section id="home">
  <Card class="space-y-2">
    <h2 class="mb-4">Andrew Speirs</h2>

    <p>Hello there! Welcome to my portfolio.</p>
    <p>I am a web developer specialising in front-end development. This portfolio is a curated collection of my projects, designed to give you a clear insight into my skills and expertise.</p>
  </Card>
</section>

<section id="projects">
  <Card>
    <h2 class="mb-4">Projects</h2>

    <PostList posts={data.projects} />
  </Card>
</section>
