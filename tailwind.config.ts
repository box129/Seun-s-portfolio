import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#e8faff',
          100: '#c9f3ff',
          200: '#92e7ff',
          300: '#5ad5ff',
          400: '#22c3ff',
          500: '#00b2ff',
          600: '#0092d1',
          700: '#006fa0',
          800: '#004b6e',
          900: '#002a3f',
        },
        accent: {
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        contrast: {
          50:  '#f5f5f5',
          100: '#d9d9d9',
          200: '#d9d9d9', // Polyfill for safety
          300: '#d9d9d9', // Polyfill for safety
          400: '#141414', // Polyfill for safety
          500: '#141414', // Polyfill for safety
          600: '#141414', // Polyfill for safety
          700: '#141414', // Polyfill for safety
          800: '#141414',
          850: '#0f0f0f',
          900: '#0a0a0a',
        },
        skin: {
          50:  '#f7efe8',
          100: '#e6d0b6',
          200: '#d4ab7e',
          300: '#bf8651',
          400: '#a16633',
          500: '#825128',
          600: '#66411f',
          700: '#4a3017',
          800: '#2f200f',
          900: '#1a1208',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
