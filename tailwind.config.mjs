export default {
  content: ['./src/**/*.{astro,html,js}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1a2332',
          gold: '#d4af37',
          light: '#f8f9fa'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif']
      }
    }
  }
};
