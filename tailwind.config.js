module.exports = {
  important: true,
  theme: {
    extend: {},
    pseudo: {
      // defaults to {'before': 'before', 'after': 'after'}
      before: 'before',
      after: 'after',
      'not-first': 'not(:first-child)',
    },
    borderRadius: {
      none: '0',
      sm: '.125rem',
      default: '.25rem',
      default: '4px',
      lg: '.5rem',
      full: '9999px',
      large: '12px',
      exlg: '1em',
    },
    inset: {
      '0': 0,
      '05': '5%',
      '60': '60%',
      '70': '70%',
      '1/10': '10%',
      '2/10': '20%',
      '3/10': '30%',
      '4/10': '40%',
      '1/2': '50%',
    },
  },
  variants: {},
  plugins: [],
};
