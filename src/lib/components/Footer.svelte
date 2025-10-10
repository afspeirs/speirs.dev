<script lang="ts">
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import github from '$lib/images/github.svg';
  import linkedin from '$lib/images/linkedin.png';
</script>

<footer class="relative flex flex-col justify-evenly items-center py-6 gap-6 text-center bg-primary text-white">
  <ThemeToggle />
  <div class="flex gap-8">
    <a href="https://github.com/afspeirs" target="_blank" rel="noopener noreferrer" class="hover:brightness-75 rounded-full focus-outline-invert">
      <img src={github} alt="github.com/afspeirs" width="32" height="32">
    </a>
    <a href="https://uk.linkedin.com/in/afspeirs" target="_blank" rel="noopener noreferrer" class="hover:brightness-75 rounded-xs focus-outline-invert">
      <img src={linkedin} alt="linkedin.com/afspeirs" width="32" height="32">
    </a>
  </div>
  <p title={import.meta.env.APP_VERSION}>
    &copy; 2017-2025 Andrew Speirs
  </p>
</footer>
