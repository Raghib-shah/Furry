/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: '#050816',
        surface: '#0f172a',
        primary: '#8b5cf6',
        primarySoft: '#a855f7',
        accent: '#22d3ee',
        warning: '#facc15',
        textMain: '#f9fafb',
        textMuted: '#9ca3af',
        borderSoft: '#1f2937',
      },
    },
  },
  plugins: [],
}

