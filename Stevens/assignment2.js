//Question 1 //
if (true) {
	console.log("Javascript is awesome");
}


//Question 2//
var i = 0;

while (i < 10) {
	i += 1;
	console.log(i);
}


//Question 3//

for (var i = 1; i < 11; i++) {
	console.log(i);
}


//Question 4//
 var cheese = "emmental";

 if (cheese.length > 8) {
 	console.log("That must be some stinky cheese!");
 } else {
 	console.log("That cheese might taste nice on some pizza!");
 }


 //Question 5//
 var pizzaSize = 12;

 //I don't understand what you're trying to get at with #2 - the diameter doesn't change when you eat a slice....

 if (pizzaSize <= 8) {
 	console.log("That pizza was too small!");
 }


 //Question 6//
var string = "How do you solve a problem like Maria?"
var noVowels = "";

for (var i = string.length - 1; i >= 0; i--) {
	switch (string[i]) {
		case 'a': case 'e': case 'i': case 'o': case 'u':case 'A': case 'E': case 'I': case 'O': case 'U':
		break;
		default:
		noVowels += string[i];
	}
}
console.log(noVowels);

//Question 7//


for (var i = 1; i < 21; i++) {
  if (i % 15 === 0) {
	console.log("FizzBuzz");
  } else if (i % 3 === 0) {
  	console.log("Fizz");
  } else if (i % 5 === 0) {
  	console.log("Buzz");
  } else {
  	console.log(i);
  }
}












