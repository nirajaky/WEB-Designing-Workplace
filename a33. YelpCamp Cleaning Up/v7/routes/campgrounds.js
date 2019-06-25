var express     = require("express");
var router      = express.Router();
var Campground  = require("../models/campground");
var Comment     = require("../models/comment");

// INDEX Show all Campground
router.get("/campgrounds", function (req, res) {
    // Get all campground from DB
    Campground.find({}, function (err, allCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/campgrounds.ejs", { campgrounds: allCampgrounds });
        }
    });

});

// CREATE Add new Campground to DB
router.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = { name: name, image: image, description: desc };
    // Create a new Campground and save it to DB
    Campground.create(newCampground, function (err, campground) {
        if (err) {
            console.log(err);
        } else {
            console.log("Campground Added");
            console.log(campground);
            // Redirect it back to campgrounds page
            res.redirect("/campgrounds");
        }
    });

});

// NEW- Show form to create new Campground
router.get("/campgrounds/new", function (req, res) {
    res.render("campgrounds/new.ejs");
});

// Show Delail info of one given id campground
router.get("/campgrounds/:id", function (req, res) {
    //find the campground with provided id
    Campground.findById(req.params.id).populate("comments").exec(function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            //console.log(foundCampground);
            //render the show templete with that id
            res.render("campgrounds/show.ejs", { campground: foundCampground });
        }
    });
});

module.exports = router;