<script lang="ts">
  let className = '';
  export { className as class };
</script>

<div class={`relative bg-white shadow rounded-lg overflow-hidden p-8 ${className}`}>
  <slot />
</div>
