// $("#fade").on("click", function(){
// 	$("div").fadeOut(1000, function(){
// 		console.log("Fade Out!! Will be printed after complete fading Out");
// 	});
// });

// $("#fade").on("click", function(){
// 	$("div").fadeIn(1000, function(){
// 		console.log("Fade In!! Will be printed after complete fading Out");
// 	});
// });

$("#fade").on("click", function(){
	$("div").fadeToggle(1000, function(){
		console.log("Fade Toggle!! Will be printed after complete Toggling Out");
	});
});

$("#slide").on("click", function(){
	$("div").slideUp(1000, function(){
		console.log("Fade Toggle!! Will be printed after complete Toggling Out");
		// $(this).remove();
	});
});

