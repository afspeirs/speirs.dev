<script lang="ts">
  export let id: string | null = null;
  export let title: string | null = null;
</script>

<section id={id}>
  {#if title}
    <h2>{title}</h2>
  {/if}

  <slot />
</section>

<style>
  section {
    padding-bottom: var(--section-spacing);
  }
  section > * {
    margin-bottom: 0.75em;
  }

  #home {
    font-size: 1.3rem;
    text-align: center;
  }
</style>
