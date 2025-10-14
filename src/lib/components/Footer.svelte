<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import github from '$lib/images/github.svg';
  import linkedin from '$lib/images/linkedin.png';
</script>

<footer class="relative flex flex-col justify-evenly items-center py-6 gap-4 text-center bg-primary text-white">
  <ThemeToggle />
  <div class="flex gap-4">
    <Button
      class="focus-outline-inset-invert"
      href="https://github.com/afspeirs"
      iconOnly
      styleBackground="dark"
      text="Github"
    >
      <img src={github} alt="github.com/afspeirs" width="32" height="32">
    </Button>
    <Button
      class="focus-outline-inset-invert"
      href="https://uk.linkedin.com/in/afspeirs"
      iconOnly
      styleBackground="dark"
      text="LinkedIn"
    >
      <img src={linkedin} alt="linkedin.com/afspeirs" width="32" height="32">
    </Button>
  </div>
  <p>&copy; 2017-2025 Andrew Speirs</p>
</footer>
