var colors = ["red", "Green", "Blue", "Yellow", "Pink"];

for(var i =0; i<colors.length; i++) {
	console.log(colors[i]);
}

console.log("//////////////////////////////////////////////////////////");

colors.forEach(function(gd) {
	console.log(gd);
})

console.log("//////////////////////////////////////////////////////////");

function color(cl) {
	console.log("########");
	console.log(cl);
	console.log("########");
}
colors.forEach(color);