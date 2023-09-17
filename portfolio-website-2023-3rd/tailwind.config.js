const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '640px',
      'lg': '1080px'
    },
    fontFamily: {
      base: ['var(--font-base)', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      fontSize: {
        sm: '0.925rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem'
      },
      lineHeight: {
        sm: '1.625rem',
        md: '2rem',
        lg: '2.5rem',
        xl: '3.5rem',
        '2xl': '5.25rem'
      },
      colors: {
        'palette': {      
          'dark-200': 'rgba(var(--dark-200) / <alpha-value>)',
          'dark-100': 'rgba(var(--dark-100) / <alpha-value>)',
          'dark': 'rgba(var(--dark) / <alpha-value>)',
          'base': 'rgba(var(--base) / <alpha-value>)',
          'light': 'rgba(var(--light) / <alpha-value>)',
          'light-100': 'rgba(var(--light-100) / <alpha-value>)',
          'light-200': 'rgba(var(--light-200) / <alpha-value>)',
        }
      }
    }
  },
  plugins: []
}
