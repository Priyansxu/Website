module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceMono: ['SpaceMono', 'monospace'],
        celtG: ['CeltG', 'sans-serif'],
        monaSans: ['MonaSans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
