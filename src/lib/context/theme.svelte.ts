import { derived, writable } from 'svelte/store';

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

const initialValue = (window.localStorage.getItem('theme') as ThemeUserOption) || 'default';
export const themeUser = writable<ThemeUserOption>(initialValue);
export const themeMedia = writable<TypeSystemOption>(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
export const themeSystem = derived([themeUser, themeMedia], ([$themeUser, $themeMedia]) => {
  // Prioritise user-selected theme over system theme
  return $themeUser !== 'default' ? $themeUser : $themeMedia;
});

// Observe media query for system theme changes
const mql = window.matchMedia('(prefers-color-scheme: dark)');
mql.addEventListener('change', () => {
  themeUser.set('default');
  themeMedia.set(mql.matches ? 'dark' : 'light');
});

themeUser.subscribe((value) => window.localStorage.setItem('theme', value));
