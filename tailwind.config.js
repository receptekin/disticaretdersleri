/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B00', // Turuncu
          light: '#FF8533',
          dark: '#CC5500',
        },
        secondary: {
          DEFAULT: '#1A1A1A', // Siyah
          light: '#333333',
          dark: '#000000',
        }
      },
    },
  },
  plugins: [],
  variants: {
    scrollbar: ['rounded']
  },
  corePlugins: {
    // ...
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B00',
          light: '#FF8533',
          dark: '#CC5500',
        },
        secondary: {
          DEFAULT: '#1A1A1A',
          light: '#333333',
          dark: '#000000',
        }
      }
    }
  }
}