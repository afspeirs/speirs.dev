<script>
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
</script>

<div id="container">
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
</div>

<style>
  #container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-width: 320px;
    min-height: 100%;
  }

  main {
    position: relative;
    flex: 1;
    padding: 0 calc(env(safe-area-inset-right) + 16px) 0 calc(env(safe-area-inset-left) + 16px);
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
  }
</style>
