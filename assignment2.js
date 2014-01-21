// Part 1.  Write an if statement that prints the message "Javascript is awesome" to the console

console.log("\nPart 1.")
if (5 < 99) {
	console.log("Javascript is awesome")
}

// Part 2.  Write a while loop that prints out 1 through 10, one number at a time.

console.log("\nPart 2.")
var i = 1
while (i <= 10) {
	console.log(i);
	i += 1;
}

// Part 3.  Write a for loop that does the exact same thing as the previous while loop

console.log("\nPart 3.")
for (var i = 1; i <= 10 ;i += 1) {
	console.log(i);
}


// // Part 4.  Create an if else statement that tests for the whether or not the name of the 
// 			cheese is longer than eight characters, print "that must be some stinky cheese!"
// 			to the console.  Otherwise, print "That cheese might taste nice on some pizza!"

console.log("\nPart 4.")
var cheese = "baked brie"
var cheeseLength = cheese.length
if (cheeseLength > 8) {
	console.log("That must be some stinky cheese!");
} else {
	console.log("That cheese might taste nice on some pizza!");
}




// Part 5.  Write a combination of loops and conditions that prints out the size (diameter) of the pizza
// from which you just ate a slice.
		// for a pizza that is 9 inches to 18 inches, you should only print the message 5 times.
		// for a pizza larger than 18 inces, the message should print out 3 times.  
	// If the pizza is 8 inches or smaller, print out the message "That pizza was just too small."

console.log("\nPart 5.")
var pizzaSize = 18
for (var i = 1; i < 5; i = i + 1) {
	console.log(pizzaSize);
}
if (pizzaSize >= 9 && pizzaSize <= 18) {
	console.log(pizzaSize);  
} else if (pizzaSize > 18) {    
	console.log(pizzaSize);   //Need to print this 3 times!
} else {
	console.log("That pizza was just too small.")
}


// Part 6.  Use a loop and a condition (of some sort).
// 			Print out the string, reversed and with it's vowels deleted.

console.log("\nPart 6.")

var thisString = "supercalifragilisticexpialidocious!"
var output = "";   // Question - are we just creating 'output' here so that we can use it later?

for (var i = thisString.length - 1; i >= 0; i = i - 1) {
		switch (thisString[i]) {
	  	case 'a' : case 'e' : case 'i' : case 'o' : case 'u':
	  		break;
	  	default:
	  		output += thisString[i];
	}
}

console.log(output)

// Part 7.  
    // Using one console.log statement, print out all of the numbers from 1 and 20.
    //     If the number is divisible by 3, print "Fizz" instead of the number
    //     If it's not divisible by 3, just print the number.
    // Add an else if statement to check if the number is divisible by 5, and if it is, print out "Buzz" instead of the number.
    // Add another if statement somewhere in your code that checks for numbers that are divisible by both 3 and 5. For these special cases, print "FizzBuzz".

console.log("\nPart 7.")

var i = 1;

for (i; i <= 20; i++) {
	if (i % 3 === 0) {
		console.log("Fizz")
	} else if (i % 5 === 0) {
		console.log("Buzz")
	} else if (i % 3 === 0 && statement[0] % 5 === 0) {
		console.log("FizzBuzz")
	} else {
		console.log(i)
	}
}

// Replace "console.log" in the return lines with one console.log statement at the end!
// Hint?


