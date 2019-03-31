// MARKING COMPLETION
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// DELETING TODOS
$("ul").on("click", "span", function(obj) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	obj.stopPropagation();
});

// ADDING TODOS
$("input[type='text']").keypress(function(obj){
	if(obj.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		// creating a new li and add to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

$(".fas").click(function(){
	$("input[type='text']").fadeToggle();
});