/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef2ff",
          500: "#6366f1",
          700: "#4f46e5"
        }
      },
      spacing: {
        18: "4.5rem"
      },
      borderRadius: {
        "xl-2": "18px"
      }
    }
  },
  plugins: []
};
