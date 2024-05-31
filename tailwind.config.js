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
        DEFAULT: "2rem"
      }
    },
    fontFamily: {
      "rubik": ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        "primary": "#2E8BC0",
        "navy-blue": "#1A3A57",
        "soft-blue-white": "#F3F9FB",
        "cool-gray": "#A9B2C3",
        "dark-blue": "#144466",
      }
    },
  },
  plugins: [],
}

