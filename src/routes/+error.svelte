<script>
  import { page } from '$app/stores';
  import Card from '$lib/components/Card.svelte';
</script>

<svelte:head>
  <title>{$page.status}: {$page.error?.message}</title>
</svelte:head>

<Card title={$page.status.toString()}>
  <p>{$page.error?.message}</p>
</Card>
