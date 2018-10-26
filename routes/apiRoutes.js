var db = require("../models");
module.exports = function(app) {
<<<<<<< HEAD
  // Get all examples //BUDGET--------------------
=======
  // Get all examples
>>>>>>> f583152f1351d7eca93ea4d548117040918f5c08
  app.get("/api/budget", function(req, res) {
    db.Budget.findAll({}).then(function(budgetData) {
      res.json(budgetData);
    });
  });
  // Create a new example
  app.post("/api/budget", function(req, res) {
    db.Budget.create(req.body).then(function(budgetData) {
      res.json(budgetData);
<<<<<<< HEAD
=======
    });
  });
  // Delete an example by id
  app.delete("/api/budget/:id", function(req, res) {
    db.Budget.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(budgetData) {
      res.json(budgetData);
    });
  });
  // Update an example by id
  app.put("/api/budget/:id", function(req, res) {
    db.Budget.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(budgetData) {
      res.json(budgetData);
>>>>>>> f583152f1351d7eca93ea4d548117040918f5c08
    });
  });

  app.get("/api/wishlist", function(req, res) {
    db.Wishlist.findAll({}).then(function(wishlistData) {
      res.json(wishlistData);
    });
  });
  // Create a new example
  app.post("/api/wishlist", function(req, res) {
    db.Wishlist.create(req.body).then(function(wishlistData) {
      res.json(wishlistData);
    });
  });
  // Delete an example by id
<<<<<<< HEAD
  app.delete("/api/budget/:id", function(req, res) {
    db.Budget.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(budgetData) {
      res.json(budgetData);
    });
  });

  // Update an example by id
  app.put("/api/budget/:id", function(req, res) {
    db.Budget.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(budgetData) {
      res.json(budgetData);
    });
  });

  // Get all examples //WISHLIST--------------------
  app.get("/api/wishlist", function(req, res) {
    db.Wishlist.findAll({}).then(function(wishlistData) {
      res.json(wishlistData);
    });
  });

  // Create a new example
  app.post("/api/wishlist", function(req, res) {
    db.Wishlist.create(req.body).then(function(wishlistData) {
      res.json(wishlistData);
    });
  });

  // Delete an example by id
  app.delete("/api/wishlist/:id", function(req, res) {
    db.Wishlist.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(wishlistData) {
      res.json(wishlistData);
    });
  });

  // Update an example by id
  app.put("/api/wishlist/:id", function(req, res) {
    db.Wishlist.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(wishlistData) {
      res.json(wishlistData);
    });
  });

  // USER ROUTE------------------------------
=======
  app.delete("/api/wishlist/:id", function(req, res) {
    db.Wishlist.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(wishlistData) {
      res.json(wishlistData);
    });
  });
  // Update an example by id
  app.put("/api/wishlist/:id", function(req, res) {
    db.Wishlist.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(wishlistData) {
      res.json(wishlistData);
    });
  });
  //
>>>>>>> f583152f1351d7eca93ea4d548117040918f5c08
  app.get(
    "/api/user",
    passport.authenticate("basic", { session: false }),
    function(req, res) {
      res.json(req.user);
    }
  );
};
