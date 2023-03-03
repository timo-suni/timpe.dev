/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '35%': { opacity: 1 },
          '50%': { opacity: 0 },
          '75%': { opacity: 0 },
        }
      },
      animation: {
        'blink': 'blink 1.5s infinite',
      }
    },
    colors: {
      gr33n: "#00FFBA",
      darkgr33n:"#1EA17E",
      gr4y: "#2B2B2B",
      darkgr4y: "#242424",
      lightgr4y: "#3E3E3E",
      bordergr4y: "#707070",
      textgr4y: "#AAAAAA",
      hover: "#374E48",
      hover2: "#393838",
      wh1te: "#F2F2F2",
      hrcolor: "#313131"
    },
    fontFamily: {
      video: ["Video", "serif"],
      effra: ["Effra", "sans-serif"],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '3.5xl':  "2.25rem",
    },
    minWidth: {
      '1/2': '50%',
    },
  },
  plugins: [],
}