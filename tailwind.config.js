/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Pastikan src/ disertakan
  theme: {
    extend: {
      colors: {
        neo: {
          bg: "#fdfdfd",
          primary: "#ffe600",
          secondary: "#ff4d4d",
          accent: "#0055ff",
          dark: "#1a1a1a",
          border: "#000000",
        }
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
        'neo-hover': '2px 2px 0px 0px rgba(0,0,0,1)',
      },
      fontFamily: {
        heading: ["Space Grotesk", "Sora", "sans-serif"],
        body: ["Space Grotesk", "Inter", "sans-serif"],
      },
    },
  },
};
