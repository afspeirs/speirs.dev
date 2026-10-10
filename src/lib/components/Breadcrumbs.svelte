<script lang="ts">
  import { ChevronRightIcon, HouseIcon } from '@lucide/svelte';

  import { page } from '$app/state';
  import type { Path } from '$app/types';
  import Button from '#lib/components/Button.svelte';

  type ButtonProps = {
    class?: string;
  };

  let {
    class: className = '',
  }: ButtonProps = $props();

  const pages = $derived.by(() => {
    const pathsFromPathname = page.url.pathname.split('/').filter(Boolean);

    let tokenPath = '';
    const dynamicPaths = pathsFromPathname.map((token, index) => {
      const current = index === pathsFromPathname.length - 1;
      tokenPath += '/' + token;
      token = current && page?.data?.metadata?.title
        ? page.data.metadata.title
        : token.charAt(0).toUpperCase() + token.slice(1);

      return { label: token, href: tokenPath as Path, current };
    });

    return dynamicPaths;
  });
</script>

{#if pages.length > 0}
  <nav aria-label="Breadcrumb" class="flex {className}">
    <ol role="list" class="flex items-center gap-2">
      <li>
        <Button
          href="/"
          icon={HouseIcon}
          iconOnly
          styleBackground="primaryOutline"
          text="Home"
        />
      </li>
      {#each pages as page (page.label)}
        <li>
          <div class="flex items-center gap-2">
            <ChevronRightIcon class="size-5 shrink-0" aria-hidden="true" />
            <Button
              aria-current={page.current ? 'page' : undefined}
              class="text-sm font-medium"
              href={page.href}
              styleBackground="primaryOutline"
              text={page.label}
            />
          </div>
        </li>
      {/each}
    </ol>
  </nav>
{/if}
