// Full Stack JavaScript, Winter 2014, Assignment 2 by Ian Forrest
// Part 1
if (true) {
	console.log("Javascript is awesome. And rad.");
}

// Part 2
var timbersGoals = 1;
while (timbersGoals < 11) {
	console.log(timbersGoals);
	timbersGoals += 1;
}

// Part 3
for	(var timbersGoals = 1; timbersGoals !== 11; timbersGoals += 1) {
		console.log(timbersGoals);
	} 

// Part 4
var cheese = "manchego";
if (cheese.length > 8) {
	console.log("Dang, that cheese stinky.");
} else {
	console.log("That cheese would be mighty nice on some pizza!");
}

// Part 5
var pizzaSize = 7;
var slices = 1;
var mmmPizza = "I just ate a slice of a " + pizzaSize + "\" pizza.";

if (pizzaSize > 8 && pizzaSize < 19) { 
	do {
		console.log(mmmPizza);
		slices +=1;
	} while (slices < 6);
} else if (pizzaSize > 18) {
	do {
		console.log(mmmPizza);
		slices +=1;
	} while (slices < 4);
} else if (pizzaSize < 9) {
		console.log("That pizza is too small. What is this? A pizza for ants?");
	}

// Part 6
var nbaTeam = "New York Knickerbockers";
var output = "";
for (var melo = nbaTeam.length - 1; melo >= 0; melo--) { 
	output = output + nbaTeam[melo].replace(/a|e|i|o|u/, "");
	}
	console.log(nbaTeam + " reversed and without vowels is " + output);

// Part 7
for (var aNumber = 1; aNumber < 21; aNumber ++) {
	if (aNumber % 3 === 0 && aNumber != 15) {
		console.log("Fizz");
	} else if (aNumber % 5 === 0 && aNumber != 15) {
		console.log("Buzz");
	} else if (aNumber % 3 === 0 && aNumber % 5 === 0) {
		console.log("FizzBuzz");
	} else {
		console.log(aNumber);
	}
}

