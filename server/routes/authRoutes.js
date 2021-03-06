const Authentication = require('../controllers/authentication');
const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = app => {
  app.post('/api/auth/signin', requireSignin, Authentication.signin);
  app.post('/api/auth/signup', Authentication.signup);
};
