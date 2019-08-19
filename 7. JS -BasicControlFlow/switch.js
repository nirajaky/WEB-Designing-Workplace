var tag = document.querySelector("p");
console.log(tag);
var day =4;

switch(day){
	case 1:
		console.log("Monday");
		tag.textContent = "Monday";
		break;
	case 2:
		console.log("Tuesday");
		tag.textContent = "Tuesday";
		break;
	case 3:
		console.log("Wed");
		tag.textContent = "Wed";
		break;
	case 4:
		console.log("Thr");
		tag.textContent = "Thr";
		break;
	case 5:
		console.log("Fri");
		tag.textContent = "Fri";
		break;
	case 6:
		console.log("Sat");
		tag.textContent = "Sat";
		break;
	case 7:
		console.log("Sun");
		tag.textContent = "Sun";
		break;
}

