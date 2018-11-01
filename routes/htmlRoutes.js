var db = require("../models");

// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app, passport) {
  // Load index page

  app.get("/", function (req, res) {
    // If the user already has an account send them to the intro-quest page
    if (req.user) {
      return res.render("intro-quest");
    }
    res.render("signup");
  });

  app.get("/signup", function (req, res) {
    // If the user already has an account send them to the intro-quest page
    if (req.user) {
      return res.render("introquest");
    }
    res.render("signup");
  });

  //dashboard route
  app.get("/dashboard", function (req, res) {
    if (req.user) {
      //if the user is logged in, return the chart, ticker, wishlist
      return res.render("dashboard");
    }
  })

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/intro-quest", isAuthenticated, function (req, res) {
    res.render("introquest");
  });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });


};