console.log("Part 1:\n");
var x = "Monday";
if ( x === "Monday") {
	console.log("Javascript is awesome");
} else if (x === "Tuesday") {
	console.log("Rails is awesome");
}

console.log("\nPart 2:\n");

 var i = 1;
   do {
    console.log(i);
    i += 1;
    } while (i < 11);

console.log("\nPart 3:\n");

for (var theCount = 1; theCount < 11; theCount++) {
	console.log(theCount);
}

console.log("\nPart 4:\n");

var cheese = "Stilton";
if (cheese.length < 8) {
  console.log("That must be some stinky cheese!");
} else {
  console.log("That cheese might taste nice on some pizza!")
}

console.log("\nPart 5:\n");

var pizzaSize = 12;
 if (pizzaSize < 9) {
	console.log("That pizza was just too small!");
	}
 if (pizzaSize <= 18) {
 	for	(i = 1; i < 6; i = i +1)
  	console.log(pizzaSize);
  	}
 if (pizzaSize > 18) {
  for	(i = 1; i < 4; i = i +1)
  	console.log(pizzaSize);
  	}

console.log("\nPart 6:\n");

var word = "uncopyrightable";
for (var i = word.length - 1; i >= 0; i = i - 1) {
	if (word[i] !== 'a')
	if (word[i] !== 'e')
	if (word[i] !== 'i')
	if (word[i] !== 'o')
	if (word[i] !== 'u')	{
	console.log(word[i]);
	}
}

console.log("\nPart 7:\n");

var i = 1;
for (i = 1; i < 21; i = i + 1) {
	if ((i % 3) + (i % 5) === 0) {
	console.log ("FizzBuzz");
  }
	else if ((i % 5) === 0) {
	console.log ("Buzz");
  }
  else if ((i % 3) === 0 ) {
		console.log("Fizz");
  } 
  else if ((i % 3) > 0 ) {
		console.log(i);
} 
}