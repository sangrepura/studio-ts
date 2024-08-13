import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import type { PluginUtils } from 'tailwindcss/types/config'

export default {
  content: ['./src/**/*.{js,jsx,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          '50': '#fff2ee',
          '100': '#ffe5dc',
          '200': '#ffccb9',
          '300': '#ffb296',
          '400': '#ff9973',
          '500': '#ff7f50',
          '600': '#cc6640',
          '700': '#994c30',
          '800': '#663320',
          '900': '#331910',
        },
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      fontFamily: {
        sans: ['var(--font-recoleta)', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        revolveScale: {
          '0%': {
            transform: 'translate(-150px, -50px) rotate(-180deg) scale(3)',
            opacity: '0',
          },
          '60%': { transform: 'translate(20px, 20px) rotate(30deg) scale(.3)' },
          '100%': {
            transform: 'translate(0) rotate(0) scale(1)',
            opacity: '1',
          },
        },
        ballDrop: {
          '0%': {
            transform: 'translate(200px, -100px) scale(2)',
            opacity: '0',
          },
          '60%': { transform: 'translate(0, 20px) rotate(-180deg) scale(.5)' },
          '100%': {
            transform: 'translate(0) rotate(0deg) scale(1)',
            opacity: '1',
          },
        },
        sideSlide: {
          '0%': {
            transform: 'translate(-300px, 0) scale(0)',
            opacity: '0',
            color: 'var(--side-base-color)',
          },
          '60%': {
            transform: 'translate(20px, 0) scale(1)',
            color: 'var(--side-base-color)',
          },
          '80%': {
            transform: 'translate(20px, 0) scale(1)',
            color: 'var(--side-base-color)',
          },
          '99%': {
            transform: 'translate(0) scale(1.2)',
            color: 'var(--side-slide-color)',
          },
          '100%': {
            transform: 'translate(0) scale(1)',
            opacity: '1',
            color: 'var(--side-slide-color)',
          },
        },
        revolveDrop: {
          '0%': {
            transform: 'translate(0, -100px) rotate(360deg) scale(0)',
            opacity: '0',
          },
          '30%': { transform: 'translate(0, -50px) rotate(180deg) scale(1)' },
          '60%': { transform: 'translate(0, 20px) scale(.8) rotate(0deg)' },
          '100%': {
            transform: 'translate(0) scale(1) rotate(0deg)',
            opacity: '1',
          },
        },
        dropVanish: {
          '0%': {
            transform: 'translate(0, -100px) rotate(360deg) scale(0)',
            opacity: '0',
          },
          '30%': { transform: 'translate(0, -50px) rotate(180deg) scale(1)' },
          '50%': {
            transform: 'translate(0, 20px) scale(.8) rotate(0deg)',
            opacity: '1',
          },
          '80%': {
            transform: 'translate(-100px, -100px) scale(1.5) rotate(-180deg)',
            opacity: '0',
          },
          '100%': {
            transform: 'translate(0) scale(1) rotate(0deg)',
            opacity: '1',
          },
        },
        blink: {
          '0%,': {
            opacity: '1',
          },
          '50%': {
            opacity: '0',
          },
          '100%,': {
            opacity: '1',
          },
        },

        twister: {
          '0%': {
            transform: 'rotate(-180deg) translate(150px, 0)',
            opacity: '0',
          },
          '10%': { opacity: '1' },
          '100%': { transform: 'rotate(0deg) translate(0)', opacity: '1' },
        },
        leftRight: {
          '0%': { transform: 'translate(-150px, 0) scale(.3)', opacity: '0' },
          '40%': {
            transform: 'translate(50px, 0) scale(.7)',
            opacity: '1',
            color: 'var(--tw-color-coral-500)',
          },
          '60%': { color: '#0f40ba' },
          '80%': { transform: 'translate(0) scale(2)', opacity: '0' },
          '100%': { transform: 'translate(0) scale(1)', opacity: '1' },
        },
      },
      animation: {
        revolveScale: 'revolveScale 0.4s forwards',
        ballDrop: 'ballDrop 0.3s forwards',
        //sideSlide: 'sideSlide 0.5s forwards',
        sideSlide: 'sideSlide var(--side-slide-duration, 1s) forwards',

        revolveDrop: 'revolveDrop 0.3s forwards',
        dropVanish: 'dropVanish 0.5s forwards',
        twister: 'twister 0.5s forwards',
        leftRight: 'leftRight 0.5s forwards',
        blink: 'blink var(--side-slide-duration, 1s) infinite',
      },
      typography: ({ theme }: PluginUtils) => ({
        brand: {
          css: {
            '--tw-prose-body': theme('colors.brand[800]') as string,
            '--tw-prose-headings': theme('colors.brand[900]') as string,
            '--tw-prose-lead': theme('colors.brand[700]') as string,
            '--tw-prose-links': theme('colors.brand[900]') as string,
            '--tw-prose-bold': theme('colors.brand[900]') as string,
            '--tw-prose-counters': theme('colors.brand[600]') as string,
            '--tw-prose-bullets': theme('colors.brand[400]') as string,
            '--tw-prose-hr': theme('colors.brand[300]') as string,
            '--tw-prose-quotes': theme('colors.brand[900]') as string,
            '--tw-prose-quote-borders': theme('colors.brand[300]') as string,
            '--tw-prose-captions': theme('colors.brand[700]') as string,
            '--tw-prose-code': theme('colors.brand[900]') as string,
            '--tw-prose-pre-code': theme('colors.brand[100]') as string,
            '--tw-prose-pre-bg': theme('colors.brand[900]') as string,
            '--tw-prose-th-borders': theme('colors.brand[300]') as string,
            '--tw-prose-td-borders': theme('colors.brand[200]') as string,
            '--tw-prose-invert-body': theme('colors.brand[200]') as string,
            '--tw-prose-invert-headings': theme('colors.white') as string,
            '--tw-prose-invert-lead': theme('colors.brand[300]') as string,
            '--tw-prose-invert-links': theme('colors.white') as string,
            '--tw-prose-invert-bold': theme('colors.white') as string,
            '--tw-prose-invert-counters': theme('colors.brand[400]') as string,
            '--tw-prose-invert-bullets': theme('colors.brand[600]') as string,
            '--tw-prose-invert-hr': theme('colors.brand[700]') as string,
            '--tw-prose-invert-quotes': theme('colors.brand[100]') as string,
            '--tw-prose-invert-quote-borders': theme(
              'colors.brand[700]',
            ) as string,
            '--tw-prose-invert-captions': theme('colors.brand[400]') as string,
            '--tw-prose-invert-code': theme('colors.white') as string,
            '--tw-prose-invert-pre-code': theme('colors.brand[300]') as string,
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)' as string,
            '--tw-prose-invert-th-borders': theme(
              'colors.brand[600]',
            ) as string,
            '--tw-prose-invert-td-borders': theme(
              'colors.brand[700]',
            ) as string,
          },
        },
      }),
      screens: {
        xs: '320px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
} satisfies Config
