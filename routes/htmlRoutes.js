var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.user.findAll({}).then(function(user) {
      res.render("signin", {
        msg: "Welcome!",
        examples: user
      });
    });
  });

  // Load example page and pass in an example by id
  //change to show unique users page
  app.get("/home/:id", function(req, res) {
    db.user.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("index", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
