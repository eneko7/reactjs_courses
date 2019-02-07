/* eslint-disable global-require */
/* eslint-disable no-console */
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./config/webpack/webpack.production.config');
} else {
  module.exports = require('./config/webpack/webpack.development.config');
}
