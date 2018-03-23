const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const User = mongoose.model('users'); //fetches model class

//used for creating cookie token with mongodb entry
passport.serializeUser((user, done) => {
  done(null, user.id); //gets the mongoose _id
});

// used for incoming cookie to lookg if it's a user in the db
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(err => console.log(err));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id })
        .then(existingUser => {
          if (existingUser) {
            console.log(`Existing User found: ${existingUser}`);
            done(null, existingUser);
          } else {
            new User({ googleId: profile.id })
              .save()
              .then(user => done(null, user))
              .catch(err => console.log(err));
          }
        })
        .catch(err => console.log(err));
    }
  )
);
