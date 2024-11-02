<script lang="ts">
  import '@fontsource-variable/work-sans';
  import '@fontsource/mada/700.css';

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';
  import '../webmanifest-apple';

  let { children, data } = $props();
</script>

<div class="flex flex-col absolute inset-0">
  <Header />

  <main class="relative flex flex-col flex-1 gap-section px-4 mx-auto mb-section w-full max-w-4xl">
    {@render children()}
  </main>

  <Footer date={data.date} />
</div>
