<script lang="ts">
  import GithubCorner from '$lib/components/GithubCorner.svelte';
  import Nav from '$lib/components/Nav.svelte';
  import logo from '$lib/images/logo.svg';

  const maxTiltAngle = 75;

  const updateTilt = () => {
    const angle = `${Math.floor(Math.random() * (maxTiltAngle - -maxTiltAngle)) - maxTiltAngle}deg`;
    document.documentElement.style.setProperty('--logo-tilt-angle', angle);
  };
</script>

<header class="py-16 pb-40 -mb-24 bg-primary text-white">
  <GithubCorner primaryBackground />

  <div class="flex justify-center">
    <a
      class="transition-transform duration-300 hover:rotate-(--logo-tilt-angle) focus:rotate-(--logo-tilt-angle) hover:scale-110 focus:scale-110 focus-outline-invert rounded-t-[36px] rounded-b-[18px]"
      href="/"
      aria-label="Home"
      on:blur={updateTilt}
      on:mouseout={updateTilt}
    >
      <img src={logo} alt="" width="150" height="150">
    </a>
  </div>

  <Nav />
</header>
