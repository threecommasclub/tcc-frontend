const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: [require('postcss-import'), require('tailwindcss'), require('autoprefixer')],
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
