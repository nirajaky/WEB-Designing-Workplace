var express     = require("express"),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    seedDB      = require("./seed");
seedDB();

mongoose.connect('mongodb://localhost/yelp_camp', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.render("landing.ejs");
});

// INDEX Show all Campground 
app.get("/campgrounds", function (req, res) {
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
app.post("/campgrounds", function (req, res) {
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
app.get("/campgrounds/new", function (req, res) {
    res.render("campgrounds/new.ejs");
});

// Show Delail info of one given id campground
app.get("/campgrounds/:id", function (req, res) {
    //find the campground with provided id
    Campground.findById(req.params.id).populate("comments").exec(function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            console.log(foundCampground);
            //render the show templete with that id
            res.render("campgrounds/show.ejs", {campground: foundCampground});
        }
    });
});

//=======================
// COMMENTS ROUTES
// NEW- Show form to add comments
app.get("/campgrounds/:id/comments/new", function (req, res) {
    // Find our Campground
    Campground.findById(req.params.id, function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            res.render("comments/new.ejs", {campground: foundCampground});
        }
    });
});

// CREATE NEW COMMENTS
app.post("/campgrounds/:id/comments", function (req, res) {
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
//=======================

app.listen(1000, function () {
    console.log("The YelpCamp Server is running");
});