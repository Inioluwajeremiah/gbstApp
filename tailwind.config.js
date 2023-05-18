/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: ["./App.{js,jsx,ts,tsx}", "./gbst/**/*.{js,jsx,ts,tsx}"],
  theme: {
   
    extend: {
      colors: {
        'gray_1': '#f4f6f5',
        'gray_2': '#eff2f1',
        'gray_3': '#cdcfce',
        'gray_4': '#a7a6a5',
        'gray_5': '#1c1f1e',
        'white': '#ffffff',
        'white-bg': '#F5F5F5',
        'acpGreen': '#66ca98',
        'acpPink': '#f4a3ec',
        'acpBlue': '#6295e2',
        'acpOrange': '#ff6c52',
        'acsYellow': '#ff7dc',
        'acsPink': '#ffdcfb',
        'acsBlue': '#e0eaf9',
        'acsOrange': '#ffe2dc',
      },
    },
  },
  plugins: [],
}

