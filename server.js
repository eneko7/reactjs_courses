/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable global-require */
const express = require('express');
const webpack = require('webpack');
// const path = require('path');
const config = require('./webpack.config');

const app = express();

// app.use('/build', express.static(path.resolve(__dirname, './build')));

if (process.env.NODE_ENV === 'development') {
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
  const compiler = webpack(config);
  console.log(process.env.NODE_ENV);

  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
  app.use(webpackHotServerMiddleware(compiler));
} else {
  const serverRenderer = require('./public/js/serverRenderer').default;

  app.use(express.static('public'));
  app.use(serverRenderer());
}

app.listen(process.env.PORT || 3000, () => {
  console.log('Example app listening on port 3000!\n');
});
