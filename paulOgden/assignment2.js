//Paul Ogden
//Assignment 2

//Part 1
if ((10 / 2) === 5)
  console.log ("Javascript is awesome!");

//Part 2
var i = 0;
while (i < 11){
  console.log (i);
  i++
  }

//Part 3
for (var j = 0; j < 11; j++){
  console.log(j);
  }

//Part 4
var cheese = "Munster";
if (cheese.count > 8){
  console.log("That must be a stinky cheese.")
  }else{
    console.log("That cheese must taste nice on a pizza.")
  }

//Part 5
var pizzaSize = 18
if (pizzaSize < 18)
  {console.log("That pizza was just too small.")}
else if (pizzaSize > 9 & pizzaSize < 18)
  {for (var j = 1; j < 6; j++)
    console.log(pizzaSize)}
else if (pizzaSize >= 18)
  {for (var j = 1; j < 4; j++)
    console.log(pizzaSize)}

//Part 6

function devowelReverser (string){
var output = "";
var c;

for (var i = string.length - 1; i >= 0; i--) {
  var chance = Math.floor(Math.random()*10); 
  c = string[i].toLowerCase();
  if (c !== 'a' && c !== 'e' && c !== 'i' && c !== 'o' && c !== 'u' && c !== 'y') {
    output += string[i];
    }
  else if (chance >= 5 && c === 'y') {
    output += string[i];
    }
  }
  return output
}

console.log(devowelReverser("How much wood could a woodchuck chuck if a woodchuck could chuck wood"));

//Part 7
for (var i = 1; i < 21; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  }else if (i % 3 === 0){
  console.log("Fizz");
  }else if (i % 5 === 0){
  console.log("Buzz");
  }else{  
      console.log(i);
  }
}
