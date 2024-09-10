/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#064663",
        background:"#635985",
        textlight: "#ECB365",
        textcolor: "#F6F5F2",
        accent: {
          DEFAULT: '#04293A',
          nover: '#041C32'
        }
      }
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ["light"],
  },
}