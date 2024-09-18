import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        100: '28rem',
        128: '32rem',
        150: '40rem',
        192: '48rem',
        200: '56rem',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        dancing: ['Dancing Script'],
        passion: ['Passion One'],
        hando: ['Hando'],
        anton: ['Anton'],
        orbitron: ['Orbitron'],
        bowlbyOne: ['Bowlby One'],
        comfortaa: ['Comfortaa'],
        happyMonkey: ['Happy Monkey'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        'extra-bold': '800',
        black: '900',
      },
      backgroundImage: {
        normal: "url('/bg-normal.png')",
        mobile: "url('/bg-mobile.png')",
      },
      colors: {
        wisteria: '#BB9BECff',
        mauve: '#B6AAF6ff',
        periwinkle: '#C7C4FBff',
        polynesianBlue: '#2C50A3ff',
        slateBlue: '#8357DBff',
        lightYellow: '#FDFD96',
        offWhite: '#FAF9F6',
      },
      fontSize: {
        xs: '0.6rem',
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '1xl': '1.4rem',
        '2xl': '1.563rem',
        '3xl': '1.7rem',
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        xxl: '8.052rem',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      blur: {
        xs: '0.2px',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value: string) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
export default config
