//Part 1
if (true) { console.log("Javascript is awesome"); }

console.log("\n"); // For readability

//Part 2
var i=1;
while (i <= 10) {
	console.log(i);
	i++;
}

console.log("\n"); // For readability

//Part 3
for (var j=1; j <= 10; j++) {
	console.log(j);
}

console.log("\n"); // For readability

//Part 4
var cheese="Limburger";
if (cheese.length > 8) { 
	console.log("That must be some stinky cheese!");
} else {
	console.log("That cheese might taste nice on some pizza!");
}

console.log("\n"); // For readability

//Part 5
var pizzaSize=12;
var k;
if (pizzaSize >= 9 && pizzaSize <= 18) {
	for (k=1; k <= 5; k++) { console.log("I just ate a slice from a " + 
		pizzaSize + " inch pizza!"); }
} else if(pizzaSize > 18) {
	for (k=1; k <= 3; k++) { console.log("I just ate a slice from a " + 
		pizzaSize + " inch pizza!"); }
} else {
	console.log("That pizza was just too small.");
}

console.log("\n"); // For readability

//Part 6
var string="qwertyuiop";
var outputString="";
var l=string.length-1;
while(string[l]) {
	switch(string[l].toLowerCase()) {
		case 'a':
		case 'e':
		case 'i':
		case 'o':
		case 'u':
			l--; 
			break;
		default:
			outputString += string[l];
			l--;
			break;
	}
}
console.log(outputString);

console.log("\n"); // For readability

//Part 7
for (var m=1; m<=20; m++) {
	if (m%3 === 0 && m%5 === 0) { console.log("FizzBuzz"); }
	else if (m%3 === 0) { console.log("Fizz"); }
	else if (m%5 === 0) { console.log("Buzz"); }
	else { console.log(m); }
}