var todoList = ["Buy Fish"];
var input = prompt("What would you like to do?");

while(input !== "quit") {
	if(input ==="list") {
		console.log("**********");
		todoList.forEach(function(todo, i) {
			console.log(i + ": " + todo);
		})
		console.log("**********");
	}
	else if(input ==="new") {
		var a = prompt("Enter Data");
		todoList.push(a);
		console.log("Data Added");
	}
	else if(input === "delete") {
		var index = prompt("Enter Index to delete item");
		todoList.splice(index, 1);
		console.log("Item Deleted")
	}
	input = prompt("What would you like to do?");
}
console.log("App Closed");


// var a = [1,2,3,4,5,6];
// console.log(a);