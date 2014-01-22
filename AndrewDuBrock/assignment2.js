//Javascript Assignment 2
//Andrew DuBrock

//Part 1
if (true) {console.log("JavaScript is awesome!")};

//Part 2
var i = 1;
while (i < 11) {
  console.log(i);
  i += 1;
} 

//Part 3
for (var i = 1; i < 11; i += 1) {
  console.log(i);
}

//Part 4
var cheese = "Gruyere";

if (cheese.length > 8) {
  console.log("That must be some stinky cheese!");
}
else {
  console.log("That cheese might taste nice on some pizza!");
}

//Part 5
var pizzaSize = 23

if (pizzaSize > 18) {
  for (var z = 1; z < 4; z += 1) {
    console.log("That was an excellent slice from a " + pizzaSize + "-inch pizza!");
  }
}

else if (pizzaSize >= 8 && pizzaSize <= 18) {
  for (var x = 1; x < 6; x += 1) {
    console.log("That was a decent slice from a " + pizzaSize + "-inch pizza!");
  }
}

else {
  console.log("That " + pizzaSize + "-inch pizza was just too small!")
}

//Part 6
var str = "This rambling string doesn't know where it's going or where it's been. Yeah, yeah, yeah!";
var output = "";
var c;
 
 
for (var i = str.length - 1; i >= 0; i--) {
  c = str[i].toLowerCase();
  if (c !== 'a' && c !== 'e' && c !== 'i' && c !== 'o' && c !== 'u' && c !== 'y') {
    output += str[i]; 
  }
}
 
console.log(output);

//Part 7
for (var i = 1; i < 21; i += 1 ) {
  if (i % 3 === 0 && i % 5 === 0)
    console.log("FizzBuzz");
  if (i % 3 === 0)
    console.log("Fizz");
  else if (i % 5 === 0)
    console.log("Buzz")
  else 
    console.log(i);
}

