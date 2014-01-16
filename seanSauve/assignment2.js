//Sean Sauve
//assignment 2
//Javascript Winter Course
//Portland Code School

//PART 1

var likeJava = true;
if (likeJava === true) console.log("Javascript is awesome");

//PART 2

var i = 1;
console.log("WHILE LOOP COUNT:");
while (i <=10){
	console.log(i);
	++i;
}

//PART 3

console.log("FOR LOOP COUNT:");
for(i = 1; i<=10; ++i){
	console.log(i);
}

//PART 4

console.log("LETS GET CHEESEY:");
var cheese ="gouda";
if (cheese.length > 8){
	console.log("that must be some stinky cheese!");
}else{
	console.log("That cheese might taste nice on some pizza!");
}

//PART 5

var pizzaSize =19;
if (pizzaSize <=8){
	console.log("That pizza was just too small");
} else{
	if(pizzaSize > 18) i=3;
	else i =5;
	while (i>0){
		console.log("I just ate a slice of a", pizzaSize, "inch pizza!");//I don't get out much
		--i;
	}
}
//PART 6

console.log("WORD REVERSAL:");
var word = "abcdefghijklmnopqrstuvwxyz";
var reversed = "";
for (var i = word.length-1; i >= 0; i--){
	switch (word[i]){
		case 'a':
		case 'e':
		case 'i':
		case 'o':
		case 'u':
		case 'y':
		break;
		default: reversed += word[i];
	}

}
console.log(word, "reversed without vowels is", reversed);
//test to see if this will work:
console.log("ALTERNATIVE USING FOR/IN LOOP:");
word = "supercalifragilisticexpialidocious"
reversed = "";
for (i in word){
	switch (word[i]){
		case 'a':
		case 'e':
		case 'i':
		case 'o':
		case 'u':
		case 'y':
		break;
		default: reversed = word[i] + reversed;
	}

}
console.log(word, "reversed without vowels is", reversed);

//PART 7

console.log("LETS PLAY FIZZBUZZ:");
var print;
for (i = 1; i<= 20; ++i){
	print = i;
	if (i % 3 === 0){
		print = "Fizz";
	} else if (i % 5 === 0){
		print = "Buzz";
	}
	if (i % 3 === 0 && i % 5 ===0) {
		print = "FizzBuzz";
	}
	console.log(print);
}
