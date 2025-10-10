<script lang="ts">
  import type { Icon as IconType } from 'lucide-svelte';
  import type { Snippet } from 'svelte';

  import type { ResolvedPathname } from '$app/types';
  import { classNames } from '$lib/utils/classNames';
  import type { AriaAttributes } from 'svelte/elements';

  interface ButtonBase {
    children?: Snippet;
    class?: string;
    icon?: typeof IconType;
    iconOnly?: boolean;
    invert?: boolean;
    text: string;
  }

  interface ButtonClickProps extends ButtonBase {
    current?: never,
    href?: never;
    onclick: () => void;
  }

  interface ButtonLinkProps extends ButtonBase {
    current?: AriaAttributes['aria-current'],
    href: ResolvedPathname;
    onclick?: never;
  }

  let {
    children,
    class: className = '',
    current,
    href,
    icon: Icon,
    iconOnly = false,
    invert = false,
    onclick,
    text,
  }: ButtonClickProps | ButtonLinkProps = $props();
</script>

{#if href}
  <a
    class={classNames(
      'block',
      'p-2 rounded-md cursor-pointer focus-visible ring-inset focus-outline-inset-invert',
      invert ? 'hover:bg-black/20' : 'hover:bg-tertiary hover:text-white dark:hover:text-dark-1',
      !iconOnly && 'flex items-center gap-2 text-sm text-dark-1 dark:text-white',
      className,
    )}
    {href}
    aria-current={current}
  >
    {#if Icon}
      <Icon class="size-5" aria-hidden="true" />
    {/if}

    <span class={iconOnly ? 'sr-only' : undefined}>{text}</span>

    {#if children}
      {@render children()}
    {/if}
  </a>
{:else}
  <button
    class={classNames(
      'p-2 text-sm rounded-md cursor-pointer focus-visible ring-inset focus-outline-inset-invert',
      invert ? 'hover:bg-black/20' : 'hover:bg-primary hover:text-light-1',
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
{/if}
