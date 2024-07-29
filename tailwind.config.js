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
        monaSansB: ['MonaSansB', 'sans-serif'],
        monaSansM: ['MonaSansM', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
