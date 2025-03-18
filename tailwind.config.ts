import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 64px
        'headline': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // 40px
        'title': ['1.75rem', { lineHeight: '1.3' }], // 28px
        'subheader': ['1.25rem', { lineHeight: '1.5' }], // 20px
        'body': ['1rem', { lineHeight: '1.5' }], // 16px
        'caption': ['0.875rem', { lineHeight: '1.5' }], // 14px
      },
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        mineshaft: {
          DEFAULT: '#2B2B2B',
          50: '#F7F7F7',
          100: '#EBEBEB',
          200: '#D2D2D2',
          300: '#B8B8B8',
          400: '#9F9F9F',
          500: '#858585',
          600: '#6C6C6C',
          700: '#525252',
          800: '#393939',
          900: '#2B2B2B',
        },
      },
      spacing: {
        '120': '7.5rem', // 120px
        '160': '10rem', // 160px
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config 