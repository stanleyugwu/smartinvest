/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/admin/**/*.{tsx,ts,js,jsx}",
    "./src/app/Admin.tsx"
  ],
  theme: {
    extend: {colors: { dark: "#0f1932", primary:"#ef0530", light:"#97afd5", grey:'#f0f2f5',black:'#344767'}},
  },
  plugins: [],
}
