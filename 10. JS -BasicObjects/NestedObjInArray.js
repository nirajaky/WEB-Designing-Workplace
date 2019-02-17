var post = [
	{
		title : "Cats are medicore",
		author :"Niraj",
		comment : ["Asm Post", "Terrible post"]
	},
	{
		title : "Cats are actually Awesome",
		author : "Sonu",
		comment : ["<3", "Go to Hell",
		{
			name : "Nii", 
			age : [12,45]
		}
		]
	}
]
console.log(post[0].title);

console.log(post[1].comment[1]);

console.log(post[1].comment[2].age[0] );

