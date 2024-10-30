<script lang="ts">
  import type { Snippet } from 'svelte';

  type CardProps = {
    children: Snippet;
    class?: string;
  };

  const {
    children,
    class: className = '',
  }: CardProps = $props();
</script>

<div class="relative bg-white shadow rounded-lg overflow-hidden p-8 {className}">
  {@render children()}
</div>
