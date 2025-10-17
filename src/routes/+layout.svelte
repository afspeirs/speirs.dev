<script lang="ts">
  import '@fontsource-variable/work-sans';
  import '@fontsource/mada/700.css';

  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import { theme } from '$lib/context/theme.svelte';
  import '../app.css';
  import '../webmanifest-apple';

  let { children } = $props();

  $effect(() => {
    document.documentElement.setAttribute('data-theme', theme.system);
  });
</script>

<svelte:head>
  <meta name="version" content={import.meta.env.APP_VERSION}>
</svelte:head>

<Header />

<main class="relative flex flex-col flex-1 gap-section px-4 pb-section mx-auto mb-8 w-full max-w-4xl">
  <div id="start" class="flex sticky top-0 h-section -mb-section z-10 bg-light-1 dark:bg-black">
    <Breadcrumbs />
  </div>

  {@render children()}
</main>

<Footer />
