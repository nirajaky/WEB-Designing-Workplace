var express     = require("express"),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    seedDB = require("./seed");
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
            res.render("campgrounds.ejs", { campgrounds: allCampgrounds });
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
    res.render("new.ejs");
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
            res.render("show.ejs", {campground: foundCampground});
        }
    });
});

app.listen(1000, function () {
    console.log("The YelpCamp Server is running");
});