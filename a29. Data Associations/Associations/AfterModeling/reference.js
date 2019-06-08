var mongoose = require("mongoose");
var Post = require("./models/post");
var User = require("./models/user");

mongoose.connect("mongodb://localhost/demo", { useNewUrlParser: true });

 //one:many relationship

Post.create({
    title: "Have fun part 2",
    content: "Go for Movie and gyming"
}, function (err, post) {
        if (err) {
            console.log(err);
        } else {
            User.findOne({ name: "Niraj" }, function (err, foundUser) {
                if (err) {
                    console.log(err);
                } else {
                    foundUser.posts.push(post);
                    foundUser.save(function (err, data) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(data);
                        }
                    })
                }
            });
        }
    });

// Find User and its all posts
User.findOne({ name: "Niraj" }).populate("posts").exec(function (err, user) {
    if(err){
        console.log(err);
    }else {
        console.log(user);
    }
})