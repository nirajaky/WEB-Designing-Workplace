$("h1").click(function(){
	alert("You Clicked h1");
});

$("button").click(function(){
	$(this).text("Why you clicked");
	$("button:nth-of-type(3)").click(function(){
		$(this).text("Are you andha Bhakt.");
	})
});

// KEYPRESS

$("input").keypress(function(obj){
	if(obj.which === 13){
		alert("You Pressed Enter");
	}
	console.log("You Pressed a key");
});

// ON

$("h1").on("click", function(){
	$(this).css("color", "blue");
})

$("button").on("mouseover", function(){
	$(this).css({
		// font-weight: "bold",
		color: "green",
		background: "black"
	});
});

$("button").on("mouseout", function(){
	$(this).css("background", "white");
});

		

