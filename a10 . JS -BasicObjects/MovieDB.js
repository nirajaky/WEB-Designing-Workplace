var movie = [
	{
		title : "Race 3",
		rating: 1.5,
		hasWatched: true
	},
	{
		title : "Gully Boy",
		rating: 9,
		hasWatched: true
	},
	{
		title : "Zero",
		rating: 4,
		hasWatched: false
	},
	{
		title : "Thug Of Hindustan",
		rating: 5,
		hasWatched: false
	}
]

for(var i =0; i<movie.length; i++) {
	if (movie[i].hasWatched == true) {
		console.log("You have watched " + movie[i].title + "-" + movie[i].rating + " stars");
	}
	else if (movie[i].hasWatched == false) {
		console.log("You have not seen " + movie[i].title + "-" + movie[i].rating + " stars");
	}
}




