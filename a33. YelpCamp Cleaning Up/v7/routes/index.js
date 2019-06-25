var express   = require("express");
var router    = express.Router();
var passport  = require("passport");
var User      = require("../models/user");

// Rooy Route
router.get("/", function (req, res) {
    res.render("landing.ejs");
});

//=======================
// AUTH ROUTES
//=======================

// Show register form
router.get("/register", function (req, res) {
    res.render("register.ejs");
});
// Sign Up logics
router.post("/register", function (req, res) {
    var newUser = new User({ username: req.body.password });
    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            return res.redirect("/register");
        }
        passport.authenticate("local")(req, res, function () {
            res.redirect("/campgrounds");
        });
    });
});

//Show Login Form
router.get("/login", function (req, res) {
    res.render("login.ejs")
});
// LogIn Logics
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function (req, res) {
    });

// LogOut Routes
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/campgrounds");
});

module.exports = router;