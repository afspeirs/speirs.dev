<script lang="ts">
  import github from '$lib/images/github.svg';

  export let date: string;
</script>

<footer class="flex flex-col justify-evenly items-center mt-8 py-6 gap-6 text-center bg-primary text-white">
  <a href="https://github.com/afspeirs" target="_blank" rel="noopener noreferrer" class="hover:brightness-75 rounded-full focus-outline-invert">
    <img class="img-icon" src={github} alt="github.com/afspeirs" width="32" height="32">
  </a>
  <p>
    &copy; 2017-{date} Andrew Speirs
  </p>
</footer>
