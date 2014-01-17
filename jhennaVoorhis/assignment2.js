//Part 1
if(true){
	console.log("Javascript is awesome");
}

//Part 2
var i = 1;
while (i<11){
	console.log(i);
	i++;
}
//Part 3
for (var j = 1; j<11; j++){
	console.log(j);
}

//Part 4
var cheese = "Gouda";
if (cheese.length > 8){
	console.log("that must be some stinky cheese!");
} else {
	console.log("That cheese might taste nice on some pizza!");
}

//Part 5
var pizzaSize = 12;
if (pizzaSize > 8 && pizzaSize < 19){
	for (var j = 0; j < 5; j++){
		console.log("This pizza is " + pizzaSize + " inches in diameter!");
	}	
} else if (pizzaSize > 18){
	for (var j = 0; j < 3; j++){
		console.log("This pizza is " + pizzaSize + " inches in diameter!");
	}
} else if (pizzaSize > 0 && pizzaSize < 9) {
	console.log("That pizza was just too small.");
} else{
	console.log("This is a trick!")
}

//Part 6
var arb = "This is a string oh yeah!"
var arbRev = "";
for(var j = (arb.length-1); j>=0; j--){
	if (arb[j]!=="a" && arb[j]!=="e" && arb[j]!=="i" && arb[j]!=="o" && arb[j]!=="u"){
		arbRev += arb[j];
	}
}
console.log(arbRev);

//Part 7
var list = "";
for (j=1; j<21; j++){
	if((j%3)===0 && (j%5)===0) {
		list += "FizzBuzz ";
	} else if ((j%5)===0){
		list += "Buzz ";
	} else if ((j%3)===0){
		list += "Fizz "
	} else {
		list += j + " ";
	}
}
console.log(list);






