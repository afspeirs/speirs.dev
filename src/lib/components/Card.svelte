<script lang="ts">
  import type { Snippet } from 'svelte';

  type CardProps = {
    children: Snippet;
    class?: string;
  };

  let {
    children,
    class: className = '',
  }: CardProps = $props();
</script>

<div class="relative bg-white dark:bg-dark-1 rounded-lg overflow-hidden p-8 {className}">
  {@render children()}
</div>
