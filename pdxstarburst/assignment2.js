//Part 1
var today = "monday";

if(today === "monday"){
	console.log("JavaScript is super Awesome!");
};

//Part 2
var i = 1;

while(i < 11){
	console.log("The current value of i is " + i);
	i+=1;
};

//Part 3
for(var i = 1;  i < 11;  i= i + 1){
	console.log("The current value of i is " + i);
};

//Part 4
var cheese = "pepperjack";

if(cheese.length > 8 ){
	console.log("That must be some stinky cheese!");
}  else{
	console.log("That cheese might taste nice on some pizza!");
};

//Part 5
var pizzaSize = 18;
var count = 0;


if(pizzaSize >= 9  && pizzaSize <=18){
	while(count <5 ){
	console.log("The diameter of my pizza is " + pizzaSize + " inches.");
	count ++;
	}

	} else if(pizzaSize < 9){
	while(count <3 ){
	console.log("I'm not cut out to be a real pizza because I am too small.");
 	count ++;
	}
	
	} else{
	console.log("I am a big pizza! " + " I am " + pizzaSize +  " inches in diameter." );

}; 

//Part 6
var x = "Oulipo";
var word = x.toLowerCase();
var output = "";


for(var i = word.length - 1;  i >= 0;  i= i-1  ){  // or i--
		if(word[i] !== "a" && 
			word[i] !== "e" &&
			word[i] !== "i" &&
			word[i] !== "o" &&
			word[i] !== "u" &&
			word[i] !== "y" 
			){
		
		output = output + word[i];
	    //output += word[i];
	}
};



console.log(output);

//Part 7
var number = 1;
var print = "";

while (number < 21){
	
	if (number  % 3 === 0  &&  number  % 5 === 0){
	print = "fizzbuzz";

	} else if (number  % 3 === 0){
	print = "fizz";

	} else if (number  % 5 === 0){
	print = "buzz";
	
	} else{
	print = number;

}
  
	number ++;
	console.log(print);
}; 
