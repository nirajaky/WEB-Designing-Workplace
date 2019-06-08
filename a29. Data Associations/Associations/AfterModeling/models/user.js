var mongoose = require("mongoose");

//USER DATA- email, name (one)
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
module.exports = mongoose.model("User", userSchema);