import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        monst: ['var(--font-monst)', 'sans-serif']
      },
      maxWidth: {
        container: '80rem'
      },
      screens: {
        xs: '420px'
      },
      backgroundImage: (theme) => ({
        'gradient-light': 'linear-gradient(to left, #F1F1EF, #ecd5c3)',
        'gradient-dark': 'linear-gradient(to left, #271A10, #332222)'
      }),
      colors: {
        black: '#271A10', // main bg (dark), main text(light)
        white: '#F1F1EF', // main bg (light), main text(dark)
        brown: '#4A2D17', // nav (dark)
        cocoa: '#332222',
        yellow: {
          50: '#F8F8F8',
          100: '#ecd5c3', // 2nd bg (light)
          200: '#D7A57F', // nav (light)
          300: '#F6C792', // hero img bg
          400: '#EE942F'
        },
        grey: '#D9D9D9'
      },
      boxShadow: {
        'hero-img-light':
          'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
        'hero-img-dark':
          'rgba(255, 255, 255, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(255, 255, 255, 0.35) 0px -2px 6px 0px inset'
      }

      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    }
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
      boxShadow: ['dark']
    }
  },
  plugins: []
}
export default config
