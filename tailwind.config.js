/** @type {import('tailwindcss').Config} */

import Plugin from 'tailwindcss/plugin';

const tranformClass = Plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },    
    ".preserver-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },   
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  })
});

module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/page.tsx'
  ],
  theme: {
    colors: {
    'color': 'var(--text)',
    'bg-color': 'var(--background)',
    'p-color': 'var(--primary)',
    's-color': 'var(--secondary)',
    'a-color': 'var(--accent)',
    },
    extend: {
       screens: {
            'hover-hover': {'raw': '(hover: hover)'},
          }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    tranformClass
  ],
}

