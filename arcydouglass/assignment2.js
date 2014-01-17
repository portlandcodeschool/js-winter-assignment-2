//Assignment 02
//Javascript class
//Arcy Douglass
//January 16, 2014

//Variables
var answer = "Yes";
var index = 1;
var cheese = "pepper jack";
var pizzaSize = 18;
var arbitraryString = "arbitrary string";
var reversedString = "";
var reversedStringNoVowels = "";
var output;

//Part 1
console.log("\nPart 1:");
if ( answer = "Yes"){ console.log("\nJavascript is awesome!\n");}

//Part 2
console.log("\nPart 2:");
while (index <= 10){
	console.log(index);
	index++;
}

//Part 3
console.log("\nPart 3:");
for (var i = 1; i <= 10; i ++)
{
	console.log(i);
}

//Part 4
console.log("\nPart 4:");
if (cheese.length > 8){
	console.log("\nThat must be some stinky cheese!\n");
} else {
	console.log("\nThat cheese might taste nice on pizza!\n");
}

//Part 5
console.log("\nPart 4:");
console.log("\nPizzaSize = " + pizzaSize + "\n");
if ((pizzaSize >= 9) || (pizzaSize <= 18)){
	index = 5;
} else if (pizzaSize > 18) {
	index = 3;
}

for (var i = 1; i <= index; i ++)
{
	console.log("That pizza was too small!");
}

//Part 6
console.log("\nPart 6:");
for (var i = arbitraryString.length - 1; i >= 0; i--){
        switch (arbitraryString[i]){
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                case 'y':
                break;
                default: reversedStringNoVowels += arbitraryString[i];
        }
	reversedString += arbitraryString[i];
}
console.log("\n" + reversedString );
console.log(reversedStringNoVowels);

//Part 7
console.log("\nPart 7:");
for (var i = 1; i <= 20; i++){
	if ((i % 5 === 0) && (i % 3 === 0)){output = "Fizz Buzz"}
	else if (i % 3 === 0){output = "Fizz"}
	else if (i % 5 === 0){output = "Buzz"}
	else {output = i};

	console.log(output)
}




