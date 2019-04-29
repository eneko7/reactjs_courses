const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: './src/serverRenderer.jsx',
  externals: [nodeExternals()],
  output: {
    filename: 'js/serverRenderer.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        include: /src/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', // It doesn't embed CSS but only exports the identifier mappings.
            options: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/main_[contenthash].css',
    }),
  ],
});
