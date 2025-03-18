import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A4B31', // Deep money green
          light: '#156B47',
          dark: '#073523',
        },
        secondary: {
          DEFAULT: '#D4A968', // Gold accent
          light: '#E3C08C',
          dark: '#B88D4A',
        },
        neutral: {
          DEFAULT: '#F5F5F5',
          dark: '#1A1A1A',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1A1A1A',
            a: {
              color: '#0A4B31',
              '&:hover': {
                color: '#156B47',
              },
            },
            h1: {
              color: '#0A4B31',
              fontWeight: '700',
            },
            h2: {
              color: '#0A4B31',
              fontWeight: '600',
            },
            h3: {
              color: '#0A4B31',
              fontWeight: '600',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config 