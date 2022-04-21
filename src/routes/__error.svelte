<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export function load({ error, status }) {
    return {
      props: {
        error,
        status,
      },
    };
  }
</script>

<script lang="ts">
  import { dev } from '$app/env';
  import Card from '$lib/components/Card.svelte';

  export let status: string;
  export let error: Error;
</script>

<svelte:head>
  <title>{status} - {error.message}</title>
</svelte:head>

<Card title={status}>
  <p>{error.message}</p>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</Card>

<style>
  pre {
    overflow-x: auto;
  }
</style>
