/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAF7F2',
        surface: '#FFFCF8',
        tint: '#F2E7DF',
        tint2: '#E8DCD0',
        ink: '#2A2622',
        inkSoft: '#3E3831',
        prose: '#5C554D',
        muted: '#8A8177',
        faint: '#A89B8C',
        rule: '#E3DCD2',
        rule2: '#D8C9B9',
        accent: '#B4552F',
        accentHi: '#8E3F1F',
        accentLt: '#E08A62',
        onDark: '#FDFAF5',
        onDarkSoft: '#C9BEB2',
        onDarkMute: '#A79C90',
        darkRule: '#4A443D',
      },
      fontFamily: {
        display: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Karla', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        content: '1440px',
      },
      borderRadius: {
        DEFAULT: '3px',
      },
    },
  },
  plugins: [],
}
