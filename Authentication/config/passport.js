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


//PROTECT ENDPOINTS 

app.get('/api/me',
passport.authenticate('basic', {session: false}),
function(req, res) {
  res.json(req.user);
});

//CONFIGURATION 
passport.use(new DigegstStrategy({ qop: 'auth'},
function(username, done) {
  User.findOne({ username: username}, function (err, user) {
    if (err) {return done(err);}
    if (!user) { return done(null, false); }
    return done(null,user, user.password);
  });
},
function(params, done) {
  //validate nonces as neccesary
  done(null,true)
}
));



var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
passport.use(new GoogleStrategy({
    consumerKey: GOOGLE_CONSUMER_KEY,
    consumerSecret: GOOGLE_CONSUMER_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(token, tokenSecret, profile, done) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      });
  }
));