module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        red: '2px solid rgba(248, 113, 113, var(--tw-text-opacity))',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
