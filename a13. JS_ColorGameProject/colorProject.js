var numSquare = 6;
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelectorAll("#message");
var h1 = document.querySelector("h1");
var buttomReset = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

var colors = generateRandomColor(numSquare);

var colorPicked = pickColor();


for(var i=0; i<modeButton.length; i++){
	modeButton[i].addEventListener("click", function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		console.log(this.textContent);
		if(this.textContent === "Easy"){
			numSquare = 3;
		}else {
			numSquare = 6; 
		}
		reset();
	});
}

function reset() {
	colors = generateRandomColor(numSquare);
	colorPicked = pickColor();
	colorDisplay.textContent = colorPicked.toUpperCase();
	buttomReset.textContent = "New Color";
	message.textContent = "";

	for(var i=0; i<square.length; i++) {
		//add initial color to each Square
		if(colors[i]){
			square[i].style.display = "block";
			square[i].style.background = colors[i];
		} else{
			square[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

buttomReset.addEventListener("click", function(){
	reset();
});

colorDisplay.textContent = colorPicked.toUpperCase();

for(var i=0; i<square.length; i++) {
	//add initial color to each Square
	square[i].style.background = colors[i];

	square[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;
		// console.log(clickedColor);
		// console.log(colorPicked);

		// Compare this colors
		if (clickedColor == colorPicked) {
			changeColor(colorPicked);
			message.textContent = "Correct!";
			h1.style.background = clickedColor;
			buttomReset.textContent = "Play Again?";
		} else {
			this.style.background = "#232323";
			message.textContent = "Try Again!!";
		}
	});
}

function changeColor(color) {
	//Loop through all color
	for(var i=0; i<square.length; i++) {
		//Change each color to given color
		square[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num) {
	var arr = [];
	for(var i=0; i<num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}