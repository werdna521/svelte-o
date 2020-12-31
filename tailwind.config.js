// tailwind.config.js
const production = !process.env.ROLLUP_WATCH; // or some other env var like NODE_ENV
module.exports = {
  future: {
    // for tailwind 2.0 compat
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [
    // other plugins here
  ],
  purge: {
    content: [
      './src/**/*.svelte',
      // may also want to include base index.html
    ],
    enabled: production, // disable purge in dev
  },
  theme: {
    fontFamily: {
      base: ['Work Sans'],
    },
    colors: {
      background: '#E7EEF2',
      primary: '#4792BB',
      'primary-dark': '#3880A8',
      'accent-one': '#879098',
      'accent-two': '#4E5A86',
      dark: '#273038',
      white: '#F4F8FA',
      secondary: '#EEEEEE',
    },
    boxShadow: {
      card: '0 16px 100px rgba(0, 0, 0, .1)',
      input: '0 0 4px rgba(0, 0, 0, .1)',
      'input-active': '0 0 8px 2px rgba(0, 0, 0, .1)',
    },
    borderRadius: {
      card: '16px',
      input: '8px',
    },
  },
};
