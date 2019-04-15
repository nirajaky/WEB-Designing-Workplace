var faker = require("faker");

console.log("=================");
console.log("WELCOME TO MY SHOP");
console.log("=================");

faker.locale = "de";
for (var i = 1; i <= 10; i++) {
    console.log(faker.commerce.productName() + "-" + faker.commerce.price());
}