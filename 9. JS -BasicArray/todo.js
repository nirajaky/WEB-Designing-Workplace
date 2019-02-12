var todoList = ["Wake Up"];
var input = prompt("What would you like to do?");

while(input !== "quit") {
	if(input ==="list") {
		console.log(todoList);
	}
	else if(input ==="new") {
		var a = prompt("Enter Data");
		todoList.push(a);
	}
	input = prompt("What would you like to do?");
}
console.log("App Closed");


var a = [1,2,3,4,5,6];
console.log(a);
