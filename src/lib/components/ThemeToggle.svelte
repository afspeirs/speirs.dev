<script lang="ts">
  import { MoonIcon, SunIcon } from 'lucide-svelte';

  import Button from '$lib/components/Button.svelte';
  import { themeSystem, themeUser, themeUserOptions } from '$lib/context/theme.svelte';

  function handleUpdateTheme() {
    themeUser.set($themeSystem === 'dark' ? 'light' : 'dark');
  }
</script>

<Button
  class="absolute top-2 right-2 text-white flex-row-reverse"
  icon={$themeSystem === 'dark' ? MoonIcon : SunIcon}
  iconOnly
  invert
  onclick={handleUpdateTheme}
  text={themeUserOptions[$themeSystem]}
/>
