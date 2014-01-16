//sandra golden
//js-winter-assignment-2

//part 1
console.log("part 1:");
if (true) {
	console.log("Javascript is awesome");
}

//part 2
console.log("\npart 2:");
var i = 1;
while(i <= 10){
	console.log(i);
	i++;
}

//part 3
console.log("\npart 3:");
for (var i = 1; i <= 10; i++) {
	console.log(i);
}

//part 4
console.log("\npart 4:");
var cheese = "mascarpone";
if(cheese.length > 8){
	console.log("That must be some stinky cheese!");
} else {
	console.log("That cheese might taste nice on some pizza!");
}

//part 5
console.log("\npart 5:");
var pizzaSize = 19;
if(pizzaSize <= 8){		//5.3
	console.log("That pizza was just too small!");
} else {
	var count;
	if(pizzaSize >= 9 && pizzaSize <= 18){	//5.2
		count = 5;
	} else {
		count = 3;
	}

	var i = 1;
	do {
		console.log("i've had " + i + " slice" + ((i!==1)?"s":"") + " of pizza from a " + pizzaSize + "-inch pizza.");
		i++;
	} while (i <= count);
}

//part 6
console.log("\npart 6:");
var inputString = "arbitrary";
var outputString6 = "";

for (var i = inputString.length - 1; i >= 0; i--) {
	switch(inputString[i].toLowerCase()){
		case "a": case "e": case "i": case "o": case "u":
			break;
		default:
			outputString6 += inputString[i];
			break;
	}
}
console.log("Here is the string \"" + inputString + "\" printed in reverse with the vowels (except for y) removed: " + outputString6);

//part 7
console.log("\npart 7:");
var outputString7 = "";

for (var i = 1; i <=20; i++) {
	if( (i % 3 === 0) && (i % 5 === 0)){
		outputString7 += "FizzBuzz";
	} else if(i % 3 === 0) {
		outputString7 += "Fizz";
	} else if(i % 5 === 0) {
		outputString7 += "Buzz";
	} else {
		outputString7 += i;
	}

	//add a comma and space between each number
	if (i < 20){
		outputString7 += ", ";
	}
}
console.log(outputString7);