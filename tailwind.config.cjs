const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--rf-color-primary)',
        secondary: 'var(--rf-color-secondary)',
        accent: 'var(--rf-color-accent)',
        default: 'var(--rf-color-text-default)',
        dark: 'var(--rf-color-text-dark)',
        muted: 'var(--rf-color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--rf-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--rf-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--rf-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
