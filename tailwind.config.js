/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7A2F",
        secondary: "#FFBB98",
        dark: "#333333",
        light: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
