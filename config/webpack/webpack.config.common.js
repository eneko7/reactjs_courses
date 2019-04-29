const path = require('path');
const webpack = require('webpack');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,

  output: {
    filename: 'js/[name].js',
    path: path.resolve('./public'),
  },

  resolve: {
    extensions: ['.js', '.jsx', 'scss'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                'babel-plugin-redux-saga',
              ],
            },
          },
          'eslint-loader',
        ],
      },
      {
        test: /\.(ico|png|jpg|gif|svg|woff(2)?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/',
              context: 'src/',
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    isDevMod ? new webpack.NamedModulesPlugin() : new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDevMod ? '"development"' : '"production"',
      'process.env.BROWSER': JSON.stringify(true),
      __DEV__: isDevMod,
    }),
  ],
};
