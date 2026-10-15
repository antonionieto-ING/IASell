/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "#f8fafd",
        "surface-variant": "#f0f4f9",
        "surface-card": "#ffffff",
        "on-surface": "#1f1f1f",
        "on-surface-variant": "#444746",
        "secondary-text": "#5e5e5e",
        "google-blue": "#1a73e8",
        "google-blue-hover": "#1557b0",
        "google-red": "#ea4335",
        "google-yellow": "#fbbc04",
        "google-green": "#34a853",
        "border-subtle": "#e1e5eb",
        "border-card": "#edf1f7",
        "pill-bg": "#edf2fa"
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        body: ["Hanken Grotesk", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
