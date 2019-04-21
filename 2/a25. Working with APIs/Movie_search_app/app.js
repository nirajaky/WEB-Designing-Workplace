var express = require("express");
var request = require("request");

var app = express();

app.get("/", function (req, res) {
    res.render("search.ejs");
});

app.get("/results", function (req, res) {
    var search = req.query.movie;
    var url = "http://www.omdbapi.com/?apikey=30293365&s=" + search;
    request(url , function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("results.ejs", { data: data });
        }
    });
});

app.listen(1000, function () {
    console.log("Movie App is running!");
});