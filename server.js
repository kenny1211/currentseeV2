require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var passport = require('passport');
var session = require('express-session')
var bodyParser = require('body-parser')


var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.set('views', './views')
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

//For bodyParser
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

/*app.get('/', function(req, res) {
  res.send('Welcome to Passport with Sequelize!');
});*/

//For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized:true})); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

// Routes
require("./routes/apiRoutes")(app, passport);


//auth route


var syncOptions = { };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}



//loadpassport strategies


// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;