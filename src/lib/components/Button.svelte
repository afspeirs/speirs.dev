<script lang="ts">
  import type { IconProps, Icon as IconType } from 'lucide-svelte';
  import type { Component, Snippet } from 'svelte';

  import type { ResolvedPathname } from '$app/types';
  import { classNames } from '$lib/utils/classNames';
  import type { AriaAttributes } from 'svelte/elements';

  interface ButtonBase {
    children?: Snippet;
    class?: string;
    icon?: Component<IconProps> | typeof IconType;
    iconProps?: IconProps;
    iconOnly?: boolean;
    invert?: boolean;
    text: string;
  }

  interface ButtonClickProps extends ButtonBase {
    current?: never;
    href?: never;
    onclick: () => void;
  }

  interface ButtonLinkProps extends ButtonBase {
    current?: AriaAttributes['aria-current'];
    href: ResolvedPathname | `https://${string}`;
    onclick?: never;
  }

  let {
    children,
    class: className = '',
    current,
    href,
    icon: Icon,
    iconProps = {
      class: 'size-5',
    },
    iconOnly = false,
    invert = false,
    onclick,
    text,
  }: ButtonClickProps | ButtonLinkProps = $props();

  const tag = href ? 'a' : 'button';
  const externalHref = href ? href?.startsWith('https://') : undefined;
  const attrs = href
    ? {
      href,
      'aria-current': current,
      target: externalHref ? '_blank' : undefined,
      rel: externalHref ? 'noopener noreferrer' : undefined,
    }
    : {
      onclick,
      type: 'button' as const,
    };

  const finalClass = classNames(
    'p-2 rounded-md cursor-pointer focus-visible ring-inset focus-outline-inset-invert',
    invert ? 'hover:bg-black/20' : 'hover:bg-tertiary hover:text-white dark:hover:text-dark-1',
    iconOnly ? 'block' : 'flex items-center gap-2 text-sm text-dark-1 dark:text-white',
    className,
  );
</script>

<svelte:element this={tag} class={finalClass} {...attrs}>
  {#if Icon}
    <Icon {...iconProps} aria-hidden="true" />
  {/if}

  <span class:sr-only={iconOnly}>
    {text}
  </span>

  {#if children}
    {@render children()}
  {/if}
</svelte:element>
