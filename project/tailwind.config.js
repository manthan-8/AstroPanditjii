/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fef5e6',
          600: '#f4a300',
        },
        'warm-cream': '#fef8f0',
        'spiritual-brown': '#4b2e2e',
      },
    },
  },
  plugins: [],
};
