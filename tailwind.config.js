export default {
  content: ['./index.html', './html/pages/**/*.html', './html/components/**/*.html', './js/**/*.js', './src/**/*.{js,ts,html}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        proxima: ['Proxima Nova"', 'sans-serif'],
      },
      colors:{
        'light1': 'rgb(126, 81, 255)'
      }
    },
    screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1500px', 
    huge: { min: '2000px' },
    big: { max: '1999px' },
    desktop: { max: '1750px' },
    laptop: { max: '1440px' },
    'table-big': { max: '1200px' },

    tablet: { min: '769px', max: '1000px' },
    'tablet-mini': { min: '601px', max: '768px' },
    phone: { max: '600px' },
  },
  },
  plugins: [],
}
