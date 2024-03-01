/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      aria: {
        page: 'current="page"',
      },
      boxShadow: {
        DEFAULT: '4px 6px 6px rgba(0, 0, 0, 0.25)',
      },
      spacing: {
        section: '4rem',
      },
      colors: {
        current: 'currentColor',
        inherit: 'inherit',
        transparent: 'transparent',
        primary: '#255abc',
        secondary: '#3b73d9',
        tertiary: '#e6edfa',
      },
      fontFamily: {
        body: '"Work Sans Variable", sans-serif',
        heading: '"Mada", sans-serif',
      },
      animation: {
        'octocat-wave': 'octocat-wave 560ms ease-in-out',
      },
      keyframes: {
        'octocat-wave': {
          '0%, 100%': {
            transform: 'rotate(0)',
          },
          '20%, 60%': {
            transform: 'rotate(-25deg)',
          },
          '40%, 80%': {
            transform: 'rotate(10deg)',
          },
        }
      }
    },
  },
  plugins: [],
}
