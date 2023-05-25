/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        fighting: '#e25864',
        flying: '#6d87d6',
        poison: '#7a5292',
        ground: '#653f30',
        rock: '#6c6f77',
        bug: '#9bca7b',
        ghost: '#ddb3f4',
        steel: '#8f9498',
        fire: '#fb6c6c',
        water: '#76bdfe',
        grass: '#48d0b0',
        electric: '#ffce4b',
        psychic: '#f6a4db',
        ice: '#a0eaeb',
        dark: '#525264',
        fairy: '#ee509d',
        normal: '#b8b8b8',
        dragon: '#4169e1'
      },
    },
  },
  plugins: [],
}