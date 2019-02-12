
console.log("Program To reverse Array");
var arr1 = [1,"Niraj",3,4,5];

function printReverse(arrRev) {
	for(var i =(arrRev.length-1); i>=0; i--) {
		console.log(arrRev[i]);
	}
}
printReverse(arr1);

////////////////////////////////////////////////// 

console.log("Program To check Uniformanity of Array");
var arr2 = [1,1,2,1,1,1];
var flag;

function isUniform(arrUni) {
	var a = arrUni[0];
	for(var i =1; i<arrUni.length; i++) {
		if(a === arrUni[i]) {
			flag = true;
		}
		else {
			flag = false;
			break;
		}
	}
	if (flag == true) {
		console.log(true);
	}
	else {
		console.log(false)
	}

}
isUniform(arr2);

/////////////////////////////////////////////////////

console.log("Program To find Sum of Array");
var arr3 = [1,2,3,4,5,6];
var sum = 0;

function sumArray(sArray) {
	for(var i =0; i<sArray.length; i++) {
		sum = sum + sArray[i];
	}
	console.log("Sum is : " + sum)
}
sumArray(arr3);

///////////////////////////////////////////////////

console.log("Program To find Maximum of Array");
var arr4 = [455,51,47,254,6684,14789];
var maximum;

function max(maxi) {
	maximum = maxi[0];
	for(var i =0; i<maxi.length; i++) {
		if(maxi[i] > maximum)
			maximum = maxi[i];
	}
	console.log(maximum);
}
max(arr4);
