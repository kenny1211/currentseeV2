// DEPENDENCIES
const db = require("../models");
const formidable = require('formidable');
const cloudinary = require('cloudinary');
require('dotenv').config();
const isAuthenticated = require("../config/middleware/isAuthenticated");
const moment = require('moment');
const passport = require("../config/passport");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// USER SESSION VARIABLE
let USER_SESSION = null;

module.exports = function (app, passport) {
  // PUBLIC ROUTES - NO USER AUTHORIZATION NEEDED

  app.get("/", function (req, res) {
    res.render("login");
  });

  app.get("/signup", function (req, res) {
    res.render("signup");
  });

  // LOGIN SIGNUP ROUTES

  app.get("/introquest", function (req, res) {
    res.render("introquest");
  });

  app.post("/api/login", passport.authenticate("local"), function (req, res) {

    USER_SESSION = req.user;
    console.log("------------------ USER_SESSION: ", USER_SESSION);
    console.log("LOGGING USER IN")

    res.json("/dashboard");
  });

  app.post("/api/signup", function (req, res) {

    // Create a new instance of formidable to handle the request info
    var form = new formidable.IncomingForm();

    // parse information for form fields and incoming files
    form.parse(req, function (err, fields, files) {
      console.log(fields);
      console.log(files.photo);

      /* IF PHOTO/FILE EXISTS */
      if (files.photo) {
        // upload file to cloudinary, which'll return an object for the new image
        cloudinary.uploader.upload(files.photo.path, function (result) {
          console.log(result);
          // create new user
          db.User.create({
            email: fields.email,
            password: fields.password,
            photo: result.secure_url
          }).then(function (userInfo) {
            // Upon successful signup, log user in
            req.login(userInfo, function (err) {
              if (err) {
                console.log(err)
                return res.status(422).json(err);
              }
              console.log(req.user);
              USER_SESSION = req.user;
              res.redirect("/introquest");
            });
          }).catch(function (err) {
            console.log(err)
            res.status(422).json(err);
          });
        });
        /* IF NO PHOTO/FILE */
      } else {
        db.User.create({
          email: fields.email,
          password: fields.password,
        }).then(function (userInfo) {
          // Upon successful signup, log user in
          req.login(userInfo, function (err) {
            if (err) {
              console.log(err)
              return res.status(422).json(err);
            }
            console.log(req.user);
            USER_SESSION = req.user;
            res.redirect("/introquest");
          });
        }).catch(function (err) {
          console.log(err);
          res.status(422).json(err);
        });
      }
    });

  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
        photo: req.user.photo
      });
    }
  });

  // RENDER DASHBOARD WITH USER AUTH
  app.get("/dashboard", isAuthenticated, function (req, res) {
    db.Budget.findAll({
      where: {
        UserId: USER_SESSION.id
      }
    }).then(function (data) {
      var hbsObject = {
        budgetItem: data
      };
      res.render('dashboard', hbsObject);
    });
  });



  // CRUD ROUTES ========================
  app.get("/api/budget", function (req, res) {
    db.Budget.findAll({
      where: {
        id: USER_SESSION.id
      }
    }).then(function (budgetData) {
      res.json(budgetData);
    });
  });
// Create a new example
app.post("/api/budget", function (req, res) {
  let inputArray = [];
  const data = req.body
  // console.log("DATA COMING FROM FRONT END", data);

  const bulkInput = (userData, incomeBoolean, savingsBoolean, name, date) => {
    console.log(userData)
    for (let i = 0; i < 7; i++) {
      inputArray.push({
        description: name, //output jquery id
        date: moment(date, "MM/DD/YYYY").add(i, "months").format("LL"), //moment conversion with below function
        amount: userData,
        category: name,
        income: incomeBoolean,
        savings: savingsBoolean,
        rollover: false,
        UserId: USER_SESSION.id
      })
    }
    console.log(inputArray);
    // post bulkInput to api to feed to database
    // upsertBulkInput(inputArray);
    // empty array
    return inputArray;
    inputArray = [];
  }

  // repeat above for all inputs
  const income = bulkInput(data.income, true, false, "Income", data.date);
  const savings = bulkInput(data.savings, false, true, "Savings", data.date);
  const travel = bulkInput(data.travel, false, false, "Travel", data.date);
  const utilities = bulkInput(data.utilities, false, false, "Utilities", data.date);
  const health = bulkInput(data.health, false, false, "Health", data.date);
  const home = bulkInput(data.home, false, false, "Home", data.date);

  // const insertData = income.concat(savings)

  console.log("------------- INSERT DATA: ", income.length);



  db.Budget.bulkCreate(income).then(function (budgetData) {
      res.json(budgetData);
    });


  // res.json("hello");

  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};