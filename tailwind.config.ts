import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        toss: ['Toss', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        garyFont: 'rgb(107 114 128 / var(--tw-text-opacity, 1))',
        primary: '#39FF14',
        bgBlack: '#000000D9',
      },
      animation: {
        blink: 'blink 1s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
    writingMode: {
      'vertical-rl': 'vertical-rl',
      'vertical-lr': 'vertical-lr',
    },
  },
  plugins: [],
} satisfies Config
