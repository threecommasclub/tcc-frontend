/* eslint-disable */
const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const nextConfig = {
  webpack: (config, options) => {
    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin());
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()];
    }

    return config;
  },
  target: 'serverless',
};

module.exports = withPlugins(
  [
    [
      withCSS,
      {
        env: {
          MAP_BOX_TOKEN: process.env.MAP_BOX_TOKEN,
        },
      },
    ],
  ],
  nextConfig
);
