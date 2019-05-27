const express = require('express');
const path = require('path');
const webpack = require('webpack');

const app = express();

if (process.env.NODE_ENV === 'production') {
  const serverRenderer = require('./build/js/serverRenderer').default; // eslint-disable-line global-require
  app.use(express.static(path.join(__dirname, 'build')));
  app.use(express.static('public'));
  app.use(serverRenderer());
} else {
  const webpackDevMiddleware = require('webpack-dev-middleware'); // eslint-disable-line global-require
  const webpackHotMiddleware = require('webpack-hot-middleware'); // eslint-disable-line global-require
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware'); // eslint-disable-line global-require
  const webpackConfig = require('./config/webpack'); // eslint-disable-line global-require

  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
  app.use(webpackHotServerMiddleware(compiler));
}

app.listen(process.env.PORT || 3000, () => {
  console.log('Example app listening on port 3000!\n'); // eslint-disable-line no-console
});
