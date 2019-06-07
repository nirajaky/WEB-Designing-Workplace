var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/demo", { useNewUrlParser: true });

// one:many relationship

//POST DATA- title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

//USER DATA- email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});
var User = mongoose.model("User", userSchema);

//Post.create({
//    title: "Have fun",
//    content: "Go for Movie"
//}, function (err, post) {
//        if (err) {
//            console.log(err);
//        } else {
//            User.findOne({ name: "Niraj" }, function (err, foundUser) {
//                if (err) {
//                    console.log(err);
//                } else {
//                    foundUser.posts.push(post);
//                    foundUser.save(function (err, data) {
//                        if (err) {
//                            console.log(err);
//                        } else {
//                            console.log(data);
//                        }
//                    })
//                }
//            });
//        }
//    });

// Find User and its all posts
User.findOne({ name: "Niraj" }).populate("posts").exec(function (err, user) {
    if(err){
        console.log(err);
    }else {
        console.log(user);
    }
})