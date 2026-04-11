<script lang="ts">
  import { page } from '$app/state';
  import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
  <title>{page.status}: {page.error?.message} | AFSpeirs</title>
</svelte:head>

<Card>
  <h1>{page.status}</h1>
  <p>{page.error?.message}</p>
</Card>
