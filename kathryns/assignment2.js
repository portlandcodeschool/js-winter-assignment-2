//JavaScript Assignment 
//January 15, 2014

//Part 1
if (true) {
	console.log('JavaScript is Awesome');
}

//Part 2
var i = 1;
while (i <= 10) {
	console.log(i);
	i ++;

}

//Part 3
var i = 1
for(i = 1; i !==11; i ++) {
	console.log(i);
}

//Part 4
var cheese = "brie";

if (cheese.length > 8) {
	console.log("That must be some stinky cheese!");
} else {
	console.log("That cheese might taste nice on some pizza!");
}

//Part 5 
var pizzaSize = 17;

if (pizzaSize > 18) {
	var i = (pizzaSize - 18)/3
	while (pizzaSize > 18) {
		console.log("This pizza is " + pizzaSize + " inches");
		pizzaSize = pizzaSize - i;
	}
} else if (pizzaSize > 8) {
	var i = (pizzaSize - 8)/5
	while (pizzaSize > 8) {
		console.log("This pizza is " + pizzaSize + "inches");
		pizzaSize = pizzaSize - i;	
	}
	
} else {
	//
	console.log("This slice is " + pizzaSize + " inches! That pizza was just too small!")
}

//Part 6
var word = 'Shennanigans';
var backwardsWord = "";

for (var i = word.length - 1; i >= 0; i -= 1) { 
	backwardsWord = backwardsWord + word[i];
	/*console.log(i);*/
}

for (var x = 0 ; x < backwardsWord.length; x ++) {
	if (
		backwardsWord[x] !== 'a' && 
		backwardsWord[x] !== 'e' &&
		backwardsWord[x] !== 'i' &&
		backwardsWord[x] !== 'o' &&
		backwardsWord[x] !== 'u'
		) {
			console.log(backwardsWord[x]);
	}
}

//Part 7
var i = 1
for(i = 1; i !==21; i ++) {
	if (i % 3 === 0 && i % 5 === 0 ) {
		console.log('FizzBuzz');
	}
	else if (i % 3 === 0) {
		console.log('Fizz');
	} 
	else if (i % 5 ===0) {
		console.log('Buzz');
	} else {
	console.log(i);
	}
}


