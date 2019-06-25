var express    = require("express");
var router     = express.Router({mergeParams: true});
var Campground = require("../models/campground");
var Comment    = require("../models/comment");

//===================
// COMMENTS ROUTES
//===================

// NEW- Show form to add comments
router.get("/campgrounds/:id/comments/new", isLoggedIn, function (req, res) {
    // Find our Campground
    Campground.findById(req.params.id, function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            res.render("comments/new.ejs", { campground: foundCampground });
        }
    });
});

// CREATE NEW COMMENTS
router.post("/campgrounds/:id/comments", isLoggedIn, function (req, res) {
    //lookup for the campground
    Campground.findById(req.params.id, function (err, foundCampground) {
        if (err) {
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            //create new comments
            Comment.create(req.body.comment, function (err, comment) {
                if (err) {
                    console.log(err);
                    res.redirect("/campgrounds");
                } else {
                    //add username and id to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    //save the comment
                    comment.save();
                    console.log(comment);
                    //connect new comment to the campground
                    foundCampground.comments.push(comment);
                    foundCampground.save();
                    res.redirect("/campgrounds/" + foundCampground._id);
                }
            });
        }
    });


    // redirect to show page
});

// MIDDLEWARE
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

module.exports = router;