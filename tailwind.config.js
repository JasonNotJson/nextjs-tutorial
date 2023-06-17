/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "main-bg": {
          DEFAULT: "#f1f5f9",
          100: "#F5F8FF",
        },
        "primary-blue": {
          DEFAULT: "#11257e",
          100: "#11257e",
        },
        "main-dark-bg": "#262626",
        "primary-button": "#3355CC",
        "secondary-button": "#c0caf6",
        "hover-button": "#4D88FF",
        accent: "#8e1728",
        "secondary-accent": "#B0253A",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/hero-bg.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
