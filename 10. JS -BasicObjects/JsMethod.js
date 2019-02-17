var catSpace = {
	speak : function() {
		console.log("MEOW!!");
	}
}

catSpace.speak();

var dogSpace = {};
dogSpace.speak = function(str) {
	console.log(str);
}

dogSpace.speak("BHAWW!");