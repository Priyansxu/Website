module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: '#ababab',
        gravi: '#B2B2B2',
        graci: '#a0a1a3',
        greyo: '#b6b6b6',
        buttonGray: '#a5a5a5',
      },
      fontFamily: {
        spaceMono: ['SpaceMono', 'monospace'],
        celtG: ['CeltG', 'sans-serif'],
        monaSans: ['MonaSans', 'sans-serif'],
        monaSansM: ['MonaSansM', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
    },
  },
  plugins: [],
};