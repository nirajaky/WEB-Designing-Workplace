var comment = {};
comment.data = ["Nice", "Keep It Up", "Not Good"];
comment.print = function(){
	for(var i =0; i<this.data.length; i++) {
		console.log(this.data[i]);
	}
}

comment.print();