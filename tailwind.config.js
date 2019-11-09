module.exports = {
  important: true,
  theme: {
    extend: {},
    pseudo: {
      before: 'before',
      after: 'after',
      'not-first': 'not(:first-child)',
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
    },
    borderRadius: {
      none: '0',
      sm: '.125rem',
      default: '.25rem',
      lg: '.5rem',
      full: '9999px',
      large: '12px',
      exlg: '1em',
    },
    inset: {
      in10: '-10px',
      in15: '-15px',
      in20: '-20px',
      '0': 0,
      '05': '5%',
      '60': '60%',
      '70': '70%',
      '80': '80%',
      '1/10': '10%',
      '2/10': '20%',
      '3/10': '30%',
      '4/10': '40%',
      '1/2': '50%',
    },
    // colors: {
    //   brownGrey: '#adadad',
    //   paleBlue: '#e2e5eb',
    //   red: '#de3618',
    // }
  },
  variants: {},
  plugins: [],
};
