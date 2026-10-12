/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Pastikan src/ disertakan
  theme: {
    extend: {
      colors: {
        // ── Soft Minimal Warm (synced with App.css @theme, replaces brutalism) ──
        cream: {
          DEFAULT: "#fffaf0",
          dark: "#f5eddc",
        },
        ink: "#161616",
        accent: {
          DEFAULT: "#ff9e00",
          dark: "#e98a00",
        },
        soft: {
          bg: "#fffaf0",
          primary: "#ff9e00",
          secondary: "#161616",
          accent: "#ff9e00",
          dark: "#161616",
          border: "#161616",
        },
        // backward-compat alias: neo-* maps to soft palette
        neo: {
          bg: "#fffaf0",
          primary: "#ff9e00",
          secondary: "#161616",
          accent: "#ff9e00",
          dark: "#161616",
          border: "#161616",
        }
      },
      boxShadow: {
        // soft blur shadows (was 4px 4px 0px hard brutalist)
        'soft': '0 8px 24px rgba(22, 22, 22, 0.08)',
        'soft-lg': '0 16px 40px rgba(22, 22, 22, 0.12)',
        'soft-hover': '0 4px 12px rgba(22, 22, 22, 0.1)',
        'neo': '0 8px 24px rgba(22, 22, 22, 0.08)',
        'neo-lg': '0 16px 40px rgba(22, 22, 22, 0.12)',
        'neo-hover': '0 4px 12px rgba(22, 22, 22, 0.1)',
      },
      fontFamily: {
        heading: ["Sora", "Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
};
