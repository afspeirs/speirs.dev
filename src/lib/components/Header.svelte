<script lang="ts">
  import GithubCorner from '$lib/components/GithubCorner.svelte';
  import Nav from '$lib/components/Nav.svelte';
  import logo from '$lib/images/logo.svg';

  const maxTiltAngle = 75;

  // Set a random angle for the logo
  const updateTilt = () => {
    const angle = `${Math.floor(Math.random() * (maxTiltAngle - -maxTiltAngle)) - maxTiltAngle}deg`;
    document.documentElement.style.setProperty('--logo-tilt-angle', angle);
  };

  export let dense = false;
</script>

<header
  class="header primary-background"
  class:dense
>
  <GithubCorner primaryBackground />

  <div class="logo-wrapper">
    <a
      class="logo"
      href="/"
      aria-label="Home"
      on:blur={updateTilt}
      on:mouseout={updateTilt}
    >
      <img class="img-icon" src={logo} alt="" width="150" height="150">
    </a>
  </div>

  <Nav />
</header>

<style>
  .header {
    --header-spacing: 2.5;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--section-spacing) 0 calc(var(--section-spacing) * var(--header-spacing));
    margin-bottom: calc((var(--section-spacing) * var(--header-spacing) * -1) + var(--section-spacing));
  }

  .dense {
    padding: var(--section-spacing) 0;
    margin-bottom: calc(var(--section-spacing) / 2);
  }

  .logo-wrapper {
    display: flex;
    justify-content: center;
  }

  .logo {
    transition: transform 0.3s ease;
  }
  .logo:focus,
  .logo:hover {
    transform: rotate(var(--logo-tilt-angle)) scale(1.1);
  }

  .logo:focus-visible {
    outline: none;
    border-radius: 36px 36px 18px 18px;
    box-shadow: 0 0 0 6px var(--clr-primary),
                0 0 0 10px var(--clr-background);
  }
</style>
