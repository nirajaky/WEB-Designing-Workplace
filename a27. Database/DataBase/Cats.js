const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cat_app', { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temprament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a cat to Database

Cat.create({
    name: "Lucy",
    age: 6,
    temprament: "Best"
}, function (err, cat) {
    if (err) {
        console.log("SOMETHING WENT WRONG in CREATE");
    } else {
        console.log("DATA ADDED");
        console.log(cat);
    }
});

//Retriving the cat data from database and console.log to each one 

Cat.find({}, function (err, catss) {
    if (err) {
        console.log("SOMETHING WENT WRONG in FIND");
    } else {
        console.log("DATA ARE");
        console.log(catss);
    }
});

//console.log("Mongoose Running");