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