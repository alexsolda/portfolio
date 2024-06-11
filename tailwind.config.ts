import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        kanit: ['var(--font-kanit)'],
        dancing: ['var(--font-dancing)']
      },
      colors: {
        primary: '#009CBC',
        white: '#FFFFFF',
        black: '#080019',
        gradientFrom: '#00404D',
        whiteish: '#FFF8F1'
      },
      maxWidth: {
        userView: '80rem'
      },
      width: {
        userView: '80rem'
      },
      boxShadow: {
        bShadow: '0px 0px 24px -3px rgba(0,156,188,1)'
      },
      keyframes: {
        bounceLow: {
          '0%, 100%': { rotate: '6deg' },
          '50%': { rotate: '-6deg' }
        }
      },
      animation: {
        bounceLow: 'bounceLow infinite 2s ease-in-out'
      }
    }
  },
  plugins: [nextui()]
}
export default config
