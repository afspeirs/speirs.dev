<script lang="ts">
  const handleClick = () => window.history.back();
</script>

<div class="wrapper">
  <button class="back no-js--hidden" on:click={handleClick}>&lt; Back</button>
</div>

<style>
  .wrapper {
    position: absolute;
    top: -50px;
  }

  button {
    all: unset;
    cursor: pointer;
  }
  button:focus-visible {
    outline: 2px solid var(--clr-outline, var(--clr-primary));
    outline-offset: 4px;
  }

  .back {
    --clr-outline: var(--clr-background);
    text-decoration: none;
    color: var(--clr-background);
    line-height: 2;
  }
</style>
