<script lang="ts">
  import { page } from '$app/stores';

  let path: string;
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
  ];

  $: path = $page.url.pathname;
  // $: console.log(path);
</script>

<nav class="nav">
  {#each navItems as navItem}
    <a
      class="item"
      href={navItem.link}
      aria-current={path === navItem.link || path.includes(`${navItem.link}/`) ? 'page' : undefined}
    >
      {navItem.name}
    </a>
  {/each}
</nav>

<style>
  .nav {
    display: flex;
    justify-content: center;
    padding-top: var(--section-spacing);
    align-items: center;
  }
  .item {
    color: inherit;
    padding: 0 32px;
    font-family: var(--ff-heading);
    font-size: 1.5rem;
    font-weight: var(--fw-bold);
    text-transform: uppercase;
    text-decoration: none;
    height: inherit;
    line-height: 64px;
    transition: background-color 0.2s ease;
    border-top: 4px transparent solid;
    border-bottom: 4px transparent solid;
  }

  .item:hover {
    background-color: var(--clr-secondary);
  }
  .item:focus-visible {
    outline: 4px solid var(--clr-tertiary);
    outline-offset: -4px;
  }

  [aria-current] {
    border-bottom: 4px var(--clr-background) solid;
  }

  @media (max-width: 600px) {
    .nav {
      flex-direction: column;
    }
    .item {
      width: 100%;
      text-align: center;
      border-top: initial;
      border-bottom: initial;
    }
    [aria-current] {
      border-top: initial;
      border-bottom: initial;
      border-left: 6px var(--clr-background) solid;
      border-right: 6px var(--clr-background) solid;
    }
  }
</style>
