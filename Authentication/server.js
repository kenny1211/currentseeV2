app.configure(function() {
  app.use(express.static('public'))
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({ secret: 'keyboard cat'}));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
});

app.post('/login',
  passport.authenticate('local', {successRedirect: '/',
                                  failureRedirect: '/login',
                                  failureFlash: true})
);

app.get('/auth/google',
  passport.authenticate('google', { score: "https://www.google.com/m8/feeds"}));

  //CALL BACK FUNCTION 

  app.get('/auth/google/callback',
    passport.authenticate('google', {failureRedirect: '/login'}),
    function(req, res) {
      res.redirect("/"};
    ));