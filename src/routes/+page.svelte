<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import PostList from "$lib/components/PostList.svelte";

  export let data;
</script>

<section id="home">
  <Card class="text-xl text-center space-y-4">
    <h2>Andrew Speirs</h2>
    <p>Hello there!</p>
    <p>I make things for the web, check them out below.</p>
  </Card>
</section>

<section id="projects">
  <h2 class="mb-4">Projects</h2>

  <Card>
    <PostList posts={data.projects} />
  </Card>
</section>

<section id="about">
  <h2 class="mb-4">About Me</h2>

  <Card class="space-y-4">
    <p>My name is Andrew Speirs.</p>
    <p>The purpose of this website was to create something without utilising any frameworks. I have also used it to showcase all of the projects I have started.</p>
    <p>This also serves a motivation for me to continue making projects because now I finally have a place to showcase them.</p>
  </Card>
</section>
