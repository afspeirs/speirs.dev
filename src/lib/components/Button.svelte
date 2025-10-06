<script lang="ts">
  import type { Icon as IconType } from 'lucide-svelte';
  import type { Snippet } from 'svelte';

  import { classNames } from '$lib/utils/classNames';

  type ButtonProps = {
    children?: Snippet;
    class?: string;
    icon?: typeof IconType;
    iconOnly?: boolean;
    invert?: boolean;
    onclick: () => void;
    text: string;
  };

  const {
    children,
    class: className = '',
    icon: Icon,
    iconOnly = false,
    invert = false,
    onclick,
    text,
  }: ButtonProps = $props();
</script>

<button
  class={classNames(
    'p-2 text-sm rounded-md cursor-pointer focus-visible ring-inset focus-outline-inset-invert',
    invert ? 'hover:bg-black/20' : 'hover:bg-black/5 dark:hover:bg-white/5',
    !iconOnly && 'flex items-center gap-2 text-gray-900 dark:text-white',
    className,
  )}
  {onclick}
>
  {#if Icon}
    <Icon class="size-5" aria-hidden="true" />
  {/if}

  <span class={iconOnly ? 'sr-only' : undefined}>{text}</span>

  {#if children}
    {@render children()}
  {/if}
</button>
