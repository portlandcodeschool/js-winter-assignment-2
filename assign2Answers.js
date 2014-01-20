//write an "if" statement that prints this message to the console: "Javascript is awesome"

if (true) {
  console.log("Javascript is awesome");
}

//

var i = 1;
while (i <= 10) {
  console.log(i);
  i = i + 1;
}

//write a for loop that does the exact same thing as the previous while loop

for (var i = 1; i <= 10 ; i = i + 1){
  console.log(i);
}

//create a variable called cheese and set it equal to any name of cheese that you like. If you need help, go to [cheese.com](http://www.cheese.com/alphabetical/)
//create an if else statement that tests for whether or not the name of cheese is longer than 8 characters. If the cheese is longer than eight characters, print "that must be some stinky cheese!" to the console. Otherwise, print "That cheese might taste nice on some pizza!" to the console. 

var cheese = "Allgauer Emmentaler";

if (cheese.length > 8){
  console.log("that must be some stinky cheese!");
} else {
  console.log("That cheese might taste nice on some pizza!");
}


//prompt here

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

// Fizzbuzz

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