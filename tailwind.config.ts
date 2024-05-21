import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        monst: ['var(--font-monst)', 'sans-serif']
      },
      colors: {
        black: '#271A10', // main bg (dark), main text(light)
        white: '#F1F1EF', // main bg (light), main text(dark)
        brown: '#4A2D17', // nav (dark)
        yellow: {
          50: '#F8F8F8',
          100: '#D7A57F', // nav (light)
          200: '#F6C792', // hero img bg
          300: '#EE942F'
        },
        grey: '#D9D9D9'
      },
      maxWidth: {
        container: '80rem'
      },
      screens: {
        xs: '420px'
      }
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    }
  },
  plugins: [],
  darkMode: 'class'
}
export default config
