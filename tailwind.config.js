/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          25:"#00BFFF",
          50: "#f0f8ff",
          100: "#dff0ff",
          200: "#b9e2fe",
          300: "#7bccfe",
          400: "#34b1fc",
          500: "#0a99ed",
          600: "#0078cb",
          700: "#0067b1",
          800: "#055287",
          900: "#0a4470",
          950: "#072b4a",
        },
      },
    },
  },
  plugins: [],
};
