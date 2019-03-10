// var body = document.querySelector("body");

var isBlue = false;

setInterval(function() {
	if (isBlue) {
		document.body.style.background = "white";
	}
	else {
		document.body.style.backgroundColor = "red";
	}
	isBlue = !isBlue;
}, 1000);