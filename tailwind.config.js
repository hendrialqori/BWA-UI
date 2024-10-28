/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter", "sans-serif"]
      },
      colors: {
        "primary-blue": "var(--primary-blue)"
      }
    },
  },
  plugins: [],
}

