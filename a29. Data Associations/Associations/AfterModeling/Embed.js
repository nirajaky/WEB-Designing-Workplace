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
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

//var newUser = new User({
//    email: "Bran@gmail.com",
//    name: "Bran Bran Bran"
//});
//newUser.posts.push({
//    title: "King",
//    content: "Now, I am the king of all seven kingdom"
//});
//newUser.posts.push({
//    title: "Sensa",
//    content: "You are the kimg in North"
//});

//============================================
//var newUser = new User({
//    email: "jon@email.com",
//    name: "Jon Snow"
//});

//newUser.save(function (err, user) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log(user);
//    }
//});

//var newPost = new Post({
//    title: "Night Watching",
//    content: "Its really a boring Stuff"
//});

//newPost.save(function (err, post) {
//    if(err){
//        console.log(err);
//    }else {
//        console.log(post);
//    }
//});

User.findOne({ name: "Bran Bran Bran" }, function (err, user) {
    if (err) {
        console.log(err);
    } else {
        user.posts.push({
            title: "Very One",
            content: "Blah Blah gdgd Blah"
        });
        console.log(user);
    }
});