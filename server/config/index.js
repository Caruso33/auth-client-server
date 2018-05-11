const env = process.env.NODE_ENV || 'development';

if (env === 'production') {
  // we are in production - return the prod set of keys
  module.exports = require('./prod');
} else if (env === 'test') {
  module.exports = require('./test');
} else {
  // we are in development - return the dev keys!!!
  module.exports = require('./dev');
}
