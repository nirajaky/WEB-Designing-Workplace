var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hi There Niraj!!!");
});

app.get("/bye", function (req, res) {
    res.send("<h1>GoodBye</h1>");
});

app.get("/cat", function (req, res) {
    res.send("MEOWWW!!");
});

app.get("/r/:subReddit", function (req, res) {
    console.log(req.params);
    res.send("Welcome to " + req.params.subReddit + " subreddit");
});

app.get("/r/:subReddit/comments/:id/:title/", function (req, res) {
    console.log(req.params);
    res.send("Welcome to comment page by " + req.params.title);
});

app.get("*", function (req, res) {
    res.send("YOUR ARE A STAR!!!");
});

app.listen(500,  function () {
    console.log("Serving App.js");
});