<script lang="ts">
  import { resolve } from '$app/paths';
  import GithubCorner from '$lib/components/GithubCorner.svelte';
  // import Nav from '$lib/components/Nav.svelte';
  import logo from '$lib/images/logo.svg';

  const maxTiltAngle = 75;
  let logoAnchorElement: HTMLAnchorElement;

  const updateTilt = () => {
    const angle = Math.floor(Math.random() * maxTiltAngle * 2) - maxTiltAngle;
    logoAnchorElement.style.setProperty('--tilt-angle', `${angle}deg`);
  };
</script>

<header class="flex flex-col place-items-center py-8 bg-primary text-white">
  <GithubCorner primaryBackground />

    <a
      bind:this={logoAnchorElement}
      class="transition-transform duration-300 hover:rotate-(--tilt-angle) focus:rotate-(--tilt-angle) hover:scale-110 focus:scale-110 focus-outline-invert rounded-t-[23px] rounded-b-[11px]"
      href={resolve('/')}
      aria-label="Home"
      on:blur={updateTilt}
      on:mouseout={updateTilt}
    >
      <img src={logo} alt="" width="96" height="96">
    </a>

  <!-- <Nav /> -->
</header>
