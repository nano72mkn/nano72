/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'base': 'hsl(0, 0%, 98%)',
        'sub-base': 'hsl(0, 0%, 93%)',
        'text-primary': 'hsl(0, 0%, 20%)',
        'text-secondary': 'hsl(0, 0%, 40%)',
        'accent': 'hsl(39, 73%, 63%)',
        'accent-hover': 'hsl(39, 73%, 53%)',
        'border': 'hsl(0, 0%, 87%)',
      },
      fontFamily: {
        'sans': ['Noto Sans JP', 'sans-serif'],
      },
      fontSize: {
        'h1': '2.5rem',
        'h2': '1.8rem',
        'h3': '1.4rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'container': '1100px',
      },
      boxShadow: {
        'card': '0 4px 12px hsla(0, 0%, 0%, 0.05)',
        'card-hover': '0 8px 24px hsla(0, 0%, 0%, 0.08)',
        'button': '0 4px 12px hsla(39, 73%, 63%, 0.3)',
      },
      backdropBlur: {
        'header': '8px',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '300ms',
        'slow': '500ms',
      },
    },
  },
  plugins: [],
}