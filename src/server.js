//webpack deployment
//RUN postinstall
//RUN start

//package.json
//scripts:
//postinstall: 'webpack -p'
//start: 'node server.js'

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

app.use(express.static(__dirname));

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('acces token: ', accessToken);
      console.log('refresh token:', refreshToken);
      console.log('profile: ', profile);
    }
  )
);

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/');
  }
);

app.listen(PORT);
console.log(`Server started on Port ${PORT}`);
