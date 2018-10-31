var db = require("../models");
module.exports = function (app) {
  // Get all examples //BUDGET--------------------
  // app.get("/api/budget", function (req, res) {
  //   db.Budget.findAll({}).then(function (budgetData) {
  //     res.json(budgetData);
  //   }).catch(function (err) {
  //     if (err) throw err;
  //   });
  // });
  // Create a new example
  app.post("/api/chart", function (req, res) {
    console.log(req.body)
    
  });

  // // Create a new example with multiple inputs
  // app.post("/api/budget", function (req, res) {
  //   db.Budget.bulkCreate(req.body).then(function (budgetData) {
  //     res.json(budgetData).catch(function (err) {
  //       if (err) throw err;
  //     });
  //   });
  // });

  // app.get("/api/wishlist", function (req, res) {
  //   db.Wishlist.findAll({}).then(function (wishlistData) {
  //     res.json(wishlistData).catch(function (err) {
  //       if (err) throw err;
  //     });
  //   });
  // });
  // // Create a new example
  // app.post("/api/wishlist", function (req, res) {
  //   db.Wishlist.create(req.body).then(function (wishlistData) {
  //     res.json(wishlistData);
  //   }).catch(function (err) {
  //     if (err) throw err;
  //   }).catch(function (err) {
  //     if (err) throw err;
  //   });
  // });
  // // Delete an example by id
  // app.delete("/api/budget/:id", function (req, res) {
  //   db.Budget.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (budgetData) {
  //     res.json(budgetData);
  //   }).catch(function (err) {
  //     if (err) throw err;
  //   }).catch(function (err) {
  //     if (err) throw err;
  //   });
  // });

  // // Update an example by id
  // app.put("/api/budget/:id", function (req, res) {
  //   db.Budget.update(req.body, {
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (budgetData) {
  //     res.json(budgetData);
  //   }).catch(function (err) {
  //     if (err) throw err;
  //   });
  // });

  // // Get all examples //WISHLIST--------------------
  // app.get("/api/wishlist", function (req, res) {
  //   db.Wishlist.findAll({}).then(function (wishlistData) {
  //     res.json(wishlistData);
  //   }).catch(function (err) {
  //     if (err) throw err;
  //   });
  // });

  // // Create a new example
  // app.post("/api/wishlist", function (req, res) {
  //   db.Wishlist.create(req.body).then(function (wishlistData) {
  //     res.json(wishlistData);
  //   }).catch(function (err) {
  //     if (err) throw err;
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/wishlist/:id", function (req, res) {
  //   db.Wishlist.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (wishlistData) {
  //     res.json(wishlistData);
  //   }).catch(function (err) {
  //     if (err) throw err;
  //   });
  // });

  // // Update an example by id
  // app.put("/api/wishlist/:id", function (req, res) {
  //   db.Wishlist.update(req.body, {
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (wishlistData) {
  //     res.json(wishlistData);
  //   }).catch(function (err) {
  //     if (err) throw err;
  //   });
  // });

  // //newsticker
  // app.get("/api/main", function (req, res) {
  //   // install request package
  //   // query api for news
  //   // in callback res.json returned data
  // });

};