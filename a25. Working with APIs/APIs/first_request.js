var request = require("request");

console.log("Seed of wind is : ");
 
request("https://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22", function (error, response, body) {
    if (error) {
        console.log(error);
    } else if (response.statusCode == 200) {
        var parsedData = JSON.parse(body);
        console.log(parsedData.wind.speed);
    }
});