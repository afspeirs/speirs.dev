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
  import type { LucideIcon, LucideProps } from '@lucide/svelte';
  import type { Snippet } from 'svelte';
  import type { ClassValue, HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

  import type { Path, ResolvedPathname } from '$app/types';
  import { classNames } from '#lib/utils/classNames.js';

  interface ButtonBase {
    children?: Snippet;
    class?: ClassValue | null;
    icon?: LucideIcon;
    iconProps?: LucideProps;
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
    href: Path | ResolvedPathname | `https://${string}`;
    onclick?: never;
  }

  let {
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

  const tag = $derived(href ? 'a' : 'button');
  const externalHref = $derived(href?.startsWith('https://'));
  // eslint-disable-next-line @stylistic/no-extra-parens
  const attrs = $derived.by(() => (href
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
    }));

  const finalClass = $derived(classNames(
    iconOnly ? style.iconOnly : style.withText,
    styleBackgroundColour[styleBackground],
    styleTextColour[styleText],
    style.base,
    className as string,
  ));
</script>

<svelte:element
  this={tag}
  class={finalClass}
  {...attrs}
>
  {#if Icon}
    <Icon {...iconProps} />
  {/if}

  <span class={iconOnly ? 'sr-only' : 'truncate'}>
    {text}
  </span>

  {@render children?.()}
</svelte:element>
