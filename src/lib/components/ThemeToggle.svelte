<script lang="ts">
  import { MoonIcon, SunIcon } from '@lucide/svelte';

  import Button from '$lib/components/Button.svelte';
  import { themeSystem, themeUser, themeUserOptions } from '$lib/context/theme.svelte';

  function handleUpdateTheme() {
    themeUser.set($themeSystem === 'dark' ? 'light' : 'dark');
  }
</script>

<Button
  class="absolute top-2 right-2 flex-row-reverse focus-outline-inset-invert"
  icon={$themeSystem === 'dark' ? MoonIcon : SunIcon}
  iconOnly
  onclick={handleUpdateTheme}
  styleBackground="dark"
  styleText="light"
  text={themeUserOptions[$themeSystem]}
/>
