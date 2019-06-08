var mongoose = require("mongoose")
//POST DATA- title, content (many)
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
module.exports = mongoose.model("Post", postSchema);