<script lang="ts" module>
  export const style = {
    base: 'peer/button not-disabled:cursor-pointer rounded-md select-none disabled:opacity-40 disabled:pointer-events-none focus-outline',
    iconOnly: 'block p-2',
    withText: 'flex items-center gap-3 px-3 py-2',
  };

  export const styleTextColour = {
    base: 'text-dark-1 dark:text-light-1',
    inverted: 'text-light-1 dark:text-dark-1',
    dark: 'text-dark-1',
    light: 'text-light-1',
  };

  export const styleBackgroundColour = {
    active: 'bg-gray-200 hover:bg-gray-300 dark:bg-neutral-700/60 dark:hover:bg-neutral-700',
    base: 'hover:bg-gray-300 dark:hover:bg-neutral-700',
    dark: 'hover:bg-black/20',
    inverted: 'hover:bg-neutral-700 dark:hover:bg-gray-300',
    primary: 'bg-primary hover:bg-secondary',
    primaryOutline: 'hover:text-light-1 hover:bg-secondary',
  };
</script>

<script lang="ts">
  import type { IconProps, Icon as IconType } from '@lucide/svelte';
  import type { Component, Snippet } from 'svelte';
  import type { ClassValue, HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

  import type { ResolvedPathname } from '$app/types';
  import { classNames } from '$lib/utils/classNames';

  interface ButtonBase {
    children?: Snippet;
    class?: ClassValue | null;
    icon?: Component<IconProps> | typeof IconType;
    iconProps?: IconProps;
    iconOnly?: boolean;
    styleBackground?: keyof typeof styleBackgroundColour;
    styleText?: keyof typeof styleTextColour;
    text: string;
  }

  interface ButtonProps extends ButtonBase, HTMLButtonAttributes {
    href?: never;
    onclick: (event: MouseEvent) => void;
  }

  interface LinkProps extends ButtonBase, HTMLAnchorAttributes {
    href: ResolvedPathname | `https://${string}`;
    onclick?: never;
  }

  const {
    children,
    class: className = '',
    href,
    icon: Icon,
    iconProps = {
      class: 'size-5 shrink-0',
    },
    iconOnly,
    onclick,
    styleBackground = 'base',
    styleText = 'base',
    text,
    ...restProps
  }: ButtonProps | LinkProps = $props();

  const tag = href ? 'a' : 'button';
  const externalHref = href?.startsWith('https://');
  const attrs = href
    ? {
      href,
      target: externalHref ? '_blank' : undefined,
      rel: externalHref ? 'noopener noreferrer' : undefined,
      ...restProps,
    }
    : {
      onclick,
      type: 'button' as const,
      ...restProps,
    };

  const finalClass = classNames(
    iconOnly ? style.iconOnly : style.withText,
    styleBackgroundColour[styleBackground],
    styleTextColour[styleText],
    style.base,
    className as string,
  );
</script>

<svelte:element
  this={tag}
  class={finalClass}
  {...attrs}
>
  {#if Icon}
    <Icon {...iconProps} aria-hidden="true" />
  {/if}

  <span class={iconOnly ? 'sr-only' : 'truncate'}>
    {text}
  </span>

  {@render children?.()}
</svelte:element>
