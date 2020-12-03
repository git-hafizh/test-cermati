module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        'primary-blue': '#007bc1',
        'primary-dark-blue': '#004a75',
        'primary-darken-blue':'#050328',
        'primary-orange': '#ff8000',
        'primary-dark-orange': '#cc6600',
        'primary-smoke-grey': '#e5e5e5'
       }),
       textColor: {
        'primary-blue': '#007bc1',
        'primary-dark-blue': '#004a75',
      },
      screens: {
        'phone': {'max': '479px'},
        // => @media (max-width: 479px) { ... }

        'tablet': {'min': '480px', 'max': '960px'},
        // => @media (min-width: 480px & max-width: 960px) { ... }
  
        'laptop': '961px',
        // => @media (min-width: 961px) { ... }
      },
      width: {
        '640': '640px',
        '480': '480px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
