<script lang="ts">
  import github from '$lib/images/github.svg';
  import linkedin from '$lib/images/linkedin.png';

  export let date: string;
</script>

<footer class="flex flex-col justify-evenly items-center mt-8 py-6 gap-6 text-center bg-primary text-white">
  <div class="flex gap-8">
    <a href="https://github.com/afspeirs" target="_blank" rel="noopener noreferrer" class="hover:brightness-75 rounded-full focus-outline-invert">
      <img src={github} alt="github.com/afspeirs" width="32" height="32">
    </a>
    <a href="https://uk.linkedin.com/in/afspeirs" target="_blank" rel="noopener noreferrer" class="hover:brightness-75 rounded-sm focus-outline-invert">
      <img src={linkedin} alt="linkedin.com/afspeirs" width="32" height="32">
    </a>
  </div>
  <p>
    &copy; 2017-{date} Andrew Speirs
  </p>
</footer>
