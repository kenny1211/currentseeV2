var passport = require('passport')
, LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username}, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done (null, false, {message: 'Incorrect Username.'});
      }
      if (!user.validPassword(password)) {
        return done (null, false, {message: 'Incorrect Password.'});
      }
      return done(null, user);
    });
  }
));