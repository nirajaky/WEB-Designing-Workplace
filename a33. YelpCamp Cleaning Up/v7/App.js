var express       = require("express"),
    app           = express(),
    bodyParser    = require('body-parser'),
    mongoose      = require("mongoose"),
    passport      = require("passport"),
    passportLocal = require("passport-local"),
    User          = require("./models/user"),
    Campground    = require("./models/campground"),
    Comment       = require("./models/comment"),
    seedDB        = require("./seed");
seedDB();

var campgroundRoutes = require("./routes/campgrounds"),
    commentRoutes    = require("./routes/comments"),
    indexRoutes      = require("./routes/index");

mongoose.connect('mongodb://localhost/yelp_camp', { useNewUrlParser: true });

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Its is a secret",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//login requires
passport.use(new passportLocal(User.authenticate()));
//register requires
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Calls the function in every Routes & provide req.user instance to each templates
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
});

app.use(campgroundRoutes);
app.use(commentRoutes);
app.use(indexRoutes);


// MIDDLEWARE
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

app.listen(1000, function () {
    console.log("The YelpCamp Server is running");
});