<script lang="ts">
  import { ChevronRightIcon, HouseIcon } from 'lucide-svelte';

  import { page } from '$app/state';
  import type { Pathname } from '$app/types';
  import Button from '$lib/components/Button.svelte';

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
      // eslint-disable-next-line @stylistic/no-extra-parens
      token = (current && page?.data?.metadata?.title) || token.charAt(0).toUpperCase() + token.slice(1);
      return {
        label: token,
        href: tokenPath as Pathname,
        current,
      };
    });

    return dynamicPaths;
  });

  // $inspect({
  //   page,
  //   pages,
  // });
</script>

{#if pages.length >= 0}
  <nav aria-label="Breadcrumb" class="flex {className}">
    <ol role="list" class="flex items-center gap-2">
      <li>
        <Button
          icon={HouseIcon}
          iconOnly
          href="/"
          text="Home"
        />
      </li>
      {#each pages as page (page.label)}
        <li>
          <div class="flex items-center gap-2">
            <ChevronRightIcon class="size-5 shrink-0" aria-hidden="true" />
            <Button
              href={page.href}
              current={page.current ? 'page' : undefined}
              class="text-sm font-medium"
              text={page.label}
            />
          </div>
        </li>
      {/each}
    </ol>
  </nav>
{/if}
