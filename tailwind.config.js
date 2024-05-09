/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to bottom left, rgba(5, 26, 145, 1), rgba(6, 28, 147, 1), rgba(34, 132, 241, 1), rgba(31, 128, 235, 1))',
      },
      flexcontainer: {
        "display": "flex",
        "justify-content": "center", 
        "align-items": "center",    
        "width": "100%"          
    },
      colors: {
        truegray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717'
        },
      },
    },
  },
  plugins: [],
}

