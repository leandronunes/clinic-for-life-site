/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./politica-de-privacidade.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        display: ['Fraunces', 'serif'],
        displayLight: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        darkBg: '#0A1A2F',
        darkCard: '#10263C',
        brandCyan: '#16B8A6',
        brandBlue: '#0E3A53',
        brandLightBlue: '#8FD7E6',
        textGray: '#9FB0B8',
      },
    },
  },
  plugins: [],
}
