/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        250: '250ms',
      },
      colors: {
        ocean: {
          50:  '#e6f4f9',
          100: '#c0deee',
          200: '#8fc3e0',
          300: '#5aa8d2',
          400: '#2d91c4',
          500: '#1a7fa5',
          600: '#1a6b8a',
          700: '#145e82',
          800: '#0d3d5c',
          900: '#0a2337',
        },
        sand: {
          50:  '#fdf8f0',
          100: '#f7edda',
          200: '#eeddb8',
          300: '#e3c88a',
          400: '#d4a85c',
          500: '#c49040',
          600: '#a87830',
          700: '#8a6024',
          800: '#6e4c1c',
          900: '#563b15',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
