module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,astro,vue}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
}
