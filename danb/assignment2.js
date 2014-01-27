// JavaScript, Assignment-2



// Part 1
if (true) {
        console.log("Javascript is awesome.");
}



// Part 2
var x = 1;
while (x < 11) {
        console.log(x);
        x += 1;
}



// Part 3
for        (var x = 1; x !== 11; x += 1) {
                console.log(x);
        } 



// Part 4
var cheese = "manchego";
if (cheese.length > 8) {
        console.log("Dang, that cheese stinky.");
} else {
        console.log("That cheese would be mighty nice on some pizza!");
}



// Part 5
var pizzaSize = 7;
var slices = 1;
var mmmPizza = "I just ate a slice of a " + pizzaSize + "\" pizza.";

if (pizzaSize > 8 && pizzaSize < 19) { 
        do {
                console.log(mmmPizza);
                slices +=1;
        } while (slices < 6);
} else if (pizzaSize > 18) {
        do {
                console.log(mmmPizza);
                slices +=1;
        } while (slices < 4);
} else if (pizzaSize < 9) {
                console.log("That pizza is too small. What is this? A pizza for ants?");
        }



// Part 6
var fav = "I like JavaScript language!"
var output = "";
for(var x = (fav.length-1); j>=0; j--){
        if (fav[x]!=="a" && fav[x]!=="e" && fav[x]!=="i" && fav[x]!=="o" && fav[x]!=="u"){
                output += fav[x];
        }
}
console.log(output);



// Part 7
var i = 1
for(i = 1; i !==21; i ++) {
        if (i % 3 === 0 && i % 5 === 0 ) {
                console.log('FizzBuzz');
        }
        else if (i % 3 === 0) {
                console.log('Fizz');
        } 
        else if (i % 5 ===0) {
                console.log('Buzz');
        } else {
        console.log(i);
        }
}
