// eslint-disable-next-line @typescript-eslint/no-var-requires
const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  /* config options here */
  env: {
    MAP_BOX_TOKEN: process.env.MAP_BOX_TOKEN,
  },
});
