var express                 = require("express"),
    app                     = express(),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose"),
    User                    = require("./models/user"),
    passport                = require("passport"),
    passportLocal           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose");

mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "My Name is Niraj",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));

//login requires
passport.use(new passportLocal(User.authenticate()));
//register requires
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//==========
// ROUTES
//==========
app.get("/", function (req, res) {
    res.render("home.ejs");
});

// MIDDLEWARE ADDED
app.get("/secret", isLoggedIn, function (req, res) {
    res.render("secret.ejs");
});

// Auth Routes
// Show Sign Up form
app.get("/register", function (req, res) {
    res.render("register.ejs");
});

// Handling user SignUp
app.post("/register", function (req, res) {
    User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            return res.redirect("/register");
        } 
        passport.authenticate("local")(req, res, function () {
            res.render("secret.ejs");
        });
    });
});

// LOGIN ROUTES
// Render Login Form
app.get("/login", function (req, res) {
    res.render("login.ejs");
});

// Login Logic
// MIDDLEWARE
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function (req, res) {
    });

// LOGOUT ROUTES
app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

// MIDDLEWARE FUNCTIONS
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

app.listen(1000, function () {
    console.log("Server Running");
});
