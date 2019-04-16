var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("<h1>Hi There! welcome to my Assignment</h1>");
});

app.get("/speak/:animal", function (req, res) {
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        dog: "Woff!!",
        cow: "Moo!",
        goldfish: "...",
        cat : "I hate humans"
    }
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:str/:num", function (req, res) {
    var len = Number(req.params.num);
    var string = req.params.str;
    var result = "";
    for (let i = 1; i <= len; i++) {
        result = result + string + " ";
    }
    res.send(result);
});

app.get("*", function (req, res) {
    res.send("Sorry Page not found, What are you doing with your life!!");
});

app.listen(500, function () {
    console.log("Server Starting");
});