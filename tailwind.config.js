/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B0F14',
        panel: '#121820',
        panel2: '#171F29',
        line: '#232C38',
        muted: '#8593A1',
        fg: '#E7ECEF',
        signal: '#4FD1C5',
        amber: '#F2B84B',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
