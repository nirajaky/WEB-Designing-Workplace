var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    //res.send("Hi There"); We can responed once for one request
    res.render("home");
});

app.get("/getinlovewith/:thing", function (req, res) {
    var thing = req.params.thing;
    res.render("love", { thingVar: thing }); // Here passed an variable as Object
});

app.get("/posts", function (req, res) {
    var posts = [
        {title: "Cricket is Huge Game!!", author: "Niraj Mehta"},
        {title: "Football is Huge Game!!", author: "Sonu Lohra"},
        {title: "Swimming is Huge Game!!", author: "Tarak Mehta"},
    ];
    res.render("posts", { posts: posts });  // Here passed an array as Object
});

app.get("*", function (req, res) {
    res.send("This is silly, Your request is not valid");
});

app.listen(1000, function () {
    console.log("Server is Serving");
});