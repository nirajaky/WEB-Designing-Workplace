var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

var friends = ["Niraj", "Supriya", "Sumant", "Kajal"];

//app.set("view engine", "ejs");

app.get("", function (req, res) {
    res.render("home.ejs");
});

app.get("/friends", function (req, res) {
    res.render("friends.ejs", { friends: friends });
});

app.post("/addfriends", function (req, res) {
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.listen(4000, function () {
    console.log("Serving server!!!");
});