console.log("\nPart 1 Output:");

if (true){
	console.log("JavaScript is awesome!");
}

console.log("\nPart 2 Output:");

var i = 1;
while(i <= 10){
	console.log(i);
	i++;
}

console.log("\nPart 3 Output:");

for(var x = 1; x <=10; x++){
		console.log(x);
}

console.log("\nPart 4 Output:");
var cheese = "Smoked Gouda";

if(cheese.length > 8){
	console.log("That must be some stinky cheese!");
} else {
	console.log("That cheese might taste nice on some pizza!");
}

console.log("\nPart 5 Output:");
var pizzaSize = 18;

if (pizzaSize >= 9 && pizzaSize <=18){
	for (var j=0; j < 5; j++){
		console.log("Pizza Size is: "+pizzaSize);
	}
} else if (pizzaSize > 18){
	for (var j=0; j < 3; j++){
		console.log("Pizza Size is: "+pizzaSize);
	}
} else {
	console.log("That pizza was just too small!");
}

console.log("\nPart 6 Output:");
var arbString = "These pretzels are making me thirsty!";
var revString = "";
console.log(arbString);
for (var i = arbString.length; i > 0; i--){

 	switch(arbString[i-1]){
 	case "a":
 	case "e":
 	case "i": 
 	case "o":
 	case "u":
 	break;
 	case "y":
 	    // Because sometimes y!
 		if (Math.random() > 0.5){
 			revString += arbString[i-1];
 		}
 	break;
 	default:
 	revString += arbString[i-1];
 }
 
}

console.log(revString);

console.log("\nPart 7 Output:");

for (y=1; y<=20; y++){
	var dummyString = y;
	if (y%3 === 0){
		if (y%5 === 0){
			dummyString = "FizzBuzz";
		} else {
		dummyString = "Fizz";
		}
	} else if (y%5 === 0){
		dummyString = "Buzz";
	}
	console.log(dummyString);
}










