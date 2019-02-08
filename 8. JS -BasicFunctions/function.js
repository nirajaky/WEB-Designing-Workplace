function isEven(num) {
	if(num % 2 == 0) {
		return true;
	}
	else {
		return false;
	}
}
var bool = isEven(43);
console.log(bool);

/////////////////////////////////////////////////////

var factorial = 1;
function fact(num1) {
	for(var i =num1; i>=1; i--) {
		factorial = factorial *i;
	}
	return factorial;
}
var result = fact(5);
console.log(result);

///////////////////////////////////////////////////

var newStr ="";
function kebabToSnake(str) {
	for(var i = 0; i<str.length; i++) {
		if(str.charAt(i) == "-") {
			newStr = newStr + "_";
		}
		else
			newStr = newStr + str.charAt(i);
	}
	return newStr;
}
var strResult = kebabToSnake("Niraj-Kumar");
console.log(strResult);