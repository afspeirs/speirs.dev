<script lang="ts">
  import { page } from '$app/state';

  const navItems = [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/projects',
      name: 'Projects',
    },
    {
      link: '/tags',
      name: 'Tags',
    },
    {
      link: '/about',
      name: 'About',
    },
  ] as const;

  const path = $derived(page.url.pathname);
  // $inspect(path);
</script>

<nav class="flex justify-center items-center pt-section mobile:flex-col">
  {#each navItems as navItem (navItem.link)}
    <a
      class="px-8 font-heading font-bold text-2xl uppercase border-y-4 leading-[64px] border-transparent transition-colors duration-200 hover:bg-secondary aria-page:border-b-white focus-outline-inset-invert mobile:w-full mobile:text-center mobile:border-y-0 mobile:border-x-4 mobile:aria-page:border-x-white"
      href={navItem.link}
      aria-current={path === navItem.link || path.includes(`${navItem.link}/`) ? 'page' : undefined}
    >
      {navItem.name}
    </a>
  {/each}
</nav>
