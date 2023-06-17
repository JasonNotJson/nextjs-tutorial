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
        "main-bg": "#e8e8e8",
        "dark-main-bg": "#041025",
        "primary-button": "#3355CC",
        "secondary-button": "#c0caf6",
        "hover-button": "#4D88FF",
        accent: "#8e1728",
        "secondary-accent": "#B0253A",
        "light-text": "#080808",
        "dark-text": "#e8f0fd",
        "dark-nav-bg": "#03081F",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/hero-bg.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};

// 'main-bg': '#cefdfb',
// 'dark-main-bg': '#041025',
// 'light-text': '#02312f',
// 'dark-text': '#e8f0fd',
// 'light-secondary-button': '#b6fcf8',
// 'dark-secondary-button': '#01060e',

// "main-bg": "#f1f5f9",
// "dark-main-bg": "#262626",
