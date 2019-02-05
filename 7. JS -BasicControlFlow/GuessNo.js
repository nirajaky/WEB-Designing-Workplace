var secretNumber = 7;

var guess = Number(prompt("Guess a number"));

if (guess === secretNumber) {
	alert("You Guessed Right");
}
else if (guess > secretNumber) {
	alert("Too high, Guess again!");
}
else {
	alert("Too low, Guess again!");
}