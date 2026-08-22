/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.tsx",
    "./src/main.tsx",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary-color)",
          foreground: "var(--bg-color)",
        },
        background: "var(--bg-color)",
        foreground: "var(--text-color)",
        muted: {
          DEFAULT: "var(--card-bg)",
          foreground: "var(--text-muted)",
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        display: ['Almarai', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
