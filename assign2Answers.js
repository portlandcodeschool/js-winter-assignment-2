//PART 1

if (true) {
  console.log("Javascript is awesome");
}

//PART 2

var i = 1;
while (i <= 10) {
  console.log(i);
  i = i + 1;
}

//PART 3

for (var i = 1; i <= 10 ; i = i + 1){
  console.log(i);
}

//PART 4

var cheese = "Allgauer Emmentaler";

if (cheese.length > 8){
  console.log("that must be some stinky cheese!");
} else {
  console.log("That cheese might taste nice on some pizza!");
}

//PART 5

var pizzaSize = 9;

if (pizzaSize > 8){
  if (pizzaSize <= 18){
    for (var i = 0; i <= 4; i += 1) {
      console.log("I just ate a slice of a " + pizzaSize + " inch pizza");
    }
  } else if (pizzaSize > 18){
    for (var i = 0; i <= 2; i += 1) {
      console.log("I just ate a slice of a " + pizzaSize + " inch pizza");
    }
  }
} else {
  console.log("That pizza was just too small");
}

//PART 6

var str = "I am the very model of a modern major general!";
var output = "";
var c;
 
 
for (var i = str.length - 1; i >= 0; i--) {
  c = str[i].toLowerCase();
  if (c !== 'a' && c !== 'e' && c !== 'i' && c !== 'o' && c !== 'u') {
    output += str[i];
  }
}
 
console.log(output);


//PART 7

for (i=1; i<=20; i++) { 
  if (i % 3 === 0 && i % 5 === 0 ){
  // if the number is divisible by both 3 and 5, write "FizzBuzz"
    console.log("FizzBuzz");
  }
  // if the number is divisible by 3, write "Fizz"
  else if ( i % 3 === 0 ) {
    console.log("Fizz");
  } else if ( i % 5 === 0)
 
  // if the number is divisible by 5, write "Buzz"
  {
    console.log("Buzz");
  }
  
  // otherwise, write just the number
  else {
    console.log(i);
  }
}