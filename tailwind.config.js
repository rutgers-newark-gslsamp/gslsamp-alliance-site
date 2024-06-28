/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Times New Roman'],
    },
    extend: {
      colors: {
        'burgundy': '#6F1D1B',
        'dark_burgundy': '#310D0C',
        'mid_burgundy': '#631918',
        'off_white': '#ECECED',
        'dark_off_white': '#D9D9D9',
      },
    },
  },
  plugins: [],
}