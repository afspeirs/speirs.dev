const themeOptions = {
  light: 'Light',
  dark: 'Dark',
} as const;
export const themeUserOptions = {
  default: 'System Default',
  ...themeOptions,
} as const;

type ThemeUserOption = keyof typeof themeUserOptions;
type TypeSystemOption = keyof typeof themeOptions;

function getInitialTheme(): ThemeUserOption {
  if (typeof window === 'undefined') return 'default';
  return (window.localStorage.getItem('theme') as ThemeUserOption) || 'default';
}

function getInitialMediaTheme(): TypeSystemOption {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export const theme = $state({
  user: getInitialTheme(),
  media: getInitialMediaTheme(),
  get system(): TypeSystemOption {
    return this.user !== 'default' ? this.user : this.media;
  },
});

if (typeof window !== 'undefined') {
  // You cannot just use an $effect inside a .svelte.ts file you need to wrap it in an $effect.root
  $effect.root(() => {
    $effect(() => {
      window.localStorage.setItem('theme', theme.user);
    });
  });

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const listener = () => {
    theme.user = 'default';
    theme.media = mql.matches ? 'dark' : 'light';
  };

  mql.addEventListener('change', listener);
}
