var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
    {
        name: "Niraj Mehta",
        image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        description: "Blah Blah Blahh Bkkkk"
    },
    {
        name: "Sonu Mehta",
        image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        description: "Blah Blah Blahh Bkkkk"
    },
    {
        name: "Cersi",
        image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        description: "Blah Blah Blahh Bkkkk"
    }
];

function seedDB() {
    Campground.remove({}, function (err) {
        if (err) {
            console.log("err");
        }
        console.log("Campgrounds Removed");
        // add a new Campground
        data.forEach(function (seed) {
            Campground.create(seed, function (err, campground) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Campground Added");
                    // Create a comment
                    Comment.create({
                        text: "This is really good",
                        author: "Niraj"
                    }, function (err, comment) {
                        if (err) {
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("comment Created");
                        }
                    });
                }
            });
        });    
    });
}

// module.exports is only Object, So, "()" is not required.
module.exports = seedDB;