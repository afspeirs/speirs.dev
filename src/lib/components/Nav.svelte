<script lang="ts">
  import { page } from '$app/stores';

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

  $: path = $page.url.pathname;
  // $: console.log(path);
</script>

<nav class="flex justify-center items-center pt-section mobile:flex-col">
  {#each navItems as navItem}
    <a
      class="px-8 font-heading font-bold text-2xl uppercase border-y-4 leading-[64px] border-transparent transition-colors duration-200 hover:bg-secondary aria-page:border-b-white focus-outline-inset-invert mobile:w-full mobile:text-center mobile:border-y-0 mobile:border-x-4 mobile:aria-page:border-x-white"
      href={navItem.link}
      aria-current={path === navItem.link || path.includes(`${navItem.link}/`) ? 'page' : undefined}
    >
      {navItem.name}
    </a>
  {/each}
</nav>
