import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
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
        garamond: ['Garamond'],
        hando: ['Hando'],
        anton: ['Anton'],
        roboto: ['Roboto Mono'],
        orbitron: ['Orbitron'],
        BowlbyOne: ['Bowlby One'],
      },
      backgroundImage: {
        normal: "url('/bg-normal.png')",
        mobile: "url('/bg-mobile.png')",
      },
      colors: {
        primaryBackground: '#2e7479',
        secondaryBackground: '#b4b1ae',
        primaryTitle: '#cf6d5e',
        primaryButton: '#cf6d5e',
        secondaryButton: '#e38476',
        link: '#358c94',
        border: '#94a4a3',
        subtleText: '#667270',
        highlightText: '#c4867a',
        mutedText: '#bb8c8c',
        offWhite: '#FAF9F6',
      },
      fontSize: {
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
    },
  },
  plugins: [],
}
export default config
