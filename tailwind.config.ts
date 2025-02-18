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
        toss: ['Toss'],
        notoSans: ['Noto Sans'],
        blackHanSans: ['BlackHanSans'],
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
      textShadow: {
        DEFAULT: '4px 4px 16px rgba(255, 255, 255, 0.5)',
        md: '2px 2px 6px rgba(255, 255, 255, 0.5)',
        lg: '3px 3px 8px rgba(255, 255, 255, 0.5)',
      },
    },
    writingMode: {
      'vertical-rl': 'vertical-rl',
      'vertical-lr': 'vertical-lr',
    },
  },

  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('tailwind-scrollbar-hide'),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('tailwindcss-textshadow'),
  ],
} satisfies Config
