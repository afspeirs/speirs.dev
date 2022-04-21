<script context="module">
  import { formatDate } from '$lib/utils';

  export const date = formatDate({ format: 'YYYY' });
  export const packageVersion = import.meta.env.PACKAGE_VERSION;
</script>

<script lang="ts">
  import github from '$lib/images/github.svg';
</script>

<footer class="footer primary-background">
  <a href="https://github.com/afspeirs" target="_blank" rel="noopener noreferrer">
    <img class="img-icon" src={github} alt="github.com/afspeirs" width="32" height="32">
  </a>
  <p title={`v${packageVersion}`}>
    &copy; 2017 &ndash; {date} Andy Speirs
  </p>
</footer>

<style>
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: calc(128px + env(safe-area-inset-bottom));
    margin-top: calc(var(--section-spacing) / 2);
    padding-bottom: env(safe-area-inset-bottom);
    text-align: center;
  }

  p {
    margin: 0;
  }

  a:hover {
    filter: brightness(80%);
  }
  a:focus-visible {
    outline: none;
    border-radius: 50%;
    box-shadow: 0 0 0 3px var(--clr-primary),
                0 0 0 6px var(--clr-background);
  }
</style>
