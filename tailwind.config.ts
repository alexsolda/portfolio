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
        kanit: ['var(--font-kanit)']
      },
      colors: {
        primary: '#009CBC',
        white: '#FFFFFF',
        black: '#080019',
        gradientFrom: '#00404D'
      },
      maxWidth: {
        userView: '80rem'
      },
      width: {
        userView: '80rem'
      },
      boxShadow: {
        bShadow: '0px 0px 24px -3px rgba(0,156,188,1)'
      }
    }
  },
  plugins: [nextui()]
}
export default config
