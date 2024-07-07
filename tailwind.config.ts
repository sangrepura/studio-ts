import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{js,jsx,mdx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['2.5rem', { lineHeight: '3rem' }],
      '6xl': ['3rem', { lineHeight: '3.5rem' }],
      '7xl': ['4rem', { lineHeight: '4.5rem' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2.5rem',
      },
      fontFamily: {
        sans: ['Mona Sans', ...defaultTheme.fontFamily.sans],
        display: [
          ['Mona Sans', ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },
      colors: {
        'picton-blue': {
          DEFAULT: '#2FA1F2',
          50: '#F1F8FE',
          100: '#C9E6FC',
          200: '#A2D5F9',
          300: '#7CC4F7',
          400: '#55B2F4',
          500: '#2FA1F2',
          600: '#0E86DB',
          700: '#0A65A6',
          800: '#074572',
          900: '#04253D',
          950: '#000305',
        },

        'torea-bay': {
          DEFAULT: '#0F3E80',
          50: '#FDFEFF',
          100: '#E4EEFC',
          200: '#B2CEF6',
          300: '#7FAEF0',
          400: '#4D8EEA',
          500: '#1B6FE4',
          600: '#1350A4',
          700: '#0D356E',
          800: '#082144',
          900: '#05162E',
          950: '#020912',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
